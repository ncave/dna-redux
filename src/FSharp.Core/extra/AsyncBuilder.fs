// source: https://github.com/rspeele/TaskBuilder.fs
//
// TaskBuilder.fs - TPL task computation expressions for F#
//
// Written in 2016 by Robert Peele (humbobst@gmail.com)
//
// To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights
// to this software to the public domain worldwide. This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along with this software.
// If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

namespace Microsoft.FSharp.Control
open System
open System.Threading.Tasks
open System.Runtime.CompilerServices
open Microsoft.FSharp.Collections
open Microsoft.FSharp.Core
open Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicOperators

// Represents the state of a computation:
// either awaiting something with a continuation,
// or completed with a return value.
[<NoEquality; NoComparison>]
type Step<'a> =
    | Await of ICriticalNotifyCompletion * (unit -> Step<'a>)
    | Return of 'a
    // We model tail calls explicitly, but still can't run them without O(n) memory usage.
    | ReturnFrom of Task<'a>

module private TaskBuilderImpl =

    // Implements the machinery of running a `Step<'m, 'm>` as a task returning a continuation task.
    type StepStateMachine<'a>(firstStep) as this =
        let methodBuilder = AsyncTaskMethodBuilder<Task<'a>>()
        // The continuation we left off awaiting on our last MoveNext().
        let mutable continuation = fun () -> firstStep
        // Returns next pending awaitable or null if exiting (including tail call).
        let nextAwaitable() =
            try
                match continuation() with
                | Return r ->
                    methodBuilder.SetResult(Task.FromResult(r))
                    null
                | ReturnFrom t ->
                    methodBuilder.SetResult(t)
                    null
                | Await (await, next) ->
                    continuation <- next
                    await
            with
            | exn ->
                methodBuilder.SetException(exn)
                null

        let mutable self = this

        // Start execution as a `Task<Task<'a>>`.
        member __.Run() =
            methodBuilder.Start(&self)
            methodBuilder.Task
    
        interface IAsyncStateMachine with
            // Proceed to one of three states: result, failure, or awaiting.
            // If awaiting, MoveNext() will be called again when the awaitable completes.
            member __.MoveNext() =
                let mutable await = nextAwaitable()
                if not (isNull await) then
                    // Tell the builder to call us again when this thing is done.
                    methodBuilder.AwaitUnsafeOnCompleted(&await, &self)
            member __.SetStateMachine(_) = () // Doesn't really apply since we're a reference type.

    let unwrapException (agg : AggregateException) =
        let inners = agg.InnerExceptions
        if inners.Count = 1 then inners.[0]
        else agg :> Exception

    // Used to represent no-ops like the implicit empty "else" branch of an "if" expression.
    let zero = Return ()

    // Used to return a value.
    let inline ret (x : 'a) = Return x

    // type Binder<'out> =
    //     // We put the output generic parameter up here at the class level, so it doesn't get subject to
    //     // inline rules. If we put it all in the inline function, then the compiler gets confused at the
    //     // below and demands that the whole function either is limited to working with (x : obj), or must
    //     // be inline itself.
    //     //
    //     // let yieldThenReturn (x : 'a) =
    //     //     task {
    //     //         do! Task.Yield()
    //     //         return x
    //     //     }

    //     static member inline GenericAwait< ^abl, ^awt, ^inp
    //                                         when ^abl : (member GetAwaiter : unit -> ^awt)
    //                                         and ^awt :> ICriticalNotifyCompletion 
    //                                         and ^awt : (member get_IsCompleted : unit -> bool)
    //                                         and ^awt : (member GetResult : unit -> ^inp) >
    //         (abl : ^abl, continuation : ^inp -> 'out Step) : 'out Step =
    //             let awt = (^abl : (member GetAwaiter : unit -> ^awt)(abl)) // get an awaiter from the awaitable
    //             if (^awt : (member get_IsCompleted : unit -> bool)(awt)) then // shortcut to continue immediately
    //                 continuation (^awt : (member GetResult : unit -> ^inp)(awt))
    //             else
    //                 Await (awt, fun () -> continuation (^awt : (member GetResult : unit -> ^inp)(awt)))

    // // Special case of the above for `Task<'a>`. Have to write this out by hand to avoid confusing the compiler
    // // trying to decide between satisfying the constraints with `Task` or `Task<'a>`.
    // let inline bindTask (task : Task<'a>) (continuation : 'a -> Step<'b>) =
    //     let awt = task.GetAwaiter()
    //     if awt.IsCompleted then // Proceed to the next step based on the result we already have.
    //         continuation(awt.GetResult())
    //     else // Await and continue later when a result is available.
    //         Await (awt, (fun () -> continuation(awt.GetResult())))

    let rec bindStep (step: Step<'a>) (continuation: 'a -> Step<'b>) =
        match step with
        | Return x -> continuation(x)
        | ReturnFrom t ->
            let awt = t.GetAwaiter()
            if awt.IsCompleted then // Proceed to the next step based on the result we already have.
                continuation(awt.GetResult())
            else // Await and continue later when a result is available.
                Await (awt, (fun () -> continuation(awt.GetResult())))
        | Await (awt, next) ->
            Await (awt, (fun () -> bindStep (next()) continuation))

    // Chains together a step with its following step.
    // Note that this requires that the first step has no result.
    // This prevents constructs like `task { return 1; return 2; }`.
    let rec combine (step : Step<unit>) (continuation : unit -> Step<'b>) =
        match step with
        | Return _ -> continuation()
        | ReturnFrom t ->
            Await (t.GetAwaiter(), continuation)
        | Await (awaitable, next) ->
            Await (awaitable, fun () -> combine (next()) continuation)

    // Builds a step that executes the body while the condition predicate is true.
    let whileLoop (cond : unit -> bool) (body : unit -> Step<unit>) =
        if cond() then
            // Create a self-referencing closure to test whether to repeat the loop on future iterations.
            let rec repeat () =
                if cond() then
                    let body = body()
                    match body with
                    | Return _ -> repeat()
                    | ReturnFrom t -> Await(t.GetAwaiter(), repeat)
                    | Await (awaitable, next) ->
                        Await (awaitable, fun () -> combine (next()) repeat)
                else zero
            // Run the body the first time and chain it to the repeat logic.
            combine (body()) repeat
        else zero

    // Wraps a step in a try/with. This catches exceptions both in the evaluation of the function
    // to retrieve the step, and in the continuation of the step (if any).
    let rec tryWith(step : unit -> Step<'a>) (catch : exn -> Step<'a>) =
        try
            match step() with
            | Return _ as i -> i
            | ReturnFrom t ->
                let awaitable = t.GetAwaiter()
                Await(awaitable, fun () ->
                    try
                        awaitable.GetResult() |> Return
                    with
                    | exn -> catch exn)
            | Await (awaitable, next) -> Await (awaitable, fun () -> tryWith next catch)
        with
        | exn -> catch exn

    // Wraps a step in a try/finally. This catches exceptions both in the evaluation of the function
    // to retrieve the step, and in the continuation of the step (if any).
    let rec tryFinally (step : unit -> Step<'a>) fin =
        let step =
            try step()
            // Important point: we use a try/with, not a try/finally, to implement tryFinally.
            // The reason for this is that if we're just building a continuation, we definitely *shouldn't*
            // execute the `fin()` part yet -- the actual execution of the asynchronous code hasn't completed!
            with
            | _ ->
                fin()
                reraise()
        match step with
        | Return _ as i ->
            fin()
            i
        | ReturnFrom t ->
            let awaitable = t.GetAwaiter()
            Await(awaitable, fun () ->
                let result =
                    try
                        awaitable.GetResult() |> Return
                    with
                    | _ ->
                        fin()
                        reraise()
                fin() // if we got here we haven't run fin(), because we would've reraised after doing so
                result)
        | Await (awaitable, next) ->
            Await (awaitable, fun () -> tryFinally next fin)

    // Implements a using statement that disposes `disp` after `body` has completed.
    let inline using (disp : #IDisposable) (body : _ -> Step<'a>) =
        // A using statement is just a try/finally with the finally block disposing if non-null.
        tryFinally
            (fun () -> body disp)
            (fun () -> if not (isNull (box disp)) then disp.Dispose())

    // Implements a loop that runs `body` for each element in `sequence`.
    let forLoop (sequence : 'a seq) (body : 'a -> Step<unit>) =
        // A for loop is just a using statement on the sequence's enumerator...
        using (sequence.GetEnumerator())
            // ... and its body is a while loop that advances the enumerator and runs the body on each element.
            (fun e -> whileLoop e.MoveNext (fun () -> body e.Current))

    // Runs a step as a task -- with a short-circuit for immediately completed steps.
    let runAsTask (firstStep : unit -> Step<'a>) =
        try
            match firstStep() with
            | Return x -> Task.FromResult(x)
            | ReturnFrom t -> t
            | Await _ as step -> StepStateMachine<'a>(step).Run().Unwrap() // sadly can't do tail recursion
        // Any exceptions should go on the task, rather than being thrown from this call.
        // This matches C# behavior where you won't see an exception until awaiting the task,
        // even if it failed before reaching the first "await".
        with
        | exn ->
            let src = new TaskCompletionSource<_>()
            src.SetException(exn)
            src.Task

open TaskBuilderImpl

[<Sealed>]
[<CompiledName("FSharpAsyncBuilder")>]
type AsyncBuilder() =
    member __.Delay(f : unit -> Step<_>) = f //fun () -> f ()
    member __.Run(f : unit -> Step<'m>) = f () //runAsTask f
    member __.Zero() = zero
    member __.Return(x) = ret x
    // member __.ReturnFrom(task: Task<_>) = ReturnFrom task
    member __.ReturnFrom(x: Step<_>) = x
    member __.Combine(step: Step<unit>, continuation) = combine step continuation
    member __.While(condition: unit -> bool, body: unit -> Step<unit>) = whileLoop condition body
    member __.For(sequence: seq<_>, body: _ -> Step<unit>) = forLoop sequence body
    member __.TryWith(body: unit -> Step<_>, catch: exn -> Step<_>) = tryWith body catch
    member __.TryFinally(body: unit -> Step<_>, fin: unit -> unit) = tryFinally body fin
    member __.Using(disp: #IDisposable, body: #IDisposable -> Step<_>) = using disp body

    member __.Bind(step : Step<'a>, continuation : 'a -> Step<'b>) : Step<'b> = bindStep step continuation

// // Builds a `System.Threading.Tasks.Task<'a>` similarly to a C# async/await method.
// // Use this like `async { let! taskResult = someTask(); return taskResult.ToString(); }`.
// module AsyncImpl = 
//     let async = AsyncBuilder()

[<CompiledName("FSharpAsync`1")>]
type Async<'T> = Step<'T>

[<Sealed>]
[<CompiledName("FSharpAsync")>]
type Async() =
    static member RunSynchronously (computation: Async<'T>): 'T = Async.StartAsTask(computation).Result
    static member Start (computation: Async<unit>): unit = runAsTask (fun () -> computation) |> ignore
    static member StartAsTask (computation: Async<'T>): Task<'T> = runAsTask (fun () -> computation)
    // static member StartChild (computation: Async<'T>): Async<Async<'T>> = async { return computation }
    // static member StartChildAsTask (computation: Async<'T>): Async<Task<'T>> = async { return StartAsTask computation }
    // static member AwaitTask (task: Task<'T>): Async<'T> = async { return ReturnFrom task }
    // static member AwaitTask (task: Task): Async<unit> = async { return ReturnFrom task }
    static member Sleep (millisecondsDueTime: int): Async<unit> = Task.Delay(millisecondsDueTime).ContinueWith(ignore) |> ReturnFrom
    static member StartImmediate (computation: Async<unit>): unit = runAsTask (fun () -> computation) |> ignore

namespace AppFS
open System
open System.Threading.Tasks
open LibFS.Library

module Program =

    let testFunctions () =
        let cw (fmt: string) f x =
            let result, elapsed = measure f x
            Console.Write(fmt, x, result)
            Console.WriteLine(", elapsed: {0:f3} sec", elapsed)

        GC.Collect()
        Console.WriteLine("GC.CollectionCount={0}, GC.TotalMemory={1}", GC.CollectionCount(0), GC.GetTotalMemory(false))

        let n = 30;
        let sum n = [1..n] |> List.fold (+) 0
        let fibSeq n = fibSequence |> Seq.item (n+1)
        cw "sum(1..{0}) = {1}" sum n
        cw "sqr({0}) = {1}" sqr (double n)
        cw "fastFib({0}) = {1}" fastFib n
        cw "slowFib({0}) = {1}" slowFib n
        cw "memoFib({0}) = {1}" memoizedFib n
        cw "fib_Seq({0}) = {1}" fibSeq n

        let x,y = 100,100
        cw "RayTrace {0} = {1}" (fun (x,y) -> RayTrace.computeScene x y) (x,y)

        GC.Collect()
        Console.WriteLine("GC.CollectionCount={0}, GC.TotalMemory={1}", GC.CollectionCount(0), GC.GetTotalMemory(false))


    module Async =
        let RunSynchronously (t: Task<_>) = t.Wait() // not actually waiting yet
        let Sleep (dueTime: int) = Task.Delay(dueTime)

    let async = FSharp.Control.Tasks.TaskBuilder()

    let testWorkflows () =

        let getChildWorkflow () = async {
            printfn "Starting child workflow"
            do! Async.Sleep 500
            printfn "Finished child workflow"
        }
        let getParentWorkflow () = async {
            printfn "Starting parent workflow"
            let childWorkflow = getChildWorkflow ()
            do! Async.Sleep 200
            printfn "Did something useful while waiting"
            let! result = childWorkflow
            printfn "Finished parent workflow"
        }
        // run the parent workflow
        Async.RunSynchronously (getParentWorkflow ())


    [<EntryPoint>]
    let main argv =
        hello "World"

        // printfn (almost) works now!!! (not working yet: %f, %A with value type)
        printfn "The %s is: %A" "answer" (box 42)

        testFunctions ()
        // testWorkflows ()

        0 // return an integer exit code

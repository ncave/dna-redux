namespace AppFS
open System
open LibFS.Library
// open FSharp.Control.Tasks

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


    // let testWorkflows () =
    //     let childWorkflow = async {
    //         printfn "Starting child workflow"
    //         // do! Async.Sleep 500
    //         printfn "Finished child workflow"
    //     }
    //     let parentWorkflow = async {
    //         printfn "Starting parent workflow"
    //         let childTask = childWorkflow
    //         // do! Async.Sleep 200
    //         printfn "Did something useful while waiting"
    //         let! result = childTask
    //         printfn "Finished parent workflow"
    //     }
    //     // run the parent workflow
    //     Async.RunSynchronously parentWorkflow // not actually waiting in DNA (no Task.Wait() yet)


    [<EntryPoint>]
    let main argv =

        // let s = sprintf "%s%s%s%s%s" "a" "b" "c" "d" "e"
        // System.Console.WriteLine("result: {0}", s)

        hello "World"

        // printfn works now!!!
        printfn "The %s is: %d" "answer" 42

        testFunctions ()
        // testWorkflows ()

        0 // return an integer exit code

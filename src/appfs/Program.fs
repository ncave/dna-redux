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

        let n = 31;
        cw "sum(1..{0}) = {1}" sum_to_n n
        cw "sqr({0}) = {1}" sqr (double n)
        cw "fastFib({0}) = {1}" fastFib n
        cw "slowFib({0}) = {1}" slowFib n
        cw "memoFib({0}) = {1}" memoFib n
        cw "cps_Fib({0}) = {1}" cps_Fib n
        cw "seq_Fib({0}) = {1}" seq_Fib n

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

        hello "World"

        // sprintf works
        let s = sprintf "%d,%s,%.0f,%d,%s" 1 "2" 3.0 4L "5"
        System.Console.WriteLine("Numbers: {0}", s)

        // printfn works
        printfn "The %s is: %d" "answer" 42

        testFunctions ()
        // testWorkflows ()

        0 // return an integer exit code

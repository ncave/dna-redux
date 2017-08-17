namespace AppFS
open System
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

    // let testWorkflows () =
    //     let childWorkflow = async {
    //         printfn "Starting child workflow"
    //         do! Async.Sleep 2000
    //         printfn "Finished child workflow"
    //     }
    //     let parentWorkflow = async {
    //         printfn "Starting parent workflow"
    //         let! childWorkflow = Async.StartChild childWorkflow
    //         do! Async.Sleep 100
    //         printfn "Doing something useful while waiting"
    //         let! result = childWorkflow // blocks until done
    //         printfn "Finished parent workflow"
    //     }
    //     // run the parent workflow
    //     Async.RunSynchronously parentWorkflow

    [<EntryPoint>]
    let main argv =
        // printfn works now!!! (%s, %d, %O works, but not %A yet)
        hello "World"

        testFunctions ()
        // testWorkflows ()

        0 // return an integer exit code

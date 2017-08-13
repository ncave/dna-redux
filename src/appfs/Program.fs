namespace AppFS
open System
open LibFS.Library

module Program =

    [<EntryPoint>]
    let main argv =
        let cw (fmt: string) f x =
            let result, elapsed = measure f x
            Console.Write(fmt, x, result)
            Console.WriteLine(", elapsed: {0:f3} sec", elapsed)

        GC.Collect()
        Console.WriteLine("GC.CollectionCount={0}, GC.TotalMemory={1}", GC.CollectionCount(0), GC.GetTotalMemory(false))

        hello "World" // using Console.Write

        let n = 30;
        let sum n = [1..n] |> List.fold (+) 0
        cw "sum(1..{0}) = {1}" sum n
        cw "sqr({0}) = {1}" sqr (double n)
        cw "fastFib({0}) = {1}" fastFib n
        cw "slowFib({0}) = {1}" slowFib n
        cw "memoFib({0}) = {1}" memoizedFib n
        // cw "fibSequence({0}) = {1}" (fun i -> fibSequence |> Seq.item i) n

        let x,y = 100,100
        cw "RayTrace {0} = {1}" (fun (x,y) -> RayTrace.computeScene x y) (x,y)

        GC.Collect()
        Console.WriteLine("GC.CollectionCount={0}, GC.TotalMemory={1}", GC.CollectionCount(0), GC.GetTotalMemory(false))

        // printfn works too !!!
        printfn "Hello from %s %s %d" "Deep" "Space" 9

        0 // return an integer exit code

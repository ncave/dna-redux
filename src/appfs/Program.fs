namespace AppFS
open System
open LibFS.Library

module Program =

    [<EntryPoint>]
    let main argv =
        // let sum = [1;2;3] |> List.fold (+) 0
        // Console.WriteLine("sum = {0}", sum)
        hello "World"
        // note: printfn is not working yet (no System.Reflection.Emit)
        // printfn "Hello from %s" "Space!"
        let n = 30;
        Console.WriteLine("sqr({0}) = {1}", n, sqr (double n))
        Console.WriteLine("fastFib({0}) = {1}", n, fastFib n)
        Console.WriteLine("slowFib({0}) = {1}", n, slowFib n)
        Console.WriteLine("memoizedFib({0}) = {1}", n, memoizedFib n)
        // Console.WriteLine("fibSequence({0}) = {1}", n, fibSequence |> Seq.item n)
        // let colors = measure RayTrace.computeScene 100 100
        0 // return an integer exit code

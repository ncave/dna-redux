namespace AppFS
open System
open LibFS.Library

module Program =

    [<EntryPoint>]
    let main argv =
        hello "World"
        // note: printfn is not working yet (no System.Reflection.Emit)
        // printfn "Hello from %s" "Space!"
        let n = 30;
        let sum = [1..n] |> List.fold (+) 0
        Console.WriteLine("sum(1..{0}) = {1}", n, sum)
        Console.WriteLine("sqr({0}) = {1}", n, sqr (double n))
        Console.WriteLine("fastFib({0}) = {1}", n, fastFib n)
        Console.WriteLine("slowFib({0}) = {1}", n, slowFib n)
        Console.WriteLine("memoFib({0}) = {1}", n, memoizedFib n)
        // Console.WriteLine("fibSequence({0}) = {1}", n, fibSequence |> Seq.item n)
        let x,y = 50,50
        let colors, elapsed = measure RayTrace.computeScene x y
        Console.WriteLine("RayTrace({0},{1}) = {2:f3} sec (to compute)", x, y, elapsed)
        0 // return an integer exit code

namespace AppFS
open System
open LibFS.Library

module Program =
    [<EntryPoint>]
    let main argv =
        LibFS.Library.hello "World"
        let n = 10;
        Console.WriteLine("sqr({0}) = {1}", n, sqr n)
        // Console.WriteLine("fastFib({0}) = {1}", n, [1..n] |> List.map fastFib)
        // Console.WriteLine("slowFib({0}) = {1}", n, [1..n] |> List.map slowFib)
        // Console.WriteLine("memoizedFib({0}) = {1}", n, [1..n] |> List.map memoizedFib)
        // Console.WriteLine("sequenceFib({0}) = {1}", n, sequenceFib |> Seq.take n |> List.ofSeq)
        0 // return an integer exit code

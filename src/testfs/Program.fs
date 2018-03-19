namespace TestFS
open System
open System.Collections
open System.Collections.Generic

module Program =

    [<EntryPoint>]
    let main argv =

        [1L..10L]
        |> Seq.map (fun x -> (x, (x*x)) |> Seq.singleton)
        |> Seq.concat
        |> Seq.map id
        |> Seq.iter (fun x -> Console.WriteLine(x))

        0 // return an integer exit code

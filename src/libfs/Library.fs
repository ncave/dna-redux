#nowarn "40"
namespace LibFS
open System
open System.Collections.Generic

module Library =

    let measure f x =
        let dtStart = DateTime.UtcNow
        let result = f x
        let elapsed = DateTime.UtcNow - dtStart
        result, elapsed.TotalSeconds

    let hello name =
        printfn "Hello %s from F#!" name

    let sqr (x: double) = x * x

    let Sqr descriptor =
        JS.Interop.Promise.From (descriptor, fun arg ->
            let x = arg :?> double
            sqr x
        )

    let fastFib n =
      let sqrt5 = sqrt 5.0
      let a = (1.0 + sqrt5) / 2.0
      let b = (1.0 - sqrt5) / 2.0
      let power = float (n+1)
      let result = ((a ** power) - (b ** power)) / sqrt5
      int (round result)

    let rec slowFib n =
        match n with
        | 0 -> 1
        | 1 -> 1
        | _ -> slowFib (n - 1) + slowFib (n - 2)

    let memoizedFib =
        let dict = new Dictionary<int, int>()
        fun n ->
            if dict.ContainsKey n then dict.[n]
            else
                let result = slowFib n
                dict.Add(n, result)
                result

    let rec fibSequence = seq {
        yield! [0; 1]
        yield! fibSequence
            |> Seq.pairwise
            |> Seq.map (fun (prev, next) -> prev + next)
        }

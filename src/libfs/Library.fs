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

    let sum_to_n n = [1..n] |> List.fold (+) 0

    let Sqr descriptor =
        JS.Interop.Promise.From (descriptor, fun arg ->
            let x = arg :?> double
            sqr x
        )

    let fastFib n =
      let sqrt5 = sqrt 5.0
      let a = (1.0 + sqrt5) / 2.0
      let b = (1.0 - sqrt5) / 2.0
      let power = float n
      let result = ((a ** power) - (b ** power)) / sqrt5
      int (round result)

    let rec slowFib n =
        match n with
        | 0 -> 0
        | 1 -> 1
        | _ -> slowFib (n - 1) + slowFib (n - 2)

    let memoFib =
        let dict = new Dictionary<int, int>()
        fun n ->
            if dict.ContainsKey n then dict.[n]
            else
                let result = slowFib n
                dict.Add(n, result)
                result

    let cps_Fib n =
        let rec fib_cont a cont =
            if a <= 2 then cont 1
            else fib_cont (a - 2) (fun x -> fib_cont (a - 1) (fun y -> cont(x + y)))
        fib_cont n (fun x -> x)

    let seq_Fib n =
        let rec fib_seq = seq {
            yield! [0; 1]
            yield! fib_seq
                |> Seq.pairwise
                |> Seq.map (fun (prev, next) -> prev + next)
        }
        fib_seq |> Seq.item n

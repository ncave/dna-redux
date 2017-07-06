open System

[<EntryPoint>]
let main argv =
    let sqr x = x * x
    Console.WriteLine("x = {0}, sqr(x) = {1}", 5, (sqr 5))
    Console.WriteLine("Hello World from F#!")
    // printfn "Hello %s from F#!" "Earth" // WIP: this is still crashing
    0 // return an integer exit code

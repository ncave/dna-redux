namespace AppFS
open System

module Program =
    [<EntryPoint>]
    let main argv =
        LibFS.Lib.hello "World"
        0 // return an integer exit code

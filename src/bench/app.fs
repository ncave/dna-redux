module App

let use_net45_meta = false
let references = Metadata.references use_net45_meta
let metadataPath =
    if use_net45_meta
    then "/temp/repl/metadata/"  // dotnet 4.5 binaries
    else "/temp/repl/metadata2/" // dotnet core 2.0 binaries

let readAllBytes = fun (fileName:string) -> System.IO.File.ReadAllBytes (metadataPath + fileName)
let readAllText = fun (filePath:string) -> System.IO.File.ReadAllText (filePath, System.Text.Encoding.UTF8)

let measureTime (f: 'a -> 'b) x =
    let startTime = System.DateTime.UtcNow
    let res = f x
    let elapsed = int64 (System.DateTime.UtcNow - startTime).TotalMilliseconds
    elapsed, res

let benchCompile fileName iterations =
    let source = readAllText fileName
    let fable = Fable.JS.Main.defaultManager
    let createChecker () = fable.CreateChecker(references, readAllBytes)
    let ms0, checker = measureTime createChecker ()
    printfn "InteractiveChecker created in %d ms" ms0
    let fableCoreDir = "../../../../build/fable-core"
    let com = fable.CreateCompiler(fableCoreDir)
    let optimized = false // todo: from compiler option
    let parseFSharp () = fable.ParseFSharpProject(checker, fileName, source)
    let parseFable ast = fable.CompileToBabelAst(com, ast, fileName, optimized)
    let bench i =
        let ms1, fcsAst = measureTime parseFSharp ()
        let ms2, babelAst = measureTime parseFable fcsAst
        printfn "iteration %d, FCS time: %d ms, Fable time: %d ms" i ms1 ms2
    [1..iterations] |> List.iter bench

[<EntryPoint>]
let main argv =
    try
        let toISOString (dt: System.DateTime) = dt.ToString("yyyy'-'MM'-'dd HH':'mm':'ss'.'fffK")
        let startTime = System.DateTime.UtcNow
        printfn "Start time: %s" (toISOString startTime)

        let fileName = "test_script.fsx"
        benchCompile fileName 10

        let endTime = System.DateTime.UtcNow
        let elapsed = int64 (endTime - startTime).TotalMilliseconds
        printfn "End time: %s, elapsed: %d ms" (toISOString endTime) elapsed
    with ex ->
        printfn "Error: %A" ex.Message
    0

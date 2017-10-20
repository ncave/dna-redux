open System
open System.IO

let (|>!) a f = f a; a

type UntyStruct = { name    : string
                    fields  : string list }

[<RequireQualifiedAccess>]
type Token =
    | Identifier    of string
    | Number        of int64
    | LSQB
    | RSQB
    | STAR
    | SC

[<RequireQualifiedAccess>]
type Ty =
    | Name          of string
    | Ptr           of Ty
    | Array         of Ty * int64

type Field      = { name    : string
                    ty      : Ty }

type TyStruct   = { name    : string
                    idx     : int
                    tyFields: Field [] }                  

let isAlpha ch =
    match ch with
    | c when (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || ch = '_' -> true
    | _ -> false

let isDigit ch =
    match ch with
    | c when (c >= '0' && c <= '9') -> true
    | _ -> false

let isIdentChar ch =
    match ch with
    | c when c |> isAlpha || c |> isDigit -> true
    | _ -> false

let rec identifier (state: char list) (stream: char list) : (Token * char list) =
    match stream with
    | h :: t when h |> isIdentChar -> identifier (h :: state) t
    | _ -> state
           |> List.rev
           |> List.toArray
           |> String
           |> Token.Identifier
           , stream

let rec number (state: char list) (stream: char list) : (Token * char list) =
    match stream with
    | h :: t when h |> isDigit -> number (h :: state) t
    | _ -> state
           |> List.rev
           |> List.toArray
           |> String
           |> Convert.ToInt64
           |> Token.Number
           , stream

let rec cleanWS (s: char list) : char list =
    match s with
    | ' '  :: t
    | '\t' :: t
    | '\n' :: t
    | '\a' :: t -> cleanWS t
    | _ -> s

let rec nextToken (state: Token list) (stream: char list) : Token list =
    let tok, stream =
        let stream = stream |> cleanWS
        match stream with
        | h :: t when h |> isAlpha      -> identifier   [] stream
        | h :: t when h |> isDigit      -> number       [] stream
        | h :: t when h = '*'           -> Token.STAR,  t
        | h :: t when h = '['           -> Token.LSQB,  t
        | h :: t when h = ']'           -> Token.RSQB,  t
        | h :: t when h = ';'           -> Token.SC,    t
        | _ -> failwith "unhandled token"
    match stream with
    | [] -> (tok :: state) |> List.rev |>! printfn "%A"
    | _  -> nextToken (tok :: state) stream

let tokenizeFieldLine (l: string) =
    l
    |> Seq.toList
    |> nextToken []

let rec consumePrefixType (ty: Ty option) (toks: Token list) : Ty * Token list =
    match ty, toks with
    | None, Token.Identifier i :: t -> consumePrefixType (Some (Ty.Name i)) t
    | Some x, Token.STAR :: t -> consumePrefixType (Some (Ty.Ptr x)) t
    | Some x, toks -> x, toks
    | _ -> failwith "invalid prefix type"

let parseLine (l: string) =
    let toks = l |> tokenizeFieldLine
    let prefixType, toks = consumePrefixType None toks
    match toks with
    | Token.Identifier i :: Token.SC   :: [] -> { name = i; ty = prefixType }
    | Token.Identifier i :: Token.LSQB :: Token.Number n :: Token.RSQB :: Token.SC :: [] -> { name = i; ty = Ty.Array (prefixType, n) }
    | _ -> failwith (sprintf "invalid field: %s" l)

let convertHex (s: string) =
    s.Substring 2
    |> Seq.fold(fun (state: int64) c ->
        let z = '0' |> int64;
        let a = 'a' |> int64;
        let A = 'A' |> int64;
        match c with
        | c when c >= '0' && c <= '9' -> state * 16L + (c |> int64) - z
        | c when c >= 'a' && c <= 'f' -> state * 16L + (c |> int64) - a
        | c when c >= 'A' && c <= 'F' -> state * 16L + (c |> int64) - A
        | _ -> failwith "invalid hex char") 0L

let readTableFile fileName =
    let cleanLines =
        File.ReadAllLines fileName
        |> Array.map (fun l ->
            let trimChars = [|' '; '\t'|]
            (l.TrimStart trimChars).TrimEnd trimChars)

    let tableEntries = 
        cleanLines
        |> Array.filter(fun l -> l.StartsWith "#define")
        |> Array.map(fun l ->
            let toks = l.Split [| ' '; '\t' |]
            toks.[1], (toks.[2] |> convertHex))
        |> Array.map(fun (s, i) ->
            if not (s.StartsWith "MD_TABLE_")
            then failwith "invalid define"
            (s.[9..], i))
        |> Map.ofArray
        |>! printfn "%A"
    
    cleanLines
    |> Array.filter(fun l ->
        (l.StartsWith("#") || l.StartsWith("//") || l.StartsWith("typedef") || l = "")
        |> not)

        // ensure all structs are packed
    |> Array.map(fun l ->
        if (l.StartsWith "struct") && not (l.StartsWith "struct PACKED")
        then failwith (sprintf "%s" l)
        else l)

    |> Array.fold(fun (state: UntyStruct list) (l: string) ->
        match state, l.StartsWith "struct PACKED" with
        | [], false -> failwith "invalid start"
        | s, true ->
            let ll = l.Split [| ' '; '\t' |]
            let name = ll.[2]
            { name = name; fields = [] } :: s
        | h :: t, false ->
            match l with
            | "};" -> state
            | _ -> { h with fields = l :: h.fields } :: t) []

    |> List.map(fun s -> { s with fields = s.fields |> List.rev })
    |> List.rev
    |> List.map(fun (us: UntyStruct) ->
        let n = us.name.[4 .. us.name.Length - 2]
        let idx = tableEntries.[n.ToUpper()] |> int
        { name      = us.name
          idx       = idx
          tyFields  = 
            us.fields
            |> List.map(fun l -> l |> parseLine)
            |> List.toArray})
    //|> List.toArray

let rec parseActionLine (state: char list) (stream: char list) : char list =
    match stream with
    | '\\' :: 'x' :: n1 :: n2 :: t ->
        let i = String [| '0'; 'x'; n1; n2 |] |> convertHex |> Convert.ToChar
        parseActionLine (i :: state) t
    | '\\' :: n1 :: n2 :: t ->
        let i = String [| n1; n2 |] |> Convert.ToInt32 |> Convert.ToChar
        parseActionLine (i :: state) t
    | h :: t -> parseActionLine (h :: state) t
    | [] -> state |> List.rev

    
let readTablesActions fileName =
    let cleanLines =
        File.ReadAllLines fileName
        |> Array.map (fun l ->
            let trimChars = [|' '; '\t'|]
            (l.TrimStart trimChars).TrimEnd trimChars)

    cleanLines
    |> Array.filter(fun l ->
        (l.StartsWith("#") || l.StartsWith("//") || l = "")
        |> not)
    |> Array.mapi(fun i l ->
        i, l.TrimEnd [|','|] )
    |> Array.filter(fun (i, l) -> l <> "NULL")
    |> Array.map(fun (i, l) -> i, (l.Split [| '"' |]).[1])
    |> Array.map (fun (i, l) ->
        i
        , l 
          |> Seq.toList 
          |> parseActionLine [] 
          |> Seq.fold(fun (prevChar: char option, str: (char * char) list) ch ->
              match prevChar with
              | None -> Some ch, str
              | Some s -> None, (s, ch) :: str) (None, [])
          |> snd
          |> List.rev
          |> List.toArray)
    |> Map.ofArray

let validateStruct (m: Map<int, (char * char)[]>) (s: TyStruct) : Map<int, (char * char)[]> =
    printfn "now in struct %s:" s.name
    match m.TryFind s.idx with
    | None   -> m
    | Some l -> 
        let arr =
            l
            |> Array.filter (fun (s, d) -> d <> 'x')

        s.tyFields
        |> Array.mapi (fun i f -> i, f)
        |> Array.fold(fun (state: Map<int, (char * char)[]>) (i, f) ->
            if i < arr.Length
            then
                let o, n = l.[i]
                match f.ty, n  with
                | _, 'x'
                | Ty.Name "STRING", 'p'
                | Ty.Name "BLOB_", 'p'
                | Ty.Name "HEAP_PTR", 'p'
                | Ty.Name "GUID_", 'p'
                | Ty.Name "FLAGS16", 's'
                | Ty.Name "FLAGS32", '*'
                | Ty.Name "IDX_TABLE", '*'
                | Ty.Name "U8", 'c'  
                | Ty.Name "I8", 'c'  
                | Ty.Name "U16", 's' 
                | Ty.Name "I16", 's' 
                | Ty.Name "U32", '*' 
                | Ty.Name "I32", '*' -> m
                | Ty.Name s, c -> printfn "\tfield %s has different destination '%c'" s c
                | Ty.Ptr _, '*' -> printfn "\tfield %s is a pointer" f.name
                | _, _ -> failwith "unsupported"
            else
                printfn "\tfield %s is not covered" f.name) m



[<EntryPoint>]
let main args =
    let tables =
        readTableFile "/home/wael/Projects/personal/dotnet-js/scripts/meta-tables.h"
        |>! printfn "%A"

    let actions =
        readTablesActions "/home/wael/Projects/personal/dotnet-js/scripts/tables-actions.h"
        |>! printfn "%A"
    
    tables
    |> List.iter (validateStruct actions) 

    0
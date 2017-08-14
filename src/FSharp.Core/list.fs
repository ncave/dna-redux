// Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the Apache License, Version 2.0.  See License.txt in the project root for license information.

namespace Microsoft.FSharp.Collections

    open Microsoft.FSharp.Core
    open Microsoft.FSharp.Core.Operators
    open Microsoft.FSharp.Core.LanguagePrimitives
    open Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicOperators
    open Microsoft.FSharp.Collections
    open Microsoft.FSharp.Core.CompilerServices
    open System.Collections.Generic
#if FX_RESHAPED_REFLECTION
    open System.Reflection
#endif

    [<CompilationRepresentation(CompilationRepresentationFlags.ModuleSuffix)>]
    [<RequireQualifiedAccess>]
    module List = 

        let inline indexNotFound() = raise (KeyNotFoundException(SR.GetString(SR.keyNotFoundAlt)))

        [<CompiledName("Length")>]
        let length (list: 'T list) = list.Length
        
        [<CompiledName("Last")>]
        let rec last (list : 'T list) =
            match list with
            | [x] -> x
            | _ :: tail -> last tail
            | [] -> invalidArg "list" (SR.GetString(SR.inputListWasEmpty))

        [<CompiledName("TryLast")>]
        let rec tryLast (list: 'T list) =
            match list with
            | [x] -> Some x
            | _ :: tail -> tryLast tail
            | [] -> None

        [<CompiledName("Reverse")>]
        let rev list = Microsoft.FSharp.Primitives.Basics.List.rev list

        [<CompiledName("Concat")>]
        let concat lists = Microsoft.FSharp.Primitives.Basics.List.concat lists

        let inline countByImpl (comparer:IEqualityComparer<'SafeKey>) (projection:'T->'SafeKey) (getKey:'SafeKey->'Key) (list:'T list) =
            let dict = Dictionary comparer
            let rec loop srcList  =
                match srcList with
                | [] -> ()
                | h::t ->
                    let safeKey = projection h
                    let mutable prev = 0
                    if dict.TryGetValue(safeKey, &prev) then dict.[safeKey] <- prev + 1 else dict.[safeKey] <- 1
                    loop t
            loop list
            Microsoft.FSharp.Primitives.Basics.List.countBy dict getKey

        // We avoid wrapping a StructBox, because under 64 JIT we get some "hard" tailcalls which affect performance
        let countByValueType (projection:'T->'Key) (list:'T list) = countByImpl HashIdentity.Structural<'Key> projection id list

        // Wrap a StructBox around all keys in case the key type is itself a type using null as a representation
        let countByRefType   (projection:'T->'Key) (list:'T list) = countByImpl RuntimeHelpers.StructBox<'Key>.Comparer (fun t -> RuntimeHelpers.StructBox (projection t)) (fun sb -> sb.Value) list

        [<CompiledName("CountBy")>]
        let countBy (projection:'T->'Key) (list:'T list) =
#if FX_RESHAPED_REFLECTION
            if (typeof<'Key>).GetTypeInfo().IsValueType
#else
            if typeof<'Key>.IsValueType
#endif
                then countByValueType projection list
                else countByRefType   projection list

        [<CompiledName("Map")>]
        let map f list = Microsoft.FSharp.Primitives.Basics.List.map f list

        [<CompiledName("MapIndexed")>]
        let mapi f list = Microsoft.FSharp.Primitives.Basics.List.mapi f list

        [<CompiledName("Indexed")>]
        let indexed list = Microsoft.FSharp.Primitives.Basics.List.indexed list

        [<CompiledName("MapFold")>]
        let mapFold<'T,'State,'Result> (f:'State -> 'T -> 'Result * 'State) acc list =
            Microsoft.FSharp.Primitives.Basics.List.mapFold f acc list

        [<CompiledName("MapFoldBack")>]
        let mapFoldBack<'T,'State,'Result> (f:'T -> 'State -> 'Result * 'State) list acc =
            match list with
            | [] -> [], acc
            | [h] -> let h',s' = f h acc in [h'], s'
            | _ ->
                let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
                let rec loop res list =
                    match list, res with
                    | [], _ -> res
                    | h::t, (list', acc') ->
                        let h',s' = f.Invoke(h,acc')
                        loop (h'::list', s') t
                loop ([], acc) (rev list)

        [<CompiledName("Iterate")>]
        let iter f list = Microsoft.FSharp.Primitives.Basics.List.iter f list
        
        [<CompiledName("Distinct")>]
        let distinct (list:'T list) = Microsoft.FSharp.Primitives.Basics.List.distinctWithComparer HashIdentity.Structural<'T> list

        [<CompiledName("DistinctBy")>]
        let distinctBy keyf (list:'T list) = Microsoft.FSharp.Primitives.Basics.List.distinctByWithComparer HashIdentity.Structural<_> keyf list

        [<CompiledName("OfArray")>]
        let ofArray (array:'T array) = Microsoft.FSharp.Primitives.Basics.List.ofArray array

        [<CompiledName("ToArray")>]
        let toArray (list:'T list) = Microsoft.FSharp.Primitives.Basics.List.toArray list

        [<CompiledName("Empty")>]
        let empty<'T> = ([ ] : 'T list)

        [<CompiledName("Head")>]
        let head list = match list with x::_ -> x | [] -> invalidArg "list" (SR.GetString(SR.inputListWasEmpty))

        [<CompiledName("TryHead")>]
        let tryHead list = match list with x::_ -> Some x | [] -> None

        [<CompiledName("Tail")>]
        let tail list = match list with _::t -> t | [] -> invalidArg "list" (SR.GetString(SR.inputListWasEmpty))

        [<CompiledName("IsEmpty")>]
        let isEmpty list = match list with [] -> true | _ -> false
        
        [<CompiledName("Append")>]
        let append list1 list2 = list1 @ list2

        [<CompiledName("Item")>]
        let rec item index list =
            match list with
            | h::t when index >= 0 ->
                if index = 0 then h else item (index - 1) t
            | _ ->
                invalidArg "index" (SR.GetString(SR.indexOutOfBounds))

        [<CompiledName("TryItem")>]
        let rec tryItem index list =
            match list with
            | h::t when index >= 0 ->
                if index = 0 then Some h else tryItem (index - 1) t
            | _ ->
                None

        [<CompiledName("Get")>]
        let nth list index = item index list

        [<CompiledName("Choose")>]
        let choose f xs = Microsoft.FSharp.Primitives.Basics.List.choose f xs
    
        [<CompiledName("SplitAt")>]
        let splitAt index (list:'T list) = Microsoft.FSharp.Primitives.Basics.List.splitAt index list

        [<CompiledName("Take")>]
        let take count (list : 'T list) = Microsoft.FSharp.Primitives.Basics.List.take count list

        [<CompiledName("TakeWhile")>]
        let takeWhile p (list: 'T list) = Microsoft.FSharp.Primitives.Basics.List.takeWhile p list

        [<CompiledName("IterateIndexed")>]
        let iteri f list = Microsoft.FSharp.Primitives.Basics.List.iteri f list

        [<CompiledName("Initialize")>]
        let init count f = Microsoft.FSharp.Primitives.Basics.List.init count f

        let rec initConstAcc n x acc = 
            if n <= 0 then acc else initConstAcc (n-1) x (x::acc)
            
        [<CompiledName("Replicate")>]
        let replicate count x = 
            if count < 0 then invalidArg "count" (SR.GetString(SR.inputMustBeNonNegative))
            initConstAcc count x []        

        [<CompiledName("Iterate2")>]
        let iter2 f list1 list2 = 
            let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
            let rec loop list1 list2 = 
                match list1,list2 with
                | [],[] -> () 
                | h1::t1, h2::t2 -> f.Invoke(h1,h2); loop t1 t2 
                | [],xs2 -> invalidArgDifferentListLength "list1" "list2" xs2.Length
                | xs1,[] -> invalidArgDifferentListLength "list2" "list1" xs1.Length
            loop list1 list2

        [<CompiledName("IterateIndexed2")>]
        let iteri2 f list1 list2 = 
            let f = OptimizedClosures.FSharpFunc<_,_,_,_>.Adapt(f)
            let rec loop n list1 list2 = 
                match list1,list2 with
                | [],[] -> () 
                | h1::t1, h2::t2 -> f.Invoke(n,h1,h2); loop (n+1) t1 t2 
                | [],xs2 -> invalidArgDifferentListLength "list1" "list2" xs2.Length
                | xs1,[] -> invalidArgDifferentListLength "list2" "list1" xs1.Length
            loop 0 list1 list2

        [<CompiledName("Map3")>]
        let map3 f list1 list2 list3 = 
            Microsoft.FSharp.Primitives.Basics.List.map3 f list1 list2 list3

        [<CompiledName("MapIndexed2")>]
        let mapi2 f list1 list2 = 
            Microsoft.FSharp.Primitives.Basics.List.mapi2 f list1 list2

        [<CompiledName("Map2")>]
        let map2 f list1 list2 = Microsoft.FSharp.Primitives.Basics.List.map2 f list1 list2

        [<CompiledName("Fold")>]
        let fold<'T,'State> f (s:'State) (list: 'T list) = 
            match list with 
            | [] -> s
            | _ -> 
                let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
                let rec loop s xs = 
                    match xs with 
                    | [] -> s
                    | h::t -> loop (f.Invoke(s,h)) t
                loop s list

        [<CompiledName("Pairwise")>]
        let pairwise (list: 'T list) =
            Microsoft.FSharp.Primitives.Basics.List.pairwise list

        [<CompiledName("Reduce")>]
        let reduce f list = 
            match list with 
            | [] -> invalidArg "list" (SR.GetString(SR.inputListWasEmpty))
            | h::t -> fold f h t

        [<CompiledName("Scan")>]
        let scan<'T,'State> f (s:'State) (list:'T list) = 
            Microsoft.FSharp.Primitives.Basics.List.scan f s list

        [<CompiledName("Singleton")>]
        let inline singleton value = [value]

        [<CompiledName("Fold2")>]
        let fold2<'T1,'T2,'State> f (acc:'State) (list1:list<'T1>) (list2:list<'T2>) = 
            let f = OptimizedClosures.FSharpFunc<_,_,_,_>.Adapt(f)
            let rec loop acc list1 list2 =
                match list1,list2 with 
                | [],[] -> acc
                | h1::t1, h2::t2 -> loop (f.Invoke(acc,h1,h2)) t1 t2
                | [],xs2 -> invalidArgDifferentListLength "list1" "list2" xs2.Length
                | xs1,[] -> invalidArgDifferentListLength "list2" "list1" xs1.Length
            loop acc list1 list2

        let foldArraySubRight (f:OptimizedClosures.FSharpFunc<'T,_,_>) (arr: 'T[]) start fin acc = 
            let mutable state = acc
            for i = fin downto start do
                state <- f.Invoke(arr.[i], state)
            state

        // this version doesn't causes stack overflow - it uses a private stack 
        [<CompiledName("FoldBack")>]
        let foldBack<'T,'State> f (list:'T list) (acc:'State) = 
            let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
            match list with 
            | [] -> acc
            | [h] -> f.Invoke(h,acc)
            | [h1;h2] -> f.Invoke(h1,f.Invoke(h2,acc))
            | [h1;h2;h3] -> f.Invoke(h1,f.Invoke(h2,f.Invoke(h3,acc)))
            | [h1;h2;h3;h4] -> f.Invoke(h1,f.Invoke(h2,f.Invoke(h3,f.Invoke(h4,acc))))
            | _ -> 
                // It is faster to allocate and iterate an array than to create all those 
                // highly nested stacks.  It also means we won't get stack overflows here. 
                let arr = toArray list
                let arrn = arr.Length
                foldArraySubRight f arr 0 (arrn - 1) acc

        [<CompiledName("ReduceBack")>]
        let reduceBack f list = 
            match list with 
            | [] -> invalidArg "list" (SR.GetString(SR.inputListWasEmpty))
            | _ -> 
                let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
                let arr = toArray list
                let arrn = arr.Length
                foldArraySubRight f arr 0 (arrn - 2) arr.[arrn - 1]

        let scanArraySubRight<'T,'State> (f:OptimizedClosures.FSharpFunc<'T,'State,'State>) (arr:_[]) start fin initState = 
            let mutable state = initState
            let mutable res = [state]
            for i = fin downto start do
                state <- f.Invoke(arr.[i], state);
                res <- state :: res
            res

        [<CompiledName("ScanBack")>]
        let scanBack<'T,'State> f (list:'T list) (s:'State) = 
            match list with 
            | [] -> [s]
            | [h] -> 
                [f h s; s]
            | _ -> 
                let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
                // It is faster to allocate and iterate an array than to create all those 
                // highly nested stacks.  It also means we won't get stack overflows here. 
                let arr = toArray list
                let arrn = arr.Length
                scanArraySubRight f arr 0 (arrn - 1) s

        let foldBack2UsingArrays (f:OptimizedClosures.FSharpFunc<_,_,_,_>) list1 list2 acc = 
            let arr1 = toArray list1
            let arr2 = toArray list2
            let n1 = arr1.Length
            let n2 = arr2.Length
            if n1 <> n2 then 
                invalidArgFmt "list1, list2" 
                    "{0}\nlist1.Length = {1}, list2.Length = {2}"
                    [|SR.GetString SR.listsHadDifferentLengths; arr1.Length; arr2.Length|]
            let mutable res = acc
            for i = n1 - 1 downto 0 do
                res <- f.Invoke(arr1.[i],arr2.[i],res)
            res

        [<CompiledName("FoldBack2")>]
        let rec foldBack2<'T1,'T2,'State> f (list1:'T1 list) (list2:'T2 list) (acc:'State) = 
            match list1,list2 with 
            | [],[] -> acc
            | h1::rest1, k1::rest2 -> 
                let f = OptimizedClosures.FSharpFunc<_,_,_,_>.Adapt(f)
                match rest1, rest2 with 
                | [],[] -> f.Invoke(h1,k1,acc)
                | [h2],[k2] -> f.Invoke(h1,k1,f.Invoke(h2,k2,acc))
                | [h2;h3],[k2;k3] -> f.Invoke(h1,k1,f.Invoke(h2,k2,f.Invoke(h3,k3,acc)))
                | [h2;h3;h4],[k2;k3;k4] -> f.Invoke(h1,k1,f.Invoke(h2,k2,f.Invoke(h3,k3,f.Invoke(h4,k4,acc))))
                | _ -> foldBack2UsingArrays f list1 list2 acc
            | [],xs2 -> invalidArgDifferentListLength "list1" "list2" xs2.Length
            | xs1,[] -> invalidArgDifferentListLength "list2" "list1" xs1.Length

        let rec forall2aux (f:OptimizedClosures.FSharpFunc<_,_,_>) list1 list2 = 
            match list1,list2 with 
            | [],[] -> true
            | h1::t1, h2::t2 -> f.Invoke(h1,h2)  && forall2aux f t1 t2
            | [],xs2 -> invalidArgDifferentListLength "list1" "list2" xs2.Length
            | xs1,[] -> invalidArgDifferentListLength "list2" "list1" xs1.Length

        [<CompiledName("ForAll2")>]
        let forall2 f list1 list2 = 
            match list1,list2 with 
            | [],[] -> true
            | _ -> 
                let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
                forall2aux f list1 list2

        [<CompiledName("ForAll")>]
        let forall f list1 = Microsoft.FSharp.Primitives.Basics.List.forall f list1

        [<CompiledName("Exists")>]
        let exists f list1 = Microsoft.FSharp.Primitives.Basics.List.exists f list1
        
        [<CompiledName("Contains")>]
        let inline contains e list1 =
            let rec contains e xs1 =
                match xs1 with
                | [] -> false
                | h1::t1 -> e = h1 || contains e t1
            contains e list1

        let rec exists2aux (f:OptimizedClosures.FSharpFunc<_,_,_>) list1 list2 = 
            match list1,list2 with 
            | [],[] -> false
            | h1::t1, h2::t2 ->f.Invoke(h1,h2)  || exists2aux f t1 t2
            | _ -> invalidArg "list2" (SR.GetString(SR.listsHadDifferentLengths))

        [<CompiledName("Exists2")>]
        let rec exists2 f list1 list2 = 
            match list1,list2 with 
            | [],[] -> false
            | _ -> 
                let f = OptimizedClosures.FSharpFunc<_,_,_>.Adapt(f)
                exists2aux f list1 list2

        [<CompiledName("Find")>]
        let rec find f list = match list with [] -> indexNotFound()  | h::t -> if f h then h else find f t

        [<CompiledName("TryFind")>]
        let rec tryFind f list = match list with [] -> None | h::t -> if f h then Some h else tryFind f t

        [<CompiledName("FindBack")>]
        let findBack f list = list |> toArray |> Microsoft.FSharp.Primitives.Basics.Array.findBack f

        [<CompiledName("TryFindBack")>]
        let tryFindBack f list = list |> toArray |> Microsoft.FSharp.Primitives.Basics.Array.tryFindBack f

        [<CompiledName("TryPick")>]
        let rec tryPick f list = 
            match list with 
            | [] -> None 
            | h::t -> 
                match f h with 
                | None -> tryPick f t 
                | r -> r

        [<CompiledName("Pick")>]
        let rec pick f list = 
            match list with 
            | [] -> indexNotFound()
            | h::t -> 
                match f h with 
                | None -> pick f t 
                | Some r -> r

        [<CompiledName("Filter")>]
        let filter f x = Microsoft.FSharp.Primitives.Basics.List.filter f x

        [<CompiledName("Except")>]
        let except itemsToExclude list =
            match box itemsToExclude with
            | null -> nullArg "itemsToExclude"
            | _ -> ()

            match list with
            | [] -> list
            | _ ->
                let cached = HashSet(itemsToExclude, HashIdentity.Structural)
                list |> filter cached.Add

        [<CompiledName("Where")>]
        let where f x = Microsoft.FSharp.Primitives.Basics.List.filter f x

        let inline groupByImpl (comparer:IEqualityComparer<'SafeKey>) (keyf:'T->'SafeKey) (getKey:'SafeKey->'Key) (list: 'T list) =
            Microsoft.FSharp.Primitives.Basics.List.groupBy comparer keyf getKey list

        // We avoid wrapping a StructBox, because under 64 JIT we get some "hard" tailcalls which affect performance
        let groupByValueType (keyf:'T->'Key) (list:'T list) = groupByImpl HashIdentity.Structural<'Key> keyf id list

        // Wrap a StructBox around all keys in case the key type is itself a type using null as a representation
        let groupByRefType   (keyf:'T->'Key) (list:'T list) = groupByImpl RuntimeHelpers.StructBox<'Key>.Comparer (fun t -> RuntimeHelpers.StructBox (keyf t)) (fun sb -> sb.Value) list

        [<CompiledName("GroupBy")>]
        let groupBy (keyf:'T->'Key) (list:'T list) =
#if FX_RESHAPED_REFLECTION
            if (typeof<'Key>).GetTypeInfo().IsValueType
#else
            if typeof<'Key>.IsValueType
#endif
                then groupByValueType keyf list
                else groupByRefType   keyf list

        [<CompiledName("Partition")>]
        let partition p x = Microsoft.FSharp.Primitives.Basics.List.partition p x
            
        [<CompiledName("Unzip")>]
        let unzip x = Microsoft.FSharp.Primitives.Basics.List.unzip x

        [<CompiledName("Unzip3")>]
        let unzip3 x = Microsoft.FSharp.Primitives.Basics.List.unzip3 x

        [<CompiledName("Windowed")>]
        let windowed n x = Microsoft.FSharp.Primitives.Basics.List.windowed n x

        [<CompiledName("ChunkBySize")>]
        let chunkBySize chunkSize list = Microsoft.FSharp.Primitives.Basics.List.chunkBySize chunkSize list

        [<CompiledName("SplitInto")>]
        let splitInto count list = Microsoft.FSharp.Primitives.Basics.List.splitInto count list

        [<CompiledName("Zip")>]
        let zip x1 x2 = Microsoft.FSharp.Primitives.Basics.List.zip x1 x2

        [<CompiledName("Zip3")>]
        let zip3 x1 x2 x3 = Microsoft.FSharp.Primitives.Basics.List.zip3 x1 x2 x3

        [<CompiledName("Skip")>]
        let skip count list =
            if count <= 0 then list else
            let rec loop i lst =
                match lst with
                | _ when i = 0 -> lst
                | _::t -> loop (i-1) t
                | [] -> invalidArgOutOfRange "count" count "distance past the list" i
            loop count list

        [<CompiledName("SkipWhile")>]
        let rec skipWhile p xs =
            match xs with
            | head :: tail when p head -> skipWhile p tail
            | _ -> xs

        [<CompiledName("SortWith")>]
        let sortWith cmp xs =
            match xs with
            | [] | [_] -> xs
            | _ ->
                let array = Microsoft.FSharp.Primitives.Basics.List.toArray xs
                Microsoft.FSharp.Primitives.Basics.Array.stableSortInPlaceWith cmp array
                Microsoft.FSharp.Primitives.Basics.List.ofArray array

        [<CompiledName("SortBy")>]
        let sortBy f xs =
            match xs with 
            | [] | [_] -> xs
            | _ -> 
                let array = Microsoft.FSharp.Primitives.Basics.List.toArray xs
                Microsoft.FSharp.Primitives.Basics.Array.stableSortInPlaceBy f array
                Microsoft.FSharp.Primitives.Basics.List.ofArray array
            
        [<CompiledName("Sort")>]
        let sort xs =
            match xs with 
            | [] | [_] -> xs
            | _ -> 
                let array = Microsoft.FSharp.Primitives.Basics.List.toArray xs
                Microsoft.FSharp.Primitives.Basics.Array.stableSortInPlace array
                Microsoft.FSharp.Primitives.Basics.List.ofArray array

        [<CompiledName("SortByDescending")>]
        let inline sortByDescending f xs =
            let inline compareDescending a b = compare (f b) (f a)
            sortWith compareDescending xs

        [<CompiledName("SortDescending")>]
        let inline sortDescending xs =
            let inline compareDescending a b = compare b a
            sortWith compareDescending xs

        [<CompiledName("OfSeq")>]
        let ofSeq source = Seq.toList source

        [<CompiledName("ToSeq")>]
        let toSeq list = Seq.ofList list

        [<CompiledName("FindIndex")>]
        let findIndex f list = 
            let rec loop n = function[] -> indexNotFound()  | h::t -> if f h then n else loop (n+1) t
            loop 0 list

        [<CompiledName("TryFindIndex")>]
        let tryFindIndex f list = 
            let rec loop n = function[] -> None | h::t -> if f h then Some n else loop (n+1) t
            loop 0 list
        
        [<CompiledName("FindIndexBack")>]
        let findIndexBack f list = list |> toArray |> Microsoft.FSharp.Primitives.Basics.Array.findIndexBack f

        [<CompiledName("TryFindIndexBack")>]
        let tryFindIndexBack f list = list |> toArray |> Microsoft.FSharp.Primitives.Basics.Array.tryFindIndexBack f

        [<CompiledName("Sum")>]
        let inline sum          (list:list<'T>) =
            match list with 
            | [] ->  LanguagePrimitives.GenericZero< 'T >
            | t ->
                let mutable acc = LanguagePrimitives.GenericZero< 'T >
                for x in t do
                    acc <- Checked.(+) acc x
                acc

        [<CompiledName("SumBy")>]
        let inline sumBy (f: 'T -> 'U)     (list:list<'T>) =
            match list with 
            | [] ->  LanguagePrimitives.GenericZero< 'U >
            | t ->
                let mutable acc = LanguagePrimitives.GenericZero< 'U >
                for x in t do
                    acc <- Checked.(+) acc (f x)
                acc

        [<CompiledName("Max")>]
        let inline max          (list:list<_>) =
            match list with 
            | [] -> invalidArg "list" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString
            | h::t ->
                let mutable acc = h
                for x in t do
                    if x > acc then
                        acc <- x
                acc

        [<CompiledName("MaxBy")>]
        let inline maxBy f (list:list<_>) =
            match list with 
            | [] -> invalidArg "list" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString
            | h::t ->
                let mutable acc = h
                let mutable accv = f h
                for x in t do
                    let currv = f x
                    if currv > accv then
                        acc <- x
                        accv <- currv
                acc
            
        [<CompiledName("Min")>]
        let inline min          (list:list<_>) =
            match list with 
            | [] -> invalidArg "list" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString
            | h::t ->
                let mutable acc = h
                for x in t do
                    if x < acc then
                        acc <- x
                acc

        [<CompiledName("MinBy")>]
        let inline minBy f (list:list<_>) =
            match list with 
            | [] -> invalidArg "list" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString
            | h::t ->
                let mutable acc = h
                let mutable accv = f h
                for x in t do
                    let currv = f x
                    if currv < accv then
                        acc <- x
                        accv <- currv
                acc

        [<CompiledName("Average")>]
        let inline average      (list:list<'T>) =
            match list with 
            | [] -> invalidArg "source" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString
            | xs ->
                let mutable sum = LanguagePrimitives.GenericZero< 'T >
                let mutable count = 0
                for x in xs do
                    sum <- Checked.(+) sum x
                    count <- count + 1
                LanguagePrimitives.DivideByInt sum count

        [<CompiledName("AverageBy")>]
        let inline averageBy (f : 'T -> 'U) (list:list<'T>) =
            match list with 
            | [] -> invalidArg "source" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString
            | xs ->
                let mutable sum = LanguagePrimitives.GenericZero< 'U >
                let mutable count = 0
                for x in xs do
                    sum <- Checked.(+) sum (f x)
                    count <- count + 1
                LanguagePrimitives.DivideByInt sum count

        [<CompiledName("Collect")>]
        let collect f list = Microsoft.FSharp.Primitives.Basics.List.collect f list

        [<CompiledName("AllPairs")>]
        let allPairs list1 list2 = Microsoft.FSharp.Primitives.Basics.List.allPairs list1 list2

        [<CompiledName("CompareWith")>]
        let inline compareWith (comparer:'T -> 'T -> int) (list1: 'T list) (list2: 'T list) =
            let rec loop list1 list2 =
                 match list1, list2 with
                 | head1 :: tail1, head2 :: tail2 ->
                       let c = comparer head1 head2
                       if c = 0 then loop tail1 tail2 else c
                 | [], [] -> 0
                 | _, [] -> 1
                 | [], _ -> -1

            loop list1 list2

        [<CompiledName("Permute")>]
        let permute indexMap list = list |> toArray |> Microsoft.FSharp.Primitives.Basics.Array.permute indexMap |> ofArray

        [<CompiledName("ExactlyOne")>]
        let exactlyOne (source : list<_>) =
            match source with
            | [x] -> x
            | []  -> invalidArg "source" LanguagePrimitives.ErrorStrings.InputSequenceEmptyString            
            | _   -> invalidArg "source" (SR.GetString(SR.inputSequenceTooLong))

        [<CompiledName("Truncate")>]
        let truncate count list = Microsoft.FSharp.Primitives.Basics.List.truncate count list

        [<CompiledName("Unfold")>]
        let unfold<'T,'State> (f:'State -> ('T*'State) option) (s:'State) = Microsoft.FSharp.Primitives.Basics.List.unfold f s

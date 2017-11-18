// Source: http://www.tryfsharp.org/create/cpoulain/shared/raytracer.fsx
// modified to eliminate allocations

module AppFS.RayTrace
open System
open System.Text

[<Struct>]
type Vector (x:float, y:float, z:float) =
    member this.X = x
    member this.Y = y
    member this.Z = z
    static member ( * ) (k, v: Vector) = Vector (k*v.X, k*v.Y, k*v.Z)
    static member ( - ) (v1: Vector, v2: Vector) = Vector (v1.X-v2.X, v1.Y-v2.Y, v1.Z-v2.Z)
    static member ( + ) (v1: Vector, v2: Vector) = Vector (v1.X+v2.X, v1.Y+v2.Y, v1.Z+v2.Z)
    static member Dot (v1: Vector, v2: Vector) = v1.X*v2.X + v1.Y*v2.Y + v1.Z*v2.Z
    static member Mag (v: Vector) = sqrt (v.X*v.X + v.Y*v.Y + v.Z*v.Z)
    static member Norm (v: Vector) =
        let mag = Vector.Mag v
        let div = if mag = 0.0 then infinity else 1.0/mag
        div * v
    static member Cross (v1: Vector, v2: Vector) =
        Vector (v1.Y * v2.Z - v1.Z * v2.Y,
                v1.Z * v2.X - v1.X * v2.Z,
                v1.X * v2.Y - v1.Y * v2.X)

[<Struct>]
type Color (r:float, g:float, b:float) =
    static let clamp v = Math.Floor (255.0 * Math.Min(v, 1.0))
    member this.R = r
    member this.G = g
    member this.B = b
    static member Scale (k, v: Color) = Color (k*v.R, k*v.G, k*v.B)
    static member ( + ) (v1: Color, v2: Color) = Color (v1.R+v2.R, v1.G+v2.G, v1.B+v2.B)
    static member ( * ) (v1: Color, v2: Color) = Color (v1.R*v2.R, v1.G*v2.G, v1.B*v2.B)
    static member White = Color (1.0, 1.0, 1.0)
    static member Grey = Color (0.5, 0.5, 0.5)
    static member Black = Color (0.0, 0.0, 0.0)
    static member Background = Color.Black
    static member DefaultColor = Color.Black
    static member ToDrawingColor (c: Color) = new Color (clamp c.R, clamp c.G, clamp c.B)

type Camera (pos: Vector, lookAt: Vector) =
    let forward = Vector.Norm (lookAt - pos)
    let down = Vector (0.0, -1.0, 0.0)
    let right = 1.5 * Vector.Norm (Vector.Cross (forward, down))
    let up = 1.5 * Vector.Norm (Vector.Cross (forward, right))
    member c.Pos     = pos
    member c.Forward = forward
    member c.Up      = up
    member c.Right   = right

[<Struct>]
type Ray =
    { Start: Vector;
      Dir: Vector }

type Surface =
    abstract Diffuse: Vector -> Color
    abstract Specular: Vector -> Color
    abstract Reflect: Vector -> float
    abstract Roughness : float

[<Struct>]
type Intersection =
    { Thing: SceneObject;
      Ray: Ray;
      Dist: float }

and SceneObject =
    abstract Surface: Surface
    abstract Intersect: Ray -> Intersection
    abstract Normal: Vector -> Vector


type Light =
    { Pos : Vector;
      Color : Color }

type Scene =
    { Things : SceneObject list;
      Lights : Light list;
      Camera : Camera }


type RayTracer (screenWidth, screenHeight) =

    let maxDepth = 5

    let NearestIntersection ray scene =
        match scene.Things with
        | [] -> None
        | h::t ->
            let mutable acc = h.Intersect ray
            for x in t do
                let curr = x.Intersect ray
                if curr.Dist < acc.Dist then
                    acc <- curr
            Some acc

    let TestRay ray scene =
        match NearestIntersection ray scene with
        | None -> None
        | Some isect ->
            if Double.IsInfinity (isect.Dist)
            then None
            else Some isect.Dist

    let rec TraceRay ray scene (depth: int) =
        match NearestIntersection ray scene with
        | None -> Color.Background
        | Some isect ->
            if Double.IsInfinity (isect.Dist)
            then Color.Background
            else Shade isect scene depth

    and Shade isect scene depth =
        let d = isect.Ray.Dir
        let pos = isect.Dist * d + isect.Ray.Start
        let normal = isect.Thing.Normal (pos)
        let reflectDir = d - 2.0 * Vector.Dot (normal, d) * normal
        let naturalcolor = Color.DefaultColor + (GetNaturalColor isect.Thing pos normal reflectDir scene)
        let reflectedColor =
            if depth >= maxDepth then Color(0.5, 0.5, 0.5)
            else GetReflectionColor (isect.Thing, pos + (0.001*reflectDir), normal, reflectDir, scene, depth)
        naturalcolor + reflectedColor

    and GetReflectionColor (thing: SceneObject, pos, normal: Vector, rd: Vector, scene: Scene, depth: int) =
        Color.Scale (thing.Surface.Reflect (pos), TraceRay { Start = pos; Dir = rd } scene (depth + 1))

    and GetNaturalColor thing pos normal rd scene =
        let addLight (thing: SceneObject) pos normal rd scene color light =
            let ldis = light.Pos - pos
            let livec = Vector.Norm (ldis)
            let neatIsect = TestRay { Start = pos; Dir = livec } scene
            let isInShadow = match neatIsect with
                             | None -> false
                             | Some d -> not (d > Vector.Mag (ldis))
            if isInShadow then color
            else
                 let illum = Vector.Dot (livec, normal)
                 let lcolor = if illum > 0.0
                              then Color.Scale (illum, light.Color)
                              else Color.DefaultColor
                 let specular = Vector.Dot (livec, Vector.Norm (rd))
                 let scolor =
                    if specular > 0.0
                    then Color.Scale (System.Math.Pow (specular, thing.Surface.Roughness), light.Color)
                    else Color.DefaultColor
                 color + thing.Surface.Diffuse (pos) * lcolor +
                        thing.Surface.Specular (pos) * scolor
        // let addColor = addLight thing pos normal rd scene
        // scene.Lights |> List.fold addColor Color.DefaultColor
        match scene.Lights with
        | [] -> Color.DefaultColor
        | lights ->
            let mutable color = Color.DefaultColor
            for light in lights do
                color <- addLight thing pos normal rd scene color light
            color

    let GetPoint x y (camera: Camera) =
        let RecenterX x =  (float x - (float screenWidth / 2.0))  / (2.0 * float screenWidth)
        let RecenterY y = -(float y - (float screenHeight / 2.0)) / (2.0 * float screenHeight)
        Vector.Norm (camera.Forward + RecenterX (x) * camera.Right + RecenterY (y) * camera.Up)

    member this.Render (scene, rgb: Color[]) =
        for y = 0 to  screenHeight - 1 do
            let stride = y * screenWidth
            for x = 0 to screenWidth - 1 do
                let ray = { Start = scene.Camera.Pos; Dir = GetPoint x y scene.Camera }
                let color = TraceRay ray scene 0
                rgb.[x + stride] <- Color.ToDrawingColor color
        rgb

module SceneObjects =

    let Sphere (center, radius, surface) =
        let radius2 = radius * radius
        { new SceneObject with
            member this.Surface = surface
            member this.Normal pos = Vector.Norm (pos - center)
            member this.Intersect ray =
                let eo = center - ray.Start
                let v = Vector.Dot (eo, ray.Dir)
                let dist =
                    if (v < 0.0) then infinity
                    else
                        let disc = radius2 - (Vector.Dot (eo,eo) - (v*v))
                        if disc < 0.0
                        then infinity
                        else v - (sqrt (disc))
                { Thing = this; Ray = ray; Dist = dist }
        }

    let Plane (normal, offset, surface) =
        { new SceneObject with
            member this.Surface = surface
            member this.Normal pos = normal
            member this.Intersect ray =
                let denom = Vector.Dot (normal, ray.Dir)
                let dist =
                    if denom > 0.0
                    then infinity
                    else (Vector.Dot (normal, ray.Start) + offset) / (-denom)
                { Thing = this; Ray = ray; Dist = dist }
        }

module Surfaces =

    let Shiny =
        { new Surface with
            member s.Diffuse pos = Color.White
            member s.Specular pos = Color.Grey
            member s.Reflect pos = 0.7
            member s.Roughness = 250.0 }

    let Checkerboard =
        { new Surface with
            member s.Diffuse pos =
                if (int (System.Math.Floor (pos.Z) + System.Math.Floor (pos.X))) % 2 <> 0
                then Color.White
                else Color.Black
            member s.Specular pos = Color.White
            member s.Reflect pos =
                if (int (System.Math.Floor (pos.Z) + System.Math.Floor (pos.X))) % 2 <> 0
                then 0.1
                else 0.7
            member s.Roughness = 150.0 }


let scene =
    { Things = [ SceneObjects.Plane (Vector (0.0, 1.0, 0.0), 0.0, Surfaces.Checkerboard);
                 SceneObjects.Sphere (Vector (0.0, 1.0, -0.25), 1.0, Surfaces.Shiny)
                 SceneObjects.Sphere (Vector (-1.0, 0.5, 1.5), 0.5, Surfaces.Shiny) ];
      Lights = [ { Pos = Vector (-2.0, 2.5, 0.0); Color = Color (0.49, 0.07, 0.07) };
                 { Pos = Vector (1.5, 2.5, 1.5); Color = Color (0.07, 0.07, 0.49) };
                 { Pos = Vector (1.5, 2.5, -1.5); Color = Color (0.07, 0.49, 0.071) };
                 { Pos = Vector (0.0, 3.5, 0.0); Color = Color (0.21, 0.21, 0.35) } ];
      Camera = Camera (Vector (3.0, 2.0, 4.0), Vector (-1.0, 0.5, 0.0)) }

// Compute the scene
let computeScene width height =
    let raytracer = RayTracer (width, height)
    let rgbBuffer = Array.zeroCreate (width * height)
    let colors = raytracer.Render (scene, rgbBuffer)
    colors
    // |> Array.fold (fun (sb:StringBuilder) c -> sb.AppendFormat("#{0:x2}{1:x2}{2:x2}", int c.R, int c.G, int c.B)) (new StringBuilder())
    // |> fun s -> TryFSharp.Canvas.JavaScriptFunction("RayTracer.render").Invoke(s.ToString())
    // |> ignore

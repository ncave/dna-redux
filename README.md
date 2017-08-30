# dotnet-js

Playground for running C#/F# code in Node.js or Browser.

The CIL is running on a portable .NET runtime called DotNetAnywhere (DNA) compiled to WebAssembly with Emscripten.

Entirely based on the excellent works of:
- @chrisdunelm https://github.com/chrisdunelm/DotNetAnywhere
- @SteveSanderson https://github.com/SteveSanderson/Blazor
- and contributors

Notes:
- runs in Node.js or Browser or Native.
- uses .NET Core 2.0 (targeting netstandard1.3 and above).
- uses `build.cmd` to build, VS Code to edit/run.
- the BCL (corlib) implementation is somewhat minimal, so it may have to be extended to fully support FSharp.Core.
- that said, F# support is already there (but still a work in progress).

Changes vs stock DNA/Blazor:
- Razor/SPA removed for clarity.
- some JIT updates and fixes.
- some corlib updates.
- some JS interop updates.
- added F# support.

Disclaimer:
- This is just an experiment to see how far can this be taken without too much effort and what the performance looks like. Obviously it would be nice to have faster GC or highly optimized JIT like RyuJIT to target WebAssembly, but you can still have fun with this now and see what the future of web development may look like.

Building:
- `dotnet build`
- `npm install`
- `npm run build`

Running:
- Running in Node.js: `node ./wwwroot/out/bundle.js`
- Running in Browser: `npm start` to start a web server, then go to localhost:5000 (hint: look in the Console output)
- Running as Native: see src/DNA/native

You can also open/run it in VS Code, just select a debug config and hit F5.
The C#, C/C++, Ionide-fsharp, Debugger for Chrome and TSLint extensions for VS Code are highly recommended, but optional.

# dotnet-js

Playground for running C#/F# code in Node.js or Browser.

The CIL is running on a portable .NET runtime called DotNetAnywhere (DNA) compiled to WebAssembly with Emscripten.

Entirely based on the excellent works of:
- @chrisdunelm https://github.com/chrisdunelm/DotNetAnywhere
- @SteveSanderson https://github.com/SteveSanderson/Blazor
- and contributors

Notes:
- uses .NET Core 2.0 (targeting netstandard1.3 and above).
- uses build.cmd to build, VSCode to edit/run, Chrome debugger (optional).
- runs in Node.js or browser (`npm start` starts a server for browser).
- the BCL (corlib) implementation is somewhat minimal, so it may have to be extended to fully support FSharp.Core.
- that said, F# support is already there (but still a work in progress).

Changes vs stock DNA/Blazor:
- Razor/SPA removed for clarity.
- some JIT updates and fixes.
- some corlib updates.
- some JS interop updates.
- initial stab at F# support.

Disclaimer:
- This is just an experiment to see how far can this be taken without too much effort and what the performance looks like. Obviously it would be nice to have faster GC or highly optimized JIT like RyuJIT to target WebAssembly, but you can still have fun with this now and see what the future of web development may look like.

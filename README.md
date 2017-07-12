# dotnet-js

Playground for running C#/F# code in Node.js or Browser.

The CIL is running on a portable .NET runtime called DotNetAnywhere (DNA) compiled to WebAssembly with emscripten.

Entirely based on the excellent works of:
- @chrisdunelm https://github.com/chrisdunelm/DotNetAnywhere
- @SteveSanderson https://github.com/SteveSanderson/Blazor
- and contributors

Notes:
- uses dotnet core 2.0 preview 2 (targeting netstandard1.3 and above).
- uses build.cmd to build, VSCode to edit/run, Chrome debugger (optional).
- runs in Node.js or browser (`npm start` starts a server for browser).
- F# support is still a work in progress (quite a few things are missing).
- the BCL (corlib) implementation is quite minimal, so it will have to be extended to fully support FSharp.Core.

Changes vs stock DNA/Blazor:
- Razor/SPA removed for clarity.
- some JIT updates.
- some corlib updates.
- some JS interop updates.
- initial stab at F# support.

Disclaimer:
- This is just an experiment to see how far can this be taken without too much effort and what the performance looks like.

# dna-redux

Playground for running C#/F# code in Node.js, Browsers or Native (x86/ARM).

- The CIL is running in a portable .NET runtime called DotNetAnywhere (DNA).
- For Node.js/Browser targets it's compiled to WebAssembly with Emscripten.

Based on the excellent works of:
- @chrisdunelm https://github.com/chrisdunelm/DotNetAnywhere
- @SteveSanderson https://github.com/SteveSanderson/Blazor
- and contributors

Features:
- Supports both C# and F#.
- Runs in Node.js, Browsers or Native (x86/ARM).
- Uses .NET Core 2.0 (targeting netstandard1.3 and above).
- the BCL (corlib) implementation is somewhat minimal.

Changes vs stock DNA/Blazor:
- added F# support.
- Performance updates.
- JIT updates and fixes.
- corlib updates and fixes.
- JavaScript interop updates.
- Razor/SPA removed for clarity.

Disclaimer:
- This is just an experiment to see how far can this be taken without too much effort and what the performance looks like. Obviously it would be nice to have faster GC or highly optimized JIT like RyuJIT to target WebAssembly, but you can still have fun with this now and see what the future of web development may look like.

Building:
- `dotnet build && npm install && npm run build`
- or just use `build.cmd` to build, VS Code to edit/run.

Running:
- Running in Node.js: `npm start`
- Running in Browser: `npm run server` to start a web server, then go to localhost:5000 (hint: look in the Console output)
- Running as Native: see src/DNA/native

- You can run it in VS Code, just select a debug config and hit F5.
- The C#, C/C++, Ionide-fsharp, Debugger for Chrome and TSLint extensions for VS Code are highly recommended, but optional.

Further reading:
- [DotNetAnywhere: An Alternative .NET Runtime](http://mattwarren.org/2017/10/19/DotNetAnywhere-an-Alternative-.NET-Runtime/).

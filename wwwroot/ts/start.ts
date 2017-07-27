import * as interop from "./interop";

// F#
export async function runFsAppAsync() {
    console.log("--- F# assembly output starts here ---");
    const entrypoint: string = "appfs";
    const references: string[] = ["FSharp.Core", "libfs"];
    await interop.StartApplication(entrypoint, references);

    console.log("--- F# <-> JS interop starts here ---");
    const x = await interop.InvokeStaticAsync("libfs", "LibFS", "Library", "Sqr", 5);
    console.log("sqr(5) = " + x);
    console.log("--- F# output ends here ---");
}

// C#
export async function runCsAppAsync() {
    console.log("--- C# assembly output starts here ---");
    const entrypoint: string = "appcs";
    const references: string[] = ["libcs"];
    await interop.StartApplication(entrypoint, references);

    console.log("--- C# <-> JS interop starts here ---");
    await interop.InvokeStaticAsync("libcs", "LibCS", "Library", "helloAsync", "Earth");

    const x = await interop.InvokeStaticAsync("libcs", "LibCS", "Library", "Sqr", 5);
    console.log("sqr(5) = " + x);

    const y = await interop.InvokeStaticAsync("libcs", "LibCS", "Library", "Inv", 5);
    console.log("inv(5) = " + y);
    console.log("--- C# output ends here ---");
}

runCsAppAsync().then(runFsAppAsync);

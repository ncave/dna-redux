import * as interop from "./interop";

// // F#
// const entrypoint: string = "appfs";
// const references: string[] = ["FSharp.Core", "libfs"];
// interop.StartApplication(entrypoint, references).then(async () => {

//     console.log("--- JS interop starts here ---");
//     const x = await interop.InvokeStaticAsync("libfs", "LibFS", "Library", "Sqr", 5);
//     console.log("sqr(5) = " + x);
// });

// C#
const entrypoint: string = "appcs";
const references: string[] = ["libcs"];
interop.StartApplication(entrypoint, references).then(async () => {

    console.log("--- JS interop starts here ---");
    await interop.InvokeStaticAsync("libcs", "LibCS", "Library", "helloAsync", "Earth");

    const x = await interop.InvokeStaticAsync("libcs", "LibCS", "Library", "Sqr", 5);
    console.log("sqr(5) = " + x);

    const y = await interop.InvokeStaticAsync("libcs", "LibCS", "Library", "Inv", 5);
    console.log("inv(5) = " + y);
});

import * as interop from "./interop";

const entrypoint: string = "appcs";
const references: string[] = ["libcs"];
interop.StartApplication(entrypoint, references).then(async () => {

      await interop.InvokeStaticAsync("libcs", "LibCS", "Lib", "helloAsync", "Earth");

      const x = await interop.InvokeStaticAsync("libcs", "LibCS", "Lib", "Sqr", 5);
      console.log("sqr(5) = " + x);

      const y = await interop.InvokeStaticAsync("libcs", "LibCS", "Lib", "Inv", 5);
      console.log("inv(5) = " + y);
});

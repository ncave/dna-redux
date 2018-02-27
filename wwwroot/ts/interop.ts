// import { ModuleFunc } from "../js/asmjs/dna";
import { ModuleFunc } from "../js/wasm/dna";
const isWasm = true; // typeof WebAssembly !== "undefined" && WebAssembly.validate;

let callbackIdGen = 0;
const callbackMap = new Map<number, any>();

function addCallback(callback: any) {
  const callbackId = ++callbackIdGen;
  callbackMap.set(callbackId, callback);
  return callbackId;
}

function runCallback(callbackId: number, args: any) {
  const callback = callbackMap.get(callbackId);
  if (callback) {
    callbackMap.delete(callbackId);
    return callback(args);
  } else {
    return undefined;
  }
}

const isNode = typeof process === "object" && typeof require === "function";
const globalRef: any = isNode ? global : window;

let StringDecoder: any;
declare let TextDecoder: any;

if (isNode) {
  StringDecoder = require("string_decoder");
} else {
  // TextDecoder = TextDecoder || require("../../js/encoding").TextEncoder;
}

globalRef["browser.js"] = {

  Callback: (json: string) => {
    // console.log("callback: " + json);
    const parsed = JSON.parse(json);
    return runCallback(parsed.callbackId, parsed.args);
  },

  // JSEval: (code: string) => {
  //   return eval(code);
  // },

  Alert: (message: string) => {
    alert(message);
  },

  BeginFetch: async (descriptor: string) => {
    const parsed = JSON.parse(descriptor);
    const url = parsed.url;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        InvokeStatic("corlib", "System.Net.Http", "HttpClient", "OnFetchCompleted", {
          asyncResultAddress: parsed.asyncResultAddress,
          response: { statusCode: xhr.status, bodyText: xhr.response },
        });
      }
    };

    xhr.send(null);
  },
};

let dotNetStringDecoder: any;

export function readDotNetString(ptrString: number) {
  // Lazy-initialised because we have to wait for loading the polyfill on some browsers
  dotNetStringDecoder = dotNetStringDecoder ||
    (isNode ? new StringDecoder("utf16le") : new TextDecoder("utf-16le"));
  if (ptrString === 0) {
    return null;
  }
  const numBytes = Module.HEAP32[Math.trunc(ptrString / 4)] * 2;
  const ptrChar0 = ptrString + 4;
  const subarray = Module.HEAP8.subarray(ptrChar0, ptrChar0 + numBytes);
  return dotNetStringDecoder.decode(subarray);
}

export function readInt32Property(ptr: number, offsetBytes: number) {
  return Module.getValue(ptr + offsetBytes, "i32");
}

export function readStringProperty(ptr: number, offsetBytes: number) {
  const ptrString = Module.getValue(ptr + offsetBytes, "*");
  return readDotNetString(ptrString);
}

export function InvokeStatic(
  assemblyName: string, namespace: string, className: string, methodName: string, arg: any) {

  const argStr = JSON.stringify({ arg });
  return Module.ccall(
    "JSInterop_CallDotNet", // name of C function
    "number", // return type
    ["string", "string", "string", "string", "string"], // argument types
    [assemblyName, namespace, className, methodName, argStr], // arguments
  );
}

export function InvokeStaticAsync(
  assemblyName: string, namespace: string, className: string, methodName: string, arg: any) {

  return new Promise((resolve, reject) => {
    const argStr = JSON.stringify({
      resolveId: addCallback(resolve),
      rejectId: addCallback(reject),
      arg,
    });
    Module.ccall(
      "JSInterop_CallDotNet", // name of C function
      "number", // return type
      ["string", "string", "string", "string", "string"], // argument types
      [assemblyName, namespace, className, methodName, argStr], // arguments
    );
  });
}

let Module: any; // initialized by StartApplication

export function StartApplication(entryPoint: string, references: string[]) {

  return new Promise((resolve) => {
    const preloadAssemblies = ["corlib", "JS.Interop", entryPoint].concat(references);
    const root = isNode ? "./wwwroot/" : "/";
    const moduleArgs: any = {
      locateFile: (fileName: string) => root + (isWasm ? "js/wasm/" : "js/asmjs/") + fileName,
      // wasmBinaryFile: root + "js/wasm/dna.wasm",
      // asmjsCodeFile: root + "js/asmjs/dna.asm.js",
      // memoryInitializerPrefixURL: root + "js/asmjs/",
      arguments: [entryPoint + ".dll"],
      preloadPlugins: [],
      preRun: () => {
        // Preload corlib.dll and other assemblies
        preloadAssemblies.forEach((assembly) => {
          const assemblyName = assembly + ".dll";
          const assemblyPath = root + "bin/" + assemblyName;
          const assemblyFile = isNode ? moduleArgs.readBinary(assemblyPath) : assemblyPath;
          moduleArgs.FS_createPreloadedFile("/", assemblyName, assemblyFile, true, false);
        });
      },
      postRun: () => {
        // console.log("postRun");
        // InvokeStatic("JS.Interop", "JS.Interop", "Startup", "EnsureAssembliesLoaded", preloadAssemblies);
        resolve();
      },
      onRuntimeInitialized: () => {
        // console.log("onRuntimeInitialized");
      },
    };
    // Can't load dna.js until Module is configured
    Module = ModuleFunc(moduleArgs);
  });
}

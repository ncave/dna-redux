using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using MiniJSON;

namespace JS.Interop {

    public static class Promise {

        [DllImport(@"browser.js", CharSet = CharSet.Ansi)]
        public static extern int Callback(string json);

        public static int From<T>(string descriptor, Func<object, T> func) {
            var parsed = Json.Deserialize(descriptor) as Dictionary<string, object>;
            try {
                var result = func(parsed["arg"]);
                var dict = new Dictionary<string, object>() {
                    { "callbackId", parsed["resolveId"] },
                    { "args", result }
                };
                return Callback(Json.Serialize(dict));
            }
            catch (Exception ex) {
                var dict = new Dictionary<string, object>() {
                    { "callbackId", parsed["rejectId"] },
                    { "args", ex },
                };
                return Callback(Json.Serialize(dict));
            }
        }

    }
}

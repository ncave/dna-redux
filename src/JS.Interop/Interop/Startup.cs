using System;
using System.Collections.Generic;
using System.Reflection;

namespace JS.Interop {

    public static class Startup {

        public static int EnsureAssembliesLoadedAsync(string descriptor) {
            return Promise.From(descriptor, (object arg) => {
                var assemblyNames = arg as IEnumerable<object>;
                foreach (var assemblyName in assemblyNames) {
                    var assemblyNameString = assemblyName as string;
                    if (assemblyNameString != null) {
                        Assembly.Load(new AssemblyName(assemblyNameString));
                    }
                }
                return true;
            });
        }

        public static int EnsureAssembliesLoaded(string descriptor) {
            var dict = MiniJSON.Json.Deserialize(descriptor) as Dictionary<string, object>;
            var parsed = dict["arg"] as IEnumerable<object>;
            foreach (var assemblyName in parsed) {
                var assemblyNameString = assemblyName as string;
                if (assemblyNameString != null) {
                    Assembly.Load(new AssemblyName(assemblyNameString));
                }
            }
            return 0;
        }

    }
}

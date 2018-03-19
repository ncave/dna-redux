using System;
using System.Collections.Generic;

namespace testcs {
    class Program {

        static void Test<T>(T value) {
            var list = M.FList<T>.NewNotEmpty(value, M.FList<T>.Empty);
            var sources = new M.FList<T>[] { list };
            var source = M.mkConcatSeq<M.FList<T>, T>(sources);

            // T[][] sources = new T[][] { new T[] { value } };
            // var source = M.mkConcatSeq<T[], T>(sources);

            foreach (var v in source) {
                Console.WriteLine(v);
            }
        }

        static void Main(string[] args) {
            Test(42);
        }
    }
}

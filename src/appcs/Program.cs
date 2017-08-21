namespace AppCS {
    using System;
    using System.Reflection;
    using static LibCS.Library;

    public class Example {
        public void GenericInstanceMethod<T1, T2>(T1 t1, T2 t2) {
            Console.WriteLine("The answer is: {0}{1}", t1, t2);
        }
    }

    static class Program {

        static void Main(string[] args) {
            hello("World");
            TestGeneric();
            NBody.Run(args);
            TestSort(50000);
        }

        static void TestGeneric() {
            var example = new Example();
            MethodInfo mi = example.GetType().GetMethod("GenericInstanceMethod");
            MethodInfo miSpecialized = mi.MakeGenericMethod(typeof(int), typeof(string));
            object[] args = { 4, "2" };
            miSpecialized.Invoke(example, args);
        }

        static void TestSort(int N) {
            Random rnd = new Random();
            var a = new int[N];
            for (int i = 0; i < N; ++i) { a[i] = rnd.Next(); }
            Console.WriteLine("Sorting {0} numbers", N);
            Measure(() => { Array.Sort(a); });
        }

        static void Measure(Action action) {
            var dtStart = DateTime.UtcNow;
            action();
            var elapsed = DateTime.UtcNow - dtStart;
            Console.WriteLine("Elapsed {0:f3} sec", elapsed.TotalSeconds);
        }

    }
}

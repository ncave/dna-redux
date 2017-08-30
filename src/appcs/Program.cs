namespace AppCS {
    using System;
    using System.Reflection;
    using static LibCS.Library;

    public class GenericMethodClassExample {
        public static void GenericMethod<T1, T2>(T1 t1, T2 t2) {
            Console.WriteLine("The answer is: {0}{1}", t1, t2);
        }
    }

    static class Program {

        static void Main(string[] args) {
            hello("World");
            TestGeneric();
            TestNBody(50_000);
            TestSort(50_000);
        }

        static void TestGeneric() {
            MethodInfo mi = typeof(GenericMethodClassExample).GetMethod("GenericMethod");
            MethodInfo miConstructed = mi.MakeGenericMethod(typeof(long), typeof(string));
            object[] args = { 4L, "2" };
            miConstructed.Invoke(null, args);
        }

        static void TestNBody(int N) {
            Measure(() => { NBody.Run(N); });
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
            Console.WriteLine(", elapsed: {0:f3} sec", elapsed.TotalSeconds);
        }

    }
}

namespace AppCS {
    using System;
    using static LibCS.Library;

    public class GenericMethodClassExample {
        public static object[] GenericMethod<T1, T2, T3, T4, T5>(T1 t1, T2 t2, T3 t3, T4 t4, T5 t5) {
            return new object[] { t1, t2, t3, t4, t5 };
        }
    }

    static class Program {

        static void Main(string[] args) {
            hello("World");
            TestGeneric();
            TestFib(31);
            TestNBody(50_000);
            TestSort(50_000);
        }

        static void TestFib(int N) {
            long slowFib(long n) => (n <= 1) ? n : slowFib(n - 1) + slowFib(n - 2);
            long fib = N < 0 ? 0 : slowFib(N);
            System.Console.WriteLine("slowFib({0}) = {1}", N, fib);
        }

        static void TestGeneric() {
            object callGenericMethod(object[] args, Type[] argTypes) {
                var mi = typeof(GenericMethodClassExample).GetMethod("GenericMethod");
                return mi.MakeGenericMethod(argTypes).Invoke(null, args);
            }
            object[] objects = { 1, "2", 3.0, 4L, "5" };
            Type[] objTypes = { typeof(int), typeof(string), typeof(double), typeof(long), typeof(string) };
            var a = (object[]) callGenericMethod(objects, objTypes);
            System.Console.WriteLine("Numbers: {0},{1},{2},{3},{4}", a[0], a[1], a[2], a[3], a[4]);
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

namespace AppCS {
    using System;

    static class Program {
        static void Main(string[] args) {
            LibCS.Library.hello("World");
            NBody.Run(args);
            TestSort(50000);
        }

        static void TestSort(int N) {
            Random rnd = new Random();
            var a = new int[N];
            for (int i = 0; i < N; ++i) {
                a[i] = rnd.Next();
            }
            Console.WriteLine("Sorting {0} integers", N);
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

namespace AppCS {
    using System;

    static class Program {
        static void Main(string[] args) {
            LibCS.Library.hello("World");
            NBody.Run(args);
            TestSort(50000);
        }

        static void Sort(int[] a) {
            Sort(a, 0, a.Length);
        }

        public static void Sort(int[] a, int start, int count) {
            int gap = count;
            bool swapped;
            int temp;
            do {
                swapped = false;
                gap = gap * 4 / 5; // 1.25 gap reduction
                gap = gap < 1 ? 1 : (gap == 9 || gap == 10) ? 11 : gap;
                for (int i = start; i < count - gap; ++i) {
                    if (a[i] > a[i + gap]) {
                        swapped = true;
                        temp = a[i];
                        a[i] = a[i + gap];
                        a[i + gap] = temp;
                    }
                }
            } while (gap > 1 || swapped);
        }

        static void TestSort(int N) {
            Random rnd = new Random();
            var a = new int[N];
            for (int i = 0; i < N; ++i) {
                a[i] = rnd.Next();
            }
            Console.WriteLine("Sorting {0} integers", N);
            Measure(() => { Sort(a); });
        }

        static void Measure(Action action) {
            var dtStart = DateTime.UtcNow;
            action();
            var elapsed = DateTime.UtcNow - dtStart;
            Console.WriteLine("Elapsed {0:f3} sec", elapsed.TotalSeconds);
        }

    }
}

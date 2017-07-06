namespace LibCS {
    using System;
    using JS.Interop;

    public static class Library {
        private static double sqr(double x) => x * x;
        private static double inv(double x) => 1 / x;

        public static int hello(string name) {
            Console.WriteLine($"Hello {name} from C#!");
            return 0;
        }
        public static int helloAsync(string descriptor) {
            return Promise.From(descriptor, arg => hello((string)arg));
        }
        public static int Sqr(string descriptor) {
            return Promise.From(descriptor, arg => sqr((double)arg));
        }
        public static int Inv(string descriptor) {
            return Promise.From(descriptor, arg => inv((double)arg));
        }
    }
}

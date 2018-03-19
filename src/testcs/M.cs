using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace testcs {
    public class Unit { }

    public static class M {
        public static a noReset<a>() {
            throw new NotSupportedException();
        }

        public static a notStarted<a>() {
            throw new InvalidOperationException();
        }

        public static a alreadyFinished<a>() {
            throw new InvalidOperationException();
        }

        public static void check(bool started) {
            if (!started) {
                throw new InvalidOperationException();
            }
        }

        public static int lengthAcc<T>(int acc, M.FList<T> xs) {
            while (xs is M.NotEmpty<T>) {
                M.NotEmpty<T> notEmpty = (M.NotEmpty<T>)xs;
                int num = acc + 1;
                xs = notEmpty.tail;
                acc = num;
            }
            return acc;
        }

        internal static bool takeOuter<T, U>(M.ConcatEnumerator<T, U> x, Unit unitVar0) where U : IEnumerable<T> {
            while (x.outerEnum.MoveNext()) {
                U u = x.outerEnum.Current;
                // object obj = u;
                // M.EmptyEnumerable<T> emptyEnumerable = u as M.EmptyEnumerable<T>;
                // if (emptyEnumerable == null) {
                if (!(u is M.EmptyEnumerable<T>)) {
                    x.currInnerEnum.Dispose();
                    // M.ConcatEnumerator<T, U> concatEnumerator = x;
                    // U u2 = u;
                    var e = u.GetEnumerator();
                    x.currInnerEnum = e;
                    return M.takeInner<T, U>(x, null);
                }
                // x = x;
            }
            x.Finish();
            return false;
        }

        internal static bool takeInner<T, U>(M.ConcatEnumerator<T, U> x, Unit unitVar0) where U : IEnumerable<T> {
            if (x.currInnerEnum.MoveNext()) {
                x.currElement = x.currInnerEnum.Current;
                return true;
            }
            return M.takeOuter<T, U>(x, null);
        }

        public static IEnumerable<T> mkConcatSeq<U, T>(IEnumerable<U> sources) where U : IEnumerable<T> {
            M.ConcatEnumerator<T, U> e = new M.ConcatEnumerator<T, U>(sources);
            return new M.mkConcatSeq2<T, U>(e);
        }

        public class FList<T> : IReadOnlyCollection<T>, IEnumerable, IEnumerable<T> {
            internal FList() {
            }

            public static M.FList<T> Empty => new M.Empty<T>();
            public bool IsEmpty => this is M.Empty<T>;

            public static M.FList<T> NewNotEmpty(T head, M.FList<T> tail) {
                return new M.NotEmpty<T>(head, tail);
            }

            public bool IsNotEmpty => this is M.NotEmpty<T>;
            public int Length => M.lengthAcc<T>(0, this);

            public T Head {
                get {
                    if (this is M.Empty<T>) {
                        throw new InvalidOperationException();
                    }
                    return ((M.NotEmpty<T>)this).head;
                }
            }

            public M.FList<T> Tail {
                get {
                    if (this is M.Empty<T>) {
                        throw new InvalidOperationException();
                    }
                    return ((M.NotEmpty<T>)this).tail;
                }
            }

            public static M.FList<T> Cons(T head, M.FList<T> tail) {
                return M.FList<T>.NewNotEmpty(head, tail);
            }

            IEnumerator<T> IEnumerable<T>.GetEnumerator() {
                return new M.ListEnumerator<T>(this);
            }

            IEnumerator IEnumerable.GetEnumerator() {
                return new M.ListEnumerator<T>(this);
            }

            int IReadOnlyCollection<T>.Count {
                get {
                    return M.lengthAcc<T>(0, this);
                }
            }

        }

        internal class Empty<T> : M.FList<T> {
            internal Empty() {
            }
        }

        public class NotEmpty<T> : M.FList<T> {
            internal NotEmpty(T head, M.FList<T> tail) {
                this.head = head;
                this.tail = tail;
            }

            internal readonly T head;

            internal readonly M.FList<T> tail;
        }

        public class EmptyEnumerator<T> : IDisposable, IEnumerator, IEnumerator<T> {
            public EmptyEnumerator() {
                this.started = false;
            }

            T IEnumerator<T>.Current {
                get {
                    M.check(this.started);
                    throw new InvalidOperationException();
                }
            }

            object IEnumerator.Current {
                get {
                    M.check(this.started);
                    throw new InvalidOperationException();
                }
            }

            bool IEnumerator.MoveNext() {
                if (!this.started) {
                    this.started = true;
                }
                return false;
            }

            void IEnumerator.Reset() {
                throw new NotSupportedException();
            }

            void IDisposable.Dispose() {
            }

            internal bool started;
        }

        public class EmptyEnumerable<T> : IEnumerable, IEnumerable<T> {

            internal EmptyEnumerable() {
            }

            IEnumerator<T> IEnumerable<T>.GetEnumerator() {
                return new M.EmptyEnumerator<T>();
            }

            IEnumerator IEnumerable.GetEnumerator() {
                return new M.EmptyEnumerator<T>();
            }

        }

        public class ListEnumerator<T> : IDisposable, IEnumerator, IEnumerator<T> {

            public ListEnumerator(M.FList<T> s) {
                this.s = s;
                this.curr = this.s;
                this.started = false;
            }

            public T GetCurrent() {
                if (!this.started) {
                    throw new InvalidOperationException();
                }
                M.FList<T> flist = this.curr;
                if (flist is M.NotEmpty<T>) {
                    return ((M.NotEmpty<T>)flist).head;
                }
                throw new InvalidOperationException();
            }

            T IEnumerator<T>.Current {
                get {
                    return this.GetCurrent();
                }
            }

            bool IEnumerator.MoveNext() {
                if (!this.started) {
                    this.started = true;
                    return !(this.curr is M.Empty<T>);
                }
                M.FList<T> flist = this.curr;
                if (flist is M.NotEmpty<T>) {
                    M.NotEmpty<T> notEmpty = (M.NotEmpty<T>)flist;
                    M.FList<T> tail = notEmpty.tail;
                    this.curr = tail;
                    return !(this.curr is M.Empty<T>);
                }
                return false;
            }

            object IEnumerator.Current {
                get {
                    return this.GetCurrent();
                }
            }

            void IEnumerator.Reset() {
                this.started = false;
                this.curr = this.s;
            }

            void IDisposable.Dispose() {
            }

            internal M.FList<T> s;
            internal M.FList<T> curr;
            internal bool started;
        }

        public class ConcatEnumerator<T, U> : IDisposable, IEnumerator, IEnumerator<T> where U : IEnumerable<T> {
            public ConcatEnumerator(IEnumerable<U> sources) {
                this.outerEnum = sources.GetEnumerator();
                this.currInnerEnum = new M.EmptyEnumerator<T>();
                this.started = false;
                this.finished = false;
                this.compensations = M.FList<object>.Empty;
            }

            public void Finish() {
                this.finished = true;
                try {
                    if (this.currInnerEnum != null) {
                        try {
                            this.currInnerEnum.Dispose();
                        } finally {
                            this.currInnerEnum = null;
                        }
                    }
                } finally {
                    try {
                        if (this.outerEnum != null) {
                            try {
                                this.outerEnum.Dispose();
                            } finally {
                                this.outerEnum = null;
                            }
                        }
                    } finally {
                        try {
                            foreach (var c in this.compensations) {}
                        } finally {
                            this.compensations = M.FList<object>.Empty;
                        }
                    }
                }
            }

            public T GetCurrent() {
                M.check(this.started);
                if (this.finished) {
                    throw new InvalidOperationException();
                }
                return this.currElement;
            }

            T IEnumerator<T>.Current {
                get {
                    return this.GetCurrent();
                }
            }

            object IEnumerator.Current {
                get {
                    return this.GetCurrent();
                }
            }

            bool IEnumerator.MoveNext() {
                if (!this.started) {
                    this.started = true;
                }
                return !this.finished && M.takeInner<T, U>(this, null);
            }

            void IEnumerator.Reset() {
                throw new NotSupportedException();
            }

            void IDisposable.Dispose() {
                if (!this.finished) {
                    this.Finish();
                    return;
                }
            }

            internal IEnumerator<U> outerEnum;
            internal IEnumerator<T> currInnerEnum;
            internal bool started;
            internal bool finished;
            internal M.FList<object> compensations;
            internal T currElement;
        }

        internal class mkConcatSeq2<T, U> : IEnumerable, IEnumerable<T> where U : IEnumerable<T> {
            public mkConcatSeq2(M.ConcatEnumerator<T, U> e) {
                this.e = e;
            }

            IEnumerator<T> IEnumerable<T>.GetEnumerator() {
                return this.e;
            }

            IEnumerator IEnumerable.GetEnumerator() {
                return this.e;
            }

            private M.ConcatEnumerator<T, U> e;
        }
    }
}

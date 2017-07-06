// source: https://bitbucket.org/danipen/mono/src/master/mcs/class/corlib/System/Tuple.cs
// Copyright (C) 2009 Novell

using System;
using System.Collections;
using System.Collections.Generic;

namespace System {
    public static class Tuple {
        public static Tuple<T1, T2> Create<T1, T2>(T1 item1, T2 item2) {
            return new Tuple<T1, T2>(item1, item2);
        }
    }

    [Serializable]
    public class Tuple<T1, T2> : IStructuralEquatable, IStructuralComparable, IComparable {
        T1 item1;
        T2 item2;

        public Tuple(T1 item1, T2 item2) {
            this.item1 = item1;
            this.item2 = item2;
        }

        public T1 Item1 {
            get { return item1; }
        }

        public T2 Item2 {
            get { return item2; }
        }

        int IComparable.CompareTo(object obj) {
            return ((IStructuralComparable)this).CompareTo(obj, Comparer<object>.Default);
        }

        int IStructuralComparable.CompareTo(object other, IComparer comparer) {
            var t = other as Tuple<T1, T2>;
            if (t == null) {
                if (other == null) return 1;
                throw new ArgumentException("other");
            }

            int res = comparer.Compare(item1, t.item1);
            if (res != 0) return res;
            return comparer.Compare(item2, t.item2);
        }

        public override bool Equals(object obj) {
            return ((IStructuralEquatable)this).Equals(obj, EqualityComparer<object>.Default);
        }

        bool IStructuralEquatable.Equals(object other, IEqualityComparer comparer) {
            var t = other as Tuple<T1, T2>;
            if (t == null)
                return false;

            return comparer.Equals(item1, t.item1) &&
                comparer.Equals(item2, t.item2);
        }

        public override int GetHashCode() {
            return ((IStructuralEquatable)this).GetHashCode(EqualityComparer<object>.Default);
        }

        int IStructuralEquatable.GetHashCode(IEqualityComparer comparer) {
            int h = comparer.GetHashCode(item1);
            h = (h << 5) - h + comparer.GetHashCode(item2);
            return h;
        }

        public override string ToString() {
            return String.Format("({0}, {1})", item1, item2);
        }
    }
}

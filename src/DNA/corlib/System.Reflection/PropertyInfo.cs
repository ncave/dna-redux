namespace System.Reflection
{
    public abstract class PropertyInfo : MemberInfo
    {
        private readonly Type _ownerType;
        // private readonly string _name;
        // private readonly Type _propertyType;

        public override string Name { get; }

        public Type PropertyType { get; }

        public MethodInfo GetGetMethod()
        {
            return _ownerType.GetMethod("get_" + Name);
        }

        public MethodInfo GetSetMethod()
        {
            return _ownerType.GetMethod("set_" + Name);
        }

        public MethodInfo GetMethod => GetGetMethod();
        public MethodInfo SetMethod => GetSetMethod();
    }
}

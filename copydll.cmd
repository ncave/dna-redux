@echo on
md wwwroot\bin
copy src\DNA\corlib\bin\Debug\netcoreapp2.0\corlib.dll wwwroot\bin\
copy src\JS.Interop\bin\Debug\netcoreapp2.0\JS.Interop.dll wwwroot\bin\
copy src\FSharp.Core\bin\Debug\netcoreapp2.0\FSharp.Core.dll wwwroot\bin\
copy src\libcs\bin\Debug\netcoreapp2.0\libcs.dll wwwroot\bin\
copy src\libfs\bin\Debug\netcoreapp2.0\libfs.dll wwwroot\bin\
copy src\appcs\bin\Debug\netcoreapp2.0\appcs.dll wwwroot\bin\
copy src\appfs\bin\Debug\netcoreapp2.0\appfs.dll wwwroot\bin\
copy src\testcs\bin\Debug\netcoreapp2.0\testcs.dll wwwroot\bin\
copy src\testfs\bin\Debug\netcoreapp2.0\testfs.dll wwwroot\bin\

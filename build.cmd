@echo off

REM @echo Cleanup...
REM call git clean -fdX

for %%s in (
    "src\DNA\corlib"
    "src\JS.Interop"
    "src\FSharp.Core"
    "src\libcs"
    "src\libfs"
    "src\appcs"
    "src\appfs"
    "src\testcs"
    "src\testfs"
) do (
    dotnet restore %%s
    if ERRORLEVEL 1 goto :fail

    dotnet build %%s
    if ERRORLEVEL 1 goto :fail
)

@echo Building scripts...
call npm install
call npm run build

:done
@echo ---
@echo Build succeeded
@exit /b 0

:fail
@echo ---
@echo Build failed
@exit /b %ERRORLEVEL%

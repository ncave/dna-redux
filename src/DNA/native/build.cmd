@echo off
setlocal enabledelayedexpansion
cd /d %~dp0

set sourceFiles=
for /f "delims=" %%a in ('dir /b src\*.c') do set sourceFiles=!sourceFiles! src\%%a

set emccOptions=%sourceFiles% ^
	-DJS_INTEROP ^
	-Wno-pointer-sign ^
	-Oz ^
	-s NO_EXIT_RUNTIME=1 ^
	-s RESERVED_FUNCTION_POINTERS=20 ^
	-s ASSERTIONS=1 ^
	-s EXPORTED_FUNCTIONS="['_main', '_JSInterop_CallDotNet', '_Debugger_Continue', '_Debugger_SetBreakPoint', '_Debugger_Step', '_Debugger_Reset', '_Debugger_Clear_BreakPoints']" ^
	-s MODULARIZE=1 ^
	-s ALLOW_MEMORY_GROWTH=1 ^
	-s EXPORT_NAME='ModuleFunc' ^
	-s DEFAULT_LIBRARY_FUNCS_TO_INCLUDE="['$Browser']" ^
	-s EXTRA_EXPORTED_RUNTIME_METHODS="['ccall', 'FS_createPreloadedFile']" ^
	--js-library js-interop.js

REM --pre-js pre.js ^
REM --post-js post.js ^

REM set emccOptions=%emccOptions% -DDEBUG_PRINT

set outputRoot=..\..\..\wwwroot\js

echo -------------------------------------------
echo --- Starting native web assembly build
call emcc %emccOptions% -s WASM=1 -o %outputRoot%\wasm\dna.js
echo export { ModuleFunc }; >> %outputRoot%\wasm\dna.js

echo -------------------------------------------
echo --- Starting asm.js build
call emcc %emccOptions% -s WASM=0 -o %outputRoot%\asmjs\dna.js
echo export { ModuleFunc }; >> %outputRoot%\asmjs\dna.js

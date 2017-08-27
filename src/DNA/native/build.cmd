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
	-s WASM=1 ^
	-s MODULARIZE=1 ^
	-s EXPORT_NAME='ModuleFunc' ^
	--pre-js pre.js ^
	--post-js post.js ^
	--js-library js-interop.js

REM set emccOptions=%emccOptions% -DDEBUG_PRINT

set outputRoot=..\..\..\wwwroot\js

echo -------------------------------------------
echo --- Starting native web assembly build
call emcc %emccOptions% -s "BINARYEN_METHOD='native-wasm'" -o %outputRoot%\wasm\dna.js
echo export { ModuleFunc }; >> %outputRoot%\wasm\dna.js

echo -------------------------------------------
echo --- Starting asm.js build
call emcc %emccOptions% -s "BINARYEN_METHOD='asmjs'" -o %outputRoot%\asmjs\dna.js
echo export { ModuleFunc }; >> %outputRoot%\asmjs\dna.js

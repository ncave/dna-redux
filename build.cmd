@echo off

@echo Cleanup...
call npm run clean

@echo Building dotnet...
call dotnet build -c Release

@echo Building scripts...
call npm install
call npm run build

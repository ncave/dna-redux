// Copyright (c) 2012 DotNetAnywhere
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

#ifdef _WIN32
#include <time.h>
#else
#include <sys/time.h>
#endif // _WIN32

#include "Compat.h"
#include "Sys.h"

#include "MetaData.h"
#include "Types.h"

void Crash(char *pMsg, ...) {
	va_list va;

	printf("\n\n*** CRASH ***\n");

	va_start(va, pMsg);
	vprintf(pMsg, va);
	va_end(va);

	printf("\n\n");

#if defined(DIAG_METHOD_CALLS) || defined(DIAG_CALL_STACK)
	abort();
#endif
	
#ifdef _WIN32
	{
		// Cause a delibrate exception, to get into debugger
		__debugbreak();
	}
#endif

	exit(1);
}

U32 logLevel = 0;

void log_f(U32 level, char *pMsg, ...) {
	va_list va;

	if (logLevel >= level) {
		va_start(va, pMsg);
		vprintf(pMsg, va);
		va_end(va);
	}
}

static char circularBuffer[8192] = ""; // increase size if needed
static char *pNextBufferChar = circularBuffer;

void printbuf(const char* format, ...) {
	va_list args;
	I32 n = sizeof(circularBuffer) - (pNextBufferChar - circularBuffer); // space left in buffer
	va_start(args, format);
	I32 c = vsnprintf(pNextBufferChar, n, format, args);
	va_end(args);
	const I32 padding = 200;
	pNextBufferChar = (c >= 0 && c < n && (n - c) > padding) ? pNextBufferChar + c : circularBuffer;
}

void PrintBufferContents() {
	printf("%s", pNextBufferChar + 1);
	printf("%s", circularBuffer);
}

static char methodName[8192]; // must be big enough to handle the biggest types
char* Sys_GetMethodDesc(tMD_MethodDef *pMethod) {
	U32 i;

	sprintf(methodName, "%s.%s.%s(", pMethod->pParentType->nameSpace, pMethod->pParentType->name, pMethod->name);
	for (i=METHOD_ISSTATIC(pMethod)?0:1; i<pMethod->numberOfParameters; i++) {
		if (i > (U32)(METHOD_ISSTATIC(pMethod)?0:1)) {
			sprintf(strchr(methodName, 0), ",");
		}
		sprintf(strchr(methodName, 0), "%s", pMethod->pParams[i].pTypeDef->name);
	}
	sprintf(strchr(methodName, 0), ")");
	return methodName;
}

static U32 allocForeverTotal = 0;
#ifdef DIAG_MEMORY_LEAKS
static U32 allocForeverIndex = 0;
#define allocForeverMax 50000
static void* allocForeverPointers[allocForeverMax];
#endif

// malloc() some memory that will never need to be resized or freed.
static void* allocForever(void* ptr, U32 size) {
	allocForeverTotal += size;
	log_f(3, "--- allocForever: Total Size %d\n", allocForeverTotal);
#ifdef DIAG_MEMORY_LEAKS
	if (allocForeverIndex >= allocForeverMax) Crash("Too many allocForever()");
	allocForeverPointers[allocForeverIndex++] = ptr;
#endif
	return ptr;
}

void* mallocForever(U32 size) {
    return allocForever(calloc(size, 1), size);
}
void* callocForever(U32 count, U32 size) {
	return allocForever(calloc(count, size), count * size);
}

void freeForever() {
#ifdef DIAG_MEMORY_LEAKS
	for (U32 i=0; i < allocForeverIndex; i++) {
		free(allocForeverPointers[i]);
	}
#endif
}

/*
#ifdef _DEBUG
void* mallocTrace(int s, char *pFile, int line) {
	//printf("MALLOC: %s:%d %d\n", pFile, line, s);
#undef malloc
	return malloc(s);
}
#endif
*/

U64 microTime() {
#ifdef _WIN32
	static LARGE_INTEGER freq = {0,0};
	LARGE_INTEGER time;
	if (freq.QuadPart == 0) {
		QueryPerformanceFrequency(&freq);
	}
	QueryPerformanceCounter(&time);
	return (time.QuadPart * 1000000) / freq.QuadPart;
#else
	struct timeval tp;
	U64 ms;
	gettimeofday(&tp,NULL);
	ms = tp.tv_sec;
	ms *= 1000000;
	ms += ((U64)tp.tv_usec);
	return ms;
#endif
}

U64 msTime() {
	return microTime() / 1000;
}

void SleepMS(U32 ms) {
#ifdef _WIN32
	Sleep(ms);
#else
	sleep(ms / 1000);
	usleep((ms % 1000) * 1000);
#endif
}

#ifdef DEBUG_PRINT

#define _CIL_OPDEF(str, op, action, description, type) case op: return str;

char* Sys_CIL_OpCodeName(U32 op) {
    switch (op) {

_CIL_OPDEF("nop", 0x00, "NEXT", "Do nothing (No operation).", "Base instruction")
_CIL_OPDEF("break", 0x01, "BREAK", "Inform a debugger that a breakpoint has been reached.", "Base instruction")
_CIL_OPDEF("ldarg.0", 0x02, "NEXT", "Load argument 0 onto the stack.", "Base instruction")
_CIL_OPDEF("ldarg.1", 0x03, "NEXT", "Load argument 1 onto the stack.", "Base instruction")
_CIL_OPDEF("ldarg.2", 0x04, "NEXT", "Load argument 2 onto the stack.", "Base instruction")
_CIL_OPDEF("ldarg.3", 0x05, "NEXT", "Load argument 3 onto the stack.", "Base instruction")
_CIL_OPDEF("ldloc.0", 0x06, "NEXT", "Load local variable 0 onto stack.", "Base instruction")
_CIL_OPDEF("ldloc.1", 0x07, "NEXT", "Load local variable 1 onto stack.", "Base instruction")
_CIL_OPDEF("ldloc.2", 0x08, "NEXT", "Load local variable 2 onto stack.", "Base instruction")
_CIL_OPDEF("ldloc.3", 0x09, "NEXT", "Load local variable 3 onto stack.", "Base instruction")
_CIL_OPDEF("stloc.0", 0x0A, "NEXT", "Pop a value from stack into local variable 0.", "Base instruction")
_CIL_OPDEF("stloc.1", 0x0B, "NEXT", "Pop a value from stack into local variable 1.", "Base instruction")
_CIL_OPDEF("stloc.2", 0x0C, "NEXT", "Pop a value from stack into local variable 2.", "Base instruction")
_CIL_OPDEF("stloc.3", 0x0D, "NEXT", "Pop a value from stack into local variable 3.", "Base instruction")
_CIL_OPDEF("ldarg.s", 0x0E, "NEXT", "Load argument numbered num onto the stack, short form.", "Base instruction")
_CIL_OPDEF("ldarga.s", 0x0F, "NEXT", "Fetch the address of argument argNum, short form.", "Base instruction")
_CIL_OPDEF("starg.s", 0x10, "NEXT", "Store value to the argument numbered num, short form.", "Base instruction")
_CIL_OPDEF("ldloc.s", 0x11, "NEXT", "Load local variable of index indx onto stack, short form.", "Base instruction")
_CIL_OPDEF("ldloca.s", 0x12, "NEXT", "Load address of local variable with index indx, short form.", "Base instruction")
_CIL_OPDEF("stloc.s", 0x13, "NEXT", "Pop a value from stack into local variable indx, short form.", "Base instruction")
_CIL_OPDEF("ldnull", 0x14, "NEXT", "Push a null reference on the stack.", "Base instruction")
_CIL_OPDEF("ldc.i4.m1", 0x15, "NEXT", "Push -1 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.0", 0x16, "NEXT", "Push 0 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.1", 0x17, "NEXT", "Push 1 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.2", 0x18, "NEXT", "Push 2 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.3", 0x19, "NEXT", "Push 3 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.4", 0x1A, "NEXT", "Push 4 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.5", 0x1B, "NEXT", "Push 5 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.6", 0x1C, "NEXT", "Push 6 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.7", 0x1D, "NEXT", "Push 7 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.8", 0x1E, "NEXT", "Push 8 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i4.s", 0x1F, "NEXT", "Push num onto the stack as int32, short form.", "Base instruction")
_CIL_OPDEF("ldc.i4", 0x20, "NEXT", "Push num of type int32 onto the stack as int32.", "Base instruction")
_CIL_OPDEF("ldc.i8", 0x21, "NEXT", "Push num of type int64 onto the stack as int64.", "Base instruction")
_CIL_OPDEF("ldc.r4", 0x22, "NEXT", "Push num of type float32 onto the stack as F.", "Base instruction")
_CIL_OPDEF("ldc.r8", 0x23, "NEXT", "Push num of type float64 onto the stack as F.", "Base instruction")
_CIL_OPDEF("unused", 0x24, "NEXT", "", "")
_CIL_OPDEF("dup", 0x25, "NEXT", "Duplicate the value on the top of the stack.", "Base instruction")
_CIL_OPDEF("pop", 0x26, "NEXT", "Pop value from the stack.", "Base instruction")
_CIL_OPDEF("jmp", 0x27, "CALL", "Exit current method and jump to the specified method.", "Base instruction")
_CIL_OPDEF("call", 0x28, "CALL", "Call method described by method.", "Base instruction")
_CIL_OPDEF("calli", 0x29, "CALL", "Call method indicated on the stack with arguments described by callsitedescr.", "Base instruction")
_CIL_OPDEF("ret", 0x2A, "RETURN", "Return from method, possibly with a value.", "Base instruction")
_CIL_OPDEF("br.s", 0x2B, "BRANCH", "Branch to target, short form.", "Base instruction")
_CIL_OPDEF("brfalse.s", 0x2C, "COND_BRANCH", "Branch to target if value is zero (false), short form.", "Base instruction")
_CIL_OPDEF("brtrue.s", 0x2D, "COND_BRANCH", "Branch to target if value is non-zero (true), short form.", "Base instruction")
_CIL_OPDEF("beq.s", 0x2E, "COND_BRANCH", "Branch to target if equal, short form.", "Base instruction")
_CIL_OPDEF("bge.s", 0x2F, "COND_BRANCH", "Branch to target if greater than or equal to, short form.", "Base instruction")
_CIL_OPDEF("bgt.s", 0x30, "COND_BRANCH", "Branch to target if greater than, short form.", "Base instruction")
_CIL_OPDEF("ble.s", 0x31, "COND_BRANCH", "Branch to target if less than or equal to, short form.", "Base instruction")
_CIL_OPDEF("blt.s", 0x32, "COND_BRANCH", "Branch to target if less than, short form.", "Base instruction")
_CIL_OPDEF("bne.un.s", 0x33, "COND_BRANCH", "Branch to target if unequal or unordered, short form.", "Base instruction")
_CIL_OPDEF("bge.un.s", 0x34, "COND_BRANCH", "Branch to target if greater than or equal to (unsigned or unordered), short form", "Base instruction")
_CIL_OPDEF("bgt.un.s", 0x35, "COND_BRANCH", "Branch to target if greater than (unsigned or unordered), short form.", "Base instruction")
_CIL_OPDEF("ble.un.s", 0x36, "COND_BRANCH", "Branch to target if less than or equal to (unsigned or unordered), short form", "Base instruction")
_CIL_OPDEF("blt.un.s", 0x37, "COND_BRANCH", "Branch to target if less than (unsigned or unordered), short form.", "Base instruction")
_CIL_OPDEF("br", 0x38, "BRANCH", "Branch to target.", "Base instruction")
_CIL_OPDEF("brfalse", 0x39, "COND_BRANCH", "Branch to target if value is zero (false).", "Base instruction")
_CIL_OPDEF("brtrue", 0x3A, "COND_BRANCH", "Branch to target if value is non-zero (true).", "Base instruction")
_CIL_OPDEF("beq", 0x3B, "COND_BRANCH", "Branch to target if equal.", "Base instruction")
_CIL_OPDEF("bge", 0x3C, "COND_BRANCH", "Branch to target if greater than or equal to.", "Base instruction")
_CIL_OPDEF("bgt", 0x3D, "COND_BRANCH", "Branch to target if greater than.", "Base instruction")
_CIL_OPDEF("ble", 0x3E, "COND_BRANCH", "Branch to target if less than or equal to.", "Base instruction")
_CIL_OPDEF("blt", 0x3F, "COND_BRANCH", "Branch to target if less than.", "Base instruction")
_CIL_OPDEF("bne.un", 0x40, "COND_BRANCH", "Branch to target if unequal or unordered.", "Base instruction")
_CIL_OPDEF("bge.un", 0x41, "COND_BRANCH", "Branch to target if greater than or equal to (unsigned or unordered).", "Base instruction")
_CIL_OPDEF("bgt.un", 0x42, "COND_BRANCH", "Branch to target if greater than (unsigned or unordered).", "Base instruction")
_CIL_OPDEF("ble.un", 0x43, "COND_BRANCH", "Branch to target if less than or equal to (unsigned or unordered).", "Base instruction")
_CIL_OPDEF("blt.un", 0x44, "COND_BRANCH", "Branch to target if less than (unsigned or unordered).", "Base instruction")
_CIL_OPDEF("switch", 0x45, "COND_BRANCH", "Jump to one of n values.", "Base instruction")
_CIL_OPDEF("ldind.i1", 0x46, "NEXT", "Indirect load value of type int8 as int32 on the stack.", "Base instruction")
_CIL_OPDEF("ldind.u1", 0x47, "NEXT", "Indirect load value of type unsigned int8 as int32 on the stack", "Base instruction")
_CIL_OPDEF("ldind.i2", 0x48, "NEXT", "Indirect load value of type int16 as int32 on the stack.", "Base instruction")
_CIL_OPDEF("ldind.u2", 0x49, "NEXT", "Indirect load value of type unsigned int16 as int32 on the stack", "Base instruction")
_CIL_OPDEF("ldind.i4", 0x4A, "NEXT", "Indirect load value of type int32 as int32 on the stack.", "Base instruction")
_CIL_OPDEF("ldind.u4", 0x4B, "NEXT", "Indirect load value of type unsigned int32 as int32 on the stack", "Base instruction")
_CIL_OPDEF("ldind.i8", 0x4C, "NEXT", "Indirect load value of type int64 as int64 on the stack.", "Base instruction")
_CIL_OPDEF("ldind.i", 0x4D, "NEXT", "Indirect load value of type native int as native int on the stack", "Base instruction")
_CIL_OPDEF("ldind.r4", 0x4E, "NEXT", "Indirect load value of type float32 as F on the stack.", "Base instruction")
_CIL_OPDEF("ldind.r8", 0x4F, "NEXT", "Indirect load value of type float64 as F on the stack.", "Base instruction")
_CIL_OPDEF("ldind.ref", 0x50, "NEXT", "Indirect load value of type object ref as O on the stack.", "Base instruction")
_CIL_OPDEF("stind.ref", 0x51, "NEXT", "Store value of type object ref (type O) into memory at address", "Base instruction")
_CIL_OPDEF("stind.i1", 0x52, "NEXT", "Store value of type int8 into memory at address", "Base instruction")
_CIL_OPDEF("stind.i2", 0x53, "NEXT", "Store value of type int16 into memory at address", "Base instruction")
_CIL_OPDEF("stind.i4", 0x54, "NEXT", "Store value of type int32 into memory at address", "Base instruction")
_CIL_OPDEF("stind.i8", 0x55, "NEXT", "Store value of type int64 into memory at address", "Base instruction")
_CIL_OPDEF("stind.r4", 0x56, "NEXT", "Store value of type float32 into memory at address", "Base instruction")
_CIL_OPDEF("stind.r8", 0x57, "NEXT", "Store value of type float64 into memory at address", "Base instruction")
_CIL_OPDEF("add", 0x58, "NEXT", "Add two values, returning a new value.", "Base instruction")
_CIL_OPDEF("sub", 0x59, "NEXT", "Subtract value2 from value1, returning a new value.", "Base instruction")
_CIL_OPDEF("mul", 0x5A, "NEXT", "Multiply values.", "Base instruction")
_CIL_OPDEF("div", 0x5B, "NEXT", "Divide two values to return a quotient or floating-point result.", "Base instruction")
_CIL_OPDEF("div.un", 0x5C, "NEXT", "Divide two values, unsigned, returning a quotient.", "Base instruction")
_CIL_OPDEF("rem", 0x5D, "NEXT", "Remainder when dividing one value by another.", "Base instruction")
_CIL_OPDEF("rem.un", 0x5E, "NEXT", "Remainder when dividing one unsigned value by another.", "Base instruction")
_CIL_OPDEF("and", 0x5F, "NEXT", "Bitwise AND of two integral values, returns an integral value.", "Base instruction")
_CIL_OPDEF("or", 0x60, "NEXT", "Bitwise OR of two integer values, returns an integer.", "Base instruction")
_CIL_OPDEF("xor", 0x61, "NEXT", "Bitwise XOR of integer values, returns an integer.", "Base instruction")
_CIL_OPDEF("shl", 0x62, "NEXT", "Shift an integer left (shifting in zeros), return an integer.", "Base instruction")
_CIL_OPDEF("shr", 0x63, "NEXT", "Shift an integer right (shift in sign), return an integer.", "Base instruction")
_CIL_OPDEF("shr.un", 0x64, "NEXT", "Shift an integer right (shift in zero), return an integer.", "Base instruction")
_CIL_OPDEF("neg", 0x65, "NEXT", "Negate value.", "Base instruction")
_CIL_OPDEF("not", 0x66, "NEXT", "Bitwise complement (logical not).", "Base instruction")
_CIL_OPDEF("conv.i1", 0x67, "NEXT", "Convert to int8, pushing int32 on stack.", "Base instruction")
_CIL_OPDEF("conv.i2", 0x68, "NEXT", "Convert to int16, pushing int32 on stack.", "Base instruction")
_CIL_OPDEF("conv.i4", 0x69, "NEXT", "Convert to int32, pushing int32 on stack.", "Base instruction")
_CIL_OPDEF("conv.i8", 0x6A, "NEXT", "Convert to int64, pushing int64 on stack.", "Base instruction")
_CIL_OPDEF("conv.r4", 0x6B, "NEXT", "Convert to float32, pushing F on stack.", "Base instruction")
_CIL_OPDEF("conv.r8", 0x6C, "NEXT", "Convert to float64, pushing F on stack.", "Base instruction")
_CIL_OPDEF("conv.u4", 0x6D, "NEXT", "Convert to unsigned int32, pushing int32 on stack.", "Base instruction")
_CIL_OPDEF("conv.u8", 0x6E, "NEXT", "Convert to unsigned int64, pushing int64 on stack.", "Base instruction")
_CIL_OPDEF("callvirt", 0x6F, "CALL", "Call a method associated with an object.", "Object model instruction")
_CIL_OPDEF("cpobj", 0x70, "NEXT", "Copy a value type from src to dest.", "Object model instruction")
_CIL_OPDEF("ldobj", 0x71, "NEXT", "Copy the value stored at address src to the stack.", "Object model instruction")
_CIL_OPDEF("ldstr", 0x72, "NEXT", "Push a string object for the literal string.", "Object model instruction")
_CIL_OPDEF("newobj", 0x73, "CALL", "Allocate an uninitialized object or value type and call ctor.", "Object model instruction")
_CIL_OPDEF("castclass", 0x74, "NEXT", "Cast obj to class.", "Object model instruction")
_CIL_OPDEF("isinst", 0x75, "NEXT", "Test if obj is an instance of class, returning null or an instance of that class or interface.", "Object model instruction")
_CIL_OPDEF("conv.r.un", 0x76, "NEXT", "Convert unsigned integer to floating-point, pushing F on stack.", "Base instruction")
_CIL_OPDEF("unused", 0x77, "NEXT", "", "")
_CIL_OPDEF("unused", 0x78, "NEXT", "", "")
_CIL_OPDEF("unbox", 0x79, "NEXT", "Extract a value-type from obj, its boxed representation.", "Object model instruction")
_CIL_OPDEF("throw", 0x7A, "THROW", "Throw an exception.", "Object model instruction")
_CIL_OPDEF("ldfld", 0x7B, "NEXT", "Push the value of field of object (or value type) obj, onto the stack.", "Object model instruction")
_CIL_OPDEF("ldflda", 0x7C, "NEXT", "Push the address of field of object obj on the stack.", "Object model instruction")
_CIL_OPDEF("stfld", 0x7D, "NEXT", "Replace the value of field of the object obj with value.", "Object model instruction")
_CIL_OPDEF("ldsfld", 0x7E, "NEXT", "Push the value of field on the stack.", "Object model instruction")
_CIL_OPDEF("ldsflda", 0x7F, "NEXT", "Push the address of the static field, field, on the stack.", "Object model instruction")
_CIL_OPDEF("stsfld", 0x80, "NEXT", "Replace the value of field with val.", "Object model instruction")
_CIL_OPDEF("stobj", 0x81, "NEXT", "Store a value of type typeTok at an address.", "Object model instruction")
_CIL_OPDEF("conv.ovf.i1.un", 0x82, "NEXT", "Convert unsigned to an int8 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i2.un", 0x83, "NEXT", "Convert unsigned to an int16 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i4.un", 0x84, "NEXT", "Convert unsigned to an int32 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i8.un", 0x85, "NEXT", "Convert unsigned to an int64 (on the stack as int64) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u1.un", 0x86, "NEXT", "Convert unsigned to an unsigned int8 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u2.un", 0x87, "NEXT", "Convert unsigned to an unsigned int16 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u4.un", 0x88, "NEXT", "Convert unsigned to an unsigned int32 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u8.un", 0x89, "NEXT", "Convert unsigned to an unsigned int64 (on the stack as int64) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i.un", 0x8A, "NEXT", "Convert unsigned to a native int (on the stack as native int) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u.un", 0x8B, "NEXT", "Convert unsigned to a native unsigned int (on the stack as native int) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("box", 0x8C, "NEXT", "Convert a boxable value to its boxed form", "Object model instruction")
_CIL_OPDEF("newarr", 0x8D, "NEXT", "Create a new array with elements of type etype.", "Object model instruction")
_CIL_OPDEF("ldlen", 0x8E, "NEXT", "Push the length (of type native unsigned int) of array on the stack.", "Object model instruction")
_CIL_OPDEF("ldelema", 0x8F, "NEXT", "Load the address of element at index onto the top of the stack.", "Object model instruction")
_CIL_OPDEF("ldelem.i1", 0x90, "NEXT", "Load the element with type int8 at index onto the top of the stack as an int32.", "Object model instruction")
_CIL_OPDEF("ldelem.u1", 0x91, "NEXT", "Load the element with type unsigned int8 at index onto the top of the stack as an int32.", "Object model instruction")
_CIL_OPDEF("ldelem.i2", 0x92, "NEXT", "Load the element with type int16 at index onto the top of the stack as an int32.", "Object model instruction")
_CIL_OPDEF("ldelem.u2", 0x93, "NEXT", "Load the element with type unsigned int16 at index onto the top of the stack as an int32.", "Object model instruction")
_CIL_OPDEF("ldelem.i4", 0x94, "NEXT", "Load the element with type int32 at index onto the top of the stack as an int32.", "Object model instruction")
_CIL_OPDEF("ldelem.u4", 0x95, "NEXT", "Load the element with type unsigned int32 at index onto the top of the stack as an int32.", "Object model instruction")
_CIL_OPDEF("ldelem.i8", 0x96, "NEXT", "Load the element with type int64 at index onto the top of the stack as an int64.", "Object model instruction")
_CIL_OPDEF("ldelem.i", 0x97, "NEXT", "Load the element with type native int at index onto the top of the stack as a native int.", "Object model instruction")
_CIL_OPDEF("ldelem.r4", 0x98, "NEXT", "Load the element with type float32 at index onto the top of the stack as an F", "Object model instruction")
_CIL_OPDEF("ldelem.r8", 0x99, "NEXT", "Load the element with type float64 at index onto the top of the stack as an F.", "Object model instruction")
_CIL_OPDEF("ldelem.ref", 0x9A, "NEXT", "Load the element at index onto the top of the stack as an O. The type of the O is the same as the element type of the array pushed on the CIL stack.", "Object model instruction")
_CIL_OPDEF("stelem.i", 0x9B, "NEXT", "Replace array element at index with the i value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.i1", 0x9C, "NEXT", "Replace array element at index with the int8 value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.i2", 0x9D, "NEXT", "Replace array element at index with the int16 value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.i4", 0x9E, "NEXT", "Replace array element at index with the int32 value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.i8", 0x9F, "NEXT", "Replace array element at index with the int64 value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.r4", 0xA0, "NEXT", "Replace array element at index with the float32 value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.r8", 0xA1, "NEXT", "Replace array element at index with the float64 value on the stack.", "Object model instruction")
_CIL_OPDEF("stelem.ref", 0xA2, "NEXT", "Replace array element at index with the ref value on the stack.", "Object model instruction")
_CIL_OPDEF("ldelem", 0xA3, "NEXT", "Load the element at index onto the top of the stack.", "Object model instruction")
_CIL_OPDEF("stelem", 0xA4, "NEXT", "Replace array element at index with the value on the stack", "Object model instruction")
_CIL_OPDEF("unbox.any", 0xA5, "NEXT", "Extract a value-type from obj, its boxed representation", "Object model instruction")
_CIL_OPDEF("unused", 0xA6, "NEXT", "", "")
_CIL_OPDEF("unused", 0xA7, "NEXT", "", "")
_CIL_OPDEF("unused", 0xA8, "NEXT", "", "")
_CIL_OPDEF("unused", 0xA9, "NEXT", "", "")
_CIL_OPDEF("unused", 0xAA, "NEXT", "", "")
_CIL_OPDEF("unused", 0xAB, "NEXT", "", "")
_CIL_OPDEF("unused", 0xAC, "NEXT", "", "")
_CIL_OPDEF("unused", 0xAD, "NEXT", "", "")
_CIL_OPDEF("unused", 0xAE, "NEXT", "", "")
_CIL_OPDEF("unused", 0xAF, "NEXT", "", "")
_CIL_OPDEF("unused", 0xB0, "NEXT", "", "")
_CIL_OPDEF("unused", 0xB1, "NEXT", "", "")
_CIL_OPDEF("unused", 0xB2, "NEXT", "", "")
_CIL_OPDEF("conv.ovf.i1", 0xB3, "NEXT", "Convert to an int8 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u1", 0xB4, "NEXT", "Convert to an unsigned int8 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i2", 0xB5, "NEXT", "Convert to an int16 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u2", 0xB6, "NEXT", "Convert to an unsigned int16 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i4", 0xB7, "NEXT", "Convert to an int32 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u4", 0xB8, "NEXT", "Convert to an unsigned int32 (on the stack as int32) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.i8", 0xB9, "NEXT", "Convert to an int64 (on the stack as int64) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u8", 0xBA, "NEXT", "Convert to an unsigned int64 (on the stack as int64) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("unused", 0xBB, "NEXT", "", "")
_CIL_OPDEF("unused", 0xBC, "NEXT", "", "")
_CIL_OPDEF("unused", 0xBD, "NEXT", "", "")
_CIL_OPDEF("unused", 0xBE, "NEXT", "", "")
_CIL_OPDEF("unused", 0xBF, "NEXT", "", "")
_CIL_OPDEF("unused", 0xC0, "NEXT", "", "")
_CIL_OPDEF("unused", 0xC1, "NEXT", "", "")
_CIL_OPDEF("refanyval", 0xC2, "NEXT", "Push the address stored in a typed reference.", "Object model instruction")
_CIL_OPDEF("ckfinite", 0xC3, "NEXT", "Throw ArithmeticException if value is not a finite number.", "Base instruction")
_CIL_OPDEF("unused", 0xC4, "NEXT", "", "")
_CIL_OPDEF("unused", 0xC5, "NEXT", "", "")
_CIL_OPDEF("mkrefany", 0xC6, "NEXT", "Push a typed reference to ptr of type class onto the stack.", "Object model instruction")
_CIL_OPDEF("unused", 0xC7, "NEXT", "", "")
_CIL_OPDEF("unused", 0xC8, "NEXT", "", "")
_CIL_OPDEF("unused", 0xC9, "NEXT", "", "")
_CIL_OPDEF("unused", 0xCA, "NEXT", "", "")
_CIL_OPDEF("unused", 0xCB, "NEXT", "", "")
_CIL_OPDEF("unused", 0xCC, "NEXT", "", "")
_CIL_OPDEF("unused", 0xCD, "NEXT", "", "")
_CIL_OPDEF("unused", 0xCE, "NEXT", "", "")
_CIL_OPDEF("unused", 0xCF, "NEXT", "", "")
_CIL_OPDEF("ldtoken", 0xD0, "NEXT", "Convert metadata token to its runtime representation.", "Object model instruction")
_CIL_OPDEF("conv.u2", 0xD1, "NEXT", "Convert to unsigned int16, pushing int32 on stack.", "Base instruction")
_CIL_OPDEF("conv.u1", 0xD2, "NEXT", "Convert to unsigned int8, pushing int32 on stack.", "Base instruction")
_CIL_OPDEF("conv.i", 0xD3, "NEXT", "Convert to native int, pushing native int on stack.", "Base instruction")
_CIL_OPDEF("conv.ovf.i", 0xD4, "NEXT", "Convert to a native int (on the stack as native int) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("conv.ovf.u", 0xD5, "NEXT", "Convert to a native unsigned int (on the stack as native int) and throw an exception on overflow.", "Base instruction")
_CIL_OPDEF("add.ovf", 0xD6, "NEXT", "Add signed integer values with overflow check.", "Base instruction")
_CIL_OPDEF("add.ovf.un", 0xD7, "NEXT", "Add unsigned integer values with overflow check.", "Base instruction")
_CIL_OPDEF("mul.ovf", 0xD8, "NEXT", "Multiply signed integer values. Signed result shall fit in same size", "Base instruction")
_CIL_OPDEF("mul.ovf.un", 0xD9, "NEXT", "Multiply unsigned integer values. Unsigned result shall fit in same size", "Base instruction")
_CIL_OPDEF("sub.ovf", 0xDA, "NEXT", "Subtract native int from a native int. Signed result shall fit in same size", "Base instruction")
_CIL_OPDEF("sub.ovf.un", 0xDB, "NEXT", "Subtract native unsigned int from a native unsigned int. Unsigned result shall fit in same size.", "Base instruction")
_CIL_OPDEF("endfinally", 0xDC, "RETURN", "End finally clause of an exception block.", "Base instruction")
_CIL_OPDEF("leave", 0xDD, "BRANCH", "Exit a protected region of code.", "Base instruction")
_CIL_OPDEF("leave.s", 0xDE, "BRANCH", "Exit a protected region of code, short form.", "Base instruction")
_CIL_OPDEF("stind.i", 0xDF, "NEXT", "Store value of type native int into memory at address", "Base instruction")
_CIL_OPDEF("conv.u", 0xE0, "NEXT", "Convert to native unsigned int, pushing native int on stack.", "Base instruction")
_CIL_OPDEF("unused", 0xE1, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE2, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE3, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE4, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE5, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE6, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE7, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE8, "NEXT", "", "")
_CIL_OPDEF("unused", 0xE9, "NEXT", "", "")
_CIL_OPDEF("unused", 0xEA, "NEXT", "", "")
_CIL_OPDEF("unused", 0xEB, "NEXT", "", "")
_CIL_OPDEF("unused", 0xEC, "NEXT", "", "")
_CIL_OPDEF("unused", 0xED, "NEXT", "", "")
_CIL_OPDEF("unused", 0xEE, "NEXT", "", "")
_CIL_OPDEF("unused", 0xEF, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF0, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF1, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF2, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF3, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF4, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF5, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF6, "NEXT", "", "")
_CIL_OPDEF("unused", 0xF7, "NEXT", "", "")
_CIL_OPDEF("prefix7", 0xF8, "META", "", "")
_CIL_OPDEF("prefix6", 0xF9, "META", "", "")
_CIL_OPDEF("prefix5", 0xFA, "META", "", "")
_CIL_OPDEF("prefix4", 0xFB, "META", "", "")
_CIL_OPDEF("prefix3", 0xFC, "META", "", "")
_CIL_OPDEF("prefix2", 0xFD, "META", "", "")
_CIL_OPDEF("prefix1", 0xFE, "META", "", "")
_CIL_OPDEF("prefixref", 0xFF, "META", "", "")
_CIL_OPDEF("arglist", 0xFE00, "NEXT", "Return argument list handle for the current method.", "Base instruction")
_CIL_OPDEF("ceq", 0xFE01, "NEXT", "Push 1 (of type int32) if value1 equals value2, else push 0.", "Base instruction")
_CIL_OPDEF("cgt", 0xFE02, "NEXT", "Push 1 (of type int32) if value1 > value2, else push 0.", "Base instruction")
_CIL_OPDEF("cgt.un", 0xFE03, "NEXT", "Push 1 (of type int32) if value1 > value2, unsigned or unordered, else push 0.", "Base instruction")
_CIL_OPDEF("clt", 0xFE04, "NEXT", "Push 1 (of type int32) if value1 < value2, else push 0.", "Base instruction")
_CIL_OPDEF("clt.un", 0xFE05, "NEXT", "Push 1 (of type int32) if value1 < value2, unsigned or unordered, else push 0.", "Base instruction")
_CIL_OPDEF("ldftn", 0xFE06, "NEXT", "Push a pointer to a method referenced by method, on the stack.", "Base instruction")
_CIL_OPDEF("ldvirtftn", 0xFE07, "NEXT", "Push address of virtual method on the stack.", "Object model instruction")
_CIL_OPDEF("unused", 0xFE08, "NEXT", "", "")
_CIL_OPDEF("ldarg", 0xFE09, "NEXT", "Load argument numbered num onto the stack.", "Base instruction")
_CIL_OPDEF("ldarga", 0xFE0A, "NEXT", "Fetch the address of argument argNum.", "Base instruction")
_CIL_OPDEF("starg", 0xFE0B, "NEXT", "Store value to the argument numbered num.", "Base instruction")
_CIL_OPDEF("ldloc", 0xFE0C, "NEXT", "Load local variable of index indx onto stack.", "Base instruction")
_CIL_OPDEF("ldloca", 0xFE0D, "NEXT", "Load address of local variable with index indx.", "Base instruction")
_CIL_OPDEF("stloc", 0xFE0E, "NEXT", "Pop a value from stack into local variable indx.", "Base instruction")
_CIL_OPDEF("localloc", 0xFE0F, "NEXT", "Allocate space from the local memory pool.", "Base instruction")
_CIL_OPDEF("unused", 0xFE10, "NEXT", "", "")
_CIL_OPDEF("endfilter", 0xFE11, "RETURN", "End an exception handling filter clause.", "Base instruction")
_CIL_OPDEF("unaligned.", 0xFE12, "META", "Subsequent pointer instruction might be unaligned.", "Prefix to instruction")
_CIL_OPDEF("volatile.", 0xFE13, "META", "Subsequent pointer reference is volatile.", "Prefix to instruction")
_CIL_OPDEF("tail.", 0xFE14, "META", "Subsequent call terminates current method", "Prefix to instruction")
_CIL_OPDEF("initobj", 0xFE15, "NEXT", "Initialize the value at address dest.", "Object model instruction")
_CIL_OPDEF("constrained.", 0xFE16, "NEXT", "Call a virtual method on a type constrained to be type T", "Prefix to instruction")
_CIL_OPDEF("cpblk", 0xFE17, "NEXT", "Copy data from memory to memory.", "Base instruction")
_CIL_OPDEF("initblk", 0xFE18, "NEXT", "Set all bytes in a block of memory to a given byte value.", "Base instruction")
_CIL_OPDEF("no.", 0xFE19, "NEXT", "The specified fault check(s) normally performed as part of the execution of the subsequent instruction can/shall be skipped.", "Prefix to instruction")
_CIL_OPDEF("rethrow", 0xFE1A, "THROW", "Rethrow the current exception.", "Object model instruction")
_CIL_OPDEF("unused", 0xFE1B, "NEXT", "", "")
_CIL_OPDEF("sizeof", 0xFE1C, "NEXT", "Push the size, in bytes, of a type as an unsigned int32.", "Object model instruction")
_CIL_OPDEF("refanytype", 0xFE1D, "NEXT", "Push the type token stored in a typed reference.", "Object model instruction")
_CIL_OPDEF("readonly.", 0xFE1E, "NEXT", "Specify that the subsequent array address operation performs no type check at runtime, and that it returns a controlled-mutability managed pointer", "Prefix to instruction")

        default: return "undefined";
    }
}


#define _JIT_OPDEF(str, op) case op: return str;

char* Sys_JIT_OpCodeName(U32 op) {
    switch (op) {

_JIT_OPDEF("NOP", 0x0)
_JIT_OPDEF("RETURN", 0x1)
_JIT_OPDEF("LOAD_I32", 0x2)
_JIT_OPDEF("BRANCH", 0x3)
_JIT_OPDEF("LOAD_STRING", 0x4)
_JIT_OPDEF("CALLVIRT_O", 0x5)
_JIT_OPDEF("CALL_NATIVE", 0x6)
_JIT_OPDEF("CALL_O", 0x7)
_JIT_OPDEF("NEWOBJECT", 0x8)
_JIT_OPDEF("LOAD_PARAMLOCAL_ADDR", 0x9)
_JIT_OPDEF("CALL_PTR", 0xa)
_JIT_OPDEF("BOX_CALLVIRT", 0xb)
_JIT_OPDEF("INIT_VALUETYPE", 0xc)
_JIT_OPDEF("NEW_VECTOR", 0xd)
_JIT_OPDEF("NEWOBJECT_VALUETYPE", 0xe)
_JIT_OPDEF("IS_INSTANCE", 0xf)
_JIT_OPDEF("LOAD_NULL", 0x10)
_JIT_OPDEF("UNBOX2VALUETYPE", 0x11)
_JIT_OPDEF("UNBOX2OBJECT", 0x12)
_JIT_OPDEF("LOAD_FIELD_ADDR", 0x13)
_JIT_OPDEF("DUP_GENERAL", 0x14)
_JIT_OPDEF("POP", 0x15)
_JIT_OPDEF("STORE_OBJECT_VALUETYPE", 0x16)
_JIT_OPDEF("DEREF_CALLVIRT", 0x17)
_JIT_OPDEF("STORE_ELEMENT", 0x18)
_JIT_OPDEF("LEAVE", 0x19)
_JIT_OPDEF("END_FINALLY", 0x1a)
_JIT_OPDEF("THROW", 0x1b)
_JIT_OPDEF("RETHROW", 0x1c)
_JIT_OPDEF("LOADOBJECT", 0x1d)
_JIT_OPDEF("LOAD_VECTOR_LEN", 0x1e)
_JIT_OPDEF("SWITCH", 0x1f)
_JIT_OPDEF("LOAD_ELEMENT_ADDR", 0x20)
_JIT_OPDEF("CALL_INTERFACE", 0x21)
_JIT_OPDEF("CAST_CLASS", 0x22)
_JIT_OPDEF("LOAD_ELEMENT", 0x23)
_JIT_OPDEF("LOADFIELD_VALUETYPE", 0x24)
_JIT_OPDEF("LOADFIELD", 0x25)
_JIT_OPDEF("LOADFUNCTION", 0x26)
_JIT_OPDEF("INVOKE_DELEGATE", 0x27)
_JIT_OPDEF("CALL_PINVOKE", 0x28)
_JIT_OPDEF("LOAD_I64", 0x29)
_JIT_OPDEF("INIT_OBJECT", 0x2a)
_JIT_OPDEF("DUP_4", 0x2b)
_JIT_OPDEF("DUP_8", 0x2c)
_JIT_OPDEF("LOADSTATICFIELDADDRESS_CHECKTYPEINIT", 0x2d)
_JIT_OPDEF("POP_4", 0x2e)
_JIT_OPDEF("LOAD_F32", 0x2f)

_JIT_OPDEF("LOADPARAMLOCAL_INT64", 0x30)
_JIT_OPDEF("LOADPARAMLOCAL_INT32", 0x31)
_JIT_OPDEF("LOADPARAMLOCAL_INTNATIVE", 0x32)
_JIT_OPDEF("LOADPARAMLOCAL_F64", 0x33)
_JIT_OPDEF("LOADPARAMLOCAL_PTR", 0x34)
_JIT_OPDEF("LOADPARAMLOCAL_O", 0x35)
_JIT_OPDEF("LOADPARAMLOCAL_F32", 0x36)
_JIT_OPDEF("LOADPARAMLOCAL_VALUETYPE", 0x37)

_JIT_OPDEF("STOREPARAMLOCAL_INT64", 0x38)
_JIT_OPDEF("STOREPARAMLOCAL_INT32", 0x39)
_JIT_OPDEF("STOREPARAMLOCAL_INTNATIVE", 0x3a)
_JIT_OPDEF("STOREPARAMLOCAL_F64", 0x3b)
_JIT_OPDEF("STOREPARAMLOCAL_PTR", 0x3c)
_JIT_OPDEF("STOREPARAMLOCAL_O", 0x3d)
_JIT_OPDEF("STOREPARAMLOCAL_F32", 0x3e)
_JIT_OPDEF("STOREPARAMLOCAL_VALUETYPE", 0x3f)

_JIT_OPDEF("STOREFIELD_INT64", 0x48)
_JIT_OPDEF("STOREFIELD_INT32", 0x49)
_JIT_OPDEF("STOREFIELD_INTNATIVE", 0x4a)
_JIT_OPDEF("STOREFIELD_F64", 0x4b)
_JIT_OPDEF("STOREFIELD_PTR", 0x4c)
_JIT_OPDEF("STOREFIELD_O", 0x4d)
_JIT_OPDEF("STOREFIELD_F32", 0x4e)
_JIT_OPDEF("STOREFIELD_VALUETYPE", 0x4f)

_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_INT64", 0x50)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_INT32", 0x51)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_INTNATIVE", 0x52)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_F64", 0x53)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_PTR", 0x54)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_O", 0x55)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_F32", 0x56)
_JIT_OPDEF("LOADSTATICFIELD_CHECKTYPEINIT_VALUETYPE", 0x57)

_JIT_OPDEF("LOADSTATICFIELD_INT64", 0x58)
_JIT_OPDEF("LOADSTATICFIELD_INT32", 0x59)
_JIT_OPDEF("LOADSTATICFIELD_INTNATIVE", 0x5a)
_JIT_OPDEF("LOADSTATICFIELD_F64", 0x5b)
_JIT_OPDEF("LOADSTATICFIELD_PTR", 0x5c)
_JIT_OPDEF("LOADSTATICFIELD_O", 0x5d)
_JIT_OPDEF("LOADSTATICFIELD_F32", 0x5e)
_JIT_OPDEF("LOADSTATICFIELD_VALUETYPE", 0x5f)

_JIT_OPDEF("STORESTATICFIELD_INT64", 0x60)
_JIT_OPDEF("STORESTATICFIELD_INT32", 0x61)
_JIT_OPDEF("STORESTATICFIELD_INTNATIVE", 0x62)
_JIT_OPDEF("STORESTATICFIELD_F64", 0x63)
_JIT_OPDEF("STORESTATICFIELD_PTR", 0x64)
_JIT_OPDEF("STORESTATICFIELD_O", 0x65)
_JIT_OPDEF("STORESTATICFIELD_F32", 0x66)
_JIT_OPDEF("STORESTATICFIELD_VALUETYPE", 0x67)

_JIT_OPDEF("BOX_INT64", 0x68)
_JIT_OPDEF("BOX_INT32", 0x69)
_JIT_OPDEF("BOX_INTNATIVE", 0x6a)
_JIT_OPDEF("BOX_F64", 0x6b)
_JIT_OPDEF("BOX_PTR", 0x6c)
_JIT_OPDEF("BOX_O", 0x6d)
_JIT_OPDEF("BOX_F32", 0x6e)
_JIT_OPDEF("BOX_VALUETYPE", 0x6f)

_JIT_OPDEF("CEQ_I32I32", 0x70)
_JIT_OPDEF("CGT_I32I32", 0x71)
_JIT_OPDEF("CGT_UN_I32I32", 0x72)
_JIT_OPDEF("CLT_I32I32", 0x73)
_JIT_OPDEF("CLT_UN_I32I32", 0x74)

_JIT_OPDEF("CEQ_I64I64", 0x75)
_JIT_OPDEF("CGT_I64I64", 0x76)
_JIT_OPDEF("CGT_UN_I64I64", 0x77)
_JIT_OPDEF("CLT_I64I64", 0x78)
_JIT_OPDEF("CLT_UN_I64I64", 0x79)

_JIT_OPDEF("ADD_OVF_I32I32", 0x7a)
_JIT_OPDEF("ADD_OVF_UN_I32I32", 0x7b)
_JIT_OPDEF("MUL_OVF_I32I32", 0x7c)
_JIT_OPDEF("MUL_OVF_UN_I32I32", 0x7d)
_JIT_OPDEF("SUB_OVF_I32I32", 0x7e)
_JIT_OPDEF("SUB_OVF_UN_I32I32", 0x7f)
_JIT_OPDEF("ADD_I32I32", 0x80)
_JIT_OPDEF("SUB_I32I32", 0x81)
_JIT_OPDEF("MUL_I32I32", 0x82)
_JIT_OPDEF("DIV_I32I32", 0x83)
_JIT_OPDEF("DIV_UN_I32I32", 0x84)
_JIT_OPDEF("REM_I32I32", 0x85)
_JIT_OPDEF("REM_UN_I32I32", 0x86)
_JIT_OPDEF("AND_I32I32", 0x87)
_JIT_OPDEF("OR_I32I32", 0x88)
_JIT_OPDEF("XOR_I32I32", 0x89)

_JIT_OPDEF("NEG_I32", 0x8a)
_JIT_OPDEF("NOT_I32", 0x8b)
_JIT_OPDEF("NEG_I64", 0x8c)
_JIT_OPDEF("NOT_I64", 0x8d)
_JIT_OPDEF("NEG_F32", 0x8e)
_JIT_OPDEF("NEG_F64", 0x8f)

_JIT_OPDEF("BEQ_I32I32", 0x90)
_JIT_OPDEF("BGE_I32I32", 0x91)
_JIT_OPDEF("BGT_I32I32", 0x92)
_JIT_OPDEF("BLE_I32I32", 0x93)
_JIT_OPDEF("BLT_I32I32", 0x94)
_JIT_OPDEF("BNE_UN_I32I32", 0x95)
_JIT_OPDEF("BGE_UN_I32I32", 0x96)
_JIT_OPDEF("BGT_UN_I32I32", 0x97)
_JIT_OPDEF("BLE_UN_I32I32", 0x98)
_JIT_OPDEF("BLT_UN_I32I32", 0x99)

_JIT_OPDEF("BEQ_I64I64", 0x9a)
_JIT_OPDEF("BGE_I64I64", 0x9b)
_JIT_OPDEF("BGT_I64I64", 0x9c)
_JIT_OPDEF("BLE_I64I64", 0x9d)
_JIT_OPDEF("BLT_I64I64", 0x9e)
_JIT_OPDEF("BNE_UN_I64I64", 0x9f)
_JIT_OPDEF("BGE_UN_I64I64", 0xa0)
_JIT_OPDEF("BGT_UN_I64I64", 0xa1)
_JIT_OPDEF("BLE_UN_I64I64", 0xa2)
_JIT_OPDEF("BLT_UN_I64I64", 0xa3)

_JIT_OPDEF("SHL_I32", 0xa4)
_JIT_OPDEF("SHR_I32", 0xa5)
_JIT_OPDEF("SHR_UN_I32", 0xa6)
_JIT_OPDEF("SHL_I64", 0xa7)
_JIT_OPDEF("SHR_I64", 0xa8)
_JIT_OPDEF("SHR_UN_I64", 0xa9)

_JIT_OPDEF("BRANCH_FALSE", 0xaa)
_JIT_OPDEF("BRANCH_TRUE", 0xab)
_JIT_OPDEF("BRANCH64_FALSE", 0xac)
_JIT_OPDEF("BRANCH64_TRUE", 0xad)

_JIT_OPDEF("BOX_NULLABLE", 0xae)
_JIT_OPDEF("LOAD_F64", 0xaf)

_JIT_OPDEF("LOADTOKEN_TYPE", 0xb0)
_JIT_OPDEF("LOADTOKEN_METHOD", 0xb1)
_JIT_OPDEF("LOADTOKEN_FIELD", 0xb2)

_JIT_OPDEF("LOADINDIRECT_I8", 0xb3)
_JIT_OPDEF("LOADINDIRECT_U8", 0xb4)
_JIT_OPDEF("LOADINDIRECT_I16", 0xb5)
_JIT_OPDEF("LOADINDIRECT_U16", 0xb6)
_JIT_OPDEF("LOADINDIRECT_I32", 0xb7)
_JIT_OPDEF("LOADINDIRECT_U32", 0xb8)
_JIT_OPDEF("LOADINDIRECT_I64", 0xb9)
_JIT_OPDEF("LOADINDIRECT_I", 0xba)
_JIT_OPDEF("LOADINDIRECT_R32", 0xbb)
_JIT_OPDEF("LOADINDIRECT_R64", 0xbc)
_JIT_OPDEF("LOADINDIRECT_REF", 0xbd)

_JIT_OPDEF("STOREINDIRECT_REF", 0xbe)
_JIT_OPDEF("STOREINDIRECT_U8", 0xbf)
_JIT_OPDEF("STOREINDIRECT_U16", 0xc0)
_JIT_OPDEF("STOREINDIRECT_U32", 0xc1)
_JIT_OPDEF("STOREINDIRECT_U64", 0xc2)
_JIT_OPDEF("STOREINDIRECT_R32", 0xc3)
_JIT_OPDEF("STOREINDIRECT_R64", 0xc4)

//_JIT_OPDEF("CONV_SIGNED32", 0xc5)
//_JIT_OPDEF("CONV_UNSIGNED32", 0xc6)
//_JIT_OPDEF("CONV_INT_I64", 0xc7)

//_JIT_OPDEF("CONV_I1", 0xc5)
//_JIT_OPDEF("CONV_I2", 0xc6)
//_JIT_OPDEF("CONV_I4", 0xc7)
//_JIT_OPDEF("CONV_I8", 0xc8)
//_JIT_OPDEF("CONV_R4", 0xc9)
//_JIT_OPDEF("CONV_R8", 0xca)
//_JIT_OPDEF("CONV_U4", 0xcb)
//_JIT_OPDEF("CONV_U8", 0xcc)
//_JIT_OPDEF("CONV_U2", 0xcd)
//_JIT_OPDEF("CONV_U1", 0xce)
//_JIT_OPDEF("CONV_I_NATIVE", 0xcf)
//_JIT_OPDEF("CONV_U_NATIVE", 0xd0)

//_JIT_OPDEF("CONV_OVF_I1", 0xd1)
//_JIT_OPDEF("CONV_OVF_U1", 0xd2)
//_JIT_OPDEF("CONV_OVF_I2", 0xd3)
//_JIT_OPDEF("CONV_OVF_U2", 0xd4)
//_JIT_OPDEF("CONV_OVF_I4", 0xd5)
//_JIT_OPDEF("CONV_OVF_U4", 0xd6)
//_JIT_OPDEF("CONV_OVF_I8", 0xd7)
//_JIT_OPDEF("CONV_OVF_U8", 0xd8)

_JIT_OPDEF("UNBOX_NULLABLE", 0xda)

_JIT_OPDEF("STORE_ELEMENT_32", 0xde)
_JIT_OPDEF("STORE_ELEMENT_64", 0xdf)

_JIT_OPDEF("LOAD_ELEMENT_I8", 0xe0)
_JIT_OPDEF("LOAD_ELEMENT_U8", 0xe1)
_JIT_OPDEF("LOAD_ELEMENT_I16", 0xe2)
_JIT_OPDEF("LOAD_ELEMENT_U16", 0xe3)
_JIT_OPDEF("LOAD_ELEMENT_I32", 0xe4)
_JIT_OPDEF("LOAD_ELEMENT_U32", 0xe5)
_JIT_OPDEF("LOAD_ELEMENT_I64", 0xe6)
_JIT_OPDEF("LOAD_ELEMENT_R32", 0xe7)
_JIT_OPDEF("LOAD_ELEMENT_R64", 0xe8)

_JIT_OPDEF("ADD_OVF_I64I64", 0xea)
_JIT_OPDEF("ADD_OVF_UN_I64I64", 0xeb)
_JIT_OPDEF("MUL_OVF_I64I64", 0xec)
_JIT_OPDEF("MUL_OVF_UN_I64I64", 0xed)
_JIT_OPDEF("SUB_OVF_I64I64", 0xee)
_JIT_OPDEF("SUB_OVF_UN_I64I64", 0xef)
_JIT_OPDEF("ADD_I64I64", 0xf0)
_JIT_OPDEF("SUB_I64I64", 0xf1)
_JIT_OPDEF("MUL_I64I64", 0xf2)
_JIT_OPDEF("DIV_I64I64", 0xf3)
_JIT_OPDEF("DIV_UN_I64I64", 0xf4)
_JIT_OPDEF("REM_I64I64", 0xf5)
_JIT_OPDEF("REM_UN_I64I64", 0xf6)
_JIT_OPDEF("AND_I64I64", 0xf7)
_JIT_OPDEF("OR_I64I64", 0xf8)
_JIT_OPDEF("XOR_I64I64", 0xf9)

_JIT_OPDEF("CEQ_F32F32", 0xfa)
_JIT_OPDEF("CGT_F32F32", 0xfb)
_JIT_OPDEF("CGT_UN_F32F32", 0xfc)
_JIT_OPDEF("CLT_F32F32", 0xfd)
_JIT_OPDEF("CLT_UN_F32F32", 0xfe)

_JIT_OPDEF("BEQ_F32F32", 0xff)
_JIT_OPDEF("BGE_F32F32", 0x100)
_JIT_OPDEF("BGT_F32F32", 0x101)
_JIT_OPDEF("BLE_F32F32", 0x102)
_JIT_OPDEF("BLT_F32F32", 0x103)
_JIT_OPDEF("BNE_UN_F32F32", 0x104)
_JIT_OPDEF("BGE_UN_F32F32", 0x105)
_JIT_OPDEF("BGT_UN_F32F32", 0x106)
_JIT_OPDEF("BLE_UN_F32F32", 0x107)
_JIT_OPDEF("BLT_UN_F32F32", 0x108)

_JIT_OPDEF("ADD_F32F32", 0x109)
_JIT_OPDEF("SUB_F32F32", 0x10a)
_JIT_OPDEF("MUL_F32F32", 0x10b)
_JIT_OPDEF("DIV_F32F32", 0x10c)
_JIT_OPDEF("DIV_UN_F32F32", 0x10d) // Not used
_JIT_OPDEF("REM_F32F32", 0x10e)
_JIT_OPDEF("REM_UN_F32F32", 0x10f) // Not used

_JIT_OPDEF("CEQ_F64F64", 0x110)
_JIT_OPDEF("CGT_F64F64", 0x111)
_JIT_OPDEF("CGT_UN_F64F64", 0x112)
_JIT_OPDEF("CLT_F64F64", 0x113)
_JIT_OPDEF("CLT_UN_F64F64", 0x114)

_JIT_OPDEF("BEQ_F64F64", 0x115)
_JIT_OPDEF("BGE_F64F64", 0x116)
_JIT_OPDEF("BGT_F64F64", 0x117)
_JIT_OPDEF("BLE_F64F64", 0x118)
_JIT_OPDEF("BLT_F64F64", 0x119)
_JIT_OPDEF("BNE_UN_F64F64", 0x11a)
_JIT_OPDEF("BGE_UN_F64F64", 0x11b)
_JIT_OPDEF("BGT_UN_F64F64", 0x11c)
_JIT_OPDEF("BLE_UN_F64F64", 0x11d)
_JIT_OPDEF("BLT_UN_F64F64", 0x11e)

_JIT_OPDEF("ADD_F64F64", 0x11f)
_JIT_OPDEF("SUB_F64F64", 0x120)
_JIT_OPDEF("MUL_F64F64", 0x121)
_JIT_OPDEF("DIV_F64F64", 0x122)
_JIT_OPDEF("DIV_UN_F64F64", 0x123) // Not used
_JIT_OPDEF("REM_F64F64", 0x124)
_JIT_OPDEF("REM_UN_F64F64", 0x125) // Not used

_JIT_OPDEF("LOADPARAMLOCAL_0", 0x127) // Load 4-byte param/local at offset 0)
_JIT_OPDEF("LOADPARAMLOCAL_1", 0x128) // Load 4-byte param/local at offset 4)
_JIT_OPDEF("LOADPARAMLOCAL_2", 0x129) // Load 4-byte param/local at offset 8)
_JIT_OPDEF("LOADPARAMLOCAL_3", 0x12a) // Load 4-byte param/local at offset 12)
_JIT_OPDEF("LOADPARAMLOCAL_4", 0x12b) // Load 4-byte param/local at offset 16)
_JIT_OPDEF("LOADPARAMLOCAL_5", 0x12c) // Load 4-byte param/local at offset 20)
_JIT_OPDEF("LOADPARAMLOCAL_6", 0x12d) // Load 4-byte param/local at offset 24)
_JIT_OPDEF("LOADPARAMLOCAL_7", 0x12e) // Load 4-byte param/local at offset 28)

_JIT_OPDEF("STOREPARAMLOCAL_0", 0x12f) // Store 4-byte param/local at offset 0)
_JIT_OPDEF("STOREPARAMLOCAL_1", 0x130) // Store 4-byte param/local at offset 4)
_JIT_OPDEF("STOREPARAMLOCAL_2", 0x131) // Store 4-byte param/local at offset 8)
_JIT_OPDEF("STOREPARAMLOCAL_3", 0x132) // Store 4-byte param/local at offset 12)
_JIT_OPDEF("STOREPARAMLOCAL_4", 0x133) // Store 4-byte param/local at offset 16)
_JIT_OPDEF("STOREPARAMLOCAL_5", 0x134) // Store 4-byte param/local at offset 20)
_JIT_OPDEF("STOREPARAMLOCAL_6", 0x135) // Store 4-byte param/local at offset 24)
_JIT_OPDEF("STOREPARAMLOCAL_7", 0x136) // Store 4-byte param/local at offset 28)

_JIT_OPDEF("LOAD_I4_M1", 0x137)
_JIT_OPDEF("LOAD_I4_0", 0x138)
_JIT_OPDEF("LOAD_I4_1", 0x139)
_JIT_OPDEF("LOAD_I4_2", 0x13a)

_JIT_OPDEF("LOADFIELD_4", 0x13b)

_JIT_OPDEF("CONV_I32_I32", 0x140)
_JIT_OPDEF("CONV_I32_U32", 0x141)
_JIT_OPDEF("CONV_I32_I64", 0x142)
_JIT_OPDEF("CONV_I32_U64", 0x143)
_JIT_OPDEF("CONV_I32_R32", 0x144)
_JIT_OPDEF("CONV_I32_R64", 0x145)

_JIT_OPDEF("CONV_U32_I32", 0x146)
_JIT_OPDEF("CONV_U32_U32", 0x147)
_JIT_OPDEF("CONV_U32_I64", 0x148)
_JIT_OPDEF("CONV_U32_U64", 0x149)
_JIT_OPDEF("CONV_U32_R32", 0x14a)
_JIT_OPDEF("CONV_U32_R64", 0x14b)

_JIT_OPDEF("CONV_I64_I32", 0x14c)
_JIT_OPDEF("CONV_I64_U32", 0x14d)
_JIT_OPDEF("CONV_I64_I64", 0x14e) // Not used
_JIT_OPDEF("CONV_I64_U64", 0x14f) // Not used
_JIT_OPDEF("CONV_I64_R32", 0x150)
_JIT_OPDEF("CONV_I64_R64", 0x151)

_JIT_OPDEF("CONV_U64_I32", 0x152)
_JIT_OPDEF("CONV_U64_U32", 0x153)
_JIT_OPDEF("CONV_U64_I64", 0x154) // Not used
_JIT_OPDEF("CONV_U64_U64", 0x155) // Not used
_JIT_OPDEF("CONV_U64_R32", 0x156)
_JIT_OPDEF("CONV_U64_R64", 0x157)

_JIT_OPDEF("CONV_R32_I32", 0x158)
_JIT_OPDEF("CONV_R32_U32", 0x159)
_JIT_OPDEF("CONV_R32_I64", 0x15a)
_JIT_OPDEF("CONV_R32_U64", 0x15b)
_JIT_OPDEF("CONV_R32_R32", 0x15c)
_JIT_OPDEF("CONV_R32_R64", 0x15d)

_JIT_OPDEF("CONV_R64_I32", 0x15e)
_JIT_OPDEF("CONV_R64_U32", 0x15f)
_JIT_OPDEF("CONV_R64_I64", 0x160)
_JIT_OPDEF("CONV_R64_U64", 0x161)
_JIT_OPDEF("CONV_R64_R32", 0x162)
_JIT_OPDEF("CONV_R64_R64", 0x163)

_JIT_OPDEF("INVOKE_SYSTEM_REFLECTION_METHODBASE", 0x164)
_JIT_OPDEF("REFLECTION_DYNAMICALLY_BOX_RETURN_VALUE", 0x165)
_JIT_OPDEF("TAILCALL_PREFIX", 0x166)

        default: return "undefined";
    }
}

#endif

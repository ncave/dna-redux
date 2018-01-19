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

#ifndef __CONFIG_H
#define __CONFIG_H

// Diagnostic stuff
// Some of this will only work on Windows
// (although could be implemented on other platforms with a little work.
// The issue is that a very fast time function is needed. It uses the rdtsc
// instruction on x86 - so the results are in ticks, not seconds)

// Count how many times each .NET method is called
//#define DIAG_METHOD_CALLS

// prints the call stack on crash
#define DIAG_CALL_STACK

// Maintain and print a call history buffer
//#define DIAG_CALL_HISTORY

// Measure how much time is spent in each JIT opcode
// This only works on Windows
#ifdef _WIN32
//#define DIAG_OPCODE_TIMES
#endif

// Count how many times each JIT opcode is used
//#define DIAG_OPCODE_USES

// Measure how much time is spent in the garbage collector
//#define DIAG_GC

// Measure how long the entire .NET programme execution takes
#define DIAG_TOTAL_TIME

#ifdef _DEBUG
//#define DIAG_MEMORY_LEAKS
#endif

// Non-diagnostic stuff

// Generate combined (dynamic) .NET opcodes.
// This does work, but currently has no intellegence about which opcodes
// are worth combining, so it uses lots of memory and on some platforms
// will not lead to a performance increase.
//#define GEN_COMBINED_OPCODES
#define GEN_COMBINED_OPCODES_MAX_MEMORY 0x4000
#define GEN_COMBINED_OPCODES_CALL_TRIGGER 20

// Performance improvements

// minor perf improvement: space vs speed trade-off
// (not a big difference, so disabled by default)
#ifdef _DEBUG
//#define STORE_HEAPENTRY_SIZE
#endif

// threaded code: switch on JIT ops instead of using label addresses
// (mainly for WIN64, but performs well in 32-bit too)
#define SWITCH_ON_JIT_OPS

// disable GC completely (for perf testing/tuning)
//#define NO_GC_WHATSOEVER

#endif

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

#include "Compat.h"
#include "Sys.h"

#include "JIT.h"

#include "JIT_OpCodes.h"
#include "MetaData.h"
#include "MetaDataTables.h"
#include "Heap.h"
#include "Type.h"
#include "MethodState.h"
#include "Finalizer.h"
#include "Delegate.h"
#include "PInvoke.h"

#include "System.String.h"
#include "System.Array.h"
#include "System.Reflection.MethodBase.h"
#include "System.Diagnostics.Debugger.h"

#ifdef SWITCH_ON_JIT_OPS
// Disable warning about unreferenced labels
#		pragma warning(disable:4102)
#else
// Global array which stores the absolute addresses of the start and end of all JIT code
// fragment machine code.
tJITCodeInfo jitCodeInfo[JIT_OPCODE_MAXNUM];
tJITCodeInfo jitCodeGoNext;
#endif

#define EVAL_STACK_PTR ((PTR)pCurrentMethodState + sizeof(tMethodState))
#define PARAMETERS_PTR(pMethodState) ((PTR)pMethodState + sizeof(tMethodState) + pMethodState->pMethod->pJITted->maxStack)

// Get the next op-code
#define GET_OP() (*(pCurOp++))
//#define GET_OP() (dprintfn("GETOP : stackOfs = %d", pCurEvalStack - EVAL_STACK_PTR), *(pCurOp++))

// PUSH and POP return nothing, they just alter the stack offset
#define PUSH(numBytes) pCurEvalStack += numBytes; if (pCurEvalStack < EVAL_STACK_PTR || pCurEvalStack > pParamsLocals) abort()
#define POP(numBytes) pCurEvalStack -= numBytes;  if (pCurEvalStack < EVAL_STACK_PTR || pCurEvalStack > pParamsLocals) abort()

// Push a U32 value on the top of the stack
#define PUSH_U32(value) *(U32*)pCurEvalStack = (U32)(value); PUSH(4)
// Push a U64 value on the top of the stack
#define PUSH_U64(value) *(U64*)pCurEvalStack = (U64)(value); PUSH(8)

#if defined (__x86_64__) || defined (__amd64__) || defined (__arm_64__)
#	define PUSH_SIZET(value) *(size_t*)pCurEvalStack = (size_t)(value); PUSH(8)
#else
#	define PUSH_SIZET(value) *(size_t*)pCurEvalStack = (size_t)(value); PUSH(4)
#endif

// Push a float value on the top of the stack
#define PUSH_FLOAT(value) *(float*)pCurEvalStack = (float)(value); PUSH(4)
// Push a double value on the top of the stack
#define PUSH_DOUBLE(value) *(double*)pCurEvalStack = (double)(value); PUSH(8)
// Push a 4-byte heap pointer on to the top of the stack
#define PUSH_O(pHeap) *(HEAP_PTR*)pCurEvalStack = (HEAP_PTR)(pHeap); PUSH(4)
// Push a PTR value on the top of the stack
#define PUSH_PTR(ptr) *(PTR*)pCurEvalStack = (PTR)(ptr); PUSH(sizeof(void*))
// Push an arbitrarily-sized value-type onto the top of the stack
#define PUSH_VALUETYPE(ptr, valueSize, stackInc) memcpy(pCurEvalStack, ptr, valueSize); PUSH(stackInc)

// DUP4() duplicates the top 4 bytes on the eval stack
#define DUP4() *(U32*)pCurEvalStack = *(U32*)(pCurEvalStack - 4); PUSH(4)
// DUP8() duplicates the top 4 bytes on the eval stack
#define DUP8() *(U64*)pCurEvalStack = *(U64*)(pCurEvalStack - 8); PUSH(8)
// DUP() duplicates numBytes bytes from the top of the stack
#define DUP(numBytes) memcpy(pCurEvalStack, pCurEvalStack - numBytes, numBytes); PUSH(numBytes)

// Pop a U32 value from the stack
#define POP_U32(value) POP(4); U32 value = *(U32*)(pCurEvalStack)
// Pop a U64 value from the stack
#define POP_U64(value) POP(8); U64 value = *(U64*)(pCurEvalStack)
// Pop a float value from the stack
#define POP_FLOAT(value) POP(4); float value = *(float*)(pCurEvalStack)
// Pop a double value from the stack
#define POP_DOUBLE(value) POP(8); double value = *(double*)(pCurEvalStack)
// Pop a Object (heap) pointer value from the stack
#define POP_O(value) POP(4); HEAP_PTR value = *(HEAP_PTR*)(pCurEvalStack)
// Pop a PTR value from the stack
#define POP_PTR(value) POP(sizeof(void*)); PTR value = *(PTR*)(pCurEvalStack)
// Pop an arbitrarily-sized value-type from the stack (copies it to the specified memory location)
#define POP_VALUETYPE(ptr, valueSize, stackDec) POP(stackDec); memcpy(ptr, pCurEvalStack, valueSize)

// Pop 2 U32's from the stack
#define POP_U32_U32(v1,v2) POP(8); U32 v1 = *(U32*)pCurEvalStack; U32 v2 = *(U32*)(pCurEvalStack + 4)
// Pop 2 U64's from the stack
#define POP_U64_U64(v1,v2) POP(16); U64 v1 = *(U64*)pCurEvalStack; U64 v2 = *(U64*)(pCurEvalStack + 8)
// Pop 2 F32's from the stack
#define POP_F32_F32(v1,v2) POP(8); float v1 = *(float*)pCurEvalStack; float v2 = *(float*)(pCurEvalStack + 4)
// Pop 2 F64's from the stack
#define POP_F64_F64(v1,v2) POP(16); double v1 = *(double*)pCurEvalStack; double v2 = *(double*)(pCurEvalStack + 8)

// POP_ALL() empties the evaluation stack
#define POP_ALL() pCurEvalStack = EVAL_STACK_PTR

#define STACK_ADDR(type) *(type*)(pCurEvalStack - sizeof(type))

// General binary ops
#define BINARY_OP(returnType, type1, type2, op) \
	POP(sizeof(type1) + sizeof(type2) - sizeof(returnType)); \
	*(returnType*)(pCurEvalStack - sizeof(returnType)) = \
	*(type1*)(pCurEvalStack - sizeof(returnType)) op \
	*(type2*)(pCurEvalStack - sizeof(returnType) + sizeof(type1))
// General unary ops
#define UNARY_OP(type, op) STACK_ADDR(type) = op STACK_ADDR(type)

// Set the new method state (for use when the method state changes - in calls mainly)
#define SAVE_METHOD_STATE() \
	pCurrentMethodState->stackOfs = (U32)(pCurEvalStack - EVAL_STACK_PTR); \
	pCurrentMethodState->ipOffset = (U32)(pCurOp - pOps) \

#define LOAD_METHOD_STATE() \
	pCurrentMethodState = pThread->pCurrentMethodState; \
	pParamsLocals = PARAMETERS_PTR(pCurrentMethodState); \
	pCurEvalStack = EVAL_STACK_PTR + pCurrentMethodState->stackOfs; \
	pOps = (U32*)pCurrentMethodState->pJIT->pOps; \
	pOpSequencePoints = (U32*)pCurrentMethodState->pJIT->pOpSequencePoints; \
	pCurOp = pOps + pCurrentMethodState->ipOffset

#define CHANGE_METHOD_STATE(pNewMethodState) \
	if (pThread->pCurrentMethodState != pNewMethodState) { \
		SAVE_METHOD_STATE(); \
		pThread->pCurrentMethodState = pNewMethodState; \
	} \
	LOAD_METHOD_STATE()

// Easy access to method parameters and local variables
#define PARAMLOCAL_U32(offset) *(U32*)(pParamsLocals + offset)
#define PARAMLOCAL_U64(offset) *(U64*)(pParamsLocals + offset)

#define THROW(exType) pThread->pCurrentExceptionObject = Heap_AllocType(exType); goto JIT_RETHROW_start

#define CHECK_FOR_BREAKPOINT() \
	if (pOpSequencePoints != NULL) { \
		I32 currentOpSequencePoint = pOpSequencePoints[pCurOp - pOps]; \
		if (currentOpSequencePoint >= 0) { \
			CheckIfSequencePointIsBreakpoint(pCurrentMethodState, currentOpSequencePoint); \
		} \
	}

static U32 CopyParameters(PTR pParamsLocals, tMD_MethodDef *pCallMethod, PTR pCurEvalStack, HEAP_PTR obj) {
	U32 ofs = 0;
	if (obj != NULL) {
		// Note: obj is only set if a constructor or delegate is being called
		// push the object onto parameter stack position 0
		*(HEAP_PTR*)pParamsLocals = obj;
		ofs = sizeof(HEAP_PTR);
	}
	Assert(pCallMethod->parameterStackSize >= ofs);
	U32 sz = pCallMethod->parameterStackSize - ofs;
	memmove(pParamsLocals + ofs, pCurEvalStack - sz, sz);
	return sz;
}

static tMethodState* RunFinalizer(tThread *pThread) {
	HEAP_PTR heapPtr = GetNextFinalizer();
	if (heapPtr != NULL) {
		// There is a pending finalizer, so create a MethodState for it and put it as next-to-run on the stack
		tMethodState *pFinalizerMethodState;
		tMD_TypeDef *pFinalizerType = Heap_GetType(heapPtr);

		pFinalizerMethodState = MethodState_Direct(pThread, pFinalizerType->pFinalizer, pThread->pCurrentMethodState, 0, 0);
		// Mark this methodState as a Finalizer
		pFinalizerMethodState->finalizerThis = heapPtr;
		// Put the object on the stack (the object that is being Finalized)
		// Finalizers always have no parameters
		*(HEAP_PTR*)(PARAMETERS_PTR(pFinalizerMethodState)) = heapPtr;
		//printf("--- FINALIZE ---\n");

		return pFinalizerMethodState;
	}
	return NULL;
}

#ifdef DIAG_OPCODE_TIMES
U64 opcodeTicks[JIT_OPCODE_MAXNUM];
#define ADD_OPCODE_TICKS(op) opcodeTicks[op] += GetTicks() - opcodeStart
#define SET_OPCODE_START() opcodeStart = GetTicks()
#else
#define ADD_OPCODE_TICKS(op)
#define SET_OPCODE_START()
#endif

#ifdef DIAG_OPCODE_USES
U64 opcodeCounts[JIT_OPCODE_MAXNUM];
#define ADD_OPCODE_COUNT(op) opcodeCounts[op] += 1
#else
#define ADD_OPCODE_COUNT(op)
#endif

#ifdef SWITCH_ON_JIT_OPS

#define SET_OP(op, label) // already done, see goNext
#define OPCODE_USE(op) //printbuf("JIT op: 0x%03x (%s)\n", op, Sys_JIT_OpCodeName(op))

#define GO_NEXT() \
	goto goNext;

#else

#define SET_OP(op, label) prev_op = curr_op; curr_op = op; goto label
#define OPCODE_USE(op) ADD_OPCODE_TICKS(op); ADD_OPCODE_COUNT(op); SET_OPCODE_START(); //printbuf("JIT op: 0x%03x (%s)\n", op, Sys_JIT_OpCodeName(op))

#ifdef __GNUC__

#define GET_LABEL(var, label) var = &&label

#define GO_NEXT() \
	CHECK_FOR_BREAKPOINT(); \
	goto **(void**)(pCurOp++)

#else
#ifdef _WIN32

#define GET_LABEL(var, label) \
	{ __asm mov edi, label \
	__asm mov var, edi }

#define GO_NEXT() \
	CHECK_FOR_BREAKPOINT(); \
	{ __asm mov edi, pCurOp \
	__asm add edi, 4 \
	__asm mov pCurOp, edi \
	__asm jmp DWORD PTR [edi - 4] }

#endif
#endif
#endif

#define GO_NEXT_CHECK() \
	if (--numInst == 0) goto done; \
	GO_NEXT()

#ifdef SWITCH_ON_JIT_OPS

#define GET_LABELS(op) \
	case op: goto op##_start;

#define GET_LABELS_DYNAMIC(op, extraBytes) \
	case op: goto op##_start;

#else

#define GET_LABELS(op) \
	GET_LABEL(pAddr, op##_start); \
	jitCodeInfo[op].pStart = pAddr; \
	GET_LABEL(pAddr, op##_end); \
	jitCodeInfo[op].pEnd = pAddr; \
	jitCodeInfo[op].isDynamic = 0

#define GET_LABELS_DYNAMIC(op, extraBytes) \
	GET_LABEL(pAddr, op##_start); \
	jitCodeInfo[op].pStart = pAddr; \
	GET_LABEL(pAddr, op##_end); \
	jitCodeInfo[op].pEnd = pAddr; \
	jitCodeInfo[op].isDynamic = 0x100 | (extraBytes & 0xff)

#endif

#define RUN_FINALIZER() {tMethodState *pMS = RunFinalizer(pThread);if(pMS) {CHANGE_METHOD_STATE(pMS);}}

U32 JIT_Execute(tThread *pThread, U32 numInst) {

	// Local copies of thread state variables, to speed up execution
	tMethodState *pCurrentMethodState;
	U32 *pOps;
	I32 *pOpSequencePoints;

	// Pointer to next op-code
	register U32 *pCurOp;
	// Pointer to eval-stack position
	register PTR pCurEvalStack;
	// Pointer to params and locals
	PTR pParamsLocals;

	U32 curr_op = JIT_NOP;
	U32 prev_op = JIT_NOP;

#ifdef DIAG_OPCODE_TIMES
	U64 opcodeStart = GetTicks();
#endif

	if (pThread == NULL) {

#ifdef SWITCH_ON_JIT_OPS
		// no label initialization needed
		return 0;
	}

	LOAD_METHOD_STATE();
	SET_OPCODE_START();
	GO_NEXT();

goNext:
	ADD_OPCODE_TICKS(curr_op);
	ADD_OPCODE_COUNT(curr_op);
	CHECK_FOR_BREAKPOINT();
	prev_op = curr_op;
	curr_op = GET_OP();

	SET_OPCODE_START();

	switch (curr_op) {

#else
		void *pAddr;

		// Special case to get all the label addresses
		// Default all op-codes to noCode.
		GET_LABEL(pAddr, noCode);
		for (U32 u32Value = 0; u32Value < JIT_OPCODE_MAXNUM; u32Value++) {
			jitCodeInfo[u32Value].pStart = pAddr;
			jitCodeInfo[u32Value].pEnd = NULL;
			jitCodeInfo[u32Value].isDynamic = 0;
		}

		// Get GoNext code
		GET_LABEL(jitCodeGoNext.pStart, JIT_GoNext_start);
		GET_LABEL(jitCodeGoNext.pEnd, JIT_GoNext_end);
		jitCodeGoNext.isDynamic = 0;
#endif

		// Get all defined opcodes
		GET_LABELS_DYNAMIC(JIT_NOP, 0);
		GET_LABELS(JIT_RETURN);
		GET_LABELS_DYNAMIC(JIT_LOAD_I32, 4);
		GET_LABELS(JIT_BRANCH);
		GET_LABELS(JIT_LOAD_STRING);
		GET_LABELS(JIT_TAILCALL_PREFIX);
		GET_LABELS(JIT_CALLVIRT_O);
		GET_LABELS(JIT_CALL_NATIVE);
		GET_LABELS(JIT_CALL_O);
		GET_LABELS(JIT_NEWOBJECT);
		GET_LABELS(JIT_LOAD_PARAMLOCAL_ADDR);
		GET_LABELS(JIT_CALL_PTR);
		GET_LABELS(JIT_BOX_CALLVIRT);
		GET_LABELS(JIT_INIT_VALUETYPE);
		GET_LABELS(JIT_NEW_VECTOR);
		GET_LABELS(JIT_NEWOBJECT_VALUETYPE);
		GET_LABELS(JIT_IS_INSTANCE);
		GET_LABELS(JIT_LOAD_NULL);
		GET_LABELS(JIT_UNBOX2VALUETYPE);
		GET_LABELS(JIT_UNBOX2OBJECT);
		GET_LABELS(JIT_LOAD_FIELD_ADDR);
		GET_LABELS(JIT_DUP_GENERAL);
		GET_LABELS_DYNAMIC(JIT_POP, 4);
		GET_LABELS(JIT_STORE_OBJECT_VALUETYPE);
		GET_LABELS(JIT_DEREF_CALLVIRT);
		GET_LABELS(JIT_STORE_ELEMENT);
		GET_LABELS(JIT_LEAVE);
		GET_LABELS(JIT_END_FINALLY);
		GET_LABELS(JIT_THROW);
		GET_LABELS(JIT_RETHROW);
		GET_LABELS(JIT_LOADOBJECT);
		GET_LABELS(JIT_LOAD_VECTOR_LEN);
		GET_LABELS(JIT_SWITCH);
		GET_LABELS(JIT_LOAD_ELEMENT_ADDR);
		//GET_LABELS(JIT_CALL_INTERFACE);
		GET_LABELS(JIT_CAST_CLASS);
		GET_LABELS(JIT_LOAD_ELEMENT);
		GET_LABELS(JIT_LOADFIELD_VALUETYPE);
		GET_LABELS(JIT_LOADFIELD);
		GET_LABELS(JIT_LOADFUNCTION);
		GET_LABELS(JIT_INVOKE_DELEGATE);
		GET_LABELS(JIT_INVOKE_SYSTEM_REFLECTION_METHODBASE);
		GET_LABELS(JIT_REFLECTION_DYNAMICALLY_BOX_RETURN_VALUE);
		GET_LABELS(JIT_CALL_PINVOKE);
		GET_LABELS_DYNAMIC(JIT_LOAD_I64, 8);
		GET_LABELS(JIT_INIT_OBJECT);
		GET_LABELS_DYNAMIC(JIT_DUP_4, 0);
		GET_LABELS_DYNAMIC(JIT_DUP_8, 0);
		GET_LABELS(JIT_LOADSTATICFIELDADDRESS_CHECKTYPEINIT);
		GET_LABELS_DYNAMIC(JIT_POP_4, 0);
		GET_LABELS_DYNAMIC(JIT_LOAD_F32, 4);

		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_INT64, 4);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_INT32, 4);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_INTNATIVE, 4);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_F32, 4);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_F64, 4);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_PTR, 4);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_O, 4);
		GET_LABELS(JIT_LOADPARAMLOCAL_VALUETYPE);

		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_0, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_1, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_2, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_3, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_4, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_5, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_6, 0);
		GET_LABELS_DYNAMIC(JIT_LOADPARAMLOCAL_7, 0);

		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_INT64, 4);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_INT32, 4);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_INTNATIVE, 4);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_F32, 4);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_F64, 4);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_PTR, 4);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_O, 4);
		GET_LABELS(JIT_STOREPARAMLOCAL_VALUETYPE);

		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_0, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_1, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_2, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_3, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_4, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_5, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_6, 0);
		GET_LABELS_DYNAMIC(JIT_STOREPARAMLOCAL_7, 0);

		GET_LABELS(JIT_STOREFIELD_INT64);
		GET_LABELS(JIT_STOREFIELD_INT32);
		GET_LABELS(JIT_STOREFIELD_INTNATIVE);
		GET_LABELS(JIT_STOREFIELD_F32);
		GET_LABELS(JIT_STOREFIELD_F64);
		GET_LABELS(JIT_STOREFIELD_PTR);
		GET_LABELS(JIT_STOREFIELD_O);
		GET_LABELS(JIT_STOREFIELD_VALUETYPE);

		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT32);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT64);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_VALUETYPE);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_O);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_INTNATIVE);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_PTR);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_F32);
		GET_LABELS(JIT_LOADSTATICFIELD_CHECKTYPEINIT_F64);

		GET_LABELS(JIT_STORESTATICFIELD_INT32);
		GET_LABELS(JIT_STORESTATICFIELD_INT64);
		GET_LABELS(JIT_STORESTATICFIELD_O);
		GET_LABELS(JIT_STORESTATICFIELD_F32);
		GET_LABELS(JIT_STORESTATICFIELD_F64);
		GET_LABELS(JIT_STORESTATICFIELD_INTNATIVE);
		GET_LABELS(JIT_STORESTATICFIELD_PTR);
		GET_LABELS(JIT_STORESTATICFIELD_VALUETYPE);

		GET_LABELS(JIT_BOX_INT64);
		GET_LABELS(JIT_BOX_INT32);
		GET_LABELS(JIT_BOX_INTNATIVE);
		GET_LABELS(JIT_BOX_F32);
		GET_LABELS(JIT_BOX_F64);
		GET_LABELS(JIT_BOX_O);
		GET_LABELS(JIT_BOX_VALUETYPE);

		GET_LABELS_DYNAMIC(JIT_CEQ_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_UN_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_UN_I32I32, 0);

		GET_LABELS_DYNAMIC(JIT_CEQ_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_UN_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_UN_I64I64, 0);

		GET_LABELS_DYNAMIC(JIT_ADD_OVF_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_ADD_OVF_UN_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_MUL_OVF_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_MUL_OVF_UN_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_SUB_OVF_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_SUB_OVF_UN_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_ADD_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_SUB_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_MUL_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_DIV_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_DIV_UN_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_REM_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_REM_UN_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_AND_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_OR_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_XOR_I32I32, 0);
		GET_LABELS_DYNAMIC(JIT_NEG_I32, 0);
		GET_LABELS_DYNAMIC(JIT_NOT_I32, 0);
		GET_LABELS_DYNAMIC(JIT_NEG_I64, 0);
		GET_LABELS_DYNAMIC(JIT_NOT_I64, 0);
		GET_LABELS_DYNAMIC(JIT_NEG_F32, 0);
		GET_LABELS_DYNAMIC(JIT_NEG_F64, 0);

		GET_LABELS(JIT_BOX_NULLABLE);
		GET_LABELS_DYNAMIC(JIT_LOAD_F64, 8);
		GET_LABELS(JIT_UNBOX_NULLABLE);

		GET_LABELS(JIT_BEQ_I32I32);
		GET_LABELS(JIT_BEQ_I64I64);
		GET_LABELS(JIT_BEQ_F32F32);
		GET_LABELS(JIT_BEQ_F64F64);

		GET_LABELS(JIT_BGE_I32I32);
		GET_LABELS(JIT_BGE_I64I64);
		GET_LABELS(JIT_BGE_F32F32);
		GET_LABELS(JIT_BGE_F64F64);
		GET_LABELS(JIT_BGE_UN_F32F32);
		GET_LABELS(JIT_BGE_UN_F64F64);

		GET_LABELS(JIT_BGT_I32I32);
		GET_LABELS(JIT_BGT_I64I64);
		GET_LABELS(JIT_BGT_F32F32);
		GET_LABELS(JIT_BGT_F64F64);
		GET_LABELS(JIT_BGT_UN_F32F32);
		GET_LABELS(JIT_BGT_UN_F64F64);

		GET_LABELS(JIT_BLE_I32I32);
		GET_LABELS(JIT_BLE_I64I64);
		GET_LABELS(JIT_BLE_F32F32);
		GET_LABELS(JIT_BLE_F64F64);
		GET_LABELS(JIT_BLE_UN_F32F32);
		GET_LABELS(JIT_BLE_UN_F64F64);

		GET_LABELS(JIT_BLT_I32I32);
		GET_LABELS(JIT_BLT_I64I64);
		GET_LABELS(JIT_BLT_F32F32);
		GET_LABELS(JIT_BLT_F64F64);
		GET_LABELS(JIT_BLT_UN_F32F32);
		GET_LABELS(JIT_BLT_UN_F64F64);

		GET_LABELS(JIT_BNE_UN_I32I32);
		GET_LABELS(JIT_BNE_UN_I64I64);
		GET_LABELS(JIT_BNE_UN_F32F32);
		GET_LABELS(JIT_BNE_UN_F64F64);

		GET_LABELS(JIT_BGE_UN_I32I32);
		GET_LABELS(JIT_BGT_UN_I32I32);
		GET_LABELS(JIT_BLE_UN_I32I32);
		GET_LABELS(JIT_BLT_UN_I32I32);

		GET_LABELS(JIT_BGE_UN_I64I64);
		GET_LABELS(JIT_BGT_UN_I64I64);
		GET_LABELS(JIT_BLE_UN_I64I64);
		GET_LABELS(JIT_BLT_UN_I64I64);

		GET_LABELS_DYNAMIC(JIT_SHL_I32, 0);
		GET_LABELS_DYNAMIC(JIT_SHR_I32, 0);
		GET_LABELS_DYNAMIC(JIT_SHR_UN_I32, 0);
		GET_LABELS_DYNAMIC(JIT_SHL_I64, 0);
		GET_LABELS_DYNAMIC(JIT_SHR_I64, 0);
		GET_LABELS_DYNAMIC(JIT_SHR_UN_I64, 0);

		GET_LABELS(JIT_BRANCH_FALSE);
		GET_LABELS(JIT_BRANCH_TRUE);
		GET_LABELS(JIT_BRANCH64_FALSE);
		GET_LABELS(JIT_BRANCH64_TRUE);
		GET_LABELS(JIT_LOADTOKEN_TYPE);

		GET_LABELS(JIT_LOADTOKEN_FIELD);
		GET_LABELS(JIT_LOADINDIRECT_I8);
		GET_LABELS(JIT_LOADINDIRECT_U8);
		GET_LABELS(JIT_LOADINDIRECT_I16);
		GET_LABELS(JIT_LOADINDIRECT_U16);
		GET_LABELS(JIT_LOADINDIRECT_I32);
		GET_LABELS(JIT_LOADINDIRECT_U32);
		GET_LABELS(JIT_LOADINDIRECT_I64);

		GET_LABELS(JIT_LOADINDIRECT_R32);
		GET_LABELS(JIT_LOADINDIRECT_R64);
		GET_LABELS(JIT_LOADINDIRECT_REF);
		GET_LABELS(JIT_STOREINDIRECT_REF);
		GET_LABELS(JIT_STOREINDIRECT_U8);
		GET_LABELS(JIT_STOREINDIRECT_U16);
		GET_LABELS(JIT_STOREINDIRECT_U32);
		GET_LABELS(JIT_STOREINDIRECT_U64);
		GET_LABELS(JIT_STOREINDIRECT_R32);
		GET_LABELS(JIT_STOREINDIRECT_R64);

		GET_LABELS_DYNAMIC(JIT_CONV_I32_I32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_I32_U32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_I32_I64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_I32_U64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_I32_R32, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_I32_R64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U32_I32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_U32_U32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_U32_I64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U32_U64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U32_R32, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U32_R64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_I64_I32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_I64_U32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_I64_U64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_I64_R32, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_I64_R64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U64_I32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_U64_U32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_U64_I64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U64_R32, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_U64_R64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R32_I32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_R32_U32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_R32_I64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R32_U64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R32_R32, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R32_R64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R64_I32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_R64_U32, 4);
		GET_LABELS_DYNAMIC(JIT_CONV_R64_I64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R64_U64, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R64_R32, 0);
		GET_LABELS_DYNAMIC(JIT_CONV_R64_R64, 0);

		GET_LABELS(JIT_STORE_ELEMENT_32);
		GET_LABELS(JIT_STORE_ELEMENT_64);

		GET_LABELS(JIT_LOAD_ELEMENT_I8);
		GET_LABELS(JIT_LOAD_ELEMENT_U8);
		GET_LABELS(JIT_LOAD_ELEMENT_I16);
		GET_LABELS(JIT_LOAD_ELEMENT_U16);
		GET_LABELS(JIT_LOAD_ELEMENT_I32);
		GET_LABELS(JIT_LOAD_ELEMENT_U32);
		GET_LABELS(JIT_LOAD_ELEMENT_I64);
		GET_LABELS(JIT_LOAD_ELEMENT_R32);
		GET_LABELS(JIT_LOAD_ELEMENT_R64);

		GET_LABELS_DYNAMIC(JIT_ADD_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_SUB_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_MUL_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_DIV_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_DIV_UN_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_REM_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_REM_UN_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_AND_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_OR_I64I64, 0);
		GET_LABELS_DYNAMIC(JIT_XOR_I64I64, 0);

		GET_LABELS_DYNAMIC(JIT_CEQ_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_UN_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_UN_F32F32, 0);

		GET_LABELS_DYNAMIC(JIT_CEQ_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_CGT_UN_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_CLT_UN_F64F64, 0);

		GET_LABELS_DYNAMIC(JIT_ADD_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_ADD_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_SUB_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_SUB_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_MUL_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_MUL_F64F64, 0);
		GET_LABELS_DYNAMIC(JIT_DIV_F32F32, 0);
		GET_LABELS_DYNAMIC(JIT_DIV_F64F64, 0);

		GET_LABELS_DYNAMIC(JIT_LOAD_I4_M1, 0);
		GET_LABELS_DYNAMIC(JIT_LOAD_I4_0, 0);
		GET_LABELS_DYNAMIC(JIT_LOAD_I4_1, 0);
		GET_LABELS_DYNAMIC(JIT_LOAD_I4_2, 0);

		GET_LABELS_DYNAMIC(JIT_LOADFIELD_4, 4);
		GET_LABELS_DYNAMIC(JIT_LOADFIELD_8, 8);

#ifdef SWITCH_ON_JIT_OPS
	default: goto noCode;
	}

#else
		return 0;
}

	LOAD_METHOD_STATE();
	SET_OPCODE_START();
	GO_NEXT();
#endif

noCode:
	Crash("No code for op-code %u", curr_op);

JIT_NOP_start:
JIT_CONV_R32_R32_start:
JIT_CONV_R64_R64_start:
JIT_CONV_I64_U64_start:
JIT_CONV_U64_I64_start:
	OPCODE_USE(JIT_NOP);
//JIT_NOP_end:
//JIT_CONV_R32_R32_end:
//JIT_CONV_R64_R64_end:
//JIT_CONV_I64_U64_end:
//JIT_CONV_U64_I64_end:
//JIT_GoNext_start:
	GO_NEXT();
//JIT_GoNext_end:

JIT_TAILCALL_PREFIX_start:
	SET_OP(JIT_TAILCALL_PREFIX, tailCallStart);
tailCallStart:
	OPCODE_USE(JIT_TAILCALL_PREFIX);
JIT_TAILCALL_PREFIX_end:
	GO_NEXT();

JIT_LOAD_NULL_start:
	OPCODE_USE(JIT_LOAD_NULL);
	PUSH_O(NULL);
//JIT_LOAD_NULL_end:
	GO_NEXT();

JIT_DUP_4_start:
	OPCODE_USE(JIT_DUP_4);
	DUP4();
//JIT_DUP_4_end:
	GO_NEXT();

JIT_DUP_8_start:
	OPCODE_USE(JIT_DUP_8);
	DUP8();
//JIT_DUP_8_end:
	GO_NEXT();

JIT_DUP_GENERAL_start:
	OPCODE_USE(JIT_DUP_GENERAL);
	{
		U32 dupSize = GET_OP();
		DUP(dupSize);
	}
//JIT_DUP_GENERAL_end:
	GO_NEXT();

JIT_POP_start:
	OPCODE_USE(JIT_POP);
	{
		U32 popSize = GET_OP();
		POP(popSize);
	}
//JIT_POP_end:
	GO_NEXT();

JIT_POP_4_start:
	OPCODE_USE(JIT_POP_4);
	POP(4);
//JIT_POP_4_end:
	GO_NEXT();

JIT_LOAD_I32_start:
JIT_LOAD_F32_start:
	OPCODE_USE(JIT_LOAD_I32);
	{
		I32 value = GET_OP();
		PUSH_U32(value);
	}
//JIT_LOAD_I32_end:
//JIT_LOAD_F32_end:
	GO_NEXT();

JIT_LOAD_I4_M1_start:
	OPCODE_USE(JIT_LOAD_I4_M1);
	PUSH_U32(-1);
//JIT_LOAD_I4_M1_end:
	GO_NEXT();

JIT_LOAD_I4_0_start:
	OPCODE_USE(JIT_LOAD_I4_0);
	PUSH_U32(0);
//JIT_LOAD_I4_0_end:
	GO_NEXT();

JIT_LOAD_I4_1_start:
	OPCODE_USE(JIT_LOAD_I4_1);
	PUSH_U32(1);
//JIT_LOAD_I4_1_end:
	GO_NEXT();

JIT_LOAD_I4_2_start:
	OPCODE_USE(JIT_LOAD_I4_2);
	PUSH_U32(2);
//JIT_LOAD_I4_2_end:
	GO_NEXT();

JIT_LOAD_I64_start:
JIT_LOAD_F64_start:
	OPCODE_USE(JIT_LOAD_I64);
	{
		U64 value = *(U64*)pCurOp;
		pCurOp += 2;
		PUSH_U64(value);
	}
//JIT_LOAD_I64_end:
//JIT_LOAD_F64_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_INT32_start:
JIT_LOADPARAMLOCAL_F32_start:
JIT_LOADPARAMLOCAL_O_start:
JIT_LOADPARAMLOCAL_INTNATIVE_start: // Only on 32-bit
JIT_LOADPARAMLOCAL_PTR_start: // Only on 32-bit
	OPCODE_USE(JIT_LOADPARAMLOCAL_INT32);
	{
		U32 ofs = GET_OP();
		U32 value = PARAMLOCAL_U32(ofs);
		PUSH_U32(value);
	}
//JIT_LOADPARAMLOCAL_INT32_end:
//JIT_LOADPARAMLOCAL_F32_end:
//JIT_LOADPARAMLOCAL_O_end:
//JIT_LOADPARAMLOCAL_INTNATIVE_end:
//JIT_LOADPARAMLOCAL_PTR_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_INT64_start:
JIT_LOADPARAMLOCAL_F64_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_INT64);
	{
		U32 ofs = GET_OP();
		U64 value = PARAMLOCAL_U64(ofs);
		PUSH_U64(value);
	}
//JIT_LOADPARAMLOCAL_INT64_end:
//JIT_LOADPARAMLOCAL_F64_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_VALUETYPE_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_VALUETYPE);
	{
		U32 ofs = GET_OP();
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		PTR pMem = (PTR)&PARAMLOCAL_U32(ofs);
		PUSH_VALUETYPE(pMem, pTypeDef->stackSize, pTypeDef->stackSize);
	}
//JIT_LOADPARAMLOCAL_VALUETYPE_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_0_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_0);
	PUSH_U32(PARAMLOCAL_U32(0));
//JIT_LOADPARAMLOCAL_0_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_1_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_1);
	PUSH_U32(PARAMLOCAL_U32(4));
//JIT_LOADPARAMLOCAL_1_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_2_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_2);
	PUSH_U32(PARAMLOCAL_U32(8));
//JIT_LOADPARAMLOCAL_2_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_3_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_3);
	PUSH_U32(PARAMLOCAL_U32(12));
//JIT_LOADPARAMLOCAL_3_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_4_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_4);
	PUSH_U32(PARAMLOCAL_U32(16));
//JIT_LOADPARAMLOCAL_4_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_5_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_5);
	PUSH_U32(PARAMLOCAL_U32(20));
//JIT_LOADPARAMLOCAL_5_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_6_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_6);
	PUSH_U32(PARAMLOCAL_U32(24));
//JIT_LOADPARAMLOCAL_6_end:
	GO_NEXT();

JIT_LOADPARAMLOCAL_7_start:
	OPCODE_USE(JIT_LOADPARAMLOCAL_7);
	PUSH_U32(PARAMLOCAL_U32(28));
//JIT_LOADPARAMLOCAL_7_end:
	GO_NEXT();

JIT_LOAD_PARAMLOCAL_ADDR_start:
	OPCODE_USE(JIT_LOAD_PARAMLOCAL_ADDR);
	{
		U32 ofs = GET_OP();
		PTR pMem = (PTR)&PARAMLOCAL_U32(ofs);
		PUSH_PTR(pMem);
	}
//JIT_LOAD_PARAMLOCAL_ADDR_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_INT32_start:
JIT_STOREPARAMLOCAL_F32_start:
JIT_STOREPARAMLOCAL_O_start:
JIT_STOREPARAMLOCAL_INTNATIVE_start: // Only on 32-bit
JIT_STOREPARAMLOCAL_PTR_start: // Only on 32-bit
	OPCODE_USE(JIT_STOREPARAMLOCAL_INT32);
	{
		U32 ofs = GET_OP();
		POP_U32(value);
		PARAMLOCAL_U32(ofs) = value;
	}
//JIT_STOREPARAMLOCAL_INT32_end:
//JIT_STOREPARAMLOCAL_F32_end:
//JIT_STOREPARAMLOCAL_O_end:
//JIT_STOREPARAMLOCAL_INTNATIVE_end:
//JIT_STOREPARAMLOCAL_PTR_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_INT64_start:
JIT_STOREPARAMLOCAL_F64_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_INT64);
	{
		U32 ofs = GET_OP();
		POP_U64(value);
		PARAMLOCAL_U64(ofs) = value;
	}
//JIT_STOREPARAMLOCAL_INT64_end:
//JIT_STOREPARAMLOCAL_F64_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_VALUETYPE_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_VALUETYPE);
	{
		U32 ofs = GET_OP();
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		PTR pMem = (PTR)&PARAMLOCAL_U32(ofs);
		POP_VALUETYPE(pMem, pTypeDef->stackSize, pTypeDef->stackSize);
	}
//JIT_STOREPARAMLOCAL_VALUETYPE_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_0_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_0);
	{
		POP_U32(value);
		PARAMLOCAL_U32(0) = value;
	}
JIT_STOREPARAMLOCAL_0_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_1_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_1);
	{
		POP_U32(value);
		PARAMLOCAL_U32(4) = value;
	}
JIT_STOREPARAMLOCAL_1_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_2_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_2);
	{
		POP_U32(value);
		PARAMLOCAL_U32(8) = value;
	}
JIT_STOREPARAMLOCAL_2_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_3_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_3);
	{
		POP_U32(value);
		PARAMLOCAL_U32(12) = value;
	}
JIT_STOREPARAMLOCAL_3_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_4_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_4);
	{
		POP_U32(value);
		PARAMLOCAL_U32(16) = value;
	}
JIT_STOREPARAMLOCAL_4_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_5_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_5);
	{
		POP_U32(value);
		PARAMLOCAL_U32(20) = value;
	}
JIT_STOREPARAMLOCAL_5_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_6_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_6);
	{
		POP_U32(value);
		PARAMLOCAL_U32(24) = value;
	}
JIT_STOREPARAMLOCAL_6_end:
	GO_NEXT();

JIT_STOREPARAMLOCAL_7_start:
	OPCODE_USE(JIT_STOREPARAMLOCAL_7);
	{
		POP_U32(value);
		PARAMLOCAL_U32(28) = value;
	}
JIT_STOREPARAMLOCAL_7_end:
	GO_NEXT();

JIT_LOADINDIRECT_I8_start:
JIT_LOADINDIRECT_I16_start:
JIT_LOADINDIRECT_I32_start:
JIT_LOADINDIRECT_U8_start:
JIT_LOADINDIRECT_U16_start:
JIT_LOADINDIRECT_U32_start:
JIT_LOADINDIRECT_R32_start:
JIT_LOADINDIRECT_REF_start:
	OPCODE_USE(JIT_LOADINDIRECT_U32);
	{
		POP_PTR(pMem);
		U32 value = *(U32*)pMem;
		PUSH_U32(value);
	}
//JIT_LOADINDIRECT_I8_end:
//JIT_LOADINDIRECT_I16_end:
//JIT_LOADINDIRECT_I32_end:
//JIT_LOADINDIRECT_U8_end:
//JIT_LOADINDIRECT_U16_end:
//JIT_LOADINDIRECT_U32_end:
//JIT_LOADINDIRECT_R32_end:
//JIT_LOADINDIRECT_REF_end:
	GO_NEXT();

JIT_LOADINDIRECT_R64_start:
JIT_LOADINDIRECT_I64_start:
	OPCODE_USE(JIT_LOADINDIRECT_I64);
	{
		POP_PTR(pMem);
		U64 value = *(U64*)pMem;
		PUSH_U64(value);
	}
//JIT_LOADINDIRECT_R64_end:
//JIT_LOADINDIRECT_I64_end:
	GO_NEXT();

JIT_STOREINDIRECT_U8_start:
JIT_STOREINDIRECT_U16_start:
JIT_STOREINDIRECT_U32_start:
JIT_STOREINDIRECT_REF_start:
JIT_STOREINDIRECT_R32_start:
	OPCODE_USE(JIT_STOREINDIRECT_U32);
	{
		POP_U32(value); // The value to store
		POP_PTR(pMem);  // The address to store to
		*(U32*)pMem = value;
	}
//JIT_STOREINDIRECT_U8_end:
//JIT_STOREINDIRECT_U16_end:
//JIT_STOREINDIRECT_U32_end:
//JIT_STOREINDIRECT_REF_end:
//JIT_STOREINDIRECT_R32_end:
	GO_NEXT();

JIT_STOREINDIRECT_U64_start:
JIT_STOREINDIRECT_R64_start:
	OPCODE_USE(JIT_STOREINDIRECT_U64);
	{
		POP_U64(value); // The value to store
		POP_PTR(pMem);  // The address to store to
		*(U64*)pMem = value;
	}
//JIT_STOREINDIRECT_U64_end:
//JIT_STOREINDIRECT_R64_end:
	GO_NEXT();

JIT_STORE_OBJECT_VALUETYPE_start:
	OPCODE_USE(JIT_STORE_OBJECT_VALUETYPE);
	{
		U32 size = GET_OP(); // The size, in bytes, of the value-type to store
		U32 memSize = (size<4) ? 4 : size;
		PTR pMem = pCurEvalStack - memSize - sizeof(void*);
		POP_VALUETYPE(*(void**)pMem, size, memSize);
		POP(4);
	}
//JIT_STORE_OBJECT_VALUETYPE_end:
	GO_NEXT();

JIT_CALL_PINVOKE_start:
	OPCODE_USE(JIT_CALL_PINVOKE);
	{
		tJITCallPInvoke *pCallPInvoke = (tJITCallPInvoke*)(pCurOp - 1);
		U32 res = PInvoke_Call(pCallPInvoke, pParamsLocals, EVAL_STACK_PTR, pThread);
		pCurrentMethodState->stackOfs = res;
	}
	goto JIT_RETURN_start;
//JIT_CALL_PINVOKE_end:

JIT_CALL_NATIVE_start:
	OPCODE_USE(JIT_CALL_NATIVE);
	{
		tJITCallNative *pCallNative;
		PTR pThis;
		U32 thisOfs;
		tAsyncCall *pAsync;

		pCallNative = (tJITCallNative*)(pCurOp - 1);
		if (METHOD_ISSTATIC(pCallNative->pMethodDef)) {
			pThis = NULL;
			thisOfs = 0;
		} else {
			pThis = *(PTR*)pParamsLocals;
			thisOfs = 4;
		}
		// Internal constructors MUST leave the newly created object in the return value
		// (i.e. on top of the evaluation stack)
		pAsync = pCallNative->fn(pThis, pParamsLocals + thisOfs, EVAL_STACK_PTR);

		// fix the stack offset to match the return value size
		if (pCallNative->pMethodDef->pReturnType != NULL) {
			PUSH(pCallNative->pMethodDef->pReturnType->stackSize);
		} else if (pCurrentMethodState->isInternalNewObjCall) {
			PUSH(sizeof(void*));
		}

		if (pAsync != NULL) {
			// Save the method state
			SAVE_METHOD_STATE();
			// Change the IP pointer to point to the return instruction
			pCurrentMethodState->ipOffset = 3;
			// Handle special async codes
			if (pAsync == ASYNC_LOCK_EXIT) {
				return THREAD_STATUS_LOCK_EXIT;
			}
			// Set the async in the thread
			pThread->pAsync = pAsync;
			return THREAD_STATUS_ASYNC;
		}
	}
	// fall-through
//JIT_CALL_NATIVE_end:

JIT_RETURN_start:
	OPCODE_USE(JIT_RETURN);
	// dprintfn("Returned from %s() to %s()", pCurrentMethodState->pMethod->name, (pCurrentMethodState->pCaller)?pCurrentMethodState->pCaller->pMethod->name:(STRING)"<none>");

	if (pCurrentMethodState->pCaller == NULL) {
		// End of thread!
		if (pCurrentMethodState->pMethod->pReturnType == types[TYPE_SYSTEM_INT32]) {
			// If function returned an int32, then make it the thread exit-value
			POP_U32(value);
			pThread->threadExitValue = (I32)value;
		}
		return THREAD_STATUS_EXIT;
	}
	{
		U32 u32Value = 0;
		// Make u32Value the number of bytes of the return value from the function
		if (pCurrentMethodState->pMethod->pReturnType != NULL) {
			u32Value = pCurrentMethodState->pMethod->pReturnType->stackSize;
		} else if (pCurrentMethodState->isInternalNewObjCall) {
			u32Value = sizeof(void*);
		}

		Assert(pCurEvalStack - u32Value >= EVAL_STACK_PTR);
		PTR pMem = pCurEvalStack - u32Value;
		tMethodState *pOldMethodState = pCurrentMethodState;
		pThread->pCurrentMethodState = pCurrentMethodState->pCaller;
		LOAD_METHOD_STATE();
		// Copy return value to callers evaluation stack
		if (u32Value > 0) {
			memmove(pCurEvalStack, pMem, u32Value);
			PUSH(u32Value);
		}
		// Delete the current method state and go back to callers method state
		MethodState_Delete(pThread, &pOldMethodState);
	}
	if (pCurrentMethodState->pNextDelegate == NULL) {
		GO_NEXT();
	}
	// Fall-through if more delegate methods to invoke
//JIT_RETURN_end:

JIT_INVOKE_DELEGATE_start:
	OPCODE_USE(JIT_INVOKE_DELEGATE);
	{
		tMD_MethodDef *pDelegateMethod, *pCallMethod;
		tMethodState *pCallMethodState;
		void *pDelegate;
		HEAP_PTR pDelegateThis;

		if (pCurrentMethodState->pNextDelegate == NULL) {
			// First delegate, so get the Invoke() method defined within the delegate class
			pDelegateMethod = (tMD_MethodDef*)GET_OP();
			// Take the params off the stack. This is the pointer to the tDelegate & params
			POP(pDelegateMethod->parameterStackSize);
			// Allocate memory for delegate params
			pCurrentMethodState->pDelegateParams = malloc(pDelegateMethod->parameterStackSize);
			memcpy(pCurrentMethodState->pDelegateParams, pCurEvalStack, pDelegateMethod->parameterStackSize);
			// Get the actual delegate heap pointer
			pDelegate = *(void**)pCurEvalStack;
		} else {
			pDelegateMethod = Delegate_GetMethod(pCurrentMethodState->pNextDelegate);
			if (pDelegateMethod->pReturnType != NULL) {
				POP(pDelegateMethod->pReturnType->stackSize);
			}
			// Get the actual delegate heap pointer
			pDelegate = pCurrentMethodState->pNextDelegate;
		}
		if (pDelegate == NULL) {
			THROW(types[TYPE_SYSTEM_NULLREFERENCEEXCEPTION]);
		}
		// Get the real method to call; the target of the delegate.
		pCallMethod = Delegate_GetMethodAndStore(pDelegate, &pDelegateThis, &pCurrentMethodState->pNextDelegate);

		// Set up the call method state for the call.
		pCallMethodState = MethodState_Direct(pThread, pCallMethod, pCurrentMethodState, 0, 0);

		// Fill in the parameters
		PTR pDelegateParams = (PTR)pCurrentMethodState->pDelegateParams + pDelegateMethod->parameterStackSize;
		U32 paramSize = CopyParameters(PARAMETERS_PTR(pCallMethodState), pCallMethod, pDelegateParams, pDelegateThis);

		// Set up the local variables for the new method state
		CHANGE_METHOD_STATE(pCallMethodState);
	}
//JIT_INVOKE_DELEGATE_end:
	GO_NEXT();

JIT_INVOKE_SYSTEM_REFLECTION_METHODBASE_start:
	OPCODE_USE(JIT_INVOKE_SYSTEM_REFLECTION_METHODBASE);
	{
		// Get the reference to MethodBase.Invoke
		tMD_MethodDef *pInvokeMethod = (tMD_MethodDef*)GET_OP();

		// if previous op was a tail call prefix and next op is a return
		U32 isTailCall = (prev_op == JIT_TAILCALL_PREFIX) && (*pCurOp == JIT_RETURN);

		// Take the MethodBase.Invoke params off the stack.
		POP(pInvokeMethod->parameterStackSize);

		// Get a pointer to the MethodBase instance (e.g., a MethodInfo or ConstructorInfo),
		// and from that, determine which method we're going to invoke
		tMethodBase *pMethodBase = *(tMethodBase**)pCurEvalStack;
		tMD_MethodDef *pCallMethod = pMethodBase->methodDef;

		// Store the return type so that JIT_REFLECTION_DYNAMICALLY_BOX_RETURN_VALUE can
		// interpret the stack after the invocation
		pCurrentMethodState->pReflectionInvokeReturnType = pCallMethod->pReturnType;

		// Get the 'this' pointer for the call and the params array
		PTR invocationThis = *(PTR*)(pCurEvalStack + sizeof(HEAP_PTR));
		HEAP_PTR invocationParamsArray = *(HEAP_PTR*)(pCurEvalStack + sizeof(HEAP_PTR) + sizeof(PTR));

		// Change interpreter state so we continue execution inside the method being invoked
		tMethodState *pCallMethodState = MethodState_Direct(pThread, pCallMethod, pCurrentMethodState, 0, isTailCall);

		// temp ptr to copy parameters
		PTR pParams = PARAMETERS_PTR(pCallMethodState);

		// Put the new 'this' on the stack
		if (invocationThis != NULL) {
			*(PTR*)pParams = (PTR)(invocationThis);
			pParams += sizeof(PTR);
		}

		// Put any other params on the stack
		if (invocationParamsArray != NULL) {
			U32 invocationParamsArrayLength = SystemArray_GetLength(invocationParamsArray);
			HEAP_PTR* invocationParamsArrayElements = (HEAP_PTR*)SystemArray_GetElements(invocationParamsArray);
			for (U32 paramIndex = 0; paramIndex < invocationParamsArrayLength; paramIndex++) {
				HEAP_PTR currentParam = invocationParamsArrayElements[paramIndex];
				tMD_TypeDef *pParamType = Heap_GetType(currentParam);
				if (pParamType->isValueType) {
					memcpy(pParams, currentParam, pParamType->stackSize);
					pParams += pParamType->stackSize;
				} else {
					*(HEAP_PTR*)pParams = (HEAP_PTR)(currentParam);
					pParams += sizeof(HEAP_PTR);
				}
			}
		}

		// Set up the local variables for the new method state
		CHANGE_METHOD_STATE(pCallMethodState);
	}
//JIT_INVOKE_SYSTEM_REFLECTION_METHODBASE_end:
	GO_NEXT();

JIT_REFLECTION_DYNAMICALLY_BOX_RETURN_VALUE_start:
	OPCODE_USE(JIT_REFLECTION_DYNAMICALLY_BOX_RETURN_VALUE);
	{
		tMD_TypeDef *pLastInvocationReturnType = pCurrentMethodState->pReflectionInvokeReturnType;
		if (pLastInvocationReturnType == NULL) {
			// It was a void method, so it won't have put anything on the stack. We need to put
			// a null value there as a return value, because MethodBase.Invoke isn't void.
			PUSH_O(NULL);
		} else if (Type_IsValueType(pLastInvocationReturnType)) {
			// For value types, remove the raw value data from the stack and replace it with a
			// boxed copy, because MethodBase.Invoke returns object.
			HEAP_PTR heapPtr = Heap_AllocType(pLastInvocationReturnType);
			POP_VALUETYPE(heapPtr, pLastInvocationReturnType->stackSize, pLastInvocationReturnType->stackSize);
			PUSH_O(heapPtr);
		}
	}
JIT_REFLECTION_DYNAMICALLY_BOX_RETURN_VALUE_end:
	GO_NEXT_CHECK();

JIT_DEREF_CALLVIRT_start:
	SET_OP(JIT_DEREF_CALLVIRT, allCallStart);
JIT_BOX_CALLVIRT_start:
	SET_OP(JIT_BOX_CALLVIRT, allCallStart);
JIT_CALL_PTR_start: // Note that JIT_CALL_PTR cannot be virtual
	SET_OP(JIT_CALL_PTR, allCallStart);
JIT_CALLVIRT_O_start:
	SET_OP(JIT_CALLVIRT_O, allCallStart);
JIT_CALL_O_start:
	SET_OP(JIT_CALL_O, allCallStart);
//JIT_CALL_INTERFACE_start:
//	SET_OP(JIT_CALL_INTERFACE, allCallStart);
allCallStart:
	OPCODE_USE(curr_op);
	{
		tMD_MethodDef *pCallMethod;
		tMethodState *pCallMethodState;
		tMD_TypeDef *pBoxCallType;

		if (curr_op == JIT_BOX_CALLVIRT) {
			pBoxCallType = (tMD_TypeDef*)GET_OP();
		}

		pCallMethod = (tMD_MethodDef*)GET_OP();

		// if previous op was a tail call prefix and next op is a return
		U32 isTailCall = (prev_op == JIT_TAILCALL_PREFIX) && (*pCurOp == JIT_RETURN);

		//dprintfn("Calling method: %s", Sys_GetMethodDesc(pCallMethod));

		HEAP_PTR heapPtr = NULL;
		PTR pMem = pCurEvalStack - pCallMethod->parameterStackSize;
		Assert(pMem >= EVAL_STACK_PTR);

		switch (curr_op) {
			case JIT_BOX_CALLVIRT: {
				// Need to de-ref and box the value-type before calling the function
				// TODO: Will this work on value-types that are not 4 bytes long?
				heapPtr = Heap_Box(pBoxCallType, *(PTR*)pMem);
				*(HEAP_PTR*)pMem = heapPtr;
				break;
			}
			case JIT_DEREF_CALLVIRT: {
				heapPtr = **(HEAP_PTR**)pMem;
				*(HEAP_PTR*)pMem = heapPtr;
				break;
			}
			default: {
				// Get the actual object that is becoming 'this'
				heapPtr = METHOD_ISSTATIC(pCallMethod) ? NULL : *(HEAP_PTR*)pMem;
				break;
			}
		}

		// if it's a virtual call, find the correct method to call
		switch (curr_op) {
			case JIT_CALLVIRT_O:
			case JIT_BOX_CALLVIRT:
			case JIT_DEREF_CALLVIRT: {
				if (heapPtr == NULL) {
					//Crash("NULL 'this' in Virtual call: %s", Sys_GetMethodDesc(pCallMethod));
					THROW(types[TYPE_SYSTEM_NULLREFERENCEEXCEPTION]);
				}
				// if interface method
				if (TYPE_ISINTERFACE(pCallMethod->pParentType)) {
					tMD_TypeDef *pThisType = Heap_GetType(heapPtr);
					tMD_TypeDef *pInterface = pCallMethod->pParentType;

					// Find the interface mapping on the 'this' type.
					// This must be searched backwards so if an interface is implemented more than
					// once in the type hierarchy, the most recent definition gets called
					I32 i = (I32)pThisType->numInterfaces;
					while (--i >= 0) {
						if (pThisType->pInterfaceMaps[i].pInterface == pInterface) {
							// Found the right interface map
							if (pThisType->pInterfaceMaps[i].pVTableLookup != NULL) {
								U32 vIndex = pThisType->pInterfaceMaps[i].pVTableLookup[pCallMethod->vTableOfs];
								pCallMethod = pThisType->pVTable[vIndex];
							}
							else {
								pCallMethod = pThisType->pInterfaceMaps[i].ppMethodVLookup[pCallMethod->vTableOfs];
							}
							//dprintfn("Calling interface method: %s", pCallMethod->name);
							break;
						}
					}
					if (i < 0) {
						Crash("%s.%s is missing interface method: %s", pThisType->nameSpace, pThisType->name, Sys_GetMethodDesc(pCallMethod));
					}
				}
				// if virtual method
				else if (METHOD_ISVIRTUAL(pCallMethod)) {
					tMD_TypeDef *pThisType = Heap_GetType(heapPtr);
					tMD_MethodDef* pVirtualMethod = pThisType->pVTable[pCallMethod->vTableOfs];
					if (pVirtualMethod->isGenericDefinition) {
						tMD_MethodDef* pInstMethod = Generics_GetMethodDefFromCoreMethod(pVirtualMethod, pVirtualMethod->pParentType, pCallMethod->numMethodTypeArgs, pCallMethod->ppMethodTypeArgs);
						pCallMethod = pInstMethod;
					} else {
						//Assert(pCallMethod->parameterStackSize == pVirtualMethod->parameterStackSize);
						pCallMethod = pVirtualMethod;
					}
					//dprintfn("Calling virtual method: %s", pCallMethod->name);
				}
				break;
			}
		}

		// Set up the new method state for the called method
		pCallMethodState = MethodState_Direct(pThread, pCallMethod, pCurrentMethodState, 0, isTailCall);

		// Set up the parameter stack for the method being called
		U32 paramSize = CopyParameters(PARAMETERS_PTR(pCallMethodState), pCallMethod, pCurEvalStack, NULL);
		POP(paramSize);

		// Set up the local variables for the new method state
		CHANGE_METHOD_STATE(pCallMethodState);
	}
JIT_DEREF_CALLVIRT_end:
JIT_BOX_CALLVIRT_end:
JIT_CALL_PTR_end:
JIT_CALLVIRT_O_end:
JIT_CALL_O_end:
//JIT_CALL_INTERFACE_end:
	GO_NEXT_CHECK();

JIT_BRANCH_start:
	OPCODE_USE(JIT_BRANCH);
	{
		U32 ofs = GET_OP();
		pCurOp = pOps + ofs;
	}
//JIT_BRANCH_end:
	GO_NEXT_CHECK();

JIT_SWITCH_start:
	OPCODE_USE(JIT_SWITCH);
	{
		// The number of jump targets
		U32 numTargets = GET_OP();
		// The jump target selected
		POP_U32(target);
		if (target >= numTargets) {
			// This is not a valid jump target, so fall-through
			pCurOp += numTargets;
		} else {
			U32 ofs = *(pCurOp + target);
			pCurOp = pOps + ofs;
		}
	}
JIT_SWITCH_end:
	GO_NEXT_CHECK();

JIT_BRANCH_TRUE_start:
	OPCODE_USE(JIT_BRANCH_TRUE);
	{
		POP_U32(value);
		U32 ofs = GET_OP();
		if (value != 0) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BRANCH_TRUE_end:
	GO_NEXT_CHECK();

JIT_BRANCH_FALSE_start:
	OPCODE_USE(JIT_BRANCH_FALSE);
	{
		POP_U32(value);
		U32 ofs = GET_OP();
		if (value == 0) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BRANCH_FALSE_end:
	GO_NEXT_CHECK();

JIT_BRANCH64_TRUE_start:
	OPCODE_USE(JIT_BRANCH64_TRUE);
	{
		POP_U64(value);
		U32 ofs = GET_OP();
		if (value != 0) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BRANCH64_TRUE_end:
	GO_NEXT_CHECK();

JIT_BRANCH64_FALSE_start:
	OPCODE_USE(JIT_BRANCH64_FALSE);
	{
		POP_U64(value);
		U32 ofs = GET_OP();
		if (value == 0) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BRANCH64_FALSE_end:
	GO_NEXT_CHECK();

JIT_BEQ_I32I32_start:
	OPCODE_USE(JIT_BEQ_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if ((I32)v1 == (I32)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BEQ_I32I32_end:
	GO_NEXT_CHECK();

JIT_BEQ_I64I64_start:
	OPCODE_USE(JIT_BEQ_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if ((I64)v1 == (I64)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BEQ_I64I64_end:
	GO_NEXT_CHECK();

JIT_BEQ_F32F32_start:
	OPCODE_USE(JIT_BEQ_F32F32);
	{
		POP_F32_F32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 == v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BEQ_F32F32_end:
	GO_NEXT_CHECK();

JIT_BEQ_F64F64_start:
	OPCODE_USE(JIT_BEQ_F64F64);
	{
		POP_F64_F64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 == v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BEQ_F64F64_end:
	GO_NEXT_CHECK();

JIT_BGE_I32I32_start:
	OPCODE_USE(JIT_BGE_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if ((I32)v1 >= (I32)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGE_I32I32_end:
	GO_NEXT_CHECK();

JIT_BGE_I64I64_start:
	OPCODE_USE(JIT_BGE_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if ((I64)v1 >= (I64)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGE_I64I64_end:
	GO_NEXT_CHECK();

JIT_BGE_F32F32_start:
JIT_BGE_UN_F32F32_start:
	OPCODE_USE(JIT_BGE_F32F32);
	{
		POP_F32_F32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 >= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGE_F32F32_end:
//JIT_BGE_UN_F32F32_end:
	GO_NEXT_CHECK();

JIT_BGE_F64F64_start:
JIT_BGE_UN_F64F64_start:
	OPCODE_USE(JIT_BGE_F64F64);
	{
		POP_F64_F64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 >= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGE_F64F64_end:
//JIT_BGE_UN_F64F64_end:
	GO_NEXT_CHECK();

JIT_BGT_I32I32_start:
	OPCODE_USE(JIT_BGT_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if ((I32)v1 > (I32)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGT_I32I32_end:
	GO_NEXT_CHECK();

JIT_BGT_I64I64_start:
	OPCODE_USE(JIT_BGT_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if ((I64)v1 > (I64)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGT_I64I64_end:
	GO_NEXT_CHECK();

JIT_BGT_F32F32_start:
JIT_BGT_UN_F32F32_start:
	OPCODE_USE(JIT_BGT_F32F32);
	{
		POP_F32_F32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 > v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGT_F32F32_end:
//JIT_BGT_UN_F32F32_end:
	GO_NEXT_CHECK();

JIT_BGT_F64F64_start:
JIT_BGT_UN_F64F64_start:
	OPCODE_USE(JIT_BGT_F64F64);
	{
		POP_F64_F64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 > v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGT_F64F64_end:
//JIT_BGT_UN_F64F64_end:
	GO_NEXT_CHECK();

JIT_BLE_I32I32_start:
	OPCODE_USE(JIT_BLE_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if ((I32)v1 <= (I32)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLE_I32I32_end:
	GO_NEXT_CHECK();

JIT_BLE_I64I64_start:
	OPCODE_USE(JIT_BLE_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if ((I64)v1 <= (I64)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLE_I64I64_end:
	GO_NEXT_CHECK();

JIT_BLE_F32F32_start:
JIT_BLE_UN_F32F32_start:
	OPCODE_USE(JIT_BLE_F32F32);
	{
		POP_F32_F32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 <= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLE_F32F32_end:
//JIT_BLE_UN_F32F32_end:
	GO_NEXT_CHECK();

JIT_BLE_F64F64_start:
JIT_BLE_UN_F64F64_start:
	OPCODE_USE(JIT_BLE_F64F64);
	{
		POP_F64_F64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 <= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLE_F64F64_end:
//JIT_BLE_UN_F64F64_end:
	GO_NEXT_CHECK();

JIT_BLT_I32I32_start:
	OPCODE_USE(JIT_BLT_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if ((I32)v1 < (I32)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLT_I32I32_end:
	GO_NEXT_CHECK();

JIT_BLT_I64I64_start:
	OPCODE_USE(JIT_BLT_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if ((I64)v1 < (I64)v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLT_I64I64_end:
	GO_NEXT_CHECK();

JIT_BLT_F32F32_start:
JIT_BLT_UN_F32F32_start:
	OPCODE_USE(JIT_BLT_F32F32);
	{
		POP_F32_F32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 < v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLT_F32F32_end:
//JIT_BLT_UN_F32F32_end:
	GO_NEXT_CHECK();

JIT_BLT_F64F64_start:
JIT_BLT_UN_F64F64_start:
	OPCODE_USE(JIT_BLT_F64F64);
	{
		POP_F64_F64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 < v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLT_F64F64_end:
//JIT_BLT_UN_F64F64_end:
	GO_NEXT_CHECK();

JIT_BNE_UN_I32I32_start:
	OPCODE_USE(JIT_BNE_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 != v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BNE_UN_I32I32_end:
	GO_NEXT_CHECK();

JIT_BNE_UN_I64I64_start:
	OPCODE_USE(JIT_BNE_UN_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 != v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BNE_UN_I64I64_end:
	GO_NEXT_CHECK();

JIT_BNE_UN_F32F32_start:
	OPCODE_USE(JIT_BNE_UN_F32F32);
	{
		POP_F32_F32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 != v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BNE_UN_F32F32_end:
	GO_NEXT_CHECK();

JIT_BNE_UN_F64F64_start:
	OPCODE_USE(JIT_BNE_UN_F64F64);
	{
		POP_F64_F64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 != v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BNE_UN_F64F64_end:
	GO_NEXT_CHECK();

JIT_BGE_UN_I32I32_start:
	OPCODE_USE(JIT_BGE_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 >= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGE_UN_I32I32_end:
	GO_NEXT_CHECK();

JIT_BGT_UN_I32I32_start:
	OPCODE_USE(JIT_BGT_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 > v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGT_UN_I32I32_end:
	GO_NEXT_CHECK();

JIT_BLE_UN_I32I32_start:
	OPCODE_USE(JIT_BLE_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 <= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLE_UN_I32I32_end:
	GO_NEXT_CHECK();

JIT_BLT_UN_I32I32_start:
	OPCODE_USE(JIT_BLT_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U32 ofs = GET_OP();
		if (v1 < v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLT_UN_I32I32_end:
	GO_NEXT_CHECK();


JIT_BGE_UN_I64I64_start:
	OPCODE_USE(JIT_BGE_UN_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 >= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGE_UN_I64I64_end:
	GO_NEXT_CHECK();

JIT_BGT_UN_I64I64_start:
	OPCODE_USE(JIT_BGT_UN_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 > v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BGT_UN_I64I64_end:
	GO_NEXT_CHECK();

JIT_BLE_UN_I64I64_start:
	OPCODE_USE(JIT_BLE_UN_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 <= v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLE_UN_I64I64_end:
	GO_NEXT_CHECK();

JIT_BLT_UN_I64I64_start:
	OPCODE_USE(JIT_BLT_UN_I64I64);
	{
		POP_U64_U64(v1, v2);
		U32 ofs = GET_OP();
		if (v1 < v2) {
			pCurOp = pOps + ofs;
		}
	}
//JIT_BLT_UN_I64I64_end:
	GO_NEXT_CHECK();


JIT_CEQ_I32I32_start: // Handles I32 and O
	OPCODE_USE(JIT_CEQ_I32I32);
	BINARY_OP(U32, U32, U32, ==);
//JIT_CEQ_I32I32_end:
	GO_NEXT();

JIT_CGT_I32I32_start:
	OPCODE_USE(JIT_CGT_I32I32);
	BINARY_OP(U32, I32, I32, >);
//JIT_CGT_I32I32_end:
	GO_NEXT();

JIT_CGT_UN_I32I32_start: // Handles I32 and O
	OPCODE_USE(JIT_CGT_UN_I32I32);
	BINARY_OP(U32, U32, U32, >);
//JIT_CGT_UN_I32I32_end:
	GO_NEXT();

JIT_CLT_I32I32_start:
	OPCODE_USE(JIT_CLT_I32I32);
	BINARY_OP(U32, I32, I32, <);
//JIT_CLT_I32I32_end:
	GO_NEXT();

JIT_CLT_UN_I32I32_start:
	OPCODE_USE(JIT_CLT_UN_I32I32);
	BINARY_OP(U32, U32, U32, <);
//JIT_CLT_UN_I32I32_end:
	GO_NEXT();

JIT_CEQ_I64I64_start:
	OPCODE_USE(JIT_CEQ_I64I64);
	BINARY_OP(U32, U64, U64, ==);
//JIT_CEQ_I64I64_end:
	GO_NEXT();

JIT_CGT_I64I64_start:
	OPCODE_USE(JIT_CGT_I64I64);
	BINARY_OP(U32, I64, I64, >);
//JIT_CGT_I64I64_end:
	GO_NEXT();

JIT_CGT_UN_I64I64_start:
	OPCODE_USE(JIT_CGT_UN_I64I64);
	BINARY_OP(U32, U64, U64, >);
//JIT_CGT_UN_I64I64_end:
	GO_NEXT();

JIT_CLT_I64I64_start:
	OPCODE_USE(JIT_CLT_I64I64);
	BINARY_OP(U32, I64, I64, <);
//JIT_CLT_I64I64_end:
	GO_NEXT();

JIT_CLT_UN_I64I64_start:
	OPCODE_USE(JIT_CLT_UN_I64I64);
	BINARY_OP(U32, U64, U64, <);
//JIT_CLT_UN_I64I64_end:
	GO_NEXT();

JIT_CEQ_F32F32_start:
	OPCODE_USE(JIT_CEQ_F32F32);
	BINARY_OP(U32, float, float, ==);
//JIT_CEQ_F32F32_end:
	GO_NEXT();

JIT_CEQ_F64F64_start:
	OPCODE_USE(JIT_CEQ_F64F64);
	BINARY_OP(U32, double, double, ==);
//JIT_CEQ_F64F64_end:
	GO_NEXT();

JIT_CGT_F32F32_start:
JIT_CGT_UN_F32F32_start:
	OPCODE_USE(JIT_CGT_F32F32);
	BINARY_OP(U32, float, float, >);
//JIT_CGT_F32F32_end:
//JIT_CGT_UN_F32F32_end:
	GO_NEXT();

JIT_CGT_F64F64_start:
JIT_CGT_UN_F64F64_start:
	OPCODE_USE(JIT_CGT_F64F64);
	BINARY_OP(U32, double, double, >);
//JIT_CGT_F64F64_end:
//JIT_CGT_UN_F64F64_end:
	GO_NEXT();

JIT_CLT_F32F32_start:
JIT_CLT_UN_F32F32_start:
	OPCODE_USE(JIT_CLT_F32F32);
	BINARY_OP(U32, float, float, <);
//JIT_CLT_F32F32_end:
//JIT_CLT_UN_F32F32_end:
	GO_NEXT();

JIT_CLT_F64F64_start:
JIT_CLT_UN_F64F64_start:
	OPCODE_USE(JIT_CLT_F64F64);
	BINARY_OP(U32, double, double, <);
//JIT_CLT_F64F64_end:
//JIT_CLT_UN_F64F64_end:
	GO_NEXT();

JIT_ADD_OVF_I32I32_start:
	OPCODE_USE(JIT_ADD_OVF_I32I32);
	{
		POP_U32_U32(v1, v2);
		I64 res = (I64)(I32)v1 + (I64)(I32)v2;
		if (res > (I64)0x7fffffff || res < (I64)0xffffffff80000000) {
			// Overflowed, so throw exception
			THROW(types[TYPE_SYSTEM_OVERFLOWEXCEPTION]);
		}
		PUSH_U32((I32)res);
	}
//JIT_ADD_OVF_I32I32_end:
	GO_NEXT();

JIT_ADD_OVF_UN_I32I32_start:
	OPCODE_USE(JIT_ADD_OVF_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U64 res = (U64)v1 + (U64)v2;
		if (res > (U64)0xffffffff) {
			// Overflowed, so throw exception
			THROW(types[TYPE_SYSTEM_OVERFLOWEXCEPTION]);
		}
		PUSH_U32(res);
	}
//JIT_ADD_OVF_UN_I32I32_end:
	GO_NEXT();

JIT_MUL_OVF_I32I32_start:
	OPCODE_USE(JIT_MUL_OVF_I32I32);
	{
		POP_U32_U32(v1, v2);
		I64 res = (I64)(I32)v1 * (I64)(I32)v2;
		if (res > (I64)0x7fffffff || res < (I64)0xffffffff80000000) {
			// Overflowed, so throw exception
			THROW(types[TYPE_SYSTEM_OVERFLOWEXCEPTION]);
		}
		PUSH_U32((I32)res);
	}
//JIT_MUL_OVF_I32I32_end:
	GO_NEXT();

JIT_MUL_OVF_UN_I32I32_start:
	OPCODE_USE(JIT_MUL_OVF_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U64 res = (U64)v1 * (U64)v2;
		if (res > (U64)0xffffffff) {
			// Overflowed, so throw exception
			THROW(types[TYPE_SYSTEM_OVERFLOWEXCEPTION]);
		}
		PUSH_U32(res);
	}
//JIT_MUL_OVF_UN_I32I32_end:
	GO_NEXT();

JIT_SUB_OVF_I32I32_start:
	OPCODE_USE(JIT_SUB_OVF_I32I32);
	{
		POP_U32_U32(v1, v2);
		I64 res = (I64)(I32)v1 - (I64)(I32)v2;
		if (res > (I64)0x7fffffff || res < (I64)0xffffffff80000000) {
			// Overflowed, so throw exception
			THROW(types[TYPE_SYSTEM_OVERFLOWEXCEPTION]);
		}
		PUSH_U32((I32)res);
	}
//JIT_SUB_OVF_I32I32_end:
	GO_NEXT();

JIT_SUB_OVF_UN_I32I32_start:
	OPCODE_USE(JIT_SUB_OVF_UN_I32I32);
	{
		POP_U32_U32(v1, v2);
		U64 res = (U64)v1 - (U64)v2;
		if (res > (U64)0xffffffff) {
			// Overflowed, so throw exception
			THROW(types[TYPE_SYSTEM_OVERFLOWEXCEPTION]);
		}
		PUSH_U32(res);
	}
//JIT_SUB_OVF_UN_I32I32_end:
	GO_NEXT();

JIT_ADD_I32I32_start:
	OPCODE_USE(JIT_ADD_I32I32);
	BINARY_OP(I32, I32, I32, +);
//JIT_ADD_I32I32_end:
	GO_NEXT();

JIT_ADD_I64I64_start:
	OPCODE_USE(JIT_ADD_I64I64);
	BINARY_OP(I64, I64, I64, +);
//JIT_ADD_I64I64_end:
	GO_NEXT();

JIT_ADD_F32F32_start:
	OPCODE_USE(JIT_ADD_F32F32);
	BINARY_OP(float, float, float, +);
//JIT_ADD_F32F32_end:
	GO_NEXT();

JIT_ADD_F64F64_start:
	OPCODE_USE(JIT_ADD_F64F64);
	BINARY_OP(double, double, double, +);
//JIT_ADD_F64F64_end:
	GO_NEXT();

JIT_SUB_I32I32_start:
	OPCODE_USE(JIT_SUB_I32I32);
	BINARY_OP(I32, I32, I32, -);
//JIT_SUB_I32I32_end:
	GO_NEXT();

JIT_SUB_I64I64_start:
	OPCODE_USE(JIT_SUB_I64I64);
	BINARY_OP(I64, I64, I64, -);
//JIT_SUB_I64I64_end:
	GO_NEXT();

JIT_SUB_F32F32_start:
	OPCODE_USE(JIT_SUB_F32F32);
	BINARY_OP(double, double, double, -);
//JIT_SUB_F32F32_end:
	GO_NEXT();

JIT_SUB_F64F64_start:
	OPCODE_USE(JIT_SUB_F64F64);
	BINARY_OP(double, double, double, -);
//JIT_SUB_F64F64_end:
	GO_NEXT();

JIT_MUL_I32I32_start:
	OPCODE_USE(JIT_MUL_I32I32);
	BINARY_OP(I32, I32, I32, *);
//JIT_MUL_I32I32_end:
	GO_NEXT();

JIT_MUL_I64I64_start:
	OPCODE_USE(JIT_MUL_I64I64);
	BINARY_OP(I64, I64, I64, *);
//JIT_MUL_I64I64_end:
	GO_NEXT();

JIT_MUL_F32F32_start:
	OPCODE_USE(JIT_MUL_F32F32);
	BINARY_OP(float, float, float, *);
//JIT_MUL_F32F32_end:
	GO_NEXT();

JIT_MUL_F64F64_start:
	OPCODE_USE(JIT_MUL_F64F64);
	BINARY_OP(double, double, double, *);
//JIT_MUL_F64F64_end:
	GO_NEXT();

JIT_DIV_I32I32_start:
	OPCODE_USE(JIT_DIV_I32I32);
	BINARY_OP(I32, I32, I32, /);
//JIT_DIV_I32I32_end:
	GO_NEXT();

JIT_DIV_I64I64_start:
	OPCODE_USE(JIT_DIV_I64I64);
	BINARY_OP(I64, I64, I64, /);
//JIT_DIV_I64I64_end:
	GO_NEXT();

JIT_DIV_F32F32_start:
	OPCODE_USE(JIT_DIV_F32F32);
	BINARY_OP(float, float, float, /);
//JIT_DIV_F32F32_end:
	GO_NEXT();

JIT_DIV_F64F64_start:
	OPCODE_USE(JIT_DIV_F64F64);
	BINARY_OP(double, double, double, /);
//JIT_DIV_F64F64_end:
	GO_NEXT();

JIT_DIV_UN_I32I32_start:
	OPCODE_USE(JIT_DIV_UN_I32I32);
	BINARY_OP(U32, U32, U32, /);
//JIT_DIV_UN_I32I32_end:
	GO_NEXT();

JIT_DIV_UN_I64I64_start:
	OPCODE_USE(JIT_DIV_UN_I64I64);
	BINARY_OP(U64, U64, U64, /);
//JIT_DIV_UN_I64I64_end:
	GO_NEXT();

JIT_REM_I32I32_start:
	OPCODE_USE(JIT_REM_I32I32);
	BINARY_OP(I32, I32, I32, %);
//JIT_REM_I32I32_end:
	GO_NEXT();

JIT_REM_I64I64_start:
	OPCODE_USE(JIT_REM_I64I64);
	BINARY_OP(I64, I64, I64, %);
//JIT_REM_I64I64_end:
	GO_NEXT();

JIT_REM_UN_I32I32_start:
	OPCODE_USE(JIT_REM_UN_I32I32);
	BINARY_OP(U32, U32, U32, %);
//JIT_REM_UN_I32I32_end:
	GO_NEXT();

JIT_REM_UN_I64I64_start:
	OPCODE_USE(JIT_REM_UN_I64I64);
	BINARY_OP(U64, U64, U64, %);
//JIT_REM_UN_I64I64_end:
	GO_NEXT();

JIT_AND_I32I32_start:
	OPCODE_USE(JIT_AND_I32I32);
	BINARY_OP(U32, U32, U32, &);
//JIT_AND_I32I32_end:
	GO_NEXT();

JIT_AND_I64I64_start:
	OPCODE_USE(JIT_AND_I64I64);
	BINARY_OP(U64, U64, U64, &);
//JIT_AND_I64I64_end:
	GO_NEXT();

JIT_OR_I32I32_start:
	OPCODE_USE(JIT_OR_I32I32);
	BINARY_OP(U32, U32, U32, |);
//JIT_OR_I32I32_end:
	GO_NEXT();

JIT_OR_I64I64_start:
	OPCODE_USE(JIT_OR_I64I64);
	BINARY_OP(U64, U64, U64, |);
//JIT_OR_I64I64_end:
	GO_NEXT();

JIT_XOR_I32I32_start:
	OPCODE_USE(JIT_XOR_I32I32);
	BINARY_OP(U32, U32, U32, ^);
//JIT_XOR_I32I32_end:
	GO_NEXT();

JIT_XOR_I64I64_start:
	OPCODE_USE(JIT_XOR_I64I64);
	BINARY_OP(U64, U64, U64, ^);
//JIT_XOR_I64I64_end:
	GO_NEXT();

JIT_NEG_I32_start:
	OPCODE_USE(JIT_NEG_I32);
	UNARY_OP(I32, -);
//JIT_NEG_I32_end:
	GO_NEXT();

JIT_NEG_I64_start:
	OPCODE_USE(JIT_NEG_I64);
	UNARY_OP(I64, -);
//JIT_NEG_I64_end:
	GO_NEXT();

JIT_NEG_F32_start:
	OPCODE_USE(JIT_NEG_F32);
	UNARY_OP(float, -);
//JIT_NEG_F32_end:
	GO_NEXT();

JIT_NEG_F64_start:
	OPCODE_USE(JIT_NEG_F64);
	UNARY_OP(double, -);
//JIT_NEG_F64_end:
	GO_NEXT();

JIT_NOT_I32_start:
	OPCODE_USE(JIT_NOT_I32);
	UNARY_OP(U32, ~);
//JIT_NOT_I32_end:
	GO_NEXT();

JIT_NOT_I64_start:
	OPCODE_USE(JIT_NOT_I64);
	UNARY_OP(U64, ~);
//JIT_NOT_I64_end:
	GO_NEXT();

JIT_SHL_I32_start:
	OPCODE_USE(JIT_SHL_I32);
	BINARY_OP(U32, U32, U32, <<);
//JIT_SHL_I32_end:
	GO_NEXT();

JIT_SHR_I32_start:
	OPCODE_USE(JIT_SHR_I32);
	BINARY_OP(I32, I32, U32, >>);
//JIT_SHR_I32_end:
	GO_NEXT();

JIT_SHR_UN_I32_start:
	OPCODE_USE(JIT_SHR_UN_I32);
	BINARY_OP(U32, U32, U32, >>);
//JIT_SHR_UN_I32_end:
	GO_NEXT();

JIT_SHL_I64_start:
	OPCODE_USE(JIT_SHL_I64);
	BINARY_OP(U64, U64, U32, <<);
//JIT_SHL_I64_end:
	GO_NEXT();

JIT_SHR_I64_start:
	OPCODE_USE(JIT_SHR_I64);
	BINARY_OP(I64, I64, U32, >>);
//JIT_SHR_I64_end:
	GO_NEXT();

JIT_SHR_UN_I64_start:
	OPCODE_USE(JIT_SHR_UN_I64);
	BINARY_OP(U64, U64, U32, >>);
//JIT_SHR_UN_I64_end:
	GO_NEXT();

	// Conversion operations

JIT_CONV_U32_U32_start:
JIT_CONV_I32_U32_start:
	OPCODE_USE(JIT_CONV_I32_U32);
	{
		U32 mask = GET_OP();
		STACK_ADDR(U32) &= mask;
	}
//JIT_CONV_U32_U32_end:
//JIT_CONV_I32_U32_end:
	GO_NEXT();

JIT_CONV_U32_I32_start:
JIT_CONV_I32_I32_start:
	OPCODE_USE(JIT_CONV_I32_I32);
	{
		U32 shift = GET_OP();
		STACK_ADDR(I32) = (STACK_ADDR(I32) << shift) >> shift;
	}
//JIT_CONV_U32_I32_end:
//JIT_CONV_I32_I32_end:
	GO_NEXT();

JIT_CONV_I32_I64_start:
	OPCODE_USE(JIT_CONV_I32_I64);
	{
		POP_U32(value);
		PUSH_U64((I64)(I32)value);
	}
//JIT_CONV_I32_I64_end:
	GO_NEXT();

JIT_CONV_I32_U64_start:
JIT_CONV_U32_U64_start:
JIT_CONV_U32_I64_start:
	OPCODE_USE(JIT_CONV_U32_I64);
	{
		POP_U32(value);
		PUSH_U64(value);
	}
//JIT_CONV_I32_U64_end:
//JIT_CONV_U32_U64_end:
//JIT_CONV_U32_I64_end:
	GO_NEXT();

JIT_CONV_I32_R32_start:
	OPCODE_USE(JIT_CONV_I32_R32);
	{
		POP_U32(value);
		PUSH_FLOAT((I32)value);
	}
//JIT_CONV_I32_R32_end:
	GO_NEXT();

JIT_CONV_I32_R64_start:
	OPCODE_USE(JIT_CONV_I32_R64);
	{
		POP_U32(value);
		PUSH_DOUBLE((I32)value);
	}
//JIT_CONV_I32_R64_end:
	GO_NEXT();

JIT_CONV_U32_R32_start:
	OPCODE_USE(JIT_CONV_U32_R32);
	{
		POP_U32(value);
		PUSH_FLOAT(value);
	}
//JIT_CONV_U32_R32_end:
	GO_NEXT();

JIT_CONV_U32_R64_start:
	OPCODE_USE(JIT_CONV_U32_R64);
	{
		POP_U32(value);
		PUSH_DOUBLE(value);
	}
//JIT_CONV_U32_R64_end:
	GO_NEXT();

JIT_CONV_I64_U32_start:
JIT_CONV_U64_U32_start:
	OPCODE_USE(JIT_CONV_I64_U32);
	{
		U32 mask = GET_OP();
		POP_U64(value);
		PUSH_U32(value & mask);
	}
//JIT_CONV_I64_U32_end:
//JIT_CONV_U64_U32_end:
	GO_NEXT();

JIT_CONV_I64_I32_start:
JIT_CONV_U64_I32_start:
	OPCODE_USE(JIT_CONV_I64_U32);
	{
		U32 shift = GET_OP();
		POP_U64(value);
		PUSH_U32(((I32)value << shift) >> shift);
	}
//JIT_CONV_I64_I32_end:
//JIT_CONV_U64_I32_end:
	GO_NEXT();

JIT_CONV_I64_R32_start:
	OPCODE_USE(JIT_CONV_I64_R32);
	{
		POP_U64(value);
		PUSH_FLOAT((I64)value);
	}
//JIT_CONV_I64_R32_end:
	GO_NEXT();

JIT_CONV_I64_R64_start:
	OPCODE_USE(JIT_CONV_I64_R64);
	{
		POP_U64(value);
		PUSH_DOUBLE((I64)value);
	}
//JIT_CONV_I64_R64_end:
	GO_NEXT();

JIT_CONV_U64_R32_start:
	OPCODE_USE(JIT_CONV_U64_R32);
	{
		POP_U64(value);
		PUSH_FLOAT(value);
	}
//JIT_CONV_U64_R32_end:
	GO_NEXT();

JIT_CONV_U64_R64_start:
	OPCODE_USE(JIT_CONV_U64_R64);
	{
		POP_U64(value);
		PUSH_DOUBLE(value);
	}
//JIT_CONV_U64_R64_end:
	GO_NEXT();

JIT_CONV_R32_I32_start:
	OPCODE_USE(JIT_CONV_R32_I32);
	{
		U32 shift = GET_OP();
		POP_FLOAT(value);
		PUSH_U32(((I32)value << shift) >> shift);
	}
//JIT_CONV_R32_I32_end:
	GO_NEXT();

JIT_CONV_R32_U32_start:
	OPCODE_USE(JIT_CONV_R32_U32);
	{
		U32 mask = GET_OP();
		POP_FLOAT(value);
		PUSH_U32(((U32)value) & mask);
	}
//JIT_CONV_R32_U32_end:
	GO_NEXT();

JIT_CONV_R32_I64_start:
	OPCODE_USE(JIT_CONV_R32_I64);
	{
		POP_FLOAT(value);
		PUSH_U64((I64)value);
	}
//JIT_CONV_R32_I64_end:
	GO_NEXT();

JIT_CONV_R32_U64_start:
	OPCODE_USE(JIT_CONV_R32_U64);
	{
		POP_FLOAT(value);
		PUSH_U64(value);
	}
//JIT_CONV_R32_U64_end:
	GO_NEXT();

JIT_CONV_R32_R64_start:
	OPCODE_USE(JIT_CONV_R32_R64);
	{
		POP_FLOAT(value);
		PUSH_DOUBLE(value);
	}
//JIT_CONV_R32_R64_end:
	GO_NEXT();

JIT_CONV_R64_I32_start:
	OPCODE_USE(JIT_CONV_R64_I32);
	{
		U32 shift = GET_OP();
		POP_DOUBLE(value);
		PUSH_U32(((I32)value << shift) >> shift);
	}
//JIT_CONV_R64_I32_end:
	GO_NEXT();

JIT_CONV_R64_U32_start:
	OPCODE_USE(JIT_CONV_R64_U32);
	{
		U32 mask = GET_OP();
		POP_DOUBLE(value);
		PUSH_U32(((U32)value) & mask);
	}
//JIT_CONV_R64_U32_end:
	GO_NEXT();

JIT_CONV_R64_I64_start:
	OPCODE_USE(JIT_CONV_R64_I64);
	{
		POP_DOUBLE(value);
		PUSH_U64((I64)value);
	}
//JIT_CONV_R64_I64_end:
	GO_NEXT();

JIT_CONV_R64_U64_start:
	OPCODE_USE(JIT_CONV_R64_U64);
	{
		POP_DOUBLE(value);
		PUSH_U64(value);
	}
//JIT_CONV_R64_U64_end:
	GO_NEXT();

JIT_CONV_R64_R32_start:
	OPCODE_USE(JIT_CONV_R64_R32);
	{
		POP_DOUBLE(value);
		PUSH_FLOAT((float)value);
	}
//JIT_CONV_R64_R32_end:
	GO_NEXT();

JIT_LOADFUNCTION_start:
	OPCODE_USE(JIT_LOADFUNCTION);
	{
		// This is actually a pointer not a U32
		U32 value = GET_OP();
		PUSH_U32(value);
	}
//JIT_LOADFUNCTION_end:
	GO_NEXT();

JIT_LOADOBJECT_start:
	OPCODE_USE(JIT_LOADOBJECT);
	{
		POP_PTR(pMem); // address of value-type
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP(); //type of the value-type
		//if (pTypeDef->stackSize != pTypeDef->arrayElementSize) {
		// For bytes and int16s we need some special code to ensure that the stack
		// does not contain rubbish in the bits unused in this type.
		// But there is no harm in running this for all types, and it's smaller and probably faster
		*(U32*)pCurEvalStack = 0;
		//}
		PUSH_VALUETYPE(pMem, pTypeDef->arrayElementSize, pTypeDef->stackSize);
	}
//JIT_LOADOBJECT_end:
	GO_NEXT();

JIT_LOAD_STRING_start:
	OPCODE_USE(JIT_LOAD_STRING);
	{
		U32 value = GET_OP();
		HEAP_PTR heapPtr = SystemString_FromUserStrings(pCurrentMethodState->pMethod->pMetaData, value);
		PUSH_O(heapPtr);
	}
//JIT_LOAD_STRING_end:
	GO_NEXT();

JIT_NEWOBJECT_start:
	OPCODE_USE(JIT_NEWOBJECT);
	{
		tMD_MethodDef *pConstructorDef;
		tMethodState *pCallMethodState;
		HEAP_PTR obj = NULL;

		pConstructorDef = (tMD_MethodDef*)GET_OP();
		U32 isInternalConstructor = (pConstructorDef->implFlags & METHODIMPLATTRIBUTES_INTERNALCALL) != 0;

		// All internal constructors MUST allocate their own 'this' objects
		if (isInternalConstructor) {
			obj = (HEAP_PTR)(-1); // dummy 'this' (but not null, so CopyParameters() can calculate proper offset)
		} else {
			obj = Heap_AllocType(pConstructorDef->pParentType);
		}

#ifdef DIAG_METHOD_CALLS
		pCurrentMethodState->pMethod->heapAllocs++;
#endif

		// Set up the new method state for the called method
		pCallMethodState = MethodState_Direct(pThread, pConstructorDef, pCurrentMethodState, isInternalConstructor, 0);

		// Fill in the parameters
		U32 paramSize = CopyParameters(PARAMETERS_PTR(pCallMethodState), pConstructorDef, pCurEvalStack, obj);
		POP(paramSize);

		// Push the object so it's on the stack when the constructor returns
		if (!isInternalConstructor) {
			PUSH_O(obj);
		}
		// Set up the local variables for the new method state
		CHANGE_METHOD_STATE(pCallMethodState);
		// Run any pending Finalizers
		RUN_FINALIZER();
	}
//JIT_NEWOBJECT_end:
	GO_NEXT_CHECK();

JIT_NEWOBJECT_VALUETYPE_start:
	OPCODE_USE(JIT_NEWOBJECT_VALUETYPE);
	{
		tMD_MethodDef *pConstructorDef;
		tMethodState *pCallMethodState;
		U32 isInternalConstructor;

		pConstructorDef = (tMD_MethodDef*)GET_OP();
		isInternalConstructor = (pConstructorDef->implFlags & METHODIMPLATTRIBUTES_INTERNALCALL) != 0;

		// Allocate space on the eval-stack for the new value-type here
		PTR pMem = pCurEvalStack - (pConstructorDef->parameterStackSize - sizeof(PTR));
		Assert(pMem >= EVAL_STACK_PTR);

		// Set up the new method state for the called method
		pCallMethodState = MethodState_Direct(pThread, pConstructorDef, pCurrentMethodState, isInternalConstructor, 0);

		// Fill in the parameters
		U32 paramSize = CopyParameters(PARAMETERS_PTR(pCallMethodState), pConstructorDef, pCurEvalStack, pMem);
		POP(paramSize);

		// Set the stack state so it's correct for the constructor return
		if (!isInternalConstructor) {
			PUSH(pConstructorDef->pParentType->stackSize);
		}
		// Set up the local variables for the new method state
		CHANGE_METHOD_STATE(pCallMethodState);
		// Run any pending Finalizers
		RUN_FINALIZER();
	}
//JIT_NEWOBJECT_VALUETYPE_end:
	GO_NEXT_CHECK();

JIT_IS_INSTANCE_start:
	SET_OP(JIT_IS_INSTANCE, jitCastClass);
JIT_CAST_CLASS_start:
	SET_OP(JIT_CAST_CLASS, jitCastClass);
jitCastClass:
	OPCODE_USE(curr_op);
	{
		tMD_TypeDef *pToType = (tMD_TypeDef*)GET_OP();
		POP_O(heapPtr);
		if (heapPtr == NULL) {
			PUSH_O(NULL);
		} else {
			tMD_TypeDef *pTestType = Heap_GetType(heapPtr);
			// Arrays are handled specially - check if the element type is compatible (or exact match for value types)
			if (TYPE_ISARRAY(pTestType) && TYPE_ISARRAY(pToType)) {
				if (pTestType->pArrayElementType->isValueType ?
					pToType->pArrayElementType == pTestType->pArrayElementType :
					Type_IsAssignableFrom(pToType->pArrayElementType, pTestType->pArrayElementType)) {
					PUSH_O(heapPtr);
				} else {
					if (curr_op == JIT_IS_INSTANCE) { PUSH_O(NULL); }
					else { THROW(types[TYPE_SYSTEM_INVALIDCASTEXCEPTION]); }
				}
			}
			// If derived class, interface, or nullable type compatible.
			else if (Type_IsAssignableFrom(pToType, pTestType) ||
					(pToType->pGenericDefinition == types[TYPE_SYSTEM_NULLABLE] &&
						pToType->ppClassTypeArgs[0] == pTestType)) {
					PUSH_O(heapPtr);
			} else {
				if (curr_op == JIT_IS_INSTANCE) { PUSH_O(NULL); }
				else { THROW(types[TYPE_SYSTEM_INVALIDCASTEXCEPTION]); }
			}
		}
	}
JIT_IS_INSTANCE_end:
//JIT_CAST_CLASS_end:
	GO_NEXT();

JIT_NEW_VECTOR_start: // Array with 1 dimension, zero-based
	OPCODE_USE(JIT_NEW_VECTOR);
	{
		tMD_TypeDef *pArrayTypeDef = (tMD_TypeDef*)GET_OP();
		POP_U32(numElements);
		HEAP_PTR heapPtr = SystemArray_NewVector(pArrayTypeDef, numElements);
		PUSH_O(heapPtr);
		// Run any pending Finalizers
		RUN_FINALIZER();
	}
//JIT_NEW_VECTOR_end:
	GO_NEXT();

JIT_LOAD_VECTOR_LEN_start: // Load the length of a vector array
	OPCODE_USE(JIT_LOAD_VECTOR_LEN);
	{
		POP_O(heapPtr);
		U32 value = SystemArray_GetLength(heapPtr);
		PUSH_U32(value);
	}
//JIT_LOAD_VECTOR_LEN_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_I8_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_I8);
	{
		U32 value;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_LoadElement(heapPtr, idx, (PTR)&value);
		PUSH_U32((I8)value);
	}
//JIT_LOAD_ELEMENT_I8_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_U8_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_U8);
	{
		U32 value;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_LoadElement(heapPtr, idx, (PTR)&value);
		PUSH_U32((U8)value);
	}
//JIT_LOAD_ELEMENT_U8_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_I16_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_I16);
	{
		U32 value;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_LoadElement(heapPtr, idx, (PTR)&value);
		PUSH_U32((I16)value);
	}
//JIT_LOAD_ELEMENT_I16_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_U16_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_U16);
	{
		U32 value;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_LoadElement(heapPtr, idx, (PTR)&value);
		PUSH_U32((U16)value);
	}
//JIT_LOAD_ELEMENT_U16_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_I32_start:
JIT_LOAD_ELEMENT_U32_start:
JIT_LOAD_ELEMENT_R32_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_I32);
	{
		U32 value;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_LoadElement(heapPtr, idx, (PTR)&value);
		PUSH_U32(value);
	}
//JIT_LOAD_ELEMENT_I32_end:
//JIT_LOAD_ELEMENT_U32_end:
//JIT_LOAD_ELEMENT_R32_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_I64_start:
JIT_LOAD_ELEMENT_R64_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_I64);
	{
		U64 value;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_LoadElement(heapPtr, idx, (PTR)&value);
		PUSH_U64(value);
	}
//JIT_LOAD_ELEMENT_I64_end:
//JIT_LOAD_ELEMENT_R64_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_start:
	OPCODE_USE(JIT_LOAD_ELEMENT);
	{
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		U32 size = GET_OP(); // size of type on stack
		*(U32*)pCurEvalStack = 0; // This is required to zero out the stack for types that are stored in <4 bytes in arrays
		SystemArray_LoadElement(heapPtr, idx, pCurEvalStack);
		PUSH(size);
	}
//JIT_LOAD_ELEMENT_end:
	GO_NEXT();

JIT_LOAD_ELEMENT_ADDR_start:
	OPCODE_USE(JIT_LOAD_ELEMENT_ADDR);
	{
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		PTR pMem = SystemArray_LoadElementAddress(heapPtr, idx);
		PUSH_PTR(pMem);
	}
//JIT_LOAD_ELEMENT_ADDR_end:
	GO_NEXT();

JIT_STORE_ELEMENT_32_start:
	OPCODE_USE(JIT_STORE_ELEMENT_32);
	{
		POP_U32(value); // Value
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_StoreElement(heapPtr, idx, (PTR)&value);
	}
//JIT_STORE_ELEMENT_32_end:
	GO_NEXT();

JIT_STORE_ELEMENT_64_start:
	OPCODE_USE(JIT_STORE_ELEMENT_64);
	{
		POP_U64(value); // Value
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_StoreElement(heapPtr, idx, (PTR)&value);
	}
//JIT_STORE_ELEMENT_64_end:
	GO_NEXT();

JIT_STORE_ELEMENT_start:
	OPCODE_USE(JIT_STORE_ELEMENT);
	{
		U32 size = GET_OP(); // Size in bytes of value on stack
		POP(size);
		PTR pMem = pCurEvalStack;
		POP_U32(idx);   // Array index
		POP_O(heapPtr); // Array object
		SystemArray_StoreElement(heapPtr, idx, pMem);
	}
//JIT_STORE_ELEMENT_end:
	GO_NEXT();

JIT_STOREFIELD_INT32_start:
JIT_STOREFIELD_O_start:
JIT_STOREFIELD_INTNATIVE_start: // only for 32-bit
JIT_STOREFIELD_PTR_start: // only for 32-bit
JIT_STOREFIELD_F32_start:
	OPCODE_USE(JIT_STOREFIELD_INT32);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		POP_U32(value);
		POP_O(heapPtr);
		PTR pMem = heapPtr + pFieldDef->memOffset;
		*(U32*)pMem = value;
	}
//JIT_STOREFIELD_INT32_end:
//JIT_STOREFIELD_O_end:
//JIT_STOREFIELD_INTNATIVE_end:
//JIT_STOREFIELD_PTR_end:
//JIT_STOREFIELD_F32_end:
	GO_NEXT();

JIT_STOREFIELD_INT64_start:
JIT_STOREFIELD_F64_start:
	OPCODE_USE(JIT_STOREFIELD_F64);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		POP_U64(value);
		POP_O(heapPtr);
		PTR pMem = heapPtr + pFieldDef->memOffset;
		*(U64*)pMem = value;
	}
//JIT_STOREFIELD_INT64_end:
//JIT_STOREFIELD_F64_end:
	GO_NEXT();

JIT_STOREFIELD_VALUETYPE_start:
	OPCODE_USE(JIT_STOREFIELD_VALUETYPE);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		POP(pFieldDef->memSize);
		PTR pMem = pCurEvalStack;
		POP_O(heapPtr);
		memcpy(heapPtr + pFieldDef->memOffset, pMem, pFieldDef->memSize);
	}
//JIT_STOREFIELD_VALUETYPE_end:
	GO_NEXT();

JIT_LOADFIELD_start:
	OPCODE_USE(JIT_LOADFIELD);
	// TODO: Optimize into LOADFIELD of different types O, INT32, INT64, F, etc...)
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		POP_O(heapPtr);
		PTR pMem = heapPtr + pFieldDef->memOffset;
		// It may not be a value-type, but this'll work anyway
		PUSH_VALUETYPE(pMem, pFieldDef->memSize, pFieldDef->memSize);
	}
//JIT_LOADFIELD_end:
	GO_NEXT();

JIT_LOADFIELD_4_start:
	OPCODE_USE(JIT_LOADFIELD_4);
	{
		U32 ofs = GET_OP();
		POP_O(heapPtr);
		PUSH_U32(*(U32*)(heapPtr + ofs));
	}
//JIT_LOADFIELD_4_end:
	GO_NEXT();

JIT_LOADFIELD_8_start:
	OPCODE_USE(JIT_LOADFIELD_8);
	{
		U32 ofs = GET_OP();
		POP_O(heapPtr);
		PUSH_U64(*(U64*)(heapPtr + ofs));
	}
//JIT_LOADFIELD_8_end:
	GO_NEXT();

JIT_LOADFIELD_VALUETYPE_start:
	OPCODE_USE(JIT_LOADFIELD_VALUETYPE);
	{
		U32 u32Value = GET_OP(); // Get the size of the value-type on the eval stack
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();

		// [Steve edit] The following line used to be:
		//     pCurrentMethodState->stackOfs -= u32Value;
		// ... but this seems to result in calculating the wrong pMem value and getting garbage results.
		// My guess is that at some point they refactored from using 'pEvalStack' to 'pCurEvalStack', but
		// didn't update this method (because nothing in corlib reads fields from structs).
		// I think the following line moves the stack pointer along correctly instead:
		POP(u32Value);

		//pMem = pEvalStack + pCurrentMethodState->stackOfs + pFieldDef->memOffset;
		PTR pMem = pCurEvalStack + pFieldDef->memOffset;
		// It may not be a value-type, but this'll work anyway
		PUSH_VALUETYPE(pMem, pFieldDef->memSize, pFieldDef->memSize);
	}
//JIT_LOADFIELD_VALUETYPE_end:
	GO_NEXT();

JIT_LOAD_FIELD_ADDR_start:
	OPCODE_USE(JIT_LOAD_FIELD_ADDR);
	{
		U32 ofs = GET_OP();
		POP_O(heapPtr);
		PTR pMem = heapPtr + ofs;
		PUSH_PTR(pMem);
	}
//JIT_LOAD_FIELD_ADDR_end:
	GO_NEXT();

JIT_STORESTATICFIELD_INT32_start:
JIT_STORESTATICFIELD_F32_start:
JIT_STORESTATICFIELD_O_start: // only for 32-bit
JIT_STORESTATICFIELD_INTNATIVE_start: // only for 32-bit
JIT_STORESTATICFIELD_PTR_start: // only for 32-bit
	OPCODE_USE(JIT_STORESTATICFIELD_INT32);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		POP_U32(value);
		PTR pMem = pFieldDef->pMemory;
		*(U32*)pMem = value;
	}
//JIT_STORESTATICFIELD_INT32_end:
//JIT_STORESTATICFIELD_F32_end:
//JIT_STORESTATICFIELD_O_end:
//JIT_STORESTATICFIELD_INTNATIVE_end:
//JIT_STORESTATICFIELD_PTR_end:
	GO_NEXT();

JIT_STORESTATICFIELD_F64_start:
JIT_STORESTATICFIELD_INT64_start:
	OPCODE_USE(JIT_STORESTATICFIELD_INT64);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		POP_U64(value);
		PTR pMem = pFieldDef->pMemory;
		*(U64*)pMem = value;
	}
//JIT_STORESTATICFIELD_F64_end:
//JIT_STORESTATICFIELD_INT64_end:
	GO_NEXT();

JIT_STORESTATICFIELD_VALUETYPE_start:
	OPCODE_USE(JIT_STORESTATICFIELD_VALUETYPE);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		PTR pMem = pFieldDef->pMemory;
		POP_VALUETYPE(pMem, pFieldDef->memSize, pFieldDef->memSize);
	}
//JIT_STORESTATICFIELD_VALUETYPE_end:
	GO_NEXT();

JIT_LOADSTATICFIELDADDRESS_CHECKTYPEINIT_start:
	SET_OP(JIT_LOADSTATICFIELDADDRESS_CHECKTYPEINIT, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_VALUETYPE_start:
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_VALUETYPE, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT64_start:
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT64, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_F64_start:
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_F64, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT32_start:
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT32, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_F32_start:
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_F32, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_O_start: // Only for 32-bit
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_O, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_INTNATIVE_start: // Only for 32-bit
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_INTNATIVE, loadStaticFieldStart);
JIT_LOADSTATICFIELD_CHECKTYPEINIT_PTR_start: // Only for 32-bit
	SET_OP(JIT_LOADSTATICFIELD_CHECKTYPEINIT_PTR, loadStaticFieldStart);
loadStaticFieldStart:
	OPCODE_USE(curr_op);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		tMD_TypeDef *pParentType = pFieldDef->pParentType;
		// Check that any type (static) constructor has been called
		if (pParentType->isTypeInitialised == 0) {
			// Set the state to initialised
			pParentType->isTypeInitialised = 1;
			// Initialise the type (if there is a static constructor)
			if (pParentType->pStaticConstructor != NULL) {
				tMethodState *pCallMethodState;

				// Call static constructor
				// Need to re-run this instruction when we return from static constructor call
				//pCurrentMethodState->ipOffset -= 2;
				pCurOp -= 2;
				pCallMethodState = MethodState_Direct(pThread, pParentType->pStaticConstructor, pCurrentMethodState, 0, 0);
				// There can be no parameters, so don't need to set them up
				CHANGE_METHOD_STATE(pCallMethodState);
				GO_NEXT_CHECK();
			}
		}
		switch (curr_op) {
			case JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT64:
			case JIT_LOADSTATICFIELD_CHECKTYPEINIT_F64: {
				U64 value = *(U64*)(pFieldDef->pMemory);
				PUSH_U64(value);
				break;
			}
			case JIT_LOADSTATICFIELD_CHECKTYPEINIT_VALUETYPE: {
				PUSH_VALUETYPE(pFieldDef->pMemory, pFieldDef->memSize, pFieldDef->memSize);
				break;
			}
			case JIT_LOADSTATICFIELDADDRESS_CHECKTYPEINIT: {
				U32 value = (U32)(pFieldDef->pMemory);
				PUSH_U32(value);
				break;
			}
			default: {
				U32 value = *(U32*)pFieldDef->pMemory;
				PUSH_U32(value);
				break;
			}
		}
	}
//JIT_LOADSTATICFIELDADDRESS_CHECKTYPEINIT_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_VALUETYPE_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT64_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_INT32_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_F32_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_F64_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_O_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_INTNATIVE_end:
//JIT_LOADSTATICFIELD_CHECKTYPEINIT_PTR_end:
	GO_NEXT();

JIT_INIT_VALUETYPE_start:
	OPCODE_USE(JIT_INIT_VALUETYPE);
	{
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		POP_PTR(pMem);
		memset(pMem, 0, pTypeDef->instanceMemSize);
	}
//JIT_INIT_VALUETYPE_end:
	GO_NEXT();

JIT_INIT_OBJECT_start:
	OPCODE_USE(JIT_INIT_OBJECT);
	{
		POP_PTR(pMem);
		*(void**)pMem = NULL;
	}
//JIT_INIT_OBJECT_end:
	GO_NEXT();

JIT_BOX_INT32_start:
JIT_BOX_F32_start:
JIT_BOX_INTNATIVE_start:
	OPCODE_USE(JIT_BOX_INT32);
	{
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		HEAP_PTR heapPtr = Heap_AllocType(pTypeDef);
		POP_U32(value);
		*(U32*)heapPtr = value;
		PUSH_O(heapPtr);
	}
//JIT_BOX_INT32_end:
//JIT_BOX_F32_end:
//JIT_BOX_INTNATIVE_end:
	GO_NEXT();

JIT_BOX_INT64_start:
JIT_BOX_F64_start:
	OPCODE_USE(JIT_BOX_INT64);
	{
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		HEAP_PTR heapPtr = Heap_AllocType(pTypeDef);
		POP_U64(value);
		*(U64*)heapPtr = value;
		PUSH_O(heapPtr);
	}
//JIT_BOX_INT64_end:
//JIT_BOX_F64_end:
	GO_NEXT();

JIT_BOX_VALUETYPE_start:
	OPCODE_USE(JIT_BOX_VALUETYPE);
	{
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		HEAP_PTR heapPtr = Heap_AllocType(pTypeDef);
		POP_VALUETYPE(heapPtr, pTypeDef->stackSize, pTypeDef->stackSize);
		PUSH_O(heapPtr);
	}
//JIT_BOX_VALUETYPE_end:
	GO_NEXT();

JIT_BOX_O_start:
	pCurOp++;
	// Fall-through
JIT_UNBOX2OBJECT_start: // TODO: This is not correct - it should check the type, just like CAST_CLASS
	OPCODE_USE(JIT_UNBOX2OBJECT);
	// Nothing to do
//JIT_BOX_O_end:
//JIT_UNBOX2OBJECT_end:
	GO_NEXT();

JIT_BOX_NULLABLE_start:
	OPCODE_USE(JIT_BOX_NULLABLE);
	{
		// Get the underlying type of the nullable type
		tMD_TypeDef *pType = (tMD_TypeDef*)GET_OP();

		// Take the nullable type off the stack. The +4 is because the of the HasValue field (Bool, size = 4 bytes)
		POP(pType->stackSize + 4);
		// If .HasValue
		if (*(U32*)pCurEvalStack) {
			// Box the underlying type
			HEAP_PTR boxed = Heap_Box(pType, pCurEvalStack + 4);
			PUSH_O(boxed);
		} else {
			// Put a NULL pointer on the stack
			PUSH_O(NULL);
		}
	}
//JIT_BOX_NULLABLE_end:
	GO_NEXT();

JIT_UNBOX2VALUETYPE_start:
	OPCODE_USE(JIT_UNBOX2VALUETYPE);
	{
		POP_O(heapPtr);
		tMD_TypeDef *pTypeDef = Heap_GetType(heapPtr);
		PUSH_VALUETYPE(heapPtr, pTypeDef->stackSize, pTypeDef->stackSize);
	}
//JIT_UNBOX2VALUETYPE_end:
	GO_NEXT();

JIT_UNBOX_NULLABLE_start:
	OPCODE_USE(JIT_UNBOX_NULLABLE);
	{
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		POP_O(heapPtr);
		if (heapPtr == NULL) {
			// Push .HasValue (= false)
			PUSH_U32(0);
			// And increase the stack pointer by the size of the underlying type
			// (the contents don't matter)
			PUSH(pTypeDef->stackSize);
		} else {
			// Push .HasValue (= true)
			PUSH_U32(1);
			// Push the contents of .Value
			PUSH_VALUETYPE(heapPtr, pTypeDef->stackSize, pTypeDef->stackSize);
		}
	}
//JIT_UNBOX_NULLABLE_end:
	GO_NEXT();

JIT_LOADTOKEN_TYPE_start:
	OPCODE_USE(JIT_LOADTOKEN_TYPE);
	{
		tMD_TypeDef *pTypeDef = (tMD_TypeDef*)GET_OP();
		// Push new valuetype onto evaluation stack
		PUSH_PTR((PTR)pTypeDef);
	}
//JIT_LOADTOKEN_TYPE_end:
	GO_NEXT();

JIT_LOADTOKEN_FIELD_start:
	OPCODE_USE(JIT_LOADTOKEN_FIELD);
	{
		tMD_FieldDef *pFieldDef = (tMD_FieldDef*)GET_OP();
		// Push new valuetype onto evaluation stack - only works on static fields.
		PUSH_PTR(pFieldDef->pMemory);
	}
//JIT_LOADTOKEN_FIELD_end:
	GO_NEXT();

JIT_RETHROW_start:
	SET_OP(JIT_RETHROW, throwStart);
JIT_THROW_start:
	SET_OP(JIT_THROW, throwStart);
throwStart:
	OPCODE_USE(curr_op);
	{
		// Get the exception object
		if (curr_op == JIT_THROW) {
			POP_O(heapPtr);
			pThread->pCurrentExceptionObject = heapPtr;
		}
		SAVE_METHOD_STATE();
		tMD_TypeDef *pExType = Heap_GetType(pThread->pCurrentExceptionObject);

		// Find any catch exception clauses; look in the complete call stack
		tExceptionHeader *pCatch = NULL;
		tMethodState *pCatchMethodState = pCurrentMethodState;
		U32 ipOffset;
		while (pCatchMethodState != NULL) {
			ipOffset = pCatchMethodState->ipOffset - 1;
			pCatch = JIT_FindExceptionHeader(pCatchMethodState, ipOffset, pExType);
			if (pCatch != NULL) {
				// Found a suitable exception handler
				break;
			}
			pCatchMethodState = pCatchMethodState->pCaller;
		}
		if (pCatchMethodState == NULL) {
			Crash("Unhandled exception in %s.%s(): %s.%s",
				pCurrentMethodState->pMethod->pParentType->name,
				pCurrentMethodState->pMethod->name, pExType->nameSpace, pExType->name);
		}

		// Unwind the stack down to the exception handler's stack frame (MethodState)
		// Run all finally clauses during unwinding
		pThread->pCatchMethodState = pCatchMethodState;
		pThread->pCatchExceptionHandler = pCatch;
		// Have to use the pThread->pCatchMethodState, as we could be getting here from END_FINALLY
		while (pCurrentMethodState != pThread->pCatchMethodState) {
			tMethodState *pPrevState;
			tExceptionHeader *pFinally;

finallyUnwindStack:
			ipOffset = pCurrentMethodState->ipOffset - 1;
			pFinally = JIT_FindExceptionHeader(pCurrentMethodState, ipOffset, NULL);
			if (pFinally != NULL) {
				POP_ALL();
				CHANGE_METHOD_STATE(pCurrentMethodState);
				pCurrentMethodState->ipOffset = pFinally->handlerStart;
				// Keep track of which finally clause should be executed next
				pThread->nextFinallyUnwindStack = 1;
				goto throwEnd;
			}

			// for (U32 i = pThread->nextFinallyUnwindStack; i<pCurrentMethodState->pMethod->pJITted->numExceptionHandlers; i++) {
			// 	tExceptionHeader *pEx = &pCurrentMethodState->pMethod->pJITted->pExceptionHeaders[i];
			// 	if (pEx->flags == COR_ILEXCEPTION_CLAUSE_FINALLY &&
			// 		pCurrentMethodState->ipOffset - 1 >= pEx->tryStart &&
			// 		pCurrentMethodState->ipOffset - 1 < pEx->tryEnd) {

			// 		// Found a finally handler
			// 		POP_ALL();
			// 		CHANGE_METHOD_STATE(pCurrentMethodState);
			// 		pCurrentMethodState->ipOffset = pEx->handlerStart;
			// 		// Keep track of which finally clause should be executed next
			// 		pThread->nextFinallyUnwindStack = i + 1;
			// 		goto throwEnd;
			// 	}
			// }

			pPrevState = pCurrentMethodState->pCaller;
			MethodState_Delete(pThread, &pCurrentMethodState);
			pCurrentMethodState = pPrevState;
			// Reset the stack unwind tracker
			pThread->nextFinallyUnwindStack = 0;
		}
		// Set the IP to the catch handler
		pCurrentMethodState->ipOffset = pThread->pCatchExceptionHandler->handlerStart;
		// Set the current method state
		pThread->pCurrentMethodState = pCurrentMethodState;
		LOAD_METHOD_STATE();
		// Push onto this stack-frame's evaluation stack the object thrown
		POP_ALL();
		PUSH_O(pThread->pCurrentExceptionObject);
	}
throwEnd:
//JIT_THROW_end:
//JIT_RETHROW_end:
	GO_NEXT_CHECK();

JIT_LEAVE_start:
	OPCODE_USE(JIT_LEAVE);
	{
		// Find the innermost try-finally clause header
		U32 ipOffset = (U32)(pCurOp - pOps) - 1;
		tExceptionHeader *pFinally = JIT_FindExceptionHeader(pCurrentMethodState, ipOffset, NULL);

		POP_ALL();
		U32 ofs = GET_OP();
		if (pFinally != NULL) {
			// Jump to 'finally' section
			pCurOp = pOps + pFinally->handlerStart;
			pCurrentMethodState->pOpEndFinally += 1;
			*pCurrentMethodState->pOpEndFinally = ofs; // push leave offset on stack
		} else {
			// just branch
			pCurOp = pOps + ofs;
		}
	}
//JIT_LEAVE_end:
	GO_NEXT_CHECK();

JIT_END_FINALLY_start:
	OPCODE_USE(JIT_END_FINALLY);
	if (pThread->nextFinallyUnwindStack > 0) {
		// unwinding stack, so jump back to unwind code
		goto finallyUnwindStack;
	} else {
		// Just empty the evaluation stack and continue on to the next opcode
		// (finally blocks are always after catch blocks, so execution can just continue)
		POP_ALL();
		// And jump to the correct instruction, as specified in the leave instruction
		U32 ofs = *pCurrentMethodState->pOpEndFinally; // pop leave offset from stack
		if (ofs > 0) {
			pCurrentMethodState->pOpEndFinally -= 1;
			pCurOp = pOps + ofs;
		}
	}
//JIT_END_FINALLY_end:
	GO_NEXT_CHECK();

done:
	SAVE_METHOD_STATE();

	return THREAD_STATUS_RUNNING;
}

void JIT_Execute_Init() {
	// Initialise the JIT code addresses
	JIT_Execute(NULL, 0);
}

// Find the innermost enclosing try-catch or try-finally header by IP offset in try block
tExceptionHeader * JIT_FindExceptionHeader(tMethodState *pMethodState, U32 ipOffset, tMD_TypeDef *pExType) {
	tExceptionHeader *pFound = NULL;
	U32 flags = (pExType == NULL) ? COR_ILEXCEPTION_CLAUSE_FINALLY : COR_ILEXCEPTION_CLAUSE_EXCEPTION;
	for (U32 i = 0; i < pMethodState->pJIT->numExceptionHandlers; i++) {
		tExceptionHeader *pExHeader = &pMethodState->pJIT->pExceptionHeaders[i];
		if (pExHeader->flags == flags &&
			ipOffset >= pExHeader->tryStart &&
			ipOffset  < pExHeader->tryEnd &&
			(pExType == NULL || Type_IsDerivedFromOrSame(pExHeader->u.pCatchTypeDef, pExType)) &&
			(pFound == NULL || (
				pFound->tryStart < pExHeader->tryStart &&
				pFound->tryEnd > pExHeader->tryEnd))
		) {
			pFound = pExHeader;
		}
	}
	return pFound;
}

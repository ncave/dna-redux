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

#include "Thread.h"
#include "MethodState.h"
#include "JIT.h"

#ifdef GEN_COMBINED_OPCODES

// Pointer to the least called method
static tMD_MethodDef *pLeastCalledMethod = NULL;
// Amount of memory currently used by combined JITted methods
static U32 combinedJITSize = 0;

static void AddCall(tMD_MethodDef *pMethod) {
	pMethod->genCallCount++;
	// See if this method needs moving in the 'call quantity' linked-list,
	// or if this method needs adding to the list for the first time
	if (pMethod->genCallCount == 1) {
		// Add for the first time
		pMethod->pNextHighestCalls = pLeastCalledMethod;
		pMethod->pPrevHighestCalls = NULL;
		if (pLeastCalledMethod != NULL) {
			pLeastCalledMethod->pPrevHighestCalls = pMethod;
		}
		pLeastCalledMethod = pMethod;
	} else {
		// See if this method needs moving up the linked-list
		tMD_MethodDef *pCheckMethod = pMethod;
		U64 numCalls = pMethod->genCallCount;
		while (pCheckMethod->pNextHighestCalls != NULL && numCalls > pCheckMethod->pNextHighestCalls->genCallCount) {
			pCheckMethod = pCheckMethod->pNextHighestCalls;
		}
		if (numCalls > pCheckMethod->genCallCount) {
			// Swap the two methods in the linked-list
			tMD_MethodDef *pT1, *pT2;
			U32 adjacent = pCheckMethod->pPrevHighestCalls == pMethod;

			if (pCheckMethod->pNextHighestCalls != NULL) {
				pCheckMethod->pNextHighestCalls->pPrevHighestCalls = pMethod;
			}
			pT1 = pMethod->pNextHighestCalls;
			pMethod->pNextHighestCalls = pCheckMethod->pNextHighestCalls;

			if (pMethod->pPrevHighestCalls != NULL) {
				pMethod->pPrevHighestCalls->pNextHighestCalls = pCheckMethod;
			} else {
				pLeastCalledMethod = pCheckMethod;
			}
			pT2 = pCheckMethod->pPrevHighestCalls;
			pCheckMethod->pPrevHighestCalls = pMethod->pPrevHighestCalls;

			if (!adjacent) {
				pT2->pNextHighestCalls = pMethod;
				pMethod->pPrevHighestCalls = pT2;
				pT1->pPrevHighestCalls = pCheckMethod;
				pCheckMethod->pNextHighestCalls = pT1;
			} else {
				pMethod->pPrevHighestCalls = pCheckMethod;
				pCheckMethod->pNextHighestCalls = pMethod;
			}
		}
	}	
}

static void DeleteCombinedJIT(tMD_MethodDef *pMethod) {
	tCombinedOpcodesMem *pCOM;
	tJITted *pJIT = pMethod->pJITtedCombined;
	free(pJIT->pExceptionHeaders);
	free(pJIT->pOps);
	pCOM = pJIT->pCombinedOpcodesMem;
	while (pCOM != NULL) {
		tCombinedOpcodesMem *pT = pCOM;
		free(pCOM->pMem);
		pCOM = pCOM->pNext;
		free(pT);
	}
}

static void RemoveCombinedJIT(tMD_MethodDef *pMethod) {
	if (pMethod->callStackCount == 0) {
		DeleteCombinedJIT(pMethod);
	} else {
		// Mark this JIT for removal. Don't quite know how to do this!
		log_f(0, "!!! CANNOT REMOVE COMBINED JIT !!!\n");
	}
	combinedJITSize -= pMethod->pJITtedCombined->opsMemSize;
	pMethod->pJITtedCombined = NULL;
	log_f(1, "Removing Combined JIT: %s\n", Sys_GetMethodDesc(pMethod));
}

static void AddCombinedJIT(tMD_MethodDef *pMethod) {
	JIT_Prepare(pMethod, 1);
	combinedJITSize += pMethod->pJITtedCombined->opsMemSize;
	log_f(1, "Creating Combined JIT: %s\n", Sys_GetMethodDesc(pMethod));
}

#endif

tMethodState* MethodState_Direct(tThread *pThread, tMD_MethodDef *pMethod, tMethodState *pCaller, U32 isInternalNewObjCall, U32 isTailCall) {
	tMethodState *pThis;
	if (!pMethod->isFilled) {
		tMD_TypeDef *pTypeDef = MetaData_GetTypeDefFromMethodDef(pMethod);
		MetaData_Fill_TypeDef(pTypeDef, NULL, NULL);
	}
	// If method has not already been JITted, do it
	if (pMethod->pJITted == NULL) {
		JIT_Prepare(pMethod, 0);
	}
	// the new stack frame size
	U32 stackFrameSize = pMethod->pJITted->maxStack + pMethod->parameterStackSize + pMethod->pJITted->localsStackSize;

#ifdef _DEBUG
	//dprintfn("%s => %s, stack: %u %s", (pCaller == NULL ? "" : pCaller->pMethod->name), pMethod->name,
	//	pThread->pThreadStack->ofs + sizeof(tMethodState) + stackFrameSize, isTailCall ? "(tail)" : "");
#else
	// check if caller stack frame reuse is possible
	if (isTailCall && pMethod != pCaller->pMethod) {
		isTailCall = isTailCall
			&& (pCaller->pMethod->pReturnType == pMethod->pReturnType) // same return type
			&& (pCaller->pMethod->pJITted->numExceptionHandlers == 0)  // no exception handlers
			&& (pCaller->pNextDelegate == NULL)                        // no delegates
			// add more tail call checks if needed here
			;
	}
	if (isTailCall) {
		// reuse the caller stack frame, and keep the original caller
		pThis = pCaller;
		// resize the caller stack frame size to match the new stack frame size
		Thread_StackReAlloc(pThread, (PTR)pThis, sizeof(tMethodState) + stackFrameSize);
	} else
#endif
	{
		// make new stack frame
		pThis = (tMethodState*)Thread_StackAlloc(pThread, sizeof(tMethodState) + stackFrameSize);
		pThis->pCaller = pCaller;

#ifdef DIAG_CALL_HISTORY
		pThread->nestedLevel += 1;
		//for (I32 i = pThread->nestedLevel / 10; i > 0; i--) { printbuf("*"); } // (optional) print call nested level, each '*' is 10 levels
		//for (I32 i = pThread->nestedLevel % 10; i > 0; i--) { printbuf("|"); } // (optional) print call nested level, each '|' is 1 level
		printbuf("%d %s.%s\n", pThread->nestedLevel, pMethod->pParentType->name, pMethod->name);
#endif
	}

	pThis->pMethod = pMethod;
	pThis->pJIT = pMethod->pJITted;
	pThis->ipOffset = 0;
	pThis->stackOfs = 0;
	pThis->isInternalNewObjCall = isInternalNewObjCall;
	pThis->finalizerThis = NULL;
	pThis->pNextDelegate = NULL;
	pThis->pDelegateParams = NULL;
	pThis->pOpEndFinally = NULL;
	pThis->pReflectionInvokeReturnType = NULL;

	// storage for protected block 'leave' jump offsets
	U32 numClauses = pThis->pJIT->numExceptionHandlers;
	if (numClauses > 0) {
		// stack allocated, will be freed with the whole frame
		pThis->pOpEndFinally = (U32*)Thread_StackAlloc(pThread, sizeof(U32) * (numClauses + 1));
		*(pThis->pOpEndFinally) = 0; // value zero means stack bottom
	}

#ifdef GEN_COMBINED_OPCODES
	AddCall(pMethod);

	/*if (combinedJITSize < GEN_COMBINED_OPCODES_MAX_MEMORY) {
		if (pMethod->genCallCount > GEN_COMBINED_OPCODES_CALL_TRIGGER) {
			if (pMethod->pJITtedCombined == NULL) {
				JIT_Prepare(pMethod, 1);
				combinedJITSize += pMethod->pJITtedCombined->opsMemSize;
			}
		}
	}*/
	if (pMethod->pJITtedCombined == NULL && pMethod->genCallCount >= GEN_COMBINED_OPCODES_CALL_TRIGGER &&
		(pMethod->pNextHighestCalls == NULL || pMethod->pPrevHighestCalls == NULL ||
		pMethod->pPrevHighestCalls->pJITtedCombined != NULL ||
		(combinedJITSize < GEN_COMBINED_OPCODES_MAX_MEMORY && pMethod->pNextHighestCalls->pJITtedCombined != NULL))) {
		// Do a combined JIT, if there's enough room after removing combined JIT from previous
		if (combinedJITSize > GEN_COMBINED_OPCODES_MAX_MEMORY) {
			// Remove the least-called function's combined JIT
			tMD_MethodDef *pToRemove = pMethod;
			while (pToRemove->pPrevHighestCalls != NULL && pToRemove->pPrevHighestCalls->pJITtedCombined != NULL) {
				pToRemove = pToRemove->pPrevHighestCalls;
			}
			if (pToRemove != pMethod) {
				RemoveCombinedJIT(pToRemove);
			}
		}
		if (combinedJITSize < GEN_COMBINED_OPCODES_MAX_MEMORY) {
			// If there's enough room, then create new combined JIT
			AddCombinedJIT(pMethod);
		}
	}

	// See if there is a combined opcode JIT ready to use
	if (pMethod->pJITtedCombined != NULL) {
		pThis->pJIT = pMethod->pJITtedCombined;
		pMethod->callStackCount++;
	}
#endif

#ifdef DIAG_METHOD_CALLS
	// Keep track of the number of times this method is called
	pMethod->callCount++;
	pMethod->startTime = microTime();
#endif

	return pThis;
}

tMethodState* MethodState(tThread *pThread, tMetaData *pMetaData, IDX_TABLE methodToken, tMethodState *pCaller) {
	tMD_MethodDef *pMethod;

	pMethod = MetaData_GetMethodDefFromDefRefOrSpec(pMetaData, methodToken, NULL, NULL);
	return MethodState_Direct(pThread, pMethod, pCaller, 0, 0);
}

void MethodState_Delete(tThread *pThread, tMethodState **ppMethodState) {
	tMethodState *pThis = *ppMethodState;

#ifdef DIAG_CALL_HISTORY
	pThread->nestedLevel -= 1;
#endif

#ifdef GEN_COMBINED_OPCODES
	if (pThis->pJIT != pThis->pMethod->pJITted) {
		// Only decrease call-stack count if it's been using the combined JIT
		pThis->pMethod->callStackCount--;
	}
	if (pThis->pCaller != NULL) {
		// Add a call to the method being returned to.
		// This is neccesary to give a more correct 'usage heuristic' to long-running
		// methods that call lots of other methods.
		AddCall(pThis->pCaller->pMethod);
	}
#endif

#ifdef DIAG_METHOD_CALLS
	U64 elapsed = microTime() - pThis->pMethod->startTime;
	pThis->pMethod->totalTime += elapsed;
	if (pThis->pMethod->maxTime < elapsed) { pThis->pMethod->maxTime = elapsed; }
#endif

	// If this MethodState is a Finalizer, then let the heap know this Finalizer has been run
	if (pThis->finalizerThis != NULL) {
		Heap_UnmarkFinalizer(pThis->finalizerThis);
	}

	if (pThis->pDelegateParams != NULL) {
		free(pThis->pDelegateParams);
	}

	// Note that the way the stack free function works means that only the first allocated chunk
	// needs to be free'd, as this function just sets the current allocation offset to the address given.
	Thread_StackFree(pThread, (PTR)pThis);

	*ppMethodState = NULL;
}

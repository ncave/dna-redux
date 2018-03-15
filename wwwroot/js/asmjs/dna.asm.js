Module["asm"] =  (/** @suppress {uselessCode} */ function(global, env, buffer) {
'almost asm';


  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_iiiii=env.nullFunc_iiiii;
  var invoke_ii=env.invoke_ii;
  var jsCall_ii=env.jsCall_ii;
  var invoke_iii=env.invoke_iii;
  var jsCall_iii=env.jsCall_iii;
  var invoke_iiii=env.invoke_iiii;
  var jsCall_iiii=env.jsCall_iiii;
  var invoke_iiiii=env.invoke_iiiii;
  var jsCall_iiiii=env.jsCall_iiiii;
  var ___lock=env.___lock;
  var ___setErrNo=env.___setErrNo;
  var ___syscall102=env.___syscall102;
  var ___syscall140=env.___syscall140;
  var ___syscall142=env.___syscall142;
  var ___syscall146=env.___syscall146;
  var ___syscall183=env.___syscall183;
  var ___syscall195=env.___syscall195;
  var ___syscall220=env.___syscall220;
  var ___syscall221=env.___syscall221;
  var ___syscall3=env.___syscall3;
  var ___syscall5=env.___syscall5;
  var ___syscall54=env.___syscall54;
  var ___syscall6=env.___syscall6;
  var ___unlock=env.___unlock;
  var __exit=env.__exit;
  var __inet_ntop4_raw=env.__inet_ntop4_raw;
  var __inet_ntop6_raw=env.__inet_ntop6_raw;
  var __inet_pton4_raw=env.__inet_pton4_raw;
  var __inet_pton6_raw=env.__inet_pton6_raw;
  var __read_sockaddr=env.__read_sockaddr;
  var __write_sockaddr=env.__write_sockaddr;
  var _abort=env._abort;
  var _emscripten_get_now=env._emscripten_get_now;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
  var _exit=env._exit;
  var _gethostbyname=env._gethostbyname;
  var _gettimeofday=env._gettimeofday;
  var _invokeJsFunc=env._invokeJsFunc;
  var _llvm_ceil_f64=env._llvm_ceil_f64;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var _llvm_floor_f64=env._llvm_floor_f64;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var _llvm_stackrestore=env._llvm_stackrestore;
  var _llvm_stacksave=env._llvm_stacksave;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function _JIT_Execute(i28, i1) {
 i28 = i28 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i29 = 0, i30 = 0, f31 = f0, d32 = 0.0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i26 = i30 + 32 | 0;
 i25 = i30 + 16 | 0;
 i24 = i30 + 8 | 0;
 i29 = i30 + 48 | 0;
 i22 = i30;
 L1 : do if (!i28) i27 = 0; else {
  i23 = i28 + 20 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  HEAP32[i29 >> 2] = i2;
  i13 = i2 + 44 | 0;
  i15 = (HEAP32[i2 >> 2] | 0) + 28 | 0;
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  i16 = HEAP32[i5 >> 2] | 0;
  i18 = i28 + 28 | 0;
  i19 = i28 + 36 | 0;
  i20 = i28 + 40 | 0;
  i21 = i28 + 32 | 0;
  i3 = i1;
  i9 = i16;
  i5 = HEAP32[i5 + 4 >> 2] | 0;
  i1 = i16 + (HEAP32[i2 + 8 >> 2] << 2) | 0;
  i2 = i13 + (HEAP32[i2 + 12 >> 2] | 0) | 0;
  i15 = i13 + (HEAP32[(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
  i13 = 0;
  i16 = 0;
  L3 : while (1) {
   if (i5 | 0) {
    i4 = HEAP32[i5 + (i1 - i9 >> 2 << 2) >> 2] | 0;
    if ((i4 | 0) > -1) _CheckIfSequencePointIsBreakpoint(HEAP32[i29 >> 2] | 0, i4) | 0;
   }
   i14 = i1 + 4 | 0;
   i6 = i13;
   i13 = HEAP32[i1 >> 2] | 0;
   L9 : do switch (i13 | 0) {
   case 355:
   case 348:
   case 340:
   case 335:
   case 18:
   case 358:
   case 0:
    {
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 1:
    {
     i17 = 123;
     break;
    }
   case 47:
   case 2:
    {
     HEAP32[i2 >> 2] = HEAP32[i14 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 21;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 3:
    {
     i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i2;
      i12 = i5;
      i14 = i9;
      i13 = 3;
      i16 = i8;
      i15 = i10;
      i2 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 4:
    {
     i13 = (HEAP32[HEAP32[i29 >> 2] >> 2] | 0) + 4 | 0;
     HEAP32[i2 >> 2] = _SystemString_FromUserStrings(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, HEAP32[i14 >> 2] | 0) | 0;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 679;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 4;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 23:
   case 11:
   case 10:
   case 7:
   case 5:
    {
     if ((i13 | 0) == 11) {
      i11 = HEAP32[i14 >> 2] | 0;
      i4 = i1 + 8 | 0;
     } else {
      i11 = i16;
      i4 = i14;
     }
     i1 = i4 + 4 | 0;
     i10 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 358) i4 = (HEAP32[i1 >> 2] | 0) == 1; else i4 = 0;
     i12 = i4 & 1;
     i4 = i10 + 40 | 0;
     i4 = i2 + (0 - (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24)) | 0;
     switch (i13 | 0) {
     case 11:
      {
       i17 = _Heap_Box(i11, HEAP32[i4 >> 2] | 0) | 0;
       HEAP32[i4 >> 2] = i17;
       i4 = i17;
       i17 = 184;
       break;
      }
     case 23:
      {
       i17 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
       HEAP32[i4 >> 2] = i17;
       i4 = i17;
       i17 = 184;
       break;
      }
     default:
      {
       i16 = i10 + 14 | 0;
       if (!((HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8) & 16)) i4 = HEAP32[i4 >> 2] | 0; else i4 = 0;
       switch (i13 | 0) {
       case 11:
       case 5:
        {
         i17 = 184;
         break;
        }
       default:
        i4 = i10;
       }
      }
     }
     do if ((i17 | 0) == 184) {
      i17 = 0;
      if (!i4) {
       i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 84 >> 2] | 0) | 0;
       HEAP32[i18 >> 2] = i4;
       i17 = 926;
       break L9;
      }
      i5 = i10 + 48 | 0;
      i16 = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 8 | 0;
      if (!((HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) & 32)) {
       i16 = i10 + 14 | 0;
       if (!((HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8) & 64)) {
        i4 = i10;
        break;
       }
       i16 = (_Heap_GetType(i4) | 0) + 44 | 0;
       i4 = i10 + 56 | 0;
       i4 = HEAP32[(HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) + ((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) << 2) >> 2] | 0;
       if (!(HEAP8[i4 + 33 >> 0] | 0)) break;
       i8 = i4 + 48 | 0;
       i14 = i10 + 60 | 0;
       i16 = i10 + 64 | 0;
       i4 = _Generics_GetMethodDefFromCoreMethod(i4, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24, HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) | 0;
       break;
      }
      i8 = _Heap_GetType(i4) | 0;
      i4 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
      i6 = i8 + 72 | 0;
      i5 = i8 + 76 | 0;
      i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
      do {
       i16 = i6;
       i6 = i6 + -1 | 0;
       if ((i16 | 0) <= 0) {
        i17 = 193;
        break L3;
       }
       i7 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
      } while ((HEAP32[i7 + (i6 * 12 | 0) >> 2] | 0) != (i4 | 0));
      i4 = HEAP32[i7 + (i6 * 12 | 0) + 4 >> 2] | 0;
      if (!i4) {
       i4 = i10 + 56 | 0;
       i4 = (HEAP32[i7 + (i6 * 12 | 0) + 8 >> 2] | 0) + ((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) << 2) | 0;
      } else {
       i16 = i10 + 56 | 0;
       i14 = i8 + 44 | 0;
       i4 = (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) + (HEAP32[i4 + ((HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) << 2) >> 2] << 2) | 0;
      }
      i4 = HEAP32[i4 >> 2] | 0;
     } while (0);
     i7 = _MethodState_Direct(i28, i4, HEAP32[i29 >> 2] | 0, 0, i12) | 0;
     i8 = i7 + 44 | 0;
     i5 = (HEAP32[i7 >> 2] | 0) + 28 | 0;
     i2 = i2 + (0 - (_CopyParameters(i8 + (HEAP32[(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0, i4, i2, 0) | 0)) | 0;
     i4 = HEAP32[i29 >> 2] | 0;
     i5 = i4 + 44 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i5 >>> 0) {
      i17 = 198;
      break L3;
     }
     if ((HEAP32[i23 >> 2] | 0) != (i7 | 0)) {
      HEAP32[i4 + 12 >> 2] = i2 - i5;
      HEAP32[i4 + 8 >> 2] = i1 - i9 >> 2;
      HEAP32[i23 >> 2] = i7;
     }
     HEAP32[i29 >> 2] = i7;
     i6 = (HEAP32[i7 >> 2] | 0) + 28 | 0;
     i2 = i8 + (HEAP32[i7 + 12 >> 2] | 0) | 0;
     i5 = HEAP32[i7 + 4 >> 2] | 0;
     i4 = HEAP32[i5 >> 2] | 0;
     i1 = i4 + (HEAP32[i7 + 8 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i17 = 964;
      break L3;
     } else {
      i9 = i4;
      i5 = HEAP32[i5 + 4 >> 2] | 0;
      i15 = i8 + (HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
      i16 = i11;
      continue L3;
     }
    }
   case 6:
    {
     i17 = (HEAP32[i14 >> 2] | 0) + 14 | 0;
     if (!((HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8) & 16)) {
      i4 = HEAP32[i15 >> 2] | 0;
      i5 = 4;
     } else {
      i4 = 0;
      i5 = 0;
     }
     i5 = FUNCTION_TABLE_iiii[HEAP32[i1 + 8 >> 2] & 255](i4, i15 + i5 | 0, (HEAP32[i29 >> 2] | 0) + 44 | 0) | 0;
     i1 = (HEAP32[i14 >> 2] | 0) + 44 | 0;
     i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
     if (!i1) {
      i4 = HEAP32[i29 >> 2] | 0;
      if (!(HEAP32[i4 + 16 >> 2] | 0)) {
       i1 = i2;
       i2 = i4;
      } else {
       i1 = i2 + 4 | 0;
       if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < (i4 + 44 | 0) >>> 0) {
        i17 = 119;
        break L3;
       } else i2 = i4;
      }
     } else {
      i1 = i1 + 68 | 0;
      i1 = i2 + (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) | 0;
      i2 = HEAP32[i29 >> 2] | 0;
      if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < (i2 + 44 | 0) >>> 0) {
       i17 = 116;
       break L3;
      }
     }
     if (!i5) {
      i2 = i1;
      i17 = 123;
     } else {
      i17 = 121;
      break L3;
     }
     break;
    }
   case 8:
    {
     i7 = i1 + 8 | 0;
     i4 = HEAP32[i14 >> 2] | 0;
     i1 = i4 + 12 | 0;
     i1 = (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8) & 4096;
     i6 = i1 << 16 >> 16 != 0;
     if (i6) i5 = -1; else {
      i5 = i4 + 48 | 0;
      i5 = _Heap_AllocType(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) | 0;
     }
     i10 = _MethodState_Direct(i28, i4, HEAP32[i29 >> 2] | 0, (i1 & 65535) >>> 12 & 65535, 0) | 0;
     i8 = i10 + 44 | 0;
     i1 = (HEAP32[i10 >> 2] | 0) + 28 | 0;
     i2 = i2 + (0 - (_CopyParameters(i8 + (HEAP32[(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0, i4, i2, i5) | 0)) | 0;
     i1 = HEAP32[i29 >> 2] | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < (i1 + 44 | 0) >>> 0) {
      i17 = 683;
      break L3;
     }
     if (!i6) {
      HEAP32[i2 >> 2] = i5;
      i2 = i2 + 4 | 0;
      i1 = HEAP32[i29 >> 2] | 0;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < (i1 + 44 | 0) >>> 0) {
       i17 = 686;
       break L3;
      }
     }
     if ((HEAP32[i23 >> 2] | 0) != (i10 | 0)) {
      HEAP32[i1 + 12 >> 2] = i2 - (i1 + 44);
      HEAP32[i1 + 8 >> 2] = i7 - i9 >> 2;
      HEAP32[i23 >> 2] = i10;
     }
     HEAP32[i29 >> 2] = i10;
     i7 = (HEAP32[i10 >> 2] | 0) + 28 | 0;
     i7 = i8 + (HEAP32[(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     i2 = i8 + (HEAP32[i10 + 12 >> 2] | 0) | 0;
     i5 = HEAP32[i10 + 4 >> 2] | 0;
     i6 = HEAP32[i5 >> 2] | 0;
     i5 = HEAP32[i5 + 4 >> 2] | 0;
     i1 = HEAP32[i10 + 8 >> 2] | 0;
     i4 = _RunFinalizer(i28) | 0;
     if (!i4) {
      i1 = i6 + (i1 << 2) | 0;
      i4 = i6;
      i6 = i7;
     } else {
      if ((HEAP32[i23 >> 2] | 0) != (i4 | 0)) {
       i15 = HEAP32[i29 >> 2] | 0;
       HEAP32[i15 + 12 >> 2] = i2 - (i15 + 44);
       HEAP32[i15 + 8 >> 2] = i1 << 2 >> 2;
       HEAP32[i23 >> 2] = i4;
      }
      HEAP32[i29 >> 2] = i4;
      i15 = i4 + 44 | 0;
      i6 = (HEAP32[i4 >> 2] | 0) + 28 | 0;
      i5 = HEAP32[i4 + 4 >> 2] | 0;
      i14 = HEAP32[i5 >> 2] | 0;
      i2 = i15 + (HEAP32[i4 + 12 >> 2] | 0) | 0;
      i1 = i14 + (HEAP32[i4 + 8 >> 2] << 2) | 0;
      i4 = i14;
      i5 = HEAP32[i5 + 4 >> 2] | 0;
      i6 = i15 + (HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     }
     i3 = i3 + -1 | 0;
     if (!i3) {
      i17 = 964;
      break L3;
     } else {
      i14 = i16;
      i9 = i4;
      i15 = i6;
      i13 = 8;
      i16 = i14;
      continue L3;
     }
    }
   case 9:
    {
     HEAP32[i2 >> 2] = i15 + (HEAP32[i14 >> 2] | 0);
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 55;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 9;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 12:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 877;
      break L3;
     }
     i8 = (HEAP32[i14 >> 2] | 0) + 36 | 0;
     _memset(HEAP32[i2 >> 2] | 0, 0, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0) | 0;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i13 = 12;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 13:
    {
     i1 = i1 + 8 | 0;
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 732;
      break L3;
     }
     HEAP32[i4 >> 2] = _SystemArray_NewVector(HEAP32[i14 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 734;
      break L3;
     }
     i4 = _RunFinalizer(i28) | 0;
     if (!i4) {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i13 = 13;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
     if ((HEAP32[i23 >> 2] | 0) != (i4 | 0)) {
      i15 = HEAP32[i29 >> 2] | 0;
      HEAP32[i15 + 12 >> 2] = i2 - (i15 + 44);
      HEAP32[i15 + 8 >> 2] = i1 - i9 >> 2;
      HEAP32[i23 >> 2] = i4;
     }
     HEAP32[i29 >> 2] = i4;
     i13 = i4 + 44 | 0;
     i15 = (HEAP32[i4 >> 2] | 0) + 28 | 0;
     i5 = HEAP32[i4 + 4 >> 2] | 0;
     i1 = HEAP32[i5 >> 2] | 0;
     i12 = i16;
     i14 = i3;
     i9 = i1;
     i5 = HEAP32[i5 + 4 >> 2] | 0;
     i1 = i1 + (HEAP32[i4 + 8 >> 2] << 2) | 0;
     i2 = i13 + (HEAP32[i4 + 12 >> 2] | 0) | 0;
     i15 = i13 + (HEAP32[(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     i13 = 13;
     i16 = i12;
     i3 = i14;
     continue L3;
    }
   case 14:
    {
     i7 = i1 + 8 | 0;
     i4 = HEAP32[i14 >> 2] | 0;
     i5 = i4 + 12 | 0;
     i5 = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8) & 4096;
     i1 = i4 + 40 | 0;
     i1 = i2 + (4 - (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24)) | 0;
     i10 = _MethodState_Direct(i28, i4, HEAP32[i29 >> 2] | 0, (i5 & 65535) >>> 12 & 65535, 0) | 0;
     i8 = i10 + 44 | 0;
     i6 = (HEAP32[i10 >> 2] | 0) + 28 | 0;
     i1 = i2 + (0 - (_CopyParameters(i8 + (HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0, i4, i2, i1) | 0)) | 0;
     i6 = HEAP32[i29 >> 2] | 0;
     i2 = i6 + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i2 >>> 0) {
      i17 = 695;
      break L3;
     }
     if (!(i5 << 16 >> 16)) {
      i14 = i4 + 48 | 0;
      i14 = (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) + 68 | 0;
      i1 = i1 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
      if (i1 >>> 0 < i2 >>> 0 | i1 >>> 0 > i15 >>> 0) {
       i17 = 698;
       break L3;
      }
     }
     if ((HEAP32[i23 >> 2] | 0) != (i10 | 0)) {
      HEAP32[i6 + 12 >> 2] = i1 - (i6 + 44);
      HEAP32[i6 + 8 >> 2] = i7 - i9 >> 2;
      HEAP32[i23 >> 2] = i10;
     }
     HEAP32[i29 >> 2] = i10;
     i7 = (HEAP32[i10 >> 2] | 0) + 28 | 0;
     i7 = i8 + (HEAP32[(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     i2 = i8 + (HEAP32[i10 + 12 >> 2] | 0) | 0;
     i5 = HEAP32[i10 + 4 >> 2] | 0;
     i6 = HEAP32[i5 >> 2] | 0;
     i5 = HEAP32[i5 + 4 >> 2] | 0;
     i1 = HEAP32[i10 + 8 >> 2] | 0;
     i4 = _RunFinalizer(i28) | 0;
     if (!i4) {
      i1 = i6 + (i1 << 2) | 0;
      i4 = i6;
      i6 = i7;
     } else {
      if ((HEAP32[i23 >> 2] | 0) != (i4 | 0)) {
       i15 = HEAP32[i29 >> 2] | 0;
       HEAP32[i15 + 12 >> 2] = i2 - (i15 + 44);
       HEAP32[i15 + 8 >> 2] = i1 << 2 >> 2;
       HEAP32[i23 >> 2] = i4;
      }
      HEAP32[i29 >> 2] = i4;
      i15 = i4 + 44 | 0;
      i6 = (HEAP32[i4 >> 2] | 0) + 28 | 0;
      i5 = HEAP32[i4 + 4 >> 2] | 0;
      i14 = HEAP32[i5 >> 2] | 0;
      i2 = i15 + (HEAP32[i4 + 12 >> 2] | 0) | 0;
      i1 = i14 + (HEAP32[i4 + 8 >> 2] << 2) | 0;
      i4 = i14;
      i5 = HEAP32[i5 + 4 >> 2] | 0;
      i6 = i15 + (HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     }
     i3 = i3 + -1 | 0;
     if (!i3) {
      i17 = 964;
      break L3;
     } else {
      i14 = i16;
      i9 = i4;
      i15 = i6;
      i13 = 14;
      i16 = i14;
      continue L3;
     }
    }
   case 34:
   case 15:
    {
     i1 = i1 + 8 | 0;
     i7 = HEAP32[i14 >> 2] | 0;
     i8 = i2 + -4 | 0;
     if (i8 >>> 0 > i15 >>> 0 ? 1 : i8 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 707;
      break L3;
     }
     i10 = HEAP32[i8 >> 2] | 0;
     if (!i10) {
      HEAP32[i8 >> 2] = 0;
      if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 710;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i2;
       i11 = i5;
       i12 = i9;
       i14 = i3;
       i16 = i7;
       i15 = i8;
       i2 = i10;
       i5 = i11;
       i9 = i12;
       i3 = i14;
       continue L3;
      }
     }
     i11 = _Heap_GetType(i10) | 0;
     i4 = i11 + 96 | 0;
     i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
     if (i4 | 0) {
      i6 = i7 + 96 | 0;
      i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
      if (i6 | 0) {
       if (!(HEAP8[i4 + 34 >> 0] | 0)) {
        if (_Type_IsAssignableFrom(i6, i4) | 0) i17 = 716;
       } else if ((i6 | 0) == (i4 | 0)) i17 = 716;
       if ((i17 | 0) == 716) {
        i17 = 0;
        HEAP32[i8 >> 2] = i10;
        if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
         i17 = 717;
         break L3;
        } else {
         i7 = i16;
         i8 = i15;
         i10 = i2;
         i11 = i5;
         i12 = i9;
         i14 = i3;
         i16 = i7;
         i15 = i8;
         i2 = i10;
         i5 = i11;
         i9 = i12;
         i3 = i14;
         continue L3;
        }
       }
       if ((i13 | 0) == 15) {
        HEAP32[i8 >> 2] = 0;
        if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
         i17 = 720;
         break L3;
        } else {
         i7 = i16;
         i8 = i15;
         i10 = i2;
         i11 = i5;
         i12 = i9;
         i14 = i3;
         i13 = 15;
         i16 = i7;
         i15 = i8;
         i2 = i10;
         i5 = i11;
         i9 = i12;
         i3 = i14;
         continue L3;
        }
       } else {
        HEAP32[i18 >> 2] = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 48 >> 2] | 0) | 0;
        i2 = i8;
        i5 = i9;
        i4 = i15;
        i17 = 921;
        break L9;
       }
      }
     }
     do if (!(_Type_IsAssignableFrom(i7, i11) | 0)) {
      i14 = i7 + 88 | 0;
      i4 = HEAP32[8003] | 0;
      if ((HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0) == (HEAP32[i4 + 184 >> 2] | 0)) {
       i14 = i7 + 92 | 0;
       if ((HEAP32[(HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) >> 2] | 0) == (i11 | 0)) break;
      }
      if ((i13 | 0) == 15) {
       HEAP32[i8 >> 2] = 0;
       if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
        i17 = 729;
        break L3;
       } else {
        i7 = i16;
        i8 = i15;
        i10 = i2;
        i11 = i5;
        i12 = i9;
        i14 = i3;
        i13 = 15;
        i16 = i7;
        i15 = i8;
        i2 = i10;
        i5 = i11;
        i9 = i12;
        i3 = i14;
        continue L3;
       }
      } else {
       HEAP32[i18 >> 2] = _Heap_AllocType(HEAP32[i4 + 48 >> 2] | 0) | 0;
       i2 = i8;
       i5 = i9;
       i4 = i15;
       i17 = 921;
       break L9;
      }
     } while (0);
     HEAP32[i8 >> 2] = i10;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 726;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 16:
    {
     HEAP32[i2 >> 2] = 0;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 9;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 16;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 17:
    {
     i1 = i2 + -4 | 0;
     if (i1 >>> 0 > i15 >>> 0 ? 1 : i1 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 903;
      break L3;
     }
     i13 = HEAP32[i1 >> 2] | 0;
     i2 = (_Heap_GetType(i13) | 0) + 68 | 0;
     _memcpy(i1 | 0, i13 | 0, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24 | 0) | 0;
     i2 = i1 + (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 905;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 17;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 19:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 850;
      break L3;
     }
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i14 >> 2] | 0);
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 852;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 19;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 20:
    {
     i14 = HEAP32[i14 >> 2] | 0;
     _memcpy(i2 | 0, i2 + (0 - i14) | 0, i14 | 0) | 0;
     i2 = i2 + i14 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 15;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 20;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 21:
    {
     i2 = i2 + (0 - (HEAP32[i14 >> 2] | 0)) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 17;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 21;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 22:
    {
     i6 = HEAP32[i14 >> 2] | 0;
     i4 = i2 + (0 - (i6 >>> 0 > 4 ? i6 : 4)) | 0;
     i2 = i4 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 108;
      break L3;
     }
     _memcpy(HEAP32[i2 >> 2] | 0, i4 | 0, i6 | 0) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 110;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 22;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 24:
    {
     i4 = i2 + (0 - (HEAP32[i14 >> 2] | 0)) | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 812;
      break L3;
     }
     i7 = i4 + -4 | 0;
     if (i7 >>> 0 < i6 >>> 0 | i7 >>> 0 > i15 >>> 0) {
      i17 = 814;
      break L3;
     }
     i2 = i7 + -4 | 0;
     if (i2 >>> 0 < i6 >>> 0 | i2 >>> 0 > i15 >>> 0) {
      i17 = 816;
      break L3;
     }
     _SystemArray_StoreElement(HEAP32[i2 >> 2] | 0, HEAP32[i7 >> 2] | 0, i4);
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i13 = 24;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 25:
    {
     i10 = HEAP32[i29 >> 2] | 0;
     i2 = HEAP32[i10 + 4 >> 2] | 0;
     i1 = HEAP32[i2 + 16 >> 2] | 0;
     i2 = i2 + 20 | 0;
     i4 = i10 + 8 | 0;
     i7 = 0;
     while (1) {
      if (i7 >>> 0 >= i1 >>> 0) {
       i17 = 955;
       break;
      }
      i8 = HEAP32[i2 >> 2] | 0;
      if ((HEAP32[i8 + (i7 * 24 | 0) >> 2] | 0) == 2) {
       i6 = (HEAP32[i4 >> 2] | 0) + -1 | 0;
       if (i6 >>> 0 >= (HEAP32[i8 + (i7 * 24 | 0) + 4 >> 2] | 0) >>> 0) if (i6 >>> 0 < (HEAP32[i8 + (i7 * 24 | 0) + 8 >> 2] | 0) >>> 0) {
        i17 = 960;
        break;
       }
      }
      i7 = i7 + 1 | 0;
     }
     if ((i17 | 0) == 955) {
      i17 = 0;
      i1 = HEAP32[i14 >> 2] | 0;
     } else if ((i17 | 0) == 960) {
      i17 = 0;
      i1 = HEAP32[i8 + (i7 * 24 | 0) + 12 >> 2] | 0;
      HEAP32[i10 + 32 >> 2] = i9 + (HEAP32[i14 >> 2] << 2);
     }
     i2 = i10 + 44 | 0;
     i1 = i9 + (i1 << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i13 = 25;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 26:
    {
     i2 = HEAP32[i21 >> 2] | 0;
     if (!i2) {
      i1 = HEAP32[i29 >> 2] | 0;
      i2 = i1 + 44 | 0;
      i1 = HEAP32[i1 + 32 >> 2] | 0;
      i3 = i3 + -1 | 0;
      if (!i3) {
       i4 = i9;
       i17 = 964;
       break L3;
      } else {
       i10 = i16;
       i11 = i15;
       i12 = i5;
       i14 = i9;
       i13 = 26;
       i16 = i10;
       i15 = i11;
       i5 = i12;
       i9 = i14;
       continue L3;
      }
     } else {
      i4 = i9;
      i6 = i16;
      i1 = i14;
     }
     break;
    }
   case 28:
   case 27:
    {
     i1 = i14;
     i5 = i9;
     i4 = i15;
     i17 = 921;
     break;
    }
   case 29:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 675;
      break L3;
     }
     i12 = HEAP32[i2 >> 2] | 0;
     i14 = HEAP32[i14 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     i13 = i14 + 64 | 0;
     _memcpy(i2 | 0, i12 | 0, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) | 0;
     i14 = i14 + 68 | 0;
     i2 = i2 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 677;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 29;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 30:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 740;
      break L3;
     }
     HEAP32[i1 >> 2] = HEAP32[HEAP32[i1 >> 2] >> 2];
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 742;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 30;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 31:
    {
     i6 = i1 + 8 | 0;
     i4 = HEAP32[i14 >> 2] | 0;
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 205;
      break L3;
     }
     i1 = HEAP32[i2 >> 2] | 0;
     if (i1 >>> 0 < i4 >>> 0) i1 = i9 + (HEAP32[i6 + (i1 << 2) >> 2] << 2) | 0; else i1 = i6 + (i4 << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i13 = 31;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 32:
    {
     i6 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 792;
      break L3;
     }
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 794;
      break L3;
     }
     HEAP32[i1 >> 2] = _SystemArray_LoadElementAddress(HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
     if (i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 796;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i2 = i6;
      i13 = 32;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 35:
    {
     i4 = i2 + -4 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 786;
      break L3;
     }
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 788;
      break L3;
     }
     i13 = HEAP32[i4 >> 2] | 0;
     i12 = HEAP32[i2 >> 2] | 0;
     i14 = HEAP32[i14 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     _SystemArray_LoadElement(i12, i13, i2);
     i2 = i2 + i14 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 790;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 35;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 36:
    {
     i4 = HEAP32[i1 + 8 >> 2] | 0;
     i2 = i2 + (0 - (HEAP32[i14 >> 2] | 0)) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 846;
      break L3;
     }
     i13 = i4 + 28 | 0;
     i14 = i4 + 32 | 0;
     _memcpy(i2 | 0, i2 + (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0) | 0;
     i2 = i2 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 848;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 12 | 0;
      i13 = 36;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 37:
    {
     i4 = HEAP32[i14 >> 2] | 0;
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 834;
      break L3;
     }
     i13 = i4 + 28 | 0;
     i14 = i4 + 32 | 0;
     _memcpy(i2 | 0, (HEAP32[i2 >> 2] | 0) + (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0) | 0;
     i2 = i2 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 836;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 37;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 38:
    {
     HEAP32[i2 >> 2] = HEAP32[i14 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 673;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 38;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 39:
    {
     i1 = i14;
     i4 = i15;
     i17 = 135;
     break;
    }
   case 356:
    {
     i12 = i1 + 8 | 0;
     if ((i6 | 0) == 358) i4 = (HEAP32[i12 >> 2] | 0) == 1; else i4 = 0;
     i10 = (HEAP32[i14 >> 2] | 0) + 40 | 0;
     i10 = i2 + (0 - (HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24)) | 0;
     i1 = HEAP32[i29 >> 2] | 0;
     if (i10 >>> 0 > i15 >>> 0 | i10 >>> 0 < (i1 + 44 | 0) >>> 0) {
      i17 = 152;
      break L3;
     }
     i8 = HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] | 0;
     i5 = i8 + 44 | 0;
     HEAP32[i1 + 40 >> 2] = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
     i5 = i10 + 4 | 0;
     i2 = HEAP32[i5 >> 2] | 0;
     i5 = HEAP32[i5 + 4 >> 2] | 0;
     i8 = _MethodState_Direct(i28, i8, i1, 0, i4 & 1) | 0;
     i11 = i8 + 44 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) + 28 | 0;
     i1 = i11 + (HEAP32[(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     if (i2) {
      HEAP32[i1 >> 2] = i2;
      i1 = i1 + 4 | 0;
     }
     L183 : do if (i5 | 0) {
      i7 = HEAP32[i5 >> 2] | 0;
      i6 = i5 + 4 | 0;
      i5 = 0;
      while (1) {
       if ((i5 | 0) == (i7 | 0)) break L183;
       i2 = HEAP32[i6 + (i5 << 2) >> 2] | 0;
       i4 = _Heap_GetType(i2) | 0;
       if (!(HEAP8[i4 + 34 >> 0] | 0)) {
        HEAP32[i1 >> 2] = i2;
        i2 = 4;
       } else {
        i15 = i4 + 68 | 0;
        _memcpy(i1 | 0, i2 | 0, HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24 | 0) | 0;
        i2 = HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24;
       }
       i5 = i5 + 1 | 0;
       i1 = i1 + i2 | 0;
      }
     } while (0);
     if ((HEAP32[i23 >> 2] | 0) != (i8 | 0)) {
      i15 = HEAP32[i29 >> 2] | 0;
      HEAP32[i15 + 12 >> 2] = i10 - (i15 + 44);
      HEAP32[i15 + 8 >> 2] = i12 - i9 >> 2;
      HEAP32[i23 >> 2] = i8;
     }
     HEAP32[i29 >> 2] = i8;
     i15 = (HEAP32[i8 >> 2] | 0) + 28 | 0;
     i5 = HEAP32[i8 + 4 >> 2] | 0;
     i1 = HEAP32[i5 >> 2] | 0;
     i12 = i16;
     i14 = i3;
     i9 = i1;
     i5 = HEAP32[i5 + 4 >> 2] | 0;
     i1 = i1 + (HEAP32[i8 + 8 >> 2] << 2) | 0;
     i2 = i11 + (HEAP32[i8 + 12 >> 2] | 0) | 0;
     i15 = i11 + (HEAP32[(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
     i13 = 356;
     i16 = i12;
     i3 = i14;
     continue L3;
    }
   case 357:
    {
     i1 = HEAP32[(HEAP32[i29 >> 2] | 0) + 40 >> 2] | 0;
     if (!i1) {
      HEAP32[i2 >> 2] = 0;
      i2 = i2 + 4 | 0;
      if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 167;
       break L3;
      }
     } else if (_Type_IsValueType(i1) | 0) {
      i6 = _Heap_AllocType(i1) | 0;
      i4 = i1 + 68 | 0;
      i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
      i1 = i2 + (0 - i4) | 0;
      if (i1 >>> 0 > i15 >>> 0 ? 1 : i1 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 170;
       break L3;
      }
      _memcpy(i6 | 0, i1 | 0, i4 | 0) | 0;
      HEAP32[i1 >> 2] = i6;
      i2 = i1 + 4 | 0;
      if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 172;
       break L3;
      }
     }
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i1 = i14;
      i17 = 964;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i1 = i14;
      i13 = 357;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      continue L3;
     }
    }
   case 40:
    {
     i17 = _PInvoke_Call(i1, i15, (HEAP32[i29 >> 2] | 0) + 44 | 0, i28) | 0;
     HEAP32[(HEAP32[i29 >> 2] | 0) + 12 >> 2] = i17;
     i17 = 123;
     break;
    }
   case 175:
   case 41:
    {
     i11 = i14;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i14 = i2;
     HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i14 + 4 >> 2] = i12;
     i2 = i2 + 8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 31;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 12 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 42:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 880;
      break L3;
     }
     HEAP32[HEAP32[i2 >> 2] >> 2] = 0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 42;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 43:
    {
     HEAP32[i2 >> 2] = HEAP32[i2 + -4 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 11;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 43;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 44:
    {
     i11 = i2 + -8 | 0;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i13 = i2;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i13 + 4 >> 2] = i12;
     i2 = i2 + 8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 13;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 44;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 83:
   case 86:
   case 84:
   case 82:
   case 85:
   case 87:
   case 80:
   case 81:
   case 45:
    {
     i8 = i1 + 8 | 0;
     i7 = HEAP32[i14 >> 2] | 0;
     i4 = i7 + 24 | 0;
     i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
     i6 = i4 + 56 | 0;
     if (!(HEAP8[i6 >> 0] | 0)) {
      HEAP8[i6 >> 0] = 1;
      i4 = i4 + 60 | 0;
      i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
      if (i4 | 0) {
       i5 = _MethodState_Direct(i28, i4, HEAP32[i29 >> 2] | 0, 0, 0) | 0;
       if ((HEAP32[i23 >> 2] | 0) != (i5 | 0)) {
        i15 = HEAP32[i29 >> 2] | 0;
        HEAP32[i15 + 12 >> 2] = i2 - (i15 + 44);
        HEAP32[i15 + 8 >> 2] = i1 - i9 >> 2;
        HEAP32[i23 >> 2] = i5;
       }
       HEAP32[i29 >> 2] = i5;
       i7 = i5 + 44 | 0;
       i8 = (HEAP32[i5 >> 2] | 0) + 28 | 0;
       i2 = i7 + (HEAP32[i5 + 12 >> 2] | 0) | 0;
       i6 = HEAP32[i5 + 4 >> 2] | 0;
       i4 = HEAP32[i6 >> 2] | 0;
       i1 = i4 + (HEAP32[i5 + 8 >> 2] << 2) | 0;
       i3 = i3 + -1 | 0;
       if (!i3) {
        i17 = 964;
        break L3;
       } else {
        i14 = i16;
        i9 = i4;
        i5 = HEAP32[i6 + 4 >> 2] | 0;
        i15 = i7 + (HEAP32[(HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
        i16 = i14;
        continue L3;
       }
      }
     }
     switch (i13 | 0) {
     case 83:
     case 80:
      {
       i11 = i7 + 40 | 0;
       i11 = HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24;
       i12 = HEAP32[i11 + 4 >> 2] | 0;
       i14 = i2;
       HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
       HEAP32[i14 + 4 >> 2] = i12;
       i2 = i2 + 8 | 0;
       if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
        i17 = 868;
        break L3;
       } else {
        i7 = i16;
        i10 = i15;
        i11 = i5;
        i12 = i9;
        i14 = i3;
        i1 = i8;
        i16 = i7;
        i15 = i10;
        i5 = i11;
        i9 = i12;
        i3 = i14;
        continue L3;
       }
      }
     case 87:
      {
       i13 = i7 + 40 | 0;
       i14 = i7 + 32 | 0;
       _memcpy(i2 | 0, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0) | 0;
       i2 = i2 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
       if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
        i17 = 870;
        break L3;
       } else {
        i7 = i16;
        i10 = i15;
        i11 = i5;
        i12 = i9;
        i14 = i3;
        i1 = i8;
        i13 = 87;
        i16 = i7;
        i15 = i10;
        i5 = i11;
        i9 = i12;
        i3 = i14;
        continue L3;
       }
      }
     case 45:
      {
       i14 = i7 + 40 | 0;
       HEAP32[i2 >> 2] = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
       i2 = i2 + 4 | 0;
       if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
        i17 = 872;
        break L3;
       } else {
        i7 = i16;
        i10 = i15;
        i11 = i5;
        i12 = i9;
        i14 = i3;
        i1 = i8;
        i13 = 45;
        i16 = i7;
        i15 = i10;
        i5 = i11;
        i9 = i12;
        i3 = i14;
        continue L3;
       }
      }
     default:
      {
       i14 = i7 + 40 | 0;
       HEAP32[i2 >> 2] = HEAP32[(HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) >> 2];
       i2 = i2 + 4 | 0;
       if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
        i17 = 874;
        break L3;
       } else {
        i7 = i16;
        i10 = i15;
        i11 = i5;
        i12 = i9;
        i14 = i3;
        i1 = i8;
        i16 = i7;
        i15 = i10;
        i5 = i11;
        i9 = i12;
        i3 = i14;
        continue L3;
       }
      }
     }
    }
   case 46:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 19;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 46;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 51:
   case 48:
    {
     i11 = i15 + (HEAP32[i14 >> 2] | 0) | 0;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i14 = i2;
     HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i14 + 4 >> 2] = i12;
     i2 = i2 + 8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 35;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 53:
   case 52:
   case 54:
   case 50:
   case 49:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + (HEAP32[i14 >> 2] | 0) >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 33;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 55:
    {
     i13 = (HEAP32[i1 + 8 >> 2] | 0) + 68 | 0;
     _memcpy(i2 | 0, i15 + (HEAP32[i14 >> 2] | 0) | 0, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) | 0;
     i2 = i2 + (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 37;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 12 | 0;
      i13 = 55;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 295:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 39;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 295;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 296:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 4 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 41;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 296;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 297:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 8 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 43;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 297;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 298:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 12 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 45;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 298;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 299:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 16 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 47;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 299;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 300:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 20 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 49;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 300;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 301:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 24 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 51;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 301;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 302:
    {
     HEAP32[i2 >> 2] = HEAP32[i15 + 28 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 53;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 302;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 59:
   case 56:
    {
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 60;
      break L3;
     }
     i11 = i2;
     i10 = HEAP32[i11 + 4 >> 2] | 0;
     i8 = i15 + (HEAP32[i14 >> 2] | 0) | 0;
     HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i8 + 4 >> 2] = i10;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 61:
   case 60:
   case 62:
   case 58:
   case 57:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 57;
      break L3;
     }
     HEAP32[i15 + (HEAP32[i14 >> 2] | 0) >> 2] = HEAP32[i2 >> 2];
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 63:
    {
     i4 = (HEAP32[i1 + 8 >> 2] | 0) + 68 | 0;
     i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
     i2 = i2 + (0 - i4) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 63;
      break L3;
     }
     _memcpy(i15 + (HEAP32[i14 >> 2] | 0) | 0, i2 | 0, i4 | 0) | 0;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 12 | 0;
     i13 = 63;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 303:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 66;
      break L3;
     }
     HEAP32[i15 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 303;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 304:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 69;
      break L3;
     }
     HEAP32[i15 + 4 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 304;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 305:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 72;
      break L3;
     }
     HEAP32[i15 + 8 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 305;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 306:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 75;
      break L3;
     }
     HEAP32[i15 + 12 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 306;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 307:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 78;
      break L3;
     }
     HEAP32[i15 + 16 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 307;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 308:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 81;
      break L3;
     }
     HEAP32[i15 + 20 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 308;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 309:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 84;
      break L3;
     }
     HEAP32[i15 + 24 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 309;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 310:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 87;
      break L3;
     }
     HEAP32[i15 + 28 >> 2] = HEAP32[i2 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 310;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 75:
   case 72:
    {
     i4 = i2 + -8 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 824;
      break L3;
     }
     i2 = i2 + -12 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 826;
      break L3;
     }
     i11 = i4;
     i10 = HEAP32[i11 + 4 >> 2] | 0;
     i8 = (HEAP32[i14 >> 2] | 0) + 28 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) + (HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) | 0;
     HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i8 + 4 >> 2] = i10;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 77:
   case 76:
   case 78:
   case 74:
   case 73:
    {
     i4 = i2 + -4 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 819;
      break L3;
     }
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 821;
      break L3;
     }
     i8 = (HEAP32[i14 >> 2] | 0) + 28 | 0;
     HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) >> 2] = HEAP32[i4 >> 2];
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 79:
    {
     i7 = HEAP32[i14 >> 2] | 0;
     i8 = i7 + 32 | 0;
     i8 = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
     i4 = i2 + (0 - i8) | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 829;
      break L3;
     }
     i2 = i4 + -4 | 0;
     if (i2 >>> 0 < i6 >>> 0 | i2 >>> 0 > i15 >>> 0) {
      i17 = 831;
      break L3;
     }
     i10 = i7 + 28 | 0;
     _memcpy((HEAP32[i2 >> 2] | 0) + (HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24) | 0, i4 | 0, i8 | 0) | 0;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i13 = 79;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 100:
   case 98:
   case 102:
   case 101:
   case 97:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 854;
      break L3;
     }
     i8 = (HEAP32[i14 >> 2] | 0) + 40 | 0;
     HEAP32[(HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) >> 2] = HEAP32[i2 >> 2];
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 99:
   case 96:
    {
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 857;
      break L3;
     }
     i11 = i2;
     i10 = HEAP32[i11 + 4 >> 2] | 0;
     i8 = (HEAP32[i14 >> 2] | 0) + 40 | 0;
     i8 = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
     HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i8 + 4 >> 2] = i10;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 103:
    {
     i4 = HEAP32[i14 >> 2] | 0;
     i6 = i4 + 32 | 0;
     i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
     i2 = i2 + (0 - i6) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 860;
      break L3;
     }
     i8 = i4 + 40 | 0;
     _memcpy(HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0, i2 | 0, i6 | 0) | 0;
     i8 = i16;
     i10 = i15;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i13 = 103;
     i16 = i8;
     i15 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 107:
   case 104:
    {
     i4 = _Heap_AllocType(HEAP32[i14 >> 2] | 0) | 0;
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 887;
      break L3;
     }
     i11 = i6;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i14 = i4;
     HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i14 + 4 >> 2] = i12;
     HEAP32[i6 >> 2] = i4;
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 889;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 110:
   case 106:
   case 105:
    {
     i4 = _Heap_AllocType(HEAP32[i14 >> 2] | 0) | 0;
     i6 = i2 + -4 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 883;
      break L3;
     }
     HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
     HEAP32[i6 >> 2] = i4;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 885;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 109:
    {
     i7 = i16;
     i8 = i15;
     i10 = i2;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i13 = 109;
     i16 = i7;
     i15 = i8;
     i2 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 111:
    {
     i6 = HEAP32[i14 >> 2] | 0;
     i4 = _Heap_AllocType(i6) | 0;
     i6 = i6 + 68 | 0;
     i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
     i2 = i2 + (0 - i6) | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 891;
      break L3;
     }
     _memcpy(i4 | 0, i2 | 0, i6 | 0) | 0;
     HEAP32[i2 >> 2] = i4;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 893;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 111;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 112:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 391;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 112;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 113:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 394;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) > (HEAP32[i4 >> 2] | 0) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 113;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 114:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 397;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) >>> 0 > (HEAP32[i4 >> 2] | 0) >>> 0 & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 114;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 115:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 400;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) < (HEAP32[i4 >> 2] | 0) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 115;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 116:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 403;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) >>> 0 < (HEAP32[i4 >> 2] | 0) >>> 0 & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 116;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 117:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 406;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i8 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = ((HEAP32[i10 >> 2] | 0) == (HEAP32[i8 >> 2] | 0) ? (HEAP32[i10 + 4 >> 2] | 0) == (HEAP32[i8 + 4 >> 2] | 0) : 0) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 117;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 118:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 409;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     i8 = i2 + -8 | 0;
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = ((i12 | 0) > (i11 | 0) | ((i12 | 0) == (i11 | 0) ? (HEAP32[i10 >> 2] | 0) >>> 0 > (HEAP32[i8 >> 2] | 0) >>> 0 : 0)) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 118;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 119:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 412;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     i8 = i2 + -8 | 0;
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = (i12 >>> 0 > i11 >>> 0 | ((i12 | 0) == (i11 | 0) ? (HEAP32[i10 >> 2] | 0) >>> 0 > (HEAP32[i8 >> 2] | 0) >>> 0 : 0)) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 119;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 120:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 415;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     i8 = i2 + -8 | 0;
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = ((i12 | 0) < (i11 | 0) | ((i12 | 0) == (i11 | 0) ? (HEAP32[i10 >> 2] | 0) >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0 : 0)) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 120;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 121:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 418;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     i8 = i2 + -8 | 0;
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = (i12 >>> 0 < i11 >>> 0 | ((i12 | 0) == (i11 | 0) ? (HEAP32[i10 >> 2] | 0) >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0 : 0)) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 121;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 122:
    {
     i6 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 439;
      break L3;
     }
     i12 = HEAP32[i6 >> 2] | 0;
     i2 = i2 + -4 | 0;
     i1 = i12 + (HEAP32[i2 >> 2] | 0) | 0;
     if ((i12 | 0) >= 0 ? (i1 | 0) < (i12 + -2147483648 | 0) : (i1 | 0) > (i12 + 2147483647 | 0)) {
      i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 168 >> 2] | 0) | 0;
      HEAP32[i18 >> 2] = i4;
      i11 = i16;
      i2 = i6;
      i1 = i14;
      i17 = 926;
      break L9;
     } else {
      HEAP32[i6 >> 2] = i1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
       i17 = 442;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i5;
       i11 = i9;
       i12 = i3;
       i1 = i14;
       i13 = 122;
       i16 = i7;
       i15 = i8;
       i5 = i10;
       i9 = i11;
       i3 = i12;
       continue L3;
      }
     }
    }
   case 123:
    {
     i6 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 445;
      break L3;
     }
     i2 = i2 + -4 | 0;
     i1 = _i64Add(HEAP32[i2 >> 2] | 0, 0, HEAP32[i6 >> 2] | 0, 0) | 0;
     i12 = tempRet0;
     if (i12 >>> 0 > 0 | (i12 | 0) == 0 & i1 >>> 0 > 4294967295) {
      i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 168 >> 2] | 0) | 0;
      HEAP32[i18 >> 2] = i4;
      i11 = i16;
      i2 = i6;
      i1 = i14;
      i17 = 926;
      break L9;
     } else {
      HEAP32[i6 >> 2] = i1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
       i17 = 448;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i5;
       i11 = i9;
       i12 = i3;
       i1 = i14;
       i13 = 123;
       i16 = i7;
       i15 = i8;
       i5 = i10;
       i9 = i11;
       i3 = i12;
       continue L3;
      }
     }
    }
   case 124:
    {
     i6 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 451;
      break L3;
     }
     i1 = HEAP32[i6 >> 2] | 0;
     i2 = i2 + -4 | 0;
     i12 = HEAP32[i2 >> 2] | 0;
     i1 = ___muldi3(i12 | 0, ((i12 | 0) < 0) << 31 >> 31 | 0, i1 | 0, ((i1 | 0) < 0) << 31 >> 31 | 0) | 0;
     i12 = _i64Add(i1 | 0, tempRet0 | 0, -2147483648, 0) | 0;
     i11 = tempRet0;
     if (i11 >>> 0 > 0 | (i11 | 0) == 0 & i12 >>> 0 > 4294967295) {
      i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 168 >> 2] | 0) | 0;
      HEAP32[i18 >> 2] = i4;
      i11 = i16;
      i2 = i6;
      i1 = i14;
      i17 = 926;
      break L9;
     } else {
      HEAP32[i6 >> 2] = i1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
       i17 = 454;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i5;
       i11 = i9;
       i12 = i3;
       i1 = i14;
       i13 = 124;
       i16 = i7;
       i15 = i8;
       i5 = i10;
       i9 = i11;
       i3 = i12;
       continue L3;
      }
     }
    }
   case 125:
    {
     i6 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 457;
      break L3;
     }
     i12 = HEAP32[i6 >> 2] | 0;
     i2 = i2 + -4 | 0;
     i11 = HEAP32[i2 >> 2] | 0;
     i1 = Math_imul(i12, i11) | 0;
     i10 = (i11 | 0) == 0;
     if (i10 ? 0 : ((i1 >>> 0) / ((i10 ? 1 : i11) >>> 0) | 0 | 0) != (i12 | 0)) {
      i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 168 >> 2] | 0) | 0;
      HEAP32[i18 >> 2] = i4;
      i11 = i16;
      i2 = i6;
      i1 = i14;
      i17 = 926;
      break L9;
     } else {
      HEAP32[i6 >> 2] = i1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
       i17 = 460;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i5;
       i11 = i9;
       i12 = i3;
       i1 = i14;
       i13 = 125;
       i16 = i7;
       i15 = i8;
       i5 = i10;
       i9 = i11;
       i3 = i12;
       continue L3;
      }
     }
    }
   case 126:
    {
     i6 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 463;
      break L3;
     }
     i12 = HEAP32[i6 >> 2] | 0;
     i2 = i2 + -4 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     i1 = _i64Subtract(i12 | 0, ((i12 | 0) < 0) << 31 >> 31 | 0, i1 | 0, ((i1 | 0) < 0) << 31 >> 31 | 0) | 0;
     i12 = _i64Add(i1 | 0, tempRet0 | 0, -2147483648, 0) | 0;
     i11 = tempRet0;
     if (i11 >>> 0 > 0 | (i11 | 0) == 0 & i12 >>> 0 > 4294967295) {
      i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 168 >> 2] | 0) | 0;
      HEAP32[i18 >> 2] = i4;
      i11 = i16;
      i2 = i6;
      i1 = i14;
      i17 = 926;
      break L9;
     } else {
      HEAP32[i6 >> 2] = i1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
       i17 = 466;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i5;
       i11 = i9;
       i12 = i3;
       i1 = i14;
       i13 = 126;
       i16 = i7;
       i15 = i8;
       i5 = i10;
       i9 = i11;
       i3 = i12;
       continue L3;
      }
     }
    }
   case 127:
    {
     i6 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 469;
      break L3;
     }
     i2 = i2 + -4 | 0;
     i1 = _i64Subtract(HEAP32[i6 >> 2] | 0, 0, HEAP32[i2 >> 2] | 0, 0) | 0;
     i12 = tempRet0;
     if (i12 >>> 0 > 0 | (i12 | 0) == 0 & i1 >>> 0 > 4294967295) {
      i4 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 168 >> 2] | 0) | 0;
      HEAP32[i18 >> 2] = i4;
      i11 = i16;
      i2 = i6;
      i1 = i14;
      i17 = 926;
      break L9;
     } else {
      HEAP32[i6 >> 2] = i1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
       i17 = 472;
       break L3;
      } else {
       i7 = i16;
       i8 = i15;
       i10 = i5;
       i11 = i9;
       i12 = i3;
       i1 = i14;
       i13 = 127;
       i16 = i7;
       i15 = i8;
       i5 = i10;
       i9 = i11;
       i3 = i12;
       continue L3;
      }
     }
    }
   case 128:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 475;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i7 >> 2] | 0);
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 128;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 129:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 487;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - (HEAP32[i4 >> 2] | 0);
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 129;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 130:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 499;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = Math_imul(HEAP32[i4 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 130;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 131:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 511;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) / (HEAP32[i4 >> 2] | 0) | 0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 131;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 132:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 523;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = ((HEAP32[i7 >> 2] | 0) >>> 0) / ((HEAP32[i4 >> 2] | 0) >>> 0) | 0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 132;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 133:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 529;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) % (HEAP32[i4 >> 2] | 0) | 0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 133;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 134:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 535;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = ((HEAP32[i7 >> 2] | 0) >>> 0) % ((HEAP32[i4 >> 2] | 0) >>> 0) | 0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 134;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 135:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 541;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = HEAP32[i4 >> 2] & HEAP32[i7 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 135;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 136:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 547;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = HEAP32[i4 >> 2] | HEAP32[i7 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 136;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 137:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 553;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = HEAP32[i4 >> 2] ^ HEAP32[i7 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 137;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 138:
    {
     i6 = i2 + -4 | 0;
     HEAP32[i6 >> 2] = 0 - (HEAP32[i6 >> 2] | 0);
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 138;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 139:
    {
     i6 = i2 + -4 | 0;
     HEAP32[i6 >> 2] = ~HEAP32[i6 >> 2];
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 139;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 140:
    {
     i6 = i2 + -8 | 0;
     i7 = i6;
     i7 = _i64Subtract(0, 0, HEAP32[i7 >> 2] | 0, HEAP32[i7 + 4 >> 2] | 0) | 0;
     HEAP32[i6 >> 2] = i7;
     HEAP32[i6 + 4 >> 2] = tempRet0;
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 140;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 141:
    {
     i6 = i2 + -8 | 0;
     i8 = i6;
     i7 = ~HEAP32[i8 + 4 >> 2];
     HEAP32[i6 >> 2] = ~HEAP32[i8 >> 2];
     HEAP32[i6 + 4 >> 2] = i7;
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 141;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 142:
    {
     i6 = i2 + -4 | 0;
     HEAPF32[i6 >> 2] = Math_fround(-Math_fround(HEAPF32[i6 >> 2]));
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 142;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 143:
    {
     i6 = i2 + -8 | 0;
     HEAPF64[i6 >> 3] = -+HEAPF64[i6 >> 3];
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 143;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 174:
    {
     i1 = i1 + 8 | 0;
     i6 = HEAP32[i14 >> 2] | 0;
     i4 = i6 + 68 | 0;
     i4 = i2 + (-4 - (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24)) | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 896;
      break L3;
     }
     if (!(HEAP32[i4 >> 2] | 0)) {
      HEAP32[i4 >> 2] = 0;
      i2 = i4 + 4 | 0;
      if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 901;
       break L3;
      } else {
       i8 = i16;
       i10 = i15;
       i11 = i5;
       i12 = i9;
       i14 = i3;
       i13 = 174;
       i16 = i8;
       i15 = i10;
       i5 = i11;
       i9 = i12;
       i3 = i14;
       continue L3;
      }
     } else {
      i2 = i4 + 4 | 0;
      HEAP32[i4 >> 2] = _Heap_Box(i6, i2) | 0;
      if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 899;
       break L3;
      } else {
       i8 = i16;
       i10 = i15;
       i11 = i5;
       i12 = i9;
       i14 = i3;
       i13 = 174;
       i16 = i8;
       i15 = i10;
       i5 = i11;
       i9 = i12;
       i3 = i14;
       continue L3;
      }
     }
    }
   case 218:
    {
     i1 = i1 + 8 | 0;
     i4 = HEAP32[i14 >> 2] | 0;
     i6 = i2 + -4 | 0;
     i8 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i8 >>> 0) {
      i17 = 907;
      break L3;
     }
     i7 = HEAP32[i6 >> 2] | 0;
     if (!i7) {
      HEAP32[i6 >> 2] = 0;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i8 >>> 0) {
       i17 = 910;
       break L3;
      }
      i14 = i4 + 68 | 0;
      i2 = i2 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
      if (i2 >>> 0 < i8 >>> 0 | i2 >>> 0 > i15 >>> 0) {
       i17 = 912;
       break L3;
      } else {
       i8 = i16;
       i10 = i15;
       i11 = i5;
       i12 = i9;
       i14 = i3;
       i13 = 218;
       i16 = i8;
       i15 = i10;
       i5 = i11;
       i9 = i12;
       i3 = i14;
       continue L3;
      }
     } else {
      HEAP32[i6 >> 2] = 1;
      if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i8 >>> 0) {
       i17 = 914;
       break L3;
      }
      i14 = i4 + 68 | 0;
      _memcpy(i2 | 0, i7 | 0, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0) | 0;
      i2 = i2 + (HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) | 0;
      if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
       i17 = 916;
       break L3;
      } else {
       i8 = i16;
       i10 = i15;
       i11 = i5;
       i12 = i9;
       i14 = i3;
       i13 = 218;
       i16 = i8;
       i15 = i10;
       i5 = i11;
       i9 = i12;
       i3 = i14;
       continue L3;
      }
     }
    }
   case 144:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 231;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i2 + -4 >> 2] | 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i13 = 144;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 154:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 236;
      break L3;
     }
     i12 = i6;
     i13 = i2 + -8 | 0;
     if ((HEAP32[i12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0) ? (HEAP32[i12 + 4 >> 2] | 0) == (HEAP32[i13 + 4 >> 2] | 0) : 0) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i13 = 154;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 255:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 241;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i6 >> 2]);
     if (f31 == Math_fround(HEAPF32[i2 + -4 >> 2])) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i13 = 255;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 277:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 246;
      break L3;
     }
     if (+HEAPF64[i6 >> 3] == +HEAPF64[i2 + -8 >> 3]) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i13 = 277;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 145:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 251;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) < (HEAP32[i2 + -4 >> 2] | 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i13 = 145;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 155:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 256;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i10 | 0) < (i11 | 0) | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 155;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 261:
   case 256:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 261;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i6 >> 2]);
     if (!(f31 >= Math_fround(HEAPF32[i2 + -4 >> 2]))) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 283:
   case 278:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 266;
      break L3;
     }
     if (!(+HEAPF64[i6 >> 3] >= +HEAPF64[i2 + -8 >> 3])) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 146:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 271;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) > (HEAP32[i2 + -4 >> 2] | 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 146;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 156:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 276;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i10 | 0) > (i11 | 0) | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 > (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 156;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 262:
   case 257:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 281;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i6 >> 2]);
     if (f31 > Math_fround(HEAPF32[i2 + -4 >> 2])) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 284:
   case 279:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 286;
      break L3;
     }
     if (+HEAPF64[i6 >> 3] > +HEAPF64[i2 + -8 >> 3]) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 147:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 291;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) > (HEAP32[i2 + -4 >> 2] | 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 147;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 157:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 296;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i10 | 0) > (i11 | 0) | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 > (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 157;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 263:
   case 258:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 301;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i6 >> 2]);
     if (!(f31 <= Math_fround(HEAPF32[i2 + -4 >> 2]))) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 285:
   case 280:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 306;
      break L3;
     }
     if (!(+HEAPF64[i6 >> 3] <= +HEAPF64[i2 + -8 >> 3])) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 148:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 311;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) < (HEAP32[i2 + -4 >> 2] | 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 148;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 158:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 316;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i10 | 0) < (i11 | 0) | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 158;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 264:
   case 259:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 321;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i6 >> 2]);
     if (f31 < Math_fround(HEAPF32[i2 + -4 >> 2])) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 286:
   case 281:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 326;
      break L3;
     }
     if (+HEAPF64[i6 >> 3] < +HEAPF64[i2 + -8 >> 3]) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i2 = i6;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 149:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 331;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i2 + -4 >> 2] | 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 149;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 159:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 336;
      break L3;
     }
     i12 = i6;
     i13 = i2 + -8 | 0;
     if ((HEAP32[i12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0) ? (HEAP32[i12 + 4 >> 2] | 0) == (HEAP32[i13 + 4 >> 2] | 0) : 0) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 159;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 260:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 341;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i6 >> 2]);
     if (f31 != Math_fround(HEAPF32[i2 + -4 >> 2])) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 260;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 282:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 346;
      break L3;
     }
     if (+HEAPF64[i6 >> 3] != +HEAPF64[i2 + -8 >> 3]) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 282;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 150:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 351;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) >>> 0 < (HEAP32[i2 + -4 >> 2] | 0) >>> 0) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 150;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 151:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 356;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) >>> 0 > (HEAP32[i2 + -4 >> 2] | 0) >>> 0) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 151;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 152:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 361;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) >>> 0 > (HEAP32[i2 + -4 >> 2] | 0) >>> 0) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 152;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 153:
    {
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 366;
      break L3;
     }
     if ((HEAP32[i6 >> 2] | 0) >>> 0 < (HEAP32[i2 + -4 >> 2] | 0) >>> 0) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 153;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 160:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 371;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if (i10 >>> 0 < i11 >>> 0 | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 160;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 161:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 376;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if (i10 >>> 0 > i11 >>> 0 | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 > (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 161;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 162:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 381;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if (i10 >>> 0 > i11 >>> 0 | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 > (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 162;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 163:
    {
     i6 = i2 + -16 | 0;
     if (i6 >>> 0 > i15 >>> 0 ? 1 : i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 386;
      break L3;
     }
     i12 = i6;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i2 + -8 | 0;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     if (i10 >>> 0 < i11 >>> 0 | ((i10 | 0) == (i11 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0 : 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i2 = i3 + -1 | 0;
     if (!i2) {
      i4 = i9;
      i2 = i6;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i3 = i2;
      i2 = i6;
      i13 = 163;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 164:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 565;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = HEAP32[i7 >> 2] << HEAP32[i4 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 164;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 165:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 568;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = HEAP32[i7 >> 2] >> HEAP32[i4 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 165;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 166:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 571;
      break L3;
     }
     i7 = i2 + -8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) >>> (HEAP32[i4 >> 2] | 0);
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 166;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 167:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 574;
      break L3;
     }
     i7 = i2 + -12 | 0;
     i8 = i7;
     i8 = _bitshift64Shl(HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 167;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 168:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 577;
      break L3;
     }
     i7 = i2 + -12 | 0;
     i8 = i7;
     i8 = _bitshift64Ashr(HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 168;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 169:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 580;
      break L3;
     }
     i7 = i2 + -12 | 0;
     i8 = i7;
     i8 = _bitshift64Lshr(HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 169;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 170:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 216;
      break L3;
     }
     if (!(HEAP32[i2 >> 2] | 0)) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i13 = 170;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 171:
    {
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 211;
      break L3;
     }
     if (!(HEAP32[i2 >> 2] | 0)) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i13 = 171;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 172:
    {
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 226;
      break L3;
     }
     i13 = i2;
     if ((HEAP32[i13 >> 2] | 0) == 0 & (HEAP32[i13 + 4 >> 2] | 0) == 0) i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0; else i1 = i1 + 8 | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i13 = 172;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 173:
    {
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 221;
      break L3;
     }
     i13 = i2;
     if ((HEAP32[i13 >> 2] | 0) == 0 & (HEAP32[i13 + 4 >> 2] | 0) == 0) i1 = i1 + 8 | 0; else i1 = i9 + (HEAP32[i14 >> 2] << 2) | 0;
     i3 = i3 + -1 | 0;
     if (!i3) {
      i4 = i9;
      i17 = 964;
      break L3;
     } else {
      i10 = i16;
      i11 = i15;
      i12 = i5;
      i14 = i9;
      i13 = 173;
      i16 = i10;
      i15 = i11;
      i5 = i12;
      i9 = i14;
      continue L3;
     }
    }
   case 176:
    {
     HEAP32[i2 >> 2] = HEAP32[i14 >> 2];
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 918;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 176;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 178:
    {
     i14 = (HEAP32[i14 >> 2] | 0) + 40 | 0;
     HEAP32[i2 >> 2] = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 920;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 178;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 189:
   case 187:
   case 184:
   case 183:
   case 182:
   case 181:
   case 180:
   case 179:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 90;
      break L3;
     }
     HEAP32[i1 >> 2] = HEAP32[HEAP32[i1 >> 2] >> 2];
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 92;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 188:
   case 185:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 94;
      break L3;
     }
     i10 = HEAP32[i1 >> 2] | 0;
     i11 = HEAP32[i10 + 4 >> 2] | 0;
     i12 = i1;
     HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i12 + 4 >> 2] = i11;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 96;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 195:
   case 193:
   case 192:
   case 191:
   case 190:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 98;
      break L3;
     }
     i2 = i2 + -8 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 100;
      break L3;
     }
     HEAP32[HEAP32[i2 >> 2] >> 2] = HEAP32[i1 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 196:
   case 194:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 103;
      break L3;
     }
     i2 = i2 + -12 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 105;
      break L3;
     }
     i10 = i1;
     i8 = HEAP32[i10 + 4 >> 2] | 0;
     i7 = HEAP32[i2 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i7 + 4 >> 2] = i8;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 326:
   case 320:
    {
     i8 = HEAP32[i14 >> 2] | 0;
     i7 = i2 + -4 | 0;
     HEAP32[i7 >> 2] = HEAP32[i7 >> 2] << i8 >> i8;
     i7 = i16;
     i8 = i15;
     i10 = i2;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i7;
     i15 = i8;
     i2 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 327:
   case 321:
    {
     i7 = i2 + -4 | 0;
     HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & HEAP32[i14 >> 2];
     i7 = i16;
     i8 = i15;
     i10 = i2;
     i11 = i5;
     i12 = i9;
     i14 = i3;
     i1 = i1 + 8 | 0;
     i16 = i7;
     i15 = i8;
     i2 = i10;
     i5 = i11;
     i9 = i12;
     i3 = i14;
     continue L3;
    }
   case 322:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 585;
      break L3;
     }
     i12 = HEAP32[i1 >> 2] | 0;
     i13 = i1;
     HEAP32[i13 >> 2] = i12;
     HEAP32[i13 + 4 >> 2] = ((i12 | 0) < 0) << 31 >> 31;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 587;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 322;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 329:
   case 328:
   case 323:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 589;
      break L3;
     }
     i12 = i1;
     HEAP32[i12 >> 2] = HEAP32[i1 >> 2];
     HEAP32[i12 + 4 >> 2] = 0;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 591;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 324:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 593;
      break L3;
     }
     HEAPF32[i1 >> 2] = Math_fround(HEAP32[i1 >> 2] | 0);
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 595;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 324;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 325:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 597;
      break L3;
     }
     HEAPF64[i1 >> 3] = +(HEAP32[i1 >> 2] | 0);
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 599;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 325;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 330:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 601;
      break L3;
     }
     HEAPF32[i1 >> 2] = Math_fround((HEAP32[i1 >> 2] | 0) >>> 0);
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 603;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 330;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 331:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 605;
      break L3;
     }
     HEAPF64[i1 >> 3] = +((HEAP32[i1 >> 2] | 0) >>> 0);
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 607;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 331;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 338:
   case 332:
    {
     i4 = HEAP32[i14 >> 2] | 0;
     i6 = i2 + -8 | 0;
     i7 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i7 >>> 0) {
      i17 = 613;
      break L3;
     }
     HEAP32[i6 >> 2] = HEAP32[i6 >> 2] << i4 >> i4;
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i7 >>> 0) {
      i17 = 615;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 339:
   case 333:
    {
     i4 = i2 + -8 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 609;
      break L3;
     }
     HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & HEAP32[i14 >> 2];
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 611;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 336:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 617;
      break L3;
     }
     i13 = i1;
     HEAPF32[i1 >> 2] = Math_fround(+((HEAP32[i13 >> 2] | 0) >>> 0) + 4294967296.0 * +(HEAP32[i13 + 4 >> 2] | 0));
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 619;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 336;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 337:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 621;
      break L3;
     }
     i13 = i1;
     HEAPF64[i1 >> 3] = +((HEAP32[i13 >> 2] | 0) >>> 0) + 4294967296.0 * +(HEAP32[i13 + 4 >> 2] | 0);
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 623;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 337;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 342:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 625;
      break L3;
     }
     i13 = i1;
     HEAPF32[i1 >> 2] = Math_fround(+((HEAP32[i13 >> 2] | 0) >>> 0) + 4294967296.0 * +((HEAP32[i13 + 4 >> 2] | 0) >>> 0));
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 627;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 342;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 343:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 629;
      break L3;
     }
     i13 = i1;
     HEAPF64[i1 >> 3] = +((HEAP32[i13 >> 2] | 0) >>> 0) + 4294967296.0 * +((HEAP32[i13 + 4 >> 2] | 0) >>> 0);
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 631;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 343;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 344:
    {
     i4 = HEAP32[i14 >> 2] | 0;
     i6 = i2 + -4 | 0;
     i7 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i7 >>> 0) {
      i17 = 633;
      break L3;
     }
     HEAP32[i6 >> 2] = ~~Math_fround(HEAPF32[i6 >> 2]) << i4 >> i4;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i7 >>> 0) {
      i17 = 635;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 344;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 345:
    {
     i4 = i2 + -4 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 637;
      break L3;
     }
     HEAP32[i4 >> 2] = HEAP32[i14 >> 2] & ~~Math_fround(HEAPF32[i4 >> 2]) >>> 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 639;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 345;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 346:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 641;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i1 >> 2]);
     i12 = +Math_abs(+f31) >= 1.0 ? (+f31 > 0.0 ? ~~+Math_min(+Math_floor(+f31 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((+f31 - +(~~+f31 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i13 = i1;
     HEAP32[i13 >> 2] = ~~+f31 >>> 0;
     HEAP32[i13 + 4 >> 2] = i12;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 643;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 346;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 347:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 645;
      break L3;
     }
     f31 = Math_fround(HEAPF32[i1 >> 2]);
     i12 = +Math_abs(+f31) >= 1.0 ? (+f31 > 0.0 ? ~~+Math_min(+Math_floor(+f31 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((+f31 - +(~~+f31 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i13 = i1;
     HEAP32[i13 >> 2] = ~~+f31 >>> 0;
     HEAP32[i13 + 4 >> 2] = i12;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 647;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 347;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 349:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 649;
      break L3;
     }
     HEAPF64[i1 >> 3] = +Math_fround(HEAPF32[i1 >> 2]);
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 651;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 349;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 350:
    {
     i4 = HEAP32[i14 >> 2] | 0;
     i6 = i2 + -8 | 0;
     i7 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i7 >>> 0) {
      i17 = 653;
      break L3;
     }
     HEAP32[i6 >> 2] = ~~+HEAPF64[i6 >> 3] << i4 >> i4;
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i7 >>> 0) {
      i17 = 655;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 350;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 351:
    {
     i4 = i2 + -8 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 657;
      break L3;
     }
     HEAP32[i4 >> 2] = HEAP32[i14 >> 2] & ~~+HEAPF64[i4 >> 3] >>> 0;
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 659;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 351;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 352:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 661;
      break L3;
     }
     d32 = +HEAPF64[i1 >> 3];
     i12 = +Math_abs(d32) >= 1.0 ? (d32 > 0.0 ? ~~+Math_min(+Math_floor(d32 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((d32 - +(~~d32 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i13 = i1;
     HEAP32[i13 >> 2] = ~~d32 >>> 0;
     HEAP32[i13 + 4 >> 2] = i12;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 663;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 352;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 353:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 665;
      break L3;
     }
     d32 = +HEAPF64[i1 >> 3];
     i12 = +Math_abs(d32) >= 1.0 ? (d32 > 0.0 ? ~~+Math_min(+Math_floor(d32 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((d32 - +(~~d32 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i13 = i1;
     HEAP32[i13 >> 2] = ~~d32 >>> 0;
     HEAP32[i13 + 4 >> 2] = i12;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 667;
      break L3;
     } else {
      i6 = i16;
      i7 = i15;
      i8 = i2;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 353;
      i16 = i6;
      i15 = i7;
      i2 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 354:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 669;
      break L3;
     }
     HEAPF32[i1 >> 2] = Math_fround(+HEAPF64[i1 >> 3]);
     i2 = i2 + -4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 671;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 354;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 222:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 798;
      break L3;
     }
     HEAP32[i22 >> 2] = HEAP32[i1 >> 2];
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 800;
      break L3;
     }
     i2 = i2 + -12 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 802;
      break L3;
     }
     _SystemArray_StoreElement(HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0, i22);
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 222;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 223:
    {
     i1 = i2 + -8 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 805;
      break L3;
     }
     i12 = i1;
     i13 = HEAP32[i12 + 4 >> 2] | 0;
     i1 = i22;
     HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i1 + 4 >> 2] = i13;
     i1 = i2 + -12 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 807;
      break L3;
     }
     i2 = i2 + -16 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i4 >>> 0) {
      i17 = 809;
      break L3;
     }
     _SystemArray_StoreElement(HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0, i22);
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i13 = 223;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 224:
    {
     i6 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 744;
      break L3;
     }
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 746;
      break L3;
     }
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0, i22);
     HEAP32[i1 >> 2] = HEAP32[i22 >> 2] << 24 >> 24;
     if (i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 748;
      break L3;
     }
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i6;
     i13 = 224;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 225:
    {
     i6 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 751;
      break L3;
     }
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 753;
      break L3;
     }
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0, i22);
     HEAP32[i1 >> 2] = HEAP32[i22 >> 2] & 255;
     if (i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 755;
      break L3;
     }
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i6;
     i13 = 225;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 226:
    {
     i6 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 758;
      break L3;
     }
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 760;
      break L3;
     }
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0, i22);
     HEAP32[i1 >> 2] = HEAP32[i22 >> 2] << 16 >> 16;
     if (i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 762;
      break L3;
     }
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i6;
     i13 = 226;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 227:
    {
     i6 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 765;
      break L3;
     }
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 767;
      break L3;
     }
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0, i22);
     HEAP32[i1 >> 2] = HEAP32[i22 >> 2] & 65535;
     if (i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 769;
      break L3;
     }
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i6;
     i13 = 227;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 231:
   case 229:
   case 228:
    {
     i6 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 772;
      break L3;
     }
     i1 = i2 + -8 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 774;
      break L3;
     }
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0, i22);
     HEAP32[i1 >> 2] = HEAP32[i22 >> 2];
     if (i6 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 776;
      break L3;
     }
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i6;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 232:
   case 230:
    {
     i1 = i2 + -4 | 0;
     i4 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < i4 >>> 0) {
      i17 = 779;
      break L3;
     }
     i6 = i2 + -8 | 0;
     if (i6 >>> 0 > i15 >>> 0 | i6 >>> 0 < i4 >>> 0) {
      i17 = 781;
      break L3;
     }
     _SystemArray_LoadElement(HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0, i22);
     i10 = i22;
     i11 = HEAP32[i10 + 4 >> 2] | 0;
     i12 = i6;
     HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i12 + 4 >> 2] = i11;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 783;
      break L3;
     }
     i6 = i16;
     i7 = i15;
     i8 = i2;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i16 = i6;
     i15 = i7;
     i2 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 240:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 478;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i8 = i7;
     i10 = i4;
     i8 = _i64Add(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 240;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 241:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 490;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i8 = i4;
     i8 = _i64Subtract(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 241;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 242:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 502;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i8 = i7;
     i10 = i4;
     i8 = ___muldi3(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 242;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 243:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 514;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i8 = i4;
     i8 = ___divdi3(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 243;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 244:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 526;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i8 = i4;
     i8 = ___udivdi3(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 244;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 245:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 532;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i8 = i4;
     i8 = ___remdi3(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 245;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 246:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 538;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i8 = i4;
     i8 = ___uremdi3(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     HEAP32[i7 >> 2] = i8;
     HEAP32[i7 + 4 >> 2] = tempRet0;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 246;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 247:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 544;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i11 = i4;
     i8 = HEAP32[i11 + 4 >> 2] & HEAP32[i10 + 4 >> 2];
     HEAP32[i7 >> 2] = HEAP32[i11 >> 2] & HEAP32[i10 >> 2];
     HEAP32[i7 + 4 >> 2] = i8;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 247;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 248:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 550;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i11 = i4;
     i8 = HEAP32[i11 + 4 >> 2] | HEAP32[i10 + 4 >> 2];
     HEAP32[i7 >> 2] = HEAP32[i11 >> 2] | HEAP32[i10 >> 2];
     HEAP32[i7 + 4 >> 2] = i8;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 248;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 249:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 556;
      break L3;
     }
     i7 = i2 + -16 | 0;
     i10 = i7;
     i11 = i4;
     i8 = HEAP32[i11 + 4 >> 2] ^ HEAP32[i10 + 4 >> 2];
     HEAP32[i7 >> 2] = HEAP32[i11 >> 2] ^ HEAP32[i10 >> 2];
     HEAP32[i7 + 4 >> 2] = i8;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 249;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 250:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 421;
      break L3;
     }
     i7 = i2 + -8 | 0;
     f31 = Math_fround(HEAPF32[i7 >> 2]);
     HEAP32[i7 >> 2] = f31 == Math_fround(HEAPF32[i4 >> 2]) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 250;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 252:
   case 251:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 427;
      break L3;
     }
     i7 = i2 + -8 | 0;
     f31 = Math_fround(HEAPF32[i7 >> 2]);
     HEAP32[i7 >> 2] = f31 > Math_fround(HEAPF32[i4 >> 2]) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 254:
   case 253:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 433;
      break L3;
     }
     i7 = i2 + -8 | 0;
     f31 = Math_fround(HEAPF32[i7 >> 2]);
     HEAP32[i7 >> 2] = f31 < Math_fround(HEAPF32[i4 >> 2]) & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 272:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 424;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAP32[i7 >> 2] = +HEAPF64[i7 >> 3] == +HEAPF64[i2 + -8 >> 3] & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 272;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 274:
   case 273:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 430;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAP32[i7 >> 2] = +HEAPF64[i7 >> 3] > +HEAPF64[i2 + -8 >> 3] & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 276:
   case 275:
    {
     i4 = i2 + -12 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 436;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAP32[i7 >> 2] = +HEAPF64[i7 >> 3] < +HEAPF64[i2 + -8 >> 3] & 1;
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 265:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 481;
      break L3;
     }
     i7 = i2 + -8 | 0;
     f31 = Math_fround(HEAPF32[i7 >> 2]);
     HEAPF32[i7 >> 2] = Math_fround(f31 + Math_fround(HEAPF32[i4 >> 2]));
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 265;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 287:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 484;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAPF64[i7 >> 3] = +HEAPF64[i7 >> 3] + +HEAPF64[i4 >> 3];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 287;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 266:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 493;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAPF64[i7 >> 3] = +HEAPF64[i7 >> 3] - +HEAPF64[i4 >> 3];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 266;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 288:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 496;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAPF64[i7 >> 3] = +HEAPF64[i7 >> 3] - +HEAPF64[i4 >> 3];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 288;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 267:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 505;
      break L3;
     }
     i7 = i2 + -8 | 0;
     f31 = Math_fround(HEAPF32[i7 >> 2]);
     HEAPF32[i7 >> 2] = Math_fround(f31 * Math_fround(HEAPF32[i4 >> 2]));
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 267;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 289:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 508;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAPF64[i7 >> 3] = +HEAPF64[i7 >> 3] * +HEAPF64[i4 >> 3];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 289;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 268:
    {
     i4 = i2 + -4 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 517;
      break L3;
     }
     i7 = i2 + -8 | 0;
     f31 = Math_fround(HEAPF32[i7 >> 2]);
     HEAPF32[i7 >> 2] = Math_fround(f31 / Math_fround(HEAPF32[i4 >> 2]));
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 268;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 290:
    {
     i4 = i2 + -8 | 0;
     if (i4 >>> 0 > i15 >>> 0 ? 1 : i4 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 520;
      break L3;
     }
     i7 = i2 + -16 | 0;
     HEAPF64[i7 >> 3] = +HEAPF64[i7 >> 3] / +HEAPF64[i4 >> 3];
     i7 = i16;
     i8 = i15;
     i10 = i5;
     i11 = i9;
     i12 = i3;
     i1 = i14;
     i2 = i4;
     i13 = 290;
     i16 = i7;
     i15 = i8;
     i5 = i10;
     i9 = i11;
     i3 = i12;
     continue L3;
    }
   case 311:
    {
     HEAP32[i2 >> 2] = -1;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 23;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 311;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 312:
    {
     HEAP32[i2 >> 2] = 0;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 25;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 312;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 313:
    {
     HEAP32[i2 >> 2] = 1;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 27;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 313;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 314:
    {
     HEAP32[i2 >> 2] = 2;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 29;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i5;
      i11 = i9;
      i12 = i3;
      i1 = i14;
      i13 = 314;
      i16 = i7;
      i15 = i8;
      i5 = i10;
      i9 = i11;
      i3 = i12;
      continue L3;
     }
    }
   case 315:
    {
     i4 = i2 + -4 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 838;
      break L3;
     }
     HEAP32[i4 >> 2] = HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) >> 2];
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 840;
      break L3;
     } else {
      i7 = i16;
      i8 = i15;
      i10 = i2;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 315;
      i16 = i7;
      i15 = i8;
      i2 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   case 316:
    {
     i4 = i2 + -4 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) + 44 | 0;
     if (i4 >>> 0 > i15 >>> 0 | i4 >>> 0 < i6 >>> 0) {
      i17 = 842;
      break L3;
     }
     i12 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) | 0;
     i13 = HEAP32[i12 + 4 >> 2] | 0;
     i14 = i4;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i13;
     i2 = i2 + 4 | 0;
     if (i2 >>> 0 > i15 >>> 0 | i2 >>> 0 < i6 >>> 0) {
      i17 = 844;
      break L3;
     } else {
      i8 = i16;
      i10 = i15;
      i11 = i5;
      i12 = i9;
      i14 = i3;
      i1 = i1 + 8 | 0;
      i13 = 316;
      i16 = i8;
      i15 = i10;
      i5 = i11;
      i9 = i12;
      i3 = i14;
      continue L3;
     }
    }
   default:
    {
     i17 = 7;
     break L3;
    }
   } while (0);
   if ((i17 | 0) == 123) {
    i17 = 0;
    i4 = HEAP32[i29 >> 2] | 0;
    i8 = HEAP32[i4 + 36 >> 2] | 0;
    i1 = (HEAP32[i4 >> 2] | 0) + 44 | 0;
    i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
    if (!i8) {
     i17 = 124;
     break;
    }
    if (!i1) i7 = (HEAP32[i4 + 16 >> 2] | 0) == 0 ? 0 : 4; else {
     i7 = i1 + 68 | 0;
     i7 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
    }
    HEAP32[i22 >> 2] = i4;
    HEAP32[i23 >> 2] = i8;
    HEAP32[i29 >> 2] = i8;
    i6 = i8 + 44 | 0;
    i4 = (HEAP32[i8 >> 2] | 0) + 28 | 0;
    i4 = i6 + (HEAP32[(HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
    i6 = i6 + (HEAP32[i8 + 12 >> 2] | 0) | 0;
    i5 = HEAP32[i8 + 4 >> 2] | 0;
    i9 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i1 = i9 + (HEAP32[i8 + 8 >> 2] << 2) | 0;
    if (!i7) i2 = i6; else {
     _memmove(i6 | 0, i2 + (0 - i7) | 0, i7 | 0) | 0;
     i2 = i6 + i7 | 0;
     if (i2 >>> 0 > i4 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
      i17 = 133;
      break;
     }
    }
    _MethodState_Delete(i28, i22);
    if (!(HEAP32[(HEAP32[i29 >> 2] | 0) + 24 >> 2] | 0)) {
     i12 = i16;
     i14 = i3;
     i15 = i4;
     i16 = i12;
     i3 = i14;
     continue;
    } else i17 = 135;
   }
   do if ((i17 | 0) == 135) {
    i17 = 0;
    i6 = HEAP32[i29 >> 2] | 0;
    i5 = HEAP32[i6 + 24 >> 2] | 0;
    if (!i5) {
     i5 = HEAP32[i1 >> 2] | 0;
     i7 = i5 + 40 | 0;
     i8 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
     i2 = i2 + (0 - i8) | 0;
     if (i2 >>> 0 < (i6 + 44 | 0) >>> 0 | i2 >>> 0 > i4 >>> 0) {
      i17 = 137;
      break L3;
     }
     i8 = _malloc(i8) | 0;
     HEAP32[i6 + 28 >> 2] = i8;
     _memcpy(i8 | 0, i2 | 0, HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24 | 0) | 0;
     i8 = i5;
     i7 = i2;
     i1 = i1 + 4 | 0;
    } else {
     i6 = _Delegate_GetMethod(i5) | 0;
     i5 = i6 + 44 | 0;
     i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
     if (!i5) i5 = HEAP32[i29 >> 2] | 0; else {
      i5 = i5 + 68 | 0;
      i2 = i2 + (0 - (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24)) | 0;
      i5 = HEAP32[i29 >> 2] | 0;
      if (i2 >>> 0 > i4 >>> 0 | i2 >>> 0 < (i5 + 44 | 0) >>> 0) {
       i17 = 142;
       break L3;
      }
     }
     i8 = i6;
     i7 = i5 + 24 | 0;
     i6 = i5;
    }
    i5 = HEAP32[i7 >> 2] | 0;
    if (!i5) {
     HEAP32[i18 >> 2] = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 84 >> 2] | 0) | 0;
     i5 = i9;
     i17 = 921;
     break;
    }
    i14 = _Delegate_GetMethodAndStore(i5, i22, i6 + 24 | 0) | 0;
    i4 = _MethodState_Direct(i28, i14, HEAP32[i29 >> 2] | 0, 0, 0) | 0;
    i15 = i8 + 40 | 0;
    i6 = i4 + 44 | 0;
    i12 = (HEAP32[i4 >> 2] | 0) + 28 | 0;
    _CopyParameters(i6 + (HEAP32[(HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0, i14, (HEAP32[(HEAP32[i29 >> 2] | 0) + 28 >> 2] | 0) + (HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) | 0, HEAP32[i22 >> 2] | 0) | 0;
    if ((HEAP32[i23 >> 2] | 0) != (i4 | 0)) {
     i15 = HEAP32[i29 >> 2] | 0;
     HEAP32[i15 + 12 >> 2] = i2 - (i15 + 44);
     HEAP32[i15 + 8 >> 2] = i1 - i9 >> 2;
     HEAP32[i23 >> 2] = i4;
    }
    HEAP32[i29 >> 2] = i4;
    i15 = (HEAP32[i4 >> 2] | 0) + 28 | 0;
    i5 = HEAP32[i4 + 4 >> 2] | 0;
    i1 = HEAP32[i5 >> 2] | 0;
    i12 = i16;
    i14 = i3;
    i9 = i1;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i1 = i1 + (HEAP32[i4 + 8 >> 2] << 2) | 0;
    i2 = i6 + (HEAP32[i4 + 12 >> 2] | 0) | 0;
    i15 = i6 + (HEAP32[(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
    i16 = i12;
    i3 = i14;
    continue L3;
   } while (0);
   do if ((i17 | 0) == 921) {
    if ((i13 | 0) != 27) {
     i11 = i16;
     i9 = i5;
     i4 = HEAP32[i18 >> 2] | 0;
     i17 = 926;
     break;
    }
    i2 = i2 + -4 | 0;
    if (i2 >>> 0 > i4 >>> 0 ? 1 : i2 >>> 0 < ((HEAP32[i29 >> 2] | 0) + 44 | 0) >>> 0) {
     i17 = 924;
     break L3;
    }
    i4 = HEAP32[i2 >> 2] | 0;
    HEAP32[i18 >> 2] = i4;
    i11 = i16;
    i9 = i5;
    i17 = 926;
   } while (0);
   if ((i17 | 0) == 926) {
    i10 = HEAP32[i29 >> 2] | 0;
    HEAP32[i10 + 12 >> 2] = i2 - (i10 + 44);
    HEAP32[i10 + 8 >> 2] = i1 - i9 >> 2;
    i10 = _Heap_GetType(i4) | 0;
    i2 = i29;
    L739 : while (1) {
     i2 = HEAP32[i2 >> 2] | 0;
     if (!i2) {
      i17 = 936;
      break L3;
     }
     i8 = i2 + 8 | 0;
     i7 = 0;
     while (1) {
      i4 = (HEAP32[i2 >> 2] | 0) + 28 | 0;
      i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
      if (i7 >>> 0 >= (HEAP32[i4 + 16 >> 2] | 0) >>> 0) break;
      i4 = HEAP32[i4 + 20 >> 2] | 0;
      i5 = i4 + (i7 * 24 | 0) | 0;
      if (!(HEAP32[i5 >> 2] | 0)) {
       i6 = (HEAP32[i8 >> 2] | 0) + -1 | 0;
       if (i6 >>> 0 >= (HEAP32[i4 + (i7 * 24 | 0) + 4 >> 2] | 0) >>> 0) if (i6 >>> 0 < (HEAP32[i4 + (i7 * 24 | 0) + 8 >> 2] | 0) >>> 0) if (_Type_IsDerivedFromOrSame(HEAP32[i4 + (i7 * 24 | 0) + 20 >> 2] | 0, i10) | 0) break L739;
      }
      i7 = i7 + 1 | 0;
     }
     i2 = i2 + 36 | 0;
    }
    HEAP32[i19 >> 2] = i2;
    HEAP32[i20 >> 2] = i5;
    i4 = i9;
    i6 = HEAP32[i29 >> 2] | 0;
    i17 = 938;
   }
   L752 : while (1) {
    if ((i17 | 0) == 938) {
     if ((i6 | 0) == (i2 | 0)) {
      i17 = 950;
      break;
     }
     i6 = i11;
     i2 = HEAP32[i21 >> 2] | 0;
    }
    i11 = HEAP32[i29 >> 2] | 0;
    i8 = (HEAP32[i11 >> 2] | 0) + 28 | 0;
    i8 = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
    i7 = HEAP32[i8 + 16 >> 2] | 0;
    i8 = i8 + 20 | 0;
    i12 = i11 + 8 | 0;
    while (1) {
     if (i2 >>> 0 >= i7 >>> 0) break;
     i10 = HEAP32[i8 >> 2] | 0;
     if ((HEAP32[i10 + (i2 * 24 | 0) >> 2] | 0) == 2) {
      i9 = HEAP32[i12 >> 2] | 0;
      i5 = i9 + -1 | 0;
      if (i5 >>> 0 >= (HEAP32[i10 + (i2 * 24 | 0) + 4 >> 2] | 0) >>> 0) if (i5 >>> 0 < (HEAP32[i10 + (i2 * 24 | 0) + 8 >> 2] | 0) >>> 0) {
       i17 = 945;
       break L752;
      }
     }
     i2 = i2 + 1 | 0;
    }
    i2 = HEAP32[i11 + 36 >> 2] | 0;
    _MethodState_Delete(i28, i29);
    HEAP32[i29 >> 2] = i2;
    HEAP32[i21 >> 2] = 0;
    i11 = i6;
    i6 = i2;
    i2 = HEAP32[i19 >> 2] | 0;
    i17 = 938;
   }
   if ((i17 | 0) == 945) {
    i17 = 0;
    i5 = i11 + 12 | 0;
    if ((HEAP32[i23 >> 2] | 0) == (i11 | 0)) i1 = i9; else {
     HEAP32[i5 >> 2] = 0;
     i1 = i1 - i4 >> 2;
     HEAP32[i12 >> 2] = i1;
     HEAP32[i23 >> 2] = i11;
    }
    i15 = i11 + 44 | 0;
    i14 = (HEAP32[i11 >> 2] | 0) + 28 | 0;
    i14 = i15 + (HEAP32[(HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
    i15 = i15 + (HEAP32[i5 >> 2] | 0) | 0;
    i5 = HEAP32[i11 + 4 >> 2] | 0;
    i16 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 + (i2 * 24 | 0) + 12 >> 2];
    HEAP32[i21 >> 2] = i2 + 1;
    i4 = i16;
    i10 = i14;
    i2 = i15;
    i1 = i16 + (i1 << 2) | 0;
   } else if ((i17 | 0) == 950) {
    i17 = 0;
    HEAP32[i2 + 8 >> 2] = HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2];
    HEAP32[i23 >> 2] = i6;
    HEAP32[i29 >> 2] = i6;
    i2 = i6 + 44 | 0;
    i1 = (HEAP32[i6 >> 2] | 0) + 28 | 0;
    i1 = i2 + (HEAP32[(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
    i5 = HEAP32[i6 + 4 >> 2] | 0;
    i7 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i8 = HEAP32[i6 + 8 >> 2] | 0;
    HEAP32[i2 >> 2] = HEAP32[i18 >> 2];
    i2 = i6 + 48 | 0;
    if (i1 >>> 0 < i2 >>> 0) {
     i17 = 951;
     break;
    } else {
     i4 = i7;
     i10 = i1;
     i1 = i7 + (i8 << 2) | 0;
     i6 = i11;
    }
   }
   i3 = i3 + -1 | 0;
   if (!i3) {
    i17 = 964;
    break;
   } else {
    i9 = i4;
    i15 = i10;
    i16 = i6;
   }
  }
  switch (i17 | 0) {
  case 7:
   {
    HEAP32[i24 >> 2] = i13;
    _Crash(16232, i24);
    break;
   }
  case 9:
   {
    _abort();
    break;
   }
  case 11:
   {
    _abort();
    break;
   }
  case 13:
   {
    _abort();
    break;
   }
  case 15:
   {
    _abort();
    break;
   }
  case 17:
   {
    _abort();
    break;
   }
  case 19:
   {
    _abort();
    break;
   }
  case 21:
   {
    _abort();
    break;
   }
  case 23:
   {
    _abort();
    break;
   }
  case 25:
   {
    _abort();
    break;
   }
  case 27:
   {
    _abort();
    break;
   }
  case 29:
   {
    _abort();
    break;
   }
  case 31:
   {
    _abort();
    break;
   }
  case 33:
   {
    _abort();
    break;
   }
  case 35:
   {
    _abort();
    break;
   }
  case 37:
   {
    _abort();
    break;
   }
  case 39:
   {
    _abort();
    break;
   }
  case 41:
   {
    _abort();
    break;
   }
  case 43:
   {
    _abort();
    break;
   }
  case 45:
   {
    _abort();
    break;
   }
  case 47:
   {
    _abort();
    break;
   }
  case 49:
   {
    _abort();
    break;
   }
  case 51:
   {
    _abort();
    break;
   }
  case 53:
   {
    _abort();
    break;
   }
  case 55:
   {
    _abort();
    break;
   }
  case 57:
   {
    _abort();
    break;
   }
  case 60:
   {
    _abort();
    break;
   }
  case 63:
   {
    _abort();
    break;
   }
  case 66:
   {
    _abort();
    break;
   }
  case 69:
   {
    _abort();
    break;
   }
  case 72:
   {
    _abort();
    break;
   }
  case 75:
   {
    _abort();
    break;
   }
  case 78:
   {
    _abort();
    break;
   }
  case 81:
   {
    _abort();
    break;
   }
  case 84:
   {
    _abort();
    break;
   }
  case 87:
   {
    _abort();
    break;
   }
  case 90:
   {
    _abort();
    break;
   }
  case 92:
   {
    _abort();
    break;
   }
  case 94:
   {
    _abort();
    break;
   }
  case 96:
   {
    _abort();
    break;
   }
  case 98:
   {
    _abort();
    break;
   }
  case 100:
   {
    _abort();
    break;
   }
  case 103:
   {
    _abort();
    break;
   }
  case 105:
   {
    _abort();
    break;
   }
  case 108:
   {
    _abort();
    break;
   }
  case 110:
   {
    _abort();
    break;
   }
  case 116:
   {
    _abort();
    break;
   }
  case 119:
   {
    _abort();
    break;
   }
  case 121:
   {
    HEAP32[i2 + 12 >> 2] = i1 - (i2 + 44);
    HEAP32[i2 + 8 >> 2] = 3;
    if ((i5 | 0) == 1) {
     i27 = 4;
     break L1;
    }
    HEAP32[i28 + 44 >> 2] = i5;
    i27 = 3;
    break L1;
   }
  case 124:
   {
    if ((i1 | 0) != (HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0)) {
     i27 = 1;
     break L1;
    }
    i1 = i2 + -4 | 0;
    if (i1 >>> 0 > i15 >>> 0 | i1 >>> 0 < (i4 + 44 | 0) >>> 0) _abort(); else {
     HEAP32[i28 + 24 >> 2] = HEAP32[i1 >> 2];
     i27 = 1;
     break L1;
    }
    break;
   }
  case 133:
   {
    _abort();
    break;
   }
  case 137:
   {
    _abort();
    break;
   }
  case 142:
   {
    _abort();
    break;
   }
  case 152:
   {
    _abort();
    break;
   }
  case 167:
   {
    _abort();
    break;
   }
  case 170:
   {
    _abort();
    break;
   }
  case 172:
   {
    _abort();
    break;
   }
  case 193:
   {
    i26 = i8 + 16 | 0;
    i26 = HEAPU8[i26 >> 0] | HEAPU8[i26 + 1 >> 0] << 8 | HEAPU8[i26 + 2 >> 0] << 16 | HEAPU8[i26 + 3 >> 0] << 24;
    i28 = i8 + 12 | 0;
    i28 = HEAPU8[i28 >> 0] | HEAPU8[i28 + 1 >> 0] << 8 | HEAPU8[i28 + 2 >> 0] << 16 | HEAPU8[i28 + 3 >> 0] << 24;
    i29 = _Sys_GetMethodDesc(i10) | 0;
    HEAP32[i25 >> 2] = i26;
    HEAP32[i25 + 4 >> 2] = i28;
    HEAP32[i25 + 8 >> 2] = i29;
    _Crash(16255, i25);
    break;
   }
  case 198:
   {
    _abort();
    break;
   }
  case 205:
   {
    _abort();
    break;
   }
  case 211:
   {
    _abort();
    break;
   }
  case 216:
   {
    _abort();
    break;
   }
  case 221:
   {
    _abort();
    break;
   }
  case 226:
   {
    _abort();
    break;
   }
  case 231:
   {
    _abort();
    break;
   }
  case 236:
   {
    _abort();
    break;
   }
  case 241:
   {
    _abort();
    break;
   }
  case 246:
   {
    _abort();
    break;
   }
  case 251:
   {
    _abort();
    break;
   }
  case 256:
   {
    _abort();
    break;
   }
  case 261:
   {
    _abort();
    break;
   }
  case 266:
   {
    _abort();
    break;
   }
  case 271:
   {
    _abort();
    break;
   }
  case 276:
   {
    _abort();
    break;
   }
  case 281:
   {
    _abort();
    break;
   }
  case 286:
   {
    _abort();
    break;
   }
  case 291:
   {
    _abort();
    break;
   }
  case 296:
   {
    _abort();
    break;
   }
  case 301:
   {
    _abort();
    break;
   }
  case 306:
   {
    _abort();
    break;
   }
  case 311:
   {
    _abort();
    break;
   }
  case 316:
   {
    _abort();
    break;
   }
  case 321:
   {
    _abort();
    break;
   }
  case 326:
   {
    _abort();
    break;
   }
  case 331:
   {
    _abort();
    break;
   }
  case 336:
   {
    _abort();
    break;
   }
  case 341:
   {
    _abort();
    break;
   }
  case 346:
   {
    _abort();
    break;
   }
  case 351:
   {
    _abort();
    break;
   }
  case 356:
   {
    _abort();
    break;
   }
  case 361:
   {
    _abort();
    break;
   }
  case 366:
   {
    _abort();
    break;
   }
  case 371:
   {
    _abort();
    break;
   }
  case 376:
   {
    _abort();
    break;
   }
  case 381:
   {
    _abort();
    break;
   }
  case 386:
   {
    _abort();
    break;
   }
  case 391:
   {
    _abort();
    break;
   }
  case 394:
   {
    _abort();
    break;
   }
  case 397:
   {
    _abort();
    break;
   }
  case 400:
   {
    _abort();
    break;
   }
  case 403:
   {
    _abort();
    break;
   }
  case 406:
   {
    _abort();
    break;
   }
  case 409:
   {
    _abort();
    break;
   }
  case 412:
   {
    _abort();
    break;
   }
  case 415:
   {
    _abort();
    break;
   }
  case 418:
   {
    _abort();
    break;
   }
  case 421:
   {
    _abort();
    break;
   }
  case 424:
   {
    _abort();
    break;
   }
  case 427:
   {
    _abort();
    break;
   }
  case 430:
   {
    _abort();
    break;
   }
  case 433:
   {
    _abort();
    break;
   }
  case 436:
   {
    _abort();
    break;
   }
  case 439:
   {
    _abort();
    break;
   }
  case 442:
   {
    _abort();
    break;
   }
  case 445:
   {
    _abort();
    break;
   }
  case 448:
   {
    _abort();
    break;
   }
  case 451:
   {
    _abort();
    break;
   }
  case 454:
   {
    _abort();
    break;
   }
  case 457:
   {
    _abort();
    break;
   }
  case 460:
   {
    _abort();
    break;
   }
  case 463:
   {
    _abort();
    break;
   }
  case 466:
   {
    _abort();
    break;
   }
  case 469:
   {
    _abort();
    break;
   }
  case 472:
   {
    _abort();
    break;
   }
  case 475:
   {
    _abort();
    break;
   }
  case 478:
   {
    _abort();
    break;
   }
  case 481:
   {
    _abort();
    break;
   }
  case 484:
   {
    _abort();
    break;
   }
  case 487:
   {
    _abort();
    break;
   }
  case 490:
   {
    _abort();
    break;
   }
  case 493:
   {
    _abort();
    break;
   }
  case 496:
   {
    _abort();
    break;
   }
  case 499:
   {
    _abort();
    break;
   }
  case 502:
   {
    _abort();
    break;
   }
  case 505:
   {
    _abort();
    break;
   }
  case 508:
   {
    _abort();
    break;
   }
  case 511:
   {
    _abort();
    break;
   }
  case 514:
   {
    _abort();
    break;
   }
  case 517:
   {
    _abort();
    break;
   }
  case 520:
   {
    _abort();
    break;
   }
  case 523:
   {
    _abort();
    break;
   }
  case 526:
   {
    _abort();
    break;
   }
  case 529:
   {
    _abort();
    break;
   }
  case 532:
   {
    _abort();
    break;
   }
  case 535:
   {
    _abort();
    break;
   }
  case 538:
   {
    _abort();
    break;
   }
  case 541:
   {
    _abort();
    break;
   }
  case 544:
   {
    _abort();
    break;
   }
  case 547:
   {
    _abort();
    break;
   }
  case 550:
   {
    _abort();
    break;
   }
  case 553:
   {
    _abort();
    break;
   }
  case 556:
   {
    _abort();
    break;
   }
  case 565:
   {
    _abort();
    break;
   }
  case 568:
   {
    _abort();
    break;
   }
  case 571:
   {
    _abort();
    break;
   }
  case 574:
   {
    _abort();
    break;
   }
  case 577:
   {
    _abort();
    break;
   }
  case 580:
   {
    _abort();
    break;
   }
  case 585:
   {
    _abort();
    break;
   }
  case 587:
   {
    _abort();
    break;
   }
  case 589:
   {
    _abort();
    break;
   }
  case 591:
   {
    _abort();
    break;
   }
  case 593:
   {
    _abort();
    break;
   }
  case 595:
   {
    _abort();
    break;
   }
  case 597:
   {
    _abort();
    break;
   }
  case 599:
   {
    _abort();
    break;
   }
  case 601:
   {
    _abort();
    break;
   }
  case 603:
   {
    _abort();
    break;
   }
  case 605:
   {
    _abort();
    break;
   }
  case 607:
   {
    _abort();
    break;
   }
  case 609:
   {
    _abort();
    break;
   }
  case 611:
   {
    _abort();
    break;
   }
  case 613:
   {
    _abort();
    break;
   }
  case 615:
   {
    _abort();
    break;
   }
  case 617:
   {
    _abort();
    break;
   }
  case 619:
   {
    _abort();
    break;
   }
  case 621:
   {
    _abort();
    break;
   }
  case 623:
   {
    _abort();
    break;
   }
  case 625:
   {
    _abort();
    break;
   }
  case 627:
   {
    _abort();
    break;
   }
  case 629:
   {
    _abort();
    break;
   }
  case 631:
   {
    _abort();
    break;
   }
  case 633:
   {
    _abort();
    break;
   }
  case 635:
   {
    _abort();
    break;
   }
  case 637:
   {
    _abort();
    break;
   }
  case 639:
   {
    _abort();
    break;
   }
  case 641:
   {
    _abort();
    break;
   }
  case 643:
   {
    _abort();
    break;
   }
  case 645:
   {
    _abort();
    break;
   }
  case 647:
   {
    _abort();
    break;
   }
  case 649:
   {
    _abort();
    break;
   }
  case 651:
   {
    _abort();
    break;
   }
  case 653:
   {
    _abort();
    break;
   }
  case 655:
   {
    _abort();
    break;
   }
  case 657:
   {
    _abort();
    break;
   }
  case 659:
   {
    _abort();
    break;
   }
  case 661:
   {
    _abort();
    break;
   }
  case 663:
   {
    _abort();
    break;
   }
  case 665:
   {
    _abort();
    break;
   }
  case 667:
   {
    _abort();
    break;
   }
  case 669:
   {
    _abort();
    break;
   }
  case 671:
   {
    _abort();
    break;
   }
  case 673:
   {
    _abort();
    break;
   }
  case 675:
   {
    _abort();
    break;
   }
  case 677:
   {
    _abort();
    break;
   }
  case 679:
   {
    _abort();
    break;
   }
  case 683:
   {
    _abort();
    break;
   }
  case 686:
   {
    _abort();
    break;
   }
  case 695:
   {
    _abort();
    break;
   }
  case 698:
   {
    _abort();
    break;
   }
  case 707:
   {
    _abort();
    break;
   }
  case 710:
   {
    _abort();
    break;
   }
  case 717:
   {
    _abort();
    break;
   }
  case 720:
   {
    _abort();
    break;
   }
  case 726:
   {
    _abort();
    break;
   }
  case 729:
   {
    _abort();
    break;
   }
  case 732:
   {
    _abort();
    break;
   }
  case 734:
   {
    _abort();
    break;
   }
  case 740:
   {
    _abort();
    break;
   }
  case 742:
   {
    _abort();
    break;
   }
  case 744:
   {
    _abort();
    break;
   }
  case 746:
   {
    _abort();
    break;
   }
  case 748:
   {
    _abort();
    break;
   }
  case 751:
   {
    _abort();
    break;
   }
  case 753:
   {
    _abort();
    break;
   }
  case 755:
   {
    _abort();
    break;
   }
  case 758:
   {
    _abort();
    break;
   }
  case 760:
   {
    _abort();
    break;
   }
  case 762:
   {
    _abort();
    break;
   }
  case 765:
   {
    _abort();
    break;
   }
  case 767:
   {
    _abort();
    break;
   }
  case 769:
   {
    _abort();
    break;
   }
  case 772:
   {
    _abort();
    break;
   }
  case 774:
   {
    _abort();
    break;
   }
  case 776:
   {
    _abort();
    break;
   }
  case 779:
   {
    _abort();
    break;
   }
  case 781:
   {
    _abort();
    break;
   }
  case 783:
   {
    _abort();
    break;
   }
  case 786:
   {
    _abort();
    break;
   }
  case 788:
   {
    _abort();
    break;
   }
  case 790:
   {
    _abort();
    break;
   }
  case 792:
   {
    _abort();
    break;
   }
  case 794:
   {
    _abort();
    break;
   }
  case 796:
   {
    _abort();
    break;
   }
  case 798:
   {
    _abort();
    break;
   }
  case 800:
   {
    _abort();
    break;
   }
  case 802:
   {
    _abort();
    break;
   }
  case 805:
   {
    _abort();
    break;
   }
  case 807:
   {
    _abort();
    break;
   }
  case 809:
   {
    _abort();
    break;
   }
  case 812:
   {
    _abort();
    break;
   }
  case 814:
   {
    _abort();
    break;
   }
  case 816:
   {
    _abort();
    break;
   }
  case 819:
   {
    _abort();
    break;
   }
  case 821:
   {
    _abort();
    break;
   }
  case 824:
   {
    _abort();
    break;
   }
  case 826:
   {
    _abort();
    break;
   }
  case 829:
   {
    _abort();
    break;
   }
  case 831:
   {
    _abort();
    break;
   }
  case 834:
   {
    _abort();
    break;
   }
  case 836:
   {
    _abort();
    break;
   }
  case 838:
   {
    _abort();
    break;
   }
  case 840:
   {
    _abort();
    break;
   }
  case 842:
   {
    _abort();
    break;
   }
  case 844:
   {
    _abort();
    break;
   }
  case 846:
   {
    _abort();
    break;
   }
  case 848:
   {
    _abort();
    break;
   }
  case 850:
   {
    _abort();
    break;
   }
  case 852:
   {
    _abort();
    break;
   }
  case 854:
   {
    _abort();
    break;
   }
  case 857:
   {
    _abort();
    break;
   }
  case 860:
   {
    _abort();
    break;
   }
  case 868:
   {
    _abort();
    break;
   }
  case 870:
   {
    _abort();
    break;
   }
  case 872:
   {
    _abort();
    break;
   }
  case 874:
   {
    _abort();
    break;
   }
  case 877:
   {
    _abort();
    break;
   }
  case 880:
   {
    _abort();
    break;
   }
  case 883:
   {
    _abort();
    break;
   }
  case 885:
   {
    _abort();
    break;
   }
  case 887:
   {
    _abort();
    break;
   }
  case 889:
   {
    _abort();
    break;
   }
  case 891:
   {
    _abort();
    break;
   }
  case 893:
   {
    _abort();
    break;
   }
  case 896:
   {
    _abort();
    break;
   }
  case 899:
   {
    _abort();
    break;
   }
  case 901:
   {
    _abort();
    break;
   }
  case 903:
   {
    _abort();
    break;
   }
  case 905:
   {
    _abort();
    break;
   }
  case 907:
   {
    _abort();
    break;
   }
  case 910:
   {
    _abort();
    break;
   }
  case 912:
   {
    _abort();
    break;
   }
  case 914:
   {
    _abort();
    break;
   }
  case 916:
   {
    _abort();
    break;
   }
  case 918:
   {
    _abort();
    break;
   }
  case 920:
   {
    _abort();
    break;
   }
  case 924:
   {
    _abort();
    break;
   }
  case 936:
   {
    i25 = HEAP32[HEAP32[i29 >> 2] >> 2] | 0;
    i24 = i25 + 48 | 0;
    i24 = (HEAPU8[i24 >> 0] | HEAPU8[i24 + 1 >> 0] << 8 | HEAPU8[i24 + 2 >> 0] << 16 | HEAPU8[i24 + 3 >> 0] << 24) + 12 | 0;
    i25 = i25 + 16 | 0;
    i25 = HEAPU8[i25 >> 0] | HEAPU8[i25 + 1 >> 0] << 8 | HEAPU8[i25 + 2 >> 0] << 16 | HEAPU8[i25 + 3 >> 0] << 24;
    i28 = i10 + 16 | 0;
    i28 = HEAPU8[i28 >> 0] | HEAPU8[i28 + 1 >> 0] << 8 | HEAPU8[i28 + 2 >> 0] << 16 | HEAPU8[i28 + 3 >> 0] << 24;
    i29 = i10 + 12 | 0;
    i29 = HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24;
    HEAP32[i26 >> 2] = HEAPU8[i24 >> 0] | HEAPU8[i24 + 1 >> 0] << 8 | HEAPU8[i24 + 2 >> 0] << 16 | HEAPU8[i24 + 3 >> 0] << 24;
    HEAP32[i26 + 4 >> 2] = i25;
    HEAP32[i26 + 8 >> 2] = i28;
    HEAP32[i26 + 12 >> 2] = i29;
    _Crash(16293, i26);
    break;
   }
  case 951:
   {
    _abort();
    break;
   }
  case 964:
   {
    i27 = HEAP32[i29 >> 2] | 0;
    HEAP32[i27 + 12 >> 2] = i2 - (i27 + 44);
    HEAP32[i27 + 8 >> 2] = i1 - i4 >> 2;
    i27 = 2;
    break L1;
   }
  }
 } while (0);
 STACKTOP = i30;
 return i27 | 0;
}

function _JITit(i6, i28, i56, i31, i59, i57, i60) {
 i6 = i6 | 0;
 i28 = i28 | 0;
 i56 = i56 | 0;
 i31 = i31 | 0;
 i59 = i59 | 0;
 i57 = i57 | 0;
 i60 = i60 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i29 = 0, i30 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i58 = 0, i61 = 0, i62 = 0;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(160);
 i46 = i62 + 96 | 0;
 i45 = i62 + 88 | 0;
 i43 = i62 + 80 | 0;
 i42 = i62 + 72 | 0;
 i41 = i62 + 64 | 0;
 i40 = i62 + 56 | 0;
 i39 = i62 + 48 | 0;
 i38 = i62 + 40 | 0;
 i50 = i62 + 32 | 0;
 i51 = i62 + 24 | 0;
 i44 = i62 + 16 | 0;
 i37 = i62 + 8 | 0;
 i36 = i62;
 i33 = i62 + 152 | 0;
 i61 = i62 + 136 | 0;
 i49 = i62 + 120 | 0;
 i54 = i62 + 104 | 0;
 i58 = i62 + 100 | 0;
 i55 = i59 + 8 | 0;
 i5 = HEAP32[i55 >> 2] | 0;
 i29 = i6 + 4 | 0;
 i30 = HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24;
 i1 = HEAP32[i30 >> 2] | 0;
 L1 : do if (!i1) i53 = 0; else {
  i3 = i6 + 48 | 0;
  i4 = i6 + 16 | 0;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) {
    i53 = 0;
    break L1;
   }
   if (!(_strcmp(HEAP32[i1 + 12 >> 2] | 0, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) | 0)) {
    i2 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
    if (!i2) {
     i53 = i1;
     break L1;
    }
    i53 = i2 + 12 | 0;
    if (!(_strcmp(HEAP32[i1 + 8 >> 2] | 0, HEAPU8[i53 >> 0] | HEAPU8[i53 + 1 >> 0] << 8 | HEAPU8[i53 + 2 >> 0] << 16 | HEAPU8[i53 + 3 >> 0] << 24) | 0)) {
     i53 = i2 + 16 | 0;
     if (!(_strcmp(HEAP32[i1 + 4 >> 2] | 0, HEAPU8[i53 >> 0] | HEAPU8[i53 + 1 >> 0] << 8 | HEAPU8[i53 + 2 >> 0] << 16 | HEAPU8[i53 + 3 >> 0] << 24) | 0)) {
      i53 = i1;
      break L1;
     }
    }
   }
   i1 = i1 + 424 | 0;
  }
 } while (0);
 i47 = _malloc(i56 << 2) | 0;
 i48 = _calloc(i56 + 1 | 0, 4) | 0;
 i32 = i54 + 8 | 0;
 HEAP32[i32 >> 2] = 0;
 i23 = i54 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i54 >> 2] = _malloc(i5 << 2) | 0;
 i24 = i59 + 16 | 0;
 i27 = i59 + 20 | 0;
 i2 = HEAP32[i24 >> 2] | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) break;
  i3 = HEAP32[i27 >> 2] | 0;
  if (!(HEAP32[i3 + (i1 * 24 | 0) >> 2] | 0)) {
   i34 = _malloc(12) | 0;
   HEAP32[i48 + (HEAP32[i3 + (i1 * 24 | 0) + 12 >> 2] << 2) >> 2] = i34;
   HEAP32[i34 + 8 >> 2] = 4;
   HEAP32[i34 + 4 >> 2] = 1;
   i35 = _malloc(4) | 0;
   HEAP32[i34 >> 2] = i35;
   HEAP32[i35 >> 2] = HEAP32[i3 + (i1 * 24 | 0) + 20 >> 2];
  }
  i1 = i1 + 1 | 0;
 }
 HEAP32[i61 + 8 >> 2] = 32;
 i25 = i61 + 12 | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i61 >> 2] = _malloc(128) | 0;
 i34 = i61 + 4 | 0;
 HEAP32[i34 >> 2] = _malloc(128) | 0;
 HEAP32[i49 + 8 >> 2] = 16;
 i18 = i49 + 12 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i49 >> 2] = _malloc(64) | 0;
 i26 = i49 + 4 | 0;
 HEAP32[i26 >> 2] = _malloc(64) | 0;
 HEAP32[i33 >> 2] = 0;
 i35 = (i53 | 0) != 0;
 i19 = i53 + 20 | 0;
 i20 = i6 + 36 | 0;
 i21 = i6 + 40 | 0;
 i22 = i6 + 48 | 0;
 i17 = i6 + 64 | 0;
 i3 = 0;
 i6 = 0;
 i5 = -1;
 i2 = 0;
 i14 = 0;
 i4 = 0;
 i1 = 0;
 L19 : while (1) {
  HEAP32[i47 + (i4 << 2) >> 2] = i1;
  i8 = i4 + 1 | 0;
  HEAP32[i33 >> 2] = i8;
  i7 = HEAP8[i28 + i4 >> 0] | 0;
  if (i35) if ((i6 | 0) < (HEAP32[i19 >> 2] | 0)) {
   i15 = (HEAP32[i53 + 24 + (i6 << 2) >> 2] | 0) == (i4 | 0);
   i16 = i6 + (i15 & 1) | 0;
   i15 = i15 ? i6 : -1;
  } else {
   i16 = i6;
   i15 = i5;
  } else {
   i16 = i6;
   i15 = i5;
  }
  i9 = i7 & 255;
  L25 : do switch (i7 << 24 >> 24) {
  case 1:
   {
    i52 = 20;
    break L19;
   }
  case 0:
   {
    _PushU32_(i61, 0, i15);
    i4 = i14;
    break;
   }
  case 20:
   {
    _PushU32_(i61, 16, i15);
    _PushStackType_(i54, HEAP32[HEAP32[8003] >> 2] | 0);
    i4 = i14;
    break;
   }
  case 37:
   {
    i1 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
    _PushStackType_(i54, i3);
    _PushStackType_(i54, i3);
    i1 = i3 + 68 | 0;
    switch (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24 | 0) {
    case 4:
     {
      _PushU32_(i61, 43, i15);
      i4 = i14;
      break L25;
     }
    case 8:
     {
      _PushU32_(i61, 44, i15);
      i4 = i14;
      break L25;
     }
    default:
     {
      _PushU32_(i61, 20, i15);
      _PushU32_(i61, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, -1);
      i4 = i14;
      break L25;
     }
    }
   }
  case 38:
   {
    i1 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
    i1 = i3 + 68 | 0;
    if ((HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24 | 0) == 4) {
     _PushU32_(i61, 46, i15);
     i4 = i14;
     break L25;
    } else {
     _PushU32_(i61, 21, i15);
     _PushU32_(i61, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, -1);
     i4 = i14;
     break L25;
    }
   }
  case 30:
  case 29:
  case 28:
  case 27:
  case 26:
  case 25:
  case 24:
  case 23:
  case 22:
  case 21:
   {
    i1 = (i7 << 24 >> 24) + -22 | 0;
    i52 = 32;
    break;
   }
  case 31:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i1 = HEAP8[i28 + i8 >> 0] | 0;
    i52 = 32;
    break;
   }
  case 32:
   {
    i1 = _GetUnalignedU32(i28, i33) | 0;
    i52 = 32;
    break;
   }
  case 33:
   {
    _PushU32_(i61, 41, i15);
    i4 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i4;
    _PushU32_(i61, i4, -1);
    i4 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i4;
    _PushU32_(i61, i4, -1);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 96 >> 2] | 0);
    i4 = i14;
    break;
   }
  case 34:
   {
    i4 = _GetUnalignedU32(i28, i33) | 0;
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 88 >> 2] | 0);
    _PushU32_(i61, 47, i15);
    _PushU32_(i61, i4, -1);
    i4 = i14;
    break;
   }
  case 35:
   {
    i13 = _GetUnalignedU32(i28, i33) | 0;
    i4 = _GetUnalignedU32(i28, i33) | 0;
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 92 >> 2] | 0);
    _PushU32_(i61, 175, i15);
    _PushU32_(i61, i13, -1);
    _PushU32_(i61, i4, -1);
    i4 = i14;
    break;
   }
  case 5:
  case 4:
  case 3:
  case 2:
   {
    i1 = i9 + -2 | 0;
    i52 = 41;
    break;
   }
  case 14:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i1 = HEAPU8[i28 + i8 >> 0] | 0;
    i52 = 41;
    break;
   }
  case 15:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    HEAP32[i58 >> 2] = HEAPU8[i28 + i8 >> 0];
    _PushU32_(i61, 9, i15);
    _PushU32_(i61, HEAP32[(HEAPU8[i20 >> 0] | HEAPU8[i20 + 1 >> 0] << 8 | HEAPU8[i20 + 2 >> 0] << 16 | HEAPU8[i20 + 3 >> 0] << 24) + ((HEAP32[i58 >> 2] | 0) * 12 | 0) + 4 >> 2] | 0, -1);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0);
    i4 = i14;
    break;
   }
  case 16:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i1 = HEAPU8[i28 + i8 >> 0] | 0;
    HEAP32[i58 >> 2] = i1;
    i13 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i13 + (i3 << 2) >> 2] | 0;
    i1 = HEAP32[(HEAPU8[i20 >> 0] | HEAPU8[i20 + 1 >> 0] << 8 | HEAPU8[i20 + 2 >> 0] << 16 | HEAPU8[i20 + 3 >> 0] << 24) + (i1 * 12 | 0) + 4 >> 2] | 0;
    i13 = i3 + 68 | 0;
    if (i1 >>> 0 < 32 ? (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == 4 : 0) {
     _PushU32_(i61, (i1 >>> 2) + 303 | 0, i15);
     i4 = i14;
     break L25;
    }
    i13 = i3 + 35 | 0;
    _PushU32_(i61, (HEAPU8[i13 >> 0] | 0) + 56 | 0, i15);
    _PushU32_(i61, i1, -1);
    if ((HEAP8[i13 >> 0] | 0) == 7) {
     _PushSizeT_(i61, i3);
     i4 = i14;
    } else i4 = i14;
    break;
   }
  case 9:
  case 8:
  case 7:
  case 6:
   {
    i1 = i9 + -6 | 0;
    HEAP32[i58 >> 2] = i1;
    i52 = 53;
    break;
   }
  case 17:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i1 = HEAPU8[i28 + i8 >> 0] | 0;
    HEAP32[i58 >> 2] = i1;
    i52 = 53;
    break;
   }
  case 13:
  case 12:
  case 11:
  case 10:
   {
    i1 = i9 + -10 | 0;
    HEAP32[i58 >> 2] = i1;
    i52 = 60;
    break;
   }
  case 19:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i1 = HEAPU8[i28 + i8 >> 0] | 0;
    HEAP32[i58 >> 2] = i1;
    i52 = 60;
    break;
   }
  case 18:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    HEAP32[i58 >> 2] = HEAPU8[i28 + i8 >> 0];
    _PushU32_(i61, 9, i15);
    _PushU32_(i61, (HEAP32[i31 + ((HEAP32[i58 >> 2] | 0) * 12 | 0) + 4 >> 2] | 0) + (HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24) | 0, -1);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0);
    i4 = i14;
    break;
   }
  case 70:
   {
    HEAP32[i58 >> 2] = 5;
    i52 = 76;
    break;
   }
  case 71:
   {
    HEAP32[i58 >> 2] = 4;
    i52 = 76;
    break;
   }
  case 72:
   {
    HEAP32[i58 >> 2] = 7;
    i52 = 76;
    break;
   }
  case 73:
   {
    HEAP32[i58 >> 2] = 14;
    i52 = 76;
    break;
   }
  case 74:
   {
    HEAP32[i58 >> 2] = 8;
    i52 = 76;
    break;
   }
  case 75:
   {
    HEAP32[i58 >> 2] = 13;
    i52 = 76;
    break;
   }
  case 76:
   {
    HEAP32[i58 >> 2] = 24;
    i52 = 76;
    break;
   }
  case 78:
   {
    HEAP32[i58 >> 2] = 22;
    i52 = 76;
    break;
   }
  case 79:
   {
    HEAP32[i58 >> 2] = 23;
    i52 = 76;
    break;
   }
  case 80:
   {
    HEAP32[i58 >> 2] = 0;
    i52 = 76;
    break;
   }
  case 77:
   {
    HEAP32[i58 >> 2] = 10;
    i52 = 76;
    break;
   }
  case 87:
  case 86:
  case 85:
  case 84:
  case 83:
  case 82:
  case 81:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, i9 + 109 | 0, i15);
    i4 = i14;
    break;
   }
  case 42:
   {
    _PushU32_(i61, 1, i15);
    _RestoreTypeStack(i54, HEAP32[i48 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i4 = i14;
    break;
   }
  case 111:
  case 40:
   {
    i4 = 0;
    i8 = i7;
    i52 = 79;
    break;
   }
  case 43:
   {
    i4 = i4 + 2 | 0;
    HEAP32[i33 >> 2] = i4;
    i1 = HEAP8[i28 + i8 >> 0] | 0;
    i52 = 126;
    break;
   }
  case 56:
   {
    i1 = _GetUnalignedU32(i28, i33) | 0;
    i4 = HEAP32[i33 >> 2] | 0;
    i52 = 126;
    break;
   }
  case 69:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i5 = _GetUnalignedU32(i28, i33) | 0;
    i6 = (HEAP32[i33 >> 2] | 0) + (i5 << 2) | 0;
    _PushU32_(i61, 31, i15);
    _PushU32_(i61, i5, -1);
    i4 = 0;
    while (1) {
     if ((i4 | 0) == (i5 | 0)) {
      i4 = i14;
      break L25;
     }
     HEAP32[i58 >> 2] = i6 + (_GetUnalignedU32(i28, i33) | 0);
     _PushU32_(i49, HEAP32[i25 >> 2] | 0, -1);
     i1 = HEAP32[i58 >> 2] | 0;
     if (i1 >>> 0 > (HEAP32[i33 >> 2] | 0) >>> 0) {
      _DeepCopyTypeStack(i48, i1, i54);
      i1 = HEAP32[i58 >> 2] | 0;
     }
     _PushU32_(i61, i1, -1);
     i4 = i4 + 1 | 0;
    }
   }
  case 45:
  case 44:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i5 = -44;
    i1 = HEAP8[i28 + i8 >> 0] | 0;
    i52 = 136;
    break;
   }
  case 58:
  case 57:
   {
    i5 = -57;
    i1 = _GetUnalignedU32(i28, i33) | 0;
    i52 = 136;
    break;
   }
  case 55:
  case 54:
  case 53:
  case 52:
  case 51:
  case 50:
  case 49:
  case 48:
  case 47:
  case 46:
   {
    i6 = i4 + 2 | 0;
    HEAP32[i33 >> 2] = i6;
    i7 = -46;
    i1 = HEAP8[i28 + i8 >> 0] | 0;
    i52 = 143;
    break;
   }
  case 68:
  case 67:
  case 66:
  case 65:
  case 64:
  case 63:
  case 62:
  case 61:
  case 60:
  case 59:
   {
    i1 = _GetUnalignedU32(i28, i33) | 0;
    i7 = -59;
    i6 = HEAP32[i33 >> 2] | 0;
    i52 = 143;
    break;
   }
  case -37:
  case -38:
  case -39:
  case -40:
  case -41:
  case -42:
   {
    i1 = 132;
    i52 = 162;
    break;
   }
  case 97:
  case 96:
  case 95:
  case 94:
  case 93:
  case 92:
  case 91:
  case 90:
  case 89:
  case 88:
   {
    i1 = 0;
    i52 = 162;
    break;
   }
  case 102:
  case 101:
   {
    i13 = HEAP32[i54 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP8[(HEAP32[i13 + (i1 << 2) >> 2] | 0) + 35 >> 0] | 0;
    switch (i1 << 24 >> 24) {
    case 1:
     {
      _PushU32_(i61, i9 + 37 | 0, i15);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    case 0:
     {
      _PushU32_(i61, i9 + 39 | 0, i15);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 96 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    case 6:
     {
      _PushU32_(i61, 142, i15);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 88 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    case 3:
     {
      _PushU32_(i61, 143, i15);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 92 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    default:
     {
      i52 = 183;
      break L19;
     }
    }
   }
  case 100:
  case 99:
  case 98:
   {
    i13 = HEAP32[i54 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -2 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP32[i13 + (i1 << 2) >> 2] | 0;
    switch (HEAP8[i1 + 35 >> 0] | 0) {
    case 1:
     {
      _PushU32_(i61, i9 + 66 | 0, i15);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    case 0:
     {
      _PushU32_(i61, i9 + 69 | 0, i15);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 96 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    default:
     {
      i52 = 187;
      break L19;
     }
    }
   }
  case -126:
  case -77:
  case 103:
   {
    i6 = 0;
    i1 = 5;
    i2 = 8;
    i52 = 197;
    break;
   }
  case -125:
  case -75:
  case 104:
   {
    i6 = 0;
    i1 = 7;
    i2 = 16;
    i52 = 197;
    break;
   }
  case -118:
  case -44:
  case -45:
  case -124:
  case -73:
  case 105:
   {
    i6 = 0;
    i1 = 8;
    i2 = 32;
    i52 = 197;
    break;
   }
  case -122:
  case -76:
  case -46:
   {
    i1 = 4;
    i2 = 8;
    i52 = 192;
    break;
   }
  case -121:
  case -74:
  case -47:
   {
    i1 = 14;
    i2 = 16;
    i52 = 192;
    break;
   }
  case -117:
  case -43:
  case -32:
  case -120:
  case -72:
  case 109:
   {
    i1 = 13;
    i2 = 32;
    i52 = 192;
    break;
   }
  case -123:
  case -71:
  case 106:
   {
    i6 = 2;
    i1 = 24;
    i52 = 197;
    break;
   }
  case -119:
  case -70:
  case 110:
   {
    i6 = 3;
    i1 = 25;
    i52 = 197;
    break;
   }
  case 107:
   {
    i6 = 4;
    i1 = 22;
    i52 = 197;
    break;
   }
  case 118:
  case 108:
   {
    i6 = 5;
    i1 = 23;
    i52 = 197;
    break;
   }
  case 113:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i4 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    _PushU32_(i61, 29, i15);
    _PushSizeT_(i61, i4);
    _PushStackType_(i54, i4);
    i4 = i14;
    break;
   }
  case -127:
   {
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    if (HEAP8[i1 + 34 >> 0] | 0) {
     i1 = i1 + 64 | 0;
     if ((HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24 | 0) != 4) {
      _PushU32_(i61, 22, i15);
      _PushU32_(i61, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, -1);
      i4 = i14;
      break L25;
     }
    }
    _PushU32_(i61, 190, i15);
    i4 = i14;
    break;
   }
  case 114:
   {
    HEAP32[i58 >> 2] = (_GetUnalignedU32(i28, i33) | 0) & 16777215;
    _PushU32_(i61, 4, i15);
    _PushU32_(i61, HEAP32[i58 >> 2] | 0, -1);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 36 >> 2] | 0);
    i4 = i14;
    break;
   }
  case 115:
   {
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i4 = _MetaData_GetMethodDefFromDefRefOrSpec(i30, i13, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    if (!(HEAP8[i4 + 32 >> 0] | 0)) {
     i1 = _MetaData_GetTypeDefFromMethodDef(i4) | 0;
     if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    }
    i1 = i4 + 48 | 0;
    if (!(HEAP8[(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) + 34 >> 0] | 0)) _PushU32_(i61, 8, i15); else _PushU32_(i61, 14, i15);
    i13 = i4 + 34 | 0;
    HEAP32[i23 >> 2] = 1 - ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8) & 65535) + (HEAP32[i23 >> 2] | 0);
    _PushSizeT_(i61, i4);
    _PushStackType_(i54, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24);
    i4 = i14;
    break;
   }
  case 116:
   {
    _PushU32_(i61, 34, i15);
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    _PushSizeT_(i61, _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0);
    i4 = i14;
    break;
   }
  case 117:
   {
    _PushU32_(i61, 15, i15);
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    _PushSizeT_(i61, _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0);
    i4 = i14;
    break;
   }
  case -115:
   {
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i61, 13, i15);
    if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i4 = _Type_GetArrayTypeDef(i1, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    _PushSizeT_(i61, i4);
    _PushStackType_(i54, i4);
    i4 = i14;
    break;
   }
  case -114:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i61, 30, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -107:
  case -108:
  case -109:
  case -110:
  case -111:
  case -112:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, i9 + 80 | 0, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -106:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, 230, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 96 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -104:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, 231, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 88 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -103:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, 232, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 92 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -102:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, 229, i15);
    _PushStackType_(i54, HEAP32[HEAP32[8003] >> 2] | 0);
    i4 = i14;
    break;
   }
  case -93:
   {
    i4 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i4;
    i3 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i3 = _MetaData_GetTypeDefFromDefRefOrSpec(i30, i4, HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i61, 35, i15);
    i4 = i3 + 68 | 0;
    _PushU32_(i61, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, -1);
    _PushStackType_(i54, i3);
    i4 = i14;
    break;
   }
  case -113:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _GetUnalignedU32(i28, i33) | 0;
    _PushU32_(i61, 32, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -94:
  case -96:
  case -98:
  case -99:
  case -100:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -3;
    _PushU32_(i61, 222, i15);
    i4 = i14;
    break;
   }
  case -95:
  case -97:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -3;
    _PushU32_(i61, 223, i15);
    i4 = i14;
    break;
   }
  case -92:
   {
    _GetUnalignedU32(i28, i33) | 0;
    i4 = HEAP32[i23 >> 2] | 0;
    i3 = HEAP32[(HEAP32[i54 >> 2] | 0) + (i4 + -1 << 2) >> 2] | 0;
    HEAP32[i23 >> 2] = i4 + -3;
    _PushU32_(i61, 24, i15);
    i4 = i3 + 68 | 0;
    _PushU32_(i61, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, -1);
    i4 = i14;
    break;
   }
  case 125:
   {
    i13 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i13 + (i3 << 2) >> 2] | 0;
    _PushU32_(i61, (HEAPU8[i3 + 35 >> 0] | 0) + 72 | 0, i15);
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    _PushSizeT_(i61, _MetaData_GetFieldDefFromDefOrRef(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0);
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i4 = i14;
    break;
   }
  case 123:
   {
    i1 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i1;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i4 = _MetaData_GetFieldDefFromDefOrRef(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i1, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    i1 = _MetaData_GetTypeDefFromFieldDef(i4) | 0;
    if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    i1 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
    i1 = HEAP8[i3 + 35 >> 0] | 0;
    L139 : do switch (i1 << 24 >> 24) {
    case 5:
    case 4:
    case 6:
    case 1:
    case 2:
     {
      i13 = i4 + 32 | 0;
      if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) >>> 0 < 5) {
       _PushU32_(i61, 315, i15);
       i13 = i4 + 28 | 0;
       _PushU32_(i61, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, -1);
       break L139;
      } else {
       _PushU32_(i61, 37, i15);
       _PushSizeT_(i61, i4);
       break L139;
      }
     }
    case 3:
    case 0:
     {
      _PushU32_(i61, 316, i15);
      i13 = i4 + 28 | 0;
      _PushU32_(i61, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, -1);
      break;
     }
    case 7:
     {
      _PushU32_(i61, 36, i15);
      i13 = i3 + 68 | 0;
      _PushU32_(i61, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, -1);
      _PushSizeT_(i61, i4);
      break;
     }
    default:
     {
      i52 = 251;
      break L19;
     }
    } while (0);
    i4 = i4 + 20 | 0;
    _PushStackType_(i54, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24);
    i4 = i14;
    break;
   }
  case 124:
   {
    i4 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i4;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i4, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    i4 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i4 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i4, 0, 0);
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i61, 19, i15);
    i4 = i1 + 28 | 0;
    _PushU32_(i61, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, -1);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -128:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i3 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i3;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i3, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    i3 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    i3 = i1 + 20 | 0;
    i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
    _PushU32_(i61, (HEAPU8[i3 + 35 >> 0] | 0) + 96 | 0, i15);
    _PushSizeT_(i61, i1);
    i4 = i14;
    break;
   }
  case 126:
   {
    i3 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i3;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i3, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    i3 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    i3 = i1 + 20 | 0;
    i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
    _PushU32_(i61, (HEAPU8[i3 + 35 >> 0] | 0) + 80 | 0, i15);
    _PushSizeT_(i61, i1);
    _PushStackType_(i54, i3);
    i4 = i14;
    break;
   }
  case 127:
   {
    i4 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i4;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i4, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    i4 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i4 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i4, 0, 0);
    _PushU32_(i61, 45, i15);
    _PushSizeT_(i61, i1);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0);
    i4 = i14;
    break;
   }
  case -116:
   {
    i13 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i13 + (i3 << 2) >> 2] | 0;
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    i13 = i1 + 88 | 0;
    if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 184 >> 2] | 0)) {
     _PushU32_(i61, 174, i15);
     i13 = i1 + 92 | 0;
     _PushSizeT_(i61, HEAP32[(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) >> 2] | 0);
    } else {
     _PushU32_(i61, (HEAPU8[i3 + 35 >> 0] | 0) + 104 | 0, i15);
     _PushSizeT_(i61, i1);
    }
    _PushStackType_(i54, HEAP32[HEAP32[8003] >> 2] | 0);
    i4 = i14;
    break;
   }
  case -91:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    i13 = i1 + 88 | 0;
    do if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 184 >> 2] | 0)) {
     _PushU32_(i61, 218, i15);
     i13 = i1 + 92 | 0;
     _PushSizeT_(i61, HEAP32[(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) >> 2] | 0);
    } else if (!(HEAP8[i1 + 34 >> 0] | 0)) {
     _PushU32_(i61, 18, i15);
     break;
    } else {
     _PushU32_(i61, 17, i15);
     break;
    } while (0);
    _PushStackType_(i54, i1);
    i4 = i14;
    break;
   }
  case -48:
   {
    i13 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i13;
    i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i4 = _MetaData_GetTypeMethodField(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, i58, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    _PushU32_(i61, (HEAP32[i58 >> 2] | 0) + 176 | 0, i15);
    _PushSizeT_(i61, i4);
    i4 = HEAP32[i58 >> 2] | 0;
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + (((i4 | 0) == 0 ? 28 : (i4 | 0) == 1 ? 11 : 29) << 2) >> 2] | 0);
    i4 = i14;
    break;
   }
  case 122:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i61, 27, i15);
    _RestoreTypeStack(i54, HEAP32[i48 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i4 = i14;
    break;
   }
  case -34:
   {
    i1 = i4 + 2 | 0;
    HEAP32[i33 >> 2] = i1;
    i4 = HEAP8[i28 + i8 >> 0] | 0;
    i52 = 281;
    break;
   }
  case -35:
   {
    i4 = _GetUnalignedU32(i28, i33) | 0;
    i1 = HEAP32[i33 >> 2] | 0;
    i52 = 281;
    break;
   }
  case -36:
   {
    _PushU32_(i61, 26, i15);
    _RestoreTypeStack(i54, HEAP32[i48 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i4 = i14;
    break;
   }
  case -2:
   {
    HEAP32[i33 >> 2] = i4 + 2;
    i13 = HEAP8[i28 + i8 >> 0] | 0;
    i5 = i13 & 255;
    switch (i13 << 24 >> 24) {
    case 19:
    case 30:
     {
      i4 = i14;
      break L25;
     }
    case 21:
     {
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
      i13 = _GetUnalignedU32(i28, i33) | 0;
      HEAP32[i58 >> 2] = i13;
      i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
      i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
      if (!(HEAP8[i1 + 34 >> 0] | 0)) {
       _PushU32_(i61, 42, i15);
       i4 = i14;
       break L25;
      } else {
       _PushU32_(i61, 12, i15);
       _PushSizeT_(i61, i1);
       i4 = i14;
       break L25;
      }
     }
    case 7:
    case 6:
     {
      i13 = _GetUnalignedU32(i28, i33) | 0;
      HEAP32[i58 >> 2] = i13;
      i4 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
      i4 = _MetaData_GetMethodDefFromDefRefOrSpec(HEAPU8[i29 >> 0] | HEAPU8[i29 + 1 >> 0] << 8 | HEAPU8[i29 + 2 >> 0] << 16 | HEAPU8[i29 + 3 >> 0] << 24, i13, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
      _PushU32_(i61, 38, i15);
      _PushSizeT_(i61, i4);
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
     {
      i13 = HEAP32[i54 >> 2] | 0;
      i4 = HEAP32[i23 >> 2] | 0;
      i1 = HEAP32[i13 + (i4 + -1 << 2) >> 2] | 0;
      i4 = i4 + -2 | 0;
      HEAP32[i23 >> 2] = i4;
      i4 = HEAP32[i13 + (i4 << 2) >> 2] | 0;
      switch (HEAP8[i4 + 35 >> 0] | 0) {
      case 1:
       {
        if ((HEAP8[i1 + 35 >> 0] | 0) != 1) {
         i52 = 303;
         break L19;
        }
        _PushU32_(i61, i5 + 111 | 0, i15);
        break;
       }
      case 0:
       {
        if (HEAP8[i1 + 35 >> 0] | 0) {
         i52 = 303;
         break L19;
        }
        _PushU32_(i61, i5 + 116 | 0, i15);
        break;
       }
      case 6:
       {
        if ((HEAP8[i1 + 35 >> 0] | 0) != 6) {
         i52 = 303;
         break L19;
        }
        _PushU32_(i61, i5 + 249 | 0, i15);
        break;
       }
      case 3:
       {
        if ((HEAP8[i1 + 35 >> 0] | 0) != 3) {
         i52 = 303;
         break L19;
        }
        _PushU32_(i61, i5 + 271 | 0, i15);
        break;
       }
      case 5:
       {
        if ((HEAP8[i1 + 35 >> 0] | 0) != 5) {
         i52 = 303;
         break L19;
        }
        _PushU32_(i61, i5 + 111 | 0, i15);
        break;
       }
      case 4:
       {
        if ((HEAP8[i1 + 35 >> 0] | 0) != 4) {
         i52 = 303;
         break L19;
        }
        _PushU32_(i61, i5 + 111 | 0, i15);
        break;
       }
      default:
       {
        i52 = 303;
        break L19;
       }
      }
      _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0);
      i4 = i14;
      break L25;
     }
    case 12:
     {
      i1 = _GetUnalignedU16(i28, i33) | 0;
      HEAP32[i58 >> 2] = i1;
      i52 = 53;
      break L25;
     }
    case 14:
     {
      i1 = _GetUnalignedU16(i28, i33) | 0;
      HEAP32[i58 >> 2] = i1;
      i52 = 60;
      break L25;
     }
    case 26:
     {
      _PushU32_(i61, 28, i15);
      i4 = i14;
      break L25;
     }
    case 22:
     {
      i4 = _GetUnalignedU32(i28, i33) | 0;
      i8 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i8 + 1;
      i8 = HEAP8[i28 + i8 >> 0] | 0;
      i52 = 79;
      break L25;
     }
    case 20:
     {
      _PushU32_(i61, 358, i15);
      i4 = i14;
      break L25;
     }
    default:
     {
      i52 = 310;
      break L19;
     }
    }
   }
  default:
   {
    i52 = 311;
    break L19;
   }
  } while (0);
  switch (i52 | 0) {
  case 32:
   {
    i52 = 0;
    if ((i1 + 1 | 0) >>> 0 < 4) _PushU32_(i61, i1 + 312 | 0, i15); else {
     _PushU32_(i61, 2, i15);
     _PushU32_(i61, i1, -1);
    }
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0);
    i4 = i14;
    break;
   }
  case 41:
   {
    i52 = 0;
    HEAP32[i58 >> 2] = i1;
    i13 = HEAPU8[i20 >> 0] | HEAPU8[i20 + 1 >> 0] << 8 | HEAPU8[i20 + 2 >> 0] << 16 | HEAPU8[i20 + 3 >> 0] << 24;
    i3 = HEAP32[i13 + (i1 * 12 | 0) >> 2] | 0;
    i1 = HEAP32[i13 + (i1 * 12 | 0) + 4 >> 2] | 0;
    i13 = i3 + 68 | 0;
    if (i1 >>> 0 < 32 ? (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == 4 : 0) _PushU32_(i61, (i1 >>> 2) + 295 | 0, i15); else {
     i13 = i3 + 35 | 0;
     _PushU32_(i61, (HEAPU8[i13 >> 0] | 0) + 48 | 0, i15);
     _PushU32_(i61, i1, -1);
     if ((HEAP8[i13 >> 0] | 0) == 7) _PushSizeT_(i61, i3);
    }
    _PushStackType_(i54, i3);
    i4 = i14;
    break;
   }
  case 53:
   {
    i52 = 0;
    i3 = HEAP32[i31 + (i1 * 12 | 0) >> 2] | 0;
    i1 = (HEAP32[i31 + (i1 * 12 | 0) + 4 >> 2] | 0) + (HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24) | 0;
    i13 = i3 + 68 | 0;
    if (i1 >>> 0 < 32 ? (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == 4 : 0) _PushU32_(i61, (i1 >>> 2) + 295 | 0, i15); else {
     i13 = i3 + 35 | 0;
     _PushU32_(i61, (HEAPU8[i13 >> 0] | 0) + 48 | 0, i15);
     _PushU32_(i61, i1, -1);
     if ((HEAP8[i13 >> 0] | 0) == 7) _PushSizeT_(i61, i3);
    }
    _PushStackType_(i54, i3);
    i4 = i14;
    break;
   }
  case 60:
   {
    i52 = 0;
    i13 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i13 + (i3 << 2) >> 2] | 0;
    i1 = (HEAP32[i31 + (i1 * 12 | 0) + 4 >> 2] | 0) + (HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24) | 0;
    i13 = i3 + 68 | 0;
    if (i1 >>> 0 < 32 ? (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == 4 : 0) {
     _PushU32_(i61, (i1 >>> 2) + 303 | 0, i15);
     i4 = i14;
     break;
    }
    i13 = i3 + 35 | 0;
    _PushU32_(i61, (HEAPU8[i13 >> 0] | 0) + 56 | 0, i15);
    _PushU32_(i61, i1, -1);
    if ((HEAP8[i13 >> 0] | 0) == 7) {
     _PushSizeT_(i61, i3);
     i4 = i14;
    } else i4 = i14;
    break;
   }
  case 76:
   {
    i52 = 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i61, i9 + 109 | 0, i15);
    _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + (HEAP32[i58 >> 2] << 2) >> 2] | 0);
    i4 = i14;
    break;
   }
  case 79:
   {
    i52 = 0;
    i12 = _GetUnalignedU32(i28, i33) | 0;
    HEAP32[i58 >> 2] = i12;
    i13 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
    i13 = _MetaData_GetMethodDefFromDefRefOrSpec(i30, i12, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
    if (!(HEAP8[i13 + 32 >> 0] | 0)) {
     i1 = _MetaData_GetTypeDefFromMethodDef(i13) | 0;
     if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    }
    L287 : do if (!i4) {
     i1 = 0;
     i4 = 0;
     i9 = i13;
    } else {
     i1 = (HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24) + 92 | 0;
     i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i30, i4, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
     if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
     i12 = i13 + 48 | 0;
     i12 = (HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24) + 8 | 0;
     L292 : do if ((HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24) & 32 | 0) {
      i7 = i1 + 72 | 0;
      i7 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
      i9 = i1 + 76 | 0;
      i10 = i1 + 44 | 0;
      i11 = i13 + 48 | 0;
      i12 = i13 + 56 | 0;
      i6 = 0;
      while (1) {
       if (i6 >>> 0 >= i7 >>> 0) break L292;
       i4 = HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24;
       i5 = HEAP32[i4 + (i6 * 12 | 0) + 4 >> 2] | 0;
       if (i5 | 0) if ((HEAP32[i4 + (i6 * 12 | 0) >> 2] | 0) == (HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24 | 0)) {
        i5 = HEAP32[(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24) + (HEAP32[i5 + ((HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24) << 2) >> 2] << 2) >> 2] | 0;
        i4 = i5 + 48 | 0;
        if ((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24 | 0) == (i1 | 0)) {
         i1 = 0;
         i4 = 0;
         i9 = i5;
         i8 = 40;
         break L287;
        }
       }
       i6 = i6 + 1 | 0;
      }
     } while (0);
     if (!(HEAP8[i1 + 34 >> 0] | 0)) {
      i1 = 0;
      i4 = 1;
     } else {
      i4 = i13 + 56 | 0;
      i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
      if ((i4 | 0) == -1) i4 = 0; else {
       i5 = i1 + 44 | 0;
       i5 = HEAP32[(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + (i4 << 2) >> 2] | 0;
       i12 = i5 + 48 | 0;
       if ((HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24 | 0) == (i1 | 0)) {
        i1 = 0;
        i4 = 0;
        i9 = i5;
        i8 = 40;
        break;
       } else i4 = 0;
      }
     }
     i9 = i13;
    } while (0);
    i6 = i9 + 34 | 0;
    i6 = (HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8) & 65535;
    i7 = HEAP32[i54 >> 2] | 0;
    i5 = 0;
    while (1) {
     if ((i5 | 0) == (i6 | 0)) break;
     i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
     HEAP32[i23 >> 2] = i3;
     i3 = HEAP32[i7 + (i3 << 2) >> 2] | 0;
     i5 = i5 + 1 | 0;
    }
    i13 = i9 + 14 | 0;
    if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8) & 16) i3 = HEAP32[HEAP32[8003] >> 2] | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    i5 = i9 + 48 | 0;
    i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
    i13 = i5 + 40 | 0;
    i6 = HEAP32[8003] | 0;
    L317 : do if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == (HEAP32[i6 + 80 >> 2] | 0)) {
     _PushU32_(i61, 39, i15);
     i4 = 0;
    } else {
     if ((i5 | 0) == (HEAP32[i6 + 200 >> 2] | 0)) {
      i13 = i9 + 16 | 0;
      if (!(_strcmp(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, 15569) | 0)) {
       _PushU32_(i61, 356, i15);
       i4 = 1;
       break;
      }
     }
     i5 = HEAP8[i3 + 35 >> 0] | 0;
     switch (i5 << 24 >> 24) {
     case 5:
     case 2:
      {
       if (i4 | 0) {
        _PushU32_(i61, 23, i15);
        i4 = 0;
        break L317;
       }
       if (!i1) {
        _PushU32_(i61, i8 << 24 >> 24 == 40 ? 7 : 5, i15);
        i4 = 0;
        break L317;
       } else {
        _PushU32_(i61, 11, i15);
        _PushSizeT_(i61, i1);
        i4 = 0;
        break L317;
       }
      }
     case 7:
     case 4:
      {
       if (i4 | 0) {
        _PushU32_(i61, 23, i15);
        i4 = 0;
        break L317;
       }
       if (!i1) {
        _PushU32_(i61, 10, i15);
        i4 = 0;
        break L317;
       } else {
        _PushU32_(i61, 11, i15);
        _PushSizeT_(i61, i1);
        i4 = 0;
        break L317;
       }
      }
     default:
      {
       i52 = 119;
       break L19;
      }
     }
    } while (0);
    _PushSizeT_(i61, i9);
    i1 = i9 + 44 | 0;
    i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
    if (i1 | 0) _PushStackType_(i54, i1);
    if (!(i4 << 24 >> 24)) i4 = i14; else {
     _PushU32_(i61, 357, i15);
     i4 = i14;
    }
    break;
   }
  case 126:
   {
    i52 = 0;
    i1 = i4 + i1 | 0;
    HEAP32[i58 >> 2] = i1;
    if (i1 >>> 0 > i4 >>> 0) _DeepCopyTypeStack(i48, i1, i54);
    _PushU32_(i61, 3, i15);
    _PushU32_(i49, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i61, HEAP32[i58 >> 2] | 0, -1);
    _RestoreTypeStack(i54, HEAP32[i48 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i4 = i14;
    break;
   }
  case 136:
   {
    i52 = 0;
    HEAP32[i58 >> 2] = i1;
    i4 = HEAP32[i54 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i4 + (i3 << 2) >> 2] | 0;
    i4 = i3 + 68 | 0;
    i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
    if (i4 >>> 0 > 8) {
     i52 = 137;
     break L19;
    }
    i13 = HEAP32[i33 >> 2] | 0;
    i1 = i1 + i13 | 0;
    HEAP32[i58 >> 2] = i1;
    if (i1 >>> 0 > i13 >>> 0) _DeepCopyTypeStack(i48, i1, i54);
    _PushU32_(i61, i5 + i9 + ((i4 | 0) == 4 ? 170 : 172) | 0, i15);
    _PushU32_(i49, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i61, HEAP32[i58 >> 2] | 0, -1);
    i4 = i14;
    break;
   }
  case 143:
   {
    i52 = 0;
    i13 = HEAP32[i54 >> 2] | 0;
    i4 = HEAP32[i23 >> 2] | 0;
    i5 = HEAP32[i13 + (i4 + -1 << 2) >> 2] | 0;
    i4 = i4 + -2 | 0;
    HEAP32[i23 >> 2] = i4;
    i4 = HEAP32[i13 + (i4 << 2) >> 2] | 0;
    i1 = i1 + i6 | 0;
    HEAP32[i58 >> 2] = i1;
    if (i1 >>> 0 > i6 >>> 0) _DeepCopyTypeStack(i48, i1, i54);
    i4 = HEAP8[i4 + 35 >> 0] | 0;
    switch (i4 << 24 >> 24) {
    case 1:
     {
      if ((HEAP8[i5 + 35 >> 0] | 0) != 1) {
       i52 = 156;
       break L19;
      }
      _PushU32_(i61, i9 + 144 + i7 | 0, i15);
      break;
     }
    case 0:
     {
      if (HEAP8[i5 + 35 >> 0] | 0) {
       i52 = 156;
       break L19;
      }
      _PushU32_(i61, i9 + 154 + i7 | 0, i15);
      break;
     }
    case 6:
     {
      if ((HEAP8[i5 + 35 >> 0] | 0) != 6) {
       i52 = 156;
       break L19;
      }
      _PushU32_(i61, i9 + 255 + i7 | 0, i15);
      break;
     }
    case 3:
     {
      if ((HEAP8[i5 + 35 >> 0] | 0) != 3) {
       i52 = 156;
       break L19;
      }
      _PushU32_(i61, i9 + 277 + i7 | 0, i15);
      break;
     }
    case 5:
     {
      if ((HEAP8[i5 + 35 >> 0] | 0) != 5) {
       i52 = 156;
       break L19;
      }
      _PushU32_(i61, i9 + 144 + i7 | 0, i15);
      break;
     }
    case 4:
     {
      i1 = HEAP8[i5 + 35 >> 0] | 0;
      if (i1 << 24 >> 24 != 4) {
       i52 = 159;
       break L19;
      }
      _PushU32_(i61, i9 + 144 + i7 | 0, i15);
      break;
     }
    default:
     {
      i52 = 156;
      break L19;
     }
    }
    _PushU32_(i49, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i61, HEAP32[i58 >> 2] | 0, -1);
    i4 = i14;
    break;
   }
  case 162:
   {
    i52 = 0;
    HEAP32[i58 >> 2] = i1;
    i6 = HEAP32[i54 >> 2] | 0;
    i5 = HEAP32[i23 >> 2] | 0;
    i4 = HEAP32[i6 + (i5 + -1 << 2) >> 2] | 0;
    i5 = i5 + -2 | 0;
    HEAP32[i23 >> 2] = i5;
    i5 = HEAP32[i6 + (i5 << 2) >> 2] | 0;
    i6 = HEAP8[i5 + 35 >> 0] | 0;
    switch (i6 << 24 >> 24) {
    case 1:
     {
      if ((HEAP8[i4 + 35 >> 0] | 0) != 1) {
       i52 = 173;
       break L19;
      }
      _PushU32_(i61, i9 + 40 - i1 | 0, i15);
      break;
     }
    case 0:
     {
      if (HEAP8[i4 + 35 >> 0] | 0) {
       i52 = 173;
       break L19;
      }
      _PushU32_(i61, i9 + 152 - i1 | 0, i15);
      break;
     }
    case 6:
     {
      if ((HEAP8[i4 + 35 >> 0] | 0) != 6) {
       i52 = 173;
       break L19;
      }
      _PushU32_(i61, i9 + 177 - i1 | 0, i15);
      break;
     }
    case 3:
     {
      if ((HEAP8[i4 + 35 >> 0] | 0) != 3) {
       i52 = 173;
       break L19;
      }
      _PushU32_(i61, i9 + 199 - i1 | 0, i15);
      break;
     }
    case 5:
     {
      if ((HEAP8[i4 + 35 >> 0] | 0) != 5) {
       i52 = 173;
       break L19;
      }
      _PushU32_(i61, i9 + 40 - i1 | 0, i15);
      break;
     }
    case 4:
     {
      i1 = HEAP8[i4 + 35 >> 0] | 0;
      if (!((i7 & -2) << 24 >> 24 == 88 & i1 << 24 >> 24 == 1)) {
       i52 = 176;
       break L19;
      }
      _PushU32_(i61, i9 + 40 | 0, i15);
      break;
     }
    default:
     {
      i52 = 173;
      break L19;
     }
    }
    _PushStackType_(i54, i5);
    i4 = i14;
    break;
   }
  case 192:
   {
    i6 = 1;
    i52 = 197;
    break;
   }
  case 281:
   {
    i52 = 0;
    i4 = i1 + i4 | 0;
    HEAP32[i58 >> 2] = i4;
    if (i4 >>> 0 > i1 >>> 0) {
     _DeepCopyTypeStack(i48, i4, i54);
     i1 = HEAP32[i33 >> 2] | 0;
    }
    _RestoreTypeStack(i54, HEAP32[i48 + (i1 << 2) >> 2] | 0);
    _PushU32_(i61, 25, i15);
    _PushU32_(i49, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i61, HEAP32[i58 >> 2] | 0, -1);
    i4 = i14;
    break;
   }
  }
  if ((i52 | 0) == 197) {
   i52 = 0;
   i4 = HEAP32[i54 >> 2] | 0;
   i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
   HEAP32[i23 >> 2] = i3;
   i3 = HEAP32[i4 + (i3 << 2) >> 2] | 0;
   i4 = HEAP8[i3 + 35 >> 0] | 0;
   L346 : do switch (i4 << 24 >> 24) {
   case 0:
    {
     i4 = (i3 | 0) == (HEAP32[(HEAP32[8003] | 0) + 96 >> 2] | 0) ? 332 : 338;
     break;
    }
   case 4:
   case 1:
    {
     i4 = HEAP32[8003] | 0;
     if ((i3 | 0) != (HEAP32[i4 + 16 >> 2] | 0)) if ((i3 | 0) != (HEAP32[i4 + 56 >> 2] | 0)) if ((i3 | 0) != (HEAP32[i4 + 52 >> 2] | 0)) if ((i3 | 0) != (HEAP32[i4 + 180 >> 2] | 0)) {
      i4 = 320;
      break L346;
     }
     i4 = 326;
     break;
    }
   case 3:
    {
     i4 = 350;
     break;
    }
   case 6:
    {
     i4 = 344;
     break;
    }
   default:
    {
     i52 = 205;
     break L19;
    }
   } while (0);
   switch (i6 & 7) {
   case 0:
    {
     i5 = 32 - i2 | 0;
     i52 = 211;
     break;
    }
   case 1:
    {
     i5 = (2 << i2 + -1) + -1 | 0;
     i52 = 211;
     break;
    }
   case 5:
   case 4:
   case 3:
   case 2:
    {
     _PushU32_(i61, i4 + i6 | 0, i15);
     break;
    }
   default:
    {
     i52 = 209;
     break L19;
    }
   }
   if ((i52 | 0) == 211) {
    i52 = 0;
    _PushU32_(i61, i4 + i6 | 0, i15);
    _PushU32_(i61, i5, -1);
   }
   _PushStackType_(i54, HEAP32[(HEAP32[8003] | 0) + (i1 << 2) >> 2] | 0);
  }
  i1 = HEAP32[i33 >> 2] | 0;
  if (i1 >>> 0 >= i56 >>> 0) {
   i52 = 314;
   break;
  }
  i6 = i16;
  i5 = i15;
  i14 = i4;
  i4 = i1;
  i1 = HEAP32[i25 >> 2] | 0;
 }
 switch (i52 | 0) {
 case 20:
  {
   _Crash(15546, i36);
   break;
  }
 case 119:
  {
   HEAP32[i37 >> 2] = i5 & 255;
   _Crash(15576, i37);
   break;
  }
 case 137:
  {
   i62 = i3 + 12 | 0;
   HEAP32[i44 >> 2] = HEAPU8[i62 >> 0] | HEAPU8[i62 + 1 >> 0] << 8 | HEAPU8[i62 + 2 >> 0] << 16 | HEAPU8[i62 + 3 >> 0] << 24;
   _Crash(15629, i44);
   break;
  }
 case 156:
  {
   i1 = HEAP8[i5 + 35 >> 0] | 0;
   i52 = 159;
   break;
  }
 case 173:
  {
   i1 = HEAP8[i4 + 35 >> 0] | 0;
   i52 = 176;
   break;
  }
 case 183:
  {
   HEAP32[i38 >> 2] = i1 & 255;
   _Crash(15824, i38);
   break;
  }
 case 187:
  {
   i62 = i1 + 12 | 0;
   HEAP32[i39 >> 2] = HEAPU8[i62 >> 0] | HEAPU8[i62 + 1 >> 0] << 8 | HEAPU8[i62 + 2 >> 0] << 16 | HEAPU8[i62 + 3 >> 0] << 24;
   _Crash(15881, i39);
   break;
  }
 case 205:
  {
   HEAP32[i40 >> 2] = i4 & 255;
   _Crash(15933, i40);
   break;
  }
 case 209:
  {
   HEAP32[i41 >> 2] = i6;
   _Crash(15974, i41);
   break;
  }
 case 251:
  {
   HEAP32[i42 >> 2] = i1 & 255;
   _Crash(16017, i42);
   break;
  }
 case 303:
  {
   i61 = i4 + 12 | 0;
   i62 = i1 + 12 | 0;
   i62 = HEAPU8[i62 >> 0] | HEAPU8[i62 + 1 >> 0] << 8 | HEAPU8[i62 + 2 >> 0] << 16 | HEAPU8[i62 + 3 >> 0] << 24;
   HEAP32[i43 >> 2] = HEAPU8[i61 >> 0] | HEAPU8[i61 + 1 >> 0] << 8 | HEAPU8[i61 + 2 >> 0] << 16 | HEAPU8[i61 + 3 >> 0] << 24;
   HEAP32[i43 + 4 >> 2] = i62;
   _Crash(16062, i43);
   break;
  }
 case 310:
  {
   HEAP32[i45 >> 2] = i5;
   _Crash(16131, i45);
   break;
  }
 case 311:
  {
   HEAP32[i46 >> 2] = i9;
   _Crash(16186, i46);
   break;
  }
 case 314:
  {
   i3 = HEAP32[i18 >> 2] | 0;
   i4 = HEAP32[i49 >> 2] | 0;
   i2 = HEAP32[i61 >> 2] | 0;
   i1 = 0;
   while (1) {
    if ((i1 | 0) == (i3 | 0)) break;
    i52 = i2 + (HEAP32[i4 + (i1 << 2) >> 2] << 2) | 0;
    HEAP32[i52 >> 2] = HEAP32[i47 + (HEAP32[i52 >> 2] << 2) >> 2];
    i1 = i1 + 1 | 0;
   }
   i2 = HEAP32[i24 >> 2] | 0;
   i1 = 0;
   while (1) {
    if ((i1 | 0) == (i2 | 0)) break;
    i50 = HEAP32[i27 >> 2] | 0;
    i52 = i50 + (i1 * 24 | 0) + 4 | 0;
    i51 = HEAP32[i52 >> 2] | 0;
    i49 = i50 + (i1 * 24 | 0) + 8 | 0;
    HEAP32[i49 >> 2] = HEAP32[i47 + ((HEAP32[i49 >> 2] | 0) + i51 << 2) >> 2];
    HEAP32[i52 >> 2] = HEAP32[i47 + (i51 << 2) >> 2];
    i52 = i50 + (i1 * 24 | 0) + 12 | 0;
    i51 = HEAP32[i52 >> 2] | 0;
    i50 = i50 + (i1 * 24 | 0) + 16 | 0;
    HEAP32[i50 >> 2] = HEAP32[i47 + ((HEAP32[i50 >> 2] | 0) + i51 << 2) >> 2];
    HEAP32[i52 >> 2] = HEAP32[i47 + (i51 << 2) >> 2];
    i1 = i1 + 1 | 0;
   }
   HEAP32[i55 >> 2] = HEAP32[i32 >> 2];
   _free(HEAP32[i54 >> 2] | 0);
   i1 = 0;
   while (1) {
    if (i1 >>> 0 > i56 >>> 0) break;
    _FreeTypeStack(HEAP32[i48 + (i1 << 2) >> 2] | 0);
    i1 = i1 + 1 | 0;
   }
   _free(i48);
   _free(i4);
   _free(HEAP32[i26 >> 2] | 0);
   _free(i47);
   i1 = HEAP32[i25 >> 2] << 2;
   HEAP32[i58 >> 2] = i1;
   if (!i57) {
    i2 = _mallocForever(i1) | 0;
    i1 = HEAP32[i58 >> 2] | 0;
   } else i2 = _malloc(i1) | 0;
   _memcpy(i2 | 0, HEAP32[i61 >> 2] | 0, i1 | 0) | 0;
   HEAP32[i59 + 24 >> 2] = i53;
   if (i35) {
    i59 = _mallocForever(HEAP32[i58 >> 2] | 0) | 0;
    HEAP32[i60 >> 2] = i59;
    _memcpy(i59 | 0, HEAP32[i34 >> 2] | 0, HEAP32[i58 >> 2] | 0) | 0;
   } else HEAP32[i60 >> 2] = 0;
   _free(HEAP32[i61 >> 2] | 0);
   _free(HEAP32[i34 >> 2] | 0);
   STACKTOP = i62;
   return i2 | 0;
  }
 }
 if ((i52 | 0) == 159) {
  HEAP32[i51 >> 2] = i4 & 255;
  HEAP32[i51 + 4 >> 2] = i1 & 255;
  _Crash(15682, i51);
 } else if ((i52 | 0) == 176) {
  HEAP32[i50 >> 2] = i6 & 255;
  HEAP32[i50 + 4 >> 2] = i1 & 255;
  _Crash(15751, i50);
 }
 return 0;
}

function _malloc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i13 = i15;
 do if (i1 >>> 0 < 245) {
  i10 = i1 >>> 0 < 11 ? 16 : i1 + 11 & -8;
  i1 = i10 >>> 3;
  i12 = HEAP32[8019] | 0;
  i2 = i12 >>> i1;
  if (i2 & 3 | 0) {
   i1 = (i2 & 1 ^ 1) + i1 | 0;
   i2 = 32116 + (i1 << 1 << 2) | 0;
   i3 = i2 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i4 + 8 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == (i2 | 0)) HEAP32[8019] = i12 & ~(1 << i1); else {
    HEAP32[i6 + 12 >> 2] = i2;
    HEAP32[i3 >> 2] = i6;
   }
   i14 = i1 << 3;
   HEAP32[i4 + 4 >> 2] = i14 | 3;
   i14 = i4 + i14 + 4 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
   i14 = i5;
   STACKTOP = i15;
   return i14 | 0;
  }
  i11 = HEAP32[8021] | 0;
  if (i10 >>> 0 > i11 >>> 0) {
   if (i2 | 0) {
    i8 = 2 << i1;
    i1 = i2 << i1 & (i8 | 0 - i8);
    i1 = (i1 & 0 - i1) + -1 | 0;
    i8 = i1 >>> 12 & 16;
    i1 = i1 >>> i8;
    i3 = i1 >>> 5 & 8;
    i1 = i1 >>> i3;
    i6 = i1 >>> 2 & 4;
    i1 = i1 >>> i6;
    i2 = i1 >>> 1 & 2;
    i1 = i1 >>> i2;
    i4 = i1 >>> 1 & 1;
    i4 = (i3 | i8 | i6 | i2 | i4) + (i1 >>> i4) | 0;
    i1 = 32116 + (i4 << 1 << 2) | 0;
    i2 = i1 + 8 | 0;
    i6 = HEAP32[i2 >> 2] | 0;
    i8 = i6 + 8 | 0;
    i3 = HEAP32[i8 >> 2] | 0;
    if ((i3 | 0) == (i1 | 0)) {
     i2 = i12 & ~(1 << i4);
     HEAP32[8019] = i2;
    } else {
     HEAP32[i3 + 12 >> 2] = i1;
     HEAP32[i2 >> 2] = i3;
     i2 = i12;
    }
    i14 = i4 << 3;
    i7 = i14 - i10 | 0;
    HEAP32[i6 + 4 >> 2] = i10 | 3;
    i5 = i6 + i10 | 0;
    HEAP32[i5 + 4 >> 2] = i7 | 1;
    HEAP32[i6 + i14 >> 2] = i7;
    if (i11 | 0) {
     i4 = HEAP32[8024] | 0;
     i1 = i11 >>> 3;
     i3 = 32116 + (i1 << 1 << 2) | 0;
     i1 = 1 << i1;
     if (!(i2 & i1)) {
      HEAP32[8019] = i2 | i1;
      i1 = i3;
      i2 = i3 + 8 | 0;
     } else {
      i2 = i3 + 8 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
     }
     HEAP32[i2 >> 2] = i4;
     HEAP32[i1 + 12 >> 2] = i4;
     HEAP32[i4 + 8 >> 2] = i1;
     HEAP32[i4 + 12 >> 2] = i3;
    }
    HEAP32[8021] = i7;
    HEAP32[8024] = i5;
    i14 = i8;
    STACKTOP = i15;
    return i14 | 0;
   }
   i8 = HEAP32[8020] | 0;
   if (!i8) i12 = i10; else {
    i2 = (i8 & 0 - i8) + -1 | 0;
    i7 = i2 >>> 12 & 16;
    i2 = i2 >>> i7;
    i6 = i2 >>> 5 & 8;
    i2 = i2 >>> i6;
    i9 = i2 >>> 2 & 4;
    i2 = i2 >>> i9;
    i3 = i2 >>> 1 & 2;
    i2 = i2 >>> i3;
    i1 = i2 >>> 1 & 1;
    i1 = HEAP32[32380 + ((i6 | i7 | i9 | i3 | i1) + (i2 >>> i1) << 2) >> 2] | 0;
    i2 = (HEAP32[i1 + 4 >> 2] & -8) - i10 | 0;
    i3 = HEAP32[i1 + 16 + (((HEAP32[i1 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i3) {
     i9 = i1;
     i6 = i2;
    } else {
     do {
      i7 = (HEAP32[i3 + 4 >> 2] & -8) - i10 | 0;
      i9 = i7 >>> 0 < i2 >>> 0;
      i2 = i9 ? i7 : i2;
      i1 = i9 ? i3 : i1;
      i3 = HEAP32[i3 + 16 + (((HEAP32[i3 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
     } while ((i3 | 0) != 0);
     i9 = i1;
     i6 = i2;
    }
    i7 = i9 + i10 | 0;
    if (i7 >>> 0 > i9 >>> 0) {
     i5 = HEAP32[i9 + 24 >> 2] | 0;
     i1 = HEAP32[i9 + 12 >> 2] | 0;
     do if ((i1 | 0) == (i9 | 0)) {
      i2 = i9 + 20 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i2 = i9 + 16 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
       if (!i1) {
        i3 = 0;
        break;
       }
      }
      while (1) {
       i3 = i1 + 20 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if (i4 | 0) {
        i1 = i4;
        i2 = i3;
        continue;
       }
       i3 = i1 + 16 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if (!i4) break; else {
        i1 = i4;
        i2 = i3;
       }
      }
      HEAP32[i2 >> 2] = 0;
      i3 = i1;
     } else {
      i3 = HEAP32[i9 + 8 >> 2] | 0;
      HEAP32[i3 + 12 >> 2] = i1;
      HEAP32[i1 + 8 >> 2] = i3;
      i3 = i1;
     } while (0);
     do if (i5 | 0) {
      i1 = HEAP32[i9 + 28 >> 2] | 0;
      i2 = 32380 + (i1 << 2) | 0;
      if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
       HEAP32[i2 >> 2] = i3;
       if (!i3) {
        HEAP32[8020] = i8 & ~(1 << i1);
        break;
       }
      } else {
       HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i9 | 0) & 1) << 2) >> 2] = i3;
       if (!i3) break;
      }
      HEAP32[i3 + 24 >> 2] = i5;
      i1 = HEAP32[i9 + 16 >> 2] | 0;
      if (i1 | 0) {
       HEAP32[i3 + 16 >> 2] = i1;
       HEAP32[i1 + 24 >> 2] = i3;
      }
      i1 = HEAP32[i9 + 20 >> 2] | 0;
      if (i1 | 0) {
       HEAP32[i3 + 20 >> 2] = i1;
       HEAP32[i1 + 24 >> 2] = i3;
      }
     } while (0);
     if (i6 >>> 0 < 16) {
      i14 = i6 + i10 | 0;
      HEAP32[i9 + 4 >> 2] = i14 | 3;
      i14 = i9 + i14 + 4 | 0;
      HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
     } else {
      HEAP32[i9 + 4 >> 2] = i10 | 3;
      HEAP32[i7 + 4 >> 2] = i6 | 1;
      HEAP32[i7 + i6 >> 2] = i6;
      if (i11 | 0) {
       i4 = HEAP32[8024] | 0;
       i1 = i11 >>> 3;
       i3 = 32116 + (i1 << 1 << 2) | 0;
       i1 = 1 << i1;
       if (!(i12 & i1)) {
        HEAP32[8019] = i12 | i1;
        i1 = i3;
        i2 = i3 + 8 | 0;
       } else {
        i2 = i3 + 8 | 0;
        i1 = HEAP32[i2 >> 2] | 0;
       }
       HEAP32[i2 >> 2] = i4;
       HEAP32[i1 + 12 >> 2] = i4;
       HEAP32[i4 + 8 >> 2] = i1;
       HEAP32[i4 + 12 >> 2] = i3;
      }
      HEAP32[8021] = i6;
      HEAP32[8024] = i7;
     }
     i14 = i9 + 8 | 0;
     STACKTOP = i15;
     return i14 | 0;
    } else i12 = i10;
   }
  } else i12 = i10;
 } else if (i1 >>> 0 > 4294967231) i12 = -1; else {
  i1 = i1 + 11 | 0;
  i10 = i1 & -8;
  i9 = HEAP32[8020] | 0;
  if (!i9) i12 = i10; else {
   i3 = 0 - i10 | 0;
   i1 = i1 >>> 8;
   if (!i1) i7 = 0; else if (i10 >>> 0 > 16777215) i7 = 31; else {
    i12 = (i1 + 1048320 | 0) >>> 16 & 8;
    i14 = i1 << i12;
    i11 = (i14 + 520192 | 0) >>> 16 & 4;
    i14 = i14 << i11;
    i7 = (i14 + 245760 | 0) >>> 16 & 2;
    i7 = 14 - (i11 | i12 | i7) + (i14 << i7 >>> 15) | 0;
    i7 = i10 >>> (i7 + 7 | 0) & 1 | i7 << 1;
   }
   i2 = HEAP32[32380 + (i7 << 2) >> 2] | 0;
   L74 : do if (!i2) {
    i2 = 0;
    i1 = 0;
    i14 = 57;
   } else {
    i1 = 0;
    i6 = i2;
    i5 = i10 << ((i7 | 0) == 31 ? 0 : 25 - (i7 >>> 1) | 0);
    i2 = 0;
    while (1) {
     i4 = (HEAP32[i6 + 4 >> 2] & -8) - i10 | 0;
     if (i4 >>> 0 < i3 >>> 0) if (!i4) {
      i3 = 0;
      i2 = i6;
      i1 = i6;
      i14 = 61;
      break L74;
     } else {
      i1 = i6;
      i3 = i4;
     }
     i4 = HEAP32[i6 + 20 >> 2] | 0;
     i6 = HEAP32[i6 + 16 + (i5 >>> 31 << 2) >> 2] | 0;
     i2 = (i4 | 0) == 0 | (i4 | 0) == (i6 | 0) ? i2 : i4;
     i4 = (i6 | 0) == 0;
     if (i4) {
      i14 = 57;
      break;
     } else i5 = i5 << ((i4 ^ 1) & 1);
    }
   } while (0);
   if ((i14 | 0) == 57) {
    if ((i2 | 0) == 0 & (i1 | 0) == 0) {
     i1 = 2 << i7;
     i1 = i9 & (i1 | 0 - i1);
     if (!i1) {
      i12 = i10;
      break;
     }
     i12 = (i1 & 0 - i1) + -1 | 0;
     i7 = i12 >>> 12 & 16;
     i12 = i12 >>> i7;
     i6 = i12 >>> 5 & 8;
     i12 = i12 >>> i6;
     i8 = i12 >>> 2 & 4;
     i12 = i12 >>> i8;
     i11 = i12 >>> 1 & 2;
     i12 = i12 >>> i11;
     i2 = i12 >>> 1 & 1;
     i1 = 0;
     i2 = HEAP32[32380 + ((i6 | i7 | i8 | i11 | i2) + (i12 >>> i2) << 2) >> 2] | 0;
    }
    if (!i2) {
     i8 = i1;
     i6 = i3;
    } else i14 = 61;
   }
   if ((i14 | 0) == 61) while (1) {
    i14 = 0;
    i11 = (HEAP32[i2 + 4 >> 2] & -8) - i10 | 0;
    i12 = i11 >>> 0 < i3 >>> 0;
    i3 = i12 ? i11 : i3;
    i1 = i12 ? i2 : i1;
    i2 = HEAP32[i2 + 16 + (((HEAP32[i2 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i2) {
     i8 = i1;
     i6 = i3;
     break;
    } else i14 = 61;
   }
   if (!i8) i12 = i10; else if (i6 >>> 0 < ((HEAP32[8021] | 0) - i10 | 0) >>> 0) {
    i7 = i8 + i10 | 0;
    if (i7 >>> 0 <= i8 >>> 0) {
     i14 = 0;
     STACKTOP = i15;
     return i14 | 0;
    }
    i5 = HEAP32[i8 + 24 >> 2] | 0;
    i1 = HEAP32[i8 + 12 >> 2] | 0;
    do if ((i1 | 0) == (i8 | 0)) {
     i2 = i8 + 20 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i2 = i8 + 16 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i1 = 0;
       break;
      }
     }
     while (1) {
      i3 = i1 + 20 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (i4 | 0) {
       i1 = i4;
       i2 = i3;
       continue;
      }
      i3 = i1 + 16 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (!i4) break; else {
       i1 = i4;
       i2 = i3;
      }
     }
     HEAP32[i2 >> 2] = 0;
    } else {
     i14 = HEAP32[i8 + 8 >> 2] | 0;
     HEAP32[i14 + 12 >> 2] = i1;
     HEAP32[i1 + 8 >> 2] = i14;
    } while (0);
    do if (!i5) i4 = i9; else {
     i2 = HEAP32[i8 + 28 >> 2] | 0;
     i3 = 32380 + (i2 << 2) | 0;
     if ((i8 | 0) == (HEAP32[i3 >> 2] | 0)) {
      HEAP32[i3 >> 2] = i1;
      if (!i1) {
       i4 = i9 & ~(1 << i2);
       HEAP32[8020] = i4;
       break;
      }
     } else {
      HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i8 | 0) & 1) << 2) >> 2] = i1;
      if (!i1) {
       i4 = i9;
       break;
      }
     }
     HEAP32[i1 + 24 >> 2] = i5;
     i2 = HEAP32[i8 + 16 >> 2] | 0;
     if (i2 | 0) {
      HEAP32[i1 + 16 >> 2] = i2;
      HEAP32[i2 + 24 >> 2] = i1;
     }
     i2 = HEAP32[i8 + 20 >> 2] | 0;
     if (!i2) i4 = i9; else {
      HEAP32[i1 + 20 >> 2] = i2;
      HEAP32[i2 + 24 >> 2] = i1;
      i4 = i9;
     }
    } while (0);
    do if (i6 >>> 0 < 16) {
     i14 = i6 + i10 | 0;
     HEAP32[i8 + 4 >> 2] = i14 | 3;
     i14 = i8 + i14 + 4 | 0;
     HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
    } else {
     HEAP32[i8 + 4 >> 2] = i10 | 3;
     HEAP32[i7 + 4 >> 2] = i6 | 1;
     HEAP32[i7 + i6 >> 2] = i6;
     i1 = i6 >>> 3;
     if (i6 >>> 0 < 256) {
      i3 = 32116 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[8019] | 0;
      i1 = 1 << i1;
      if (!(i2 & i1)) {
       HEAP32[8019] = i2 | i1;
       i1 = i3;
       i2 = i3 + 8 | 0;
      } else {
       i2 = i3 + 8 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
      }
      HEAP32[i2 >> 2] = i7;
      HEAP32[i1 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i1;
      HEAP32[i7 + 12 >> 2] = i3;
      break;
     }
     i1 = i6 >>> 8;
     if (!i1) i1 = 0; else if (i6 >>> 0 > 16777215) i1 = 31; else {
      i13 = (i1 + 1048320 | 0) >>> 16 & 8;
      i14 = i1 << i13;
      i12 = (i14 + 520192 | 0) >>> 16 & 4;
      i14 = i14 << i12;
      i1 = (i14 + 245760 | 0) >>> 16 & 2;
      i1 = 14 - (i12 | i13 | i1) + (i14 << i1 >>> 15) | 0;
      i1 = i6 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     }
     i3 = 32380 + (i1 << 2) | 0;
     HEAP32[i7 + 28 >> 2] = i1;
     i2 = i7 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = 1 << i1;
     if (!(i4 & i2)) {
      HEAP32[8020] = i4 | i2;
      HEAP32[i3 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i3;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     }
     i2 = i6 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
     i3 = HEAP32[i3 >> 2] | 0;
     while (1) {
      if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i6 | 0)) {
       i14 = 97;
       break;
      }
      i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i4 >> 2] | 0;
      if (!i1) {
       i14 = 96;
       break;
      } else {
       i2 = i2 << 1;
       i3 = i1;
      }
     }
     if ((i14 | 0) == 96) {
      HEAP32[i4 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i3;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     } else if ((i14 | 0) == 97) {
      i13 = i3 + 8 | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      HEAP32[i14 + 12 >> 2] = i7;
      HEAP32[i13 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i14;
      HEAP32[i7 + 12 >> 2] = i3;
      HEAP32[i7 + 24 >> 2] = 0;
      break;
     }
    } while (0);
    i14 = i8 + 8 | 0;
    STACKTOP = i15;
    return i14 | 0;
   } else i12 = i10;
  }
 } while (0);
 i3 = HEAP32[8021] | 0;
 if (i3 >>> 0 >= i12 >>> 0) {
  i1 = i3 - i12 | 0;
  i2 = HEAP32[8024] | 0;
  if (i1 >>> 0 > 15) {
   i14 = i2 + i12 | 0;
   HEAP32[8024] = i14;
   HEAP32[8021] = i1;
   HEAP32[i14 + 4 >> 2] = i1 | 1;
   HEAP32[i2 + i3 >> 2] = i1;
   HEAP32[i2 + 4 >> 2] = i12 | 3;
  } else {
   HEAP32[8021] = 0;
   HEAP32[8024] = 0;
   HEAP32[i2 + 4 >> 2] = i3 | 3;
   i14 = i2 + i3 + 4 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
  }
  i14 = i2 + 8 | 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 i7 = HEAP32[8022] | 0;
 if (i7 >>> 0 > i12 >>> 0) {
  i11 = i7 - i12 | 0;
  HEAP32[8022] = i11;
  i14 = HEAP32[8025] | 0;
  i13 = i14 + i12 | 0;
  HEAP32[8025] = i13;
  HEAP32[i13 + 4 >> 2] = i11 | 1;
  HEAP32[i14 + 4 >> 2] = i12 | 3;
  i14 = i14 + 8 | 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 if (!(HEAP32[8137] | 0)) {
  HEAP32[8139] = 4096;
  HEAP32[8138] = 4096;
  HEAP32[8140] = -1;
  HEAP32[8141] = -1;
  HEAP32[8142] = 0;
  HEAP32[8130] = 0;
  HEAP32[8137] = i13 & -16 ^ 1431655768;
  i1 = 4096;
 } else i1 = HEAP32[8139] | 0;
 i8 = i12 + 48 | 0;
 i9 = i12 + 47 | 0;
 i6 = i1 + i9 | 0;
 i4 = 0 - i1 | 0;
 i10 = i6 & i4;
 if (i10 >>> 0 <= i12 >>> 0) {
  i14 = 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 i1 = HEAP32[8129] | 0;
 if (i1 | 0) {
  i11 = HEAP32[8127] | 0;
  i13 = i11 + i10 | 0;
  if (i13 >>> 0 <= i11 >>> 0 | i13 >>> 0 > i1 >>> 0) {
   i14 = 0;
   STACKTOP = i15;
   return i14 | 0;
  }
 }
 L167 : do if (!(HEAP32[8130] & 4)) {
  i2 = HEAP32[8025] | 0;
  L169 : do if (!i2) i14 = 118; else {
   i3 = 32524;
   while (1) {
    i1 = HEAP32[i3 >> 2] | 0;
    if (i1 >>> 0 <= i2 >>> 0) {
     i5 = i3 + 4 | 0;
     if ((i1 + (HEAP32[i5 >> 2] | 0) | 0) >>> 0 > i2 >>> 0) break;
    }
    i1 = HEAP32[i3 + 8 >> 2] | 0;
    if (!i1) {
     i14 = 118;
     break L169;
    } else i3 = i1;
   }
   i1 = i6 - i7 & i4;
   if (i1 >>> 0 < 2147483647) {
    i4 = _sbrk(i1 | 0) | 0;
    if ((i4 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0)) {
     if ((i4 | 0) != (-1 | 0)) {
      i14 = 135;
      break L167;
     }
    } else i14 = 126;
   } else i1 = 0;
  } while (0);
  do if ((i14 | 0) == 118) {
   i4 = _sbrk(0) | 0;
   if ((i4 | 0) == (-1 | 0)) i1 = 0; else {
    i1 = i4;
    i2 = HEAP32[8138] | 0;
    i3 = i2 + -1 | 0;
    i1 = ((i3 & i1 | 0) == 0 ? 0 : (i3 + i1 & 0 - i2) - i1 | 0) + i10 | 0;
    i2 = HEAP32[8127] | 0;
    i3 = i1 + i2 | 0;
    if (i1 >>> 0 > i12 >>> 0 & i1 >>> 0 < 2147483647) {
     i5 = HEAP32[8129] | 0;
     if (i5 | 0) if (i3 >>> 0 <= i2 >>> 0 | i3 >>> 0 > i5 >>> 0) {
      i1 = 0;
      break;
     }
     i2 = _sbrk(i1 | 0) | 0;
     if ((i2 | 0) == (i4 | 0)) {
      i14 = 135;
      break L167;
     } else {
      i4 = i2;
      i14 = 126;
     }
    } else i1 = 0;
   }
  } while (0);
  do if ((i14 | 0) == 126) {
   i3 = 0 - i1 | 0;
   if (!(i8 >>> 0 > i1 >>> 0 & (i1 >>> 0 < 2147483647 & (i4 | 0) != (-1 | 0)))) if ((i4 | 0) == (-1 | 0)) {
    i1 = 0;
    break;
   } else {
    i14 = 135;
    break L167;
   }
   i2 = HEAP32[8139] | 0;
   i2 = i9 - i1 + i2 & 0 - i2;
   if (i2 >>> 0 >= 2147483647) {
    i14 = 135;
    break L167;
   }
   if ((_sbrk(i2 | 0) | 0) == (-1 | 0)) {
    _sbrk(i3 | 0) | 0;
    i1 = 0;
    break;
   } else {
    i1 = i2 + i1 | 0;
    i14 = 135;
    break L167;
   }
  } while (0);
  HEAP32[8130] = HEAP32[8130] | 4;
  i14 = 133;
 } else {
  i1 = 0;
  i14 = 133;
 } while (0);
 if ((i14 | 0) == 133) if (i10 >>> 0 < 2147483647) {
  i4 = _sbrk(i10 | 0) | 0;
  i13 = _sbrk(0) | 0;
  i2 = i13 - i4 | 0;
  i3 = i2 >>> 0 > (i12 + 40 | 0) >>> 0;
  if (!((i4 | 0) == (-1 | 0) | i3 ^ 1 | i4 >>> 0 < i13 >>> 0 & ((i4 | 0) != (-1 | 0) & (i13 | 0) != (-1 | 0)) ^ 1)) {
   i1 = i3 ? i2 : i1;
   i14 = 135;
  }
 }
 if ((i14 | 0) == 135) {
  i2 = (HEAP32[8127] | 0) + i1 | 0;
  HEAP32[8127] = i2;
  if (i2 >>> 0 > (HEAP32[8128] | 0) >>> 0) HEAP32[8128] = i2;
  i9 = HEAP32[8025] | 0;
  do if (!i9) {
   i14 = HEAP32[8023] | 0;
   if ((i14 | 0) == 0 | i4 >>> 0 < i14 >>> 0) HEAP32[8023] = i4;
   HEAP32[8131] = i4;
   HEAP32[8132] = i1;
   HEAP32[8134] = 0;
   HEAP32[8028] = HEAP32[8137];
   HEAP32[8027] = -1;
   HEAP32[8032] = 32116;
   HEAP32[8031] = 32116;
   HEAP32[8034] = 32124;
   HEAP32[8033] = 32124;
   HEAP32[8036] = 32132;
   HEAP32[8035] = 32132;
   HEAP32[8038] = 32140;
   HEAP32[8037] = 32140;
   HEAP32[8040] = 32148;
   HEAP32[8039] = 32148;
   HEAP32[8042] = 32156;
   HEAP32[8041] = 32156;
   HEAP32[8044] = 32164;
   HEAP32[8043] = 32164;
   HEAP32[8046] = 32172;
   HEAP32[8045] = 32172;
   HEAP32[8048] = 32180;
   HEAP32[8047] = 32180;
   HEAP32[8050] = 32188;
   HEAP32[8049] = 32188;
   HEAP32[8052] = 32196;
   HEAP32[8051] = 32196;
   HEAP32[8054] = 32204;
   HEAP32[8053] = 32204;
   HEAP32[8056] = 32212;
   HEAP32[8055] = 32212;
   HEAP32[8058] = 32220;
   HEAP32[8057] = 32220;
   HEAP32[8060] = 32228;
   HEAP32[8059] = 32228;
   HEAP32[8062] = 32236;
   HEAP32[8061] = 32236;
   HEAP32[8064] = 32244;
   HEAP32[8063] = 32244;
   HEAP32[8066] = 32252;
   HEAP32[8065] = 32252;
   HEAP32[8068] = 32260;
   HEAP32[8067] = 32260;
   HEAP32[8070] = 32268;
   HEAP32[8069] = 32268;
   HEAP32[8072] = 32276;
   HEAP32[8071] = 32276;
   HEAP32[8074] = 32284;
   HEAP32[8073] = 32284;
   HEAP32[8076] = 32292;
   HEAP32[8075] = 32292;
   HEAP32[8078] = 32300;
   HEAP32[8077] = 32300;
   HEAP32[8080] = 32308;
   HEAP32[8079] = 32308;
   HEAP32[8082] = 32316;
   HEAP32[8081] = 32316;
   HEAP32[8084] = 32324;
   HEAP32[8083] = 32324;
   HEAP32[8086] = 32332;
   HEAP32[8085] = 32332;
   HEAP32[8088] = 32340;
   HEAP32[8087] = 32340;
   HEAP32[8090] = 32348;
   HEAP32[8089] = 32348;
   HEAP32[8092] = 32356;
   HEAP32[8091] = 32356;
   HEAP32[8094] = 32364;
   HEAP32[8093] = 32364;
   i14 = i1 + -40 | 0;
   i11 = i4 + 8 | 0;
   i11 = (i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7;
   i13 = i4 + i11 | 0;
   i11 = i14 - i11 | 0;
   HEAP32[8025] = i13;
   HEAP32[8022] = i11;
   HEAP32[i13 + 4 >> 2] = i11 | 1;
   HEAP32[i4 + i14 + 4 >> 2] = 40;
   HEAP32[8026] = HEAP32[8141];
  } else {
   i2 = 32524;
   do {
    i3 = HEAP32[i2 >> 2] | 0;
    i5 = i2 + 4 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i4 | 0) == (i3 + i6 | 0)) {
     i14 = 143;
     break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
   } while ((i2 | 0) != 0);
   if ((i14 | 0) == 143) if (!(HEAP32[i2 + 12 >> 2] & 8)) if (i4 >>> 0 > i9 >>> 0 & i3 >>> 0 <= i9 >>> 0) {
    HEAP32[i5 >> 2] = i6 + i1;
    i14 = (HEAP32[8022] | 0) + i1 | 0;
    i11 = i9 + 8 | 0;
    i11 = (i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7;
    i13 = i9 + i11 | 0;
    i11 = i14 - i11 | 0;
    HEAP32[8025] = i13;
    HEAP32[8022] = i11;
    HEAP32[i13 + 4 >> 2] = i11 | 1;
    HEAP32[i9 + i14 + 4 >> 2] = 40;
    HEAP32[8026] = HEAP32[8141];
    break;
   }
   if (i4 >>> 0 < (HEAP32[8023] | 0) >>> 0) HEAP32[8023] = i4;
   i3 = i4 + i1 | 0;
   i2 = 32524;
   while (1) {
    if ((HEAP32[i2 >> 2] | 0) == (i3 | 0)) {
     i14 = 151;
     break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
    if (!i2) {
     i3 = 32524;
     break;
    }
   }
   if ((i14 | 0) == 151) if (!(HEAP32[i2 + 12 >> 2] & 8)) {
    HEAP32[i2 >> 2] = i4;
    i11 = i2 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i1;
    i11 = i4 + 8 | 0;
    i11 = i4 + ((i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7) | 0;
    i1 = i3 + 8 | 0;
    i1 = i3 + ((i1 & 7 | 0) == 0 ? 0 : 0 - i1 & 7) | 0;
    i10 = i11 + i12 | 0;
    i8 = i1 - i11 - i12 | 0;
    HEAP32[i11 + 4 >> 2] = i12 | 3;
    do if ((i9 | 0) == (i1 | 0)) {
     i14 = (HEAP32[8022] | 0) + i8 | 0;
     HEAP32[8022] = i14;
     HEAP32[8025] = i10;
     HEAP32[i10 + 4 >> 2] = i14 | 1;
    } else {
     if ((HEAP32[8024] | 0) == (i1 | 0)) {
      i14 = (HEAP32[8021] | 0) + i8 | 0;
      HEAP32[8021] = i14;
      HEAP32[8024] = i10;
      HEAP32[i10 + 4 >> 2] = i14 | 1;
      HEAP32[i10 + i14 >> 2] = i14;
      break;
     }
     i2 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i2 & 3 | 0) == 1) {
      i7 = i2 & -8;
      i4 = i2 >>> 3;
      L234 : do if (i2 >>> 0 < 256) {
       i2 = HEAP32[i1 + 8 >> 2] | 0;
       i3 = HEAP32[i1 + 12 >> 2] | 0;
       if ((i3 | 0) == (i2 | 0)) {
        HEAP32[8019] = HEAP32[8019] & ~(1 << i4);
        break;
       } else {
        HEAP32[i2 + 12 >> 2] = i3;
        HEAP32[i3 + 8 >> 2] = i2;
        break;
       }
      } else {
       i6 = HEAP32[i1 + 24 >> 2] | 0;
       i2 = HEAP32[i1 + 12 >> 2] | 0;
       do if ((i2 | 0) == (i1 | 0)) {
        i4 = i1 + 16 | 0;
        i3 = i4 + 4 | 0;
        i2 = HEAP32[i3 >> 2] | 0;
        if (!i2) {
         i2 = HEAP32[i4 >> 2] | 0;
         if (!i2) {
          i2 = 0;
          break;
         } else i3 = i4;
        }
        while (1) {
         i4 = i2 + 20 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if (i5 | 0) {
          i2 = i5;
          i3 = i4;
          continue;
         }
         i4 = i2 + 16 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if (!i5) break; else {
          i2 = i5;
          i3 = i4;
         }
        }
        HEAP32[i3 >> 2] = 0;
       } else {
        i14 = HEAP32[i1 + 8 >> 2] | 0;
        HEAP32[i14 + 12 >> 2] = i2;
        HEAP32[i2 + 8 >> 2] = i14;
       } while (0);
       if (!i6) break;
       i3 = HEAP32[i1 + 28 >> 2] | 0;
       i4 = 32380 + (i3 << 2) | 0;
       do if ((HEAP32[i4 >> 2] | 0) == (i1 | 0)) {
        HEAP32[i4 >> 2] = i2;
        if (i2 | 0) break;
        HEAP32[8020] = HEAP32[8020] & ~(1 << i3);
        break L234;
       } else {
        HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i1 | 0) & 1) << 2) >> 2] = i2;
        if (!i2) break L234;
       } while (0);
       HEAP32[i2 + 24 >> 2] = i6;
       i3 = i1 + 16 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if (i4 | 0) {
        HEAP32[i2 + 16 >> 2] = i4;
        HEAP32[i4 + 24 >> 2] = i2;
       }
       i3 = HEAP32[i3 + 4 >> 2] | 0;
       if (!i3) break;
       HEAP32[i2 + 20 >> 2] = i3;
       HEAP32[i3 + 24 >> 2] = i2;
      } while (0);
      i1 = i1 + i7 | 0;
      i5 = i7 + i8 | 0;
     } else i5 = i8;
     i1 = i1 + 4 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
     HEAP32[i10 + 4 >> 2] = i5 | 1;
     HEAP32[i10 + i5 >> 2] = i5;
     i1 = i5 >>> 3;
     if (i5 >>> 0 < 256) {
      i3 = 32116 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[8019] | 0;
      i1 = 1 << i1;
      if (!(i2 & i1)) {
       HEAP32[8019] = i2 | i1;
       i1 = i3;
       i2 = i3 + 8 | 0;
      } else {
       i2 = i3 + 8 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
      }
      HEAP32[i2 >> 2] = i10;
      HEAP32[i1 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i1;
      HEAP32[i10 + 12 >> 2] = i3;
      break;
     }
     i1 = i5 >>> 8;
     do if (!i1) i1 = 0; else {
      if (i5 >>> 0 > 16777215) {
       i1 = 31;
       break;
      }
      i13 = (i1 + 1048320 | 0) >>> 16 & 8;
      i14 = i1 << i13;
      i12 = (i14 + 520192 | 0) >>> 16 & 4;
      i14 = i14 << i12;
      i1 = (i14 + 245760 | 0) >>> 16 & 2;
      i1 = 14 - (i12 | i13 | i1) + (i14 << i1 >>> 15) | 0;
      i1 = i5 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     } while (0);
     i4 = 32380 + (i1 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i1;
     i2 = i10 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = HEAP32[8020] | 0;
     i3 = 1 << i1;
     if (!(i2 & i3)) {
      HEAP32[8020] = i2 | i3;
      HEAP32[i4 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i4;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     }
     i2 = i5 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
     i3 = HEAP32[i4 >> 2] | 0;
     while (1) {
      if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
       i14 = 192;
       break;
      }
      i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i4 >> 2] | 0;
      if (!i1) {
       i14 = 191;
       break;
      } else {
       i2 = i2 << 1;
       i3 = i1;
      }
     }
     if ((i14 | 0) == 191) {
      HEAP32[i4 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i3;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     } else if ((i14 | 0) == 192) {
      i13 = i3 + 8 | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      HEAP32[i14 + 12 >> 2] = i10;
      HEAP32[i13 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i14;
      HEAP32[i10 + 12 >> 2] = i3;
      HEAP32[i10 + 24 >> 2] = 0;
      break;
     }
    } while (0);
    i14 = i11 + 8 | 0;
    STACKTOP = i15;
    return i14 | 0;
   } else i3 = 32524;
   while (1) {
    i2 = HEAP32[i3 >> 2] | 0;
    if (i2 >>> 0 <= i9 >>> 0) {
     i2 = i2 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
     if (i2 >>> 0 > i9 >>> 0) break;
    }
    i3 = HEAP32[i3 + 8 >> 2] | 0;
   }
   i6 = i2 + -47 | 0;
   i3 = i6 + 8 | 0;
   i3 = i6 + ((i3 & 7 | 0) == 0 ? 0 : 0 - i3 & 7) | 0;
   i6 = i9 + 16 | 0;
   i3 = i3 >>> 0 < i6 >>> 0 ? i9 : i3;
   i14 = i3 + 8 | 0;
   i5 = i1 + -40 | 0;
   i11 = i4 + 8 | 0;
   i11 = (i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7;
   i13 = i4 + i11 | 0;
   i11 = i5 - i11 | 0;
   HEAP32[8025] = i13;
   HEAP32[8022] = i11;
   HEAP32[i13 + 4 >> 2] = i11 | 1;
   HEAP32[i4 + i5 + 4 >> 2] = 40;
   HEAP32[8026] = HEAP32[8141];
   i5 = i3 + 4 | 0;
   HEAP32[i5 >> 2] = 27;
   HEAP32[i14 >> 2] = HEAP32[8131];
   HEAP32[i14 + 4 >> 2] = HEAP32[8132];
   HEAP32[i14 + 8 >> 2] = HEAP32[8133];
   HEAP32[i14 + 12 >> 2] = HEAP32[8134];
   HEAP32[8131] = i4;
   HEAP32[8132] = i1;
   HEAP32[8134] = 0;
   HEAP32[8133] = i14;
   i1 = i3 + 24 | 0;
   do {
    i14 = i1;
    i1 = i1 + 4 | 0;
    HEAP32[i1 >> 2] = 7;
   } while ((i14 + 8 | 0) >>> 0 < i2 >>> 0);
   if ((i3 | 0) != (i9 | 0)) {
    i7 = i3 - i9 | 0;
    HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2;
    HEAP32[i9 + 4 >> 2] = i7 | 1;
    HEAP32[i3 >> 2] = i7;
    i1 = i7 >>> 3;
    if (i7 >>> 0 < 256) {
     i3 = 32116 + (i1 << 1 << 2) | 0;
     i2 = HEAP32[8019] | 0;
     i1 = 1 << i1;
     if (!(i2 & i1)) {
      HEAP32[8019] = i2 | i1;
      i1 = i3;
      i2 = i3 + 8 | 0;
     } else {
      i2 = i3 + 8 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
     }
     HEAP32[i2 >> 2] = i9;
     HEAP32[i1 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i1;
     HEAP32[i9 + 12 >> 2] = i3;
     break;
    }
    i1 = i7 >>> 8;
    if (!i1) i3 = 0; else if (i7 >>> 0 > 16777215) i3 = 31; else {
     i13 = (i1 + 1048320 | 0) >>> 16 & 8;
     i14 = i1 << i13;
     i11 = (i14 + 520192 | 0) >>> 16 & 4;
     i14 = i14 << i11;
     i3 = (i14 + 245760 | 0) >>> 16 & 2;
     i3 = 14 - (i11 | i13 | i3) + (i14 << i3 >>> 15) | 0;
     i3 = i7 >>> (i3 + 7 | 0) & 1 | i3 << 1;
    }
    i4 = 32380 + (i3 << 2) | 0;
    HEAP32[i9 + 28 >> 2] = i3;
    HEAP32[i9 + 20 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    i1 = HEAP32[8020] | 0;
    i2 = 1 << i3;
    if (!(i1 & i2)) {
     HEAP32[8020] = i1 | i2;
     HEAP32[i4 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i4;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break;
    }
    i2 = i7 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
    i3 = HEAP32[i4 >> 2] | 0;
    while (1) {
     if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i7 | 0)) {
      i14 = 213;
      break;
     }
     i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
     i1 = HEAP32[i4 >> 2] | 0;
     if (!i1) {
      i14 = 212;
      break;
     } else {
      i2 = i2 << 1;
      i3 = i1;
     }
    }
    if ((i14 | 0) == 212) {
     HEAP32[i4 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i3;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break;
    } else if ((i14 | 0) == 213) {
     i13 = i3 + 8 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i14 + 12 >> 2] = i9;
     HEAP32[i13 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i14;
     HEAP32[i9 + 12 >> 2] = i3;
     HEAP32[i9 + 24 >> 2] = 0;
     break;
    }
   }
  } while (0);
  i1 = HEAP32[8022] | 0;
  if (i1 >>> 0 > i12 >>> 0) {
   i11 = i1 - i12 | 0;
   HEAP32[8022] = i11;
   i14 = HEAP32[8025] | 0;
   i13 = i14 + i12 | 0;
   HEAP32[8025] = i13;
   HEAP32[i13 + 4 >> 2] = i11 | 1;
   HEAP32[i14 + 4 >> 2] = i12 | 3;
   i14 = i14 + 8 | 0;
   STACKTOP = i15;
   return i14 | 0;
  }
 }
 HEAP32[(___errno_location() | 0) >> 2] = 12;
 i14 = 0;
 STACKTOP = i15;
 return i14 | 0;
}

function _MetaData_Fill_TypeDef_(i23, i18, i19) {
 i23 = i23 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i20 = 0, i21 = 0, i22 = 0, i24 = 0, i25 = 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i24 = i25 + 8 | 0;
 i22 = i25;
 i2 = i23 + 4 | 0;
 i20 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 HEAP8[i23 + 32 >> 0] = 1;
 HEAP8[i23 >> 0] = i23;
 HEAP8[i23 + 1 >> 0] = i23 >> 8;
 HEAP8[i23 + 2 >> 0] = i23 >> 16;
 HEAP8[i23 + 3 >> 0] = i23 >> 24;
 i1 = i23 + 20 | 0;
 i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i20, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, i18, i19) | 0;
 i21 = i23 + 40 | 0;
 HEAP8[i21 >> 0] = i1;
 HEAP8[i21 + 1 >> 0] = i1 >> 8;
 HEAP8[i21 + 2 >> 0] = i1 >> 16;
 HEAP8[i21 + 3 >> 0] = i1 >> 24;
 if (!i1) i6 = 0; else {
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i6 = i1 + 48 | 0;
  i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 }
 i8 = i23 + 34 | 0;
 HEAP8[i8 >> 0] = _Type_IsValueType(i23) | 0;
 if (!(HEAP8[i23 + 58 >> 0] | 0)) {
  if (!(HEAP8[i23 + 33 >> 0] | 0)) {
   i1 = i23 + 160 | 0;
   i4 = i23 + 28 | 0;
   i5 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
   i1 = (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) - i5 | 0;
   i3 = i23 + 112 | 0;
   HEAP8[i3 >> 0] = i1;
   HEAP8[i3 + 1 >> 0] = i1 >> 8;
   HEAP8[i3 + 2 >> 0] = i1 >> 16;
   HEAP8[i3 + 3 >> 0] = i1 >> 24;
   i2 = i23 + 156 | 0;
   i2 = (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + -1 | 0;
  } else {
   i4 = i23 + 28 | 0;
   i5 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
   i1 = (HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + 48 >> 2] & 16777215 | 100663296) + 1 - i5 | 0;
   i3 = i23 + 112 | 0;
   HEAP8[i3 >> 0] = i1;
   HEAP8[i3 + 1 >> 0] = i1 >> 8;
   HEAP8[i3 + 2 >> 0] = i1 >> 16;
   HEAP8[i3 + 3 >> 0] = i1 >> 24;
   i2 = HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + 40 >> 2] & 16777215 | 67108864;
  }
  i17 = i23 + 24 | 0;
  i17 = i2 + 1 - (HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24) | 0;
  i2 = i23 + 100 | 0;
  HEAP8[i2 >> 0] = i17;
  HEAP8[i2 + 1 >> 0] = i17 >> 8;
  HEAP8[i2 + 2 >> 0] = i17 >> 16;
  HEAP8[i2 + 3 >> 0] = i17 >> 24;
  i2 = i5;
 } else {
  i2 = i23 + 28 | 0;
  i1 = i23 + 112 | 0;
  i3 = i1;
  i4 = i2;
  i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 }
 i7 = i2 + -1 + i1 | 0;
 i17 = i23 + 57 | 0;
 if (!(HEAP8[i17 >> 0] | 0)) {
  i1 = i6;
  while (1) {
   if (i2 >>> 0 > i7 >>> 0) break;
   i6 = _MetaData_GetMethodDefFromDefRefOrSpec(i20, i2, i18, i19) | 0;
   i5 = i6 + 48 | 0;
   HEAP8[i5 >> 0] = i23;
   HEAP8[i5 + 1 >> 0] = i23 >> 8;
   HEAP8[i5 + 2 >> 0] = i23 >> 16;
   HEAP8[i5 + 3 >> 0] = i23 >> 24;
   i5 = i6 + 14 | 0;
   i5 = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8) & 65535;
   do if (!(i5 & 64)) i5 = -1; else {
    if (!(i5 & 256)) {
     i5 = HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24;
     if (i5 | 0) {
      i5 = _FindVirtualOverriddenMethod(i5, i6) | 0;
      if (!i5) {
       i5 = i1;
       i1 = i1 + 1 | 0;
       break;
      } else {
       i5 = i5 + 56 | 0;
       i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
       break;
      }
     }
    }
    i5 = i1;
    i1 = i1 + 1 | 0;
   } while (0);
   i16 = i6 + 56 | 0;
   HEAP8[i16 >> 0] = i5;
   HEAP8[i16 + 1 >> 0] = i5 >> 8;
   HEAP8[i16 + 2 >> 0] = i5 >> 16;
   HEAP8[i16 + 3 >> 0] = i5 >> 24;
   i2 = i2 + 1 | 0;
  }
  i15 = i23 + 48 | 0;
  HEAP8[i15 >> 0] = i1;
  HEAP8[i15 + 1 >> 0] = i1 >> 8;
  HEAP8[i15 + 2 >> 0] = i1 >> 16;
  HEAP8[i15 + 3 >> 0] = i1 >> 24;
  i9 = i23 + 68 | 0;
  if (!(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24)) if (!(HEAP8[i8 >> 0] | 0)) {
   HEAP8[i23 + 35 >> 0] = 5;
   HEAP8[i9 >> 0] = 4;
   HEAP8[i9 + 1 >> 0] = 0;
   HEAP8[i9 + 2 >> 0] = 0;
   HEAP8[i9 + 3 >> 0] = 0;
  }
  i6 = i23 + 24 | 0;
  i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
  i11 = i23 + 100 | 0;
  i1 = HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24;
  i10 = i6 + -1 + i1 | 0;
  if (i1 | 0) {
   i16 = i23 + 104 | 0;
   i14 = _mallocForever(i1 << 2) | 0;
   HEAP8[i16 >> 0] = i14;
   HEAP8[i16 + 1 >> 0] = i14 >> 8;
   HEAP8[i16 + 2 >> 0] = i14 >> 16;
   HEAP8[i16 + 3 >> 0] = i14 >> 24;
  }
  i1 = HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24;
  if (!i1) i1 = 0; else {
   i1 = i1 + 36 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  }
  i16 = i23 + 88 | 0;
  i14 = i23 + 104 | 0;
  i7 = 0;
  i8 = i6;
  while (1) {
   if (i8 >>> 0 > i10 >>> 0) break;
   i5 = _MetaData_GetFieldDefFromDefOrRef(i20, i8, i18, i19) | 0;
   i2 = i5 + 8 | 0;
   i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8;
   if (!(i2 & 16)) {
    if (HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) {
     i2 = _mallocForever(44) | 0;
     i13 = i2;
     i12 = i13 + 44 | 0;
     do {
      HEAP8[i13 >> 0] = HEAP8[i5 >> 0] | 0;
      i13 = i13 + 1 | 0;
      i5 = i5 + 1 | 0;
     } while ((i13 | 0) < (i12 | 0));
     i13 = i2 + 8 | 0;
     i5 = i2;
     i2 = HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8;
    }
    if (!(i2 & 320)) {
     _MetaData_Fill_FieldDef(i23, i5, i1, i18);
     i13 = i5 + 32 | 0;
     i1 = (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) + i1 | 0;
    } else _MetaData_Fill_FieldDef(i23, i5, 0, i18);
    HEAP32[(HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) + (i7 << 2) >> 2] = i5;
   }
   i7 = i7 + 1 | 0;
   i8 = i8 + 1 | 0;
  }
  i2 = i23 + 36 | 0;
  i5 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  if (!i5) {
   HEAP8[i2 >> 0] = i1;
   HEAP8[i2 + 1 >> 0] = i1 >> 8;
   HEAP8[i2 + 2 >> 0] = i1 >> 16;
   HEAP8[i2 + 3 >> 0] = i1 >> 24;
  } else i1 = i5;
  i2 = HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24;
  if (!i2) {
   HEAP8[i23 + 35 >> 0] = 7;
   HEAP8[i9 >> 0] = i1;
   HEAP8[i9 + 1 >> 0] = i1 >> 8;
   HEAP8[i9 + 2 >> 0] = i1 >> 16;
   HEAP8[i9 + 3 >> 0] = i1 >> 24;
  } else i1 = i2;
  i2 = i23 + 64 | 0;
  if (!(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24)) {
   HEAP8[i2 >> 0] = i1;
   HEAP8[i2 + 1 >> 0] = i1 >> 8;
   HEAP8[i2 + 2 >> 0] = i1 >> 16;
   HEAP8[i2 + 3 >> 0] = i1 >> 24;
   i1 = 0;
   i7 = 0;
  } else {
   i1 = 0;
   i7 = 0;
  }
  while (1) {
   if (i6 >>> 0 > i10 >>> 0) break;
   i5 = _MetaData_GetFieldDefFromDefOrRef(i20, i6, i18, i19) | 0;
   i2 = i5 + 8 | 0;
   i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8;
   if (i2 & 16) {
    if (HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) {
     i2 = _mallocForever(44) | 0;
     i13 = i2;
     i12 = i13 + 44 | 0;
     do {
      HEAP8[i13 >> 0] = HEAP8[i5 >> 0] | 0;
      i13 = i13 + 1 | 0;
      i5 = i5 + 1 | 0;
     } while ((i13 | 0) < (i12 | 0));
     i13 = i2 + 8 | 0;
     i5 = i2;
     i2 = HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8;
    }
    if (!(i2 & 320)) {
     _MetaData_Fill_FieldDef(i23, i5, i1, i18);
     i13 = i5 + 32 | 0;
     i1 = (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) + i1 | 0;
    } else _MetaData_Fill_FieldDef(i23, i5, 0, i18);
    HEAP32[(HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) + (i7 << 2) >> 2] = i5;
   }
   i7 = i7 + 1 | 0;
   i6 = i6 + 1 | 0;
  }
  if (i1 | 0) {
   i8 = _callocForever(1, i1) | 0;
   i5 = i23 + 52 | 0;
   HEAP8[i5 >> 0] = i8;
   HEAP8[i5 + 1 >> 0] = i8 >> 8;
   HEAP8[i5 + 2 >> 0] = i8 >> 16;
   HEAP8[i5 + 3 >> 0] = i8 >> 24;
   i5 = HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24;
   i2 = 0;
   while (1) {
    if ((i2 | 0) == (i5 | 0)) break;
    i6 = HEAP32[(HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24) + (i2 << 2) >> 2] | 0;
    i13 = i6 + 8 | 0;
    if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8) & 16) {
     i7 = i6 + 40 | 0;
     if (!(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24)) {
      i13 = i6 + 28 | 0;
      i13 = i8 + (HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0;
      HEAP8[i7 >> 0] = i13;
      HEAP8[i7 + 1 >> 0] = i13 >> 8;
      HEAP8[i7 + 2 >> 0] = i13 >> 16;
      HEAP8[i7 + 3 >> 0] = i13 >> 24;
     }
    }
    i2 = i2 + 1 | 0;
   }
   i14 = i23 + 108 | 0;
   HEAP8[i14 >> 0] = i1;
   HEAP8[i14 + 1 >> 0] = i1 >> 8;
   HEAP8[i14 + 2 >> 0] = i1 >> 16;
   HEAP8[i14 + 3 >> 0] = i1 >> 24;
  }
  i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
  i1 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
  i8 = i4 + -1 + i1 | 0;
  i1 = _mallocForever(i1 << 2) | 0;
  i11 = i23 + 116 | 0;
  HEAP8[i11 >> 0] = i1;
  HEAP8[i11 + 1 >> 0] = i1 >> 8;
  HEAP8[i11 + 2 >> 0] = i1 >> 16;
  HEAP8[i11 + 3 >> 0] = i1 >> 24;
  i1 = _mallocForever((HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) << 2) | 0;
  i9 = i23 + 44 | 0;
  HEAP8[i9 >> 0] = i1;
  HEAP8[i9 + 1 >> 0] = i1 >> 8;
  HEAP8[i9 + 2 >> 0] = i1 >> 16;
  HEAP8[i9 + 3 >> 0] = i1 >> 24;
  i2 = HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24;
  if (i2 | 0) {
   i14 = i2 + 44 | 0;
   i15 = i2 + 48 | 0;
   _memcpy(i1 | 0, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0, (HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) << 2 | 0) | 0;
  }
  i10 = i23 + 124 | 0;
  i7 = i23 + 60 | 0;
  i6 = 0;
  while (1) {
   if (i4 >>> 0 > i8 >>> 0) break;
   i1 = _MetaData_GetMethodDefFromDefRefOrSpec(i20, i4, i18, i19) | 0;
   if (HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) {
    i2 = _mallocForever(72) | 0;
    i13 = i2;
    i5 = i1;
    i12 = i13 + 72 | 0;
    do {
     HEAP8[i13 >> 0] = HEAP8[i5 >> 0] | 0;
     i13 = i13 + 1 | 0;
     i5 = i5 + 1 | 0;
    } while ((i13 | 0) < (i12 | 0));
    i1 = i2;
   }
   i2 = i1 + 14 | 0;
   i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8;
   if (!(i2 & 16)) {
    if (HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24 | 0) {
     i15 = i1 + 16 | 0;
     if (!(_strcmp(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24, 17473) | 0)) {
      HEAP8[i10 >> 0] = i1;
      HEAP8[i10 + 1 >> 0] = i1 >> 8;
      HEAP8[i10 + 2 >> 0] = i1 >> 16;
      HEAP8[i10 + 3 >> 0] = i1 >> 24;
     }
    }
   } else {
    i15 = i1 + 16 | 0;
    if (!(_strcmp(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24, 17466) | 0)) {
     HEAP8[i7 >> 0] = i1;
     HEAP8[i7 + 1 >> 0] = i1 >> 8;
     HEAP8[i7 + 2 >> 0] = i1 >> 16;
     HEAP8[i7 + 3 >> 0] = i1 >> 24;
    }
   }
   if (i2 & 64) {
    i15 = i1 + 56 | 0;
    HEAP32[(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24) + ((HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24) << 2) >> 2] = i1;
   }
   HEAP32[(HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24) + (i6 << 2) >> 2] = i1;
   i4 = i4 + 1 | 0;
   i6 = i6 + 1 | 0;
  }
  L107 : do if (!(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24)) {
   i1 = i21;
   while (1) {
    i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
    if (!i1) {
     i1 = 0;
     break L107;
    }
    i2 = i1 + 124 | 0;
    i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
    if (!i2) i1 = i1 + 40 | 0; else break;
   }
   HEAP8[i10 >> 0] = i2;
   HEAP8[i10 + 1 >> 0] = i2 >> 8;
   HEAP8[i10 + 2 >> 0] = i2 >> 16;
   HEAP8[i10 + 3 >> 0] = i2 >> 24;
   i1 = 0;
  } else i1 = 0; while (0);
  while (1) {
   if (i1 >>> 0 >= (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) >>> 0) break;
   _MetaData_Fill_MethodDef(i23, HEAP32[(HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0, i18, i19);
   i1 = i1 + 1 | 0;
  }
  i16 = i23 + 8 | 0;
  L116 : do if (!((HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24) & 32)) {
   i1 = HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24;
   if (!i1) {
    i6 = 0;
    i4 = i23 + 72 | 0;
   } else {
    i6 = i1 + 72 | 0;
    i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
    i4 = i23 + 72 | 0;
    HEAP8[i4 >> 0] = i6;
    HEAP8[i4 + 1 >> 0] = i6 >> 8;
    HEAP8[i4 + 2 >> 0] = i6 >> 16;
    HEAP8[i4 + 3 >> 0] = i6 >> 24;
   }
   i7 = i20 + 60 | 0;
   i9 = i23 + 80 | 0;
   i5 = 0;
   i3 = 1;
   while (1) {
    if (i3 >>> 0 > (HEAP32[i7 >> 2] | 0) >>> 0) break;
    i1 = i3 & 16777215 | 150994944;
    i16 = _MetaData_GetTableRow(i20, i1) | 0;
    if ((HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24 | 0) == (HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24 | 0)) {
     i2 = (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + 1 | 0;
     HEAP8[i4 >> 0] = i2;
     HEAP8[i4 + 1 >> 0] = i2 >> 8;
     HEAP8[i4 + 2 >> 0] = i2 >> 16;
     HEAP8[i4 + 3 >> 0] = i2 >> 24;
     i2 = i1;
     i1 = (i5 | 0) == 0 ? i1 : i5;
    } else {
     i2 = i8;
     i1 = i5;
    }
    i5 = i1;
    i8 = i2;
    i3 = i3 + 1 | 0;
   }
   i1 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
   if (i1 | 0) if (!(HEAP8[i17 >> 0] | 0)) {
    i1 = _mallocForever(i1 * 12 | 0) | 0;
    i7 = i23 + 76 | 0;
    HEAP8[i7 >> 0] = i1;
    HEAP8[i7 + 1 >> 0] = i1 >> 8;
    HEAP8[i7 + 2 >> 0] = i1 >> 16;
    HEAP8[i7 + 3 >> 0] = i1 >> 24;
    if (i6 | 0) {
     i17 = (HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24) + 76 | 0;
     _memcpy(i1 | 0, HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24 | 0, i6 * 12 | 0) | 0;
    }
    if (i5 | 0) {
     while (1) {
      if (i5 >>> 0 > i8 >>> 0) break L116;
      i1 = _MetaData_GetTableRow(i20, i5) | 0;
      if ((HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24 | 0) != (HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24 | 0)) break;
      i1 = i1 + 4 | 0;
      i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i20, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, i18, i19) | 0;
      if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
      i2 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
      HEAP32[i2 + (i6 * 12 | 0) >> 2] = i1;
      i3 = i1 + 48 | 0;
      i4 = i2 + (i6 * 12 | 0) + 4 | 0;
      HEAP32[i4 >> 2] = _mallocForever((HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) << 2) | 0;
      HEAP32[i2 + (i6 * 12 | 0) + 8 >> 2] = 0;
      i2 = i1 + 44 | 0;
      i1 = 0;
      while (1) {
       if (i1 >>> 0 >= (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) >>> 0) break;
       i17 = (_FindVirtualOverriddenMethod(i23, HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0) | 0) + 56 | 0;
       HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] = HEAPU8[i17 >> 0] | HEAPU8[i17 + 1 >> 0] << 8 | HEAPU8[i17 + 2 >> 0] << 16 | HEAPU8[i17 + 3 >> 0] << 24;
       i1 = i1 + 1 | 0;
      }
      i6 = i6 + 1 | 0;
      i5 = i5 + 1 | 0;
     }
     _Crash(17482, i22);
    }
   }
  } while (0);
  if ((HEAPU8[i21 >> 0] | HEAPU8[i21 + 1 >> 0] << 8 | HEAPU8[i21 + 2 >> 0] << 16 | HEAPU8[i21 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 120 >> 2] | 0)) HEAP8[i23 + 35 >> 0] = 1;
 }
 i1 = i23 + 120 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 if (!i1) {
  i1 = i23 + 16 | 0;
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 } else {
  while (1) {
   i2 = i1 + 120 | 0;
   i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
   if (!i2) break; else i1 = i2;
  }
  i1 = i1 + 16 | 0;
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  i22 = i23 + 16 | 0;
  HEAP8[i22 >> 0] = i1;
  HEAP8[i22 + 1 >> 0] = i1 >> 8;
  HEAP8[i22 + 2 >> 0] = i1 >> 16;
  HEAP8[i22 + 3 >> 0] = i1 >> 24;
 }
 i23 = i23 + 12 | 0;
 i23 = HEAPU8[i23 >> 0] | HEAPU8[i23 + 1 >> 0] << 8 | HEAPU8[i23 + 2 >> 0] << 16 | HEAPU8[i23 + 3 >> 0] << 24;
 HEAP32[i24 >> 2] = i1;
 HEAP32[i24 + 4 >> 2] = i23;
 _log_f(2, 17511, i24);
 STACKTOP = i25;
 return;
}

function _printf_core(i19, i1, i24, i25, i26) {
 i19 = i19 | 0;
 i1 = i1 | 0;
 i24 = i24 | 0;
 i25 = i25 | 0;
 i26 = i26 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i27 = 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i20 = i27 + 16 | 0;
 i21 = i27;
 i17 = i27 + 24 | 0;
 i22 = i27 + 8 | 0;
 i23 = i27 + 20 | 0;
 HEAP32[i20 >> 2] = i1;
 i14 = (i19 | 0) != 0;
 i15 = i17 + 40 | 0;
 i16 = i15;
 i17 = i17 + 39 | 0;
 i18 = i22 + 4 | 0;
 i2 = 0;
 i1 = 0;
 i4 = 0;
 L1 : while (1) {
  do if ((i1 | 0) > -1) if ((i2 | 0) > (2147483647 - i1 | 0)) {
   HEAP32[(___errno_location() | 0) >> 2] = 75;
   i1 = -1;
   break;
  } else {
   i1 = i2 + i1 | 0;
   break;
  } while (0);
  i9 = HEAP32[i20 >> 2] | 0;
  i2 = HEAP8[i9 >> 0] | 0;
  if (!(i2 << 24 >> 24)) {
   i13 = 88;
   break;
  } else i3 = i9;
  L9 : while (1) {
   switch (i2 << 24 >> 24) {
   case 37:
    {
     i2 = i3;
     i13 = 9;
     break L9;
    }
   case 0:
    {
     i2 = i3;
     break L9;
    }
   default:
    {}
   }
   i12 = i3 + 1 | 0;
   HEAP32[i20 >> 2] = i12;
   i2 = HEAP8[i12 >> 0] | 0;
   i3 = i12;
  }
  L12 : do if ((i13 | 0) == 9) while (1) {
   i13 = 0;
   if ((HEAP8[i3 + 1 >> 0] | 0) != 37) break L12;
   i2 = i2 + 1 | 0;
   i3 = i3 + 2 | 0;
   HEAP32[i20 >> 2] = i3;
   if ((HEAP8[i3 >> 0] | 0) != 37) break; else i13 = 9;
  } while (0);
  i2 = i2 - i9 | 0;
  if (i14) _out(i19, i9, i2);
  if (i2 | 0) continue;
  i12 = (_isdigit(HEAP8[(HEAP32[i20 >> 2] | 0) + 1 >> 0] | 0) | 0) == 0;
  i3 = HEAP32[i20 >> 2] | 0;
  if (i12) {
   i10 = -1;
   i5 = i4;
   i2 = 1;
  } else if ((HEAP8[i3 + 2 >> 0] | 0) == 36) {
   i10 = (HEAP8[i3 + 1 >> 0] | 0) + -48 | 0;
   i5 = 1;
   i2 = 3;
  } else {
   i10 = -1;
   i5 = i4;
   i2 = 1;
  }
  i2 = i3 + i2 | 0;
  HEAP32[i20 >> 2] = i2;
  i3 = HEAP8[i2 >> 0] | 0;
  i12 = (i3 << 24 >> 24) + -32 | 0;
  if (i12 >>> 0 > 31 | (1 << i12 & 75913 | 0) == 0) i4 = 0; else {
   i4 = 0;
   do {
    i4 = 1 << (i3 << 24 >> 24) + -32 | i4;
    i2 = i2 + 1 | 0;
    HEAP32[i20 >> 2] = i2;
    i3 = HEAP8[i2 >> 0] | 0;
    i12 = (i3 << 24 >> 24) + -32 | 0;
   } while (!(i12 >>> 0 > 31 | (1 << i12 & 75913 | 0) == 0));
  }
  if (i3 << 24 >> 24 == 42) {
   if (!(_isdigit(HEAP8[i2 + 1 >> 0] | 0) | 0)) i13 = 23; else {
    i3 = HEAP32[i20 >> 2] | 0;
    if ((HEAP8[i3 + 2 >> 0] | 0) == 36) {
     i2 = i3 + 1 | 0;
     HEAP32[i26 + ((HEAP8[i2 >> 0] | 0) + -48 << 2) >> 2] = 10;
     i2 = HEAP32[i25 + ((HEAP8[i2 >> 0] | 0) + -48 << 3) >> 2] | 0;
     i5 = 1;
     i3 = i3 + 3 | 0;
    } else i13 = 23;
   }
   if ((i13 | 0) == 23) {
    i13 = 0;
    if (i5 | 0) {
     i1 = -1;
     break;
    }
    if (i14) {
     i12 = (HEAP32[i24 >> 2] | 0) + (4 - 1) & ~(4 - 1);
     i2 = HEAP32[i12 >> 2] | 0;
     HEAP32[i24 >> 2] = i12 + 4;
    } else i2 = 0;
    i5 = 0;
    i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
   }
   HEAP32[i20 >> 2] = i3;
   i11 = (i2 | 0) < 0;
   i12 = i11 ? 0 - i2 | 0 : i2;
   i4 = i11 ? i4 | 8192 : i4;
   i11 = i5;
   i2 = i3;
  } else {
   i2 = _getint(i20) | 0;
   if ((i2 | 0) < 0) {
    i1 = -1;
    break;
   }
   i12 = i2;
   i11 = i5;
   i2 = HEAP32[i20 >> 2] | 0;
  }
  do if ((HEAP8[i2 >> 0] | 0) == 46) {
   if ((HEAP8[i2 + 1 >> 0] | 0) != 42) {
    HEAP32[i20 >> 2] = i2 + 1;
    i7 = _getint(i20) | 0;
    i2 = HEAP32[i20 >> 2] | 0;
    break;
   }
   if (_isdigit(HEAP8[i2 + 2 >> 0] | 0) | 0) {
    i2 = HEAP32[i20 >> 2] | 0;
    if ((HEAP8[i2 + 3 >> 0] | 0) == 36) {
     i7 = i2 + 2 | 0;
     HEAP32[i26 + ((HEAP8[i7 >> 0] | 0) + -48 << 2) >> 2] = 10;
     i7 = HEAP32[i25 + ((HEAP8[i7 >> 0] | 0) + -48 << 3) >> 2] | 0;
     i2 = i2 + 4 | 0;
     HEAP32[i20 >> 2] = i2;
     break;
    }
   }
   if (i11 | 0) {
    i1 = -1;
    break L1;
   }
   if (i14) {
    i8 = (HEAP32[i24 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i2 = HEAP32[i8 >> 2] | 0;
    HEAP32[i24 >> 2] = i8 + 4;
   } else i2 = 0;
   i8 = (HEAP32[i20 >> 2] | 0) + 2 | 0;
   HEAP32[i20 >> 2] = i8;
   i7 = i2;
   i2 = i8;
  } else i7 = -1; while (0);
  i8 = 0;
  while (1) {
   if (((HEAP8[i2 >> 0] | 0) + -65 | 0) >>> 0 > 57) {
    i1 = -1;
    break L1;
   }
   i3 = i2;
   i2 = i2 + 1 | 0;
   HEAP32[i20 >> 2] = i2;
   i3 = HEAP8[(HEAP8[i3 >> 0] | 0) + -65 + (22738 + (i8 * 58 | 0)) >> 0] | 0;
   i5 = i3 & 255;
   if ((i5 + -1 | 0) >>> 0 >= 8) break; else i8 = i5;
  }
  if (!(i3 << 24 >> 24)) {
   i1 = -1;
   break;
  }
  i6 = (i10 | 0) > -1;
  do if (i3 << 24 >> 24 == 19) if (i6) {
   i1 = -1;
   break L1;
  } else i13 = 50; else {
   if (i6) {
    HEAP32[i26 + (i10 << 2) >> 2] = i5;
    i6 = i25 + (i10 << 3) | 0;
    i10 = HEAP32[i6 + 4 >> 2] | 0;
    i13 = i21;
    HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i13 + 4 >> 2] = i10;
    i13 = 50;
    break;
   }
   if (!i14) {
    i1 = 0;
    break L1;
   }
   _pop_arg(i21, i5, i24);
   i2 = HEAP32[i20 >> 2] | 0;
  } while (0);
  if ((i13 | 0) == 50) {
   i13 = 0;
   if (!i14) {
    i2 = 0;
    i4 = i11;
    continue;
   }
  }
  i3 = HEAP8[i2 + -1 >> 0] | 0;
  i3 = (i8 | 0) != 0 & (i3 & 15 | 0) == 3 ? i3 & -33 : i3;
  i2 = i4 & -65537;
  i10 = (i4 & 8192 | 0) == 0 ? i4 : i2;
  L73 : do switch (i3 | 0) {
  case 110:
   switch ((i8 & 255) << 24 >> 24) {
   case 0:
    {
     HEAP32[HEAP32[i21 >> 2] >> 2] = i1;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   case 1:
    {
     HEAP32[HEAP32[i21 >> 2] >> 2] = i1;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   case 2:
    {
     i2 = HEAP32[i21 >> 2] | 0;
     HEAP32[i2 >> 2] = i1;
     HEAP32[i2 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   case 3:
    {
     HEAP16[HEAP32[i21 >> 2] >> 1] = i1;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   case 4:
    {
     HEAP8[HEAP32[i21 >> 2] >> 0] = i1;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   case 6:
    {
     HEAP32[HEAP32[i21 >> 2] >> 2] = i1;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   case 7:
    {
     i2 = HEAP32[i21 >> 2] | 0;
     HEAP32[i2 >> 2] = i1;
     HEAP32[i2 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   default:
    {
     i2 = 0;
     i4 = i11;
     continue L1;
    }
   }
  case 112:
   {
    i3 = 120;
    i2 = i7 >>> 0 > 8 ? i7 : 8;
    i4 = i10 | 8;
    i13 = 62;
    break;
   }
  case 88:
  case 120:
   {
    i2 = i7;
    i4 = i10;
    i13 = 62;
    break;
   }
  case 111:
   {
    i3 = i21;
    i2 = HEAP32[i3 >> 2] | 0;
    i3 = HEAP32[i3 + 4 >> 2] | 0;
    i6 = _fmt_o(i2, i3, i15) | 0;
    i4 = i16 - i6 | 0;
    i8 = 0;
    i5 = 23202;
    i7 = (i10 & 8 | 0) == 0 | (i7 | 0) > (i4 | 0) ? i7 : i4 + 1 | 0;
    i4 = i10;
    i13 = 68;
    break;
   }
  case 105:
  case 100:
   {
    i3 = i21;
    i2 = HEAP32[i3 >> 2] | 0;
    i3 = HEAP32[i3 + 4 >> 2] | 0;
    if ((i3 | 0) < 0) {
     i2 = _i64Subtract(0, 0, i2 | 0, i3 | 0) | 0;
     i3 = tempRet0;
     i4 = i21;
     HEAP32[i4 >> 2] = i2;
     HEAP32[i4 + 4 >> 2] = i3;
     i4 = 1;
     i5 = 23202;
     i13 = 67;
     break L73;
    } else {
     i4 = (i10 & 2049 | 0) != 0 & 1;
     i5 = (i10 & 2048 | 0) == 0 ? ((i10 & 1 | 0) == 0 ? 23202 : 23204) : 23203;
     i13 = 67;
     break L73;
    }
   }
  case 117:
   {
    i3 = i21;
    i4 = 0;
    i5 = 23202;
    i2 = HEAP32[i3 >> 2] | 0;
    i3 = HEAP32[i3 + 4 >> 2] | 0;
    i13 = 67;
    break;
   }
  case 99:
   {
    HEAP8[i17 >> 0] = HEAP32[i21 >> 2];
    i9 = i17;
    i8 = 0;
    i5 = 23202;
    i6 = i15;
    i3 = 1;
    break;
   }
  case 109:
   {
    i3 = _strerror(HEAP32[(___errno_location() | 0) >> 2] | 0) | 0;
    i13 = 72;
    break;
   }
  case 115:
   {
    i3 = HEAP32[i21 >> 2] | 0;
    i3 = i3 | 0 ? i3 : 31853;
    i13 = 72;
    break;
   }
  case 67:
   {
    HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i18 >> 2] = 0;
    HEAP32[i21 >> 2] = i22;
    i7 = -1;
    i4 = i22;
    i13 = 76;
    break;
   }
  case 83:
   {
    i2 = HEAP32[i21 >> 2] | 0;
    if (!i7) {
     _pad_673(i19, 32, i12, 0, i10);
     i2 = 0;
     i13 = 85;
    } else {
     i4 = i2;
     i13 = 76;
    }
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    i2 = _fmt_fp(i19, +HEAPF64[i21 >> 3], i12, i7, i10, i3) | 0;
    i4 = i11;
    continue L1;
   }
  default:
   {
    i8 = 0;
    i5 = 23202;
    i6 = i15;
    i3 = i7;
    i2 = i10;
   }
  } while (0);
  L97 : do if ((i13 | 0) == 62) {
   i10 = i21;
   i9 = HEAP32[i10 >> 2] | 0;
   i10 = HEAP32[i10 + 4 >> 2] | 0;
   i6 = _fmt_x(i9, i10, i15, i3 & 32) | 0;
   i5 = (i4 & 8 | 0) == 0 | (i9 | 0) == 0 & (i10 | 0) == 0;
   i8 = i5 ? 0 : 2;
   i5 = i5 ? 23202 : 23202 + (i3 >> 4) | 0;
   i7 = i2;
   i2 = i9;
   i3 = i10;
   i13 = 68;
  } else if ((i13 | 0) == 67) {
   i6 = _fmt_u(i2, i3, i15) | 0;
   i8 = i4;
   i4 = i10;
   i13 = 68;
  } else if ((i13 | 0) == 72) {
   i13 = 0;
   i10 = _memchr(i3, 0, i7) | 0;
   i4 = (i10 | 0) == 0;
   i9 = i3;
   i8 = 0;
   i5 = 23202;
   i6 = i4 ? i3 + i7 | 0 : i10;
   i3 = i4 ? i7 : i10 - i3 | 0;
  } else if ((i13 | 0) == 76) {
   i13 = 0;
   i6 = i4;
   i2 = 0;
   i3 = 0;
   while (1) {
    i5 = HEAP32[i6 >> 2] | 0;
    if (!i5) break;
    i3 = _wctomb(i23, i5) | 0;
    if ((i3 | 0) < 0 | i3 >>> 0 > (i7 - i2 | 0) >>> 0) break;
    i2 = i3 + i2 | 0;
    if (i7 >>> 0 > i2 >>> 0) i6 = i6 + 4 | 0; else break;
   }
   if ((i3 | 0) < 0) {
    i1 = -1;
    break L1;
   }
   _pad_673(i19, 32, i12, i2, i10);
   if (!i2) {
    i2 = 0;
    i13 = 85;
   } else {
    i5 = 0;
    while (1) {
     i3 = HEAP32[i4 >> 2] | 0;
     if (!i3) {
      i13 = 85;
      break L97;
     }
     i3 = _wctomb(i23, i3) | 0;
     i5 = i3 + i5 | 0;
     if ((i5 | 0) > (i2 | 0)) {
      i13 = 85;
      break L97;
     }
     _out(i19, i23, i3);
     if (i5 >>> 0 >= i2 >>> 0) {
      i13 = 85;
      break;
     } else i4 = i4 + 4 | 0;
    }
   }
  } while (0);
  if ((i13 | 0) == 68) {
   i13 = 0;
   i3 = (i2 | 0) != 0 | (i3 | 0) != 0;
   i2 = (i7 | 0) != 0 | i3;
   i3 = i16 - i6 + ((i3 ^ 1) & 1) | 0;
   i9 = i2 ? i6 : i15;
   i6 = i15;
   i3 = i2 ? ((i7 | 0) > (i3 | 0) ? i7 : i3) : i7;
   i2 = (i7 | 0) > -1 ? i4 & -65537 : i4;
  } else if ((i13 | 0) == 85) {
   i13 = 0;
   _pad_673(i19, 32, i12, i2, i10 ^ 8192);
   i2 = (i12 | 0) > (i2 | 0) ? i12 : i2;
   i4 = i11;
   continue;
  }
  i7 = i6 - i9 | 0;
  i6 = (i3 | 0) < (i7 | 0) ? i7 : i3;
  i10 = i6 + i8 | 0;
  i4 = (i12 | 0) < (i10 | 0) ? i10 : i12;
  _pad_673(i19, 32, i4, i10, i2);
  _out(i19, i5, i8);
  _pad_673(i19, 48, i4, i10, i2 ^ 65536);
  _pad_673(i19, 48, i6, i7, 0);
  _out(i19, i9, i7);
  _pad_673(i19, 32, i4, i10, i2 ^ 8192);
  i2 = i4;
  i4 = i11;
 }
 L116 : do if ((i13 | 0) == 88) if (!i19) if (!i4) i1 = 0; else {
  i1 = 1;
  while (1) {
   i2 = HEAP32[i26 + (i1 << 2) >> 2] | 0;
   if (!i2) break;
   _pop_arg(i25 + (i1 << 3) | 0, i2, i24);
   i2 = i1 + 1 | 0;
   if ((i1 | 0) < 9) i1 = i2; else {
    i1 = i2;
    break;
   }
  }
  if ((i1 | 0) < 10) while (1) {
   if (HEAP32[i26 + (i1 << 2) >> 2] | 0) {
    i1 = -1;
    break L116;
   }
   if ((i1 | 0) < 9) i1 = i1 + 1 | 0; else {
    i1 = 1;
    break;
   }
  } else i1 = 1;
 } while (0);
 STACKTOP = i27;
 return i1 | 0;
}

function _fmt_fp(i25, d4, i27, i11, i26, i18) {
 i25 = i25 | 0;
 d4 = +d4;
 i27 = i27 | 0;
 i11 = i11 | 0;
 i26 = i26 | 0;
 i18 = i18 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, d6 = 0.0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i28 = 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(560);
 i3 = i28 + 8 | 0;
 i13 = i28;
 i24 = i28 + 524 | 0;
 i23 = i24;
 i5 = i28 + 512 | 0;
 HEAP32[i13 >> 2] = 0;
 i22 = i5 + 12 | 0;
 ___DOUBLE_BITS_674(d4) | 0;
 if ((tempRet0 | 0) < 0) {
  d4 = -d4;
  i20 = 1;
  i19 = 23212;
 } else {
  i20 = (i26 & 2049 | 0) != 0 & 1;
  i19 = (i26 & 2048 | 0) == 0 ? ((i26 & 1 | 0) == 0 ? 23213 : 23218) : 23215;
 }
 ___DOUBLE_BITS_674(d4) | 0;
 do if (0 == 0 & (tempRet0 & 2146435072 | 0) == 2146435072) {
  i24 = (i18 & 32 | 0) != 0;
  i1 = i20 + 3 | 0;
  _pad_673(i25, 32, i27, i1, i26 & -65537);
  _out(i25, i19, i20);
  _out(i25, d4 != d4 | 0.0 != 0.0 ? (i24 ? 31377 : 23239) : i24 ? 23231 : 23235, 3);
  _pad_673(i25, 32, i27, i1, i26 ^ 8192);
 } else {
  d4 = +_frexpl(d4, i13) * 2.0;
  i1 = d4 != 0.0;
  if (i1) HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + -1;
  i15 = i18 | 32;
  if ((i15 | 0) == 97) {
   i8 = i18 & 32;
   i10 = (i8 | 0) == 0 ? i19 : i19 + 9 | 0;
   i9 = i20 | 2;
   i1 = 12 - i11 | 0;
   do if (!(i11 >>> 0 > 11 | (i1 | 0) == 0)) {
    d6 = 8.0;
    do {
     i1 = i1 + -1 | 0;
     d6 = d6 * 16.0;
    } while ((i1 | 0) != 0);
    if ((HEAP8[i10 >> 0] | 0) == 45) {
     d4 = -(d6 + (-d4 - d6));
     break;
    } else {
     d4 = d4 + d6 - d6;
     break;
    }
   } while (0);
   i2 = HEAP32[i13 >> 2] | 0;
   i1 = (i2 | 0) < 0 ? 0 - i2 | 0 : i2;
   i1 = _fmt_u(i1, ((i1 | 0) < 0) << 31 >> 31, i22) | 0;
   if ((i1 | 0) == (i22 | 0)) {
    i1 = i5 + 11 | 0;
    HEAP8[i1 >> 0] = 48;
   }
   HEAP8[i1 + -1 >> 0] = (i2 >> 31 & 2) + 43;
   i7 = i1 + -2 | 0;
   HEAP8[i7 >> 0] = i18 + 15;
   i3 = (i11 | 0) < 1;
   i5 = (i26 & 8 | 0) == 0;
   i1 = i24;
   do {
    i21 = ~~d4;
    i2 = i1 + 1 | 0;
    HEAP8[i1 >> 0] = i8 | HEAPU8[23243 + i21 >> 0];
    d4 = (d4 - +(i21 | 0)) * 16.0;
    if ((i2 - i23 | 0) == 1) if (i5 & (i3 & d4 == 0.0)) i1 = i2; else {
     HEAP8[i2 >> 0] = 46;
     i1 = i1 + 2 | 0;
    } else i1 = i2;
   } while (d4 != 0.0);
   if (!i11) i12 = 24; else if ((-2 - i23 + i1 | 0) < (i11 | 0)) {
    i2 = i1 - i23 | 0;
    i1 = i11 + 2 | 0;
   } else i12 = 24;
   if ((i12 | 0) == 24) {
    i1 = i1 - i23 | 0;
    i2 = i1;
   }
   i22 = i22 - i7 | 0;
   i23 = i22 + i9 + i1 | 0;
   _pad_673(i25, 32, i27, i23, i26);
   _out(i25, i10, i9);
   _pad_673(i25, 48, i27, i23, i26 ^ 65536);
   _out(i25, i24, i2);
   _pad_673(i25, 48, i1 - i2 | 0, 0, 0);
   _out(i25, i7, i22);
   _pad_673(i25, 32, i27, i23, i26 ^ 8192);
   i1 = i23;
   break;
  }
  i2 = (i11 | 0) < 0 ? 6 : i11;
  if (i1) {
   i1 = (HEAP32[i13 >> 2] | 0) + -28 | 0;
   HEAP32[i13 >> 2] = i1;
   d4 = d4 * 268435456.0;
  } else i1 = HEAP32[i13 >> 2] | 0;
  i21 = (i1 | 0) < 0 ? i3 : i3 + 288 | 0;
  i3 = i21;
  do {
   i17 = ~~d4 >>> 0;
   HEAP32[i3 >> 2] = i17;
   i3 = i3 + 4 | 0;
   d4 = (d4 - +(i17 >>> 0)) * 1.0e9;
  } while (d4 != 0.0);
  if ((i1 | 0) > 0) {
   i5 = i21;
   i8 = i3;
   while (1) {
    i7 = (i1 | 0) < 29 ? i1 : 29;
    i1 = i8 + -4 | 0;
    if (i1 >>> 0 >= i5 >>> 0) {
     i3 = 0;
     do {
      i16 = _bitshift64Shl(HEAP32[i1 >> 2] | 0, 0, i7 | 0) | 0;
      i16 = _i64Add(i16 | 0, tempRet0 | 0, i3 | 0, 0) | 0;
      i17 = tempRet0;
      i14 = ___uremdi3(i16 | 0, i17 | 0, 1e9, 0) | 0;
      HEAP32[i1 >> 2] = i14;
      i3 = ___udivdi3(i16 | 0, i17 | 0, 1e9, 0) | 0;
      i1 = i1 + -4 | 0;
     } while (i1 >>> 0 >= i5 >>> 0);
     if (i3) {
      i5 = i5 + -4 | 0;
      HEAP32[i5 >> 2] = i3;
     }
    }
    i3 = i8;
    while (1) {
     if (i3 >>> 0 <= i5 >>> 0) break;
     i1 = i3 + -4 | 0;
     if (!(HEAP32[i1 >> 2] | 0)) i3 = i1; else break;
    }
    i1 = (HEAP32[i13 >> 2] | 0) - i7 | 0;
    HEAP32[i13 >> 2] = i1;
    if ((i1 | 0) > 0) i8 = i3; else break;
   }
  } else i5 = i21;
  if ((i1 | 0) < 0) {
   i11 = ((i2 + 25 | 0) / 9 | 0) + 1 | 0;
   i12 = (i15 | 0) == 102;
   do {
    i10 = 0 - i1 | 0;
    i10 = (i10 | 0) < 9 ? i10 : 9;
    if (i5 >>> 0 < i3 >>> 0) {
     i7 = (1 << i10) + -1 | 0;
     i8 = 1e9 >>> i10;
     i9 = 0;
     i1 = i5;
     do {
      i17 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = (i17 >>> i10) + i9;
      i9 = Math_imul(i17 & i7, i8) | 0;
      i1 = i1 + 4 | 0;
     } while (i1 >>> 0 < i3 >>> 0);
     i1 = (HEAP32[i5 >> 2] | 0) == 0 ? i5 + 4 | 0 : i5;
     if (!i9) {
      i5 = i1;
      i1 = i3;
     } else {
      HEAP32[i3 >> 2] = i9;
      i5 = i1;
      i1 = i3 + 4 | 0;
     }
    } else {
     i5 = (HEAP32[i5 >> 2] | 0) == 0 ? i5 + 4 | 0 : i5;
     i1 = i3;
    }
    i3 = i12 ? i21 : i5;
    i3 = (i1 - i3 >> 2 | 0) > (i11 | 0) ? i3 + (i11 << 2) | 0 : i1;
    i1 = (HEAP32[i13 >> 2] | 0) + i10 | 0;
    HEAP32[i13 >> 2] = i1;
   } while ((i1 | 0) < 0);
   i1 = i5;
   i11 = i3;
  } else {
   i1 = i5;
   i11 = i3;
  }
  i17 = i21;
  if (i1 >>> 0 < i11 >>> 0) {
   i3 = (i17 - i1 >> 2) * 9 | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   if (i7 >>> 0 >= 10) {
    i5 = 10;
    do {
     i5 = i5 * 10 | 0;
     i3 = i3 + 1 | 0;
    } while (i7 >>> 0 >= i5 >>> 0);
   }
  } else i3 = 0;
  i12 = (i15 | 0) == 103;
  i14 = (i2 | 0) != 0;
  i5 = i2 - ((i15 | 0) != 102 ? i3 : 0) + ((i14 & i12) << 31 >> 31) | 0;
  if ((i5 | 0) < (((i11 - i17 >> 2) * 9 | 0) + -9 | 0)) {
   i5 = i5 + 9216 | 0;
   i10 = i21 + 4 + (((i5 | 0) / 9 | 0) + -1024 << 2) | 0;
   i5 = (i5 | 0) % 9 | 0;
   if ((i5 | 0) < 8) {
    i7 = 10;
    while (1) {
     i7 = i7 * 10 | 0;
     if ((i5 | 0) < 7) i5 = i5 + 1 | 0; else break;
    }
   } else i7 = 10;
   i8 = HEAP32[i10 >> 2] | 0;
   i9 = (i8 >>> 0) % (i7 >>> 0) | 0;
   i5 = (i10 + 4 | 0) == (i11 | 0);
   if (i5 & (i9 | 0) == 0) i5 = i10; else {
    d6 = (((i8 >>> 0) / (i7 >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
    i16 = (i7 | 0) / 2 | 0;
    d4 = i9 >>> 0 < i16 >>> 0 ? .5 : i5 & (i9 | 0) == (i16 | 0) ? 1.0 : 1.5;
    if (i20) {
     i16 = (HEAP8[i19 >> 0] | 0) == 45;
     d4 = i16 ? -d4 : d4;
     d6 = i16 ? -d6 : d6;
    }
    i5 = i8 - i9 | 0;
    HEAP32[i10 >> 2] = i5;
    if (d6 + d4 != d6) {
     i16 = i5 + i7 | 0;
     HEAP32[i10 >> 2] = i16;
     if (i16 >>> 0 > 999999999) {
      i3 = i10;
      while (1) {
       i5 = i3 + -4 | 0;
       HEAP32[i3 >> 2] = 0;
       if (i5 >>> 0 < i1 >>> 0) {
        i1 = i1 + -4 | 0;
        HEAP32[i1 >> 2] = 0;
       }
       i16 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
       HEAP32[i5 >> 2] = i16;
       if (i16 >>> 0 > 999999999) i3 = i5; else break;
      }
     } else i5 = i10;
     i3 = (i17 - i1 >> 2) * 9 | 0;
     i8 = HEAP32[i1 >> 2] | 0;
     if (i8 >>> 0 >= 10) {
      i7 = 10;
      do {
       i7 = i7 * 10 | 0;
       i3 = i3 + 1 | 0;
      } while (i8 >>> 0 >= i7 >>> 0);
     }
    } else i5 = i10;
   }
   i5 = i5 + 4 | 0;
   i5 = i11 >>> 0 > i5 >>> 0 ? i5 : i11;
   i16 = i1;
  } else {
   i5 = i11;
   i16 = i1;
  }
  i15 = i5;
  while (1) {
   if (i15 >>> 0 <= i16 >>> 0) {
    i13 = 0;
    break;
   }
   i1 = i15 + -4 | 0;
   if (!(HEAP32[i1 >> 2] | 0)) i15 = i1; else {
    i13 = 1;
    break;
   }
  }
  i11 = 0 - i3 | 0;
  do if (i12) {
   i1 = i2 + ((i14 ^ 1) & 1) | 0;
   if ((i1 | 0) > (i3 | 0) & (i3 | 0) > -5) {
    i8 = i18 + -1 | 0;
    i2 = i1 + -1 - i3 | 0;
   } else {
    i8 = i18 + -2 | 0;
    i2 = i1 + -1 | 0;
   }
   i1 = i26 & 8;
   if (!i1) {
    if (i13) {
     i7 = HEAP32[i15 + -4 >> 2] | 0;
     if (!i7) i5 = 9; else if (!((i7 >>> 0) % 10 | 0)) {
      i5 = 0;
      i1 = 10;
      do {
       i1 = i1 * 10 | 0;
       i5 = i5 + 1 | 0;
      } while (!((i7 >>> 0) % (i1 >>> 0) | 0 | 0));
     } else i5 = 0;
    } else i5 = 9;
    i1 = ((i15 - i17 >> 2) * 9 | 0) + -9 | 0;
    if ((i8 | 32 | 0) == 102) {
     i10 = i1 - i5 | 0;
     i10 = (i10 | 0) > 0 ? i10 : 0;
     i2 = (i2 | 0) < (i10 | 0) ? i2 : i10;
     i10 = 0;
     break;
    } else {
     i10 = i1 + i3 - i5 | 0;
     i10 = (i10 | 0) > 0 ? i10 : 0;
     i2 = (i2 | 0) < (i10 | 0) ? i2 : i10;
     i10 = 0;
     break;
    }
   } else i10 = i1;
  } else {
   i8 = i18;
   i10 = i26 & 8;
  } while (0);
  i12 = i2 | i10;
  i7 = (i12 | 0) != 0 & 1;
  i9 = (i8 | 32 | 0) == 102;
  if (i9) {
   i14 = 0;
   i1 = (i3 | 0) > 0 ? i3 : 0;
  } else {
   i1 = (i3 | 0) < 0 ? i11 : i3;
   i1 = _fmt_u(i1, ((i1 | 0) < 0) << 31 >> 31, i22) | 0;
   i5 = i22;
   if ((i5 - i1 | 0) < 2) do {
    i1 = i1 + -1 | 0;
    HEAP8[i1 >> 0] = 48;
   } while ((i5 - i1 | 0) < 2);
   HEAP8[i1 + -1 >> 0] = (i3 >> 31 & 2) + 43;
   i1 = i1 + -2 | 0;
   HEAP8[i1 >> 0] = i8;
   i14 = i1;
   i1 = i5 - i1 | 0;
  }
  i1 = i20 + 1 + i2 + i7 + i1 | 0;
  _pad_673(i25, 32, i27, i1, i26);
  _out(i25, i19, i20);
  _pad_673(i25, 48, i27, i1, i26 ^ 65536);
  if (i9) {
   i7 = i16 >>> 0 > i21 >>> 0 ? i21 : i16;
   i10 = i24 + 9 | 0;
   i8 = i10;
   i9 = i24 + 8 | 0;
   i5 = i7;
   do {
    i3 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i10) | 0;
    if ((i5 | 0) == (i7 | 0)) {
     if ((i3 | 0) == (i10 | 0)) {
      HEAP8[i9 >> 0] = 48;
      i3 = i9;
     }
    } else if (i3 >>> 0 > i24 >>> 0) {
     _memset(i24 | 0, 48, i3 - i23 | 0) | 0;
     do i3 = i3 + -1 | 0; while (i3 >>> 0 > i24 >>> 0);
    }
    _out(i25, i3, i8 - i3 | 0);
    i5 = i5 + 4 | 0;
   } while (i5 >>> 0 <= i21 >>> 0);
   if (i12 | 0) _out(i25, 31383, 1);
   if (i5 >>> 0 < i15 >>> 0 & (i2 | 0) > 0) while (1) {
    i3 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i10) | 0;
    if (i3 >>> 0 > i24 >>> 0) {
     _memset(i24 | 0, 48, i3 - i23 | 0) | 0;
     do i3 = i3 + -1 | 0; while (i3 >>> 0 > i24 >>> 0);
    }
    _out(i25, i3, (i2 | 0) < 9 ? i2 : 9);
    i5 = i5 + 4 | 0;
    i3 = i2 + -9 | 0;
    if (!(i5 >>> 0 < i15 >>> 0 & (i2 | 0) > 9)) {
     i2 = i3;
     break;
    } else i2 = i3;
   }
   _pad_673(i25, 48, i2 + 9 | 0, 9, 0);
  } else {
   i12 = i13 ? i15 : i16 + 4 | 0;
   if ((i2 | 0) > -1) {
    i13 = i24 + 9 | 0;
    i10 = (i10 | 0) == 0;
    i11 = i13;
    i8 = 0 - i23 | 0;
    i9 = i24 + 8 | 0;
    i7 = i16;
    do {
     i3 = _fmt_u(HEAP32[i7 >> 2] | 0, 0, i13) | 0;
     if ((i3 | 0) == (i13 | 0)) {
      HEAP8[i9 >> 0] = 48;
      i3 = i9;
     }
     do if ((i7 | 0) == (i16 | 0)) {
      i5 = i3 + 1 | 0;
      _out(i25, i3, 1);
      if (i10 & (i2 | 0) < 1) {
       i3 = i5;
       break;
      }
      _out(i25, 31383, 1);
      i3 = i5;
     } else {
      if (i3 >>> 0 <= i24 >>> 0) break;
      _memset(i24 | 0, 48, i3 + i8 | 0) | 0;
      do i3 = i3 + -1 | 0; while (i3 >>> 0 > i24 >>> 0);
     } while (0);
     i23 = i11 - i3 | 0;
     _out(i25, i3, (i2 | 0) > (i23 | 0) ? i23 : i2);
     i2 = i2 - i23 | 0;
     i7 = i7 + 4 | 0;
    } while (i7 >>> 0 < i12 >>> 0 & (i2 | 0) > -1);
   }
   _pad_673(i25, 48, i2 + 18 | 0, 18, 0);
   _out(i25, i14, i22 - i14 | 0);
  }
  _pad_673(i25, 32, i27, i1, i26 ^ 8192);
 } while (0);
 STACKTOP = i28;
 return ((i1 | 0) < (i27 | 0) ? i27 : i1) | 0;
}

function _decfloat(i23, i2, i26, i25, i24, i20) {
 i23 = i23 | 0;
 i2 = i2 | 0;
 i26 = i26 | 0;
 i25 = i25 | 0;
 i24 = i24 | 0;
 i20 = i20 | 0;
 var d1 = 0.0, i3 = 0, i4 = 0, d5 = 0.0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = 0.0, d11 = 0.0, i12 = 0, d13 = 0.0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i21 = 0, i22 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = 0.0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(512);
 i27 = i30;
 i28 = i25 + i26 | 0;
 i29 = 0 - i28 | 0;
 i21 = i23 + 4 | 0;
 i22 = i23 + 100 | 0;
 i3 = 0;
 L1 : while (1) {
  switch (i2 | 0) {
  case 46:
   {
    i19 = 6;
    break L1;
   }
  case 48:
   break;
  default:
   {
    i14 = 0;
    i8 = i3;
    i9 = 0;
    i7 = 0;
    break L1;
   }
  }
  i2 = HEAP32[i21 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i22 >> 2] | 0) >>> 0) {
   HEAP32[i21 >> 2] = i2 + 1;
   i2 = HEAPU8[i2 >> 0] | 0;
   i3 = 1;
   continue;
  } else {
   i2 = ___shgetc(i23) | 0;
   i3 = 1;
   continue;
  }
 }
 if ((i19 | 0) == 6) {
  i2 = HEAP32[i21 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i22 >> 2] | 0) >>> 0) {
   HEAP32[i21 >> 2] = i2 + 1;
   i2 = HEAPU8[i2 >> 0] | 0;
  } else i2 = ___shgetc(i23) | 0;
  if ((i2 | 0) == 48) {
   i3 = 0;
   i2 = 0;
   while (1) {
    i3 = _i64Add(i3 | 0, i2 | 0, -1, -1) | 0;
    i7 = tempRet0;
    i2 = HEAP32[i21 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[i22 >> 2] | 0) >>> 0) {
     HEAP32[i21 >> 2] = i2 + 1;
     i2 = HEAPU8[i2 >> 0] | 0;
    } else i2 = ___shgetc(i23) | 0;
    if ((i2 | 0) == 48) i2 = i7; else {
     i14 = 1;
     i8 = 1;
     i9 = i3;
     break;
    }
   }
  } else {
   i14 = 1;
   i8 = i3;
   i9 = 0;
   i7 = 0;
  }
 }
 HEAP32[i27 >> 2] = 0;
 i6 = i2 + -48 | 0;
 i4 = (i2 | 0) == 46;
 L20 : do if (i4 | i6 >>> 0 < 10) {
  i19 = i27 + 496 | 0;
  i15 = 0;
  i3 = 0;
  i12 = 0;
  i16 = i14;
  i17 = i8;
  i18 = i6;
  i8 = 0;
  i6 = 0;
  L22 : while (1) {
   do if (i4) if (!i16) {
    i16 = 1;
    i9 = i8;
    i7 = i6;
   } else break L22; else {
    i8 = _i64Add(i8 | 0, i6 | 0, 1, 0) | 0;
    i6 = tempRet0;
    i14 = (i2 | 0) != 48;
    if ((i3 | 0) >= 125) {
     if (!i14) break;
     HEAP32[i19 >> 2] = HEAP32[i19 >> 2] | 1;
     break;
    }
    i4 = i27 + (i3 << 2) | 0;
    if (!i15) i2 = i18; else i2 = i2 + -48 + ((HEAP32[i4 >> 2] | 0) * 10 | 0) | 0;
    HEAP32[i4 >> 2] = i2;
    i15 = i15 + 1 | 0;
    i17 = (i15 | 0) == 9;
    i15 = i17 ? 0 : i15;
    i3 = i3 + (i17 & 1) | 0;
    i12 = i14 ? i8 : i12;
    i17 = 1;
   } while (0);
   i2 = HEAP32[i21 >> 2] | 0;
   if (i2 >>> 0 < (HEAP32[i22 >> 2] | 0) >>> 0) {
    HEAP32[i21 >> 2] = i2 + 1;
    i2 = HEAPU8[i2 >> 0] | 0;
   } else i2 = ___shgetc(i23) | 0;
   i18 = i2 + -48 | 0;
   i4 = (i2 | 0) == 46;
   if (!(i4 | i18 >>> 0 < 10)) {
    i14 = i16;
    i4 = i17;
    i19 = 29;
    break L20;
   }
  }
  i2 = i15;
  i4 = (i17 | 0) != 0;
  i19 = 37;
 } else {
  i15 = 0;
  i3 = 0;
  i12 = 0;
  i4 = i8;
  i8 = 0;
  i6 = 0;
  i19 = 29;
 } while (0);
 do if ((i19 | 0) == 29) {
  i18 = (i14 | 0) == 0;
  i9 = i18 ? i8 : i9;
  i7 = i18 ? i6 : i7;
  i4 = (i4 | 0) != 0;
  if (!(i4 & (i2 | 32 | 0) == 101)) if ((i2 | 0) > -1) {
   i2 = i15;
   i19 = 37;
   break;
  } else {
   i2 = i15;
   i19 = 39;
   break;
  }
  i4 = _scanexp(i23, i20) | 0;
  i2 = tempRet0;
  if ((i4 | 0) == 0 & (i2 | 0) == -2147483648) {
   if (!i20) {
    ___shlim(i23, 0);
    d1 = 0.0;
    break;
   }
   if (!(HEAP32[i22 >> 2] | 0)) {
    i4 = 0;
    i2 = 0;
   } else {
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + -1;
    i4 = 0;
    i2 = 0;
   }
  }
  i17 = _i64Add(i4 | 0, i2 | 0, i9 | 0, i7 | 0) | 0;
  i2 = i15;
  i7 = tempRet0;
  i19 = 41;
 } while (0);
 if ((i19 | 0) == 37) if (!(HEAP32[i22 >> 2] | 0)) i19 = 39; else {
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + -1;
  if (i4) {
   i17 = i9;
   i19 = 41;
  } else i19 = 40;
 }
 if ((i19 | 0) == 39) if (i4) {
  i17 = i9;
  i19 = 41;
 } else i19 = 40;
 do if ((i19 | 0) == 40) {
  HEAP32[(___errno_location() | 0) >> 2] = 22;
  ___shlim(i23, 0);
  d1 = 0.0;
 } else if ((i19 | 0) == 41) {
  i4 = HEAP32[i27 >> 2] | 0;
  if (!i4) {
   d1 = +(i24 | 0) * 0.0;
   break;
  }
  if (((i6 | 0) < 0 | (i6 | 0) == 0 & i8 >>> 0 < 10) & ((i17 | 0) == (i8 | 0) & (i7 | 0) == (i6 | 0))) if ((i26 | 0) > 30 | (i4 >>> i26 | 0) == 0) {
   d1 = +(i24 | 0) * +(i4 >>> 0);
   break;
  }
  i23 = (i25 | 0) / -2 | 0;
  i22 = ((i23 | 0) < 0) << 31 >> 31;
  if ((i7 | 0) > (i22 | 0) | (i7 | 0) == (i22 | 0) & i17 >>> 0 > i23 >>> 0) {
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   d1 = +(i24 | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
   break;
  }
  i23 = i25 + -106 | 0;
  i22 = ((i23 | 0) < 0) << 31 >> 31;
  if ((i7 | 0) < (i22 | 0) | (i7 | 0) == (i22 | 0) & i17 >>> 0 < i23 >>> 0) {
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   d1 = +(i24 | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
   break;
  }
  if (i2) {
   if ((i2 | 0) < 9) {
    i6 = i27 + (i3 << 2) | 0;
    i4 = HEAP32[i6 >> 2] | 0;
    while (1) {
     i4 = i4 * 10 | 0;
     if ((i2 | 0) >= 8) break; else i2 = i2 + 1 | 0;
    }
    HEAP32[i6 >> 2] = i4;
   }
   i3 = i3 + 1 | 0;
  }
  if ((i12 | 0) < 9) if ((i12 | 0) <= (i17 | 0) & (i17 | 0) < 18) {
   if ((i17 | 0) == 9) {
    d1 = +(i24 | 0) * +((HEAP32[i27 >> 2] | 0) >>> 0);
    break;
   }
   if ((i17 | 0) < 9) {
    d1 = +(i24 | 0) * +((HEAP32[i27 >> 2] | 0) >>> 0) / +(HEAP32[6616 + (8 - i17 << 2) >> 2] | 0);
    break;
   }
   i23 = i26 + 27 + (Math_imul(i17, -3) | 0) | 0;
   i2 = HEAP32[i27 >> 2] | 0;
   if ((i23 | 0) > 30 | (i2 >>> i23 | 0) == 0) {
    d1 = +(i24 | 0) * +(i2 >>> 0) * +(HEAP32[6616 + (i17 + -10 << 2) >> 2] | 0);
    break;
   }
  }
  i2 = (i17 | 0) % 9 | 0;
  if (!i2) {
   i2 = 0;
   i6 = 0;
  } else {
   i12 = (i17 | 0) > -1 ? i2 : i2 + 9 | 0;
   i8 = HEAP32[6616 + (8 - i12 << 2) >> 2] | 0;
   if (!i3) {
    i6 = 0;
    i3 = 0;
    i4 = i17;
   } else {
    i9 = 1e9 / (i8 | 0) | 0;
    i6 = 0;
    i7 = 0;
    i4 = i17;
    i2 = 0;
    do {
     i21 = i27 + (i2 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     i23 = ((i22 >>> 0) / (i8 >>> 0) | 0) + i6 | 0;
     HEAP32[i21 >> 2] = i23;
     i6 = Math_imul(i9, (i22 >>> 0) % (i8 >>> 0) | 0) | 0;
     i23 = (i2 | 0) == (i7 | 0) & (i23 | 0) == 0;
     i4 = i23 ? i4 + -9 | 0 : i4;
     i7 = i23 ? i7 + 1 & 127 : i7;
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i3 | 0));
    if (!i6) i6 = i7; else {
     HEAP32[i27 + (i3 << 2) >> 2] = i6;
     i6 = i7;
     i3 = i3 + 1 | 0;
    }
   }
   i2 = 0;
   i17 = 9 - i12 + i4 | 0;
  }
  L101 : while (1) {
   i12 = (i17 | 0) < 18;
   i14 = (i17 | 0) == 18;
   i15 = i27 + (i6 << 2) | 0;
   while (1) {
    if (!i12) {
     if (!i14) {
      i4 = i17;
      break L101;
     }
     if ((HEAP32[i15 >> 2] | 0) >>> 0 >= 9007199) {
      i4 = 18;
      break L101;
     }
    }
    i4 = 0;
    i16 = i3;
    i3 = i3 + 127 | 0;
    while (1) {
     i7 = i3 & 127;
     i8 = i27 + (i7 << 2) | 0;
     i3 = _bitshift64Shl(HEAP32[i8 >> 2] | 0, 0, 29) | 0;
     i3 = _i64Add(i3 | 0, tempRet0 | 0, i4 | 0, 0) | 0;
     i4 = tempRet0;
     if (i4 >>> 0 > 0 | (i4 | 0) == 0 & i3 >>> 0 > 1e9) {
      i9 = ___udivdi3(i3 | 0, i4 | 0, 1e9, 0) | 0;
      i3 = ___uremdi3(i3 | 0, i4 | 0, 1e9, 0) | 0;
     } else i9 = 0;
     HEAP32[i8 >> 2] = i3;
     i23 = (i7 | 0) == (i6 | 0);
     i16 = (i3 | 0) == 0 & (((i7 | 0) != (i16 + 127 & 127 | 0) | i23) ^ 1) ? i7 : i16;
     if (i23) break; else {
      i4 = i9;
      i3 = i7 + -1 | 0;
     }
    }
    i2 = i2 + -29 | 0;
    if (i9 | 0) break; else i3 = i16;
   }
   i6 = i6 + 127 & 127;
   i3 = i16 + 127 & 127;
   i4 = i27 + ((i16 + 126 & 127) << 2) | 0;
   if ((i6 | 0) == (i16 | 0)) HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | HEAP32[i27 + (i3 << 2) >> 2]; else i3 = i16;
   HEAP32[i27 + (i6 << 2) >> 2] = i9;
   i17 = i17 + 9 | 0;
  }
  L119 : while (1) {
   i16 = i3 + 1 & 127;
   i17 = i27 + ((i3 + 127 & 127) << 2) | 0;
   i14 = i4;
   while (1) {
    i8 = (i14 | 0) == 18;
    i15 = (i14 | 0) > 27 ? 9 : 1;
    i18 = i6;
    while (1) {
     i7 = 0;
     while (1) {
      i4 = i7 + i18 & 127;
      if ((i4 | 0) == (i3 | 0)) {
       i4 = 2;
       i19 = 88;
       break;
      }
      i4 = HEAP32[i27 + (i4 << 2) >> 2] | 0;
      i6 = HEAP32[6648 + (i7 << 2) >> 2] | 0;
      if (i4 >>> 0 < i6 >>> 0) {
       i4 = 2;
       i19 = 88;
       break;
      }
      if (i4 >>> 0 > i6 >>> 0) break;
      i4 = i7 + 1 | 0;
      if ((i7 | 0) < 1) i7 = i4; else {
       i19 = 88;
       break;
      }
     }
     if ((i19 | 0) == 88) {
      i19 = 0;
      if (i8 & (i4 | 0) == 2) {
       d1 = 0.0;
       i7 = 0;
       break L119;
      }
     }
     i2 = i15 + i2 | 0;
     if ((i18 | 0) == (i3 | 0)) i18 = i3; else break;
    }
    i9 = (1 << i15) + -1 | 0;
    i12 = 1e9 >>> i15;
    i8 = 0;
    i6 = i18;
    i4 = i14;
    i7 = i18;
    do {
     i21 = i27 + (i7 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     i23 = (i22 >>> i15) + i8 | 0;
     HEAP32[i21 >> 2] = i23;
     i8 = Math_imul(i22 & i9, i12) | 0;
     i23 = (i7 | 0) == (i6 | 0) & (i23 | 0) == 0;
     i4 = i23 ? i4 + -9 | 0 : i4;
     i6 = i23 ? i6 + 1 & 127 : i6;
     i7 = i7 + 1 & 127;
    } while ((i7 | 0) != (i3 | 0));
    if (!i8) {
     i14 = i4;
     continue;
    }
    if ((i16 | 0) != (i6 | 0)) break;
    HEAP32[i17 >> 2] = HEAP32[i17 >> 2] | 1;
    i14 = i4;
   }
   HEAP32[i27 + (i3 << 2) >> 2] = i8;
   i3 = i16;
  }
  do {
   i6 = i7 + i18 & 127;
   i4 = i3 + 1 & 127;
   if ((i6 | 0) == (i3 | 0)) {
    HEAP32[i27 + (i4 + -1 << 2) >> 2] = 0;
    i3 = i4;
   }
   d1 = d1 * 1.0e9 + +((HEAP32[i27 + (i6 << 2) >> 2] | 0) >>> 0);
   i7 = i7 + 1 | 0;
  } while ((i7 | 0) != 2);
  d13 = +(i24 | 0);
  d5 = d1 * d13;
  i6 = i2 + 53 | 0;
  i8 = i6 - i25 | 0;
  i9 = (i8 | 0) < (i26 | 0);
  i7 = i9 ? ((i8 | 0) > 0 ? i8 : 0) : i26;
  if ((i7 | 0) < 53) {
   d31 = +_copysignl(+_scalbn(1.0, 105 - i7 | 0), d5);
   d10 = +_fmodl(d5, +_scalbn(1.0, 53 - i7 | 0));
   d11 = d31;
   d1 = d10;
   d10 = d31 + (d5 - d10);
  } else {
   d11 = 0.0;
   d1 = 0.0;
   d10 = d5;
  }
  i4 = i18 + 2 & 127;
  if ((i4 | 0) == (i3 | 0)) d5 = d1; else {
   i4 = HEAP32[i27 + (i4 << 2) >> 2] | 0;
   do if (i4 >>> 0 < 5e8) {
    if (!i4) if ((i18 + 3 & 127 | 0) == (i3 | 0)) break;
    d1 = d13 * .25 + d1;
   } else {
    if ((i4 | 0) != 5e8) {
     d1 = d13 * .75 + d1;
     break;
    }
    if ((i18 + 3 & 127 | 0) == (i3 | 0)) {
     d1 = d13 * .5 + d1;
     break;
    } else {
     d1 = d13 * .75 + d1;
     break;
    }
   } while (0);
   if ((53 - i7 | 0) > 1) if (+_fmodl(d1, 1.0) != 0.0) d5 = d1; else d5 = d1 + 1.0; else d5 = d1;
  }
  d1 = d10 + d5 - d11;
  do if ((i6 & 2147483647 | 0) > (-2 - i28 | 0)) {
   i3 = !(+Math_abs(+d1) >= 9007199254740992.0);
   i2 = i2 + ((i3 ^ 1) & 1) | 0;
   d1 = i3 ? d1 : d1 * .5;
   if ((i2 + 50 | 0) <= (i29 | 0)) if (!(d5 != 0.0 & (i9 & ((i7 | 0) != (i8 | 0) | i3)))) break;
   HEAP32[(___errno_location() | 0) >> 2] = 34;
  } while (0);
  d1 = +_scalbnl(d1, i2);
 } while (0);
 STACKTOP = i30;
 return +d1;
}

function _wprintf_core(i13, i1, i26, i27, i28) {
 i13 = i13 | 0;
 i1 = i1 | 0;
 i26 = i26 | 0;
 i27 = i27 | 0;
 i28 = i28 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i29 = 0, d30 = 0.0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(128);
 i22 = i29 + 88 | 0;
 i21 = i29 + 72 | 0;
 i20 = i29 + 40 | 0;
 i19 = i29 + 32 | 0;
 i24 = i29 + 24 | 0;
 i23 = i29 + 16 | 0;
 i18 = i29 + 8 | 0;
 i14 = i29 + 108 | 0;
 i15 = i29;
 i16 = i29 + 112 | 0;
 i17 = i29 + 104 | 0;
 HEAP32[i14 >> 2] = i1;
 i12 = (i13 | 0) != 0;
 i2 = 0;
 i1 = 0;
 i5 = 0;
 L1 : while (1) {
  do if ((i1 | 0) > -1) {
   if ((i2 | 0) <= (2147483647 - i1 | 0)) {
    i1 = i2 + i1 | 0;
    break;
   }
   if (!(HEAP32[i13 >> 2] & 32)) {
    HEAP32[(___errno_location() | 0) >> 2] = 75;
    i1 = -1;
   } else i1 = -1;
  } while (0);
  i4 = HEAP32[i14 >> 2] | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  if (!i2) {
   i25 = 82;
   break;
  } else i3 = i4;
  L10 : while (1) {
   switch (i2 | 0) {
   case 37:
   case 0:
    break L10;
   default:
    {}
   }
   i11 = i3 + 4 | 0;
   HEAP32[i14 >> 2] = i11;
   i2 = HEAP32[i11 >> 2] | 0;
   i3 = i11;
  }
  i2 = _wcsspn(i3, 6936) | 0;
  i11 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = i11 + ((i2 & -2) << 2);
  i2 = i11 + (i2 >>> 1 << 2) - i4 >> 2;
  if (i12) _out_686(i13, i4, i2);
  if (i2 | 0) continue;
  i11 = (_iswdigit(HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0) | 0) == 0;
  i3 = HEAP32[i14 >> 2] | 0;
  if (i11) {
   i10 = -1;
   i2 = 1;
  } else if ((HEAP32[i3 + 8 >> 2] | 0) == 36) {
   i10 = (HEAP32[i3 + 4 >> 2] | 0) + -48 | 0;
   i5 = 1;
   i2 = 3;
  } else {
   i10 = -1;
   i2 = 1;
  }
  i2 = i3 + (i2 << 2) | 0;
  HEAP32[i14 >> 2] = i2;
  i3 = HEAP32[i2 >> 2] | 0;
  i11 = i3 + -32 | 0;
  if (i11 >>> 0 > 31 | (1 << i11 & 75913 | 0) == 0) i4 = 0; else {
   i4 = 0;
   do {
    i4 = 1 << i3 + -32 | i4;
    i2 = i2 + 4 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    i11 = i3 + -32 | 0;
   } while (!(i11 >>> 0 > 31 | (1 << i11 & 75913 | 0) == 0));
   HEAP32[i14 >> 2] = i2;
  }
  if ((i3 | 0) == 42) {
   if (!(_iswdigit(HEAP32[i2 + 4 >> 2] | 0) | 0)) i25 = 23; else {
    i3 = HEAP32[i14 >> 2] | 0;
    if ((HEAP32[i3 + 8 >> 2] | 0) == 36) {
     i2 = i3 + 4 | 0;
     HEAP32[i28 + ((HEAP32[i2 >> 2] | 0) + -48 << 2) >> 2] = 10;
     i2 = HEAP32[i27 + ((HEAP32[i2 >> 2] | 0) + -48 << 3) >> 2] | 0;
     i5 = 1;
     i3 = i3 + 12 | 0;
    } else i25 = 23;
   }
   if ((i25 | 0) == 23) {
    i25 = 0;
    if (i5 | 0) {
     i1 = -1;
     break;
    }
    if (i12) {
     i11 = (HEAP32[i26 >> 2] | 0) + (4 - 1) & ~(4 - 1);
     i2 = HEAP32[i11 >> 2] | 0;
     HEAP32[i26 >> 2] = i11 + 4;
    } else i2 = 0;
    i5 = 0;
    i3 = (HEAP32[i14 >> 2] | 0) + 4 | 0;
   }
   HEAP32[i14 >> 2] = i3;
   i11 = (i2 | 0) < 0;
   i2 = i11 ? 0 - i2 | 0 : i2;
   i4 = i11 ? i4 | 8192 : i4;
   i11 = i5;
  } else {
   i2 = _getint_687(i14) | 0;
   if ((i2 | 0) < 0) {
    i1 = -1;
    break;
   }
   i11 = i5;
   i3 = HEAP32[i14 >> 2] | 0;
  }
  do if ((HEAP32[i3 >> 2] | 0) == 46) {
   if ((HEAP32[i3 + 4 >> 2] | 0) != 42) {
    HEAP32[i14 >> 2] = i3 + 4;
    i9 = _getint_687(i14) | 0;
    i3 = HEAP32[i14 >> 2] | 0;
    break;
   }
   if (_isdigit(HEAP32[i3 + 8 >> 2] | 0) | 0) {
    i3 = HEAP32[i14 >> 2] | 0;
    if ((HEAP32[i3 + 12 >> 2] | 0) == 36) {
     i9 = i3 + 8 | 0;
     HEAP32[i28 + ((HEAP32[i9 >> 2] | 0) + -48 << 2) >> 2] = 10;
     i9 = HEAP32[i27 + ((HEAP32[i9 >> 2] | 0) + -48 << 3) >> 2] | 0;
     i3 = i3 + 16 | 0;
     HEAP32[i14 >> 2] = i3;
     break;
    }
   }
   if (i11 | 0) {
    i1 = -1;
    break L1;
   }
   if (i12) {
    i9 = (HEAP32[i26 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i3 = HEAP32[i9 >> 2] | 0;
    HEAP32[i26 >> 2] = i9 + 4;
   } else i3 = 0;
   i8 = (HEAP32[i14 >> 2] | 0) + 8 | 0;
   HEAP32[i14 >> 2] = i8;
   i9 = i3;
   i3 = i8;
  } else i9 = -1; while (0);
  i8 = 0;
  while (1) {
   i5 = (HEAP32[i3 >> 2] | 0) + -65 | 0;
   if (i5 >>> 0 > 57) {
    i1 = -1;
    break L1;
   }
   i3 = i3 + 4 | 0;
   HEAP32[i14 >> 2] = i3;
   i5 = HEAP8[31385 + (i8 * 58 | 0) + i5 >> 0] | 0;
   i6 = i5 & 255;
   if ((i6 + -1 | 0) >>> 0 >= 8) break; else i8 = i6;
  }
  if (!(i5 << 24 >> 24)) {
   i1 = -1;
   break;
  }
  i7 = (i10 | 0) > -1;
  do if (i5 << 24 >> 24 == 19) if (i7) {
   i1 = -1;
   break L1;
  } else i25 = 50; else {
   if (i7) {
    HEAP32[i28 + (i10 << 2) >> 2] = i6;
    i7 = i27 + (i10 << 3) | 0;
    i10 = HEAP32[i7 + 4 >> 2] | 0;
    i25 = i15;
    HEAP32[i25 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i25 + 4 >> 2] = i10;
    i25 = 50;
    break;
   }
   if (!i12) {
    i1 = 0;
    break L1;
   }
   _pop_arg_689(i15, i6, i26);
   i3 = HEAP32[i14 >> 2] | 0;
  } while (0);
  if ((i25 | 0) == 50) {
   i25 = 0;
   if (!i12) {
    i2 = 0;
    i5 = i11;
    continue;
   }
  }
  i3 = HEAP32[i3 + -4 >> 2] | 0;
  i3 = (i8 | 0) != 0 & (i3 & 15 | 0) == 3 ? i3 & -33 : i3;
  switch (i3 | 0) {
  case 110:
   switch ((i8 & 255) << 24 >> 24) {
   case 0:
    {
     HEAP32[HEAP32[i15 >> 2] >> 2] = i1;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   case 1:
    {
     HEAP32[HEAP32[i15 >> 2] >> 2] = i1;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   case 2:
    {
     i2 = HEAP32[i15 >> 2] | 0;
     HEAP32[i2 >> 2] = i1;
     HEAP32[i2 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   case 3:
    {
     HEAP16[HEAP32[i15 >> 2] >> 1] = i1;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   case 4:
    {
     HEAP8[HEAP32[i15 >> 2] >> 0] = i1;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   case 6:
    {
     HEAP32[HEAP32[i15 >> 2] >> 2] = i1;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   case 7:
    {
     i2 = HEAP32[i15 >> 2] | 0;
     HEAP32[i2 >> 2] = i1;
     HEAP32[i2 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   default:
    {
     i2 = 0;
     i5 = i11;
     continue L1;
    }
   }
  case 99:
   {
    _fputwc(_btowc(HEAP32[i15 >> 2] | 0) | 0, i13) | 0;
    i2 = 1;
    i5 = i11;
    continue L1;
   }
  case 67:
   {
    _fputwc(HEAP32[i15 >> 2] | 0, i13) | 0;
    i2 = 1;
    i5 = i11;
    continue L1;
   }
  case 83:
   {
    i5 = HEAP32[i15 >> 2] | 0;
    i3 = _wmemchr(i5, 0, i9) | 0;
    i3 = (i3 | 0) == 0 ? i9 : i3 - i5 >> 2;
    i2 = (i2 | 0) < (i3 | 0) ? i3 : i2;
    if (!(i4 & 8192)) {
     HEAP32[i18 >> 2] = i2 - i3;
     HEAP32[i18 + 4 >> 2] = 41949;
     _fprintf(i13, 31849, i18) | 0;
     _out_686(i13, i5, i3);
     i5 = i11;
     continue L1;
    } else {
     _out_686(i13, i5, i3);
     HEAP32[i23 >> 2] = i2 - i3;
     HEAP32[i23 + 4 >> 2] = 41949;
     _fprintf(i13, 31849, i23) | 0;
     i5 = i11;
     continue L1;
    }
   }
  case 109:
   {
    i3 = _strerror(HEAP32[(___errno_location() | 0) >> 2] | 0) | 0;
    HEAP32[i15 >> 2] = i3;
    break;
   }
  case 115:
   {
    i3 = HEAP32[i15 >> 2] | 0;
    break;
   }
  default:
   {
    i10 = i3 | 32;
    i8 = HEAP8[31870 + (i10 + -97) >> 0] | 0;
    HEAP32[i20 >> 2] = 31860 + (i4 >>> 3 & 1 ^ 1);
    HEAP32[i20 + 4 >> 2] = 31862 + (i4 >>> 11 & 1 ^ 1);
    HEAP32[i20 + 8 >> 2] = 31864 + (i4 >>> 13 & 1 ^ 1);
    HEAP32[i20 + 12 >> 2] = 31866 + (i4 & 1 ^ 1);
    HEAP32[i20 + 16 >> 2] = 31868 + (i4 >>> 16 & 1 ^ 1);
    HEAP32[i20 + 20 >> 2] = i8;
    HEAP32[i20 + 24 >> 2] = i3;
    _snprintf(i16, 16, 31894, i20) | 0;
    switch (i10 | 0) {
    case 103:
    case 102:
    case 101:
    case 97:
     {
      d30 = +HEAPF64[i15 >> 3];
      HEAP32[i21 >> 2] = i2;
      HEAP32[i21 + 4 >> 2] = i9;
      HEAPF64[i21 + 8 >> 3] = d30;
      i2 = _fprintf(i13, i16, i21) | 0;
      i5 = i11;
      continue L1;
     }
    case 112:
    case 120:
    case 117:
    case 111:
    case 105:
    case 100:
     {
      i5 = i15;
      i10 = HEAP32[i5 >> 2] | 0;
      i5 = HEAP32[i5 + 4 >> 2] | 0;
      HEAP32[i22 >> 2] = i2;
      HEAP32[i22 + 4 >> 2] = i9;
      i2 = i22 + 8 | 0;
      HEAP32[i2 >> 2] = i10;
      HEAP32[i2 + 4 >> 2] = i5;
      i2 = _fprintf(i13, i16, i22) | 0;
      i5 = i11;
      continue L1;
     }
    default:
     {
      i2 = 0;
      i5 = i11;
      continue L1;
     }
    }
   }
  }
  if (!i3) {
   HEAP32[i15 >> 2] = 31853;
   i3 = 31853;
  }
  i6 = i9 >>> 0 < 2147483647 ? i9 : 2147483647;
  L97 : do if ((i6 | 0) > 0) {
   i7 = i3;
   i5 = 0;
   while (1) {
    i8 = _mbtowc(i17, i7, 4) | 0;
    if ((i8 | 0) <= 0) break;
    i5 = i5 + 1 | 0;
    if ((i5 | 0) < (i6 | 0)) i7 = i7 + i8 | 0; else {
     i6 = i5;
     break L97;
    }
   }
   if ((i8 | 0) < 0) {
    i1 = -1;
    break L1;
   } else i6 = i5;
  } else i6 = 0; while (0);
  i2 = (i2 | 0) < (i6 | 0) ? i6 : i2;
  i5 = (i4 & 8192 | 0) != 0;
  if (!i5) {
   HEAP32[i24 >> 2] = i2 - i6;
   HEAP32[i24 + 4 >> 2] = 41949;
   _fprintf(i13, 31849, i24) | 0;
  }
  if (i6 | 0) {
   i4 = i6;
   do {
    i4 = i4 + -1 | 0;
    i3 = i3 + (_mbtowc(i17, i3, 4) | 0) | 0;
    _fputwc(HEAP32[i17 >> 2] | 0, i13) | 0;
   } while ((i4 | 0) != 0);
  }
  if (!i5) {
   i5 = i11;
   continue;
  }
  HEAP32[i19 >> 2] = i2 - i6;
  HEAP32[i19 + 4 >> 2] = 41949;
  _fprintf(i13, 31849, i19) | 0;
  i5 = i11;
 }
 L111 : do if ((i25 | 0) == 82) if (!i13) if (!i5) i1 = 0; else {
  i1 = 1;
  while (1) {
   i2 = HEAP32[i28 + (i1 << 2) >> 2] | 0;
   if (!i2) break;
   _pop_arg_689(i27 + (i1 << 3) | 0, i2, i26);
   i2 = i1 + 1 | 0;
   if ((i1 | 0) < 9) i1 = i2; else {
    i1 = i2;
    break;
   }
  }
  if ((i1 | 0) < 10) while (1) {
   if (HEAP32[i28 + (i1 << 2) >> 2] | 0) {
    i1 = -1;
    break L111;
   }
   if ((i1 | 0) < 9) i1 = i1 + 1 | 0; else {
    i1 = 1;
    break;
   }
  } else i1 = 1;
 } while (0);
 STACKTOP = i29;
 return i1 | 0;
}

function ___intscan(i13, i4, i6, i1, i2) {
 i13 = i13 | 0;
 i4 = i4 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0, i15 = 0;
 L1 : do if (i4 >>> 0 > 36) {
  HEAP32[(___errno_location() | 0) >> 2] = 22;
  i2 = 0;
  i1 = 0;
 } else {
  i15 = i13 + 4 | 0;
  i14 = i13 + 100 | 0;
  do {
   i3 = HEAP32[i15 >> 2] | 0;
   if (i3 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
    HEAP32[i15 >> 2] = i3 + 1;
    i3 = HEAPU8[i3 >> 0] | 0;
   } else i3 = ___shgetc(i13) | 0;
  } while ((_isspace(i3) | 0) != 0);
  L11 : do switch (i3 | 0) {
  case 43:
  case 45:
   {
    i3 = ((i3 | 0) == 45) << 31 >> 31;
    i5 = HEAP32[i15 >> 2] | 0;
    if (i5 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
     HEAP32[i15 >> 2] = i5 + 1;
     i12 = i3;
     i3 = HEAPU8[i5 >> 0] | 0;
     break L11;
    } else {
     i12 = i3;
     i3 = ___shgetc(i13) | 0;
     break L11;
    }
   }
  default:
   i12 = 0;
  } while (0);
  i5 = (i4 | 0) == 0;
  do if ((i4 | 16 | 0) == 16 & (i3 | 0) == 48) {
   i3 = HEAP32[i15 >> 2] | 0;
   if (i3 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
    HEAP32[i15 >> 2] = i3 + 1;
    i3 = HEAPU8[i3 >> 0] | 0;
   } else i3 = ___shgetc(i13) | 0;
   if ((i3 | 32 | 0) != 120) if (i5) {
    i4 = 8;
    i10 = 46;
    break;
   } else {
    i10 = 32;
    break;
   }
   i3 = HEAP32[i15 >> 2] | 0;
   if (i3 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
    HEAP32[i15 >> 2] = i3 + 1;
    i3 = HEAPU8[i3 >> 0] | 0;
   } else i3 = ___shgetc(i13) | 0;
   if ((HEAPU8[22473 + i3 >> 0] | 0) > 15) {
    i1 = (HEAP32[i14 >> 2] | 0) == 0;
    if (!i1) HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + -1;
    if (!i6) {
     ___shlim(i13, 0);
     i2 = 0;
     i1 = 0;
     break L1;
    }
    if (i1) {
     i2 = 0;
     i1 = 0;
     break L1;
    }
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + -1;
    i2 = 0;
    i1 = 0;
    break L1;
   } else {
    i4 = 16;
    i10 = 46;
   }
  } else {
   i4 = i5 ? 10 : i4;
   if (i4 >>> 0 > (HEAPU8[22473 + i3 >> 0] | 0) >>> 0) i10 = 32; else {
    if (HEAP32[i14 >> 2] | 0) HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + -1;
    ___shlim(i13, 0);
    HEAP32[(___errno_location() | 0) >> 2] = 22;
    i2 = 0;
    i1 = 0;
    break L1;
   }
  } while (0);
  L43 : do if ((i10 | 0) == 32) if ((i4 | 0) == 10) {
   i4 = i3 + -48 | 0;
   if (i4 >>> 0 < 10) {
    i3 = 0;
    i5 = i4;
    do {
     i3 = (i3 * 10 | 0) + i5 | 0;
     i4 = HEAP32[i15 >> 2] | 0;
     if (i4 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
      HEAP32[i15 >> 2] = i4 + 1;
      i4 = HEAPU8[i4 >> 0] | 0;
     } else i4 = ___shgetc(i13) | 0;
     i5 = i4 + -48 | 0;
    } while (i5 >>> 0 < 10 & i3 >>> 0 < 429496729);
    i6 = 0;
   } else {
    i4 = i3;
    i3 = 0;
    i6 = 0;
   }
   i7 = i4 + -48 | 0;
   if (i7 >>> 0 < 10) {
    i5 = i4;
    do {
     i4 = ___muldi3(i3 | 0, i6 | 0, 10, 0) | 0;
     i8 = tempRet0;
     i9 = ((i7 | 0) < 0) << 31 >> 31;
     i11 = ~i9;
     if (i8 >>> 0 > i11 >>> 0 | (i8 | 0) == (i11 | 0) & i4 >>> 0 > ~i7 >>> 0) {
      i4 = 10;
      i10 = 72;
      break L43;
     }
     i3 = _i64Add(i4 | 0, i8 | 0, i7 | 0, i9 | 0) | 0;
     i6 = tempRet0;
     i4 = HEAP32[i15 >> 2] | 0;
     if (i4 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
      HEAP32[i15 >> 2] = i4 + 1;
      i5 = HEAPU8[i4 >> 0] | 0;
     } else i5 = ___shgetc(i13) | 0;
     i7 = i5 + -48 | 0;
    } while (i7 >>> 0 < 10 & (i6 >>> 0 < 429496729 | (i6 | 0) == 429496729 & i3 >>> 0 < 2576980378));
    if (i7 >>> 0 > 9) {
     i5 = i12;
     i4 = i6;
    } else {
     i4 = 10;
     i10 = 72;
    }
   } else {
    i5 = i12;
    i4 = i6;
   }
  } else i10 = 46; while (0);
  L63 : do if ((i10 | 0) == 46) {
   if (!(i4 + -1 & i4)) {
    i10 = HEAP8[22729 + ((i4 * 23 | 0) >>> 5 & 7) >> 0] | 0;
    i6 = HEAP8[22473 + i3 >> 0] | 0;
    i5 = i6 & 255;
    if (i4 >>> 0 > i5 >>> 0) {
     i3 = 0;
     i7 = i5;
     do {
      i3 = i7 | i3 << i10;
      i5 = HEAP32[i15 >> 2] | 0;
      if (i5 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
       HEAP32[i15 >> 2] = i5 + 1;
       i5 = HEAPU8[i5 >> 0] | 0;
      } else i5 = ___shgetc(i13) | 0;
      i6 = HEAP8[22473 + i5 >> 0] | 0;
      i7 = i6 & 255;
     } while (i3 >>> 0 < 134217728 & i4 >>> 0 > i7 >>> 0);
     i7 = 0;
    } else {
     i5 = i3;
     i7 = 0;
     i3 = 0;
    }
    i8 = _bitshift64Lshr(-1, -1, i10 | 0) | 0;
    i9 = tempRet0;
    if (i4 >>> 0 <= (i6 & 255) >>> 0 | (i9 >>> 0 < i7 >>> 0 | (i9 | 0) == (i7 | 0) & i8 >>> 0 < i3 >>> 0)) {
     i6 = i7;
     i10 = 72;
     break;
    } else i5 = i7;
    while (1) {
     i3 = _bitshift64Shl(i3 | 0, i5 | 0, i10 | 0) | 0;
     i7 = tempRet0;
     i3 = i3 | i6 & 255;
     i5 = HEAP32[i15 >> 2] | 0;
     if (i5 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
      HEAP32[i15 >> 2] = i5 + 1;
      i5 = HEAPU8[i5 >> 0] | 0;
     } else i5 = ___shgetc(i13) | 0;
     i6 = HEAP8[22473 + i5 >> 0] | 0;
     if (i4 >>> 0 <= (i6 & 255) >>> 0 | (i7 >>> 0 > i9 >>> 0 | (i7 | 0) == (i9 | 0) & i3 >>> 0 > i8 >>> 0)) {
      i6 = i7;
      i10 = 72;
      break L63;
     } else i5 = i7;
    }
   }
   i6 = HEAP8[22473 + i3 >> 0] | 0;
   i5 = i6 & 255;
   if (i4 >>> 0 > i5 >>> 0) {
    i3 = 0;
    i7 = i5;
    do {
     i3 = i7 + (Math_imul(i3, i4) | 0) | 0;
     i5 = HEAP32[i15 >> 2] | 0;
     if (i5 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
      HEAP32[i15 >> 2] = i5 + 1;
      i5 = HEAPU8[i5 >> 0] | 0;
     } else i5 = ___shgetc(i13) | 0;
     i6 = HEAP8[22473 + i5 >> 0] | 0;
     i7 = i6 & 255;
    } while (i3 >>> 0 < 119304647 & i4 >>> 0 > i7 >>> 0);
    i7 = 0;
   } else {
    i5 = i3;
    i3 = 0;
    i7 = 0;
   }
   if (i4 >>> 0 > (i6 & 255) >>> 0) {
    i10 = ___udivdi3(-1, -1, i4 | 0, 0) | 0;
    i11 = tempRet0;
    i9 = i7;
    while (1) {
     if (i9 >>> 0 > i11 >>> 0 | (i9 | 0) == (i11 | 0) & i3 >>> 0 > i10 >>> 0) {
      i6 = i9;
      i10 = 72;
      break L63;
     }
     i7 = ___muldi3(i3 | 0, i9 | 0, i4 | 0, 0) | 0;
     i8 = tempRet0;
     i6 = i6 & 255;
     if (i8 >>> 0 > 4294967295 | (i8 | 0) == -1 & i7 >>> 0 > ~i6 >>> 0) {
      i6 = i9;
      i10 = 72;
      break L63;
     }
     i3 = _i64Add(i7 | 0, i8 | 0, i6 | 0, 0) | 0;
     i7 = tempRet0;
     i5 = HEAP32[i15 >> 2] | 0;
     if (i5 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
      HEAP32[i15 >> 2] = i5 + 1;
      i5 = HEAPU8[i5 >> 0] | 0;
     } else i5 = ___shgetc(i13) | 0;
     i6 = HEAP8[22473 + i5 >> 0] | 0;
     if (i4 >>> 0 <= (i6 & 255) >>> 0) {
      i6 = i7;
      i10 = 72;
      break;
     } else i9 = i7;
    }
   } else {
    i6 = i7;
    i10 = 72;
   }
  } while (0);
  if ((i10 | 0) == 72) if (i4 >>> 0 > (HEAPU8[22473 + i5 >> 0] | 0) >>> 0) {
   do {
    i3 = HEAP32[i15 >> 2] | 0;
    if (i3 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
     HEAP32[i15 >> 2] = i3 + 1;
     i3 = HEAPU8[i3 >> 0] | 0;
    } else i3 = ___shgetc(i13) | 0;
   } while (i4 >>> 0 > (HEAPU8[22473 + i3 >> 0] | 0) >>> 0);
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   i5 = (i1 & 1 | 0) == 0 & 0 == 0 ? i12 : 0;
   i4 = i2;
   i3 = i1;
  } else {
   i5 = i12;
   i4 = i6;
  }
  if (HEAP32[i14 >> 2] | 0) HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + -1;
  if (!(i4 >>> 0 < i2 >>> 0 | (i4 | 0) == (i2 | 0) & i3 >>> 0 < i1 >>> 0)) {
   if (!((i1 & 1 | 0) != 0 | 0 != 0 | (i5 | 0) != 0)) {
    HEAP32[(___errno_location() | 0) >> 2] = 34;
    i1 = _i64Add(i1 | 0, i2 | 0, -1, -1) | 0;
    i2 = tempRet0;
    break;
   }
   if (i4 >>> 0 > i2 >>> 0 | (i4 | 0) == (i2 | 0) & i3 >>> 0 > i1 >>> 0) {
    HEAP32[(___errno_location() | 0) >> 2] = 34;
    break;
   }
  }
  i1 = ((i5 | 0) < 0) << 31 >> 31;
  i1 = _i64Subtract(i3 ^ i5 | 0, i4 ^ i1 | 0, i5 | 0, i1 | 0) | 0;
  i2 = tempRet0;
 } while (0);
 tempRet0 = i2;
 return i1 | 0;
}

function ___rem_pio2_large(i19, i2, i23, i20, i26) {
 i19 = i19 | 0;
 i2 = i2 | 0;
 i23 = i23 | 0;
 i20 = i20 | 0;
 i26 = i26 | 0;
 var d1 = 0.0, d3 = 0.0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i21 = 0, i22 = 0, i24 = 0, i25 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = 0.0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(560);
 i24 = i30 + 480 | 0;
 i21 = i30 + 320 | 0;
 i29 = i30 + 160 | 0;
 i27 = i30;
 i25 = HEAP32[6656 + (i26 << 2) >> 2] | 0;
 i9 = i20 + -1 | 0;
 i18 = (i23 + -3 | 0) / 24 | 0;
 i18 = (i18 | 0) > 0 ? i18 : 0;
 i22 = Math_imul(i18, -24) | 0;
 i4 = i23 + -24 + i22 | 0;
 if ((i25 + i9 | 0) >= 0) {
  i7 = i25 + i20 | 0;
  i5 = i18 - i9 | 0;
  i6 = 0;
  while (1) {
   if ((i5 | 0) < 0) d1 = 0.0; else d1 = +(HEAP32[6672 + (i5 << 2) >> 2] | 0);
   HEAPF64[i21 + (i6 << 3) >> 3] = d1;
   i6 = i6 + 1 | 0;
   if ((i6 | 0) == (i7 | 0)) break; else i5 = i5 + 1 | 0;
  }
 }
 i8 = (i20 | 0) > 0;
 i7 = 0;
 while (1) {
  if (i8) {
   i6 = i7 + i9 | 0;
   d1 = 0.0;
   i5 = 0;
   do {
    d1 = d1 + +HEAPF64[i19 + (i5 << 3) >> 3] * +HEAPF64[i21 + (i6 - i5 << 3) >> 3];
    i5 = i5 + 1 | 0;
   } while ((i5 | 0) != (i20 | 0));
  } else d1 = 0.0;
  HEAPF64[i27 + (i7 << 3) >> 3] = d1;
  if ((i7 | 0) < (i25 | 0)) i7 = i7 + 1 | 0; else break;
 }
 i13 = (i4 | 0) > 0;
 i14 = 24 - i4 | 0;
 i15 = 23 - i4 | 0;
 i16 = (i20 | 0) > 0;
 i17 = (i4 | 0) == 0;
 i5 = i25;
 L17 : while (1) {
  d1 = +HEAPF64[i27 + (i5 << 3) >> 3];
  i8 = (i5 | 0) > 0;
  if (i8) {
   i6 = i5;
   i7 = 0;
   while (1) {
    d3 = +(~~(d1 * 5.960464477539063e-08) | 0);
    HEAP32[i24 + (i7 << 2) >> 2] = ~~(d1 - d3 * 16777216.0);
    i12 = i6;
    i6 = i6 + -1 | 0;
    d1 = +HEAPF64[i27 + (i6 << 3) >> 3] + d3;
    if ((i12 | 0) <= 1) break; else i7 = i7 + 1 | 0;
   }
  }
  d1 = +_scalbn(d1, i4);
  d1 = d1 - +Math_floor(+(d1 * .125)) * 8.0;
  i6 = ~~d1;
  d1 = d1 - +(i6 | 0);
  do if (i13) {
   i12 = i24 + (i5 + -1 << 2) | 0;
   i7 = HEAP32[i12 >> 2] | 0;
   i28 = i7 >> i14;
   i7 = i7 - (i28 << i14) | 0;
   HEAP32[i12 >> 2] = i7;
   i7 = i7 >> i15;
   i6 = i28 + i6 | 0;
   i28 = 19;
  } else if (i17) {
   i7 = HEAP32[i24 + (i5 + -1 << 2) >> 2] >> 23;
   i28 = 19;
   break;
  } else if (!(d1 >= .5)) {
   i9 = 0;
   i12 = i6;
   break;
  } else {
   i7 = 2;
   i28 = 20;
   break;
  } while (0);
  if ((i28 | 0) == 19) {
   i28 = 0;
   if ((i7 | 0) > 0) i28 = 20; else {
    i9 = i7;
    i12 = i6;
   }
  }
  if ((i28 | 0) == 20) {
   i28 = 0;
   i12 = i6 + 1 | 0;
   if (i8) {
    i6 = 0;
    i11 = 0;
    do {
     i9 = i24 + (i11 << 2) | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if (!i6) if (!i10) i6 = 0; else {
      i6 = 1;
      i8 = 16777216;
      i28 = 23;
     } else {
      i8 = 16777215;
      i28 = 23;
     }
     if ((i28 | 0) == 23) {
      i28 = 0;
      HEAP32[i9 >> 2] = i8 - i10;
     }
     i11 = i11 + 1 | 0;
    } while ((i11 | 0) != (i5 | 0));
   } else i6 = 0;
   L42 : do if (i13) {
    switch (i4 | 0) {
    case 1:
     {
      i8 = 8388607;
      break;
     }
    case 2:
     {
      i8 = 4194303;
      break;
     }
    default:
     break L42;
    }
    i11 = i24 + (i5 + -1 << 2) | 0;
    HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & i8;
   } while (0);
   if ((i7 | 0) == 2) {
    d1 = 1.0 - d1;
    if (!i6) i9 = 2; else {
     i9 = 2;
     d1 = d1 - +_scalbn(1.0, i4);
    }
   } else i9 = i7;
  }
  if (!(d1 == 0.0)) {
   i28 = 42;
   break;
  }
  if ((i5 | 0) > (i25 | 0)) {
   i6 = 0;
   i7 = i5;
   do {
    i7 = i7 + -1 | 0;
    i6 = HEAP32[i24 + (i7 << 2) >> 2] | i6;
   } while ((i7 | 0) > (i25 | 0));
   if (!i6) i6 = 1; else {
    i28 = 41;
    break;
   }
  } else i6 = 1;
  while (1) if (!(HEAP32[i24 + (i25 - i6 << 2) >> 2] | 0)) i6 = i6 + 1 | 0; else break;
  i8 = i6 + i5 | 0;
  if ((i6 | 0) <= 0) {
   i5 = i8;
   continue;
  }
  while (1) {
   i7 = i5 + 1 | 0;
   i6 = i5 + i20 | 0;
   HEAPF64[i21 + (i6 << 3) >> 3] = +(HEAP32[6672 + (i7 + i18 << 2) >> 2] | 0);
   if (i16) {
    d1 = 0.0;
    i5 = 0;
    do {
     d1 = d1 + +HEAPF64[i19 + (i5 << 3) >> 3] * +HEAPF64[i21 + (i6 - i5 << 3) >> 3];
     i5 = i5 + 1 | 0;
    } while ((i5 | 0) != (i20 | 0));
   } else d1 = 0.0;
   HEAPF64[i27 + (i7 << 3) >> 3] = d1;
   if ((i7 | 0) < (i8 | 0)) i5 = i7; else {
    i5 = i8;
    continue L17;
   }
  }
 }
 if ((i28 | 0) == 41) while (1) {
  i28 = 0;
  i4 = i4 + -24 | 0;
  i5 = i5 + -1 | 0;
  if (!(HEAP32[i24 + (i5 << 2) >> 2] | 0)) i28 = 41; else {
   i8 = i5;
   break;
  }
 } else if ((i28 | 0) == 42) {
  d1 = +_scalbn(d1, 0 - i4 | 0);
  if (d1 >= 16777216.0) {
   d3 = +(~~(d1 * 5.960464477539063e-08) | 0);
   HEAP32[i24 + (i5 << 2) >> 2] = ~~(d1 - d3 * 16777216.0);
   i4 = i22 + i23 | 0;
   i5 = i5 + 1 | 0;
   d1 = d3;
  }
  HEAP32[i24 + (i5 << 2) >> 2] = ~~d1;
  i8 = i5;
 }
 d1 = +_scalbn(1.0, i4);
 i7 = (i8 | 0) > -1;
 if (i7) {
  i4 = i8;
  while (1) {
   HEAPF64[i27 + (i4 << 3) >> 3] = d1 * +(HEAP32[i24 + (i4 << 2) >> 2] | 0);
   if ((i4 | 0) > 0) {
    d1 = d1 * 5.960464477539063e-08;
    i4 = i4 + -1 | 0;
   } else break;
  }
  if (i7) {
   i5 = i8;
   while (1) {
    i6 = i8 - i5 | 0;
    i4 = 0;
    d1 = 0.0;
    while (1) {
     d1 = d1 + +HEAPF64[1024 + (i4 << 3) >> 3] * +HEAPF64[i27 + (i4 + i5 << 3) >> 3];
     if ((i4 | 0) >= (i25 | 0) | (i4 | 0) >= (i6 | 0)) break; else i4 = i4 + 1 | 0;
    }
    HEAPF64[i29 + (i6 << 3) >> 3] = d1;
    if ((i5 | 0) > 0) i5 = i5 + -1 | 0; else break;
   }
  }
 }
 switch (i26 | 0) {
 case 0:
  {
   if (i7) {
    d1 = 0.0;
    i4 = i8;
    while (1) {
     d1 = d1 + +HEAPF64[i29 + (i4 << 3) >> 3];
     if ((i4 | 0) > 0) i4 = i4 + -1 | 0; else break;
    }
   } else d1 = 0.0;
   d3 = (i9 | 0) == 0 ? d1 : -d1;
   i28 = 72;
   break;
  }
 case 2:
 case 1:
  {
   if (i7) {
    d1 = 0.0;
    i4 = i8;
    while (1) {
     d1 = d1 + +HEAPF64[i29 + (i4 << 3) >> 3];
     if ((i4 | 0) > 0) i4 = i4 + -1 | 0; else break;
    }
   } else d1 = 0.0;
   i5 = (i9 | 0) == 0;
   HEAPF64[i2 >> 3] = i5 ? d1 : -d1;
   d1 = +HEAPF64[i29 >> 3] - d1;
   if ((i8 | 0) >= 1) {
    i4 = 1;
    while (1) {
     d1 = d1 + +HEAPF64[i29 + (i4 << 3) >> 3];
     if ((i4 | 0) == (i8 | 0)) break; else i4 = i4 + 1 | 0;
    }
   }
   d3 = i5 ? d1 : -d1;
   i2 = i2 + 8 | 0;
   i28 = 72;
   break;
  }
 case 3:
  {
   if ((i8 | 0) > 0) {
    i4 = i8;
    d1 = +HEAPF64[i29 + (i8 << 3) >> 3];
    do {
     i28 = i4;
     i4 = i4 + -1 | 0;
     i27 = i29 + (i4 << 3) | 0;
     d3 = +HEAPF64[i27 >> 3];
     d31 = d1;
     d1 = d3 + d1;
     HEAPF64[i29 + (i28 << 3) >> 3] = d31 + (d3 - d1);
     HEAPF64[i27 >> 3] = d1;
    } while ((i28 | 0) > 1);
    i5 = (i8 | 0) > 1;
    if (i5) {
     i4 = i8;
     d1 = +HEAPF64[i29 + (i8 << 3) >> 3];
     do {
      i28 = i4;
      i4 = i4 + -1 | 0;
      i27 = i29 + (i4 << 3) | 0;
      d31 = +HEAPF64[i27 >> 3];
      d3 = d1;
      d1 = d31 + d1;
      HEAPF64[i29 + (i28 << 3) >> 3] = d3 + (d31 - d1);
      HEAPF64[i27 >> 3] = d1;
     } while ((i28 | 0) > 2);
     if (i5) {
      i4 = i8;
      d3 = 0.0;
      while (1) {
       d3 = d3 + +HEAPF64[i29 + (i4 << 3) >> 3];
       if ((i4 | 0) > 2) i4 = i4 + -1 | 0; else break;
      }
     } else d3 = 0.0;
    } else d3 = 0.0;
   } else d3 = 0.0;
   d1 = +HEAPF64[i29 >> 3];
   if (!i9) {
    HEAPF64[i2 >> 3] = d1;
    d1 = +HEAPF64[i29 + 8 >> 3];
   } else {
    HEAPF64[i2 >> 3] = -d1;
    d3 = -d3;
    d1 = -+HEAPF64[i29 + 8 >> 3];
   }
   HEAPF64[i2 + 8 >> 3] = d1;
   i2 = i2 + 16 | 0;
   i28 = 72;
   break;
  }
 default:
  {}
 }
 if ((i28 | 0) == 72) HEAPF64[i2 >> 3] = d3;
 STACKTOP = i30;
 return i12 & 7 | 0;
}

function _JIT_Prepare(i16, i14) {
 i16 = i16 | 0;
 i14 = i14 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0, i17 = 0, i18 = 0, i19 = 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i3 = i18 + 8 | 0;
 i15 = i18;
 i12 = i18 + 16 | 0;
 i10 = i18 + 12 | 0;
 HEAP32[i15 >> 2] = _Sys_GetMethodDesc(i16) | 0;
 _log_f(2, 15485, i15);
 i13 = i16 + 4 | 0;
 i1 = HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24;
 i7 = (i14 | 0) != 0;
 if (i7) i17 = _malloc(28) | 0; else i17 = _mallocForever(28) | 0;
 i9 = i16 + 28 | 0;
 HEAP8[i9 >> 0] = i17;
 HEAP8[i9 + 1 >> 0] = i17 >> 8;
 HEAP8[i9 + 2 >> 0] = i17 >> 16;
 HEAP8[i9 + 3 >> 0] = i17 >> 24;
 i9 = i16 + 12 | 0;
 i9 = (HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8) & 65535;
 do if ((i9 & 4096 | 0) != 0 | (i9 & 3 | 0) == 3) {
  i15 = i16 + 16 | 0;
  if (!(_strcmp(HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24, 15496) | 0)) {
   i1 = i16 + 48 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   i11 = 8;
  } else {
   i1 = i16 + 44 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   if (!i1) i1 = 0; else i11 = 8;
  }
  if ((i11 | 0) == 8) {
   i1 = i1 + 68 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  }
  HEAP32[i17 + 8 >> 2] = i1;
  i15 = _mallocForever(16) | 0;
  HEAP32[i15 >> 2] = 6;
  HEAP32[i15 + 4 >> 2] = i16;
  HEAP32[i15 + 8 >> 2] = _InternalCall_Map(i16) | 0;
  HEAP32[i15 + 12 >> 2] = 1;
  HEAP32[i17 + 12 >> 2] = 0;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = 0;
 } else {
  i9 = i16 + 14 | 0;
  if ((HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8) & 8192) {
   i2 = i16 + 52 | 0;
   i2 = _MetaData_GetImplMap(i1, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0;
   i1 = _PInvoke_GetFunction(i1, i2) | 0;
   if (!i1) {
    i15 = i2 + 8 | 0;
    HEAP32[i3 >> 2] = HEAPU8[i15 >> 0] | HEAPU8[i15 + 1 >> 0] << 8 | HEAPU8[i15 + 2 >> 0] << 16 | HEAPU8[i15 + 3 >> 0] << 24;
    _Crash(15502, i3);
   }
   i3 = _mallocForever(16) | 0;
   HEAP32[i3 >> 2] = 40;
   HEAP32[i3 + 4 >> 2] = i1;
   HEAP32[i3 + 8 >> 2] = i16;
   HEAP32[i3 + 12 >> 2] = i2;
   HEAP32[i17 + 12 >> 2] = 0;
   i1 = i16 + 44 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   if (!i1) i1 = 0; else {
    i1 = i1 + 68 | 0;
    i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   }
   HEAP32[i17 + 8 >> 2] = i1;
   HEAP32[i17 >> 2] = i3;
   HEAP32[i17 + 4 >> 2] = 0;
   break;
  }
  i2 = i16 + 8 | 0;
  i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  L23 : do if ((HEAP8[i2 >> 0] & 3) == 2) {
   HEAP32[i17 + 8 >> 2] = 8;
   i3 = (HEAPU8[i2 >> 0] | 0) >>> 2;
   i1 = 0;
   i2 = i2 + 1 | 0;
   i11 = 35;
  } else {
   i9 = HEAP16[i2 >> 1] | 0;
   HEAP32[i17 + 8 >> 2] = HEAPU16[i2 + 2 >> 1];
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   i1 = HEAP32[i2 + 8 >> 2] | 0;
   i2 = i2 + ((HEAP8[i2 + 1 >> 0] & -16 & 255) >>> 2) | 0;
   if (!(i9 & 8)) i11 = 35; else {
    i9 = i2 + (i3 + 3 & -4) | 0;
    L27 : do if (!(HEAP8[i9 >> 0] & 64)) {
     i8 = ((HEAPU8[i9 + 1 >> 0] | 0) + -4 | 0) / 12 | 0;
     i4 = i8 * 24 | 0;
     if (i7) i7 = _malloc(i4) | 0; else i7 = _mallocForever(i4) | 0;
     i6 = i17 + 20 | 0;
     HEAP32[i6 >> 2] = i7;
     i4 = i9 + 4 | 0;
     i5 = 0;
     while (1) {
      if ((i5 | 0) == (i8 | 0)) {
       i5 = i8;
       break L27;
      }
      HEAP32[i7 + (i5 * 24 | 0) >> 2] = HEAPU16[i4 >> 1];
      HEAP32[i7 + (i5 * 24 | 0) + 4 >> 2] = HEAPU16[i4 + 2 >> 1];
      HEAP32[i7 + (i5 * 24 | 0) + 8 >> 2] = HEAPU8[i4 + 4 >> 0];
      HEAP32[i7 + (i5 * 24 | 0) + 12 >> 2] = HEAPU8[i4 + 6 >> 0] << 8 | HEAPU8[i4 + 5 >> 0];
      HEAP32[i7 + (i5 * 24 | 0) + 16 >> 2] = HEAPU8[i4 + 7 >> 0];
      HEAP32[i7 + (i5 * 24 | 0) + 20 >> 2] = HEAP32[i4 + 8 >> 2];
      i4 = i4 + 12 | 0;
      i5 = i5 + 1 | 0;
     }
    } else {
     i5 = ((((HEAP32[i9 >> 2] | 0) >>> 8) + -4 | 0) >>> 0) / 24 | 0;
     i6 = i5 * 24 | 0;
     if (i7) i4 = _malloc(i6) | 0; else i4 = _mallocForever(i6) | 0;
     i8 = i17 + 20 | 0;
     HEAP32[i8 >> 2] = i4;
     _memcpy(i4 | 0, i9 + 4 | 0, i6 | 0) | 0;
     i6 = i8;
    } while (0);
    HEAP32[i17 + 16 >> 2] = i5;
    i7 = i16 + 48 | 0;
    i8 = i16 + 64 | 0;
    i4 = 0;
    while (1) {
     if ((i4 | 0) == (i5 | 0)) {
      i9 = i3;
      i8 = i2;
      break L23;
     }
     i9 = HEAP32[i6 >> 2] | 0;
     if (!(HEAP32[i9 + (i4 * 24 | 0) >> 2] | 0)) {
      i19 = (HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + 92 | 0;
      i9 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, HEAP32[i9 + (i4 * 24 | 0) + 20 >> 2] | 0, HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) | 0;
      HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 * 24 | 0) + 20 >> 2] = i9;
     }
     i4 = i4 + 1 | 0;
    }
   }
  } while (0);
  if ((i11 | 0) == 35) {
   HEAP32[i17 + 16 >> 2] = 0;
   HEAP32[i17 + 20 >> 2] = 0;
   i9 = i3;
   i8 = i2;
  }
  L51 : do if (!i1) {
   i2 = 0;
   i3 = 0;
   i1 = 0;
  } else {
   i3 = _MetaData_GetTableRow(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, i1) | 0;
   HEAP32[i12 >> 2] = _MetaData_GetBlob(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, i10) | 0;
   _MetaData_DecodeSigEntry(i12) | 0;
   i3 = _MetaData_DecodeSigEntry(i12) | 0;
   i7 = _malloc(i3 * 12 | 0) | 0;
   i4 = i16 + 48 | 0;
   i5 = i16 + 64 | 0;
   i1 = 0;
   i2 = 0;
   while (1) {
    if ((i1 | 0) == (i3 | 0)) {
     i3 = i7;
     i1 = i7;
     break L51;
    }
    i6 = (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + 92 | 0;
    i6 = _Type_GetTypeFromSig(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, i12, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) | 0;
    if (!(HEAP8[i6 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i6, 0, 0);
    HEAP32[i7 + (i1 * 12 | 0) >> 2] = i6;
    HEAP32[i7 + (i1 * 12 | 0) + 4 >> 2] = i2;
    i19 = i6 + 68 | 0;
    i19 = HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24;
    HEAP32[i7 + (i1 * 12 | 0) + 8 >> 2] = i19;
    i1 = i1 + 1 | 0;
    i2 = i19 + i2 | 0;
   }
  } while (0);
  HEAP32[i17 + 12 >> 2] = i2;
  HEAP32[i17 >> 2] = _JITit(i16, i8, i9, i3, i17, i14, i15) | 0;
  HEAP32[i17 + 4 >> 2] = HEAP32[i15 >> 2];
  _free(i1);
 } while (0);
 STACKTOP = i18;
 return;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (!i1) return;
 i3 = i1 + -8 | 0;
 i5 = HEAP32[8023] | 0;
 i1 = HEAP32[i1 + -4 >> 2] | 0;
 i2 = i1 & -8;
 i9 = i3 + i2 | 0;
 do if (!(i1 & 1)) {
  i4 = HEAP32[i3 >> 2] | 0;
  if (!(i1 & 3)) return;
  i7 = i3 + (0 - i4) | 0;
  i6 = i4 + i2 | 0;
  if (i7 >>> 0 < i5 >>> 0) return;
  if ((HEAP32[8024] | 0) == (i7 | 0)) {
   i1 = i9 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i8 = i7;
    i2 = i6;
    break;
   }
   HEAP32[8021] = i6;
   HEAP32[i1 >> 2] = i2 & -2;
   HEAP32[i7 + 4 >> 2] = i6 | 1;
   HEAP32[i7 + i6 >> 2] = i6;
   return;
  }
  i3 = i4 >>> 3;
  if (i4 >>> 0 < 256) {
   i1 = HEAP32[i7 + 8 >> 2] | 0;
   i2 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i2 | 0) == (i1 | 0)) {
    HEAP32[8019] = HEAP32[8019] & ~(1 << i3);
    i8 = i7;
    i2 = i6;
    break;
   } else {
    HEAP32[i1 + 12 >> 2] = i2;
    HEAP32[i2 + 8 >> 2] = i1;
    i8 = i7;
    i2 = i6;
    break;
   }
  }
  i5 = HEAP32[i7 + 24 >> 2] | 0;
  i1 = HEAP32[i7 + 12 >> 2] | 0;
  do if ((i1 | 0) == (i7 | 0)) {
   i3 = i7 + 16 | 0;
   i2 = i3 + 4 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    i1 = HEAP32[i3 >> 2] | 0;
    if (!i1) {
     i1 = 0;
     break;
    } else i2 = i3;
   }
   while (1) {
    i3 = i1 + 20 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if (i4 | 0) {
     i1 = i4;
     i2 = i3;
     continue;
    }
    i3 = i1 + 16 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) break; else {
     i1 = i4;
     i2 = i3;
    }
   }
   HEAP32[i2 >> 2] = 0;
  } else {
   i8 = HEAP32[i7 + 8 >> 2] | 0;
   HEAP32[i8 + 12 >> 2] = i1;
   HEAP32[i1 + 8 >> 2] = i8;
  } while (0);
  if (!i5) {
   i8 = i7;
   i2 = i6;
  } else {
   i2 = HEAP32[i7 + 28 >> 2] | 0;
   i3 = 32380 + (i2 << 2) | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i7 | 0)) {
    HEAP32[i3 >> 2] = i1;
    if (!i1) {
     HEAP32[8020] = HEAP32[8020] & ~(1 << i2);
     i8 = i7;
     i2 = i6;
     break;
    }
   } else {
    HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i7 | 0) & 1) << 2) >> 2] = i1;
    if (!i1) {
     i8 = i7;
     i2 = i6;
     break;
    }
   }
   HEAP32[i1 + 24 >> 2] = i5;
   i2 = i7 + 16 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (i3 | 0) {
    HEAP32[i1 + 16 >> 2] = i3;
    HEAP32[i3 + 24 >> 2] = i1;
   }
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   if (!i2) {
    i8 = i7;
    i2 = i6;
   } else {
    HEAP32[i1 + 20 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i1;
    i8 = i7;
    i2 = i6;
   }
  }
 } else {
  i8 = i3;
  i7 = i3;
 } while (0);
 if (i7 >>> 0 >= i9 >>> 0) return;
 i1 = i9 + 4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (!(i4 & 1)) return;
 if (!(i4 & 2)) {
  if ((HEAP32[8025] | 0) == (i9 | 0)) {
   i9 = (HEAP32[8022] | 0) + i2 | 0;
   HEAP32[8022] = i9;
   HEAP32[8025] = i8;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   if ((i8 | 0) != (HEAP32[8024] | 0)) return;
   HEAP32[8024] = 0;
   HEAP32[8021] = 0;
   return;
  }
  if ((HEAP32[8024] | 0) == (i9 | 0)) {
   i9 = (HEAP32[8021] | 0) + i2 | 0;
   HEAP32[8021] = i9;
   HEAP32[8024] = i7;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   HEAP32[i7 + i9 >> 2] = i9;
   return;
  }
  i5 = (i4 & -8) + i2 | 0;
  i3 = i4 >>> 3;
  do if (i4 >>> 0 < 256) {
   i2 = HEAP32[i9 + 8 >> 2] | 0;
   i1 = HEAP32[i9 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[8019] = HEAP32[8019] & ~(1 << i3);
    break;
   } else {
    HEAP32[i2 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i2;
    break;
   }
  } else {
   i6 = HEAP32[i9 + 24 >> 2] | 0;
   i1 = HEAP32[i9 + 12 >> 2] | 0;
   do if ((i1 | 0) == (i9 | 0)) {
    i3 = i9 + 16 | 0;
    i2 = i3 + 4 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
    if (!i1) {
     i1 = HEAP32[i3 >> 2] | 0;
     if (!i1) {
      i3 = 0;
      break;
     } else i2 = i3;
    }
    while (1) {
     i3 = i1 + 20 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (i4 | 0) {
      i1 = i4;
      i2 = i3;
      continue;
     }
     i3 = i1 + 16 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) break; else {
      i1 = i4;
      i2 = i3;
     }
    }
    HEAP32[i2 >> 2] = 0;
    i3 = i1;
   } else {
    i3 = HEAP32[i9 + 8 >> 2] | 0;
    HEAP32[i3 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i3;
    i3 = i1;
   } while (0);
   if (i6 | 0) {
    i1 = HEAP32[i9 + 28 >> 2] | 0;
    i2 = 32380 + (i1 << 2) | 0;
    if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) {
     HEAP32[i2 >> 2] = i3;
     if (!i3) {
      HEAP32[8020] = HEAP32[8020] & ~(1 << i1);
      break;
     }
    } else {
     HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i9 | 0) & 1) << 2) >> 2] = i3;
     if (!i3) break;
    }
    HEAP32[i3 + 24 >> 2] = i6;
    i1 = i9 + 16 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if (i2 | 0) {
     HEAP32[i3 + 16 >> 2] = i2;
     HEAP32[i2 + 24 >> 2] = i3;
    }
    i1 = HEAP32[i1 + 4 >> 2] | 0;
    if (i1 | 0) {
     HEAP32[i3 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i3;
    }
   }
  } while (0);
  HEAP32[i8 + 4 >> 2] = i5 | 1;
  HEAP32[i7 + i5 >> 2] = i5;
  if ((i8 | 0) == (HEAP32[8024] | 0)) {
   HEAP32[8021] = i5;
   return;
  }
 } else {
  HEAP32[i1 >> 2] = i4 & -2;
  HEAP32[i8 + 4 >> 2] = i2 | 1;
  HEAP32[i7 + i2 >> 2] = i2;
  i5 = i2;
 }
 i1 = i5 >>> 3;
 if (i5 >>> 0 < 256) {
  i3 = 32116 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[8019] | 0;
  i1 = 1 << i1;
  if (!(i2 & i1)) {
   HEAP32[8019] = i2 | i1;
   i1 = i3;
   i2 = i3 + 8 | 0;
  } else {
   i2 = i3 + 8 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
  }
  HEAP32[i2 >> 2] = i8;
  HEAP32[i1 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i1;
  HEAP32[i8 + 12 >> 2] = i3;
  return;
 }
 i1 = i5 >>> 8;
 if (!i1) i1 = 0; else if (i5 >>> 0 > 16777215) i1 = 31; else {
  i7 = (i1 + 1048320 | 0) >>> 16 & 8;
  i9 = i1 << i7;
  i6 = (i9 + 520192 | 0) >>> 16 & 4;
  i9 = i9 << i6;
  i1 = (i9 + 245760 | 0) >>> 16 & 2;
  i1 = 14 - (i6 | i7 | i1) + (i9 << i1 >>> 15) | 0;
  i1 = i5 >>> (i1 + 7 | 0) & 1 | i1 << 1;
 }
 i4 = 32380 + (i1 << 2) | 0;
 HEAP32[i8 + 28 >> 2] = i1;
 HEAP32[i8 + 20 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = 0;
 i2 = HEAP32[8020] | 0;
 i3 = 1 << i1;
 do if (!(i2 & i3)) {
  HEAP32[8020] = i2 | i3;
  HEAP32[i4 >> 2] = i8;
  HEAP32[i8 + 24 >> 2] = i4;
  HEAP32[i8 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i8;
 } else {
  i2 = i5 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
  i3 = HEAP32[i4 >> 2] | 0;
  while (1) {
   if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
    i1 = 73;
    break;
   }
   i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
   i1 = HEAP32[i4 >> 2] | 0;
   if (!i1) {
    i1 = 72;
    break;
   } else {
    i2 = i2 << 1;
    i3 = i1;
   }
  }
  if ((i1 | 0) == 72) {
   HEAP32[i4 >> 2] = i8;
   HEAP32[i8 + 24 >> 2] = i3;
   HEAP32[i8 + 12 >> 2] = i8;
   HEAP32[i8 + 8 >> 2] = i8;
   break;
  } else if ((i1 | 0) == 73) {
   i7 = i3 + 8 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i9 + 12 >> 2] = i8;
   HEAP32[i7 >> 2] = i8;
   HEAP32[i8 + 8 >> 2] = i9;
   HEAP32[i8 + 12 >> 2] = i3;
   HEAP32[i8 + 24 >> 2] = 0;
   break;
  }
 } while (0);
 i9 = (HEAP32[8027] | 0) + -1 | 0;
 HEAP32[8027] = i9;
 if (!i9) i1 = 32532; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[8027] = -1;
 return;
}

function _Generics_GetGenericTypeFromCoreType(i8, i9, i10) {
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8208 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(8208);
 i7 = i13;
 i11 = i13 + 8 | 0;
 i6 = i8 + 4 | 0;
 i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 if (!(HEAP8[i8 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i8, 0, 0);
 i2 = i8 + 84 | 0;
 i3 = i9 << 2;
 i1 = i2;
 while (1) {
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  if (!i1) {
   i12 = 9;
   break;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) == (i9 | 0)) if (!(_memcmp(i1 + 12 | 0, i10, i3) | 0)) {
   i12 = 7;
   break;
  }
  i1 = i1 + 4 | 0;
 }
 if ((i12 | 0) == 7) i1 = HEAP32[i1 >> 2] | 0; else if ((i12 | 0) == 9) {
  i4 = _mallocForever(i3 + 12 | 0) | 0;
  HEAP32[i4 + 4 >> 2] = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  HEAP8[i2 >> 0] = i4;
  HEAP8[i2 + 1 >> 0] = i4 >> 8;
  HEAP8[i2 + 2 >> 0] = i4 >> 16;
  HEAP8[i2 + 3 >> 0] = i4 >> 24;
  HEAP32[i4 + 8 >> 2] = i9;
  i5 = i4 + 12 | 0;
  _memcpy(i5 | 0, i10 | 0, i3 | 0) | 0;
  i1 = _callocForever(1, 132) | 0;
  HEAP32[i4 >> 2] = i1;
  i4 = i8 + 12 | 0;
  _strcpy(i11, HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) | 0;
  i4 = i11 + (_strlen(i11) | 0) | 0;
  HEAP8[i4 >> 0] = 60;
  HEAP8[i4 + 1 >> 0] = 0;
  i4 = 0;
  while (1) {
   if ((i4 | 0) == (i9 | 0)) break;
   if (i4 | 0) {
    i3 = i11 + (_strlen(i11) | 0) | 0;
    HEAP8[i3 >> 0] = 44;
    HEAP8[i3 + 1 >> 0] = 0;
   }
   i2 = HEAP32[i10 + (i4 << 2) >> 2] | 0;
   do if (!i2) {
    i2 = _FindGenericParam(i8, i4) | 0;
    i3 = i11 + (_strlen(i11) | 0) | 0;
    if (!i2) {
     HEAP8[i3 >> 0] = 63;
     HEAP8[i3 + 1 >> 0] = 63;
     HEAP8[i3 + 2 >> 0] = 63;
     HEAP8[i3 + 3 >> 0] = 0;
     break;
    } else {
     i2 = i2 + 8 | 0;
     i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
     _memcpy(i3 | 0, i2 | 0, (_strlen(i2) | 0) + 1 | 0) | 0;
     break;
    }
   } else {
    i3 = i11 + (_strlen(i11) | 0) | 0;
    i14 = i2 + 16 | 0;
    i2 = i2 + 12 | 0;
    i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
    HEAP32[i7 >> 2] = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
    HEAP32[i7 + 4 >> 2] = i2;
    _sprintf(i3, 13471, i7) | 0;
   } while (0);
   i4 = i4 + 1 | 0;
  }
  i14 = i11 + (_strlen(i11) | 0) | 0;
  HEAP8[i14 >> 0] = 62;
  HEAP8[i14 + 1 >> 0] = 0;
  HEAP8[i1 >> 0] = i1;
  HEAP8[i1 + 1 >> 0] = i1 >> 8;
  HEAP8[i1 + 2 >> 0] = i1 >> 16;
  HEAP8[i1 + 3 >> 0] = i1 >> 24;
  i14 = i1 + 4 | 0;
  HEAP8[i14 >> 0] = i6;
  HEAP8[i14 + 1 >> 0] = i6 >> 8;
  HEAP8[i14 + 2 >> 0] = i6 >> 16;
  HEAP8[i14 + 3 >> 0] = i6 >> 24;
  i14 = i8 + 8 | 0;
  i14 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
  i2 = i1 + 8 | 0;
  HEAP8[i2 >> 0] = i14;
  HEAP8[i2 + 1 >> 0] = i14 >> 8;
  HEAP8[i2 + 2 >> 0] = i14 >> 16;
  HEAP8[i2 + 3 >> 0] = i14 >> 24;
  i2 = i1 + 88 | 0;
  HEAP8[i2 >> 0] = i8;
  HEAP8[i2 + 1 >> 0] = i8 >> 8;
  HEAP8[i2 + 2 >> 0] = i8 >> 16;
  HEAP8[i2 + 3 >> 0] = i8 >> 24;
  i2 = 0;
  while (1) {
   if (i2 >>> 0 >= i9 >>> 0) break;
   if (!(HEAP32[i10 + (i2 << 2) >> 2] | 0)) {
    i12 = 22;
    break;
   } else i2 = i2 + 1 | 0;
  }
  if ((i12 | 0) == 22) HEAP8[i1 + 57 >> 0] = 1;
  i12 = i8 + 16 | 0;
  i12 = HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24;
  i14 = i1 + 16 | 0;
  HEAP8[i14 >> 0] = i12;
  HEAP8[i14 + 1 >> 0] = i12 >> 8;
  HEAP8[i14 + 2 >> 0] = i12 >> 16;
  HEAP8[i14 + 3 >> 0] = i12 >> 24;
  i14 = _mallocForever((_strlen(i11) | 0) + 1 | 0) | 0;
  i12 = i1 + 12 | 0;
  HEAP8[i12 >> 0] = i14;
  HEAP8[i12 + 1 >> 0] = i14 >> 8;
  HEAP8[i12 + 2 >> 0] = i14 >> 16;
  HEAP8[i12 + 3 >> 0] = i14 >> 24;
  _strcpy(i14, i11) | 0;
  i14 = i1 + 92 | 0;
  HEAP8[i14 >> 0] = i5;
  HEAP8[i14 + 1 >> 0] = i5 >> 8;
  HEAP8[i14 + 2 >> 0] = i5 >> 16;
  HEAP8[i14 + 3 >> 0] = i5 >> 24;
  i14 = i8 + 20 | 0;
  i14 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
  i12 = i1 + 20 | 0;
  HEAP8[i12 >> 0] = i14;
  HEAP8[i12 + 1 >> 0] = i14 >> 8;
  HEAP8[i12 + 2 >> 0] = i14 >> 16;
  HEAP8[i12 + 3 >> 0] = i14 >> 24;
  i12 = i8 + 80 | 0;
  i12 = HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24;
  i14 = i1 + 80 | 0;
  HEAP8[i14 >> 0] = i12;
  HEAP8[i14 + 1 >> 0] = i12 >> 8;
  HEAP8[i14 + 2 >> 0] = i12 >> 16;
  HEAP8[i14 + 3 >> 0] = i12 >> 24;
  i14 = i8 + 24 | 0;
  i14 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
  i12 = i1 + 24 | 0;
  HEAP8[i12 >> 0] = i14;
  HEAP8[i12 + 1 >> 0] = i14 >> 8;
  HEAP8[i12 + 2 >> 0] = i14 >> 16;
  HEAP8[i12 + 3 >> 0] = i14 >> 24;
  i12 = i8 + 28 | 0;
  i12 = HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24;
  i14 = i1 + 28 | 0;
  HEAP8[i14 >> 0] = i12;
  HEAP8[i14 + 1 >> 0] = i12 >> 8;
  HEAP8[i14 + 2 >> 0] = i12 >> 16;
  HEAP8[i14 + 3 >> 0] = i12 >> 24;
  i14 = i8 + 100 | 0;
  i14 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
  i12 = i1 + 100 | 0;
  HEAP8[i12 >> 0] = i14;
  HEAP8[i12 + 1 >> 0] = i14 >> 8;
  HEAP8[i12 + 2 >> 0] = i14 >> 16;
  HEAP8[i12 + 3 >> 0] = i14 >> 24;
  i12 = i8 + 112 | 0;
  i12 = HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24;
  i14 = i1 + 112 | 0;
  HEAP8[i14 >> 0] = i12;
  HEAP8[i14 + 1 >> 0] = i12 >> 8;
  HEAP8[i14 + 2 >> 0] = i12 >> 16;
  HEAP8[i14 + 3 >> 0] = i12 >> 24;
  i14 = i8 + 48 | 0;
  i14 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
  i12 = i1 + 48 | 0;
  HEAP8[i12 >> 0] = i14;
  HEAP8[i12 + 1 >> 0] = i14 >> 8;
  HEAP8[i12 + 2 >> 0] = i14 >> 16;
  HEAP8[i12 + 3 >> 0] = i14 >> 24;
  i12 = i8 + 120 | 0;
  i12 = HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24;
  i14 = i1 + 120 | 0;
  HEAP8[i14 >> 0] = i12;
  HEAP8[i14 + 1 >> 0] = i12 >> 8;
  HEAP8[i14 + 2 >> 0] = i12 >> 16;
  HEAP8[i14 + 3 >> 0] = i12 >> 24;
  HEAP8[i1 + 58 >> 0] = 1;
  _MetaData_Fill_TypeDef_(i1, i10, 0);
 }
 STACKTOP = i13;
 return i1 | 0;
}

function _Reflection_MemberInfo_GetCustomAttributes(i6, i1, i7) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i21 = i22 + 16 | 0;
 i20 = i22 + 8 | 0;
 i4 = i22;
 i17 = i22 + 28 | 0;
 i18 = i22 + 24 | 0;
 i19 = i22 + 20 | 0;
 i2 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
 i3 = _Heap_GetType(i6) | 0;
 i16 = i2 + 4 | 0;
 i16 = HEAPU8[i16 >> 0] | HEAPU8[i16 + 1 >> 0] << 8 | HEAPU8[i16 + 2 >> 0] << 16 | HEAPU8[i16 + 3 >> 0] << 24;
 i15 = HEAP32[i16 + 72 >> 2] | 0;
 i1 = HEAP32[8003] | 0;
 do if ((i3 | 0) == (HEAP32[i1 + 224 >> 2] | 0)) i5 = i2 + 80 | 0; else {
  if ((i3 | 0) == (HEAP32[i1 + 192 >> 2] | 0)) {
   i5 = i6 + 16 | 0;
   break;
  }
  if ((i3 | 0) == (HEAP32[i1 + 196 >> 2] | 0)) {
   i5 = (HEAP32[i6 + 12 >> 2] | 0) + 52 | 0;
   break;
  } else {
   i13 = i3 + 16 | 0;
   i14 = i3 + 12 | 0;
   i14 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
   HEAP32[i4 >> 2] = HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24;
   HEAP32[i4 + 4 >> 2] = i14;
   _Crash(20924, i4);
  }
 } while (0);
 i14 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
 i1 = 0;
 i2 = 1;
 while (1) {
  if (i2 >>> 0 > i15 >>> 0) break;
  i13 = _MetaData_GetTableRow(i16, i2 & 16777215 | 201326592) | 0;
  i1 = i1 + ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == (i14 | 0) & 1) | 0;
  i2 = i2 + 1 | 0;
 }
 i13 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[(HEAP32[8003] | 0) + 212 >> 2] | 0, 0, 0) | 0, i1) | 0;
 HEAP32[i7 >> 2] = i13;
 i1 = 0;
 i11 = 1;
 L15 : while (1) {
  if (i11 >>> 0 > i15 >>> 0) {
   i1 = 47;
   break;
  }
  i2 = _MetaData_GetTableRow(i16, i11 & 16777215 | 201326592) | 0;
  if ((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24 | 0) == (i14 | 0)) {
   i3 = i2 + 4 | 0;
   i3 = _MetaData_GetMethodDefFromDefRefOrSpec(i16, HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, 0, 0) | 0;
   i12 = _MetaData_GetTypeDefFromMethodDef(i3) | 0;
   if (!(HEAP8[i12 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i12, 0, 0);
   i10 = i1 + 1 | 0;
   i7 = _SystemArray_LoadElementAddress(i13, i1) | 0;
   HEAP32[i7 >> 2] = _Heap_AllocType(i12) | 0;
   i8 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 200 >> 2] | 0) | 0;
   i9 = i3 + 16 | 0;
   HEAP32[i8 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24) | 0;
   HEAP32[i8 >> 2] = _Type_GetTypeObject(i12) | 0;
   HEAP32[i8 + 12 >> 2] = i3;
   HEAP32[i7 + 4 >> 2] = i8;
   i8 = i3 + 34 | 0;
   i8 = (HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8) & 65535;
   i9 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[HEAP32[8003] >> 2] | 0, 0, 0) | 0, i8 + -1 | 0) | 0;
   HEAP32[i7 + 8 >> 2] = i9;
   i7 = i2 + 8 | 0;
   HEAP32[i18 >> 2] = _MetaData_GetBlob(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, i17) | 0;
   _MetaData_DecodeSigEntry(i18) | 0;
   i7 = i3 + 36 | 0;
   i6 = 0;
   while (1) {
    if (i6 >>> 0 >= i8 >>> 0) break;
    i2 = HEAP32[(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + (i6 * 12 | 0) >> 2] | 0;
    do if (!i6) _MetaData_DecodeSigEntry(i18) | 0; else {
     if (HEAP8[i2 + 34 >> 0] | 0) {
      HEAP32[i19 >> 2] = _Heap_Box(i2, HEAP32[i18 >> 2] | 0) | 0;
      i5 = i2 + 36 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24);
      _SystemArray_StoreElement(i9, i6 + -1 | 0, i19);
      break;
     }
     i1 = HEAP32[8003] | 0;
     if ((i2 | 0) == (HEAP32[i1 + 36 >> 2] | 0)) {
      i2 = _MetaData_DecodeSigEntryExt(i18, 0) | 0;
      if ((i2 | 0) == -1) HEAP32[i19 >> 2] = 0; else {
       i3 = _malloc(i2 + 1 | 0) | 0;
       i1 = 0;
       while (1) {
        if ((i1 | 0) == (i2 | 0)) break;
        i5 = HEAP32[i18 >> 2] | 0;
        HEAP8[i3 + i1 >> 0] = HEAP8[i5 >> 0] | 0;
        HEAP32[i18 >> 2] = i5 + 1;
        i1 = i1 + 1 | 0;
       }
       HEAP8[i3 + i2 >> 0] = 0;
       HEAP32[i19 >> 2] = _SystemString_FromCharPtrASCII(i3) | 0;
       _free(i3);
      }
      _SystemArray_StoreElement(i9, i6 + -1 | 0, i19);
      break;
     }
     if ((i2 | 0) != (HEAP32[i1 + 108 >> 2] | 0)) {
      i1 = 42;
      break L15;
     }
     i2 = _MetaData_DecodeSigEntryExt(i18, 0) | 0;
     i5 = _malloc(i2 + 1 | 0) | 0;
     i1 = 0;
     while (1) {
      if ((i1 | 0) == (i2 | 0)) break;
      i4 = HEAP32[i18 >> 2] | 0;
      HEAP8[i5 + i1 >> 0] = HEAP8[i4 >> 0] | 0;
      HEAP32[i18 >> 2] = i4 + 1;
      i1 = i1 + 1 | 0;
     }
     HEAP8[i5 + i2 >> 0] = 0;
     i1 = _strrchr(i5, 46) | 0;
     i3 = (i1 | 0) != 0;
     i4 = i3 ? i5 : 41949;
     i2 = i3 ? i1 + 1 | 0 : i5;
     if (i3) HEAP8[i1 >> 0] = 0;
     i1 = _strstr(i2, 18480) | 0;
     if (!i1) {
      i3 = 0;
      i1 = i2;
     } else {
      HEAP8[i1 >> 0] = 0;
      i3 = 0;
      i1 = i2;
     }
     while (1) {
      i2 = _strchr(i1, 43) | 0;
      if (!i2) break;
      HEAP8[i2 >> 0] = 0;
      i3 = _MetaData_GetTypeDefFromName(i16, i4, i1, i3, 1) | 0;
      i1 = i2 + 1 | 0;
     }
     HEAP32[i19 >> 2] = _Type_GetTypeObject(_MetaData_GetTypeDefFromName(i16, i4, i1, i3, 1) | 0) | 0;
     _SystemArray_StoreElement(i9, i6 + -1 | 0, i19);
     _free(i5);
    } while (0);
    i6 = i6 + 1 | 0;
   }
   _MetaData_DecodeSigEntry(i18) | 0;
   if (_MetaData_DecodeSigEntry(i18) | 0) {
    i1 = 44;
    break;
   }
   i1 = i10;
  }
  i11 = i11 + 1 | 0;
 }
 if ((i1 | 0) == 42) {
  i22 = i2 + 12 | 0;
  HEAP32[i20 >> 2] = HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24;
  _Crash(18496, i20);
 } else if ((i1 | 0) == 44) {
  i22 = i12 + 12 | 0;
  HEAP32[i21 >> 2] = HEAPU8[i22 >> 0] | HEAPU8[i22 + 1 >> 0] << 8 | HEAPU8[i22 + 2 >> 0] << 16 | HEAPU8[i22 + 3 >> 0] << 24;
  _Crash(18561, i21);
 } else if ((i1 | 0) == 47) {
  STACKTOP = i22;
  return 0;
 }
 return 0;
}

function _dispose_chunk(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = i2 + i1 | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 do if (!(i3 & 1)) {
  i5 = HEAP32[i2 >> 2] | 0;
  if (!(i3 & 3)) return;
  i7 = i2 + (0 - i5) | 0;
  i1 = i5 + i1 | 0;
  if ((HEAP32[8024] | 0) == (i7 | 0)) {
   i2 = i8 + 4 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 & 3 | 0) != 3) break;
   HEAP32[8021] = i1;
   HEAP32[i2 >> 2] = i3 & -2;
   HEAP32[i7 + 4 >> 2] = i1 | 1;
   HEAP32[i8 >> 2] = i1;
   return;
  }
  i4 = i5 >>> 3;
  if (i5 >>> 0 < 256) {
   i2 = HEAP32[i7 + 8 >> 2] | 0;
   i3 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[8019] = HEAP32[8019] & ~(1 << i4);
    break;
   } else {
    HEAP32[i2 + 12 >> 2] = i3;
    HEAP32[i3 + 8 >> 2] = i2;
    break;
   }
  }
  i6 = HEAP32[i7 + 24 >> 2] | 0;
  i2 = HEAP32[i7 + 12 >> 2] | 0;
  do if ((i2 | 0) == (i7 | 0)) {
   i4 = i7 + 16 | 0;
   i3 = i4 + 4 | 0;
   i2 = HEAP32[i3 >> 2] | 0;
   if (!i2) {
    i2 = HEAP32[i4 >> 2] | 0;
    if (!i2) {
     i2 = 0;
     break;
    } else i3 = i4;
   }
   while (1) {
    i4 = i2 + 20 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    if (i5 | 0) {
     i2 = i5;
     i3 = i4;
     continue;
    }
    i4 = i2 + 16 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    if (!i5) break; else {
     i2 = i5;
     i3 = i4;
    }
   }
   HEAP32[i3 >> 2] = 0;
  } else {
   i5 = HEAP32[i7 + 8 >> 2] | 0;
   HEAP32[i5 + 12 >> 2] = i2;
   HEAP32[i2 + 8 >> 2] = i5;
  } while (0);
  if (i6) {
   i3 = HEAP32[i7 + 28 >> 2] | 0;
   i4 = 32380 + (i3 << 2) | 0;
   if ((HEAP32[i4 >> 2] | 0) == (i7 | 0)) {
    HEAP32[i4 >> 2] = i2;
    if (!i2) {
     HEAP32[8020] = HEAP32[8020] & ~(1 << i3);
     break;
    }
   } else {
    HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i7 | 0) & 1) << 2) >> 2] = i2;
    if (!i2) break;
   }
   HEAP32[i2 + 24 >> 2] = i6;
   i3 = i7 + 16 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if (i4 | 0) {
    HEAP32[i2 + 16 >> 2] = i4;
    HEAP32[i4 + 24 >> 2] = i2;
   }
   i3 = HEAP32[i3 + 4 >> 2] | 0;
   if (i3) {
    HEAP32[i2 + 20 >> 2] = i3;
    HEAP32[i3 + 24 >> 2] = i2;
   }
  }
 } else i7 = i2; while (0);
 i2 = i8 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if (!(i4 & 2)) {
  if ((HEAP32[8025] | 0) == (i8 | 0)) {
   i8 = (HEAP32[8022] | 0) + i1 | 0;
   HEAP32[8022] = i8;
   HEAP32[8025] = i7;
   HEAP32[i7 + 4 >> 2] = i8 | 1;
   if ((i7 | 0) != (HEAP32[8024] | 0)) return;
   HEAP32[8024] = 0;
   HEAP32[8021] = 0;
   return;
  }
  if ((HEAP32[8024] | 0) == (i8 | 0)) {
   i8 = (HEAP32[8021] | 0) + i1 | 0;
   HEAP32[8021] = i8;
   HEAP32[8024] = i7;
   HEAP32[i7 + 4 >> 2] = i8 | 1;
   HEAP32[i7 + i8 >> 2] = i8;
   return;
  }
  i5 = (i4 & -8) + i1 | 0;
  i3 = i4 >>> 3;
  do if (i4 >>> 0 < 256) {
   i2 = HEAP32[i8 + 8 >> 2] | 0;
   i1 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[8019] = HEAP32[8019] & ~(1 << i3);
    break;
   } else {
    HEAP32[i2 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i2;
    break;
   }
  } else {
   i6 = HEAP32[i8 + 24 >> 2] | 0;
   i1 = HEAP32[i8 + 12 >> 2] | 0;
   do if ((i1 | 0) == (i8 | 0)) {
    i3 = i8 + 16 | 0;
    i2 = i3 + 4 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
    if (!i1) {
     i1 = HEAP32[i3 >> 2] | 0;
     if (!i1) {
      i3 = 0;
      break;
     } else i2 = i3;
    }
    while (1) {
     i3 = i1 + 20 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (i4 | 0) {
      i1 = i4;
      i2 = i3;
      continue;
     }
     i3 = i1 + 16 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) break; else {
      i1 = i4;
      i2 = i3;
     }
    }
    HEAP32[i2 >> 2] = 0;
    i3 = i1;
   } else {
    i3 = HEAP32[i8 + 8 >> 2] | 0;
    HEAP32[i3 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i3;
    i3 = i1;
   } while (0);
   if (i6 | 0) {
    i1 = HEAP32[i8 + 28 >> 2] | 0;
    i2 = 32380 + (i1 << 2) | 0;
    if ((HEAP32[i2 >> 2] | 0) == (i8 | 0)) {
     HEAP32[i2 >> 2] = i3;
     if (!i3) {
      HEAP32[8020] = HEAP32[8020] & ~(1 << i1);
      break;
     }
    } else {
     HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i8 | 0) & 1) << 2) >> 2] = i3;
     if (!i3) break;
    }
    HEAP32[i3 + 24 >> 2] = i6;
    i1 = i8 + 16 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if (i2 | 0) {
     HEAP32[i3 + 16 >> 2] = i2;
     HEAP32[i2 + 24 >> 2] = i3;
    }
    i1 = HEAP32[i1 + 4 >> 2] | 0;
    if (i1 | 0) {
     HEAP32[i3 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i3;
    }
   }
  } while (0);
  HEAP32[i7 + 4 >> 2] = i5 | 1;
  HEAP32[i7 + i5 >> 2] = i5;
  if ((i7 | 0) == (HEAP32[8024] | 0)) {
   HEAP32[8021] = i5;
   return;
  }
 } else {
  HEAP32[i2 >> 2] = i4 & -2;
  HEAP32[i7 + 4 >> 2] = i1 | 1;
  HEAP32[i7 + i1 >> 2] = i1;
  i5 = i1;
 }
 i1 = i5 >>> 3;
 if (i5 >>> 0 < 256) {
  i3 = 32116 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[8019] | 0;
  i1 = 1 << i1;
  if (!(i2 & i1)) {
   HEAP32[8019] = i2 | i1;
   i1 = i3;
   i2 = i3 + 8 | 0;
  } else {
   i2 = i3 + 8 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
  }
  HEAP32[i2 >> 2] = i7;
  HEAP32[i1 + 12 >> 2] = i7;
  HEAP32[i7 + 8 >> 2] = i1;
  HEAP32[i7 + 12 >> 2] = i3;
  return;
 }
 i1 = i5 >>> 8;
 if (!i1) i1 = 0; else if (i5 >>> 0 > 16777215) i1 = 31; else {
  i6 = (i1 + 1048320 | 0) >>> 16 & 8;
  i8 = i1 << i6;
  i4 = (i8 + 520192 | 0) >>> 16 & 4;
  i8 = i8 << i4;
  i1 = (i8 + 245760 | 0) >>> 16 & 2;
  i1 = 14 - (i4 | i6 | i1) + (i8 << i1 >>> 15) | 0;
  i1 = i5 >>> (i1 + 7 | 0) & 1 | i1 << 1;
 }
 i4 = 32380 + (i1 << 2) | 0;
 HEAP32[i7 + 28 >> 2] = i1;
 HEAP32[i7 + 20 >> 2] = 0;
 HEAP32[i7 + 16 >> 2] = 0;
 i2 = HEAP32[8020] | 0;
 i3 = 1 << i1;
 if (!(i2 & i3)) {
  HEAP32[8020] = i2 | i3;
  HEAP32[i4 >> 2] = i7;
  HEAP32[i7 + 24 >> 2] = i4;
  HEAP32[i7 + 12 >> 2] = i7;
  HEAP32[i7 + 8 >> 2] = i7;
  return;
 }
 i2 = i5 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
 i3 = HEAP32[i4 >> 2] | 0;
 while (1) {
  if ((HEAP32[i3 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
   i1 = 69;
   break;
  }
  i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
  i1 = HEAP32[i4 >> 2] | 0;
  if (!i1) {
   i1 = 68;
   break;
  } else {
   i2 = i2 << 1;
   i3 = i1;
  }
 }
 if ((i1 | 0) == 68) {
  HEAP32[i4 >> 2] = i7;
  HEAP32[i7 + 24 >> 2] = i3;
  HEAP32[i7 + 12 >> 2] = i7;
  HEAP32[i7 + 8 >> 2] = i7;
  return;
 } else if ((i1 | 0) == 69) {
  i6 = i3 + 8 | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i8 + 12 >> 2] = i7;
  HEAP32[i6 >> 2] = i7;
  HEAP32[i7 + 8 >> 2] = i8;
  HEAP32[i7 + 12 >> 2] = i3;
  HEAP32[i7 + 24 >> 2] = 0;
  return;
 }
}

function _hexfloat(i18, i22, i21, i23, i19) {
 i18 = i18 | 0;
 i22 = i22 | 0;
 i21 = i21 | 0;
 i23 = i23 | 0;
 i19 = i19 | 0;
 var d1 = 0.0, i2 = 0, i3 = 0, d4 = 0.0, i5 = 0, i6 = 0, i7 = 0, d8 = 0.0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i20 = 0;
 i20 = i18 + 4 | 0;
 i2 = HEAP32[i20 >> 2] | 0;
 i17 = i18 + 100 | 0;
 if (i2 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
  HEAP32[i20 >> 2] = i2 + 1;
  i3 = HEAPU8[i2 >> 0] | 0;
  i5 = 0;
 } else {
  i3 = ___shgetc(i18) | 0;
  i5 = 0;
 }
 L4 : while (1) {
  switch (i3 | 0) {
  case 46:
   {
    i16 = 8;
    break L4;
   }
  case 48:
   break;
  default:
   {
    i12 = 0;
    i7 = 0;
    d8 = 1.0;
    d1 = 0.0;
    i2 = 0;
    i6 = i3;
    i13 = i5;
    i15 = 0;
    i14 = 0;
    i5 = 0;
    i3 = 0;
    break L4;
   }
  }
  i2 = HEAP32[i20 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
   HEAP32[i20 >> 2] = i2 + 1;
   i3 = HEAPU8[i2 >> 0] | 0;
   i5 = 1;
   continue;
  } else {
   i3 = ___shgetc(i18) | 0;
   i5 = 1;
   continue;
  }
 }
 if ((i16 | 0) == 8) {
  i2 = HEAP32[i20 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
   HEAP32[i20 >> 2] = i2 + 1;
   i3 = HEAPU8[i2 >> 0] | 0;
  } else i3 = ___shgetc(i18) | 0;
  if ((i3 | 0) == 48) {
   i5 = 0;
   i3 = 0;
   do {
    i2 = HEAP32[i20 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
     HEAP32[i20 >> 2] = i2 + 1;
     i6 = HEAPU8[i2 >> 0] | 0;
    } else i6 = ___shgetc(i18) | 0;
    i5 = _i64Add(i5 | 0, i3 | 0, -1, -1) | 0;
    i3 = tempRet0;
   } while ((i6 | 0) == 48);
   i12 = 1;
   i7 = 0;
   d8 = 1.0;
   d1 = 0.0;
   i2 = 0;
   i13 = 1;
   i15 = 0;
   i14 = 0;
  } else {
   i12 = 1;
   i7 = 0;
   d8 = 1.0;
   d1 = 0.0;
   i2 = 0;
   i6 = i3;
   i13 = i5;
   i15 = 0;
   i14 = 0;
   i5 = 0;
   i3 = 0;
  }
 }
 while (1) {
  i10 = i6 + -48 | 0;
  i9 = i6 | 32;
  if (i10 >>> 0 < 10) i16 = 20; else {
   i11 = (i6 | 0) == 46;
   if (!(i11 | (i9 + -97 | 0) >>> 0 < 6)) break;
   if (i11) if (!i12) {
    i12 = 1;
    d4 = d8;
    i11 = i13;
    i5 = i14;
    i3 = i15;
    i10 = i14;
    i9 = i15;
   } else {
    i6 = 46;
    break;
   } else i16 = 20;
  }
  if ((i16 | 0) == 20) {
   i16 = 0;
   i6 = (i6 | 0) > 57 ? i9 + -87 | 0 : i10;
   do if ((i15 | 0) < 0 | (i15 | 0) == 0 & i14 >>> 0 < 8) {
    d4 = d8;
    i2 = i6 + (i2 << 4) | 0;
   } else if ((i15 | 0) < 0 | (i15 | 0) == 0 & i14 >>> 0 < 14) {
    d8 = d8 * .0625;
    d4 = d8;
    d1 = d1 + d8 * +(i6 | 0);
    break;
   } else {
    i13 = (i7 | 0) != 0 | (i6 | 0) == 0;
    i7 = i13 ? i7 : 1;
    d4 = d8;
    d1 = i13 ? d1 : d1 + d8 * .5;
    break;
   } while (0);
   i10 = _i64Add(i14 | 0, i15 | 0, 1, 0) | 0;
   i11 = 1;
   i9 = tempRet0;
  }
  i6 = HEAP32[i20 >> 2] | 0;
  if (i6 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
   HEAP32[i20 >> 2] = i6 + 1;
   d8 = d4;
   i6 = HEAPU8[i6 >> 0] | 0;
   i13 = i11;
   i15 = i9;
   i14 = i10;
   continue;
  } else {
   d8 = d4;
   i6 = ___shgetc(i18) | 0;
   i13 = i11;
   i15 = i9;
   i14 = i10;
   continue;
  }
 }
 do if (!i13) {
  i2 = (HEAP32[i17 >> 2] | 0) == 0;
  if (!i2) HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + -1;
  if (!i19) ___shlim(i18, 0); else {
   if (!i2) HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + -1;
   if (!((i12 | 0) == 0 | i2)) HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + -1;
  }
  d1 = +(i23 | 0) * 0.0;
 } else {
  i9 = (i12 | 0) == 0;
  i10 = i9 ? i14 : i5;
  i9 = i9 ? i15 : i3;
  if ((i15 | 0) < 0 | (i15 | 0) == 0 & i14 >>> 0 < 8) {
   i5 = i14;
   i3 = i15;
   while (1) {
    i2 = i2 << 4;
    i16 = i5;
    i5 = _i64Add(i5 | 0, i3 | 0, 1, 0) | 0;
    if (!((i3 | 0) < 0 | (i3 | 0) == 0 & i16 >>> 0 < 7)) {
     i7 = i2;
     break;
    } else i3 = tempRet0;
   }
  } else i7 = i2;
  if ((i6 | 32 | 0) == 112) {
   i3 = _scanexp(i18, i19) | 0;
   i2 = tempRet0;
   if ((i3 | 0) == 0 & (i2 | 0) == -2147483648) {
    if (!i19) {
     ___shlim(i18, 0);
     d1 = 0.0;
     break;
    }
    if (!(HEAP32[i17 >> 2] | 0)) {
     i3 = 0;
     i2 = 0;
    } else {
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + -1;
     i3 = 0;
     i2 = 0;
    }
   }
  } else if (!(HEAP32[i17 >> 2] | 0)) {
   i3 = 0;
   i2 = 0;
  } else {
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + -1;
   i3 = 0;
   i2 = 0;
  }
  i5 = _bitshift64Shl(i10 | 0, i9 | 0, 2) | 0;
  i5 = _i64Add(i5 | 0, tempRet0 | 0, -32, -1) | 0;
  i5 = _i64Add(i5 | 0, tempRet0 | 0, i3 | 0, i2 | 0) | 0;
  i2 = tempRet0;
  if (!i7) {
   d1 = +(i23 | 0) * 0.0;
   break;
  }
  i20 = 0 - i21 | 0;
  i19 = ((i20 | 0) < 0) << 31 >> 31;
  if ((i2 | 0) > (i19 | 0) | (i2 | 0) == (i19 | 0) & i5 >>> 0 > i20 >>> 0) {
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   d1 = +(i23 | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
   break;
  }
  i20 = i21 + -106 | 0;
  i19 = ((i20 | 0) < 0) << 31 >> 31;
  if ((i2 | 0) < (i19 | 0) | (i2 | 0) == (i19 | 0) & i5 >>> 0 < i20 >>> 0) {
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   d1 = +(i23 | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
   break;
  }
  if ((i7 | 0) > -1) {
   i3 = i7;
   do {
    i20 = !(d1 >= .5);
    i3 = i3 << 1 | (i20 ^ 1) & 1;
    d1 = d1 + (i20 ? d1 : d1 + -1.0);
    i5 = _i64Add(i5 | 0, i2 | 0, -1, -1) | 0;
    i2 = tempRet0;
   } while ((i3 | 0) > -1);
   d8 = d1;
   i6 = i3;
  } else {
   d8 = d1;
   i6 = i7;
  }
  i20 = ((i22 | 0) < 0) << 31 >> 31;
  i21 = _i64Subtract(32, 0, i21 | 0, ((i21 | 0) < 0) << 31 >> 31 | 0) | 0;
  i2 = _i64Add(i21 | 0, tempRet0 | 0, i5 | 0, i2 | 0) | 0;
  i21 = tempRet0;
  if ((i21 | 0) < (i20 | 0) | (i21 | 0) == (i20 | 0) & i2 >>> 0 < i22 >>> 0) if ((i2 | 0) > 0) i16 = 59; else {
   i3 = 0;
   i2 = 84;
   i16 = 61;
  } else {
   i2 = i22;
   i16 = 59;
  }
  if ((i16 | 0) == 59) if ((i2 | 0) < 53) {
   i3 = i2;
   i2 = 84 - i2 | 0;
   i16 = 61;
  } else {
   d4 = 0.0;
   d1 = +(i23 | 0);
  }
  if ((i16 | 0) == 61) {
   d1 = +(i23 | 0);
   d4 = +_copysignl(+_scalbn(1.0, i2), d1);
   i2 = i3;
  }
  i23 = (i6 & 1 | 0) == 0 & (d8 != 0.0 & (i2 | 0) < 32);
  d1 = (i23 ? 0.0 : d8) * d1 + (d4 + d1 * +((i6 + (i23 & 1) | 0) >>> 0)) - d4;
  if (!(d1 != 0.0)) HEAP32[(___errno_location() | 0) >> 2] = 34;
  d1 = +_scalbnl(d1, i5);
 } while (0);
 return +d1;
}

function _LoadSingleTable(i24, i25, i26, i27) {
 i24 = i24 | 0;
 i25 = i25 | 0;
 i26 = i26 | 0;
 i27 = i27 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i33 = i35 + 48 | 0;
 i32 = i35 + 40 | 0;
 i34 = i35 + 32 | 0;
 i31 = i35 + 8 | 0;
 i6 = i35;
 i28 = HEAP32[i24 + 24 + (i26 << 2) >> 2] | 0;
 i29 = HEAP32[4268 + (i26 << 2) >> 2] | 0;
 i30 = _strlen(i29) | 0;
 i7 = HEAP32[i27 >> 2] | 0;
 i5 = 32676 + i26 | 0;
 i1 = HEAP8[i5 >> 0] | 0;
 do if (!(i1 << 24 >> 24)) {
  i1 = 0;
  i2 = 0;
  L2 : while (1) {
   if ((i2 | 0) >= (i30 | 0)) {
    i2 = 10;
    break;
   }
   i3 = HEAP8[i29 + (i2 | 1) >> 0] | 0;
   switch (i3 << 24 >> 24) {
   case 112:
    {
     i1 = i1 + 4 | 0;
     break;
    }
   case 42:
    {
     i1 = i1 + 4 | 0;
     break;
    }
   case 115:
    {
     i1 = i1 + 2 | 0;
     break;
    }
   case 99:
    {
     i1 = i1 + 1 | 0;
     break;
    }
   case 120:
    break;
   default:
    {
     i2 = 8;
     break L2;
    }
   }
   i2 = i2 + 2 | 0;
  }
  if ((i2 | 0) == 8) {
   HEAP32[i6 >> 2] = i3 & 255;
   _Crash(16565, i6);
  } else if ((i2 | 0) == 10) {
   HEAP8[i5 >> 0] = i1;
   i4 = i1;
   break;
  }
 } else i4 = i1 & 255; while (0);
 i23 = _mallocForever(Math_imul(i4, i28) | 0) | 0;
 i13 = i24 + 424 | 0;
 i14 = i24 + 4 | 0;
 i15 = i24 + 426 | 0;
 i16 = i24 + 20 | 0;
 i17 = i24 + 425 | 0;
 i18 = i24 + 8 | 0;
 i19 = i24;
 i20 = i28 + -1 | 0;
 i21 = i26 << 24;
 i22 = 0;
 i3 = i7;
 i1 = i23;
 i2 = 0;
 L16 : while (1) {
  if ((i22 | 0) >= (i28 | 0)) {
   i2 = 55;
   break;
  }
  i9 = (i22 | 0) == (i20 | 0) & 1;
  i10 = i22 + 1 | 0;
  i11 = i10 & 16777215 | i21;
  i12 = 0;
  i8 = i3;
  while (1) {
   if ((i12 | 0) >= (i30 | 0)) {
    i22 = i10;
    i3 = i8;
    continue L16;
   }
   i2 = HEAP8[i29 + i12 >> 0] | 0;
   i6 = i2 & 255;
   L22 : do if ((i2 & 255) < 48) {
    if ((HEAP32[i24 + 24 + (i6 << 2) >> 2] | 0) >>> 0 < 65536) {
     i3 = _GetU16(i8) | 0;
     i2 = 2;
    } else {
     i3 = _GetU32_205(i8) | 0;
     i2 = 4;
    }
    i7 = i8 + i2 | 0;
    i2 = i3 | i6 << 24;
   } else do switch (i2 << 24 >> 24) {
   case 120:
    {
     i7 = i8;
     i2 = 0;
     break L22;
    }
   case 99:
    {
     i7 = i8 + 1 | 0;
     i2 = HEAPU8[i8 >> 0] | 0;
     break L22;
    }
   case 115:
    {
     i7 = i8 + 2 | 0;
     i2 = _GetU16(i8) | 0;
     break L22;
    }
   case 105:
    {
     i7 = i8 + 4 | 0;
     i2 = _GetU32_205(i8) | 0;
     break L22;
    }
   case 60:
   case 59:
   case 58:
   case 57:
   case 56:
   case 55:
   case 54:
   case 53:
   case 52:
   case 51:
   case 50:
   case 49:
   case 48:
    {
     i2 = i6 + -48 | 0;
     i4 = HEAPU8[16505 + i2 >> 0] | 0;
     i3 = (1 << i4) + 255 & HEAPU8[i8 >> 0];
     i7 = HEAP8[(HEAP32[4216 + (i2 << 2) >> 2] | 0) + i3 >> 0] | 0;
     i5 = i7 << 24 >> 24;
     if ((i7 & 255) > 48) {
      i2 = 26;
      break L16;
     }
     if (!(HEAP8[i24 + 408 + i2 >> 0] | 0)) {
      i3 = _GetU16(i8) | 0;
      i2 = 2;
     } else {
      i3 = _GetU32_205(i8) | 0;
      i2 = 4;
     }
     i7 = i8 + i2 | 0;
     i2 = i3 >>> i4 | i5 << 24;
     break L22;
    }
   case 83:
    {
     if (!(HEAP8[i13 >> 0] | 0)) {
      i3 = _GetU16(i8) | 0;
      i2 = 2;
     } else {
      i3 = _GetU32_205(i8) | 0;
      i2 = 4;
     }
     i7 = i8 + i2 | 0;
     i2 = (HEAP32[i14 >> 2] | 0) + i3 | 0;
     break L22;
    }
   case 71:
    {
     if (!(HEAP8[i15 >> 0] | 0)) {
      i3 = _GetU16(i8) | 0;
      i2 = 2;
     } else {
      i3 = _GetU32_205(i8) | 0;
      i2 = 4;
     }
     i7 = i8 + i2 | 0;
     i2 = (HEAP32[i16 >> 2] | 0) + ((i3 << 4) + -16) | 0;
     break L22;
    }
   case 66:
    {
     if (!(HEAP8[i17 >> 0] | 0)) {
      i3 = _GetU16(i8) | 0;
      i2 = 2;
     } else {
      i3 = _GetU32_205(i8) | 0;
      i2 = 4;
     }
     i7 = i8 + i2 | 0;
     i2 = (HEAP32[i18 >> 2] | 0) + i3 | 0;
     break L22;
    }
   case 94:
    {
     i7 = i8 + 4 | 0;
     i2 = _RVA_FindData(i25, _GetU32_205(i8) | 0) | 0;
     break L22;
    }
   case 109:
    {
     i7 = i8;
     i2 = i19;
     break L22;
    }
   case 108:
    {
     i7 = i8;
     i2 = i9;
     break L22;
    }
   case 73:
    {
     i7 = i8;
     i2 = i11;
     break L22;
    }
   default:
    {
     i2 = 47;
     break L16;
    }
   } while (0); while (0);
   i3 = HEAP8[i29 + (i12 | 1) >> 0] | 0;
   switch (i3 << 24 >> 24) {
   case 112:
    {
     HEAP32[i1 >> 2] = i2;
     i1 = i1 + 4 | 0;
     break;
    }
   case 42:
    {
     HEAP32[i1 >> 2] = i2;
     i1 = i1 + 4 | 0;
     break;
    }
   case 115:
    {
     HEAP16[i1 >> 1] = i2;
     i1 = i1 + 2 | 0;
     break;
    }
   case 99:
    {
     HEAP8[i1 >> 0] = i2;
     i1 = i1 + 1 | 0;
     break;
    }
   case 120:
    break;
   default:
    {
     i2 = 53;
     break L16;
    }
   }
   i12 = i12 + 2 | 0;
   i8 = i7;
  }
 }
 if ((i2 | 0) == 26) {
  HEAP32[i31 >> 2] = i26;
  HEAP32[i31 + 4 >> 2] = i22;
  HEAP32[i31 + 8 >> 2] = i12;
  HEAP32[i31 + 12 >> 2] = i6;
  HEAP32[i31 + 16 >> 2] = i3;
  HEAP32[i31 + 20 >> 2] = i5;
  _printf(16640, i31) | 0;
  _exit(1);
 } else if ((i2 | 0) == 47) {
  HEAP32[i34 >> 2] = i6;
  HEAP32[i34 + 4 >> 2] = i6;
  _Crash(16715, i34);
 } else if ((i2 | 0) == 53) {
  HEAP32[i32 >> 2] = i3 & 255;
  _Crash(16781, i32);
 } else if ((i2 | 0) == 55) {
  HEAP32[i33 >> 2] = i26;
  HEAP32[i33 + 4 >> 2] = i28;
  _log_f(1, 16843, i33);
  HEAP32[i27 >> 2] = i3;
  STACKTOP = i35;
  return i23 | 0;
 }
 return 0;
}

function _twoway_strstr(i15, i16) {
 i15 = i15 | 0;
 i16 = i16 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i17 = 0, i18 = 0, i19 = 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 1056 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(1056);
 i17 = i19 + 1024 | 0;
 i18 = i19;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 HEAP32[i17 + 12 >> 2] = 0;
 HEAP32[i17 + 16 >> 2] = 0;
 HEAP32[i17 + 20 >> 2] = 0;
 HEAP32[i17 + 24 >> 2] = 0;
 HEAP32[i17 + 28 >> 2] = 0;
 i1 = HEAP8[i16 >> 0] | 0;
 L1 : do if (!(i1 << 24 >> 24)) {
  i5 = 1;
  i1 = -1;
  i14 = 0;
  i2 = 1;
  i3 = -1;
  i4 = 26;
 } else {
  i14 = 0;
  do {
   if (!(HEAP8[i15 + i14 >> 0] | 0)) {
    i1 = 0;
    break L1;
   }
   i13 = i17 + (((i1 & 255) >>> 5 & 255) << 2) | 0;
   HEAP32[i13 >> 2] = HEAP32[i13 >> 2] | 1 << (i1 & 31);
   i14 = i14 + 1 | 0;
   HEAP32[i18 + ((i1 & 255) << 2) >> 2] = i14;
   i1 = HEAP8[i16 + i14 >> 0] | 0;
  } while (i1 << 24 >> 24 != 0);
  i8 = i14 >>> 0 > 1;
  if (i8) {
   i2 = 0;
   i7 = -1;
   i3 = 1;
   L6 : while (1) {
    i4 = 1;
    i1 = i2;
    while (1) {
     i2 = i3;
     L10 : while (1) {
      i6 = 1;
      while (1) {
       i3 = HEAP8[i16 + (i6 + i7) >> 0] | 0;
       i5 = HEAP8[i16 + i2 >> 0] | 0;
       if (i3 << 24 >> 24 != i5 << 24 >> 24) break L10;
       if ((i6 | 0) == (i4 | 0)) break;
       i6 = i6 + 1 | 0;
       i2 = i6 + i1 | 0;
       if (i2 >>> 0 >= i14 >>> 0) {
        i9 = i4;
        i1 = i7;
        break L6;
       }
      }
      i1 = i4 + i1 | 0;
      i2 = i1 + 1 | 0;
      if (i2 >>> 0 >= i14 >>> 0) {
       i9 = i4;
       i1 = i7;
       break L6;
      }
     }
     i4 = i2 - i7 | 0;
     if ((i3 & 255) <= (i5 & 255)) break;
     i3 = i2 + 1 | 0;
     if (i3 >>> 0 >= i14 >>> 0) {
      i9 = i4;
      i1 = i7;
      break L6;
     } else i1 = i2;
    }
    i3 = i1 + 2 | 0;
    if (i3 >>> 0 >= i14 >>> 0) {
     i9 = 1;
     break;
    } else {
     i2 = i1 + 1 | 0;
     i7 = i1;
    }
   }
   if (i8) {
    i4 = 0;
    i8 = -1;
    i5 = 1;
    while (1) {
     i2 = 1;
     i3 = i4;
     while (1) {
      i4 = i5;
      L25 : while (1) {
       i7 = 1;
       while (1) {
        i5 = HEAP8[i16 + (i7 + i8) >> 0] | 0;
        i6 = HEAP8[i16 + i4 >> 0] | 0;
        if (i5 << 24 >> 24 != i6 << 24 >> 24) break L25;
        if ((i7 | 0) == (i2 | 0)) break;
        i7 = i7 + 1 | 0;
        i4 = i7 + i3 | 0;
        if (i4 >>> 0 >= i14 >>> 0) {
         i5 = i9;
         i3 = i8;
         i4 = 26;
         break L1;
        }
       }
       i3 = i2 + i3 | 0;
       i4 = i3 + 1 | 0;
       if (i4 >>> 0 >= i14 >>> 0) {
        i5 = i9;
        i3 = i8;
        i4 = 26;
        break L1;
       }
      }
      i2 = i4 - i8 | 0;
      if ((i5 & 255) >= (i6 & 255)) break;
      i5 = i4 + 1 | 0;
      if (i5 >>> 0 >= i14 >>> 0) {
       i5 = i9;
       i3 = i8;
       i4 = 26;
       break L1;
      } else i3 = i4;
     }
     i5 = i3 + 2 | 0;
     if (i5 >>> 0 >= i14 >>> 0) {
      i5 = i9;
      i2 = 1;
      i4 = 26;
      break;
     } else {
      i4 = i3 + 1 | 0;
      i8 = i3;
     }
    }
   } else {
    i5 = i9;
    i2 = 1;
    i3 = -1;
    i4 = 26;
   }
  } else {
   i5 = 1;
   i1 = -1;
   i2 = 1;
   i3 = -1;
   i4 = 26;
  }
 } while (0);
 L35 : do if ((i4 | 0) == 26) {
  i12 = (i3 + 1 | 0) >>> 0 > (i1 + 1 | 0) >>> 0;
  i2 = i12 ? i2 : i5;
  i12 = i12 ? i3 : i1;
  i13 = i12 + 1 | 0;
  if (!(_memcmp(i16, i16 + i2 | 0, i13) | 0)) i11 = i14 - i2 | 0; else {
   i2 = i14 - i12 + -1 | 0;
   i11 = 0;
   i2 = (i12 >>> 0 > i2 >>> 0 ? i12 : i2) + 1 | 0;
  }
  i7 = i14 | 63;
  i8 = i14 + -1 | 0;
  i9 = (i11 | 0) != 0;
  i10 = i14 - i2 | 0;
  i1 = i15;
  i6 = 0;
  i3 = i15;
  while (1) {
   i4 = i1;
   do if ((i3 - i4 | 0) >>> 0 < i14 >>> 0) {
    i5 = _memchr(i3, 0, i7) | 0;
    if (!i5) {
     i5 = i3 + i7 | 0;
     break;
    } else if ((i5 - i4 | 0) >>> 0 < i14 >>> 0) {
     i1 = 0;
     break L35;
    } else break;
   } else i5 = i3; while (0);
   i3 = HEAP8[i1 + i8 >> 0] | 0;
   L49 : do if (!(1 << (i3 & 31) & HEAP32[i17 + (((i3 & 255) >>> 5 & 255) << 2) >> 2])) {
    i4 = 0;
    i3 = i14;
   } else {
    i3 = i14 - (HEAP32[i18 + ((i3 & 255) << 2) >> 2] | 0) | 0;
    if (i3 | 0) {
     i4 = 0;
     i3 = i9 & (i6 | 0) != 0 & i3 >>> 0 < i2 >>> 0 ? i10 : i3;
     break;
    }
    i3 = i13 >>> 0 > i6 >>> 0 ? i13 : i6;
    i4 = HEAP8[i16 + i3 >> 0] | 0;
    L54 : do if (!(i4 << 24 >> 24)) i3 = i13; else {
     while (1) {
      if (i4 << 24 >> 24 != (HEAP8[i1 + i3 >> 0] | 0)) break;
      i3 = i3 + 1 | 0;
      i4 = HEAP8[i16 + i3 >> 0] | 0;
      if (!(i4 << 24 >> 24)) {
       i3 = i13;
       break L54;
      }
     }
     i4 = 0;
     i3 = i3 - i12 | 0;
     break L49;
    } while (0);
    while (1) {
     if (i3 >>> 0 <= i6 >>> 0) break L35;
     i3 = i3 + -1 | 0;
     if ((HEAP8[i16 + i3 >> 0] | 0) != (HEAP8[i1 + i3 >> 0] | 0)) {
      i4 = i11;
      i3 = i2;
      break;
     }
    }
   } while (0);
   i1 = i1 + i3 | 0;
   i6 = i4;
   i3 = i5;
  }
 } while (0);
 STACKTOP = i19;
 return i1 | 0;
}

function _fnmatch_internal(i1, i4, i2, i3, i16) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i16 = i16 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i17 = 0, i18 = 0, i19 = 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i17 = i19 + 4 | 0;
 i18 = i19;
 if (!(i16 & 4)) i7 = 4; else if ((HEAP8[i2 >> 0] | 0) == 46) if ((HEAP8[i1 >> 0] | 0) == 46) i7 = 4; else i1 = 1; else i7 = 4;
 L4 : do if ((i7 | 0) == 4) {
  i15 = (i16 & 16 | 0) == 0;
  i9 = i1;
  L6 : while (1) {
   i5 = _pat_next(i9, i4, i17, i16) | 0;
   switch (i5 | 0) {
   case -2:
    {
     i1 = 1;
     break L4;
    }
   case -5:
    break L6;
   default:
    {}
   }
   i6 = _str_next(i2, i3, i18) | 0;
   if ((i6 | 0) < 1) {
    i7 = 9;
    break;
   }
   i14 = HEAP32[i18 >> 2] | 0;
   i2 = i2 + i14 | 0;
   i3 = i3 - i14 | 0;
   if (i15) i1 = i6; else i1 = _casefold(i6) | 0;
   switch (i5 | 0) {
   case -3:
    {
     if (!(_match_bracket(i9, i6, i1) | 0)) {
      i1 = 1;
      break L4;
     }
     break;
    }
   case -4:
    break;
   default:
    if (!((i6 | 0) == (i5 | 0) | (i1 | 0) == (i5 | 0))) {
     i1 = 1;
     break L4;
    }
   }
   i14 = HEAP32[i17 >> 2] | 0;
   i9 = i9 + i14 | 0;
   i4 = i4 - i14 | 0;
  }
  if ((i7 | 0) == 9) {
   i1 = (i5 | 0) != 0 & 1;
   break;
  }
  i1 = i9 + 1 | 0;
  i7 = _strnlen(i1, i4 + -1 | 0) | 0;
  i11 = i9 + (i7 + 1) | 0;
  L20 : do if ((i7 | 0) > 0) {
   i8 = i11;
   i5 = 1;
   i6 = 1;
   i4 = 0;
   while (1) {
    i14 = i9 + i6 | 0;
    switch (_pat_next(i14, i8 - i14 | 0, i17, i16) | 0) {
    case -2:
     {
      i1 = 1;
      break L4;
     }
    case -5:
     {
      i4 = 0;
      i5 = i6 + 1 | 0;
      break;
     }
    default:
     i4 = i4 + 1 | 0;
    }
    i6 = i6 + (HEAP32[i17 >> 2] | 0) | 0;
    if ((i6 | 0) > (i7 | 0)) {
     i6 = i4;
     break L20;
    }
   }
  } else {
   i6 = 0;
   i5 = 1;
  } while (0);
  i14 = i9 + i5 | 0;
  i4 = _strnlen(i2, i3) | 0;
  i10 = i2 + i4 | 0;
  if (i4 >>> 0 < i6 >>> 0) i1 = 1; else {
   i3 = (i6 | 0) != 0;
   if ((i4 | 0) > 0 & i3) {
    i3 = i10;
    do {
     i4 = i3 + -1 | 0;
     if ((HEAP8[i4 >> 0] | 0) > -1) i3 = i4; else if (!(HEAP32[HEAP32[(___pthread_self_535() | 0) + 188 >> 2] >> 2] | 0)) i3 = i4; else do i3 = i3 + -1 | 0; while (i3 >>> 0 > i2 >>> 0 ? (HEAP8[i3 >> 0] & -64) << 24 >> 24 == -128 : 0);
     i6 = i6 + -1 | 0;
     i4 = (i6 | 0) != 0;
    } while (i3 >>> 0 > i2 >>> 0 & i4);
    i6 = i3;
    i3 = i4;
   } else i6 = i10;
   if (i3) i1 = 1; else {
    i13 = i14;
    i3 = _pat_next(i14, i11 - i13 | 0, i17, i16) | 0;
    i8 = HEAP32[i17 >> 2] | 0;
    i12 = i6;
    i4 = _str_next(i6, i10 - i12 | 0, i18) | 0;
    L40 : do if ((i4 | 0) >= 1) {
     i9 = i6;
     i7 = i8;
     i8 = i14 + i8 | 0;
     while (1) {
      i9 = i9 + (HEAP32[i18 >> 2] | 0) | 0;
      if (i15) i6 = i4; else i6 = _casefold(i4) | 0;
      switch (i3 | 0) {
      case -3:
       {
        if (!(_match_bracket(i8 + (0 - i7) | 0, i4, i6) | 0)) {
         i1 = 1;
         break L4;
        }
        break;
       }
      case -4:
       break;
      default:
       if (!((i4 | 0) == (i3 | 0) | (i6 | 0) == (i3 | 0))) {
        i1 = 1;
        break L4;
       }
      }
      i3 = _pat_next(i8, i11 - i8 | 0, i17, i16) | 0;
      i6 = HEAP32[i17 >> 2] | 0;
      i4 = _str_next(i9, i10 - i9 | 0, i18) | 0;
      if ((i4 | 0) < 1) break L40; else {
       i7 = i6;
       i8 = i8 + i6 | 0;
      }
     }
    } while (0);
    if (!i3) if ((i5 | 0) > 1) while (1) {
     i9 = i13 - i1 | 0;
     i5 = _pat_next(i1, i9, i17, i16) | 0;
     i3 = HEAP32[i17 >> 2] | 0;
     i4 = i1 + i3 | 0;
     L55 : do if ((i5 | 0) == -5) i1 = i4; else {
      i6 = i5;
      while (1) {
       i5 = i2;
       i8 = i6;
       L58 : while (1) {
        i6 = _str_next(i5, i12 - i5 | 0, i18) | 0;
        if (!i6) {
         i1 = 1;
         break L4;
        }
        if (i15) i7 = i6; else i7 = _casefold(i6) | 0;
        switch (i8 | 0) {
        case -3:
         {
          if (!(_match_bracket(i4 + (0 - i3) | 0, i6, i7) | 0)) break L58;
          break;
         }
        case -4:
         break;
        default:
         if (!((i6 | 0) == (i8 | 0) | (i7 | 0) == (i8 | 0))) break L58;
        }
        i5 = i5 + (HEAP32[i18 >> 2] | 0) | 0;
        i8 = _pat_next(i4, i13 - i4 | 0, i17, i16) | 0;
        i3 = HEAP32[i17 >> 2] | 0;
        i4 = i4 + i3 | 0;
        if ((i8 | 0) == -5) {
         i2 = i5;
         i1 = i4;
         break L55;
        }
       }
       if ((_str_next(i2, i12 - i2 | 0, i18) | 0) > 0) i2 = i2 + (HEAP32[i18 >> 2] | 0) | 0; else do i2 = i2 + 1 | 0; while ((_str_next(i2, i12 - i2 | 0, i18) | 0) < 0);
       i6 = _pat_next(i1, i9, i17, i16) | 0;
       i3 = HEAP32[i17 >> 2] | 0;
       i4 = i1 + i3 | 0;
       if ((i6 | 0) == -5) {
        i1 = i4;
        break;
       }
      }
     } while (0);
     if (i1 >>> 0 >= i14 >>> 0) {
      i1 = 0;
      break;
     }
    } else i1 = 0; else i1 = 1;
   }
  }
 } while (0);
 STACKTOP = i19;
 return i1 | 0;
}

function ___floatscan(i11, i2, i9) {
 i11 = i11 | 0;
 i2 = i2 | 0;
 i9 = i9 | 0;
 var d1 = 0.0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i12 = 0;
 switch (i2 | 0) {
 case 0:
  {
   i7 = -149;
   i8 = 24;
   i5 = 4;
   break;
  }
 case 1:
  {
   i7 = -1074;
   i8 = 53;
   i5 = 4;
   break;
  }
 case 2:
  {
   i7 = -1074;
   i8 = 53;
   i5 = 4;
   break;
  }
 default:
  d1 = 0.0;
 }
 L4 : do if ((i5 | 0) == 4) {
  i12 = i11 + 4 | 0;
  i10 = i11 + 100 | 0;
  do {
   i2 = HEAP32[i12 >> 2] | 0;
   if (i2 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
    HEAP32[i12 >> 2] = i2 + 1;
    i2 = HEAPU8[i2 >> 0] | 0;
   } else i2 = ___shgetc(i11) | 0;
  } while ((_isspace(i2) | 0) != 0);
  L13 : do switch (i2 | 0) {
  case 43:
  case 45:
   {
    i4 = 1 - (((i2 | 0) == 45 & 1) << 1) | 0;
    i2 = HEAP32[i12 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
     HEAP32[i12 >> 2] = i2 + 1;
     i3 = HEAPU8[i2 >> 0] | 0;
     break L13;
    } else {
     i3 = ___shgetc(i11) | 0;
     break L13;
    }
   }
  default:
   {
    i3 = i2;
    i4 = 1;
   }
  } while (0);
  i2 = 0;
  do {
   if ((i3 | 32 | 0) != (HEAP8[31368 + i2 >> 0] | 0)) break;
   do if (i2 >>> 0 < 7) {
    i3 = HEAP32[i12 >> 2] | 0;
    if (i3 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
     HEAP32[i12 >> 2] = i3 + 1;
     i3 = HEAPU8[i3 >> 0] | 0;
     break;
    } else {
     i3 = ___shgetc(i11) | 0;
     break;
    }
   } while (0);
   i2 = i2 + 1 | 0;
  } while (i2 >>> 0 < 8);
  L29 : do switch (i2 | 0) {
  case 8:
   break;
  case 3:
   {
    i5 = 23;
    break;
   }
  default:
   {
    i6 = (i9 | 0) != 0;
    if (i6 & i2 >>> 0 > 3) if ((i2 | 0) == 8) break L29; else {
     i5 = 23;
     break L29;
    }
    L34 : do if (!i2) {
     i2 = 0;
     do {
      if ((i3 | 32 | 0) != (HEAP8[31377 + i2 >> 0] | 0)) break L34;
      do if (i2 >>> 0 < 2) {
       i3 = HEAP32[i12 >> 2] | 0;
       if (i3 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
        HEAP32[i12 >> 2] = i3 + 1;
        i3 = HEAPU8[i3 >> 0] | 0;
        break;
       } else {
        i3 = ___shgetc(i11) | 0;
        break;
       }
      } while (0);
      i2 = i2 + 1 | 0;
     } while (i2 >>> 0 < 3);
    } while (0);
    switch (i2 | 0) {
    case 3:
     {
      i2 = HEAP32[i12 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
       HEAP32[i12 >> 2] = i2 + 1;
       i2 = HEAPU8[i2 >> 0] | 0;
      } else i2 = ___shgetc(i11) | 0;
      if ((i2 | 0) == 40) i2 = 1; else {
       if (!(HEAP32[i10 >> 2] | 0)) {
        d1 = nan;
        break L4;
       }
       HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
       d1 = nan;
       break L4;
      }
      while (1) {
       i3 = HEAP32[i12 >> 2] | 0;
       if (i3 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
        HEAP32[i12 >> 2] = i3 + 1;
        i3 = HEAPU8[i3 >> 0] | 0;
       } else i3 = ___shgetc(i11) | 0;
       if (!((i3 + -48 | 0) >>> 0 < 10 | (i3 + -65 | 0) >>> 0 < 26)) if (!((i3 | 0) == 95 | (i3 + -97 | 0) >>> 0 < 26)) break;
       i2 = i2 + 1 | 0;
      }
      if ((i3 | 0) == 41) {
       d1 = nan;
       break L4;
      }
      i3 = (HEAP32[i10 >> 2] | 0) == 0;
      if (!i3) HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
      if (!i6) {
       HEAP32[(___errno_location() | 0) >> 2] = 22;
       ___shlim(i11, 0);
       d1 = 0.0;
       break L4;
      }
      if (!i2) {
       d1 = nan;
       break L4;
      }
      while (1) {
       i2 = i2 + -1 | 0;
       if (!i3) HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
       if (!i2) {
        d1 = nan;
        break L4;
       }
      }
     }
    case 0:
     {
      if ((i3 | 0) == 48) {
       i2 = HEAP32[i12 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
        HEAP32[i12 >> 2] = i2 + 1;
        i2 = HEAPU8[i2 >> 0] | 0;
       } else i2 = ___shgetc(i11) | 0;
       if ((i2 | 32 | 0) == 120) {
        d1 = +_hexfloat(i11, i8, i7, i4, i9);
        break L4;
       }
       if (!(HEAP32[i10 >> 2] | 0)) i2 = 48; else {
        HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
        i2 = 48;
       }
      } else i2 = i3;
      d1 = +_decfloat(i11, i2, i8, i7, i4, i9);
      break L4;
     }
    default:
     {
      if (HEAP32[i10 >> 2] | 0) HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
      HEAP32[(___errno_location() | 0) >> 2] = 22;
      ___shlim(i11, 0);
      d1 = 0.0;
      break L4;
     }
    }
   }
  } while (0);
  if ((i5 | 0) == 23) {
   i3 = (HEAP32[i10 >> 2] | 0) == 0;
   if (!i3) HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
   if ((i9 | 0) != 0 & i2 >>> 0 > 3) do {
    if (!i3) HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + -1;
    i2 = i2 + -1 | 0;
   } while (i2 >>> 0 > 3);
  }
  d1 = +Math_fround(Math_fround(i4 | 0) * Math_fround(inf));
 } while (0);
 return +d1;
}

function _PInvoke_Call(i1, i13, i24, i2) {
 i1 = i1 | 0;
 i13 = i13 | 0;
 i24 = i24 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i25 = 0, i26 = 0, i27 = 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(160);
 i26 = i27 + 16 | 0;
 i19 = i27 + 8 | 0;
 i18 = i27;
 i17 = i27 + 88 | 0;
 i21 = i27 + 24 | 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i25 = i4 + 44 | 0;
 i25 = HEAPU8[i25 >> 0] | HEAPU8[i25 + 1 >> 0] << 8 | HEAPU8[i25 + 2 >> 0] << 16 | HEAPU8[i25 + 3 >> 0] << 24;
 i23 = HEAP32[i1 + 12 >> 2] | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 i14 = i2 + 12 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i15 | 64;
 i16 = (i25 | 0) == 0;
 if (i16) i1 = 63; else {
  i1 = HEAP32[8003] | 0;
  if ((i25 | 0) == (HEAP32[i1 + 88 >> 2] | 0)) i1 = 61; else i1 = (i25 | 0) == (HEAP32[i1 + 92 >> 2] | 0) ? 62 : 63;
 }
 i10 = i4 + 4 | 0;
 i11 = i23 + 12 | 0;
 HEAP32[i17 >> 2] = _MetaData_GetModuleRefName(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24, HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24) | 0;
 i11 = (HEAP32[i3 >> 2] | 0) + 16 | 0;
 i10 = i17 + 4 | 0;
 HEAP32[i10 >> 2] = HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24;
 i11 = i4 + 34 | 0;
 i11 = (HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8) & 65535;
 i9 = i4 + 36 | 0;
 i7 = 0;
 i5 = 2;
 i8 = 0;
 i3 = 0;
 i6 = i1;
 L5 : while (1) {
  if ((i7 | 0) == (i11 | 0)) break;
  i1 = HEAP32[(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24) + (i7 * 12 | 0) >> 2] | 0;
  do if ((HEAP8[i1 + 35 >> 0] | 0) == 1) {
   HEAP32[i17 + (i5 << 2) >> 2] = HEAP32[i13 + i8 >> 2];
   i4 = 3;
   i1 = i5 + 1 | 0;
   i2 = i3;
   i3 = 4;
  } else {
   i2 = HEAP32[8003] | 0;
   if ((i1 | 0) == (HEAP32[i2 + 36 >> 2] | 0)) {
    i1 = HEAP32[i13 + i8 >> 2] | 0;
    if (((HEAPU8[i23 >> 0] | HEAPU8[i23 + 1 >> 0] << 8) & 6) == 4) i1 = _ConvertStringToUnicode(i1) | 0; else i1 = _ConvertStringToANSI(i1) | 0;
    HEAP32[i21 + (i3 << 2) >> 2] = i1;
    HEAP32[i17 + (i5 << 2) >> 2] = i1;
    i4 = 3;
    i1 = i5 + 1 | 0;
    i2 = i3 + 1 | 0;
    i3 = 4;
    break;
   } else {
    if ((i1 | 0) == (HEAP32[i2 + 40 >> 2] | 0)) {
     HEAP32[i17 + (i5 << 2) >> 2] = HEAP32[i13 + i8 >> 2];
     i4 = 3;
     i1 = i5 + 1 | 0;
     i2 = i3;
     i3 = 4;
     break;
    }
    if ((i1 | 0) == (HEAP32[i2 + 88 >> 2] | 0)) {
     i4 = 1;
     i1 = i5;
     i2 = i3;
     i3 = 4;
     break;
    }
    if ((i1 | 0) == (HEAP32[i2 + 92 >> 2] | 0)) {
     i4 = 2;
     i1 = i5;
     i2 = i3;
     i3 = 8;
     break;
    } else {
     i20 = 17;
     break L5;
    }
   }
  } while (0);
  i4 = i4 << (i7 << 1) + 6 | i6;
  i7 = i7 + 1 | 0;
  i5 = i1;
  i8 = i8 + i3 | 0;
  i3 = i2;
  i6 = i4;
 }
 if ((i20 | 0) == 17) {
  i20 = i1 + 12 | 0;
  HEAP32[i18 >> 2] = HEAPU8[i20 >> 0] | HEAPU8[i20 + 1 >> 0] << 8 | HEAPU8[i20 + 2 >> 0] << 16 | HEAPU8[i20 + 3 >> 0] << 24;
  _Crash(18288, i18);
 }
 if ((i6 | 0) != 255) {
  HEAP32[i19 >> 2] = i6;
  _Crash(18339, i19);
 }
 i2 = FUNCTION_TABLE_iiii[i12 & 255](HEAP32[i17 >> 2] | 0, HEAP32[i10 >> 2] | 0, HEAP32[i17 + 8 >> 2] | 0) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  _free(HEAP32[i21 + (i1 << 2) >> 2] | 0);
  i1 = i1 + 1 | 0;
 }
 HEAP32[i14 >> 2] = i15;
 do if (i16) i22 = 0; else {
  if ((HEAP8[i25 + 35 >> 0] | 0) == 1) {
   HEAP32[i24 >> 2] = i2;
   i22 = 4;
   break;
  }
  i1 = HEAP32[8003] | 0;
  if ((i25 | 0) == (HEAP32[i1 + 36 >> 2] | 0)) if (((HEAPU8[i23 >> 0] | HEAPU8[i23 + 1 >> 0] << 8) & 6) == 4) {
   HEAP32[i24 >> 2] = _SystemString_FromCharPtrUTF16(i2) | 0;
   i22 = 4;
   break;
  } else {
   HEAP32[i24 >> 2] = _SystemString_FromCharPtrASCII(i2) | 0;
   i22 = 4;
   break;
  }
  if ((i25 | 0) == (HEAP32[i1 + 40 >> 2] | 0)) {
   HEAP32[i24 >> 2] = i2;
   i22 = 4;
   break;
  }
  if ((i25 | 0) == (HEAP32[i1 + 88 >> 2] | 0)) {
   HEAPF64[i24 >> 3] = 0.0;
   i22 = 8;
   break;
  }
  if ((i25 | 0) == (HEAP32[i1 + 92 >> 2] | 0)) {
   HEAPF64[i24 >> 3] = 0.0;
   i22 = 8;
   break;
  } else {
   i25 = i25 + 12 | 0;
   HEAP32[i26 >> 2] = HEAPU8[i25 >> 0] | HEAPU8[i25 + 1 >> 0] << 8 | HEAPU8[i25 + 2 >> 0] << 16 | HEAPU8[i25 + 3 >> 0] << 24;
   _Crash(18435, i26);
  }
 } while (0);
 STACKTOP = i27;
 return i22 | 0;
}

function ___rem_pio2(d2, i13) {
 d2 = +d2;
 i13 = i13 | 0;
 var i1 = 0, d3 = 0.0, d4 = 0.0, d5 = 0.0, i6 = 0, d7 = 0.0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i14 = 0, d15 = 0.0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48);
 i8 = i14 + 16 | 0;
 i9 = i14;
 HEAPF64[tempDoublePtr >> 3] = d2;
 i1 = HEAP32[tempDoublePtr >> 2] | 0;
 i6 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i10 = _bitshift64Lshr(i1 | 0, i6 | 0, 63) | 0;
 i12 = i6 & 2147483647;
 do if (i12 >>> 0 < 1074752123) if ((i6 & 1048575 | 0) == 598523) i11 = 21; else {
  i1 = (i10 | 0) != 0;
  if (i12 >>> 0 < 1073928573) if (i1) {
   d5 = d2 + 1.5707963267341256;
   d7 = d5 + 6.077100506506192e-11;
   HEAPF64[i13 >> 3] = d7;
   HEAPF64[i13 + 8 >> 3] = d5 - d7 + 6.077100506506192e-11;
   i1 = -1;
   break;
  } else {
   d5 = d2 + -1.5707963267341256;
   d7 = d5 + -6.077100506506192e-11;
   HEAPF64[i13 >> 3] = d7;
   HEAPF64[i13 + 8 >> 3] = d5 - d7 + -6.077100506506192e-11;
   i1 = 1;
   break;
  } else if (i1) {
   d5 = d2 + 3.1415926534682512;
   d7 = d5 + 1.2154201013012384e-10;
   HEAPF64[i13 >> 3] = d7;
   HEAPF64[i13 + 8 >> 3] = d5 - d7 + 1.2154201013012384e-10;
   i1 = -2;
   break;
  } else {
   d5 = d2 + -3.1415926534682512;
   d7 = d5 + -1.2154201013012384e-10;
   HEAPF64[i13 >> 3] = d7;
   HEAPF64[i13 + 8 >> 3] = d5 - d7 + -1.2154201013012384e-10;
   i1 = 2;
   break;
  }
 } else {
  if (i12 >>> 0 < 1075594812) if (i12 >>> 0 < 1075183037) {
   if ((i12 | 0) == 1074977148) {
    i11 = 21;
    break;
   }
   if (!i10) {
    d5 = d2 + -4.712388980202377;
    d7 = d5 + -1.8231301519518578e-10;
    HEAPF64[i13 >> 3] = d7;
    HEAPF64[i13 + 8 >> 3] = d5 - d7 + -1.8231301519518578e-10;
    i1 = 3;
    break;
   } else {
    d5 = d2 + 4.712388980202377;
    d7 = d5 + 1.8231301519518578e-10;
    HEAPF64[i13 >> 3] = d7;
    HEAPF64[i13 + 8 >> 3] = d5 - d7 + 1.8231301519518578e-10;
    i1 = -3;
    break;
   }
  } else {
   if ((i12 | 0) == 1075388923) {
    i11 = 21;
    break;
   }
   if (!i10) {
    d5 = d2 + -6.2831853069365025;
    d7 = d5 + -2.430840202602477e-10;
    HEAPF64[i13 >> 3] = d7;
    HEAPF64[i13 + 8 >> 3] = d5 - d7 + -2.430840202602477e-10;
    i1 = 4;
    break;
   } else {
    d5 = d2 + 6.2831853069365025;
    d7 = d5 + 2.430840202602477e-10;
    HEAPF64[i13 >> 3] = d7;
    HEAPF64[i13 + 8 >> 3] = d5 - d7 + 2.430840202602477e-10;
    i1 = -4;
    break;
   }
  }
  if (i12 >>> 0 < 1094263291) i11 = 21; else {
   if (i12 >>> 0 > 2146435071) {
    d7 = d2 - d2;
    HEAPF64[i13 + 8 >> 3] = d7;
    HEAPF64[i13 >> 3] = d7;
    i1 = 0;
    break;
   }
   HEAP32[tempDoublePtr >> 2] = i1;
   HEAP32[tempDoublePtr + 4 >> 2] = i6 & 1048575 | 1096810496;
   d2 = +HEAPF64[tempDoublePtr >> 3];
   i1 = 0;
   do {
    d7 = +(~~d2 | 0);
    HEAPF64[i8 + (i1 << 3) >> 3] = d7;
    d2 = (d2 - d7) * 16777216.0;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 2);
   HEAPF64[i8 + 16 >> 3] = d2;
   if (d2 == 0.0) {
    i1 = 1;
    while (1) if (+HEAPF64[i8 + (i1 << 3) >> 3] == 0.0) i1 = i1 + -1 | 0; else break;
   } else i1 = 2;
   i1 = ___rem_pio2_large(i8, i9, (i12 >>> 20) + -1046 | 0, i1 + 1 | 0, 1) | 0;
   d2 = +HEAPF64[i9 >> 3];
   if (!i10) {
    HEAPF64[i13 >> 3] = d2;
    HEAPF64[i13 + 8 >> 3] = +HEAPF64[i9 + 8 >> 3];
    break;
   } else {
    HEAPF64[i13 >> 3] = -d2;
    HEAPF64[i13 + 8 >> 3] = -+HEAPF64[i9 + 8 >> 3];
    i1 = 0 - i1 | 0;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 21) {
  d5 = d2 * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
  i1 = ~~d5;
  d3 = d2 - d5 * 1.5707963267341256;
  d4 = d5 * 6.077100506506192e-11;
  d2 = d3 - d4;
  HEAPF64[i13 >> 3] = d2;
  HEAPF64[tempDoublePtr >> 3] = d2;
  i11 = _bitshift64Lshr(HEAP32[tempDoublePtr >> 2] | 0, HEAP32[tempDoublePtr + 4 >> 2] | 0, 52) | 0;
  i6 = i12 >>> 20;
  if ((i6 - (i11 & 2047) | 0) > 16) {
   d4 = d5 * 6.077100506303966e-11;
   d7 = d3 - d4;
   d4 = d5 * 2.0222662487959506e-21 - (d3 - d7 - d4);
   d2 = d7 - d4;
   HEAPF64[i13 >> 3] = d2;
   HEAPF64[tempDoublePtr >> 3] = d2;
   i12 = _bitshift64Lshr(HEAP32[tempDoublePtr >> 2] | 0, HEAP32[tempDoublePtr + 4 >> 2] | 0, 52) | 0;
   d15 = d5 * 2.0222662487111665e-21;
   d3 = d7 - d15;
   d5 = d5 * 8.4784276603689e-32 - (d7 - d3 - d15);
   if ((i6 - (i12 & 2047) | 0) > 49) {
    d2 = d3 - d5;
    HEAPF64[i13 >> 3] = d2;
    d4 = d5;
   } else d3 = d7;
  }
  HEAPF64[i13 + 8 >> 3] = d3 - d2 - d4;
 }
 STACKTOP = i14;
 return i1 | 0;
}

function _match_in_dir(i21, i2, i22, i23, i16) {
 i21 = i21 | 0;
 i2 = i2 | 0;
 i22 = i22 | 0;
 i23 = i23 | 0;
 i16 = i16 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i24 = 0, i25 = 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 352 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(352);
 i17 = i25 + 80 | 0;
 i18 = i25 + 76 | 0;
 i19 = i25;
 i1 = (_strlen(i2) | 0) + 1 | 0;
 i24 = _llvm_stacksave() | 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * i1 | 0) + 15 & -16) | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow((1 * i1 | 0) + 15 & -16 | 0);
 i5 = _strlen(i21) | 0;
 i4 = i22 & 64;
 i15 = (i22 >>> 5 & 4 | i4 >>> 5) ^ 4;
 i1 = _strchr(i2, 47) | 0;
 if (!i1) {
  i3 = i2;
  i14 = 0;
 } else {
  _strcpy(i3, i2) | 0;
  HEAP8[i3 + (i1 - i2) >> 0] = 0;
  while (1) if ((HEAP8[i1 >> 0] | 0) == 47) i1 = i1 + 1 | 0; else {
   i14 = i1;
   break;
  }
 }
 i4 = _is_literal(i3, i4 >>> 6 ^ 1) | 0;
 i1 = HEAP8[i21 >> 0] | 0;
 if (i1 << 24 >> 24 == 47) i5 = (HEAP8[i21 + 1 >> 0] | 0) == 0 ? 0 : i5;
 i13 = _opendir(i1 << 24 >> 24 ? i21 : 31383) | 0;
 i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 L9 : do if (!i13) {
  switch (i1 | 0) {
  case 20:
   {
    i1 = 0;
    break L9;
   }
  case 13:
   {
    if (!(HEAP8[i3 >> 0] | 0)) if (!(_stat(i21, i19) | 0)) if ((HEAP32[i19 + 12 >> 2] & 61440 | 0) == 16384) {
     i1 = (_append(i16, i21, i5, i5) | 0) != 0 & 1;
     break L9;
    }
    break;
   }
  default:
   {}
  }
  i1 = (FUNCTION_TABLE_iii[i23 & 31](i21, i1) | 0 | i22 & 1 | 0) == 0;
  i1 = i1 ? 0 : 2;
 } else {
  if (!(HEAP8[i3 >> 0] | 0)) {
   i1 = (_append(i16, i21, i5, i5) | 0) != 0 & 1;
   _closedir(i13) | 0;
   break;
  }
  i1 = _readdir_r(i13, i17, i18) | 0;
  i2 = (i1 | 0) != 0;
  i6 = HEAP32[i18 >> 2] | 0;
  L23 : do if ((i6 | 0) != 0 & (i2 ^ 1)) {
   i12 = i5 + 2 | 0;
   i7 = (i4 | 0) == 0;
   i8 = (i14 | 0) != 0;
   i9 = (i22 & 2 | 0) == 0;
   i10 = i5 + 1 | 0;
   i11 = i19 + 12 | 0;
   i4 = i6;
   L25 : while (1) {
    i1 = i12 + (HEAPU16[i4 + 8 >> 1] | 0) | 0;
    i4 = _llvm_stacksave() | 0;
    i2 = STACKTOP;
    STACKTOP = STACKTOP + ((1 * i1 | 0) + 15 & -16) | 0;
    if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow((1 * i1 | 0) + 15 & -16 | 0);
    i1 = (HEAP32[i18 >> 2] | 0) + 11 | 0;
    if (i7) {
     if (!(_fnmatch(i3, i1, i15) | 0)) i20 = 21;
    } else if (!(_strcmp(i3, i1) | 0)) i20 = 21;
    L30 : do if ((i20 | 0) == 21) {
     i20 = 0;
     L32 : do if (i8) {
      i1 = HEAP8[(HEAP32[i18 >> 2] | 0) + 10 >> 0] | 0;
      if (i1 << 24 >> 24) {
       i1 = (i1 & 255) << 12 & 65535;
       if (i1 << 16 >> 16 < 16384) switch (i1 << 16 >> 16) {
       case -24576:
        break L32;
       default:
        break L30;
       } else switch (i1 << 16 >> 16) {
       case 16384:
        break L32;
       default:
        break L30;
       }
      }
     } while (0);
     if (!(HEAP8[i21 >> 0] | 0)) i2 = (HEAP32[i18 >> 2] | 0) + 11 | 0; else {
      _memcpy(i2 | 0, i21 | 0, i5 | 0) | 0;
      i6 = i2 + i5 | 0;
      HEAP8[i6 >> 0] = 47;
      _strcpy(i6 + 1 | 0, (HEAP32[i18 >> 2] | 0) + 11 | 0) | 0;
     }
     if (i8) {
      i1 = _match_in_dir(i2, i14, i22, i23, i16) | 0;
      if (!i1) break; else {
       i20 = 29;
       break L25;
      }
     }
     do if (i9) i1 = 0; else {
      i1 = HEAP8[(HEAP32[i18 >> 2] | 0) + 10 >> 0] | 0;
      if (i1 << 24 >> 24) {
       i1 = (i1 & 255) << 12 & 61440;
       if ((i1 | 0) != 40960) {
        i1 = (i1 | 0) == 16384;
        break;
       }
      }
      _stat(i2, i19) | 0;
      i1 = (HEAP32[i11 >> 2] & 61440 | 0) == 16384;
     } while (0);
     if (_append(i16, i2, i10 + (HEAPU16[(HEAP32[i18 >> 2] | 0) + 8 >> 1] | 0) | 0, i1 & 1) | 0) {
      i20 = 36;
      break L25;
     }
    } while (0);
    _llvm_stackrestore(i4 | 0);
    i1 = _readdir_r(i13, i17, i18) | 0;
    i2 = (i1 | 0) != 0;
    i4 = HEAP32[i18 >> 2] | 0;
    if (!((i4 | 0) != 0 & (i2 ^ 1))) break L23;
   }
   if ((i20 | 0) == 29) _closedir(i13) | 0; else if ((i20 | 0) == 36) {
    _closedir(i13) | 0;
    i1 = 1;
   }
   _llvm_stackrestore(i4 | 0);
   break L9;
  } while (0);
  _closedir(i13) | 0;
  if (i2) if (FUNCTION_TABLE_iii[i23 & 31](i21, i1) | 0 | i22 & 1 | 0) {
   i1 = 2;
   break;
  }
  i1 = 0;
 } while (0);
 _llvm_stackrestore(i24 | 0);
 STACKTOP = i25;
 return i1 | 0;
}

function ___udivmoddi4(i5, i6, i8, i11, i13) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i8 = i8 | 0;
 i11 = i11 | 0;
 i13 = i13 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i9 = 0, i10 = 0, i12 = 0, i14 = 0, i15 = 0;
 i9 = i5;
 i4 = i6;
 i7 = i4;
 i2 = i8;
 i12 = i11;
 i3 = i12;
 if (!i7) {
  i1 = (i13 | 0) != 0;
  if (!i3) {
   if (i1) {
    HEAP32[i13 >> 2] = (i9 >>> 0) % (i2 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i12 = 0;
   i13 = (i9 >>> 0) / (i2 >>> 0) >>> 0;
   return (tempRet0 = i12, i13) | 0;
  } else {
   if (!i1) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i5 | 0;
   HEAP32[i13 + 4 >> 2] = i6 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
 }
 i1 = (i3 | 0) == 0;
 do if (!i2) {
  if (i1) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = (i7 >>> 0) % (i2 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i12 = 0;
   i13 = (i7 >>> 0) / (i2 >>> 0) >>> 0;
   return (tempRet0 = i12, i13) | 0;
  }
  if (!i9) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = (i7 >>> 0) % (i3 >>> 0);
   }
   i12 = 0;
   i13 = (i7 >>> 0) / (i3 >>> 0) >>> 0;
   return (tempRet0 = i12, i13) | 0;
  }
  i1 = i3 - 1 | 0;
  if (!(i1 & i3)) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = i5 | 0;
    HEAP32[i13 + 4 >> 2] = i1 & i7 | i6 & 0;
   }
   i12 = 0;
   i13 = i7 >>> ((_llvm_cttz_i32(i3 | 0) | 0) >>> 0);
   return (tempRet0 = i12, i13) | 0;
  }
  i1 = (Math_clz32(i3 | 0) | 0) - (Math_clz32(i7 | 0) | 0) | 0;
  if (i1 >>> 0 <= 30) {
   i6 = i1 + 1 | 0;
   i3 = 31 - i1 | 0;
   i2 = i6;
   i5 = i7 << i3 | i9 >>> (i6 >>> 0);
   i6 = i7 >>> (i6 >>> 0);
   i1 = 0;
   i3 = i9 << i3;
   break;
  }
  if (!i13) {
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  HEAP32[i13 >> 2] = i5 | 0;
  HEAP32[i13 + 4 >> 2] = i4 | i6 & 0;
  i12 = 0;
  i13 = 0;
  return (tempRet0 = i12, i13) | 0;
 } else {
  if (!i1) {
   i1 = (Math_clz32(i3 | 0) | 0) - (Math_clz32(i7 | 0) | 0) | 0;
   if (i1 >>> 0 <= 31) {
    i10 = i1 + 1 | 0;
    i3 = 31 - i1 | 0;
    i6 = i1 - 31 >> 31;
    i2 = i10;
    i5 = i9 >>> (i10 >>> 0) & i6 | i7 << i3;
    i6 = i7 >>> (i10 >>> 0) & i6;
    i1 = 0;
    i3 = i9 << i3;
    break;
   }
   if (!i13) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i5 | 0;
   HEAP32[i13 + 4 >> 2] = i4 | i6 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  i1 = i2 - 1 | 0;
  if (i1 & i2 | 0) {
   i3 = (Math_clz32(i2 | 0) | 0) + 33 - (Math_clz32(i7 | 0) | 0) | 0;
   i15 = 64 - i3 | 0;
   i10 = 32 - i3 | 0;
   i4 = i10 >> 31;
   i14 = i3 - 32 | 0;
   i6 = i14 >> 31;
   i2 = i3;
   i5 = i10 - 1 >> 31 & i7 >>> (i14 >>> 0) | (i7 << i10 | i9 >>> (i3 >>> 0)) & i6;
   i6 = i6 & i7 >>> (i3 >>> 0);
   i1 = i9 << i15 & i4;
   i3 = (i7 << i15 | i9 >>> (i14 >>> 0)) & i4 | i9 << i10 & i3 - 33 >> 31;
   break;
  }
  if (i13 | 0) {
   HEAP32[i13 >> 2] = i1 & i9;
   HEAP32[i13 + 4 >> 2] = 0;
  }
  if ((i2 | 0) == 1) {
   i14 = i4 | i6 & 0;
   i15 = i5 | 0 | 0;
   return (tempRet0 = i14, i15) | 0;
  } else {
   i15 = _llvm_cttz_i32(i2 | 0) | 0;
   i14 = i7 >>> (i15 >>> 0) | 0;
   i15 = i7 << 32 - i15 | i9 >>> (i15 >>> 0) | 0;
   return (tempRet0 = i14, i15) | 0;
  }
 } while (0);
 if (!i2) {
  i7 = i3;
  i4 = 0;
  i3 = 0;
 } else {
  i10 = i8 | 0 | 0;
  i9 = i12 | i11 & 0;
  i7 = _i64Add(i10 | 0, i9 | 0, -1, -1) | 0;
  i8 = tempRet0;
  i4 = i3;
  i3 = 0;
  do {
   i11 = i4;
   i4 = i1 >>> 31 | i4 << 1;
   i1 = i3 | i1 << 1;
   i11 = i5 << 1 | i11 >>> 31 | 0;
   i12 = i5 >>> 31 | i6 << 1 | 0;
   _i64Subtract(i7 | 0, i8 | 0, i11 | 0, i12 | 0) | 0;
   i15 = tempRet0;
   i14 = i15 >> 31 | ((i15 | 0) < 0 ? -1 : 0) << 1;
   i3 = i14 & 1;
   i5 = _i64Subtract(i11 | 0, i12 | 0, i14 & i10 | 0, (((i15 | 0) < 0 ? -1 : 0) >> 31 | ((i15 | 0) < 0 ? -1 : 0) << 1) & i9 | 0) | 0;
   i6 = tempRet0;
   i2 = i2 - 1 | 0;
  } while ((i2 | 0) != 0);
  i7 = i4;
  i4 = 0;
 }
 i2 = 0;
 if (i13 | 0) {
  HEAP32[i13 >> 2] = i5;
  HEAP32[i13 + 4 >> 2] = i6;
 }
 i14 = (i1 | 0) >>> 31 | (i7 | i2) << 1 | (i2 << 1 | i1 >>> 31) & 0 | i4;
 i15 = (i1 << 1 | 0 >>> 31) & -2 | i3;
 return (tempRet0 = i14, i15) | 0;
}

function _CreateNewArrayType(i4, i2) {
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i5 = i7 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i1 = HEAP32[8003] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(HEAP8[i3 + 32 >> 0] | 0)) {
  _MetaData_Fill_TypeDef_(i3, 0, 0);
  i1 = HEAP32[8003] | 0;
 }
 _memcpy(i4 | 0, HEAP32[i1 + 4 >> 2] | 0, 132) | 0;
 i3 = i4 + 96 | 0;
 HEAP8[i3 >> 0] = i2;
 HEAP8[i3 + 1 >> 0] = i2 >> 8;
 HEAP8[i3 + 2 >> 0] = i2 >> 16;
 HEAP8[i3 + 3 >> 0] = i2 >> 24;
 HEAP8[i4 + 32 >> 0] = 1;
 if (!(HEAP8[40916] | 0)) _GetMethodDefs();
 i8 = i4 + 72 | 0;
 i3 = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
 i1 = i3 + 3 | 0;
 HEAP8[i8 >> 0] = i1;
 HEAP8[i8 + 1 >> 0] = i1 >> 8;
 HEAP8[i8 + 2 >> 0] = i1 >> 16;
 HEAP8[i8 + 3 >> 0] = i1 >> 24;
 i1 = _mallocForever(i1 * 12 | 0) | 0;
 i8 = i4 + 76 | 0;
 _memcpy(i1 | 0, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0, i3 * 12 | 0) | 0;
 HEAP8[i8 >> 0] = i1;
 HEAP8[i8 + 1 >> 0] = i1 >> 8;
 HEAP8[i8 + 2 >> 0] = i1 >> 16;
 HEAP8[i8 + 3 >> 0] = i1 >> 24;
 i8 = _Generics_GetGenericTypeFromCoreType(HEAP32[(HEAP32[8003] | 0) + 68 >> 2] | 0, 1, i5) | 0;
 HEAP32[i1 + (i3 * 12 | 0) >> 2] = i8;
 HEAP32[i1 + (i3 * 12 | 0) + 4 >> 2] = 0;
 i8 = i8 + 48 | 0;
 i2 = i1 + (i3 * 12 | 0) + 8 | 0;
 HEAP32[i2 >> 2] = _mallocForever((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) << 2) | 0;
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8005] | 0, i4, 1, i5) | 0;
 HEAP32[HEAP32[i2 >> 2] >> 2] = i8;
 i2 = i3 + 1 | 0;
 i8 = _Generics_GetGenericTypeFromCoreType(HEAP32[(HEAP32[8003] | 0) + 72 >> 2] | 0, 1, i5) | 0;
 HEAP32[i1 + (i2 * 12 | 0) >> 2] = i8;
 HEAP32[i1 + (i2 * 12 | 0) + 4 >> 2] = 0;
 i8 = i8 + 48 | 0;
 i8 = _mallocForever((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) << 2) | 0;
 i2 = i1 + (i2 * 12 | 0) + 8 | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i8 >> 2] = HEAP32[8006];
 HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] = HEAP32[8007];
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8008] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] = i8;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] = HEAP32[8009];
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8010] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] = i8;
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8011] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] = i8;
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8012] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] = i8;
 i3 = i3 + 2 | 0;
 i2 = _Generics_GetGenericTypeFromCoreType(HEAP32[(HEAP32[8003] | 0) + 76 >> 2] | 0, 1, i5) | 0;
 HEAP32[i1 + (i3 * 12 | 0) >> 2] = i2;
 HEAP32[i1 + (i3 * 12 | 0) + 4 >> 2] = 0;
 i2 = i2 + 48 | 0;
 i3 = i1 + (i3 * 12 | 0) + 8 | 0;
 HEAP32[i3 >> 2] = _mallocForever((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) << 2) | 0;
 i2 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8013] | 0, i4, 1, i5) | 0;
 HEAP32[HEAP32[i3 >> 2] >> 2] = i2;
 i2 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8014] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = i2;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] = HEAP32[8015];
 i2 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8016] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] = i2;
 i4 = _Generics_GetMethodDefFromCoreMethod(HEAP32[8017] | 0, i4, 1, i5) | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] = i4;
 i5 = HEAP32[i5 >> 2] | 0;
 i4 = i5 + 16 | 0;
 i5 = i5 + 12 | 0;
 i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
 HEAP32[i6 >> 2] = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
 HEAP32[i6 + 4 >> 2] = i5;
 _log_f(2, 21390, i6);
 STACKTOP = i7;
 return;
}

function _try_realloc_chunk(i12, i9) {
 i12 = i12 | 0;
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0;
 i10 = i12 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i1 = i11 & -8;
 i6 = i12 + i1 | 0;
 if (!(i11 & 3)) {
  if (i9 >>> 0 < 256) {
   i12 = 0;
   return i12 | 0;
  }
  if (i1 >>> 0 >= (i9 + 4 | 0) >>> 0) if ((i1 - i9 | 0) >>> 0 <= HEAP32[8139] << 1 >>> 0) return i12 | 0;
  i12 = 0;
  return i12 | 0;
 }
 if (i1 >>> 0 >= i9 >>> 0) {
  i1 = i1 - i9 | 0;
  if (i1 >>> 0 <= 15) return i12 | 0;
  i8 = i12 + i9 | 0;
  HEAP32[i10 >> 2] = i11 & 1 | i9 | 2;
  HEAP32[i8 + 4 >> 2] = i1 | 3;
  i11 = i6 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 1;
  _dispose_chunk(i8, i1);
  return i12 | 0;
 }
 if ((HEAP32[8025] | 0) == (i6 | 0)) {
  i8 = (HEAP32[8022] | 0) + i1 | 0;
  i1 = i8 - i9 | 0;
  i2 = i12 + i9 | 0;
  if (i8 >>> 0 <= i9 >>> 0) {
   i12 = 0;
   return i12 | 0;
  }
  HEAP32[i10 >> 2] = i11 & 1 | i9 | 2;
  HEAP32[i2 + 4 >> 2] = i1 | 1;
  HEAP32[8025] = i2;
  HEAP32[8022] = i1;
  return i12 | 0;
 }
 if ((HEAP32[8024] | 0) == (i6 | 0)) {
  i2 = (HEAP32[8021] | 0) + i1 | 0;
  if (i2 >>> 0 < i9 >>> 0) {
   i12 = 0;
   return i12 | 0;
  }
  i1 = i2 - i9 | 0;
  if (i1 >>> 0 > 15) {
   i8 = i12 + i9 | 0;
   i2 = i12 + i2 | 0;
   HEAP32[i10 >> 2] = i11 & 1 | i9 | 2;
   HEAP32[i8 + 4 >> 2] = i1 | 1;
   HEAP32[i2 >> 2] = i1;
   i2 = i2 + 4 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -2;
   i2 = i8;
  } else {
   HEAP32[i10 >> 2] = i11 & 1 | i2 | 2;
   i2 = i12 + i2 + 4 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 1;
   i2 = 0;
   i1 = 0;
  }
  HEAP32[8021] = i1;
  HEAP32[8024] = i2;
  return i12 | 0;
 }
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 if (i2 & 2 | 0) {
  i12 = 0;
  return i12 | 0;
 }
 i7 = (i2 & -8) + i1 | 0;
 if (i7 >>> 0 < i9 >>> 0) {
  i12 = 0;
  return i12 | 0;
 }
 i8 = i7 - i9 | 0;
 i3 = i2 >>> 3;
 do if (i2 >>> 0 < 256) {
  i2 = HEAP32[i6 + 8 >> 2] | 0;
  i1 = HEAP32[i6 + 12 >> 2] | 0;
  if ((i1 | 0) == (i2 | 0)) {
   HEAP32[8019] = HEAP32[8019] & ~(1 << i3);
   break;
  } else {
   HEAP32[i2 + 12 >> 2] = i1;
   HEAP32[i1 + 8 >> 2] = i2;
   break;
  }
 } else {
  i5 = HEAP32[i6 + 24 >> 2] | 0;
  i1 = HEAP32[i6 + 12 >> 2] | 0;
  do if ((i1 | 0) == (i6 | 0)) {
   i3 = i6 + 16 | 0;
   i2 = i3 + 4 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    i1 = HEAP32[i3 >> 2] | 0;
    if (!i1) {
     i3 = 0;
     break;
    } else i4 = i3;
   } else i4 = i2;
   while (1) {
    i3 = i1 + 20 | 0;
    i2 = HEAP32[i3 >> 2] | 0;
    if (i2 | 0) {
     i1 = i2;
     i4 = i3;
     continue;
    }
    i2 = i1 + 16 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if (!i3) break; else {
     i1 = i3;
     i4 = i2;
    }
   }
   HEAP32[i4 >> 2] = 0;
   i3 = i1;
  } else {
   i3 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i3 + 12 >> 2] = i1;
   HEAP32[i1 + 8 >> 2] = i3;
   i3 = i1;
  } while (0);
  if (i5 | 0) {
   i1 = HEAP32[i6 + 28 >> 2] | 0;
   i2 = 32380 + (i1 << 2) | 0;
   if ((HEAP32[i2 >> 2] | 0) == (i6 | 0)) {
    HEAP32[i2 >> 2] = i3;
    if (!i3) {
     HEAP32[8020] = HEAP32[8020] & ~(1 << i1);
     break;
    }
   } else {
    HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i6 | 0) & 1) << 2) >> 2] = i3;
    if (!i3) break;
   }
   HEAP32[i3 + 24 >> 2] = i5;
   i1 = i6 + 16 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 | 0) {
    HEAP32[i3 + 16 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i3;
   }
   i1 = HEAP32[i1 + 4 >> 2] | 0;
   if (i1 | 0) {
    HEAP32[i3 + 20 >> 2] = i1;
    HEAP32[i1 + 24 >> 2] = i3;
   }
  }
 } while (0);
 if (i8 >>> 0 < 16) {
  HEAP32[i10 >> 2] = i7 | i11 & 1 | 2;
  i11 = i12 + i7 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 1;
  return i12 | 0;
 } else {
  i6 = i12 + i9 | 0;
  HEAP32[i10 >> 2] = i11 & 1 | i9 | 2;
  HEAP32[i6 + 4 >> 2] = i8 | 3;
  i11 = i12 + i7 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 1;
  _dispose_chunk(i6, i8);
  return i12 | 0;
 }
 return 0;
}

function _LoadPEFile(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i12 = i15 + 16 | 0;
 i7 = i15 + 8 | 0;
 L1 : do if (!i4) {
  _log_f(0, 13045, i15);
  i1 = 0;
 } else {
  i1 = _mallocForever(24) | 0;
  i11 = i1 + 8 | 0;
  HEAP32[i11 >> 2] = _RVA() | 0;
  i14 = _MetaData() | 0;
  HEAP32[i1 + 20 >> 2] = i14;
  i2 = i4 + (HEAP32[i4 + 60 >> 2] | 0) + 4 | 0;
  i5 = i2 + 20 | 0;
  i6 = i5 + 224 | 0;
  if ((HEAP16[i2 >> 1] | 0) == 332) {
   i3 = HEAPU16[i2 + 2 >> 1] | 0;
   i2 = 0;
   while (1) {
    if ((i2 | 0) == (i3 | 0)) break;
    _RVA_Create(HEAP32[i11 >> 2] | 0, i4, i6 + (i2 * 40 | 0) | 0) | 0;
    i2 = i2 + 1 | 0;
   }
   i6 = _RVA_FindData(HEAP32[i11 >> 2] | 0, HEAP32[i5 + 208 >> 2] | 0) | 0;
   i10 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i1 + 16 >> 2] = HEAP32[i6 + 20 >> 2];
   i10 = _RVA_FindData(HEAP32[i11 >> 2] | 0, i10) | 0;
   i6 = HEAP32[i10 + 12 >> 2] | 0;
   i9 = i10 + 16 | 0;
   HEAP32[i1 + 12 >> 2] = i9;
   HEAP32[i7 >> 2] = i9;
   _log_f(1, 13072, i7);
   i9 = HEAPU16[i10 + (i6 + 18) >> 1] | 0;
   i6 = i6 + 20 | 0;
   i3 = 0;
   i2 = 0;
   i8 = 0;
   while (1) {
    if ((i8 | 0) == (i9 | 0)) break;
    i7 = HEAP32[i10 + (i6 + 4) >> 2] | 0;
    i4 = i10 + (i6 + 8) | 0;
    i5 = i10 + (HEAP32[i10 + i6 >> 2] | 0) | 0;
    i6 = ((_strlen(i4) | 0) + 12 & -4) + i6 | 0;
    do if (!(_strcasecmp(i4, 13089) | 0)) _MetaData_LoadStrings(i14, i5, i7); else {
     if (!(_strcasecmp(i4, 13098) | 0)) {
      _MetaData_LoadUserStrings(i14, i5, i7);
      break;
     }
     if (!(_strcasecmp(i4, 13102) | 0)) {
      _MetaData_LoadBlobs(i14, i5, i7);
      break;
     }
     if (!(_strcasecmp(i4, 13108) | 0)) {
      _MetaData_LoadGUIDs(i14, i5, i7);
      break;
     } else {
      i4 = (_strcasecmp(i4, 13114) | 0) == 0;
      i3 = i4 ? i5 : i3;
      i2 = i4 ? i7 : i2;
      break;
     }
    } while (0);
    i8 = i8 + 1 | 0;
   }
   if (i3 | 0) _MetaData_LoadTables(i14, HEAP32[i11 >> 2] | 0, i3, i2);
   i2 = HEAP32[i14 + 192 >> 2] | 0;
   L29 : while (1) {
    if ((i2 | 0) <= 0) break;
    i4 = (_MetaData_GetTableRow(i14, i2 & 16777215 | 704643072) | 0) + 4 | 0;
    i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
    switch ((i4 >>> 24 & 255) << 24 >> 24) {
    case 2:
     {
      i3 = 57;
      break;
     }
    case 6:
     {
      i3 = 33;
      break;
     }
    default:
     {
      i13 = 25;
      break L29;
     }
    }
    HEAP8[(_MetaData_GetTableRow(i14, i4) | 0) + i3 >> 0] = 1;
    i2 = i2 + -1 | 0;
   }
   if ((i13 | 0) == 25) {
    HEAP32[i12 >> 2] = i4;
    _Crash(13117, i12);
   }
   i2 = HEAP32[i14 + 188 >> 2] | 0;
   while (1) {
    if ((i2 | 0) <= 0) break L1;
    i13 = _MetaData_GetTableRow(i14, i2 & 16777215 | 687865856) | 0;
    i12 = i13 + 4 | 0;
    i12 = _MetaData_GetTableRow(i14, HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24) | 0;
    i13 = (_MetaData_GetTableRow(i14, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0) + 120 | 0;
    HEAP8[i13 >> 0] = i12;
    HEAP8[i13 + 1 >> 0] = i12 >> 8;
    HEAP8[i13 + 2 >> 0] = i12 >> 16;
    HEAP8[i13 + 3 >> 0] = i12 >> 24;
    i2 = i2 + -1 | 0;
   }
  } else i1 = 0;
 } while (0);
 STACKTOP = i15;
 return i1 | 0;
}

function _fmod(d12, d1) {
 d12 = +d12;
 d1 = +d1;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i13 = 0, i14 = 0;
 HEAPF64[tempDoublePtr >> 3] = d12;
 i6 = HEAP32[tempDoublePtr >> 2] | 0;
 i8 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i10 = HEAP32[tempDoublePtr >> 2] | 0;
 i11 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i3 = _bitshift64Lshr(i6 | 0, i8 | 0, 52) | 0;
 i3 = i3 & 2047;
 i9 = _bitshift64Lshr(i10 | 0, i11 | 0, 52) | 0;
 i9 = i9 & 2047;
 i13 = i8 & -2147483648;
 i5 = _bitshift64Shl(i10 | 0, i11 | 0, 1) | 0;
 i7 = tempRet0;
 L1 : do if ((i5 | 0) == 0 & (i7 | 0) == 0) i14 = 3; else {
  i4 = ___DOUBLE_BITS_273(d1) | 0;
  i2 = tempRet0 & 2147483647;
  if ((i3 | 0) == 2047 | (i2 >>> 0 > 2146435072 | (i2 | 0) == 2146435072 & i4 >>> 0 > 0)) i14 = 3; else {
   i2 = _bitshift64Shl(i6 | 0, i8 | 0, 1) | 0;
   i4 = tempRet0;
   if (!(i4 >>> 0 > i7 >>> 0 | (i4 | 0) == (i7 | 0) & i2 >>> 0 > i5 >>> 0)) return +((i2 | 0) == (i5 | 0) & (i4 | 0) == (i7 | 0) ? d12 * 0.0 : d12);
   if (!i3) {
    i2 = _bitshift64Shl(i6 | 0, i8 | 0, 12) | 0;
    i4 = tempRet0;
    if ((i4 | 0) > -1 | (i4 | 0) == -1 & i2 >>> 0 > 4294967295) {
     i3 = 0;
     do {
      i3 = i3 + -1 | 0;
      i2 = _bitshift64Shl(i2 | 0, i4 | 0, 1) | 0;
      i4 = tempRet0;
     } while ((i4 | 0) > -1 | (i4 | 0) == -1 & i2 >>> 0 > 4294967295);
    } else i3 = 0;
    i6 = _bitshift64Shl(i6 | 0, i8 | 0, 1 - i3 | 0) | 0;
    i5 = tempRet0;
   } else i5 = i8 & 1048575 | 1048576;
   if (!i9) {
    i4 = _bitshift64Shl(i10 | 0, i11 | 0, 12) | 0;
    i7 = tempRet0;
    if ((i7 | 0) > -1 | (i7 | 0) == -1 & i4 >>> 0 > 4294967295) {
     i2 = 0;
     do {
      i2 = i2 + -1 | 0;
      i4 = _bitshift64Shl(i4 | 0, i7 | 0, 1) | 0;
      i7 = tempRet0;
     } while ((i7 | 0) > -1 | (i7 | 0) == -1 & i4 >>> 0 > 4294967295);
    } else i2 = 0;
    i10 = _bitshift64Shl(i10 | 0, i11 | 0, 1 - i2 | 0) | 0;
    i9 = i2;
    i8 = tempRet0;
   } else i8 = i11 & 1048575 | 1048576;
   i4 = _i64Subtract(i6 | 0, i5 | 0, i10 | 0, i8 | 0) | 0;
   i2 = tempRet0;
   i7 = (i2 | 0) > -1 | (i2 | 0) == -1 & i4 >>> 0 > 4294967295;
   L23 : do if ((i3 | 0) > (i9 | 0)) {
    while (1) {
     if (i7) {
      if ((i4 | 0) == 0 & (i2 | 0) == 0) break;
     } else {
      i4 = i6;
      i2 = i5;
     }
     i6 = _bitshift64Shl(i4 | 0, i2 | 0, 1) | 0;
     i5 = tempRet0;
     i3 = i3 + -1 | 0;
     i4 = _i64Subtract(i6 | 0, i5 | 0, i10 | 0, i8 | 0) | 0;
     i2 = tempRet0;
     i7 = (i2 | 0) > -1 | (i2 | 0) == -1 & i4 >>> 0 > 4294967295;
     if ((i3 | 0) <= (i9 | 0)) break L23;
    }
    d1 = d12 * 0.0;
    break L1;
   } while (0);
   if (i7) {
    if ((i4 | 0) == 0 & (i2 | 0) == 0) {
     d1 = d12 * 0.0;
     break;
    }
   } else {
    i2 = i5;
    i4 = i6;
   }
   if (i2 >>> 0 < 1048576 | (i2 | 0) == 1048576 & i4 >>> 0 < 0) do {
    i4 = _bitshift64Shl(i4 | 0, i2 | 0, 1) | 0;
    i2 = tempRet0;
    i3 = i3 + -1 | 0;
   } while (i2 >>> 0 < 1048576 | (i2 | 0) == 1048576 & i4 >>> 0 < 0);
   if ((i3 | 0) > 0) {
    i11 = _i64Add(i4 | 0, i2 | 0, 0, -1048576) | 0;
    i2 = tempRet0;
    i3 = _bitshift64Shl(i3 | 0, 0, 52) | 0;
    i2 = i2 | tempRet0;
    i3 = i11 | i3;
   } else {
    i3 = _bitshift64Lshr(i4 | 0, i2 | 0, 1 - i3 | 0) | 0;
    i2 = tempRet0;
   }
   HEAP32[tempDoublePtr >> 2] = i3;
   HEAP32[tempDoublePtr + 4 >> 2] = i2 | i13;
   d1 = +HEAPF64[tempDoublePtr >> 3];
  }
 } while (0);
 if ((i14 | 0) == 3) {
  d1 = d12 * d1;
  d1 = d1 / d1;
 }
 return +d1;
}

function _FindVirtualOverriddenMethod(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = i1 + 64 | 0;
 i9 = i1 + 52 | 0;
 i10 = i1 + 16 | 0;
 i11 = i1 + 20 | 0;
 i12 = i1 + 4 | 0;
 i7 = i1 + 48 | 0;
 L1 : while (1) {
  i5 = i2 + 4 | 0;
  i3 = i2 + 80 | 0;
  i6 = i2 + 92 | 0;
  i1 = HEAP32[(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 124 >> 2] | 0;
  while (1) {
   if (!i1) break;
   i4 = _MetaData_GetTableRow(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24, i1 & 16777215 | 419430400) | 0;
   if ((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24 | 0) == (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24 | 0)) {
    i14 = i4 + 8 | 0;
    i14 = (_MetaData_GetMethodDefFromDefRefOrSpec(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) | 0) + 52 | 0;
    if ((HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24 | 0) == (HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24 | 0)) {
     i13 = 7;
     break L1;
    }
   }
   i1 = i1 + -1 | 0;
  }
  i1 = i2 + 48 | 0;
  i3 = i2 + 44 | 0;
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  while (1) {
   i14 = i1;
   i1 = i1 + -1 | 0;
   if (!i14) break;
   i14 = (HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + 92 | 0;
   if (_MetaData_CompareNameAndSig(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24, HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24, HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24, HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24, 0, HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, 0) | 0) {
    i13 = 11;
    break L1;
   }
  }
  i14 = i2 + 40 | 0;
  i2 = HEAPU8[i14 >> 0] | HEAPU8[i14 + 1 >> 0] << 8 | HEAPU8[i14 + 2 >> 0] << 16 | HEAPU8[i14 + 3 >> 0] << 24;
  if (!i2) {
   i1 = 0;
   break;
  }
 }
 if ((i13 | 0) == 7) {
  i1 = i4 + 4 | 0;
  i1 = _MetaData_GetTableRow(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) | 0;
 } else if ((i13 | 0) == 11) i1 = HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0;
 return i1 | 0;
}

function _FindMethodInType(i9, i10, i13, i8, i14, i15) {
 i9 = i9 | 0;
 i10 = i10 | 0;
 i13 = i13 | 0;
 i8 = i8 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i11 = 0, i12 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48);
 i18 = i7 + 24 | 0;
 i12 = i7 + 8 | 0;
 i11 = i7;
 i16 = i7 + 32 | 0;
 i17 = i7 + 28 | 0;
 i1 = i9;
 L1 : while (1) {
  if (!i1) break;
  i5 = i1 + 112 | 0;
  i3 = i1 + 116 | 0;
  i2 = 0;
  while (1) {
   if (i2 >>> 0 >= (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) >>> 0) break;
   i4 = HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + (i2 << 2) >> 2] | 0;
   i19 = i4 + 48 | 0;
   i19 = (HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24) + 92 | 0;
   if (!(_MetaData_CompareNameAndSig(i10, i8, i13, i14, 0, i4, HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24, 0) | 0)) i2 = i2 + 1 | 0; else {
    i6 = 22;
    break L1;
   }
  }
  i19 = i1 + 40 | 0;
  i1 = HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24;
 }
 if ((i6 | 0) == 22) {
  STACKTOP = i7;
  return i4 | 0;
 }
 i5 = _malloc(2048) | 0;
 HEAP8[i5 >> 0] = 0;
 HEAP32[i17 >> 2] = _MetaData_GetBlob(i8, i16) | 0;
 i1 = _MetaData_DecodeSigEntry(i17) | 0;
 if (!(i1 & 32)) {
  i19 = i5 + (_strlen(i5) | 0) | 0;
  i8 = i19;
  HEAP8[i8 >> 0] = 115;
  HEAP8[i8 + 1 >> 0] = 116;
  HEAP8[i8 + 2 >> 0] = 97;
  HEAP8[i8 + 3 >> 0] = 116;
  i19 = i19 + 4 | 0;
  HEAP8[i19 >> 0] = 105;
  HEAP8[i19 + 1 >> 0] = 99;
  HEAP8[i19 + 2 >> 0] = 32;
  HEAP8[i19 + 3 >> 0] = 0;
 }
 if (i1 & 16 | 0) _MetaData_DecodeSigEntry(i17) | 0;
 i4 = _MetaData_DecodeSigEntry(i17) | 0;
 i1 = _Type_GetTypeFromSig(i13, i17, i14, i15) | 0;
 if (i1 | 0) {
  i19 = i5 + (_strlen(i5) | 0) | 0;
  i8 = i1 + 12 | 0;
  HEAP32[i11 >> 2] = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
  _sprintf(i19, 17525, i11) | 0;
 }
 i1 = i5 + (_strlen(i5) | 0) | 0;
 i11 = i9 + 16 | 0;
 i19 = i9 + 12 | 0;
 i19 = HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24;
 HEAP32[i12 >> 2] = HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24;
 HEAP32[i12 + 4 >> 2] = i19;
 HEAP32[i12 + 8 >> 2] = i10;
 _sprintf(i1, 18658, i12) | 0;
 i1 = 0;
 while (1) {
  HEAP32[i16 >> 2] = i1;
  if (i1 >>> 0 >= i4 >>> 0) break;
  i1 = _Type_GetTypeFromSig(i13, i17, i14, i15) | 0;
  i2 = HEAP32[i16 >> 2] | 0;
  if (i2 | 0) {
   i19 = i5 + (_strlen(i5) | 0) | 0;
   HEAP8[i19 >> 0] = 44;
   HEAP8[i19 + 1 >> 0] = 0;
  }
  i3 = i5 + (_strlen(i5) | 0) | 0;
  if (!i1) {
   HEAP8[i3 >> 0] = 63;
   HEAP8[i3 + 1 >> 0] = 63;
   HEAP8[i3 + 2 >> 0] = 63;
   HEAP8[i3 + 3 >> 0] = 0;
  } else {
   i19 = i1 + 12 | 0;
   i19 = HEAPU8[i19 >> 0] | HEAPU8[i19 + 1 >> 0] << 8 | HEAPU8[i19 + 2 >> 0] << 16 | HEAPU8[i19 + 3 >> 0] << 24;
   _memcpy(i3 | 0, i19 | 0, (_strlen(i19) | 0) + 1 | 0) | 0;
  }
  i1 = i2 + 1 | 0;
 }
 HEAP32[i18 >> 2] = i5;
 _Crash(17529, i18);
 return 0;
}

function _MetaData_Fill_FieldDef(i1, i6, i4, i2) {
 i1 = i1 | 0;
 i6 = i6 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i3 = 0, i5 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i7;
 i3 = i6 + 24 | 0;
 HEAP8[i3 >> 0] = i1;
 HEAP8[i3 + 1 >> 0] = i1 >> 8;
 HEAP8[i3 + 2 >> 0] = i1 >> 16;
 HEAP8[i3 + 3 >> 0] = i1 >> 24;
 i3 = i6 + 16 | 0;
 HEAP32[i5 >> 2] = _MetaData_GetBlob(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, i7 + 4 | 0) | 0;
 _MetaData_DecodeSigEntry(i5) | 0;
 i3 = i6 + 4 | 0;
 i1 = _Type_GetTypeFromSig(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, i5, i2, 0) | 0;
 i2 = i6 + 20 | 0;
 HEAP8[i2 >> 0] = i1;
 HEAP8[i2 + 1 >> 0] = i1 >> 8;
 HEAP8[i2 + 2 >> 0] = i1 >> 16;
 HEAP8[i2 + 3 >> 0] = i1 >> 24;
 L1 : do if (i1 | 0) {
  if (!(HEAP8[i1 + 32 >> 0] | 0)) {
   _MetaData_Fill_TypeDef_(i1, 0, 0);
   i1 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  }
  i1 = i1 + 68 | 0;
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  i1 = (i1 | 0) == 0 ? 4 : i1;
  i5 = i6 + 32 | 0;
  HEAP8[i5 >> 0] = i1;
  HEAP8[i5 + 1 >> 0] = i1 >> 8;
  HEAP8[i5 + 2 >> 0] = i1 >> 16;
  HEAP8[i5 + 3 >> 0] = i1 >> 24;
  i5 = i6 + 28 | 0;
  HEAP8[i5 >> 0] = i4;
  HEAP8[i5 + 1 >> 0] = i4 >> 8;
  HEAP8[i5 + 2 >> 0] = i4 >> 16;
  HEAP8[i5 + 3 >> 0] = i4 >> 24;
  HEAP8[i6 >> 0] = i6;
  HEAP8[i6 + 1 >> 0] = i6 >> 8;
  HEAP8[i6 + 2 >> 0] = i6 >> 16;
  HEAP8[i6 + 3 >> 0] = i6 >> 24;
  i5 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
  i1 = i6 + 8 | 0;
  i1 = (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8) & 65535;
  if (i1 & 256 | 0) {
   i2 = HEAP32[i5 + 140 >> 2] | 0;
   i3 = i6 + 36 | 0;
   i1 = 1;
   while (1) {
    if (i1 >>> 0 > i2 >>> 0) break L1;
    i4 = _MetaData_GetTableRow(i5, i1 & 16777215 | 486539264) | 0;
    i8 = i4 + 4 | 0;
    if ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0) == (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24 | 0)) break; else i1 = i1 + 1 | 0;
   }
   i5 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
   i8 = i6 + 40 | 0;
   HEAP8[i8 >> 0] = i5;
   HEAP8[i8 + 1 >> 0] = i5 >> 8;
   HEAP8[i8 + 2 >> 0] = i5 >> 16;
   HEAP8[i8 + 3 >> 0] = i5 >> 24;
   break;
  }
  if (i1 & 64 | 0) {
   i2 = HEAP32[i5 + 68 >> 2] | 0;
   i3 = i6 + 36 | 0;
   i1 = 1;
   while (1) {
    if (i1 >>> 0 > i2 >>> 0) break L1;
    i4 = _MetaData_GetTableRow(i5, i1 & 16777215 | 184549376) | 0;
    i8 = i4 + 4 | 0;
    if ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0) == (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24 | 0)) break; else i1 = i1 + 1 | 0;
   }
   i8 = i6 + 40 | 0;
   HEAP8[i8 >> 0] = i4;
   HEAP8[i8 + 1 >> 0] = i4 >> 8;
   HEAP8[i8 + 2 >> 0] = i4 >> 16;
   HEAP8[i8 + 3 >> 0] = i4 >> 24;
  }
 } while (0);
 STACKTOP = i7;
 return;
}

function _Thread_Execute() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48);
 i12 = i16 + 32 | 0;
 i14 = i16 + 24 | 0;
 i13 = i16 + 16 | 0;
 i11 = i16 + 8 | 0;
 i10 = i16;
 i2 = HEAP32[8001] | 0;
 HEAP32[i2 + 12 >> 2] = 0;
 HEAP32[8002] = i2;
 L1 : while (1) {
  HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
  _log_f(1, 21193, i10);
  switch (_JIT_Execute(i2, 100) | 0) {
  case 1:
   {
    i1 = HEAP32[i2 + 24 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i11 + 4 >> 2] = i1;
    _log_f(1, 21215, i11);
    i3 = 32004;
    while (1) {
     i9 = HEAP32[i3 >> 2] | 0;
     i4 = i9 + 56 | 0;
     if ((i9 | 0) == (i2 | 0)) break; else i3 = i4;
    }
    HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
    _Thread_Delete(i2);
    i2 = 32004;
    L8 : while (1) {
     i2 = HEAP32[i2 >> 2] | 0;
     if (!i2) {
      i15 = 10;
      break L1;
     }
     i3 = HEAP32[i2 + 12 >> 2] | 0;
     if (!(i3 & 4)) switch (i3 & -5 | 0) {
     case 64:
     case 8:
      break;
     default:
      break L8;
     }
     i2 = i2 + 56 | 0;
    }
    i2 = HEAP32[8001] | 0;
    break;
   }
  case 3:
   {
    i8 = _msTime() | 0;
    i9 = (HEAP32[i2 + 44 >> 2] | 0) + 16 | 0;
    HEAP32[i9 >> 2] = i8;
    HEAP32[i9 + 4 >> 2] = tempRet0;
    break;
   }
  default:
   {}
  }
  i1 = -1;
  i3 = i2;
  while (1) {
   i4 = HEAP32[8001] | 0;
   do {
    i9 = HEAP32[i3 + 56 >> 2] | 0;
    i3 = (i9 | 0) == 0 ? i4 : i9;
   } while ((HEAP32[i3 + 12 >> 2] & -5 | 0) != 0);
   HEAP32[8002] = i3;
   i8 = i3 + 44 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (!i9) {
    i2 = i3;
    continue L1;
   }
   if ((HEAP32[i9 >> 2] | 0) > -1) {
    i7 = _msTime() | 0;
    i8 = HEAP32[i9 >> 2] | 0;
    i4 = i9 + 16 | 0;
    i4 = _i64Subtract(i7 | 0, tempRet0 | 0, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0) | 0;
    i4 = i8 - i4 | 0;
    if ((i4 | 0) < 1) {
     i2 = i3;
     continue L1;
    } else i1 = i4 >>> 0 < i1 >>> 0 ? i4 : i1;
   } else {
    i5 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i5 | 0) == 26) break;
    i4 = HEAP32[i3 + 20 >> 2] | 0;
    i6 = i4 + 44 | 0;
    i4 = HEAP32[i4 >> 2] | 0;
    i7 = i4 + 28 | 0;
    i7 = i6 + (HEAP32[(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0;
    i4 = i4 + 14 | 0;
    if (!((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8) & 16)) {
     i1 = 4;
     i4 = HEAP32[i7 >> 2] | 0;
    } else {
     i1 = 0;
     i4 = 0;
    }
    if (!(FUNCTION_TABLE_iiiii[i5 & 31](i4, i7 + i1 | 0, i6, i9) | 0)) i1 = 5; else {
     i15 = 26;
     break;
    }
   }
   if ((i3 | 0) == (i2 | 0)) {
    i15 = 28;
    break L1;
   }
  }
  if ((i15 | 0) == 26) {
   i15 = 0;
   _free(i9);
   HEAP32[i8 >> 2] = 0;
   i2 = i3;
   continue;
  }
  if (!(_Internal_Debugger_Resume_Check(0, 0, 0, i9) | 0)) {
   i15 = 22;
   break;
  }
  _free(i9);
  HEAP32[i8 >> 2] = 0;
  i2 = i3;
 }
 if ((i15 | 0) == 10) _log_f(1, 21255, i13); else if ((i15 | 0) == 22) {
  HEAP32[i14 >> 2] = HEAP32[i3 >> 2];
  _log_f(1, 21290, i14);
  i1 = 0;
 } else if ((i15 | 0) == 28) _log_f(1, 21350, i12);
 STACKTOP = i16;
 return i1 | 0;
}

function _Generics_GetMethodDefFromCoreMethod(i2, i3, i4, i5) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = i2 + 68 | 0;
 i7 = i4 << 2;
 i1 = i6;
 while (1) {
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  if (!i1) {
   i8 = 7;
   break;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) == (i4 | 0)) if (!(_memcmp(i1 + 12 | 0, i5, i7) | 0)) {
   i8 = 5;
   break;
  }
  i1 = i1 + 4 | 0;
 }
 if ((i8 | 0) == 5) i1 = HEAP32[i1 >> 2] | 0; else if ((i8 | 0) == 7) {
  i9 = _mallocForever(i7 + 12 | 0) | 0;
  HEAP32[i9 + 4 >> 2] = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
  HEAP8[i6 >> 0] = i9;
  HEAP8[i6 + 1 >> 0] = i9 >> 8;
  HEAP8[i6 + 2 >> 0] = i9 >> 16;
  HEAP8[i6 + 3 >> 0] = i9 >> 24;
  i6 = i9 + 8 | 0;
  HEAP32[i6 >> 2] = i4;
  i8 = i9 + 12 | 0;
  _memcpy(i8 | 0, i5 | 0, i7 | 0) | 0;
  i1 = _callocForever(1, 72) | 0;
  HEAP32[i9 >> 2] = i1;
  HEAP8[i1 >> 0] = i1;
  HEAP8[i1 + 1 >> 0] = i1 >> 8;
  HEAP8[i1 + 2 >> 0] = i1 >> 16;
  HEAP8[i1 + 3 >> 0] = i1 >> 24;
  i5 = i2 + 4 | 0;
  i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
  i7 = i1 + 4 | 0;
  HEAP8[i7 >> 0] = i5;
  HEAP8[i7 + 1 >> 0] = i5 >> 8;
  HEAP8[i7 + 2 >> 0] = i5 >> 16;
  HEAP8[i7 + 3 >> 0] = i5 >> 24;
  i7 = i2 + 8 | 0;
  i7 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
  i5 = i1 + 8 | 0;
  HEAP8[i5 >> 0] = i7;
  HEAP8[i5 + 1 >> 0] = i7 >> 8;
  HEAP8[i5 + 2 >> 0] = i7 >> 16;
  HEAP8[i5 + 3 >> 0] = i7 >> 24;
  i5 = i2 + 12 | 0;
  i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8;
  i7 = i1 + 12 | 0;
  HEAP8[i7 >> 0] = i5;
  HEAP8[i7 + 1 >> 0] = i5 >> 8;
  i7 = i2 + 14 | 0;
  i7 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8;
  i5 = i1 + 14 | 0;
  HEAP8[i5 >> 0] = i7;
  HEAP8[i5 + 1 >> 0] = i7 >> 8;
  i5 = i2 + 16 | 0;
  i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
  i7 = i1 + 16 | 0;
  HEAP8[i7 >> 0] = i5;
  HEAP8[i7 + 1 >> 0] = i5 >> 8;
  HEAP8[i7 + 2 >> 0] = i5 >> 16;
  HEAP8[i7 + 3 >> 0] = i5 >> 24;
  i7 = i2 + 20 | 0;
  i7 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
  i5 = i1 + 20 | 0;
  HEAP8[i5 >> 0] = i7;
  HEAP8[i5 + 1 >> 0] = i7 >> 8;
  HEAP8[i5 + 2 >> 0] = i7 >> 16;
  HEAP8[i5 + 3 >> 0] = i7 >> 24;
  i5 = i2 + 56 | 0;
  i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
  i7 = i1 + 56 | 0;
  HEAP8[i7 >> 0] = i5;
  HEAP8[i7 + 1 >> 0] = i5 >> 8;
  HEAP8[i7 + 2 >> 0] = i5 >> 16;
  HEAP8[i7 + 3 >> 0] = i5 >> 24;
  i6 = HEAP32[i6 >> 2] | 0;
  i7 = i1 + 60 | 0;
  HEAP8[i7 >> 0] = i6;
  HEAP8[i7 + 1 >> 0] = i6 >> 8;
  HEAP8[i7 + 2 >> 0] = i6 >> 16;
  HEAP8[i7 + 3 >> 0] = i6 >> 24;
  i7 = i1 + 64 | 0;
  HEAP8[i7 >> 0] = i8;
  HEAP8[i7 + 1 >> 0] = i8 >> 8;
  HEAP8[i7 + 2 >> 0] = i8 >> 16;
  HEAP8[i7 + 3 >> 0] = i8 >> 24;
  i7 = i3 + 92 | 0;
  _MetaData_Fill_MethodDef(i3, i1, HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, i8);
 }
 return i1 | 0;
}

function _pat_next(i5, i6, i7, i2) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i9;
 L1 : do if (!i6) i8 = 3; else if (!(HEAP8[i5 >> 0] | 0)) i8 = 3; else {
  HEAP32[i7 >> 2] = 1;
  i1 = HEAP8[i5 >> 0] | 0;
  switch (i1 << 24 >> 24) {
  case 42:
   {
    i1 = -5;
    break L1;
   }
  case 92:
   {
    i1 = i5 + 1 | 0;
    if ((i2 & 2 | 0) == 0 & (HEAP8[i1 >> 0] | 0) != 0) {
     HEAP32[i7 >> 2] = 2;
     i2 = i1;
     i3 = 1;
     i1 = HEAP8[i1 >> 0] | 0;
     i8 = 30;
    } else i1 = 92;
    break;
   }
  case 91:
   {
    L8 : do if (i6 >>> 0 > 1) {
     switch (HEAP8[i5 + 1 >> 0] | 0) {
     case 33:
     case 94:
      break;
     default:
      {
       i1 = 1;
       break L8;
      }
     }
     i1 = 2;
    } else i1 = 1; while (0);
    if (i1 >>> 0 < i6 >>> 0) i1 = i1 + ((HEAP8[i5 + i1 >> 0] | 0) == 93 & 1) | 0;
    L15 : do if (i1 >>> 0 < i6 >>> 0) while (1) {
     i3 = HEAP8[i5 + i1 >> 0] | 0;
     switch (i3 << 24 >> 24) {
     case 93:
     case 0:
      {
       i2 = i1;
       i8 = 26;
       break L15;
      }
     default:
      {}
     }
     i2 = i1 + 1 | 0;
     L19 : do if (i2 >>> 0 < i6 >>> 0) {
      i4 = HEAP8[i5 + i2 >> 0] | 0;
      if (i3 << 24 >> 24 == 91 & i4 << 24 >> 24 != 0) {
       switch (i4 << 24 >> 24) {
       case 61:
       case 46:
       case 58:
        break;
       default:
        break L19;
       }
       i2 = i1 + 2 | 0;
       if (i2 >>> 0 < i6 >>> 0) i1 = (HEAP8[i5 + i2 >> 0] | 0) == 0 ? i2 : i1 + 3 | 0; else i1 = i2;
       L26 : do if (i1 >>> 0 < i6 >>> 0) do {
        i2 = HEAP8[i5 + i1 >> 0] | 0;
        if (!(i2 << 24 >> 24)) break L26;
        if (!(i2 << 24 >> 24 != 93 ? 1 : (HEAP8[i5 + (i1 + -1) >> 0] | 0) != i4 << 24 >> 24)) break L26;
        i1 = i1 + 1 | 0;
       } while (i1 >>> 0 < i6 >>> 0); while (0);
       if ((i1 | 0) == (i6 | 0)) {
        i1 = 91;
        i2 = 1;
        break L15;
       }
       if (!(HEAP8[i5 + i1 >> 0] | 0)) {
        i2 = i1;
        i8 = 26;
        break L15;
       }
      }
     } while (0);
     i1 = i1 + 1 | 0;
     if (i1 >>> 0 >= i6 >>> 0) {
      i2 = i1;
      i8 = 26;
      break L15;
     }
    } else {
     i2 = i1;
     i8 = 26;
    } while (0);
    if ((i8 | 0) == 26) if ((i2 | 0) == (i6 | 0)) {
     i1 = 91;
     i2 = 1;
    } else {
     i6 = (HEAP8[i5 + i2 >> 0] | 0) == 0;
     i1 = i6 ? 91 : -3;
     i2 = i6 ? 1 : i2 + 1 | 0;
    }
    HEAP32[i7 >> 2] = i2;
    break L1;
   }
  case 63:
   {
    i1 = -4;
    break L1;
   }
  default:
   {
    i2 = i5;
    i3 = 0;
    i8 = 30;
   }
  }
  if ((i8 | 0) == 30) if (i1 << 24 >> 24 < 0) {
   i1 = _mbtowc(i4, i2, i6) | 0;
   if ((i1 | 0) < 0) {
    HEAP32[i7 >> 2] = 0;
    i1 = -2;
   } else {
    HEAP32[i7 >> 2] = i1 + i3;
    i1 = HEAP32[i4 >> 2] | 0;
   }
   break;
  }
  i1 = i1 << 24 >> 24;
 } while (0);
 if ((i8 | 0) == 3) {
  HEAP32[i7 >> 2] = 0;
  i1 = 0;
 }
 STACKTOP = i9;
 return i1 | 0;
}

function _match_bracket(i1, i7, i8) {
 i1 = i1 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i9 = i12 + 16 | 0;
 i10 = i12;
 i2 = i1 + 1 | 0;
 i3 = HEAP8[i2 >> 0] | 0;
 switch (i3 << 24 >> 24) {
 case 33:
 case 94:
  {
   i3 = i1 + 2 | 0;
   i2 = i3;
   i1 = 1;
   i3 = HEAP8[i3 >> 0] | 0;
   break;
  }
 default:
  i1 = 0;
 }
 L4 : do switch (i3 << 24 >> 24) {
 case 93:
  if ((i7 | 0) == 93) {
   i1 = i1 ^ 1;
   break L4;
  } else {
   i2 = i2 + 1 | 0;
   i11 = 10;
   break L4;
  }
 case 45:
  if ((i7 | 0) == 45) {
   i1 = i1 ^ 1;
   break L4;
  } else {
   i2 = i2 + 1 | 0;
   i11 = 10;
   break L4;
  }
 default:
  i11 = 10;
 } while (0);
 L13 : do if ((i11 | 0) == 10) {
  HEAP32[i9 >> 2] = HEAP8[i2 + -1 >> 0];
  L15 : while (1) {
   i4 = HEAP8[i2 >> 0] | 0;
   L17 : do switch (i4 << 24 >> 24) {
   case 93:
    break L13;
   case 45:
    {
     i3 = i2 + 1 | 0;
     if ((HEAP8[i3 >> 0] | 0) == 93) i11 = 31; else {
      i3 = _mbtowc(i10, i3, 4) | 0;
      if ((i3 | 0) < 0) {
       i1 = 0;
       break L15;
      }
      i4 = HEAP32[i9 >> 2] | 0;
      i5 = HEAP32[i10 >> 2] | 0;
      if ((i5 | 0) >= (i4 | 0)) {
       i6 = i5 - i4 | 0;
       if (!((i7 - i4 | 0) >>> 0 > i6 >>> 0 & (i8 - i4 | 0) >>> 0 > i6 >>> 0)) {
        i11 = 16;
        break L15;
       }
      }
      i2 = i2 + (i3 + -1) | 0;
     }
     break;
    }
   case 91:
    {
     i6 = HEAP8[i2 + 1 >> 0] | 0;
     switch (i6 << 24 >> 24) {
     case 61:
     case 46:
     case 58:
      break;
     default:
      {
       i11 = 31;
       break L17;
      }
     }
     i5 = i2 + 3 | 0;
     while (1) {
      i3 = i5 + -1 | 0;
      if ((HEAP8[i3 >> 0] | 0) == i6 << 24 >> 24) if ((HEAP8[i5 >> 0] | 0) == 93) break;
      i5 = i5 + 1 | 0;
     }
     i4 = i2 + 2 | 0;
     if (i6 << 24 >> 24 == 58) {
      i2 = i3 - i4 | 0;
      if ((i2 | 0) < 16) {
       _memcpy(i10 | 0, i4 | 0, i2 | 0) | 0;
       HEAP8[i10 + i2 >> 0] = 0;
       if (_iswctype(i7, _wctype(i10) | 0) | 0) {
        i11 = 29;
        break L15;
       }
       if (_iswctype(i8, _wctype(i10) | 0) | 0) {
        i11 = 29;
        break L15;
       }
       i2 = i5;
      } else i2 = i5;
     } else i2 = i5;
     break;
    }
   default:
    if (i4 << 24 >> 24 > -1) i11 = 31; else {
     i3 = _mbtowc(i9, i2, 4) | 0;
     if ((i3 | 0) < 0) {
      i1 = 0;
      break L13;
     }
     i2 = i2 + (i3 + -1) | 0;
     i3 = HEAP32[i9 >> 2] | 0;
     i11 = 34;
    }
   } while (0);
   if ((i11 | 0) == 31) {
    i3 = i4 & 255;
    HEAP32[i9 >> 2] = i3;
    i11 = 34;
   }
   if ((i11 | 0) == 34) {
    i11 = 0;
    if ((i3 | 0) == (i7 | 0) | (i3 | 0) == (i8 | 0)) {
     i11 = 35;
     break;
    }
   }
   i2 = i2 + 1 | 0;
  }
  if ((i11 | 0) == 16) i1 = i1 ^ 1; else if ((i11 | 0) == 29) {
   i1 = i1 ^ 1;
   break;
  } else if ((i11 | 0) == 35) {
   i1 = i1 ^ 1;
   break;
  }
 } while (0);
 STACKTOP = i12;
 return i1 | 0;
}

function _MetaData_Fill_MethodDef(i3, i6, i7, i10) {
 i3 = i3 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0, i13 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i11 = i12;
 i9 = i6 + 48 | 0;
 HEAP8[i9 >> 0] = i3;
 HEAP8[i9 + 1 >> 0] = i3 >> 8;
 HEAP8[i9 + 2 >> 0] = i3 >> 16;
 HEAP8[i9 + 3 >> 0] = i3 >> 24;
 HEAP8[i6 >> 0] = i6;
 HEAP8[i6 + 1 >> 0] = i6 >> 8;
 HEAP8[i6 + 2 >> 0] = i6 >> 16;
 HEAP8[i6 + 3 >> 0] = i6 >> 24;
 HEAP8[i6 + 32 >> 0] = 1;
 if (!(HEAP8[i6 + 33 >> 0] | 0)) {
  i9 = i6 + 20 | 0;
  HEAP32[i11 >> 2] = _MetaData_GetBlob(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, 0) | 0;
  if ((_MetaData_DecodeSigEntry(i11) | 0) & 16 | 0) _MetaData_DecodeSigEntry(i11) | 0;
  i9 = _MetaData_DecodeSigEntry(i11) | 0;
  i2 = i6 + 14 | 0;
  i9 = i9 + ((((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8) & 65535) >>> 4 & 1 ^ 1) & 65535) & 65535;
  i8 = i6 + 34 | 0;
  HEAP8[i8 >> 0] = i9;
  HEAP8[i8 + 1 >> 0] = i9 >> 8;
  i9 = i6 + 4 | 0;
  i1 = _Type_GetTypeFromSig(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, i11, i7, i10) | 0;
  i5 = i6 + 44 | 0;
  HEAP8[i5 >> 0] = i1;
  HEAP8[i5 + 1 >> 0] = i1 >> 8;
  HEAP8[i5 + 2 >> 0] = i1 >> 16;
  HEAP8[i5 + 3 >> 0] = i1 >> 24;
  if (i1 | 0) if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i4 = _mallocForever(((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8) & 65535) * 12 | 0) | 0;
  i5 = i6 + 36 | 0;
  HEAP8[i5 >> 0] = i4;
  HEAP8[i5 + 1 >> 0] = i4 >> 8;
  HEAP8[i5 + 2 >> 0] = i4 >> 16;
  HEAP8[i5 + 3 >> 0] = i4 >> 24;
  i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8;
  if (!(i2 & 16)) {
   HEAP32[i4 + 4 >> 2] = 0;
   i1 = (HEAP8[i3 + 34 >> 0] | 0) == 0;
   HEAP32[i4 + 8 >> 2] = 4;
   if (i1) i1 = i3; else i1 = HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   i1 = 4;
  } else i1 = 0;
  i3 = ((i2 & 65535) >>> 4 & 1 ^ 1) & 65535;
  while (1) {
   if (i3 >>> 0 >= ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8) & 65535) >>> 0) break;
   i2 = _Type_GetTypeFromSig(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, i11, i7, i10) | 0;
   if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
   i4 = i2 + 68 | 0;
   i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
   i13 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
   HEAP32[i13 + (i3 * 12 | 0) >> 2] = i2;
   HEAP32[i13 + (i3 * 12 | 0) + 4 >> 2] = i1;
   HEAP32[i13 + (i3 * 12 | 0) + 8 >> 2] = i4;
   i3 = i3 + 1 | 0;
   i1 = i4 + i1 | 0;
  }
  i13 = i6 + 40 | 0;
  HEAP8[i13 >> 0] = i1;
  HEAP8[i13 + 1 >> 0] = i1 >> 8;
  HEAP8[i13 + 2 >> 0] = i1 >> 16;
  HEAP8[i13 + 3 >> 0] = i1 >> 24;
 }
 STACKTOP = i12;
 return;
}

function _fcntl(i15, i2, i1) {
 i15 = i15 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0, i18 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(192);
 i7 = i17 + 152 | 0;
 i6 = i17 + 136 | 0;
 i16 = i17 + 120 | 0;
 i14 = i17 + 104 | 0;
 i13 = i17 + 96 | 0;
 i10 = i17 + 80 | 0;
 i9 = i17 + 64 | 0;
 i4 = i17 + 48 | 0;
 i11 = i17 + 32 | 0;
 i5 = i17 + 16 | 0;
 i3 = i17;
 i18 = i17 + 176 | 0;
 i8 = i17 + 168 | 0;
 HEAP32[i18 >> 2] = i1;
 i1 = (HEAP32[i18 >> 2] | 0) + (4 - 1) & ~(4 - 1);
 i12 = HEAP32[i1 >> 2] | 0;
 HEAP32[i18 >> 2] = i1 + 4;
 i12 = (i2 | 0) == 4 ? i12 | 32768 : i12;
 switch (i2 | 0) {
 case 14:
  {
   HEAP32[i3 >> 2] = i15;
   HEAP32[i3 + 4 >> 2] = 14;
   HEAP32[i3 + 8 >> 2] = i12;
   i1 = ___syscall_ret(___syscall221(221, i3 | 0) | 0) | 0;
   break;
  }
 case 9:
  {
   HEAP32[i5 >> 2] = i15;
   HEAP32[i5 + 4 >> 2] = 16;
   HEAP32[i5 + 8 >> 2] = i8;
   i1 = ___syscall221(221, i5 | 0) | 0;
   switch (i1 | 0) {
   case -22:
    {
     HEAP32[i11 >> 2] = i15;
     HEAP32[i11 + 4 >> 2] = 9;
     HEAP32[i11 + 8 >> 2] = i12;
     i1 = ___syscall221(221, i11 | 0) | 0;
     break;
    }
   case 0:
    {
     i1 = HEAP32[i8 + 4 >> 2] | 0;
     i1 = (HEAP32[i8 >> 2] | 0) == 2 ? 0 - i1 | 0 : i1;
     break;
    }
   default:
    i1 = ___syscall_ret(i1) | 0;
   }
   break;
  }
 case 1030:
  {
   HEAP32[i4 >> 2] = i15;
   HEAP32[i4 + 4 >> 2] = 1030;
   HEAP32[i4 + 8 >> 2] = i12;
   i1 = ___syscall221(221, i4 | 0) | 0;
   do if ((i1 | 0) == -22) {
    HEAP32[i10 >> 2] = i15;
    HEAP32[i10 + 4 >> 2] = 1030;
    HEAP32[i10 + 8 >> 2] = 0;
    i1 = ___syscall221(221, i10 | 0) | 0;
    if ((i1 | 0) == -22) {
     HEAP32[i14 >> 2] = i15;
     HEAP32[i14 + 4 >> 2] = 0;
     HEAP32[i14 + 8 >> 2] = i12;
     i1 = ___syscall221(221, i14 | 0) | 0;
     if ((i1 | 0) <= -1) break;
     HEAP32[i16 >> 2] = i1;
     HEAP32[i16 + 4 >> 2] = 2;
     HEAP32[i16 + 8 >> 2] = 1;
     ___syscall221(221, i16 | 0) | 0;
     break;
    } else {
     if ((i1 | 0) <= -1) {
      i1 = -22;
      break;
     }
     HEAP32[i13 >> 2] = i1;
     ___syscall6(6, i13 | 0) | 0;
     i1 = -22;
     break;
    }
   } else if ((i1 | 0) > -1) {
    HEAP32[i9 >> 2] = i1;
    HEAP32[i9 + 4 >> 2] = 2;
    HEAP32[i9 + 8 >> 2] = 1;
    ___syscall221(221, i9 | 0) | 0;
   } while (0);
   i1 = ___syscall_ret(i1) | 0;
   break;
  }
 case 15:
 case 16:
 case 12:
 case 13:
  {
   HEAP32[i6 >> 2] = i15;
   HEAP32[i6 + 4 >> 2] = i2;
   HEAP32[i6 + 8 >> 2] = i12;
   i1 = ___syscall_ret(___syscall221(221, i6 | 0) | 0) | 0;
   break;
  }
 default:
  {
   HEAP32[i7 >> 2] = i15;
   HEAP32[i7 + 4 >> 2] = i2;
   HEAP32[i7 + 8 >> 2] = i12;
   i1 = ___syscall_ret(___syscall221(221, i7 | 0) | 0) | 0;
  }
 }
 STACKTOP = i17;
 return i1 | 0;
}

function _glob(i6, i12, i4, i13) {
 i6 = i6 | 0;
 i12 = i12 | 0;
 i4 = i4 | 0;
 i13 = i13 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i11 = i14;
 i7 = i14 + 8 | 0;
 i9 = i11;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i7 >> 2] = i11;
 if (!(i12 & 8)) i5 = 0; else i5 = HEAP32[i13 + 8 >> 2] | 0;
 i2 = HEAP8[i6 >> 0] | 0;
 if (i2 << 24 >> 24 == 47) {
  i1 = i6;
  do {
   i1 = i1 + 1 | 0;
   i2 = HEAP8[i1 >> 0] | 0;
  } while (i2 << 24 >> 24 == 47);
  i3 = 31381;
 } else {
  i3 = 41949;
  i1 = i6;
 }
 L8 : do if ((_strlen(i1) | 0) >>> 0 > 4096) i1 = 1; else {
  i9 = (i12 & 32 | 0) != 0;
  if (!i9) {
   HEAP32[i13 + 8 >> 2] = i5;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   i2 = HEAP8[i1 >> 0] | 0;
  }
  if (!(i2 << 24 >> 24)) {
   HEAP32[i7 >> 2] = 0;
   i1 = 0;
   i2 = i11;
   i3 = i7;
   i10 = 15;
  } else {
   i1 = _match_in_dir(i3, i1, i12, (i4 | 0) == 0 ? 21 : i4, i7) | 0;
   if ((i1 | 0) == 1) {
    _freelist(i11);
    i1 = 1;
    break;
   }
   i2 = HEAP32[i11 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   if (!i2) {
    i2 = i11;
    i3 = i7;
    i10 = 15;
   } else {
    i3 = 0;
    do {
     i2 = HEAP32[i2 >> 2] | 0;
     HEAP32[i7 >> 2] = i2;
     i3 = i3 + 1 | 0;
    } while ((i2 | 0) != 0);
    if (!i3) {
     i2 = i11;
     i3 = i7;
     i10 = 15;
    } else {
     i8 = i3;
     i6 = i11;
    }
   }
  }
  if ((i10 | 0) == 15) {
   if (!(i12 & 16)) {
    i1 = 3;
    break;
   }
   HEAP32[i7 >> 2] = i11;
   if (!(_append(i7, i6, _strlen(i6) | 0, 0) | 0)) {
    i8 = 1;
    i6 = i2;
    i7 = i3;
   } else {
    i1 = 1;
    break;
   }
  }
  do if (i9) {
   i2 = i13 + 4 | 0;
   i3 = HEAP32[i13 >> 2] | 0;
   i4 = _realloc(HEAP32[i2 >> 2] | 0, (i8 + i5 + i3 << 2) + 4 | 0) | 0;
   if (!i4) {
    _freelist(i11);
    i1 = 1;
    break L8;
   } else {
    HEAP32[i2 >> 2] = i4;
    i5 = i3 + i5 | 0;
    break;
   }
  } else {
   i2 = _malloc((i8 + i5 << 2) + 4 | 0) | 0;
   HEAP32[i13 + 4 >> 2] = i2;
   if (!i2) {
    _freelist(i11);
    i1 = 1;
    break L8;
   }
   if (!i5) {
    i5 = 0;
    i4 = i2;
   } else {
    _memset(i2 | 0, 0, i5 << 2 | 0) | 0;
    i4 = i2;
   }
  } while (0);
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i7 >> 2] = i3;
  i2 = 0;
  do {
   HEAP32[i4 + (i2 + i5 << 2) >> 2] = i3 + 4;
   i3 = HEAP32[i3 >> 2] | 0;
   HEAP32[i7 >> 2] = i3;
   i2 = i2 + 1 | 0;
  } while (i2 >>> 0 < i8 >>> 0);
  HEAP32[i4 + (i8 + i5 << 2) >> 2] = 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i8;
  if (!(i12 & 4)) _qsort(i4 + (i5 << 2) | 0, i8, 4, 22);
 } while (0);
 STACKTOP = i14;
 return i1 | 0;
}

function _System_ValueType_GetFields(i1, i2, i15) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i15 = i15 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i12 = i14;
 i13 = HEAP32[i2 >> 2] | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 i9 = _Heap_GetType(i13) | 0;
 i11 = i9 + 100 | 0;
 i3 = HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24;
 i9 = i9 + 104 | 0;
 i1 = 0;
 i2 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  i8 = (HEAP32[(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0) + 8 | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + ((((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8) & 65535) >>> 4 & 1 ^ 1) & 65535) | 0;
 }
 i7 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 64 >> 2] | 0, i2 << ((i10 | 0) != 0 & 1)) | 0;
 i8 = (i10 | 0) == 0;
 i1 = 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= (HEAPU8[i11 >> 0] | HEAPU8[i11 + 1 >> 0] << 8 | HEAPU8[i11 + 2 >> 0] << 16 | HEAPU8[i11 + 3 >> 0] << 24) >>> 0) break;
  i2 = HEAP32[(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24) + (i6 << 2) >> 2] | 0;
  i5 = i2 + 8 | 0;
  do if (!((HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8) & 16)) {
   i5 = i2 + 20 | 0;
   i3 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
   if (!(HEAP8[i3 + 34 >> 0] | 0)) {
    i3 = i1 + 1 | 0;
    i2 = i2 + 28 | 0;
    _SystemArray_StoreElement(i7, i1, i13 + (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0);
    if (i8) {
     i1 = i3;
     break;
    }
    _SystemArray_StoreElement(i7, i3, i10 + (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0);
    i1 = i1 + 2 | 0;
    break;
   }
   i4 = i2 + 28 | 0;
   HEAP32[i12 >> 2] = _Heap_Box(i3, i13 + (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) | 0) | 0;
   i2 = i1 + 1 | 0;
   _SystemArray_StoreElement(i7, i1, i12);
   if (i8) i1 = i2; else {
    HEAP32[i12 >> 2] = _Heap_Box(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24, i10 + (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) | 0) | 0;
    _SystemArray_StoreElement(i7, i2, i12);
    i1 = i1 + 2 | 0;
   }
  } while (0);
  i6 = i6 + 1 | 0;
 }
 HEAP32[i15 >> 2] = i7;
 STACKTOP = i14;
 return 0;
}

function _Type_GetTypeFromSig(i2, i3, i6, i7) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i9;
 i4 = _MetaData_DecodeSigEntry(i3) | 0;
 do switch (i4 | 0) {
 case 1:
  {
   i1 = 0;
   break;
  }
 case 2:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 12 >> 2] | 0;
   break;
  }
 case 3:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 24 >> 2] | 0;
   break;
  }
 case 4:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 20 >> 2] | 0;
   break;
  }
 case 5:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 16 >> 2] | 0;
   break;
  }
 case 6:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 28 >> 2] | 0;
   break;
  }
 case 7:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 56 >> 2] | 0;
   break;
  }
 case 8:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 32 >> 2] | 0;
   break;
  }
 case 10:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 96 >> 2] | 0;
   break;
  }
 case 11:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 100 >> 2] | 0;
   break;
  }
 case 9:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 52 >> 2] | 0;
   break;
  }
 case 12:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 88 >> 2] | 0;
   break;
  }
 case 13:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 92 >> 2] | 0;
   break;
  }
 case 14:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 36 >> 2] | 0;
   break;
  }
 case 15:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 180 >> 2] | 0;
   break;
  }
 case 16:
  {
   _Type_GetTypeFromSig(i2, i3, i6, i7) | 0;
   i8 = 17;
   break;
  }
 case 24:
  {
   i8 = 17;
   break;
  }
 case 18:
 case 17:
  {
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i2, _MetaData_DecodeSigEntryToken(i3) | 0, i6, i7) | 0;
   break;
  }
 case 19:
  {
   i1 = _MetaData_DecodeSigEntry(i3) | 0;
   if (!i6) i1 = 0; else i1 = HEAP32[i6 + (i1 << 2) >> 2] | 0;
   break;
  }
 case 21:
  {
   i1 = _Generics_GetGenericTypeFromSig(i2, i3, i6, i7) | 0;
   break;
  }
 case 25:
  {
   i1 = HEAP32[(HEAP32[8003] | 0) + 180 >> 2] | 0;
   break;
  }
 case 28:
  {
   i1 = HEAP32[HEAP32[8003] >> 2] | 0;
   break;
  }
 case 29:
  {
   i8 = _Type_GetArrayTypeDef(_Type_GetTypeFromSig(i2, i3, i6, i7) | 0, 0, 0) | 0;
   STACKTOP = i9;
   return i8 | 0;
  }
 case 30:
  {
   i1 = _MetaData_DecodeSigEntry(i3) | 0;
   if (!i7) i1 = 0; else i1 = HEAP32[i7 + (i1 << 2) >> 2] | 0;
   break;
  }
 default:
  {
   HEAP32[i5 >> 2] = i4;
   _Crash(21712, i5);
  }
 } while (0);
 if ((i8 | 0) == 17) i1 = HEAP32[(HEAP32[8003] | 0) + 40 >> 2] | 0;
 STACKTOP = i9;
 return i1 | 0;
}

function _pop_arg_689(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = 0.0;
 L1 : do if (i2 >>> 0 <= 20) do switch (i2 | 0) {
 case 9:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   HEAP32[i1 >> 2] = i2;
   break L1;
  }
 case 10:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   i4 = i1;
   HEAP32[i4 >> 2] = i2;
   HEAP32[i4 + 4 >> 2] = ((i2 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 11:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   i4 = i1;
   HEAP32[i4 >> 2] = i2;
   HEAP32[i4 + 4 >> 2] = 0;
   break L1;
  }
 case 12:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   i2 = i4;
   i5 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 8;
   i4 = i1;
   HEAP32[i4 >> 2] = i5;
   HEAP32[i4 + 4 >> 2] = i2;
   break L1;
  }
 case 13:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i4 = (i4 & 65535) << 16 >> 16;
   i5 = i1;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 14:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i5 = i1;
   HEAP32[i5 >> 2] = i4 & 65535;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 15:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i4 = (i4 & 255) << 24 >> 24;
   i5 = i1;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 16:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i5 = i1;
   HEAP32[i5 >> 2] = i4 & 255;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 17:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i3 >> 2] = i5 + 8;
   HEAPF64[i1 >> 3] = d6;
   break L1;
  }
 case 18:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i3 >> 2] = i5 + 8;
   HEAPF64[i1 >> 3] = d6;
   break L1;
  }
 default:
  break L1;
 } while (0); while (0);
 return;
}

function _pop_arg(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = 0.0;
 L1 : do if (i2 >>> 0 <= 20) do switch (i2 | 0) {
 case 9:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   HEAP32[i1 >> 2] = i2;
   break L1;
  }
 case 10:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   i4 = i1;
   HEAP32[i4 >> 2] = i2;
   HEAP32[i4 + 4 >> 2] = ((i2 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 11:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   i4 = i1;
   HEAP32[i4 >> 2] = i2;
   HEAP32[i4 + 4 >> 2] = 0;
   break L1;
  }
 case 12:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   i2 = i4;
   i5 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 8;
   i4 = i1;
   HEAP32[i4 >> 2] = i5;
   HEAP32[i4 + 4 >> 2] = i2;
   break L1;
  }
 case 13:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i4 = (i4 & 65535) << 16 >> 16;
   i5 = i1;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 14:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i5 = i1;
   HEAP32[i5 >> 2] = i4 & 65535;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 15:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i4 = (i4 & 255) << 24 >> 24;
   i5 = i1;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 16:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i5 = i1;
   HEAP32[i5 >> 2] = i4 & 255;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 17:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i3 >> 2] = i5 + 8;
   HEAPF64[i1 >> 3] = d6;
   break L1;
  }
 case 18:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i3 >> 2] = i5 + 8;
   HEAPF64[i1 >> 3] = d6;
   break L1;
  }
 default:
  break L1;
 } while (0); while (0);
 return;
}

function _InternalCall_Map(i6) {
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i9;
 i7 = i6 + 48 | 0;
 i5 = (HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + 40 | 0;
 L1 : do if ((HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 80 >> 2] | 0)) {
  i1 = _Map_Delegate(i6) | 0;
  if (!i1) i2 = 10; else i2 = 11;
 } else {
  i2 = 0;
  i1 = 0;
  i4 = 1096;
  while (1) {
   i5 = HEAP32[i4 + 8 >> 2] | 0;
   if (!i5) {
    i2 = 10;
    break L1;
   }
   i3 = HEAP32[i4 >> 2] | 0;
   i1 = (i3 | 0) == 0 ? i1 : i3;
   i3 = HEAP32[i4 + 4 >> 2] | 0;
   i2 = (i3 | 0) == 0 ? i2 : i3;
   if ((i1 | 0) != 0 & (i2 | 0) != 0) {
    i3 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
    i10 = i3 + 16 | 0;
    if (!(_strcmp(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24, i1) | 0)) {
     i10 = i3 + 12 | 0;
     if (!(_strcmp(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24, i2) | 0)) if (_Type_IsMethod(i6, i5, HEAP32[(HEAP32[8003] | 0) + ((HEAPU8[i4 + 16 >> 0] | 0) << 2) >> 2] | 0, HEAPU8[i4 + 17 >> 0] | 0, i4 + 18 | 0) | 0) break;
    }
   }
   i4 = i4 + 24 | 0;
  }
  i1 = HEAP32[i4 + 12 >> 2] | 0;
  i2 = 11;
 } while (0);
 if ((i2 | 0) == 10) {
  i9 = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
  i7 = i9 + 16 | 0;
  i9 = i9 + 12 | 0;
  i9 = HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24;
  i10 = i6 + 16 | 0;
  i10 = HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24;
  HEAP32[i8 >> 2] = HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24;
  HEAP32[i8 + 4 >> 2] = i9;
  HEAP32[i8 + 8 >> 2] = i10;
  _Crash(13548, i8);
 } else if ((i2 | 0) == 11) {
  STACKTOP = i9;
  return i1 | 0;
 }
 return 0;
}

function _scanexp(i5, i3) {
 i5 = i5 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i6 = 0, i7 = 0;
 i6 = i5 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = i5 + 100 | 0;
 if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
  HEAP32[i6 >> 2] = i1 + 1;
  i1 = HEAPU8[i1 >> 0] | 0;
 } else i1 = ___shgetc(i5) | 0;
 switch (i1 | 0) {
 case 43:
 case 45:
  {
   i2 = (i1 | 0) == 45 & 1;
   i1 = HEAP32[i6 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
    HEAP32[i6 >> 2] = i1 + 1;
    i1 = HEAPU8[i1 >> 0] | 0;
   } else i1 = ___shgetc(i5) | 0;
   if ((i3 | 0) != 0 & (i1 + -48 | 0) >>> 0 > 9) if (HEAP32[i7 >> 2] | 0) HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + -1;
   break;
  }
 default:
  i2 = 0;
 }
 if ((i1 + -48 | 0) >>> 0 > 9) if (!(HEAP32[i7 >> 2] | 0)) {
  i2 = -2147483648;
  i1 = 0;
 } else {
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + -1;
  i2 = -2147483648;
  i1 = 0;
 } else {
  i4 = 0;
  do {
   i4 = i1 + -48 + (i4 * 10 | 0) | 0;
   i1 = HEAP32[i6 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
    HEAP32[i6 >> 2] = i1 + 1;
    i1 = HEAPU8[i1 >> 0] | 0;
   } else i1 = ___shgetc(i5) | 0;
  } while ((i1 + -48 | 0) >>> 0 < 10 & (i4 | 0) < 214748364);
  i3 = ((i4 | 0) < 0) << 31 >> 31;
  if ((i1 + -48 | 0) >>> 0 < 10) do {
   i3 = ___muldi3(i4 | 0, i3 | 0, 10, 0) | 0;
   i4 = tempRet0;
   i1 = _i64Add(i1 | 0, ((i1 | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
   i4 = _i64Add(i1 | 0, tempRet0 | 0, i3 | 0, i4 | 0) | 0;
   i3 = tempRet0;
   i1 = HEAP32[i6 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
    HEAP32[i6 >> 2] = i1 + 1;
    i1 = HEAPU8[i1 >> 0] | 0;
   } else i1 = ___shgetc(i5) | 0;
  } while ((i1 + -48 | 0) >>> 0 < 10 & ((i3 | 0) < 21474836 | (i3 | 0) == 21474836 & i4 >>> 0 < 2061584302));
  if ((i1 + -48 | 0) >>> 0 < 10) do {
   i1 = HEAP32[i6 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
    HEAP32[i6 >> 2] = i1 + 1;
    i1 = HEAPU8[i1 >> 0] | 0;
   } else i1 = ___shgetc(i5) | 0;
  } while ((i1 + -48 | 0) >>> 0 < 10);
  if (HEAP32[i7 >> 2] | 0) HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + -1;
  i7 = (i2 | 0) != 0;
  i1 = _i64Subtract(0, 0, i4 | 0, i3 | 0) | 0;
  i2 = i7 ? tempRet0 : i3;
  i1 = i7 ? i1 : i4;
 }
 tempRet0 = i2;
 return i1 | 0;
}

function _qsort(i2, i1, i7, i8) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(208);
 i9 = i11 + 8 | 0;
 i10 = i11;
 i5 = Math_imul(i7, i1) | 0;
 i6 = i10;
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = 0;
 L1 : do if (i5 | 0) {
  i6 = 0 - i7 | 0;
  HEAP32[i9 + 4 >> 2] = i7;
  HEAP32[i9 >> 2] = i7;
  i3 = 2;
  i1 = i7;
  i4 = i7;
  while (1) {
   i1 = i1 + i7 + i4 | 0;
   HEAP32[i9 + (i3 << 2) >> 2] = i1;
   if (i1 >>> 0 < i5 >>> 0) {
    i12 = i4;
    i3 = i3 + 1 | 0;
    i4 = i1;
    i1 = i12;
   } else break;
  }
  i4 = i2 + i5 + i6 | 0;
  if (i4 >>> 0 > i2 >>> 0) {
   i5 = i4;
   i3 = 1;
   i1 = 1;
   do {
    do if ((i1 & 3 | 0) == 3) {
     _sift(i2, i7, i8, i3, i9);
     _shr(i10, 2);
     i3 = i3 + 2 | 0;
    } else {
     i1 = i3 + -1 | 0;
     if ((HEAP32[i9 + (i1 << 2) >> 2] | 0) >>> 0 < (i5 - i2 | 0) >>> 0) _sift(i2, i7, i8, i3, i9); else _trinkle(i2, i7, i8, i10, i3, 0, i9);
     if ((i3 | 0) == 1) {
      _shl(i10, 1);
      i3 = 0;
      break;
     } else {
      _shl(i10, i1);
      i3 = 1;
      break;
     }
    } while (0);
    i1 = HEAP32[i10 >> 2] | 1;
    HEAP32[i10 >> 2] = i1;
    i2 = i2 + i7 | 0;
   } while (i2 >>> 0 < i4 >>> 0);
  } else {
   i3 = 1;
   i1 = 1;
  }
  _trinkle(i2, i7, i8, i10, i3, 0, i9);
  i4 = i10 + 4 | 0;
  while (1) {
   if ((i3 | 0) == 1 & (i1 | 0) == 1) {
    if (!(HEAP32[i4 >> 2] | 0)) break L1;
   } else if ((i3 | 0) >= 2) {
    _shl(i10, 2);
    i12 = i3 + -2 | 0;
    HEAP32[i10 >> 2] = HEAP32[i10 >> 2] ^ 7;
    _shr(i10, 1);
    _trinkle(i2 + (0 - (HEAP32[i9 + (i12 << 2) >> 2] | 0)) + i6 | 0, i7, i8, i10, i3 + -1 | 0, 1, i9);
    _shl(i10, 1);
    i1 = HEAP32[i10 >> 2] | 1;
    HEAP32[i10 >> 2] = i1;
    i5 = i2 + i6 | 0;
    _trinkle(i5, i7, i8, i10, i12, 1, i9);
    i2 = i5;
    i3 = i12;
    continue;
   }
   i1 = _pntz(i10) | 0;
   _shr(i10, i1);
   i2 = i2 + i6 | 0;
   i3 = i1 + i3 | 0;
   i1 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 STACKTOP = i11;
 return;
}

function _LoadDebugFile(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i9 = i15 + 16 | 0;
 i10 = i15 + 12 | 0;
 i11 = i15 + 8 | 0;
 i12 = i15 + 4 | 0;
 i13 = i15;
 i14 = _malloc(4) | 0;
 i5 = 0;
 i6 = 0;
 while (1) {
  if (!(HEAP8[i1 >> 0] | 0)) break;
  i8 = _malloc(428) | 0;
  i7 = i8 + 20 | 0;
  HEAP32[i7 >> 2] = 0;
  _GetNullTerminatedString(i1, i9) | 0;
  HEAP32[i8 >> 2] = i1;
  i19 = HEAP32[i9 >> 2] | 0;
  i1 = i1 + i19 | 0;
  i20 = i8 + 4 | 0;
  HEAP32[i20 >> 2] = _GetNullTerminatedString(i1, i10) | 0;
  i16 = HEAP32[i10 >> 2] | 0;
  i1 = i1 + i16 | 0;
  i18 = i8 + 8 | 0;
  HEAP32[i18 >> 2] = _GetNullTerminatedString(i1, i11) | 0;
  i2 = HEAP32[i11 >> 2] | 0;
  i1 = i1 + i2 | 0;
  i3 = i8 + 12 | 0;
  HEAP32[i3 >> 2] = _GetNullTerminatedString(i1, i12) | 0;
  i4 = HEAP32[i12 >> 2] | 0;
  i1 = i1 + i4 | 0;
  i22 = _mallocForever(i19 + 1 + i16 + i2 + i4 | 0) | 0;
  i17 = i8 + 16 | 0;
  HEAP32[i17 >> 2] = i22;
  i21 = i19 + -1 | 0;
  _strncpy(i22, HEAP32[i8 >> 2] | 0, i21) | 0;
  _strncpy((HEAP32[i17 >> 2] | 0) + i21 | 0, HEAP32[i20 >> 2] | 0, i16 + -1 | 0) | 0;
  i16 = i19 + -2 + i16 | 0;
  _strncpy((HEAP32[i17 >> 2] | 0) + i16 | 0, HEAP32[i18 >> 2] | 0, i2 + -1 | 0) | 0;
  _strncpy((HEAP32[i17 >> 2] | 0) + (i16 + -1 + i2) | 0, HEAP32[i3 >> 2] | 0, i4) | 0;
  i4 = _GetU32(i1, i13) | 0;
  HEAP32[i7 >> 2] = i4;
  i3 = i8 + 24 | 0;
  i2 = 0;
  i1 = i1 + (HEAP32[i13 >> 2] | 0) | 0;
  while (1) {
   if ((i2 | 0) >= (i4 | 0)) break;
   HEAP32[i3 + (i2 << 2) >> 2] = _GetU32(i1, i13) | 0;
   i2 = i2 + 1 | 0;
   i1 = i1 + (HEAP32[i13 >> 2] | 0) | 0;
   i4 = HEAP32[i7 >> 2] | 0;
  }
  if (i5 | 0) HEAP32[i5 + 424 >> 2] = i8;
  i5 = i8;
  i6 = (i6 | 0) == 0 ? i8 : i6;
 }
 if (i5 | 0) HEAP32[i5 + 424 >> 2] = 0;
 HEAP32[i14 >> 2] = i6;
 STACKTOP = i15;
 return i14 | 0;
}

function _MetaData_LoadTables(i11, i12, i9, i1) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 i9 = i9 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i13 = i14;
 i10 = i14 + 4 | 0;
 i5 = HEAPU8[i9 + 6 >> 0] | 0;
 HEAP8[i11 + 424 >> 0] = i5 & 1;
 HEAP8[i11 + 426 >> 0] = i5 >>> 1 & 1;
 HEAP8[i11 + 425 >> 0] = i5 >>> 2 & 1;
 i5 = i9 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i5 + 4 >> 2] | 0;
 i2 = 0;
 i8 = 0;
 i6 = 1;
 i7 = 0;
 while (1) {
  if ((i2 | 0) == 48) {
   i4 = 0;
   break;
  }
  if ((i6 & i4 | 0) == 0 & (i7 & i5 | 0) == 0) {
   HEAP32[i11 + 216 + (i2 << 2) >> 2] = 0;
   i3 = i8;
   i1 = 0;
  } else {
   i3 = i8 + 1 | 0;
   i1 = HEAP32[i9 + ((i8 << 2) + 24) >> 2] | 0;
  }
  HEAP32[i11 + 24 + (i2 << 2) >> 2] = i1;
  i1 = _bitshift64Shl(i6 | 0, i7 | 0, 1) | 0;
  i2 = i2 + 1 | 0;
  i8 = i3;
  i6 = i1;
  i7 = tempRet0;
 }
 while (1) {
  if ((i4 | 0) == 13) break;
  i5 = HEAP32[4216 + (i4 << 2) >> 2] | 0;
  i6 = HEAPU8[16505 + i4 >> 0] | 0;
  i7 = 1 << i6;
  i1 = 0;
  i3 = 0;
  while (1) {
   if ((i3 | 0) >= (i7 | 0)) break;
   i2 = HEAP8[i5 + i3 >> 0] | 0;
   if (i2 << 24 >> 24 != 122) {
    i2 = HEAP32[i11 + 24 + ((i2 & 255) << 2) >> 2] | 0;
    i1 = i2 >>> 0 > i1 >>> 0 ? i2 : i1;
   }
   i3 = i3 + 1 | 0;
  }
  HEAP8[i11 + 408 + i4 >> 0] = i1 >>> 0 >= 1 << 16 - i6 >>> 0 & 1;
  i4 = i4 + 1 | 0;
 }
 HEAP32[i10 >> 2] = i9 + ((i8 << 2) + 24);
 i2 = 0;
 while (1) {
  if ((i2 | 0) >= 48) {
   i1 = 22;
   break;
  }
  if (HEAP32[i11 + 24 + (i2 << 2) >> 2] | 0) {
   if (i2 << 2 >>> 0 > 179) {
    i1 = 19;
    break;
   }
   if (!(HEAP32[4268 + (i2 << 2) >> 2] | 0)) {
    i1 = 19;
    break;
   }
   HEAP32[i11 + 216 + (i2 << 2) >> 2] = _LoadSingleTable(i11, i12, i2, i10) | 0;
  }
  i2 = i2 + 1 | 0;
 }
 if ((i1 | 0) == 19) {
  HEAP32[i13 >> 2] = i2;
  _printf(16518, i13) | 0;
  _exit(1);
 } else if ((i1 | 0) == 22) {
  STACKTOP = i14;
  return;
 }
}

function _Type_Init() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i7;
 HEAP32[8018] = 57;
 HEAP32[8003] = _mallocForever(228) | 0;
 i2 = 0;
 while (1) {
  i1 = HEAP32[8018] | 0;
  if (i2 >>> 0 >= i1 >>> 0) {
   i6 = 0;
   i3 = i1;
   break;
  }
  if ((i2 | 0) != (HEAPU8[4612 + (i2 * 20 | 0) + 16 >> 0] | 0)) {
   i5 = 4;
   break;
  }
  i1 = HEAP32[4612 + (i2 * 20 | 0) >> 2] | 0;
  if (i1 | 0) {
   i1 = _MetaData_GetTypeDefFromFullName(i1, HEAP32[4612 + (i2 * 20 | 0) + 4 >> 2] | 0, HEAP32[4612 + (i2 * 20 | 0) + 8 >> 2] | 0) | 0;
   HEAP32[(HEAP32[8003] | 0) + (i2 << 2) >> 2] = i1;
   i1 = HEAP32[(HEAP32[8003] | 0) + (i2 << 2) >> 2] | 0;
   HEAP8[i1 + 35 >> 0] = HEAP8[4612 + (i2 * 20 | 0) + 12 >> 0] | 0;
   i8 = HEAPU8[4612 + (i2 * 20 | 0) + 13 >> 0] | 0;
   i9 = i1 + 68 | 0;
   HEAP8[i9 >> 0] = i8;
   HEAP8[i9 + 1 >> 0] = i8 >> 8;
   HEAP8[i9 + 2 >> 0] = i8 >> 16;
   HEAP8[i9 + 3 >> 0] = i8 >> 24;
   i9 = HEAPU8[4612 + (i2 * 20 | 0) + 14 >> 0] | 0;
   i8 = i1 + 64 | 0;
   HEAP8[i8 >> 0] = i9;
   HEAP8[i8 + 1 >> 0] = i9 >> 8;
   HEAP8[i8 + 2 >> 0] = i9 >> 16;
   HEAP8[i8 + 3 >> 0] = i9 >> 24;
   i8 = HEAPU8[4612 + (i2 * 20 | 0) + 15 >> 0] | 0;
   i1 = i1 + 36 | 0;
   HEAP8[i1 >> 0] = i8;
   HEAP8[i1 + 1 >> 0] = i8 >> 8;
   HEAP8[i1 + 2 >> 0] = i8 >> 16;
   HEAP8[i1 + 3 >> 0] = i8 >> 24;
  }
  i2 = i2 + 1 | 0;
 }
 if ((i5 | 0) == 4) _Crash(21780, i4);
 while (1) {
  if (i6 >>> 0 >= i3 >>> 0) break;
  i1 = HEAP32[8003] | 0;
  if (!(HEAP32[4612 + (i6 * 20 | 0) >> 2] | 0)) {
   i9 = _Type_GetArrayTypeDef(HEAP32[i1 + (HEAP32[4612 + (i6 * 20 | 0) + 8 >> 2] << 2) >> 2] | 0, 0, 0) | 0;
   HEAP32[(HEAP32[8003] | 0) + (i6 << 2) >> 2] = i9;
  } else {
   i1 = HEAP32[i1 + (i6 << 2) >> 2] | 0;
   if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  }
  i6 = i6 + 1 | 0;
  i3 = HEAP32[8018] | 0;
 }
 STACKTOP = i7;
 return;
}

function _MethodState_Direct(i5, i7, i1, i8, i4) {
 i5 = i5 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i6 = 0, i9 = 0, i10 = 0;
 if (!(HEAP8[i7 + 32 >> 0] | 0)) {
  i2 = _MetaData_GetTypeDefFromMethodDef(i7) | 0;
  if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
 }
 i6 = i7 + 28 | 0;
 i2 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 if (!i2) {
  _JIT_Prepare(i7, 0);
  i2 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 }
 i3 = i7 + 40 | 0;
 i3 = (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i2 + 12 >> 2] | 0) | 0;
 do if (!i4) i9 = 12; else {
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i7 | 0)) {
   i10 = i2 + 44 | 0;
   i4 = i7 + 44 | 0;
   if ((HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24 | 0) != (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24 | 0)) {
    i9 = 12;
    break;
   }
   i10 = i2 + 28 | 0;
   if (HEAP32[(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24) + 16 >> 2] | 0) {
    i9 = 12;
    break;
   }
   if (HEAP32[i1 + 24 >> 2] | 0) {
    i9 = 12;
    break;
   }
  }
  _Thread_StackReAlloc(i5, i1, i3 + 44 | 0);
 } while (0);
 if ((i9 | 0) == 12) {
  i10 = _Thread_StackAlloc(i5, i3 + 44 | 0) | 0;
  HEAP32[i10 + 36 >> 2] = i1;
  i1 = i10;
 }
 HEAP32[i1 >> 2] = i7;
 HEAP32[i1 + 4 >> 2] = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i8;
 i10 = i1 + 20 | 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP32[i10 + 12 >> 2] = 0;
 return i1 | 0;
}

function _GC_Mark() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i9 = i12;
 HEAP32[i9 >> 2] = 64;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i9 + 8 | 0;
 HEAP32[i11 >> 2] = _malloc(512) | 0;
 _Thread_GetHeapRoots(i9);
 _CLIFile_GetHeapRoots(i9);
 L1 : while (1) {
  i1 = HEAP32[i10 >> 2] | 0;
  while (1) {
   if (!i1) break L1;
   i7 = HEAP32[i11 >> 2] | 0;
   i1 = i1 + -1 | 0;
   i6 = i7 + (i1 << 3) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   i1 = i7 + (i1 << 3) + 4 | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i1 = 0;
   i6 = 0;
   while (1) {
    if ((i6 | 0) == (i8 | 0)) break;
    i2 = HEAP32[i7 + (i6 << 2) >> 2] | 0;
    L9 : do if (i2) {
     i4 = _TreeSearch(HEAP32[7989] | 0, i2) | 0;
     if ((i4 | 0) != (HEAP32[7988] | 0)) {
      i2 = i4 + 9 | 0;
      if (!(HEAP8[i2 >> 0] | 0)) {
       i5 = HEAP32[i4 + 12 >> 2] | 0;
       HEAP8[i2 >> 0] = 1;
       switch (HEAP8[i5 + 35 >> 0] | 0) {
       case 4:
       case 7:
       case 5:
        break;
       default:
        break L9;
       }
       i2 = HEAP32[8003] | 0;
       if ((i5 | 0) != (HEAP32[i2 + 36 >> 2] | 0)) {
        i3 = i5 + 96 | 0;
        i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
        if (i3 | 0) switch (HEAP8[i3 + 35 >> 0] | 0) {
        case 4:
        case 7:
        case 5:
         break;
        default:
         break L9;
        }
        if ((i5 | 0) != (HEAP32[i2 + 144 >> 2] | 0)) {
         _Heap_SetRoots(i9, i4 + 20 | 0, _GetSize(i4) | 0);
         i1 = 1;
        }
       }
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
   }
   if (i1 | 0) continue L1;
   i1 = (HEAP32[i10 >> 2] | 0) + -1 | 0;
   HEAP32[i10 >> 2] = i1;
  }
 }
 _free(HEAP32[i11 >> 2] | 0);
 STACKTOP = i12;
 return;
}

function _Type_IsMethod(i8, i1, i3, i7, i9) {
 i8 = i8 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 i7 = i7 | 0;
 i9 = i9 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i10 = i12 + 4 | 0;
 i4 = i12;
 i5 = (_strlen(i1) | 0) + -1 | 0;
 i2 = i8 + 16 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 if ((HEAP8[i1 + i5 >> 0] | 0) == 62) if (!(_strncmp(i2, i1, i5) | 0)) i11 = 4; else i1 = 0; else if (!(_strcmp(i2, i1) | 0)) i11 = 4; else i1 = 0;
 L4 : do if ((i11 | 0) == 4) {
  i6 = i8 + 20 | 0;
  HEAP32[i10 >> 2] = _MetaData_GetBlob(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, i4) | 0;
  if ((_MetaData_DecodeSigEntry(i10) | 0) & 16 | 0) _MetaData_DecodeSigEntry(i10) | 0;
  if ((_MetaData_DecodeSigEntry(i10) | 0) == (i7 | 0)) {
   i6 = (HEAP32[(HEAP32[8003] | 0) + 8 >> 2] | 0) == (i3 | 0) ? 0 : i3;
   i5 = i7 + 1 | 0;
   i2 = i8 + 4 | 0;
   i1 = 0;
   while (1) {
    if (i1 >>> 0 >= i5 >>> 0) {
     i1 = 1;
     break L4;
    }
    i3 = _Type_GetTypeFromSig(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, i10, 0, 0) | 0;
    if (!i1) i4 = i6; else i4 = HEAP32[(HEAP32[8003] | 0) + (HEAPU8[i9 + (i1 + -1) >> 0] << 2) >> 2] | 0;
    if (!i3) i11 = 14; else {
     i8 = i3 + 96 | 0;
     if (!(HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24)) i11 = 14; else if (!((i3 | 0) == (i4 | 0) ? 1 : (i4 | 0) == (HEAP32[(HEAP32[8003] | 0) + 4 >> 2] | 0))) {
      i1 = 0;
      break L4;
     }
    }
    if ((i11 | 0) == 14) {
     i11 = 0;
     if ((i3 | 0) != (i4 | 0)) {
      i1 = 0;
      break L4;
     }
    }
    i1 = i1 + 1 | 0;
   }
  } else i1 = 0;
 } while (0);
 STACKTOP = i12;
 return i1 | 0;
}

function _trinkle(i1, i10, i11, i3, i6, i2, i12) {
 i1 = i1 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i2 = i2 | 0;
 i12 = i12 | 0;
 var i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(240);
 i9 = i14 + 232 | 0;
 i13 = i14;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i9 >> 2] = i5;
 i8 = HEAP32[i3 + 4 >> 2] | 0;
 i7 = i9 + 4 | 0;
 HEAP32[i7 >> 2] = i8;
 HEAP32[i13 >> 2] = i1;
 L1 : do if ((i5 | 0) != 1 | (i8 | 0) != 0) {
  i8 = 0 - i10 | 0;
  i5 = i1 + (0 - (HEAP32[i12 + (i6 << 2) >> 2] | 0)) | 0;
  if ((FUNCTION_TABLE_iii[i11 & 31](i5, i1) | 0) < 1) {
   i4 = 1;
   i3 = i6;
   i5 = 9;
  } else {
   i4 = 1;
   i3 = i6;
   i2 = (i2 | 0) == 0;
   i6 = i5;
   while (1) {
    if (i2 & (i3 | 0) > 1) {
     i2 = i1 + i8 | 0;
     i5 = HEAP32[i12 + (i3 + -2 << 2) >> 2] | 0;
     if ((FUNCTION_TABLE_iii[i11 & 31](i2, i6) | 0) > -1) {
      i5 = 10;
      break L1;
     }
     if ((FUNCTION_TABLE_iii[i11 & 31](i2 + (0 - i5) | 0, i6) | 0) > -1) {
      i5 = 10;
      break L1;
     }
    }
    i2 = i4 + 1 | 0;
    HEAP32[i13 + (i4 << 2) >> 2] = i6;
    i5 = _pntz(i9) | 0;
    _shr(i9, i5);
    i3 = i5 + i3 | 0;
    if (!((HEAP32[i9 >> 2] | 0) != 1 | (HEAP32[i7 >> 2] | 0) != 0)) {
     i4 = i2;
     i1 = i6;
     i5 = 10;
     break L1;
    }
    i1 = i6 + (0 - (HEAP32[i12 + (i3 << 2) >> 2] | 0)) | 0;
    if ((FUNCTION_TABLE_iii[i11 & 31](i1, HEAP32[i13 >> 2] | 0) | 0) < 1) {
     i1 = i6;
     i4 = i2;
     i2 = 0;
     i5 = 9;
     break;
    } else {
     i5 = i6;
     i4 = i2;
     i2 = 1;
     i6 = i1;
     i1 = i5;
    }
   }
  }
 } else {
  i4 = 1;
  i3 = i6;
  i5 = 9;
 } while (0);
 if ((i5 | 0) == 9) if (!i2) i5 = 10;
 if ((i5 | 0) == 10) {
  _cycle(i10, i13, i4);
  _sift(i1, i10, i11, i3, i12);
 }
 STACKTOP = i14;
 return;
}

function _System_Enum_Internal_GetInfo(i1, i11, i2) {
 i1 = i1 | 0;
 i11 = i11 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0, i13 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i10 + 4 | 0;
 i9 = i10;
 i7 = _RuntimeType_DeRef(HEAP32[i11 >> 2] | 0) | 0;
 i4 = i7 + 100 | 0;
 i5 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 124 >> 2] | 0, (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + -1 | 0) | 0;
 i6 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 128 >> 2] | 0, (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + -1 | 0) | 0;
 i7 = i7 + 104 | 0;
 i3 = 0;
 i1 = 0;
 while (1) {
  if (i3 >>> 0 >= (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) >>> 0) break;
  i2 = HEAP32[(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24) + (i3 << 2) >> 2] | 0;
  i12 = i2 + 8 | 0;
  if ((HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8) & 64) {
   i13 = i2 + 12 | 0;
   HEAP32[i8 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0;
   _SystemArray_StoreElement(i5, i1, i8);
   i13 = i2 + 4 | 0;
   i12 = i2 + 36 | 0;
   _MetaData_GetConstant(HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24, HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24, i9);
   _SystemArray_StoreElement(i6, i1, i9);
   i1 = i1 + 1 | 0;
  }
  i3 = i3 + 1 | 0;
 }
 HEAP32[HEAP32[i11 + 4 >> 2] >> 2] = i5;
 HEAP32[HEAP32[i11 + 8 >> 2] >> 2] = i6;
 STACKTOP = i10;
 return 0;
}

function _JSInterop_CallDotNet(i1, i3, i6, i7, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48);
 i10 = i11 + 32 | 0;
 i4 = i11 + 24 | 0;
 i9 = i11;
 i8 = _Thread() | 0;
 HEAP32[i9 >> 2] = i1;
 HEAP32[i9 + 4 >> 2] = i3;
 HEAP32[i9 + 8 >> 2] = i6;
 HEAP32[i9 + 12 >> 2] = i7;
 HEAP32[i9 + 16 >> 2] = i2;
 _log_f(1, 16331, i9);
 i5 = _SystemString_FromCharPtrASCII(i2) | 0;
 HEAP32[i9 >> 2] = i5;
 _Heap_MakeUndeletable(i5);
 i5 = _CLIFile_GetMetaDataForLoadedAssembly(i1) | 0;
 i1 = _MetaData_GetTypeDefFromName(i5, i3, i6, 0, 1) | 0;
 if (!i1) {
  HEAP32[i4 >> 2] = i3;
  HEAP32[i4 + 4 >> 2] = i6;
  _Crash(16373, i4);
 }
 if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
 i3 = i1 + 112 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 i2 = i1 + 116 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i1 = 8;
   break;
  }
  i4 = HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0;
  i12 = i4 + 16 | 0;
  if (!(_strcmp(HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24, i7) | 0)) {
   i1 = 9;
   break;
  } else i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 8) {
  HEAP32[i10 >> 2] = i6;
  HEAP32[i10 + 4 >> 2] = i7;
  _Crash(16397, i10);
 } else if ((i1 | 0) == 9) {
  i12 = i4 + 52 | 0;
  _Thread_SetEntryPoint(i8, i5, HEAPU8[i12 >> 0] | HEAPU8[i12 + 1 >> 0] << 8 | HEAPU8[i12 + 2 >> 0] << 16 | HEAPU8[i12 + 3 >> 0] << 24, i9, 4);
  i12 = _Thread_Execute() | 0;
  _Heap_MakeDeletable(HEAP32[i9 >> 2] | 0);
  STACKTOP = i11;
  return i12 | 0;
 }
 return 0;
}

function _System_IO_FileInternal_GetFileSystemEntries(i1, i2, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i14 = i14 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(304);
 i4 = i15 + 36 | 0;
 i5 = i15 + 40 | 0;
 i12 = i15;
 i13 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 i11 = HEAP32[i2 + 16 >> 2] | 0;
 i3 = _SystemString_GetString(HEAP32[i2 + 4 >> 2] | 0, i4) | 0;
 i1 = _malloc(128) | 0;
 i4 = HEAP32[i4 >> 2] | 0;
 i2 = 0;
 while (1) {
  if ((i2 | 0) == (i4 | 0)) break;
  HEAP8[i5 + i2 >> 0] = HEAP16[i3 + (i2 << 1) >> 1];
  i2 = i2 + 1 | 0;
 }
 HEAP8[i5 + i4 >> 0] = 0;
 if (!(_glob(i5, 4, 0, i12) | 0)) {
  i9 = i12 + 4 | 0;
  i4 = 32;
  i3 = 0;
  i5 = i1;
  i8 = 0;
  i7 = i1;
  while (1) {
   if (i8 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) break;
   i6 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   i2 = _Attrs(i6, i11) | 0;
   if ((i2 | 0) == -1) break;
   if ((i2 & i10 | 0) == (i13 | 0)) {
    if (i3 >>> 0 < i4 >>> 0) i2 = i7; else {
     i2 = _realloc(i7, i4 << 3) | 0;
     i4 = i4 << 1;
     i5 = i2;
     i1 = i2;
    }
    i7 = _SystemString_FromCharPtrASCII(i6) | 0;
    _Heap_MakeUndeletable(i7);
    HEAP32[i5 + (i3 << 2) >> 2] = i7;
    i3 = i3 + 1 | 0;
   } else i2 = i7;
   i8 = i8 + 1 | 0;
   i7 = i2;
  }
  _globfree(i12);
 } else {
  HEAP32[i11 >> 2] = HEAP32[(___errno_location() | 0) >> 2];
  i3 = 0;
 }
 i13 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 124 >> 2] | 0, i3) | 0;
 i2 = i13 + 4 | 0;
 _memcpy(i2 | 0, i1 | 0, i3 << 2 | 0) | 0;
 _free(i1);
 HEAP32[i14 >> 2] = i13;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  _Heap_MakeDeletable(HEAP32[i2 + (i1 << 2) >> 2] | 0);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i15;
 return 0;
}

function _memcpy(i3, i6, i1) {
 i3 = i3 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) >= 8192) return _emscripten_memcpy_big(i3 | 0, i6 | 0, i1 | 0) | 0;
 i5 = i3 | 0;
 i4 = i3 + i1 | 0;
 if ((i3 & 3) == (i6 & 3)) {
  while (i3 & 3) {
   if (!i1) return i5 | 0;
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   i3 = i3 + 1 | 0;
   i6 = i6 + 1 | 0;
   i1 = i1 - 1 | 0;
  }
  i1 = i4 & -4 | 0;
  i2 = i1 - 64 | 0;
  while ((i3 | 0) <= (i2 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i3 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i3 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i3 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i3 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i3 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i3 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i3 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i3 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP32[i3 + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   HEAP32[i3 + 52 >> 2] = HEAP32[i6 + 52 >> 2];
   HEAP32[i3 + 56 >> 2] = HEAP32[i6 + 56 >> 2];
   HEAP32[i3 + 60 >> 2] = HEAP32[i6 + 60 >> 2];
   i3 = i3 + 64 | 0;
   i6 = i6 + 64 | 0;
  }
  while ((i3 | 0) < (i1 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 } else {
  i1 = i4 - 4 | 0;
  while ((i3 | 0) < (i1 | 0)) {
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   HEAP8[i3 + 1 >> 0] = HEAP8[i6 + 1 >> 0] | 0;
   HEAP8[i3 + 2 >> 0] = HEAP8[i6 + 2 >> 0] | 0;
   HEAP8[i3 + 3 >> 0] = HEAP8[i6 + 3 >> 0] | 0;
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 }
 while ((i3 | 0) < (i4 | 0)) {
  HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i6 = i6 + 1 | 0;
 }
 return i5 | 0;
}

function ___stdio_write(i7, i2, i1) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48);
 i10 = i12 + 16 | 0;
 i5 = i12;
 i4 = i12 + 32 | 0;
 i8 = i7 + 28 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 i9 = i7 + 20 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - i3 | 0;
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP32[i4 + 8 >> 2] = i2;
 HEAP32[i4 + 12 >> 2] = i1;
 i3 = i3 + i1 | 0;
 i6 = i7 + 60 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 HEAP32[i5 + 8 >> 2] = 2;
 i5 = ___syscall_ret(___syscall146(146, i5 | 0) | 0) | 0;
 L1 : do if ((i3 | 0) == (i5 | 0)) i11 = 3; else {
  i2 = 2;
  while (1) {
   if ((i5 | 0) < 0) break;
   i3 = i3 - i5 | 0;
   i14 = HEAP32[i4 + 4 >> 2] | 0;
   i13 = i5 >>> 0 > i14 >>> 0;
   i4 = i13 ? i4 + 8 | 0 : i4;
   i2 = i2 + (i13 << 31 >> 31) | 0;
   i14 = i5 - (i13 ? i14 : 0) | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i14;
   i13 = i4 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i14;
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i10 + 4 >> 2] = i4;
   HEAP32[i10 + 8 >> 2] = i2;
   i5 = ___syscall_ret(___syscall146(146, i10 | 0) | 0) | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i11 = 3;
    break L1;
   }
  }
  HEAP32[i7 + 16 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i7 >> 2] = HEAP32[i7 >> 2] | 32;
  if ((i2 | 0) == 2) i1 = 0; else i1 = i1 - (HEAP32[i4 + 4 >> 2] | 0) | 0;
 } while (0);
 if ((i11 | 0) == 3) {
  i14 = HEAP32[i7 + 44 >> 2] | 0;
  HEAP32[i7 + 16 >> 2] = i14 + (HEAP32[i7 + 48 >> 2] | 0);
  HEAP32[i8 >> 2] = i14;
  HEAP32[i9 >> 2] = i14;
 }
 STACKTOP = i12;
 return i1 | 0;
}

function _Sys_GetMethodDesc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 i2 = i1 + 48 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 i6 = i2 + 16 | 0;
 i2 = i2 + 12 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 i3 = i1 + 16 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 HEAP32[i4 >> 2] = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i4 + 8 >> 2] = i3;
 _sprintf(32724, 18658, i4) | 0;
 i4 = i1 + 14 | 0;
 i3 = i1 + 34 | 0;
 i2 = i1 + 36 | 0;
 i1 = (((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8) & 65535) >>> 4 & 1 ^ 1) & 65535;
 while (1) {
  if (i1 >>> 0 >= ((HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8) & 65535) >>> 0) break;
  if (i1 >>> 0 > ((((HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8) & 65535) >>> 4 & 1 ^ 1) & 65535) >>> 0) {
   i6 = 32724 + (_strlen(32724) | 0) | 0;
   HEAP8[i6 >> 0] = 44;
   HEAP8[i6 + 1 >> 0] = 0;
  }
  i7 = 32724 + (_strlen(32724) | 0) | 0;
  i6 = (HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + (i1 * 12 | 0) >> 2] | 0) + 12 | 0;
  i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
  _memcpy(i7 | 0, i6 | 0, (_strlen(i6) | 0) + 1 | 0) | 0;
  i1 = i1 + 1 | 0;
 }
 i7 = 32724 + (_strlen(32724) | 0) | 0;
 HEAP8[i7 >> 0] = 41;
 HEAP8[i7 + 1 >> 0] = 0;
 STACKTOP = i5;
 return 32724;
}

function _MetaData_GetTypeDefFromDefRefOrSpec(i2, i3, i4, i5) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i9 = i10;
 i6 = i10 + 4 | 0;
 i7 = _MetaData_GetTableRow(i2, i3) | 0;
 L1 : do if (!i7) i1 = 0; else {
  i8 = HEAP32[i7 >> 2] | 0;
  if (!i8) switch ((i3 >>> 24 & 255) << 24 >> 24) {
  case 2:
   {
    HEAP32[i7 >> 2] = i7;
    i1 = i7;
    break L1;
   }
  case 1:
   {
    i8 = i7 + 4 | 0;
    i9 = i7 + 12 | 0;
    i1 = i7 + 8 | 0;
    i1 = _MetaData_GetTypeDefFromName(_MetaData_GetResolutionScopeMetaData(i2, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24, i6) | 0, HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, HEAP32[i6 >> 2] | 0, 1) | 0;
    HEAP8[i7 >> 0] = i1;
    HEAP8[i7 + 1 >> 0] = i1 >> 8;
    HEAP8[i7 + 2 >> 0] = i1 >> 16;
    HEAP8[i7 + 3 >> 0] = i1 >> 24;
    break L1;
   }
  case 27:
   {
    i1 = i7 + 8 | 0;
    HEAP32[i6 >> 2] = _MetaData_GetBlob(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 0) | 0;
    i1 = i7 + 4 | 0;
    i1 = _Type_GetTypeFromSig(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, i6, i4, i5) | 0;
    break L1;
   }
  default:
   {
    HEAP32[i9 >> 2] = i3;
    _Crash(17726, i9);
   }
  } else i1 = i8;
 } while (0);
 STACKTOP = i10;
 return i1 | 0;
}

function _System_String_InternalReplace(i2, i1, i14) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i14 = i14 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0, i16 = 0;
 i15 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 i12 = HEAP32[i15 >> 2] | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 i10 = i2 + 4 | 0;
 i8 = i11 - i12 + 1 | 0;
 i9 = i12 + -1 | 0;
 i1 = 0;
 i3 = 0;
 while (1) {
  if (i1 >>> 0 < i8 >>> 0) i2 = 0; else break;
  while (1) {
   if (i2 >>> 0 >= i12 >>> 0) {
    i16 = 5;
    break;
   }
   if ((HEAP16[i10 + (i2 + i1 << 1) >> 1] | 0) == (HEAP16[i15 + 4 + (i2 << 1) >> 1] | 0)) i2 = i2 + 1 | 0; else {
    i2 = i3;
    break;
   }
  }
  if ((i16 | 0) == 5) {
   i16 = 0;
   i2 = i3 + 1 | 0;
   i1 = i9 + i1 | 0;
  }
  i1 = i1 + 1 | 0;
  i3 = i2;
 }
 i7 = i4 + 4 | 0;
 i5 = _CreateStringHeapObj(i11 - (Math_imul(i3, i12 - i13 | 0) | 0) | 0) | 0;
 i6 = i13 << 1;
 i4 = 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i11 >>> 0) break;
  L13 : do if (i1 >>> 0 < i8 >>> 0) {
   i2 = 0;
   i3 = 0;
   while (1) {
    if (i3 >>> 0 >= i12 >>> 0) break;
    if ((HEAP16[i10 + (i3 + i1 << 1) >> 1] | 0) == (HEAP16[i15 + 4 + (i3 << 1) >> 1] | 0)) {
     i2 = 1;
     i3 = i3 + 1 | 0;
    } else {
     i16 = 14;
     break L13;
    }
   }
   if (!i2) i16 = 14; else {
    _memcpy(i5 + 4 + (i4 << 1) | 0, i7 | 0, i6 | 0) | 0;
    i1 = i9 + i1 | 0;
    i2 = i13;
   }
  } else i16 = 14; while (0);
  if ((i16 | 0) == 14) {
   i16 = 0;
   HEAP16[i5 + 4 + (i4 << 1) >> 1] = HEAP16[i10 + (i1 << 1) >> 1] | 0;
   i2 = 1;
  }
  i4 = i2 + i4 | 0;
  i1 = i1 + 1 | 0;
 }
 HEAP32[i14 >> 2] = i5;
 return 0;
}

function _GC_Sweep() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(320);
 i8 = i9;
 HEAP32[i8 >> 2] = HEAP32[7989];
 HEAP32[7991] = 0;
 i1 = 0;
 i3 = 1;
 while (1) {
  if (!i3) break;
  i5 = i3 + -1 | 0;
  i6 = i8 + (i5 << 2) | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i2 = i7 + 9 | 0;
  L4 : do switch (HEAP8[i2 >> 0] | 0) {
  case 0:
   {
    i2 = i7 + 10 | 0;
    switch (HEAP8[i2 >> 0] | 0) {
    case 0:
     break;
    case 1:
     {
      _AddFinalizer(i7 + 20 | 0);
      HEAP8[i2 >> 0] = 2;
      i2 = i7 + 16 | 0;
      if (!(HEAP32[i2 >> 2] | 0)) break L4;
      _RemoveWeakRefTarget(i7, 0);
      _free(HEAP32[i2 >> 2] | 0);
      break L4;
     }
    default:
     break L4;
    }
    i2 = i7 + 16 | 0;
    if (HEAP32[i2 >> 2] | 0) {
     _RemoveWeakRefTarget(i7, 1);
     _free(HEAP32[i2 >> 2] | 0);
    }
    HEAP32[i2 >> 2] = i1;
    i1 = i7;
    break;
   }
  case -1:
   {
    HEAP32[7991] = (HEAP32[7991] | 0) + 1;
    break;
   }
  default:
   HEAP8[i2 >> 0] = 0;
  } while (0);
  i2 = HEAP32[i7 + 4 >> 2] | 0;
  i4 = HEAP32[7988] | 0;
  if ((i2 | 0) == (i4 | 0)) i3 = i5; else HEAP32[i6 >> 2] = i2;
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) == (i4 | 0)) continue;
  HEAP32[i8 + (i3 << 2) >> 2] = i2;
  i3 = i3 + 1 | 0;
 }
 while (1) {
  if (!i1) break;
  i8 = HEAP32[i1 + 16 >> 2] | 0;
  HEAP32[7989] = _TreeRemove(HEAP32[7989] | 0, i1) | 0;
  HEAP32[7990] = (HEAP32[7990] | 0) + -1;
  i7 = _GetSize(i1) | 0;
  HEAP32[7986] = -20 - i7 + (HEAP32[7986] | 0);
  _free(i1);
  i1 = i8;
 }
 STACKTOP = i9;
 return;
}

function _vfprintf(i15, i8, i1) {
 i15 = i15 | 0;
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(224);
 i10 = i16 + 120 | 0;
 i11 = i16 + 80 | 0;
 i13 = i16;
 i14 = i16 + 136 | 0;
 i2 = i11;
 i3 = i2 + 40 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
 if ((_printf_core(0, i8, i10, i13, i11) | 0) < 0) i1 = -1; else {
  if ((HEAP32[i15 + 76 >> 2] | 0) > -1) i12 = ___lockfile(i15) | 0; else i12 = 0;
  i1 = HEAP32[i15 >> 2] | 0;
  i9 = i1 & 32;
  if ((HEAP8[i15 + 74 >> 0] | 0) < 1) HEAP32[i15 >> 2] = i1 & -33;
  i2 = i15 + 48 | 0;
  if (!(HEAP32[i2 >> 2] | 0)) {
   i3 = i15 + 44 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i14;
   i5 = i15 + 28 | 0;
   HEAP32[i5 >> 2] = i14;
   i6 = i15 + 20 | 0;
   HEAP32[i6 >> 2] = i14;
   HEAP32[i2 >> 2] = 80;
   i7 = i15 + 16 | 0;
   HEAP32[i7 >> 2] = i14 + 80;
   i1 = _printf_core(i15, i8, i10, i13, i11) | 0;
   if (i4) {
    FUNCTION_TABLE_iiii[HEAP32[i15 + 36 >> 2] & 255](i15, 0, 0) | 0;
    i1 = (HEAP32[i6 >> 2] | 0) == 0 ? -1 : i1;
    HEAP32[i3 >> 2] = i4;
    HEAP32[i2 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
   }
  } else i1 = _printf_core(i15, i8, i10, i13, i11) | 0;
  i2 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i2 | i9;
  if (i12 | 0) ___unlockfile(i15);
  i1 = (i2 & 32 | 0) == 0 ? i1 : -1;
 }
 STACKTOP = i16;
 return i1 | 0;
}

function _MetaData_GetTypeMethodField(i2, i3, i8, i4, i5) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i8 = i8 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i6 = 0, i7 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i9;
 switch ((i3 >>> 24 & 255) << 24 >> 24) {
 case 27:
 case 1:
 case 2:
  {
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i2, i3, i4, i5) | 0;
   if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
   HEAP32[i8 >> 2] = 0;
   break;
  }
 case 6:
  {
   i7 = 5;
   break;
  }
 case 4:
  {
   i7 = 9;
   break;
  }
 case 10:
  {
   i7 = (_MetaData_GetTableRow(i2, i3) | 0) + 12 | 0;
   if ((HEAP8[(_MetaData_GetBlob(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, 0) | 0) >> 0] | 0) == 6) i7 = 9; else i7 = 5;
   break;
  }
 default:
  {
   HEAP32[i6 >> 2] = i3;
   _Crash(18169, i6);
  }
 }
 if ((i7 | 0) == 5) {
  i1 = _MetaData_GetMethodDefFromDefRefOrSpec(i2, i3, i4, i5) | 0;
  if (!(HEAP8[i1 + 32 >> 0] | 0)) {
   i2 = _MetaData_GetTypeDefFromMethodDef(i1) | 0;
   if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
  }
  HEAP32[i8 >> 2] = 1;
 } else if ((i7 | 0) == 9) {
  i1 = _MetaData_GetFieldDefFromDefOrRef(i2, i3, i4, i5) | 0;
  i7 = i1 + 24 | 0;
  if (!(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24)) {
   i2 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
   if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
  }
  HEAP32[i8 >> 2] = 2;
 }
 STACKTOP = i9;
 return i1 | 0;
}

function _Generics_GetMethodDefFromSpec(i1, i4, i5) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i10;
 i7 = i1 + 4 | 0;
 i8 = i1 + 8 | 0;
 i8 = _MetaData_GetMethodDefFromDefRefOrSpec(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24, i4, i5) | 0;
 i9 = i8 + 48 | 0;
 if (!(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24)) {
  i3 = _MetaData_GetTypeDefFromMethodDef(i8) | 0;
  HEAP8[i9 >> 0] = i3;
  HEAP8[i9 + 1 >> 0] = i3 >> 8;
  HEAP8[i9 + 2 >> 0] = i3 >> 16;
  HEAP8[i9 + 3 >> 0] = i3 >> 24;
 }
 i2 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = _MetaData_GetBlob(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, 0) | 0;
 _MetaData_DecodeSigEntry(i6) | 0;
 i2 = _MetaData_DecodeSigEntry(i6) | 0;
 i3 = _malloc(i2 << 2) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP32[i3 + (i1 << 2) >> 2] = _Type_GetTypeFromSig(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, i6, i4, i5) | 0;
  i1 = i1 + 1 | 0;
 }
 i9 = _Generics_GetMethodDefFromCoreMethod(i8, HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, i2, i3) | 0;
 _free(i3);
 STACKTOP = i10;
 return i9 | 0;
}

function _MetaData_CompareNameAndSig(i3, i4, i8, i9, i1, i5, i10, i2) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 i10 = i10 | 0;
 i2 = i2 | 0;
 var i6 = 0, i7 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i11 + 4 | 0;
 i7 = i11;
 i2 = i5 + 16 | 0;
 if (!(_strcmp(i3, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0)) {
  HEAP32[i6 >> 2] = _MetaData_GetBlob(i4, 0) | 0;
  i1 = i5 + 20 | 0;
  HEAP32[i7 >> 2] = _MetaData_GetBlob(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 0) | 0;
  i1 = _MetaData_DecodeSigEntry(i6) | 0;
  L3 : do if ((i1 | 0) == (_MetaData_DecodeSigEntry(i7) | 0)) {
   if (i1 & 16 | 0) {
    i4 = _MetaData_DecodeSigEntry(i6) | 0;
    if ((i4 | 0) != (_MetaData_DecodeSigEntry(i7) | 0)) {
     i1 = 0;
     break;
    }
   }
   i1 = _MetaData_DecodeSigEntry(i6) | 0;
   if ((i1 | 0) == (_MetaData_DecodeSigEntry(i7) | 0)) {
    i3 = i1 + 1 | 0;
    i2 = i5 + 4 | 0;
    i1 = 0;
    while (1) {
     if (i1 >>> 0 >= i3 >>> 0) {
      i1 = 1;
      break L3;
     }
     i5 = _Type_GetTypeFromSig(i8, i6, i9, 0) | 0;
     if ((i5 | 0) == (_Type_GetTypeFromSig(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, i7, i10, 0) | 0)) i1 = i1 + 1 | 0; else {
      i1 = 0;
      break;
     }
    }
   } else i1 = 0;
  } else i1 = 0; while (0);
 } else i1 = 0;
 STACKTOP = i11;
 return i1 | 0;
}

function ___tan(d3, d1, i6) {
 d3 = +d3;
 d1 = +d1;
 i6 = i6 | 0;
 var i2 = 0, d4 = 0.0, i5 = 0, i7 = 0, d8 = 0.0, d9 = 0.0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i2 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i5 = i2 & 2147483640;
 i5 = i5 >>> 0 > 1072010279 | (i5 | 0) == 1072010279 & 0 > 0;
 if (i5) {
  i2 = _bitshift64Lshr(HEAP32[tempDoublePtr >> 2] | 0, i2 | 0, 63) | 0;
  i7 = (i2 | 0) == 0;
  d3 = .7853981633974483 - (i7 ? d3 : -d3) + (3.061616997868383e-17 - (i7 ? d1 : -d1));
  d1 = 0.0;
 } else i2 = 0;
 d8 = d3 * d3;
 d4 = d8 * d8;
 d9 = d3 * d8;
 d4 = d9 * .3333333333333341 + (d1 + d8 * (d1 + d9 * (d4 * (d4 * (d4 * (d4 * (7.817944429395571e-05 - d4 * 1.8558637485527546e-05) + 5.880412408202641e-04) + 3.5920791075913124e-03) + .021869488294859542) + .13333333333320124 + d8 * (d4 * (d4 * (d4 * (d4 * (d4 * 2.590730518636337e-05 + 7.140724913826082e-05) + 2.464631348184699e-04) + 1.4562094543252903e-03) + .0088632398235993) + .05396825397622605))));
 d1 = d3 + d4;
 if (i5) {
  d9 = +(1 - (i6 << 1) | 0);
  d1 = d9 - (d3 + (d4 - d1 * d1 / (d1 + d9))) * 2.0;
  d1 = i2 | 0 ? -d1 : d1;
 } else if (i6) {
  HEAPF64[tempDoublePtr >> 3] = d1;
  i7 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
  HEAP32[tempDoublePtr >> 2] = 0;
  HEAP32[tempDoublePtr + 4 >> 2] = i7;
  d9 = +HEAPF64[tempDoublePtr >> 3];
  d8 = -1.0 / d1;
  HEAPF64[tempDoublePtr >> 3] = d8;
  i7 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
  HEAP32[tempDoublePtr >> 2] = 0;
  HEAP32[tempDoublePtr + 4 >> 2] = i7;
  d1 = +HEAPF64[tempDoublePtr >> 3];
  d1 = d8 * (d9 * d1 + 1.0 + (d4 - (d9 - d3)) * d1) + d1;
 }
 return +d1;
}

function _MetaData_GetMethodDefFromDefRefOrSpec(i7, i2, i5, i8) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 i8 = i8 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i6 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i10 + 8 | 0;
 i6 = i10;
 i9 = _MetaData_GetTableRow(i7, i2) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 L1 : do if (!i3) switch ((i2 >>> 24 & 255) << 24 >> 24) {
 case 6:
  {
   HEAP32[i9 >> 2] = i9;
   i1 = i9;
   break L1;
  }
 case 10:
  {
   i1 = i9 + 4 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   switch ((i1 >>> 24 & 255) << 24 >> 24) {
   case 27:
   case 1:
    break;
   default:
    {
     HEAP32[i6 >> 2] = i1;
     _Crash(17572, i6);
    }
   }
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i7, i1, i5, i8) | 0;
   if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
   i5 = i9 + 8 | 0;
   i6 = i9 + 12 | 0;
   i9 = i1 + 92 | 0;
   i1 = _FindMethodInType(i1, HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24, i7, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, i8) | 0;
   break L1;
  }
 case 43:
  {
   i1 = _Generics_GetMethodDefFromSpec(i9, i5, i8) | 0;
   break L1;
  }
 default:
  {
   HEAP32[i4 >> 2] = i2;
   _Crash(17655, i4);
  }
 } else i1 = i3; while (0);
 STACKTOP = i10;
 return i1 | 0;
}

function ___towcase(i1, i9) {
 i1 = i1 | 0;
 i9 = i9 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i6 = (i9 << 1) + -1 | 0;
 i7 = i9 + -1 | 0;
 L1 : do if (!((i1 + -43008 | 0) >>> 0 < 22272 | ((i1 + -11776 | 0) >>> 0 < 30784 | ((i1 + -1536 | 0) >>> 0 < 2560 | (_iswalpha(i1) | 0) == 0)))) {
  i2 = (i9 | 0) != 0;
  if (i2 & (i1 + -4256 | 0) >>> 0 < 46) {
   if ((i1 | 0) > 4293) switch (i1 | 0) {
   case 4295:
   case 4301:
    break;
   default:
    break L1;
   }
   i1 = i1 + 7264 | 0;
   break;
  }
  if ((i1 + -11520 | 0) >>> 0 < 38 & (i2 ^ 1)) {
   i1 = i1 + -7264 | 0;
   break;
  } else i2 = 0;
  do {
   i4 = HEAP8[12524 + (i2 << 2) + 2 >> 0] | 0;
   i5 = i4 << 24 >> 24;
   i3 = i1 - (HEAPU16[12524 + (i2 << 2) >> 1] | 0) | 0;
   if ((i3 - (i7 & i5) | 0) >>> 0 < (HEAPU8[12524 + (i2 << 2) + 3 >> 0] | 0) >>> 0) {
    i8 = 11;
    break;
   }
   i2 = i2 + 1 | 0;
  } while ((i2 | 0) != 61);
  if ((i8 | 0) == 11) if (i4 << 24 >> 24 == 1) {
   i1 = i9 + i1 - (i3 & 1) | 0;
   break;
  } else {
   i1 = (Math_imul(i6, i5) | 0) + i1 | 0;
   break;
  }
  i4 = 1 - i9 | 0;
  i2 = HEAP16[12036 + (i4 << 1) >> 1] | 0;
  L20 : do if (i2 << 16 >> 16) {
   i3 = 0;
   while (1) {
    if ((i2 & 65535 | 0) == (i1 | 0)) break;
    i3 = i3 + 1 | 0;
    i2 = HEAP16[12036 + (i3 << 2) + (i4 << 1) >> 1] | 0;
    if (!(i2 << 16 >> 16)) break L20;
   }
   i1 = HEAPU16[12036 + (i3 << 2) + (i9 << 1) >> 1] | 0;
   break L1;
  } while (0);
  return ((i1 + -66600 + (i9 * 40 | 0) | 0) >>> 0 < 40 ? i1 + -40 + (i9 * 80 | 0) | 0 : i1) | 0;
 } while (0);
 return i1 | 0;
}

function _mbtowc(i1, i6, i4) {
 i1 = i1 | 0;
 i6 = i6 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i7;
 L1 : do if (!i6) i1 = 0; else {
  do if (i4 | 0) {
   i5 = (i1 | 0) == 0 ? i2 : i1;
   i1 = HEAP8[i6 >> 0] | 0;
   if (i1 << 24 >> 24 > -1) {
    HEAP32[i5 >> 2] = i1 & 255;
    i1 = i1 << 24 >> 24 != 0 & 1;
    break L1;
   }
   i3 = (HEAP32[HEAP32[(___pthread_self_444() | 0) + 188 >> 2] >> 2] | 0) == 0;
   i1 = HEAP8[i6 >> 0] | 0;
   if (i3) {
    HEAP32[i5 >> 2] = i1 << 24 >> 24 & 57343;
    i1 = 1;
    break L1;
   }
   i1 = (i1 & 255) + -194 | 0;
   if (i1 >>> 0 <= 50) {
    i2 = i6 + 1 | 0;
    i3 = HEAP32[5824 + (i1 << 2) >> 2] | 0;
    if (i4 >>> 0 < 4) if (i3 & -2147483648 >>> ((i4 * 6 | 0) + -6 | 0) | 0) break;
    i1 = HEAPU8[i2 >> 0] | 0;
    i4 = i1 >>> 3;
    if ((i4 + -16 | i4 + (i3 >> 26)) >>> 0 <= 7) {
     i1 = i1 + -128 | i3 << 6;
     if ((i1 | 0) >= 0) {
      HEAP32[i5 >> 2] = i1;
      i1 = 2;
      break L1;
     }
     i2 = (HEAPU8[i6 + 2 >> 0] | 0) + -128 | 0;
     if (i2 >>> 0 <= 63) {
      i2 = i2 | i1 << 6;
      if ((i2 | 0) >= 0) {
       HEAP32[i5 >> 2] = i2;
       i1 = 3;
       break L1;
      }
      i1 = (HEAPU8[i6 + 3 >> 0] | 0) + -128 | 0;
      if (i1 >>> 0 <= 63) {
       HEAP32[i5 >> 2] = i1 | i2 << 6;
       i1 = 4;
       break L1;
      }
     }
    }
   }
  } while (0);
  HEAP32[(___errno_location() | 0) >> 2] = 84;
  i1 = -1;
 } while (0);
 STACKTOP = i7;
 return i1 | 0;
}

function _System_Array_Internal_SetValue(i3, i4, i7) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0, i8 = 0;
 i6 = _Heap_GetType(i3) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i1 = _Heap_GetType(i5) | 0;
 i6 = i6 + 96 | 0;
 i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 if (!(_Type_IsAssignableFrom(i6, i1) | 0)) {
  i8 = i6 + 88 | 0;
  if ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 184 >> 2] | 0)) {
   i8 = i6 + 92 | 0;
   if ((HEAP32[(HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) >> 2] | 0) == (i1 | 0)) i2 = 4; else i1 = 0;
  } else i1 = 0;
 } else i2 = 4;
 do if ((i2 | 0) == 4) {
  i2 = i6 + 64 | 0;
  i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  i1 = i3 + 4 + (Math_imul(i2, HEAP32[i4 + 4 >> 2] | 0) | 0) | 0;
  if (!(HEAP8[i6 + 34 >> 0] | 0)) {
   HEAP32[i1 >> 2] = i5;
   i1 = 1;
   break;
  }
  i8 = i6 + 88 | 0;
  if ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24 | 0) != (HEAP32[(HEAP32[8003] | 0) + 184 >> 2] | 0)) {
   _memcpy(i1 | 0, i5 | 0, i2 | 0) | 0;
   i1 = 1;
   break;
  }
  if (!i5) {
   _memset(i1 | 0, 0, i2 | 0) | 0;
   i1 = 1;
   break;
  } else {
   HEAP32[i1 >> 2] = 1;
   _memcpy(i1 + 4 | 0, i5 | 0, i2 + -4 | 0) | 0;
   i1 = 1;
   break;
  }
 } while (0);
 HEAP32[i7 >> 2] = i1;
 return 0;
}

function _System_Type_GetNestedTypes(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i9;
 i5 = _RuntimeType_DeRef(i2) | 0;
 i6 = i5 + 4 | 0;
 i7 = HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 32 >> 2] | 0;
 i1 = 0;
 i2 = 1;
 while (1) {
  if (i2 >>> 0 > i7 >>> 0) break;
  i4 = (_MetaData_GetTableRow(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, i2 & 16777215 | 33554432) | 0) + 120 | 0;
  i1 = i1 + ((i5 | 0) == (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24 | 0) & 1) | 0;
  i2 = i2 + 1 | 0;
 }
 i4 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[(HEAP32[8003] | 0) + 108 >> 2] | 0, 0, 0) | 0, i1) | 0;
 HEAP32[i3 >> 2] = i4;
 i1 = 0;
 i3 = 1;
 while (1) {
  if (i3 >>> 0 > i7 >>> 0) break;
  i2 = _MetaData_GetTableRow(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, i3 & 16777215 | 33554432) | 0;
  i10 = i2 + 120 | 0;
  if ((i5 | 0) == (HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24 | 0)) {
   HEAP32[i8 >> 2] = _Type_GetTypeObject(i2) | 0;
   _SystemArray_StoreElement(i4, i1, i8);
   i1 = i1 + 1 | 0;
  }
  i3 = i3 + 1 | 0;
 }
 STACKTOP = i9;
 return 0;
}

function ___mo_lookup(i12, i13, i10) {
 i12 = i12 | 0;
 i13 = i13 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = (HEAP32[i12 >> 2] | 0) + 1794895138 | 0;
 i3 = _swapc(HEAP32[i12 + 8 >> 2] | 0, i11) | 0;
 i1 = _swapc(HEAP32[i12 + 12 >> 2] | 0, i11) | 0;
 i2 = _swapc(HEAP32[i12 + 16 >> 2] | 0, i11) | 0;
 L1 : do if (i3 >>> 0 < i13 >>> 2 >>> 0) {
  i9 = i13 - (i3 << 2) | 0;
  if (i1 >>> 0 < i9 >>> 0 & i2 >>> 0 < i9 >>> 0) if (!((i2 | i1) & 3)) {
   i9 = i1 >>> 2;
   i8 = i2 >>> 2;
   i7 = 0;
   while (1) {
    i5 = i3 >>> 1;
    i6 = i7 + i5 | 0;
    i4 = i6 << 1;
    i2 = i4 + i9 | 0;
    i1 = _swapc(HEAP32[i12 + (i2 << 2) >> 2] | 0, i11) | 0;
    i2 = _swapc(HEAP32[i12 + (i2 + 1 << 2) >> 2] | 0, i11) | 0;
    if (!(i2 >>> 0 < i13 >>> 0 & i1 >>> 0 < (i13 - i2 | 0) >>> 0)) {
     i1 = 0;
     break L1;
    }
    if (HEAP8[i12 + (i2 + i1) >> 0] | 0) {
     i1 = 0;
     break L1;
    }
    i1 = _strcmp(i10, i12 + i2 | 0) | 0;
    if (!i1) break;
    i1 = (i1 | 0) < 0;
    if ((i3 | 0) == 1) {
     i1 = 0;
     break L1;
    } else {
     i7 = i1 ? i7 : i6;
     i3 = i1 ? i5 : i3 - i5 | 0;
    }
   }
   i1 = i4 + i8 | 0;
   i2 = _swapc(HEAP32[i12 + (i1 << 2) >> 2] | 0, i11) | 0;
   i1 = _swapc(HEAP32[i12 + (i1 + 1 << 2) >> 2] | 0, i11) | 0;
   if (i1 >>> 0 < i13 >>> 0 & i2 >>> 0 < (i13 - i1 | 0) >>> 0) i1 = (HEAP8[i12 + (i1 + i2) >> 0] | 0) == 0 ? i12 + i1 | 0 : 0; else i1 = 0;
  } else i1 = 0; else i1 = 0;
 } else i1 = 0; while (0);
 return i1 | 0;
}

function _fnmatch(i3, i4, i8) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i9;
 i7 = (i8 & 8 | 0) == 0;
 L1 : do if (!(i8 & 1)) {
  L3 : do if (!i7) {
   i2 = i4;
   i1 = i4;
   while (1) {
    switch (HEAP8[i1 >> 0] | 0) {
    case 0:
     break L3;
    case 47:
     {
      if (!(_fnmatch_internal(i3, -1, i4, i1 - i2 | 0, i8) | 0)) {
       i1 = 0;
       break L1;
      }
      break;
     }
    default:
     {}
    }
    i1 = i1 + 1 | 0;
   }
  } while (0);
  i1 = _fnmatch_internal(i3, -1, i4, -1, i8) | 0;
 } else {
  i1 = i4;
  while (1) {
   i4 = i1;
   L13 : while (1) {
    switch (HEAP8[i4 >> 0] | 0) {
    case 47:
    case 0:
     {
      i2 = i3;
      break L13;
     }
    default:
     {}
    }
    i4 = i4 + 1 | 0;
   }
   L16 : while (1) {
    i5 = _pat_next(i2, -1, i6, i8) | 0;
    switch (i5 | 0) {
    case 0:
    case 47:
     break L16;
    default:
     {}
    }
    i2 = i2 + (HEAP32[i6 >> 2] | 0) | 0;
   }
   i10 = HEAP8[i4 >> 0] | 0;
   if ((i5 | 0) != (i10 << 24 >> 24 | 0) & (i7 | i10 << 24 >> 24 == 0)) {
    i1 = 1;
    break L1;
   }
   i1 = (_fnmatch_internal(i3, i2 - i3 | 0, i1, i4 - i1 | 0, i8) | 0) != 0;
   if ((i5 | 0) == 0 | i1) {
    i1 = i1 & 1;
    break L1;
   }
   i3 = i2 + (HEAP32[i6 >> 2] | 0) | 0;
   i1 = i4 + 1 | 0;
  }
 } while (0);
 STACKTOP = i9;
 return i1 | 0;
}

function _socket(i2, i6, i3) {
 i2 = i2 | 0;
 i6 = i6 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(96);
 i7 = i9 + 32 | 0;
 i8 = i9 + 16 | 0;
 i5 = i9 + 8 | 0;
 i1 = i9;
 i10 = i9 + 72 | 0;
 i4 = i9 + 48 | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i10 + 4 >> 2] = i6;
 HEAP32[i10 + 8 >> 2] = i3;
 HEAP32[i10 + 12 >> 2] = 0;
 HEAP32[i10 + 16 >> 2] = 0;
 HEAP32[i10 + 20 >> 2] = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i10;
 i1 = ___syscall_ret(___syscall102(102, i1 | 0) | 0) | 0;
 do if ((i1 | 0) < 0) {
  if ((HEAP32[(___errno_location() | 0) >> 2] | 0) == 22) {
   if (!(i6 & 526336)) break;
  } else if ((i6 & 526336 | 0) == 0 | (HEAP32[(___errno_location() | 0) >> 2] | 0) != 93) break;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i4 + 4 >> 2] = i6 & -526337;
  HEAP32[i4 + 8 >> 2] = i3;
  HEAP32[i4 + 12 >> 2] = 0;
  HEAP32[i4 + 16 >> 2] = 0;
  HEAP32[i4 + 20 >> 2] = 0;
  HEAP32[i5 >> 2] = 1;
  HEAP32[i5 + 4 >> 2] = i4;
  i1 = ___syscall_ret(___syscall102(102, i5 | 0) | 0) | 0;
  if ((i1 | 0) >= 0) {
   if (i6 & 524288 | 0) {
    HEAP32[i8 >> 2] = i1;
    HEAP32[i8 + 4 >> 2] = 2;
    HEAP32[i8 + 8 >> 2] = 1;
    ___syscall221(221, i8 | 0) | 0;
   }
   if (i6 & 2048) {
    HEAP32[i7 >> 2] = i1;
    HEAP32[i7 + 4 >> 2] = 4;
    HEAP32[i7 + 8 >> 2] = 2048;
    ___syscall221(221, i7 | 0) | 0;
   }
  }
 } while (0);
 STACKTOP = i9;
 return i1 | 0;
}

function _CheckIfSequencePointIsBreakpoint(i1, i8) {
 i1 = i1 | 0;
 i8 = i8 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 1040 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(1040);
 i10 = i12 + 1024 | 0;
 i9 = i12;
 i6 = (HEAP32[i1 >> 2] | 0) + 28 | 0;
 i6 = HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 24 >> 2] | 0;
 i7 = HEAP32[i6 + 24 + (i8 << 2) >> 2] | 0;
 i5 = i6 + 16 | 0;
 if (!(HEAP32[7999] | 0)) {
  i1 = 31980;
  i2 = 0;
  while (1) {
   i4 = HEAP32[i1 >> 2] | 0;
   if (!i4) break;
   L5 : do if (!(_strcmp(HEAP32[i4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0)) {
    i3 = HEAP32[i4 + 404 >> 2] | 0;
    i1 = 0;
    while (1) {
     if ((i1 | 0) >= (i3 | 0)) break L5;
     if ((HEAP32[i4 + 4 + (i1 << 2) >> 2] | 0) == (i8 | 0)) {
      i2 = 1;
      break;
     } else i1 = i1 + 1 | 0;
    }
   } while (0);
   i1 = i4 + 408 | 0;
  }
  if (!i2) i1 = 0; else i11 = 9;
 } else i11 = 9;
 if ((i11 | 0) == 9) {
  HEAP32[i9 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i9 + 4 >> 2] = i8;
  HEAP32[i9 + 8 >> 2] = i7;
  _log_f(1, 20722, i9);
  HEAP32[7998] = 1;
  HEAP32[7999] = 0;
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i10 >> 2] = i7;
  HEAP32[i10 + 4 >> 2] = i8;
  HEAP32[i10 + 8 >> 2] = i1;
  _snprintf(i9, 1024, 20755, i10) | 0;
  _invokeJsFunc(20825, 20836, i9 | 0) | 0;
  i1 = 1;
 }
 STACKTOP = i12;
 return i1 | 0;
}

function _Debugger_SetBreakPoint(i4, i5) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i7 = i8 + 16 | 0;
 i6 = i8 + 8 | 0;
 i2 = i8;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i5;
 _log_f(1, 20622, i2);
 i2 = 0;
 i1 = 31980;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) {
   i3 = 5;
   break;
  }
  if (!(_strcmp(HEAP32[i1 >> 2] | 0, i4) | 0)) {
   i2 = i1;
   break;
  }
  i2 = i1;
  i1 = i1 + 408 | 0;
 }
 if ((i3 | 0) == 5) {
  i3 = _malloc(412) | 0;
  i1 = _mallocForever((_strlen(i4) | 0) + 1 | 0) | 0;
  HEAP32[i3 >> 2] = i1;
  _strcpy(i1, i4) | 0;
  HEAP32[i3 + 404 >> 2] = 0;
  HEAP32[i3 + 408 >> 2] = 0;
  HEAP32[((HEAP32[7995] | 0) == 0 ? 31980 : i2 + 408 | 0) >> 2] = i3;
  i2 = i3;
 }
 i1 = i2 + 404 | 0;
 if ((HEAP32[i1 >> 2] | 0) < 100) {
  HEAP32[i6 >> 2] = i4;
  HEAP32[i6 + 4 >> 2] = i5;
  _log_f(1, 20661, i6);
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i6 + 1;
  HEAP32[i2 + 4 + (i6 << 2) >> 2] = i5;
  i1 = 31980;
 } else i1 = 31980;
 while (1) {
  i2 = HEAP32[i1 >> 2] | 0;
  if (!i2) break;
  i3 = i2 + 404 | 0;
  i1 = 0;
  while (1) {
   if ((i1 | 0) >= (HEAP32[i3 >> 2] | 0)) break;
   i6 = HEAP32[i2 + 4 + (i1 << 2) >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i7 + 4 >> 2] = i6;
   _log_f(1, 20690, i7);
   i1 = i1 + 1 | 0;
  }
  i1 = i2 + 408 | 0;
 }
 STACKTOP = i8;
 return 0;
}

function ___fputwc_unlocked(i1, i7) {
 i1 = i1 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i10;
 i8 = (___pthread_self_598() | 0) + 188 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP8[i7 + 74 >> 0] | 0) < 1) _fwide(i7, 1) | 0;
 HEAP32[i8 >> 2] = HEAP32[i7 + 120 >> 2];
 do if (i1 >>> 0 < 128) {
  i2 = i1 & 255;
  i3 = i1 & 255;
  if ((i3 | 0) != (HEAP8[i7 + 75 >> 0] | 0)) {
   i4 = i7 + 20 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if (i5 >>> 0 < (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
    HEAP32[i4 >> 2] = i5 + 1;
    HEAP8[i5 >> 0] = i2;
    i1 = i3;
    break;
   }
  }
  i1 = ___overflow(i7, i1) | 0;
  i6 = 13;
 } else {
  i3 = i7 + 20 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 + 4 | 0) >>> 0 < (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
   i2 = _wctomb(i2, i1) | 0;
   if ((i2 | 0) < 0) {
    i6 = 14;
    break;
   }
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i2;
   i6 = 13;
   break;
  } else {
   i2 = _wctomb(i4, i1) | 0;
   if ((i2 | 0) < 0) {
    i6 = 14;
    break;
   }
   if ((___fwritex(i4, i2, i7) | 0) >>> 0 < i2 >>> 0) {
    i6 = 14;
    break;
   } else {
    i6 = 13;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 13) if ((i1 | 0) == -1) i6 = 14;
 if ((i6 | 0) == 14) {
  HEAP32[i7 >> 2] = HEAP32[i7 >> 2] | 32;
  i1 = -1;
 }
 HEAP32[i8 >> 2] = i9;
 STACKTOP = i10;
 return i1 | 0;
}

function _GetPropertyInfo(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i5;
 i8 = _RuntimeType_DeRef(i1) | 0;
 i7 = i8 + 4 | 0;
 i4 = _MetaData_GetTableRow(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, i2) | 0;
 i3 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 192 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i1;
 i1 = i4 + 4 | 0;
 HEAP32[i3 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) | 0;
 i1 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = _MetaData_GetBlob(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, i5 + 4 | 0) | 0;
 _MetaData_DecodeSigEntry(i6) | 0;
 _MetaData_DecodeSigEntry(i6) | 0;
 i1 = i8 + 92 | 0;
 i1 = _Type_GetTypeFromSig(HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24, i6, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 0) | 0;
 if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
 HEAP32[i3 + 8 >> 2] = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 + 16 >> 2] = i2;
 HEAP32[i3 + 12 >> 2] = i4;
 STACKTOP = i5;
 return i3 | 0;
}

function _MetaData_GetFieldDefFromDefOrRef(i5, i2, i6, i7) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i10 + 8 | 0;
 i8 = i10;
 i9 = _MetaData_GetTableRow(i5, i2) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 L1 : do if (!i3) switch ((i2 >>> 24 & 255) << 24 >> 24) {
 case 4:
  {
   HEAP32[i9 >> 2] = i9;
   i1 = i9;
   break L1;
  }
 case 10:
  {
   i2 = i9 + 4 | 0;
   i1 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
   switch ((i1 >>> 24 & 255) << 24 >> 24) {
   case 27:
   case 1:
    break;
   default:
    {
     HEAP32[i8 >> 2] = i1;
     _Crash(17572, i8);
    }
   }
   i8 = i9 + 8 | 0;
   i1 = _FindFieldInType(_MetaData_GetTypeDefFromDefRefOrSpec(i5, i1, i6, i7) | 0, HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) | 0;
   if (((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) & -16777216 | 0) != 16777216) break L1;
   HEAP32[i9 >> 2] = i1;
   break L1;
  }
 default:
  {
   HEAP32[i4 >> 2] = i2;
   _Crash(18049, i4);
  }
 } else i1 = i3; while (0);
 STACKTOP = i10;
 return i1 | 0;
}

function _FindFieldInType(i4, i5) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i8;
 if (!(HEAP8[i4 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i4, 0, 0);
 i2 = i4 + 100 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 i3 = i4 + 104 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) {
   i1 = 6;
   break;
  }
  i6 = HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0;
  i9 = i6 + 12 | 0;
  if (!(_strcmp(HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24, i5) | 0)) {
   i1 = 7;
   break;
  } else i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 6) {
  i8 = i4 + 16 | 0;
  i8 = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
  i9 = i4 + 12 | 0;
  i9 = HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24;
  HEAP32[i7 >> 2] = i5;
  HEAP32[i7 + 4 >> 2] = i8;
  HEAP32[i7 + 8 >> 2] = i9;
  _Crash(18113, i7);
 } else if ((i1 | 0) == 7) {
  STACKTOP = i8;
  return i6 | 0;
 }
 return 0;
}

function _MetaData_GetTypeDefFromName(i2, i7, i9, i3, i10) {
 i2 = i2 | 0;
 i7 = i7 | 0;
 i9 = i9 | 0;
 i3 = i3 | 0;
 i10 = i10 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i11 = 0, i12 = 0, i13 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i11 = i12;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 i5 = (i3 | 0) == 0;
 i1 = 1;
 while (1) {
  if (i1 >>> 0 > i4 >>> 0) {
   i1 = 8;
   break;
  }
  i8 = _MetaData_GetTableRow(i2, i1 & 16777215 | 33554432) | 0;
  i13 = i8 + 120 | 0;
  if ((HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24 | 0) == (i3 | 0)) {
   i13 = i8 + 12 | 0;
   if (!(_strcmp(i9, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0)) {
    if (!i5) {
     i1 = 10;
     break;
    }
    i13 = i8 + 16 | 0;
    if (!(_strcmp(i7, HEAPU8[i13 >> 0] | HEAPU8[i13 + 1 >> 0] << 8 | HEAPU8[i13 + 2 >> 0] << 16 | HEAPU8[i13 + 3 >> 0] << 24) | 0)) {
     i1 = 10;
     break;
    }
   }
  }
  i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 8) if (!(i10 << 24 >> 24)) i6 = 0; else {
  HEAP32[i11 >> 2] = i7;
  HEAP32[i11 + 4 >> 2] = i9;
  _Crash(17793, i11);
 } else if ((i1 | 0) == 10) i6 = i8;
 STACKTOP = i12;
 return i6 | 0;
}

function _System_String_InternalTrim(i5, i1, i11) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i11 = i11 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i8 = i9 + 4 | 0;
 i9 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 L1 : do if (!(i6 & 1)) i7 = 0; else {
  i3 = i5 + 4 | 0;
  i1 = 0;
  while (1) {
   if (i1 >>> 0 >= i10 >>> 0) {
    i7 = 0;
    break L1;
   }
   i4 = HEAP16[i3 + (i1 << 1) >> 1] | 0;
   i2 = 0;
   while (1) {
    if (i2 >>> 0 >= i9 >>> 0) {
     i7 = i1;
     break L1;
    }
    if (i4 << 16 >> 16 == (HEAP16[i8 + (i2 << 1) >> 1] | 0)) break; else i2 = i2 + 1 | 0;
   }
   i1 = i1 + 1 | 0;
  }
 } while (0);
 i5 = i5 + 4 | 0;
 L11 : do if (!(i6 & 2)) i1 = i10; else {
  i1 = i10;
  L12 : while (1) {
   i2 = i1 + -1 | 0;
   if (i2 >>> 0 < i7 >>> 0) {
    i1 = i10;
    break L11;
   }
   i4 = HEAP16[i5 + (i2 << 1) >> 1] | 0;
   i3 = 0;
   while (1) {
    if (i3 >>> 0 >= i9 >>> 0) break L11;
    if (i4 << 16 >> 16 == (HEAP16[i8 + (i3 << 1) >> 1] | 0)) {
     i1 = i2;
     continue L12;
    } else i3 = i3 + 1 | 0;
   }
  }
 } while (0);
 i9 = i1 - i7 | 0;
 i10 = _CreateStringHeapObj(i9) | 0;
 _memcpy(i10 + 4 | 0, i5 + (i7 << 1) | 0, i9 << 1 | 0) | 0;
 HEAP32[i11 >> 2] = i10;
 return 0;
}

function _GetNumProperties(i1, i7) {
 i1 = i1 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0;
 i4 = i1 + 4 | 0;
 i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
 HEAP32[i7 >> 2] = 0;
 i5 = HEAP32[i4 + 116 >> 2] | 0;
 i6 = HEAP32[i4 + 108 >> 2] | 0;
 i3 = i1 + 80 | 0;
 i1 = 1;
 while (1) {
  if (i1 >>> 0 > i6 >>> 0) {
   i1 = 0;
   break;
  }
  i2 = _MetaData_GetTableRow(i4, i1 & 16777215 | 352321536) | 0;
  if ((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24 | 0) == (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24 | 0)) {
   i8 = 4;
   break;
  }
  i1 = i1 + 1 | 0;
 }
 do if ((i8 | 0) == 4) {
  i8 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) & 16777215;
  if (i1 >>> 0 < i6 >>> 0) {
   i1 = (_MetaData_GetTableRow(i4, i1 + 1 & 16777215 | 352321536) | 0) + 4 | 0;
   i1 = (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) & 16777215;
   break;
  } else {
   i1 = i5 + 1 | 0;
   break;
  }
 } while (0);
 return i1 - (HEAP32[i7 >> 2] | 0) | 0;
}

function _CLIFile_GetMetaDataForAssembly(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(144);
 i7 = i8 + 8 | 0;
 i4 = i8;
 i6 = i8 + 16 | 0;
 i2 = 0;
 while (1) {
  if ((i2 | 0) >= 2) break;
  if (!(_strcmp(i1, HEAP32[1088 + (i2 << 2) >> 2] | 0) | 0)) {
   i1 = 12799;
   break;
  } else i2 = i2 + 1 | 0;
 }
 i2 = (_strncmp(12806, i1, 7) | 0) == 0;
 i2 = i2 ? 12799 : i1;
 i1 = _CLIFile_GetLoadedAssemblies() | 0;
 while (1) {
  if (!i1) {
   i1 = 9;
   break;
  }
  i3 = (HEAP32[i1 >> 2] | 0) + 20 | 0;
  i9 = (_MetaData_GetTableRow(HEAP32[i3 >> 2] | 0, 536870913) | 0) + 20 | 0;
  if (!(_strcmp(i2, HEAPU8[i9 >> 0] | HEAPU8[i9 + 1 >> 0] << 8 | HEAPU8[i9 + 2 >> 0] << 16 | HEAPU8[i9 + 3 >> 0] << 24) | 0)) {
   i1 = 8;
   break;
  }
  i1 = HEAP32[i1 + 4 >> 2] | 0;
 }
 do if ((i1 | 0) == 8) i5 = HEAP32[i3 >> 2] | 0; else if ((i1 | 0) == 9) {
  HEAP32[i4 >> 2] = i2;
  _sprintf(i6, 12814, i4) | 0;
  i1 = _CLIFile_Load(i6) | 0;
  if (!i1) {
   HEAP32[i7 >> 2] = i6;
   _Crash(12821, i7);
  } else {
   i5 = HEAP32[i1 + 20 >> 2] | 0;
   break;
  }
 } while (0);
 STACKTOP = i8;
 return i5 | 0;
}

function _CLIFile_Load(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i6 = i7 + 24 | 0;
 i5 = i7 + 16 | 0;
 i3 = i7 + 8 | 0;
 i2 = i7;
 i1 = _LoadFileFromDisk(i4) | 0;
 if (!i1) {
  HEAP32[i2 >> 2] = i4;
  _Crash(12924, i2);
 }
 HEAP32[i3 >> 2] = i4;
 _log_f(1, 12945, i3);
 i2 = _LoadPEFile(i1) | 0;
 i3 = _mallocForever((_strlen(i4) | 0) + 1 | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 _strcpy(i3, i4) | 0;
 i3 = _mallocForever((_strlen(i4) | 0) + 1 | 0) | 0;
 i1 = _strlen(i4) | 0;
 i8 = i1 + -3 | 0;
 _strncpy(i3, i4, i8) | 0;
 i4 = i3 + i8 | 0;
 HEAP8[i4 >> 0] = HEAP8[12964] | 0;
 HEAP8[i4 + 1 >> 0] = HEAP8[12965] | 0;
 HEAP8[i4 + 2 >> 0] = HEAP8[12966] | 0;
 HEAP8[i3 + i1 >> 0] = 0;
 i1 = _LoadFileFromDisk(i3) | 0;
 if (!i1) {
  HEAP32[i5 >> 2] = i3;
  _log_f(1, 12968, i5);
 } else {
  HEAP32[i6 >> 2] = i3;
  _log_f(1, 13e3, i6);
  HEAP32[i2 + 4 >> 2] = i3;
  i8 = _LoadDebugFile(i1) | 0;
  HEAP32[HEAP32[i2 + 20 >> 2] >> 2] = i8;
 }
 i8 = _mallocForever(8) | 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = HEAP32[7982];
 HEAP32[7982] = i8;
 STACKTOP = i7;
 return i2 | 0;
}

function _System_RuntimeType_GetGenericArguments(i2, i1, i6) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i8;
 i5 = _RuntimeType_DeRef(i2) | 0;
 i1 = i5 + 88 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 L1 : do if (!i1) i3 = 0; else {
  i1 = i1 + 84 | 0;
  i2 = 0;
  while (1) {
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   if (!i1) {
    i3 = i2;
    break L1;
   }
   if ((HEAP32[i1 >> 2] | 0) == (i5 | 0)) i2 = HEAP32[i1 + 8 >> 2] | 0;
   i1 = i1 + 4 | 0;
  }
 } while (0);
 i4 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 188 >> 2] | 0, i3) | 0;
 HEAP32[i6 >> 2] = i4;
 i2 = i5 + 92 | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  HEAP32[i7 >> 2] = _Type_GetTypeObject(HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + (i1 << 2) >> 2] | 0) | 0;
  _SystemArray_StoreElement(i4, i1, i7);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i8;
 return 0;
}

function ___stpncpy(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i5 = i3;
 L1 : do if (!((i5 ^ i2) & 3)) {
  i4 = (i1 | 0) != 0;
  if (i4 & (i5 & 3 | 0) != 0) do {
   i5 = HEAP8[i3 >> 0] | 0;
   HEAP8[i2 >> 0] = i5;
   if (!(i5 << 24 >> 24)) break L1;
   i1 = i1 + -1 | 0;
   i3 = i3 + 1 | 0;
   i2 = i2 + 1 | 0;
   i4 = (i1 | 0) != 0;
  } while (i4 & (i3 & 3 | 0) != 0);
  if (i4) {
   if (HEAP8[i3 >> 0] | 0) {
    L10 : do if (i1 >>> 0 > 3) {
     i4 = i3;
     while (1) {
      i3 = HEAP32[i4 >> 2] | 0;
      if ((i3 & -2139062144 ^ -2139062144) & i3 + -16843009 | 0) {
       i3 = i4;
       break L10;
      }
      HEAP32[i2 >> 2] = i3;
      i1 = i1 + -4 | 0;
      i3 = i4 + 4 | 0;
      i2 = i2 + 4 | 0;
      if (i1 >>> 0 > 3) i4 = i3; else break;
     }
    } while (0);
    i6 = 11;
   }
  } else i1 = 0;
 } else i6 = 11; while (0);
 L15 : do if ((i6 | 0) == 11) if (!i1) i1 = 0; else while (1) {
  i6 = HEAP8[i3 >> 0] | 0;
  HEAP8[i2 >> 0] = i6;
  if (!(i6 << 24 >> 24)) break L15;
  i1 = i1 + -1 | 0;
  i2 = i2 + 1 | 0;
  if (!i1) {
   i1 = 0;
   break;
  } else i3 = i3 + 1 | 0;
 } while (0);
 _memset(i2 | 0, 0, i1 | 0) | 0;
 return i2 | 0;
}

function _TreeRemove(i7, i1) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i8 = HEAP32[7988] | 0;
 do if ((i8 | 0) == (i7 | 0)) i1 = i7; else {
  if ((i7 | 0) != (i1 | 0)) {
   i8 = i7 + ((i7 >>> 0 < i1 >>> 0 & 1) << 2) | 0;
   HEAP32[i8 >> 2] = _TreeRemove(HEAP32[i8 >> 2] | 0, i1) | 0;
   i1 = i7;
   break;
  }
  i2 = HEAP32[i7 >> 2] | 0;
  i1 = (i2 | 0) == (i8 | 0);
  i5 = i2;
  if (!i1) {
   i6 = i7 + 4 | 0;
   if ((HEAP32[i6 >> 2] | 0) != (i8 | 0)) {
    i4 = i2;
    i1 = i2;
    while (1) {
     i2 = i1 + 4 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (i8 | 0)) break; else {
      i4 = i2;
      i1 = i3;
     }
    }
    i9 = HEAP32[i1 >> 2] | 0;
    i10 = i1 + 8 | 0;
    i3 = HEAP8[i10 >> 0] | 0;
    HEAP32[i1 >> 2] = i5;
    HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
    i8 = i7 + 8 | 0;
    HEAP8[i10 >> 0] = HEAP8[i8 >> 0] | 0;
    HEAP32[i4 >> 2] = i7;
    HEAP32[i7 >> 2] = i9;
    HEAP32[i6 >> 2] = HEAP32[7988];
    HEAP8[i8 >> 0] = i3;
    HEAP32[i1 >> 2] = _TreeRemove(HEAP32[i1 >> 2] | 0, i7) | 0;
    break;
   }
  }
  i1 = HEAP32[i7 + ((i1 & 1) << 2) >> 2] | 0;
 } while (0);
 return _TreeBalance(i1) | 0;
}

function _memchr(i2, i5, i1) {
 i2 = i2 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i7 = 0;
 i6 = i5 & 255;
 i3 = (i1 | 0) != 0;
 L1 : do if (i3 & (i2 & 3 | 0) != 0) {
  i4 = i5 & 255;
  while (1) {
   if ((HEAP8[i2 >> 0] | 0) == i4 << 24 >> 24) {
    i7 = 6;
    break L1;
   }
   i2 = i2 + 1 | 0;
   i1 = i1 + -1 | 0;
   i3 = (i1 | 0) != 0;
   if (!(i3 & (i2 & 3 | 0) != 0)) {
    i7 = 5;
    break;
   }
  }
 } else i7 = 5; while (0);
 if ((i7 | 0) == 5) if (i3) i7 = 6; else i1 = 0;
 L8 : do if ((i7 | 0) == 6) {
  i4 = i5 & 255;
  if ((HEAP8[i2 >> 0] | 0) != i4 << 24 >> 24) {
   i3 = Math_imul(i6, 16843009) | 0;
   L11 : do if (i1 >>> 0 > 3) while (1) {
    i6 = HEAP32[i2 >> 2] ^ i3;
    if ((i6 & -2139062144 ^ -2139062144) & i6 + -16843009 | 0) break;
    i2 = i2 + 4 | 0;
    i1 = i1 + -4 | 0;
    if (i1 >>> 0 <= 3) {
     i7 = 11;
     break L11;
    }
   } else i7 = 11; while (0);
   if ((i7 | 0) == 11) if (!i1) {
    i1 = 0;
    break;
   }
   while (1) {
    if ((HEAP8[i2 >> 0] | 0) == i4 << 24 >> 24) break L8;
    i2 = i2 + 1 | 0;
    i1 = i1 + -1 | 0;
    if (!i1) {
     i1 = 0;
     break;
    }
   }
  }
 } while (0);
 return (i1 | 0 ? i2 : 0) | 0;
}

function _main(i7, i3) {
 i7 = i7 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i9 = i10 + 8 | 0;
 i4 = i10;
 if ((i7 | 0) < 2) _ShowUsage(); else i6 = 1;
 L3 : while (1) {
  i8 = i3 + (i6 << 2) | 0;
  if (i6 >>> 0 >= i7 >>> 0) break;
  i1 = HEAP32[i8 >> 2] | 0;
  if ((HEAP8[i1 >> 0] | 0) == 45) i2 = 1; else break;
  L6 : while (1) {
   switch (HEAP8[i1 + i2 >> 0] | 0) {
   case 0:
    break L6;
   case 118:
    break;
   default:
    {
     i5 = 7;
     break L3;
    }
   }
   HEAP32[7993] = (HEAP32[7993] | 0) + 1;
   i2 = i2 + 1 | 0;
  }
  i6 = i6 + 1 | 0;
 }
 if ((i5 | 0) == 7) {
  HEAP32[i4 >> 2] = HEAP8[i1 + 1 >> 0];
  _Crash(13188, i4);
 }
 _JIT_Execute_Init();
 _MetaData_Init();
 _Type_Init();
 _Heap_Init();
 _Finalizer_Init();
 _Diag_Init();
 i1 = HEAP32[i8 >> 2] | 0;
 i2 = _CLIFile_Load(i1) | 0;
 if (!(HEAP32[i2 + 16 >> 2] | 0)) {
  HEAP32[i9 >> 2] = i1;
  _printf(13210, i9) | 0;
  i1 = 0;
 } else i1 = _CLIFile_Execute(i2, i7 - i6 | 0, i8) | 0;
 _Diag_Print();
 STACKTOP = i10;
 return i1 | 0;
}

function _System_Array_Internal_GetValue(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0;
 i1 = HEAP32[i1 >> 2] | 0;
 i3 = (_Heap_GetType(i2) | 0) + 96 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 i4 = i3 + 64 | 0;
 i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
 i1 = i2 + 4 + (Math_imul(i4, i1) | 0) | 0;
 if (!(HEAP8[i3 + 34 >> 0] | 0)) HEAP32[i5 >> 2] = HEAP32[i1 >> 2]; else {
  i2 = i3 + 88 | 0;
  if ((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 184 >> 2] | 0)) if (!(HEAP32[i1 >> 2] | 0)) i1 = 0; else {
   i3 = i3 + 92 | 0;
   i3 = _Heap_AllocType(HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) >> 2] | 0) | 0;
   _memcpy(i3 | 0, i1 + 4 | 0, i4 + -4 | 0) | 0;
   i1 = i3;
  } else {
   i3 = _Heap_AllocType(i3) | 0;
   _memcpy(i3 | 0, i1 | 0, i4 | 0) | 0;
   i1 = i3;
  }
  HEAP32[i5 >> 2] = i1;
 }
 return 0;
}

function _GetMethodDefs() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = HEAP32[(HEAP32[8003] | 0) + 4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
 if (!(HEAP8[i1 + 33 >> 0] | 0)) {
  i5 = i1 + 160 | 0;
  i5 = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + -1 | 0;
 } else i5 = HEAP32[i6 + 48 >> 2] & 16777215 | 100663296;
 i2 = i1 + 28 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 while (1) {
  if (i2 >>> 0 > i5 >>> 0) break;
  i3 = _MetaData_GetTableRow(i6, i2) | 0;
  i4 = i3 + 16 | 0;
  i1 = 0;
  while (1) {
   if (i1 >>> 0 >= 13) break;
   if (!(_strcmp(HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, HEAP32[4560 + (i1 << 2) >> 2] | 0) | 0)) {
    i7 = 9;
    break;
   }
   i1 = i1 + 1 | 0;
  }
  if ((i7 | 0) == 9) {
   i7 = 0;
   HEAP32[32020 + (i1 << 2) >> 2] = i3;
  }
  i2 = i2 + 1 | 0;
 }
 HEAP8[40916] = 1;
 return;
}

function _System_Net_Dns_Internal_GetHostEnt(i1, i2, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(272);
 i3 = i7;
 i4 = i7 + 8 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = _SystemString_GetString(HEAP32[i2 >> 2] | 0, i3) | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 i1 = 0;
 while (1) {
  if (!(i1 >>> 0 < 255 & i1 >>> 0 < i3 >>> 0)) break;
  HEAP8[i4 + i1 >> 0] = HEAP16[i2 + (i1 << 1) >> 1];
  i1 = i1 + 1 | 0;
 }
 HEAP8[i4 + i1 >> 0] = 0;
 i4 = _gethostbyname(i4 | 0) | 0;
 HEAP32[i5 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i4 >> 2] | 0) | 0;
 i4 = i4 + 16 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i1 = 0;
 while (1) if (!(HEAP32[i2 + (i1 << 2) >> 2] | 0)) break; else i1 = i1 + 1 | 0;
 i3 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 128 >> 2] | 0, i1) | 0;
 HEAP32[i6 >> 2] = i3;
 i1 = 0;
 while (1) {
  i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (!i2) break;
  _SystemArray_StoreElement(i3, i1, i2);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i7;
 return 0;
}

function _vsnprintf(i2, i1, i8, i9) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i10 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(128);
 i3 = i11 + 124 | 0;
 i10 = i11;
 i4 = i10;
 i5 = 6160;
 i6 = i4 + 124 | 0;
 do {
  HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  i4 = i4 + 4 | 0;
  i5 = i5 + 4 | 0;
 } while ((i4 | 0) < (i6 | 0));
 if ((i1 + -1 | 0) >>> 0 > 2147483646) if (!i1) {
  i2 = i3;
  i1 = 1;
  i7 = 4;
 } else {
  HEAP32[(___errno_location() | 0) >> 2] = 75;
  i1 = -1;
 } else i7 = 4;
 if ((i7 | 0) == 4) {
  i7 = -2 - i2 | 0;
  i7 = i1 >>> 0 > i7 >>> 0 ? i7 : i1;
  HEAP32[i10 + 48 >> 2] = i7;
  i3 = i10 + 20 | 0;
  HEAP32[i3 >> 2] = i2;
  HEAP32[i10 + 44 >> 2] = i2;
  i1 = i2 + i7 | 0;
  i2 = i10 + 16 | 0;
  HEAP32[i2 >> 2] = i1;
  HEAP32[i10 + 28 >> 2] = i1;
  i1 = _vfprintf(i10, i8, i9) | 0;
  if (i7) {
   i10 = HEAP32[i3 >> 2] | 0;
   HEAP8[i10 + (((i10 | 0) == (HEAP32[i2 >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 STACKTOP = i11;
 return i1 | 0;
}

function ___fwritex(i7, i2, i6) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i8 = 0;
 i1 = i6 + 16 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if (!i3) if (!(___towrite(i6) | 0)) {
  i3 = HEAP32[i1 >> 2] | 0;
  i4 = 5;
 } else i1 = 0; else i4 = 5;
 L5 : do if ((i4 | 0) == 5) {
  i8 = i6 + 20 | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  i1 = i5;
  if ((i3 - i5 | 0) >>> 0 < i2 >>> 0) {
   i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 255](i6, i7, i2) | 0;
   break;
  }
  L10 : do if ((HEAP8[i6 + 75 >> 0] | 0) > -1) {
   i5 = i2;
   while (1) {
    if (!i5) {
     i4 = 0;
     i3 = i7;
     break L10;
    }
    i3 = i5 + -1 | 0;
    if ((HEAP8[i7 + i3 >> 0] | 0) == 10) break; else i5 = i3;
   }
   i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 255](i6, i7, i5) | 0;
   if (i1 >>> 0 < i5 >>> 0) break L5;
   i4 = i5;
   i3 = i7 + i5 | 0;
   i2 = i2 - i5 | 0;
   i1 = HEAP32[i8 >> 2] | 0;
  } else {
   i4 = 0;
   i3 = i7;
  } while (0);
  _memcpy(i1 | 0, i3 | 0, i2 | 0) | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i2;
  i1 = i4 + i2 | 0;
 } while (0);
 return i1 | 0;
}

function _MetaData_GetTypeDefFromMethodDef(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i2 = i4 + 4 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 i3 = i4 + 52 | 0;
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 while (1) {
  if (!i1) {
   i1 = 4;
   break;
  }
  i5 = _MetaData_GetTableRow(i2, i1 & 16777215 | 33554432) | 0;
  i8 = i5 + 28 | 0;
  if ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) >>> 0 > (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) >>> 0) i1 = i1 + -1 | 0; else {
   i1 = 5;
   break;
  }
 }
 if ((i1 | 0) == 4) {
  i8 = i4 + 16 | 0;
  HEAP32[i6 >> 2] = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
  _Crash(17915, i6);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i7;
  return i5 | 0;
 }
 return 0;
}

function _MetaData_GetTypeDefFromFieldDef(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i2 = i4 + 4 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 i3 = i4 + 36 | 0;
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 while (1) {
  if (!i1) {
   i1 = 4;
   break;
  }
  i5 = _MetaData_GetTableRow(i2, i1 & 16777215 | 33554432) | 0;
  i8 = i5 + 24 | 0;
  if ((HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24) >>> 0 > (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) >>> 0) i1 = i1 + -1 | 0; else {
   i1 = 5;
   break;
  }
 }
 if ((i1 | 0) == 4) {
  i8 = i4 + 12 | 0;
  HEAP32[i6 >> 2] = HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24;
  _Crash(17983, i6);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i7;
  return i5 | 0;
 }
 return 0;
}

function _wcrtomb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 do if (!i1) i1 = 1; else {
  if (i2 >>> 0 < 128) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  }
  if (!(HEAP32[HEAP32[(___pthread_self_447() | 0) + 188 >> 2] >> 2] | 0)) if ((i2 & -128 | 0) == 57216) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  } else {
   HEAP32[(___errno_location() | 0) >> 2] = 84;
   i1 = -1;
   break;
  }
  if (i2 >>> 0 < 2048) {
   HEAP8[i1 >> 0] = i2 >>> 6 | 192;
   HEAP8[i1 + 1 >> 0] = i2 & 63 | 128;
   i1 = 2;
   break;
  }
  if (i2 >>> 0 < 55296 | (i2 & -8192 | 0) == 57344) {
   HEAP8[i1 >> 0] = i2 >>> 12 | 224;
   HEAP8[i1 + 1 >> 0] = i2 >>> 6 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i2 & 63 | 128;
   i1 = 3;
   break;
  }
  if ((i2 + -65536 | 0) >>> 0 < 1048576) {
   HEAP8[i1 >> 0] = i2 >>> 18 | 240;
   HEAP8[i1 + 1 >> 0] = i2 >>> 12 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i2 >>> 6 & 63 | 128;
   HEAP8[i1 + 3 >> 0] = i2 & 63 | 128;
   i1 = 4;
   break;
  } else {
   HEAP32[(___errno_location() | 0) >> 2] = 84;
   i1 = -1;
   break;
  }
 } while (0);
 return i1 | 0;
}

function _System_Type_GetProperty(i7, i1, i8) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(272);
 i6 = i9 + 8 | 0;
 i3 = i9;
 i4 = _RuntimeType_DeRef(i7) | 0;
 _DotNetStringToCString(i6, HEAP32[i1 >> 2] | 0);
 HEAP32[i3 >> 2] = 0;
 i2 = _GetNumProperties(i4, i3) | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 i4 = i4 + 4 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) {
   i1 = 5;
   break;
  }
  i5 = i3 + i1 & 16777215 | 385875968;
  i10 = (_MetaData_GetTableRow(HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, i5) | 0) + 4 | 0;
  if (!(_strcmp(HEAPU8[i10 >> 0] | HEAPU8[i10 + 1 >> 0] << 8 | HEAPU8[i10 + 2 >> 0] << 16 | HEAPU8[i10 + 3 >> 0] << 24, i6) | 0)) {
   i1 = 4;
   break;
  } else i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 4) HEAP32[i8 >> 2] = _GetPropertyInfo(i7, i5) | 0; else if ((i1 | 0) == 5) HEAP32[i8 >> 2] = 0;
 STACKTOP = i9;
 return 0;
}

function _Reflection_MethodInfo_MakeGenericMethod(i6, i1, i7) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i3 + 4 | 0;
 i4 = HEAP32[i6 + 12 >> 2] | 0;
 i5 = _malloc(i2 << 2) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP32[i5 + (i1 << 2) >> 2] = _RuntimeType_DeRef(HEAP32[i3 + (i1 << 2) >> 2] | 0) | 0;
  i1 = i1 + 1 | 0;
 }
 i3 = i4 + 48 | 0;
 i4 = _Generics_GetMethodDefFromCoreMethod(i4, HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, i2, i5) | 0;
 _free(i5);
 i5 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 196 >> 2] | 0) | 0;
 HEAP32[i5 >> 2] = i6;
 i6 = i4 + 16 | 0;
 HEAP32[i5 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) | 0;
 i6 = i4 + 14 | 0;
 HEAP32[i5 + 8 >> 2] = (HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8) & 65535;
 HEAP32[i5 + 12 >> 2] = i4;
 HEAP32[i7 >> 2] = i5;
 return 0;
}

function _sift(i3, i10, i7, i1, i8) {
 i3 = i3 | 0;
 i10 = i10 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(240);
 i11 = i12;
 HEAP32[i11 >> 2] = i3;
 L1 : do if ((i1 | 0) > 1) {
  i9 = 0 - i10 | 0;
  i2 = i3;
  i6 = i1;
  i1 = 1;
  while (1) {
   i4 = i2 + i9 | 0;
   i5 = i6 + -2 | 0;
   i2 = i4 + (0 - (HEAP32[i8 + (i5 << 2) >> 2] | 0)) | 0;
   if ((FUNCTION_TABLE_iii[i7 & 31](i3, i2) | 0) > -1) if ((FUNCTION_TABLE_iii[i7 & 31](i3, i4) | 0) > -1) break L1;
   i3 = i1 + 1 | 0;
   i1 = i11 + (i1 << 2) | 0;
   if ((FUNCTION_TABLE_iii[i7 & 31](i2, i4) | 0) > -1) {
    HEAP32[i1 >> 2] = i2;
    i1 = i6 + -1 | 0;
   } else {
    HEAP32[i1 >> 2] = i4;
    i2 = i4;
    i1 = i5;
   }
   if ((i1 | 0) <= 1) {
    i1 = i3;
    break L1;
   }
   i6 = i1;
   i1 = i3;
   i3 = HEAP32[i11 >> 2] | 0;
  }
 } else i1 = 1; while (0);
 _cycle(i10, i11, i1);
 STACKTOP = i12;
 return;
}

function _memset(i5, i6, i4) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i7 = 0;
 i3 = i5 + i4 | 0;
 i6 = i6 & 255;
 if ((i4 | 0) >= 67) {
  while (i5 & 3) {
   HEAP8[i5 >> 0] = i6;
   i5 = i5 + 1 | 0;
  }
  i1 = i3 & -4 | 0;
  i2 = i1 - 64 | 0;
  i7 = i6 | i6 << 8 | i6 << 16 | i6 << 24;
  while ((i5 | 0) <= (i2 | 0)) {
   HEAP32[i5 >> 2] = i7;
   HEAP32[i5 + 4 >> 2] = i7;
   HEAP32[i5 + 8 >> 2] = i7;
   HEAP32[i5 + 12 >> 2] = i7;
   HEAP32[i5 + 16 >> 2] = i7;
   HEAP32[i5 + 20 >> 2] = i7;
   HEAP32[i5 + 24 >> 2] = i7;
   HEAP32[i5 + 28 >> 2] = i7;
   HEAP32[i5 + 32 >> 2] = i7;
   HEAP32[i5 + 36 >> 2] = i7;
   HEAP32[i5 + 40 >> 2] = i7;
   HEAP32[i5 + 44 >> 2] = i7;
   HEAP32[i5 + 48 >> 2] = i7;
   HEAP32[i5 + 52 >> 2] = i7;
   HEAP32[i5 + 56 >> 2] = i7;
   HEAP32[i5 + 60 >> 2] = i7;
   i5 = i5 + 64 | 0;
  }
  while ((i5 | 0) < (i1 | 0)) {
   HEAP32[i5 >> 2] = i7;
   i5 = i5 + 4 | 0;
  }
 }
 while ((i5 | 0) < (i3 | 0)) {
  HEAP8[i5 >> 0] = i6;
  i5 = i5 + 1 | 0;
 }
 return i3 - i4 | 0;
}

function _System_String_InternalIndexOfStr(i7, i1, i10) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i10 = i10 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i2 = (i9 | 0) == 0;
 L1 : do if (!i5) i1 = (i2 ^ 1) << 31 >> 31; else {
  i1 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
  if (i2) {
   i1 = (i5 | 0) > (i3 | 0) | i1 ? i3 : i5 + -1 | 0;
   break;
  }
  i12 = (i3 | 0) == (i5 | 0) & (i1 ^ 1);
  i5 = i4 + (((i4 | 0) > 0 & i12) << 31 >> 31) | 0;
  i12 = i3 + (i12 << 31 >> 31) | 0;
  i4 = i1 ? 1 : -1;
  i11 = i12 + 1 | 0;
  i5 = i1 ? i11 + i5 - i9 | 0 : i12 - i5 | 0;
  i6 = i9 << 1;
  i3 = i7 + 4 | 0;
  i2 = i8 + 4 | 0;
  i1 = i1 ? i12 : i11 - i9 | 0;
  while (1) {
   if ((i1 | 0) == (i5 | 0)) {
    i1 = -1;
    break L1;
   }
   if (!(_memcmp(i3 + (i1 << 1) | 0, i2, i6) | 0)) break L1;
   i1 = i1 + i4 | 0;
  }
 } while (0);
 HEAP32[i10 >> 2] = i1;
 return 0;
}

function _System_Type_GetMethod(i5, i1, i6) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i4 = i7;
 i2 = _RuntimeType_DeRef(i5) | 0;
 _DotNetStringToCString(i4, HEAP32[i1 >> 2] | 0);
 i1 = i2 + 112 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 i2 = i2 + 116 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i1 >>> 0) {
   i1 = 6;
   break;
  }
  i8 = (HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + (i3 << 2) >> 2] | 0) + 16 | 0;
  if (!(_strcmp(HEAPU8[i8 >> 0] | HEAPU8[i8 + 1 >> 0] << 8 | HEAPU8[i8 + 2 >> 0] << 16 | HEAPU8[i8 + 3 >> 0] << 24, i4) | 0)) {
   i1 = 4;
   break;
  }
  i3 = i3 + 1 | 0;
 }
 if ((i1 | 0) == 4) HEAP32[i6 >> 2] = _GetMethodInfo(i5, i3) | 0; else if ((i1 | 0) == 6) HEAP32[i6 >> 2] = 0;
 STACKTOP = i7;
 return 0;
}

function ___shgetc(i5) {
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0;
 i2 = i5 + 104 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i1) i6 = 3; else if ((HEAP32[i5 + 108 >> 2] | 0) < (i1 | 0)) i6 = 3; else i6 = 4;
 if ((i6 | 0) == 3) {
  i1 = ___uflow(i5) | 0;
  if ((i1 | 0) < 0) i6 = 4; else {
   i3 = HEAP32[i2 >> 2] | 0;
   i2 = i5 + 8 | 0;
   if (!i3) {
    i3 = HEAP32[i2 >> 2] | 0;
    i2 = i3;
   } else {
    i7 = HEAP32[i2 >> 2] | 0;
    i4 = HEAP32[i5 + 4 >> 2] | 0;
    i2 = i3 - (HEAP32[i5 + 108 >> 2] | 0) | 0;
    i3 = i7;
    if ((i7 - i4 | 0) < (i2 | 0)) i2 = i3; else i2 = i4 + (i2 + -1) | 0;
   }
   HEAP32[i5 + 100 >> 2] = i2;
   i2 = i5 + 4 | 0;
   if (!i3) i2 = HEAP32[i2 >> 2] | 0; else {
    i2 = HEAP32[i2 >> 2] | 0;
    i7 = i5 + 108 | 0;
    HEAP32[i7 >> 2] = i3 + 1 - i2 + (HEAP32[i7 >> 2] | 0);
   }
   i2 = i2 + -1 | 0;
   if ((i1 | 0) != (HEAPU8[i2 >> 0] | 0 | 0)) HEAP8[i2 >> 0] = i1;
  }
 }
 if ((i6 | 0) == 4) {
  HEAP32[i5 + 100 >> 2] = 0;
  i1 = -1;
 }
 return i1 | 0;
}

function _MetaData_GetConstant(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6 + 8 | 0;
 i3 = i6;
 if ((i2 & -16777216 | 0) != 67108864) {
  HEAP32[i3 >> 2] = i2;
  _Crash(17361, i3);
 }
 i1 = (_MetaData_GetTableRow(i1, i2) | 0) + 40 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 i2 = HEAP8[i1 >> 0] | 0;
 if (i2 << 24 >> 24 == 8) {
  i5 = i1 + 8 | 0;
  i5 = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 1 | 0;
  i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
  HEAP8[i4 >> 0] = i5;
  HEAP8[i4 + 1 >> 0] = i5 >> 8;
  HEAP8[i4 + 2 >> 0] = i5 >> 16;
  HEAP8[i4 + 3 >> 0] = i5 >> 24;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i5 >> 2] = i2 & 255;
  _Crash(17410, i5);
 }
}

function _wcstox_776(i8, i9, i5, i6, i7) {
 i8 = i8 | 0;
 i9 = i9 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(192);
 i10 = i13;
 i11 = i10 + 8 | 0;
 i12 = i10 + 4 | 0;
 i2 = i13 + 128 + 4 | 0;
 i1 = i10 + 44 | 0;
 i3 = i10;
 i4 = i3 + 124 | 0;
 do {
  HEAP32[i3 >> 2] = 0;
  i3 = i3 + 4 | 0;
 } while ((i3 | 0) < (i4 | 0));
 HEAP32[i1 >> 2] = i2;
 HEAP32[i10 + 48 >> 2] = 60;
 HEAP32[i10 + 76 >> 2] = -1;
 HEAP32[i10 + 32 >> 2] = 158;
 i2 = i8;
 while (1) if (!(_iswspace(HEAP32[i2 >> 2] | 0) | 0)) break; else i2 = i2 + 4 | 0;
 HEAP32[i10 + 84 >> 2] = i2;
 ___shlim(i10, 0);
 i1 = ___intscan(i10, i5, 1, i6, i7) | 0;
 if (i9 | 0) {
  i12 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i11 >> 2] | 0) + (HEAP32[i10 + 108 >> 2] | 0) | 0;
  HEAP32[i9 >> 2] = (i12 | 0) == 0 ? i8 : i2 + (i12 << 2) | 0;
 }
 STACKTOP = i13;
 return i1 | 0;
}

function _System_Type_GetInterfaces(i2, i1, i4) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i2 = _RuntimeType_DeRef(i2) | 0;
 i3 = _Type_GetArrayTypeDef(HEAP32[(HEAP32[8003] | 0) + 108 >> 2] | 0, 0, 0) | 0;
 i5 = i2 + 72 | 0;
 i3 = _SystemArray_NewVector(i3, HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) | 0;
 HEAP32[i4 >> 2] = i3;
 i2 = i2 + 76 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) >>> 0) break;
  HEAP32[i6 >> 2] = _Type_GetTypeObject(HEAP32[(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + (i1 * 12 | 0) >> 2] | 0) | 0;
  _SystemArray_StoreElement(i3, i1, i6);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i7;
 return 0;
}

function _wcstox(i7, i8, i6) {
 i7 = i7 | 0;
 i8 = i8 | 0;
 i6 = i6 | 0;
 var d1 = 0.0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(192);
 i9 = i12;
 i10 = i9 + 8 | 0;
 i11 = i9 + 4 | 0;
 i2 = i12 + 128 + 4 | 0;
 i3 = i9 + 44 | 0;
 i4 = i9;
 i5 = i4 + 124 | 0;
 do {
  HEAP32[i4 >> 2] = 0;
  i4 = i4 + 4 | 0;
 } while ((i4 | 0) < (i5 | 0));
 HEAP32[i3 >> 2] = i2;
 HEAP32[i9 + 48 >> 2] = 60;
 HEAP32[i9 + 76 >> 2] = -1;
 HEAP32[i9 + 32 >> 2] = 157;
 i2 = i7;
 while (1) if (!(_iswspace(HEAP32[i2 >> 2] | 0) | 0)) break; else i2 = i2 + 4 | 0;
 HEAP32[i9 + 84 >> 2] = i2;
 ___shlim(i9, 0);
 d1 = +___floatscan(i9, i6, 1);
 if (i8 | 0) {
  i11 = (HEAP32[i11 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 + 108 >> 2] | 0) | 0;
  HEAP32[i8 >> 2] = (i11 | 0) == 0 ? i7 : i2 + (i11 << 2) | 0;
 }
 STACKTOP = i12;
 return +d1;
}

function _readdir(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i7;
 i5 = i4 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i3 = i4 + 12 | 0;
 L1 : do if ((i1 | 0) < (HEAP32[i3 >> 2] | 0)) i6 = 6; else {
  HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i2 + 4 >> 2] = i4 + 24;
  HEAP32[i2 + 8 >> 2] = 2048;
  i1 = ___syscall220(220, i2 | 0) | 0;
  if ((i1 | 0) >= 1) {
   HEAP32[i3 >> 2] = i1;
   HEAP32[i5 >> 2] = 0;
   i1 = 0;
   i6 = 6;
   break;
  }
  switch (i1 | 0) {
  case 0:
  case -2:
   {
    i1 = 0;
    break L1;
   }
  default:
   {}
  }
  HEAP32[(___errno_location() | 0) >> 2] = 0 - i1;
  i1 = 0;
 } while (0);
 if ((i6 | 0) == 6) {
  i6 = i4 + 24 + i1 | 0;
  HEAP32[i5 >> 2] = i1 + (HEAPU16[i6 + 8 >> 1] | 0);
  HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  i1 = i6;
 }
 STACKTOP = i7;
 return i1 | 0;
}

function _System_Array_Reverse(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = (_Heap_GetType(i1) | 0) + 96 | 0;
 i5 = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 64 | 0;
 i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
 i6 = 0 - (i5 << 1) | 0;
 i3 = (Math_imul(i5, i7 + -1 + i3 | 0) | 0) + (i1 + 4) | 0;
 i1 = (Math_imul(i5, i7) | 0) + (i1 + 4) | 0;
 while (1) {
  if (i3 >>> 0 <= i1 >>> 0) break;
  i7 = i1 + i5 | 0;
  i2 = i5;
  i4 = i3;
  while (1) {
   if (!i2) break;
   i8 = HEAP8[i1 >> 0] | 0;
   HEAP8[i1 >> 0] = HEAP8[i4 >> 0] | 0;
   HEAP8[i4 >> 0] = i8;
   i2 = i2 + -1 | 0;
   i4 = i4 + 1 | 0;
   i1 = i1 + 1 | 0;
  }
  i3 = i3 + i5 + i6 | 0;
  i1 = i7;
 }
 return 0;
}

function _Send_Check(i2, i7, i1) {
 i2 = i2 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i8;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 i1 = _send(HEAP32[i2 >> 2] | 0, (HEAP32[i2 + 4 >> 2] | 0) + 4 + (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0, i3, HEAP32[i2 + 16 >> 2] | 0) | 0;
 if ((i1 | 0) > -1) {
  i1 = (HEAP32[i5 >> 2] | 0) + i1 | 0;
  HEAP32[i5 >> 2] = i1;
  if (i1 >>> 0 < i3 >>> 0) i1 = 0; else {
   HEAP32[i7 >> 2] = i1;
   HEAP32[i4 >> 2] = 0;
   i1 = 1;
  }
 } else {
  i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
  HEAP32[i6 >> 2] = i1;
  _printf(20862, i6) | 0;
  if ((i1 | 0) == 11) i1 = 0; else {
   HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i4 >> 2] = i1;
   i1 = 1;
  }
 }
 STACKTOP = i8;
 return i1 | 0;
}

function ___strchrnul(i1, i4) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i3 = i4 & 255;
 L1 : do if (!i3) i1 = i1 + (_strlen(i1) | 0) | 0; else {
  if (i1 & 3) {
   i2 = i4 & 255;
   do {
    i5 = HEAP8[i1 >> 0] | 0;
    if (i5 << 24 >> 24 == 0 ? 1 : i5 << 24 >> 24 == i2 << 24 >> 24) break L1;
    i1 = i1 + 1 | 0;
   } while ((i1 & 3 | 0) != 0);
  }
  i3 = Math_imul(i3, 16843009) | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  L10 : do if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) do {
   i5 = i2 ^ i3;
   if ((i5 & -2139062144 ^ -2139062144) & i5 + -16843009 | 0) break L10;
   i1 = i1 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
  } while (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009 | 0)); while (0);
  i2 = i4 & 255;
  while (1) {
   i5 = HEAP8[i1 >> 0] | 0;
   if (i5 << 24 >> 24 == 0 ? 1 : i5 << 24 >> 24 == i2 << 24 >> 24) break; else i1 = i1 + 1 | 0;
  }
 } while (0);
 return i1 | 0;
}

function _cos(d1) {
 d1 = +d1;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i4;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 L1 : do if (i3 >>> 0 < 1072243196) if (i3 >>> 0 < 1044816030) d1 = 1.0; else d1 = +___cos(d1, 0.0); else {
  if (i3 >>> 0 > 2146435071) {
   d1 = d1 - d1;
   break;
  }
  switch ((___rem_pio2(d1, i2) | 0) & 3) {
  case 0:
   {
    d1 = +___cos(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3]);
    break L1;
   }
  case 1:
   {
    d1 = -+___sin(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3], 1);
    break L1;
   }
  case 2:
   {
    d1 = -+___cos(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3]);
    break L1;
   }
  default:
   {
    d1 = +___sin(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3], 1);
    break L1;
   }
  }
 } while (0);
 STACKTOP = i4;
 return +d1;
}

function _sin(d1) {
 d1 = +d1;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i4;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 L1 : do if (i3 >>> 0 < 1072243196) {
  if (i3 >>> 0 >= 1045430272) d1 = +___sin(d1, 0.0, 0);
 } else {
  if (i3 >>> 0 > 2146435071) {
   d1 = d1 - d1;
   break;
  }
  switch ((___rem_pio2(d1, i2) | 0) & 3) {
  case 0:
   {
    d1 = +___sin(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3], 1);
    break L1;
   }
  case 1:
   {
    d1 = +___cos(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3]);
    break L1;
   }
  case 2:
   {
    d1 = -+___sin(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3], 1);
    break L1;
   }
  default:
   {
    d1 = -+___cos(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3]);
    break L1;
   }
  }
 } while (0);
 STACKTOP = i4;
 return +d1;
}

function _sw_write(i1, i3, i6) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i7 = HEAP32[i1 + 84 >> 2] | 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) i4 = 3; else if ((_sw_write(i1, i2, (HEAP32[i1 + 20 >> 2] | 0) - i2 | 0) | 0) == -1) i1 = -1; else i4 = 3;
 if ((i4 | 0) == 3) {
  i5 = i7 + 4 | 0;
  L5 : do if ((i6 | 0) != 0 & (HEAP32[i5 >> 2] | 0) != 0) {
   i2 = i3;
   i3 = i6;
   i4 = HEAP32[i7 >> 2] | 0;
   while (1) {
    i1 = _mbtowc(i4, i2, i3) | 0;
    if ((i1 | 0) <= -1) break L5;
    i3 = i3 - i1 | 0;
    i8 = (HEAP32[i5 >> 2] | 0) + -1 | 0;
    HEAP32[i5 >> 2] = i8;
    i4 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
    HEAP32[i7 >> 2] = i4;
    if (!((i3 | 0) != 0 & (i8 | 0) != 0)) break; else i2 = i2 + i1 | 0;
   }
  } else i1 = 0; while (0);
  HEAP32[HEAP32[i7 >> 2] >> 2] = 0;
  i1 = (i1 | 0) < 0 ? i1 : i6;
 }
 return i1 | 0;
}

function _MetaData_GetResolutionScopeMetaData(i2, i3, i4) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 switch ((i3 >>> 24 & 255) << 24 >> 24) {
 case 35:
  {
   i1 = _MetaData_GetTableRow(i2, i3) | 0;
   HEAP32[i4 >> 2] = 0;
   i1 = i1 + 16 | 0;
   i1 = _CLIFile_GetMetaDataForAssembly(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) | 0;
   break;
  }
 case 1:
  {
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i2, i3, 0, 0) | 0;
   HEAP32[i4 >> 2] = i1;
   i1 = i1 + 4 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   break;
  }
 default:
  {
   HEAP32[i5 >> 2] = i3;
   _Crash(17847, i5);
  }
 }
 STACKTOP = i6;
 return i1 | 0;
}

function _System_Threading_Thread_Start(i5, i1, i2) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i1 = i4 + 8 | 0;
 i3 = i4;
 i2 = i5 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & 4;
 i2 = _Delegate_GetMethodAndStore(HEAP32[i5 + 4 >> 2] | 0, i1, 0) | 0;
 i1 = HEAP32[i1 >> 2] | 0;
 if (!i1) i1 = 0; else {
  HEAP32[i3 >> 2] = i1;
  i1 = 4;
 }
 if (HEAP32[i5 + 48 >> 2] | 0) {
  HEAP32[i3 + (i1 >>> 2 << 2) >> 2] = HEAP32[i5 + 8 >> 2];
  i1 = i1 + 4 | 0;
 }
 i6 = i2 + 4 | 0;
 i2 = i2 + 52 | 0;
 _Thread_SetEntryPoint(i5, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, i3, i1);
 STACKTOP = i4;
 return 0;
}

function _System_Array_Internal_Copy(i1, i4, i5) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 i3 = _Heap_GetType(i1) | 0;
 i6 = _Heap_GetType(i2) | 0;
 i3 = i3 + 96 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 i6 = i6 + 96 | 0;
 if (!(_Type_IsAssignableFrom(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, i3) | 0)) i1 = 0; else {
  i6 = i3 + 64 | 0;
  i6 = HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24;
  _memcpy((Math_imul(i6, HEAP32[i4 + 12 >> 2] | 0) | 0) + (i2 + 4) | 0, (Math_imul(i6, HEAP32[i4 + 4 >> 2] | 0) | 0) + (i1 + 4) | 0, Math_imul(i6, HEAP32[i4 + 16 >> 2] | 0) | 0) | 0;
  i1 = 1;
 }
 HEAP32[i5 >> 2] = i1;
 return 0;
}

function _fputc(i6, i7) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i7 + 76 >> 2] | 0) < 0) i5 = 3; else if (!(___lockfile(i7) | 0)) i5 = 3; else {
  i2 = i6 & 255;
  i1 = i6 & 255;
  if ((i1 | 0) == (HEAP8[i7 + 75 >> 0] | 0)) i5 = 10; else {
   i3 = i7 + 20 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if (i4 >>> 0 < (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i4 + 1;
    HEAP8[i4 >> 0] = i2;
   } else i5 = 10;
  }
  if ((i5 | 0) == 10) i1 = ___overflow(i7, i6) | 0;
  ___unlockfile(i7);
 }
 do if ((i5 | 0) == 3) {
  i4 = i6 & 255;
  i1 = i6 & 255;
  if ((i1 | 0) != (HEAP8[i7 + 75 >> 0] | 0)) {
   i2 = i7 + 20 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (i3 >>> 0 < (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
    HEAP32[i2 >> 2] = i3 + 1;
    HEAP8[i3 >> 0] = i4;
    break;
   }
  }
  i1 = ___overflow(i7, i6) | 0;
 } while (0);
 return i1 | 0;
}

function _do_read_777(i6, i7, i8) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0;
 i9 = i6 + 84 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i5 = HEAP32[i5 >> 2] | 0 ? i5 : 6944;
 i3 = i6 + 48 | 0;
 i4 = i6 + 44 | 0;
 L1 : do if (!(HEAP32[i3 >> 2] | 0)) i3 = 0; else {
  i1 = 0;
  while (1) {
   i2 = HEAP32[i5 + (i1 << 2) >> 2] | 0;
   if (!i2) {
    i3 = i1;
    break L1;
   }
   HEAP8[(HEAP32[i4 >> 2] | 0) + i1 >> 0] = (i2 | 0) < 128 ? i2 & 255 : 64;
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
    i3 = i1;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i6 + 8 >> 2] = i1 + i3;
 HEAP32[i9 >> 2] = i5 + (i3 << 2);
 if ((i8 | 0) != 0 & (i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i1 + 1;
  HEAP8[i7 >> 0] = HEAP8[i1 >> 0] | 0;
  i1 = 1;
 } else i1 = 0;
 return i1 | 0;
}

function _do_read_774(i6, i7, i8) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0;
 i9 = i6 + 84 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i5 = HEAP32[i5 >> 2] | 0 ? i5 : 6944;
 i3 = i6 + 48 | 0;
 i4 = i6 + 44 | 0;
 L1 : do if (!(HEAP32[i3 >> 2] | 0)) i3 = 0; else {
  i1 = 0;
  while (1) {
   i2 = HEAP32[i5 + (i1 << 2) >> 2] | 0;
   if (!i2) {
    i3 = i1;
    break L1;
   }
   HEAP8[(HEAP32[i4 >> 2] | 0) + i1 >> 0] = (i2 | 0) < 128 ? i2 & 255 : 64;
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
    i3 = i1;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i6 + 8 >> 2] = i1 + i3;
 HEAP32[i9 >> 2] = i5 + (i3 << 2);
 if ((i8 | 0) != 0 & (i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i1 + 1;
  HEAP8[i7 >> 0] = HEAP8[i1 >> 0] | 0;
  i1 = 1;
 } else i1 = 0;
 return i1 | 0;
}

function _FindGenericParam(i1, i4) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 i5 = i1 + 4 | 0;
 i6 = _MetaData_GetTableRow(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24, 704643073) | 0;
 i5 = HEAP32[(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 192 >> 2] | 0;
 i3 = i1 + 80 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 i2 = 0;
 i1 = i6;
 while (1) {
  if (i2 >>> 0 >= i5 >>> 0) {
   i1 = 0;
   break;
  }
  i6 = i1 + 4 | 0;
  if ((HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24 | 0) == (i3 | 0)) if (((HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8) & 65535 | 0) == (i4 | 0)) break;
  i2 = i2 + 1 | 0;
  i1 = i1 + 12 | 0;
 }
 return i1 | 0;
}

function ___stpcpy(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2;
 L1 : do if (!((i3 ^ i1) & 3)) {
  if (i3 & 3) do {
   i3 = HEAP8[i2 >> 0] | 0;
   HEAP8[i1 >> 0] = i3;
   if (!(i3 << 24 >> 24)) break L1;
   i2 = i2 + 1 | 0;
   i1 = i1 + 1 | 0;
  } while ((i2 & 3 | 0) != 0);
  i3 = HEAP32[i2 >> 2] | 0;
  if (!((i3 & -2139062144 ^ -2139062144) & i3 + -16843009)) {
   i4 = i1;
   while (1) {
    i2 = i2 + 4 | 0;
    i1 = i4 + 4 | 0;
    HEAP32[i4 >> 2] = i3;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 & -2139062144 ^ -2139062144) & i3 + -16843009 | 0) break; else i4 = i1;
   }
  }
  i4 = 8;
 } else i4 = 8; while (0);
 if ((i4 | 0) == 8) {
  i4 = HEAP8[i2 >> 0] | 0;
  HEAP8[i1 >> 0] = i4;
  if (i4 << 24 >> 24) do {
   i2 = i2 + 1 | 0;
   i1 = i1 + 1 | 0;
   i4 = HEAP8[i2 >> 0] | 0;
   HEAP8[i1 >> 0] = i4;
  } while (i4 << 24 >> 24 != 0);
 }
 return i1 | 0;
}

function _System_IO_FileInternal_Length(i1, i2, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i8 = i8 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(336);
 i3 = i7 + 80 | 0;
 i1 = i7 + 76 | 0;
 i4 = i7;
 i5 = _SystemString_GetString(HEAP32[i2 >> 2] | 0, i1) | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP8[i3 + i1 >> 0] = HEAP16[i5 + (i1 << 1) >> 1];
  i1 = i1 + 1 | 0;
 }
 HEAP8[i3 + i2 >> 0] = 0;
 if ((_stat(i3, i4) | 0) < 0) {
  i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
  i2 = 0;
  i3 = 0;
 } else {
  i3 = HEAP32[i4 + 36 >> 2] | 0;
  i1 = 0;
  i2 = i3;
  i3 = ((i3 | 0) < 0) << 31 >> 31;
 }
 HEAP32[i6 >> 2] = i1;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i3;
 STACKTOP = i7;
 return 0;
}

function _vfwprintf(i8, i4, i1) {
 i8 = i8 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(128);
 i5 = i9 + 112 | 0;
 i6 = i9 + 72 | 0;
 i7 = i9;
 i2 = i6;
 i3 = i2 + 36 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 if ((_wprintf_core(0, i4, i5, i7, i6) | 0) < 0) i1 = -1; else {
  if ((HEAP32[i8 + 76 >> 2] | 0) > -1) i3 = (___lockfile(i8) | 0) != 0; else i3 = 0;
  _fwide(i8, 1) | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i10 & -33;
  i1 = _wprintf_core(i8, i4, i5, i7, i6) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i2 | i10 & 32;
  if (i3) ___unlockfile(i8);
  i1 = i2 & 32 | 0 ? -1 : i1;
 }
 STACKTOP = i9;
 return i1 | 0;
}

function _System_Console_Write(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(144);
 i7 = i8;
 i5 = i8 + 4 | 0;
 i6 = i8 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (i1 | 0) {
  i4 = _SystemString_GetString(i1, i5) | 0;
  i3 = 0;
  i1 = HEAP32[i5 >> 2] | 0;
  while (1) {
   if (!i1) break;
   i2 = i1 >>> 0 < 128 ? i1 : 128;
   i1 = 0;
   while (1) {
    if (i1 >>> 0 >= i2 >>> 0) break;
    i9 = HEAP16[i4 + (i1 + i3 << 1) >> 1] | 0;
    HEAP8[i6 + i1 >> 0] = i9 & 255 ? i9 & 255 : 63;
    i1 = i1 + 1 | 0;
   }
   HEAP8[i6 + i2 >> 0] = 0;
   HEAP32[i7 >> 2] = i6;
   _printf(20495, i7) | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - i2 | 0;
   HEAP32[i5 >> 2] = i1;
   i3 = i2 + i3 | 0;
  }
 }
 STACKTOP = i8;
 return 0;
}

function _Thread_GetHeapRoots(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = 32004;
 while (1) {
  i2 = HEAP32[i1 >> 2] | 0;
  if (!i2) break;
  i1 = i2 + 20 | 0;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) break;
   i7 = i1 + 44 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) + 28 | 0;
   i6 = HEAP32[(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + 8 >> 2] | 0;
   _Heap_SetRoots(i3, i7, i6);
   i5 = HEAP32[i1 >> 2] | 0;
   i4 = i5 + 40 | 0;
   i5 = i5 + 28 | 0;
   _Heap_SetRoots(i3, i7 + i6 | 0, (HEAP32[(HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) + 12 >> 2] | 0) + (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) | 0);
   i1 = i1 + 36 | 0;
  }
  i1 = i2 + 56 | 0;
 }
 return;
}

function _Receive_Check(i1, i3, i6, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 i4 = HEAP32[i3 + 20 >> 2] | 0;
 i1 = _recv(HEAP32[i3 >> 2] | 0, (HEAP32[i3 + 4 >> 2] | 0) + 4 + (HEAP32[i3 + 8 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0, i2, HEAP32[i3 + 16 >> 2] | 0) | 0;
 do if ((i1 | 0) > 0) {
  i1 = (HEAP32[i5 >> 2] | 0) + i1 | 0;
  HEAP32[i5 >> 2] = i1;
  if (i1 >>> 0 < i2 >>> 0) i1 = 0; else {
   HEAP32[i6 >> 2] = i1;
   HEAP32[i4 >> 2] = 0;
   i1 = 1;
  }
 } else {
  if (!i1) {
   HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i4 >> 2] = 0;
   i1 = 1;
   break;
  }
  i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
  if ((i1 | 0) == 11) i1 = 0; else {
   HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i4 >> 2] = i1;
   i1 = 1;
  }
 } while (0);
 return i1 | 0;
}

function _System_WeakReference_set_Target(i7, i2, i1) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 i4 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 do if (i1 | 0) {
  i2 = _Heap_GetWeakRefAddress(i1) | 0;
  while (1) {
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    i1 = 6;
    break;
   }
   i3 = i1 + 8 | 0;
   if ((i1 | 0) == (i7 | 0)) {
    i1 = 5;
    break;
   } else i2 = i3;
  }
  if ((i1 | 0) == 5) {
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   _Heap_RemovedWeakRefTarget(HEAP32[i7 >> 2] | 0);
   break;
  } else if ((i1 | 0) == 6) _Crash(21032, i5);
 } while (0);
 HEAP32[i7 >> 2] = i4;
 if (i4 | 0) HEAP32[i7 + 8 >> 2] = _Heap_SetWeakRefTarget(i4, i7) | 0;
 STACKTOP = i6;
 return 0;
}

function _System_IO_FileInternal_Open(i1, i2, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i9 = i9 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(272);
 i6 = i8;
 i1 = i8 + 4 | 0;
 i3 = i8 + 8 | 0;
 i4 = _SystemString_GetString(HEAP32[i2 >> 2] | 0, i1) | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP8[i3 + i1 >> 0] = HEAP16[i4 + (i1 << 1) >> 1];
  i1 = i1 + 1 | 0;
 }
 HEAP8[i3 + i2 >> 0] = 0;
 if ((i5 | 0) == 3) {
  i1 = _open(i3, 2, i6) | 0;
  if ((i1 | 0) < 0) i2 = HEAP32[(___errno_location() | 0) >> 2] | 0; else i2 = 0;
 } else {
  i2 = -1;
  i1 = 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i7 >> 2] = i2;
 STACKTOP = i8;
 return 0;
}

function ___overflow(i6, i5) {
 i6 = i6 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i9;
 i8 = i5 & 255;
 HEAP8[i7 >> 0] = i8;
 i1 = i6 + 16 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i2) if (!(___towrite(i6) | 0)) {
  i2 = HEAP32[i1 >> 2] | 0;
  i3 = 4;
 } else i1 = -1; else i3 = 4;
 do if ((i3 | 0) == 4) {
  i4 = i6 + 20 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  if (i3 >>> 0 < i2 >>> 0) {
   i1 = i5 & 255;
   if ((i1 | 0) != (HEAP8[i6 + 75 >> 0] | 0)) {
    HEAP32[i4 >> 2] = i3 + 1;
    HEAP8[i3 >> 0] = i8;
    break;
   }
  }
  if ((FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 255](i6, i7, 1) | 0) == 1) i1 = HEAPU8[i7 >> 0] | 0; else i1 = -1;
 } while (0);
 STACKTOP = i9;
 return i1 | 0;
}

function _System_Type_GetMethods(i7, i1, i3) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i6;
 i5 = _RuntimeType_DeRef(i7) | 0;
 i2 = _Type_GetArrayTypeDef(HEAP32[(HEAP32[8003] | 0) + 196 >> 2] | 0, 0, 0) | 0;
 i5 = i5 + 112 | 0;
 i2 = _SystemArray_NewVector(i2, HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) | 0;
 HEAP32[i3 >> 2] = i2;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24) >>> 0) break;
  HEAP32[i4 >> 2] = _GetMethodInfo(i7, i1) | 0;
  _SystemArray_StoreElement(i2, i1, i4);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i6;
 return 0;
}

function _Thread() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i1;
 i2 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 132 >> 2] | 0) | 0;
 _Heap_MakeUndeletable(i2);
 i4 = (HEAP32[8e3] | 0) + 1 | 0;
 HEAP32[8e3] = i4;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 20 >> 2] = 0;
 HEAP32[i2 + 24 >> 2] = 0;
 HEAP32[i2 + 32 >> 2] = 0;
 HEAP32[i2 + 44 >> 2] = 0;
 HEAP32[i2 + 48 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = 8;
 i4 = _malloc(50008) | 0;
 HEAP32[i2 + 52 >> 2] = i4;
 HEAP32[i4 + 5e4 >> 2] = 0;
 HEAP32[i4 + 50004 >> 2] = 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 _log_f(1, 21129, i3);
 HEAP32[i2 + 56 >> 2] = HEAP32[8001];
 HEAP32[8001] = i2;
 STACKTOP = i1;
 return i2 | 0;
}

function _CLIFile_Execute(i4, i1, i2) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i7 + 4 | 0;
 i6 = i7;
 i3 = i1 + -1 | 0;
 i2 = i2 + 4 | 0;
 i1 = _SystemArray_NewVector(HEAP32[(HEAP32[8003] | 0) + 124 >> 2] | 0, i3) | 0;
 HEAP32[i5 >> 2] = i1;
 _Heap_MakeUndeletable(i1);
 i1 = 0;
 while (1) {
  if ((i1 | 0) >= (i3 | 0)) break;
  HEAP32[i6 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i2 + (i1 << 2) >> 2] | 0) | 0;
  _SystemArray_StoreElement(HEAP32[i5 >> 2] | 0, i1, i6);
  i1 = i1 + 1 | 0;
 }
 i6 = _Thread() | 0;
 _Thread_SetEntryPoint(i6, HEAP32[i4 + 20 >> 2] | 0, HEAP32[i4 + 16 >> 2] | 0, i5, 4);
 i6 = _Thread_Execute() | 0;
 STACKTOP = i7;
 return i6 | 0;
}

function _System_Type_GetTypeFromName(i1, i2, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i7 = i7 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 768 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(768);
 i3 = i6 + 512 | 0;
 i4 = i6 + 256 | 0;
 i5 = i6;
 _DotNetStringToCString(i3, HEAP32[i2 + 4 >> 2] | 0);
 _DotNetStringToCString(i4, HEAP32[i2 + 8 >> 2] | 0);
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i1) i1 = _CLIFile_FindTypeInAllLoadedAssemblies(i3, i4) | 0; else {
  _DotNetStringToCString(i5, i1);
  i1 = _MetaData_GetTypeDefFromName(_CLIFile_GetMetaDataForAssembly(i5) | 0, i3, i4, 0, 1) | 0;
 }
 if (!i1) i1 = 0; else {
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i1 = _Type_GetTypeObject(i1) | 0;
 }
 HEAP32[i7 >> 2] = i1;
 STACKTOP = i6;
 return 0;
}

function _Internal_ReadKey_Check(i1, i2, i7, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i7 = i7 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(144);
 i3 = i6 + 128 | 0;
 i4 = i6;
 i5 = i6 + 136 | 0;
 i1 = HEAP32[1112] | 0;
 if ((i1 | 0) == -1) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i1 = i4;
  i2 = 32;
  while (1) {
   if (!i2) break;
   HEAP32[i1 >> 2] = 0;
   i1 = i1 + 4 | 0;
   i2 = i2 + -1 | 0;
  }
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 1;
  if ((_select(1024, i4, 0, 0, i3) | 0) < 1) i1 = 0; else if ((_read(0, i5, 1) | 0) == 1) {
   HEAP32[i7 >> 2] = HEAPU8[i5 >> 0];
   i1 = 1;
  } else i1 = 0;
 } else {
  HEAP32[i7 >> 2] = i1;
  HEAP32[1112] = -1;
  i1 = 1;
 }
 STACKTOP = i6;
 return i1 | 0;
}

function _vswprintf(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(400);
 i5 = i6 + 8 | 0;
 i7 = i6;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 4 >> 2] = i2 + -1;
 _memset(i5 | 0, 0, 124) | 0;
 HEAP8[i5 + 75 >> 0] = -1;
 HEAP32[i5 + 36 >> 2] = 156;
 HEAP32[i5 + 48 >> 2] = 256;
 HEAP32[i5 + 44 >> 2] = i6 + 136;
 HEAP32[i5 + 76 >> 2] = -1;
 HEAP32[i5 + 84 >> 2] = i7;
 do if (!i2) i1 = -1; else if ((i2 | 0) < 0) {
  HEAP32[(___errno_location() | 0) >> 2] = 75;
  i1 = -1;
  break;
 } else {
  i1 = _vfwprintf(i5, i3, i4) | 0;
  _sw_write(i5, 0, 0) | 0;
  i1 = i1 >>> 0 >= i2 >>> 0 ? -1 : i1;
  break;
 } while (0);
 STACKTOP = i6;
 return i1 | 0;
}

function _open(i3, i5, i2) {
 i3 = i3 | 0;
 i5 = i5 | 0;
 i2 = i2 | 0;
 var i1 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48);
 i6 = i7 + 16 | 0;
 i4 = i7;
 i1 = i7 + 32 | 0;
 if (!(i5 & 4194368)) i1 = 0; else {
  HEAP32[i1 >> 2] = i2;
  i8 = (HEAP32[i1 >> 2] | 0) + (4 - 1) & ~(4 - 1);
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i8 + 4;
  i1 = i2;
 }
 HEAP32[i4 >> 2] = i3;
 HEAP32[i4 + 4 >> 2] = i5 | 32768;
 HEAP32[i4 + 8 >> 2] = i1;
 i1 = ___syscall5(5, i4 | 0) | 0;
 if (!((i5 & 524288 | 0) == 0 | (i1 | 0) < 0)) {
  HEAP32[i6 >> 2] = i1;
  HEAP32[i6 + 4 >> 2] = 2;
  HEAP32[i6 + 8 >> 2] = 1;
  ___syscall221(221, i6 | 0) | 0;
 }
 i8 = ___syscall_ret(i1) | 0;
 STACKTOP = i7;
 return i8 | 0;
}

function _System_Type_GetNestedType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i5 = i4;
 i1 = _RuntimeType_DeRef(i1) | 0;
 _DotNetStringToCString(i5, HEAP32[i2 >> 2] | 0);
 i6 = i1 + 4 | 0;
 i2 = i1 + 16 | 0;
 i1 = _MetaData_GetTypeDefFromName(HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, i5, i1, 1) | 0;
 if (!i1) i1 = 0; else {
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i1 = _Type_GetTypeObject(i1) | 0;
 }
 HEAP32[i3 >> 2] = i1;
 STACKTOP = i4;
 return 0;
}

function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i10 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i1 = _i64Subtract(i7 ^ i1 | 0, i6 ^ i2 | 0, i7 | 0, i6 | 0) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i1, i2, _i64Subtract(i10 ^ i3 | 0, i9 ^ i4 | 0, i10 | 0, i9 | 0) | 0, tempRet0, i8) | 0;
 i4 = _i64Subtract(HEAP32[i8 >> 2] ^ i7 | 0, HEAP32[i8 + 4 >> 2] ^ i6 | 0, i7 | 0, i6 | 0) | 0;
 i3 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i3, i4) | 0;
}

function _cycle(i1, i4, i5) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i2 = i7;
 L1 : do if ((i5 | 0) >= 2) {
  i6 = i4 + (i5 << 2) | 0;
  HEAP32[i6 >> 2] = i2;
  if (i1 | 0) while (1) {
   i3 = i1 >>> 0 < 256 ? i1 : 256;
   _memcpy(i2 | 0, HEAP32[i4 >> 2] | 0, i3 | 0) | 0;
   i2 = 0;
   do {
    i8 = i4 + (i2 << 2) | 0;
    i2 = i2 + 1 | 0;
    _memcpy(HEAP32[i8 >> 2] | 0, HEAP32[i4 + (i2 << 2) >> 2] | 0, i3 | 0) | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i3;
   } while ((i2 | 0) != (i5 | 0));
   i1 = i1 - i3 | 0;
   if (!i1) break L1;
   i2 = HEAP32[i6 >> 2] | 0;
  }
 } while (0);
 STACKTOP = i7;
 return;
}

function _iswctype(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do switch (i2 | 0) {
 case 1:
  {
   i1 = _iswalnum(i1) | 0;
   break;
  }
 case 2:
  {
   i1 = _iswalpha(i1) | 0;
   break;
  }
 case 3:
  {
   i1 = _iswblank(i1) | 0;
   break;
  }
 case 4:
  {
   i1 = _iswcntrl(i1) | 0;
   break;
  }
 case 5:
  {
   i1 = _iswdigit(i1) | 0;
   break;
  }
 case 6:
  {
   i1 = _iswgraph(i1) | 0;
   break;
  }
 case 7:
  {
   i1 = _iswlower(i1) | 0;
   break;
  }
 case 8:
  {
   i1 = _iswprint(i1) | 0;
   break;
  }
 case 9:
  {
   i1 = _iswpunct(i1) | 0;
   break;
  }
 case 10:
  {
   i1 = _iswspace(i1) | 0;
   break;
  }
 case 11:
  {
   i1 = _iswupper(i1) | 0;
   break;
  }
 case 12:
  {
   i1 = _iswxdigit(i1) | 0;
   break;
  }
 default:
  i1 = 0;
 } while (0);
 return i1 | 0;
}

function _CLIFile_GetMetaDataForLoadedAssembly(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 i1 = 31928;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) {
   i1 = 4;
   break;
  }
  i2 = (HEAP32[i1 >> 2] | 0) + 20 | 0;
  i6 = (_MetaData_GetTableRow(HEAP32[i2 >> 2] | 0, 536870913) | 0) + 20 | 0;
  if (!(_strcmp(i3, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) | 0)) {
   i1 = 5;
   break;
  } else i1 = i1 + 4 | 0;
 }
 if ((i1 | 0) == 4) {
  HEAP32[i4 >> 2] = i3;
  _Crash(12772, i4);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i5;
  return HEAP32[i2 >> 2] | 0;
 }
 return 0;
}

function _Connect_Check(i1, i4, i2, i3) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i1 = i3;
 i6 = HEAP32[i4 >> 2] | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 i7 = HEAP32[i4 + 8 >> 2] | 0;
 i2 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP16[i1 >> 1] = 2;
 HEAP32[i1 + 4 >> 2] = i8;
 HEAP16[i1 + 2 >> 1] = _htons(i7 & 65535) | 0;
 if (!(_connect(i6, i1, 16) | 0)) {
  i1 = 0;
  i5 = 4;
 } else {
  i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
  if ((i1 | 1 | 0) == 115) i1 = 0; else {
   i1 = (i1 | 0) == 106 ? 0 : i1;
   i5 = 4;
  }
 }
 if ((i5 | 0) == 4) {
  HEAP32[i2 >> 2] = i1;
  i1 = 1;
 }
 STACKTOP = i3;
 return i1 | 0;
}

function _Type_IsValueType(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 if (!((HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) & 32)) {
  i2 = HEAP32[8003] | 0;
  if ((HEAP32[i2 + 220 >> 2] | 0) == (i1 | 0)) i1 = 1; else if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) i1 = 0; else {
   i2 = i1 + 4 | 0;
   i1 = i1 + 20 | 0;
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 0, 0) | 0;
   if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
   i1 = HEAPU8[i1 + 34 >> 0] | 0;
  }
 } else i1 = 0;
 return i1 | 0;
}

function _Heap_Alloc(i3, i2) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 + 20 | 0;
 i1 = HEAP32[7986] | 0;
 if (i1 >>> 0 >= (HEAP32[7987] | 0) >>> 0) {
  _GarbageCollect();
  i1 = HEAP32[7986] | 0;
  i6 = i1 + i4 | 0;
  i5 = i6 << 1;
  i6 = i6 + 1e6 | 0;
  i5 = i5 >>> 0 < i6 >>> 0 ? i6 : i5;
  i2 = i2 + 4000020 + i1 | 0;
  HEAP32[7987] = i5 >>> 0 > i2 >>> 0 ? i2 : i5;
 }
 i6 = _calloc(1, i4) | 0;
 HEAP32[i6 + 12 >> 2] = i3;
 i5 = i3 + 124 | 0;
 HEAP8[i6 + 10 >> 0] = (HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24 | 0) != 0 & 1;
 HEAP32[7986] = i1 + i4;
 HEAP32[7989] = _TreeInsert(HEAP32[7989] | 0, i6) | 0;
 HEAP32[7990] = (HEAP32[7990] | 0) + 1;
 return i6 + 20 | 0;
}

function _TreeBalance(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i5 = i1 + 8 | 0;
 i2 = HEAP8[i5 >> 0] | 0;
 i6 = (i2 & 255) + -1 | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = HEAP8[i3 + 8 >> 0] | 0;
 if ((i6 | 0) > (i4 & 255 | 0) ? 1 : (i6 | 0) > (HEAPU8[(HEAP32[i1 >> 2] | 0) + 8 >> 0] | 0 | 0)) {
  i2 = i2 + -1 << 24 >> 24;
  HEAP8[i5 >> 0] = i2;
  if ((i4 & 255) > (i2 & 255)) HEAP8[i3 + 8 >> 0] = i2;
  i1 = _TreeSkew(i1) | 0;
  i6 = i1 + 4 | 0;
  i5 = _TreeSkew(HEAP32[i6 >> 2] | 0) | 0;
  HEAP32[i6 >> 2] = i5;
  i5 = _TreeSkew(HEAP32[i5 + 4 >> 2] | 0) | 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = i5;
  i1 = _TreeSplit(i1) | 0;
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = _TreeSplit(HEAP32[i6 >> 2] | 0) | 0;
 }
 return i1 | 0;
}

function _System_Type_GetProperties(i7, i1, i2) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i1 = i6 + 4 | 0;
 i4 = i6;
 i5 = _RuntimeType_DeRef(i7) | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = _GetNumProperties(i5, i1) | 0;
 i3 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[(HEAP32[8003] | 0) + 192 >> 2] | 0, 0, 0) | 0, i5) | 0;
 HEAP32[i2 >> 2] = i3;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i5 | 0)) break;
  HEAP32[i4 >> 2] = _GetPropertyInfo(i7, i2 + i1 & 16777215 | 385875968) | 0;
  _SystemArray_StoreElement(i3, i1, i4);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i6;
 return 0;
}

function _fflush(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 do if (!i2) {
  if (!(HEAP32[1539] | 0)) i1 = 0; else i1 = _fflush(HEAP32[1539] | 0) | 0;
  i2 = HEAP32[(___ofl_lock() | 0) >> 2] | 0;
  if (i2) do {
   if ((HEAP32[i2 + 76 >> 2] | 0) > -1) i3 = ___lockfile(i2) | 0; else i3 = 0;
   if ((HEAP32[i2 + 20 >> 2] | 0) >>> 0 > (HEAP32[i2 + 28 >> 2] | 0) >>> 0) i1 = ___fflush_unlocked(i2) | 0 | i1;
   if (i3 | 0) ___unlockfile(i2);
   i2 = HEAP32[i2 + 56 >> 2] | 0;
  } while ((i2 | 0) != 0);
  ___ofl_unlock();
 } else {
  if ((HEAP32[i2 + 76 >> 2] | 0) <= -1) {
   i1 = ___fflush_unlocked(i2) | 0;
   break;
  }
  i3 = (___lockfile(i2) | 0) == 0;
  i1 = ___fflush_unlocked(i2) | 0;
  if (!i3) ___unlockfile(i2);
 } while (0);
 return i1 | 0;
}

function _strstr(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 i2 = HEAP8[i3 >> 0] | 0;
 do if (i2 << 24 >> 24) {
  i1 = _strchr(i1, i2 << 24 >> 24) | 0;
  if (!i1) i1 = 0; else if (HEAP8[i3 + 1 >> 0] | 0) if (!(HEAP8[i1 + 1 >> 0] | 0)) i1 = 0; else {
   if (!(HEAP8[i3 + 2 >> 0] | 0)) {
    i1 = _twobyte_strstr(i1, i3) | 0;
    break;
   }
   if (!(HEAP8[i1 + 2 >> 0] | 0)) i1 = 0; else {
    if (!(HEAP8[i3 + 3 >> 0] | 0)) {
     i1 = _threebyte_strstr(i1, i3) | 0;
     break;
    }
    if (!(HEAP8[i1 + 3 >> 0] | 0)) i1 = 0; else if (!(HEAP8[i3 + 4 >> 0] | 0)) {
     i1 = _fourbyte_strstr(i1, i3) | 0;
     break;
    } else {
     i1 = _twoway_strstr(i1, i3) | 0;
     break;
    }
   }
  }
 } while (0);
 return i1 | 0;
}

function _System_String_InternalIndexOfAny(i2, i1, i9) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i9 = i9 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i8 + 4 | 0;
 i8 = HEAP32[i8 >> 2] | 0;
 i3 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
 i5 = i3 ? 1 : -1;
 i6 = (i3 ? i6 : 0 - i6 | 0) + i4 | 0;
 i3 = i2 + 4 | 0;
 i1 = i4;
 L1 : while (1) {
  if ((i1 | 0) == (i6 | 0)) {
   i1 = -1;
   break;
  }
  i4 = HEAP16[i3 + (i1 << 1) >> 1] | 0;
  i2 = i8;
  while (1) {
   i2 = i2 + -1 | 0;
   if ((i2 | 0) <= -1) break;
   if (i4 << 16 >> 16 == (HEAP16[i7 + (i2 << 1) >> 1] | 0)) break L1;
  }
  i1 = i1 + i5 | 0;
 }
 HEAP32[i9 >> 2] = i1;
 return 0;
}

function _strcasecmp(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP8[i1 >> 0] | 0;
 L1 : do if (!(i3 << 24 >> 24)) i1 = 0; else {
  i5 = i1;
  i1 = i3;
  i4 = i3 & 255;
  while (1) {
   i3 = HEAP8[i2 >> 0] | 0;
   if (!(i3 << 24 >> 24)) break L1;
   if (i1 << 24 >> 24 != i3 << 24 >> 24) {
    i4 = _tolower(i4) | 0;
    if ((i4 | 0) != (_tolower(HEAPU8[i2 >> 0] | 0) | 0)) break;
   }
   i1 = i5 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = HEAP8[i1 >> 0] | 0;
   if (!(i3 << 24 >> 24)) {
    i1 = 0;
    break L1;
   } else {
    i5 = i1;
    i1 = i3;
    i4 = i3 & 255;
   }
  }
  i1 = HEAP8[i5 >> 0] | 0;
 } while (0);
 i5 = _tolower(i1 & 255) | 0;
 return i5 - (_tolower(HEAPU8[i2 >> 0] | 0) | 0) | 0;
}

function _System_String_InternalToUInt64(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i7;
 i6 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 4 | 0;
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 i4 = _wcstoull(i1, i8, i4) | 0;
 i3 = tempRet0;
 if ((HEAP32[i8 >> 2] | 0) == (i1 + (HEAP32[i2 >> 2] << 2) | 0)) if ((i4 | 0) == 0 & (i3 | 0) == 0) i1 = (HEAP32[(___errno_location() | 0) >> 2] | 0) != 0 & 1; else i1 = 0; else i1 = 1;
 HEAP32[i6 >> 2] = i1;
 i8 = i5;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i3;
 STACKTOP = i7;
 return 0;
}

function _System_String_InternalToInt64(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i7;
 i6 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 4 | 0;
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 i4 = _wcstoll(i1, i8, i4) | 0;
 i3 = tempRet0;
 if ((HEAP32[i8 >> 2] | 0) == (i1 + (HEAP32[i2 >> 2] << 2) | 0)) if ((i4 | 0) == 0 & (i3 | 0) == 0) i1 = (HEAP32[(___errno_location() | 0) >> 2] | 0) != 0 & 1; else i1 = 0; else i1 = 1;
 HEAP32[i6 >> 2] = i1;
 i8 = i5;
 HEAP32[i8 >> 2] = i4;
 HEAP32[i8 + 4 >> 2] = i3;
 STACKTOP = i7;
 return 0;
}

function _MetaData_GetImplMap(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 i1 = HEAP32[i2 + 136 >> 2] | 0;
 while (1) {
  if (!i1) {
   i1 = 4;
   break;
  }
  i4 = _MetaData_GetTableRow(i2, i1 & 16777215 | 469762048) | 0;
  i7 = i4 + 4 | 0;
  if ((HEAPU8[i7 >> 0] | HEAPU8[i7 + 1 >> 0] << 8 | HEAPU8[i7 + 2 >> 0] << 16 | HEAPU8[i7 + 3 >> 0] << 24 | 0) == (i3 | 0)) {
   i1 = 5;
   break;
  } else i1 = i1 + -1 | 0;
 }
 if ((i1 | 0) == 4) {
  HEAP32[i5 >> 2] = i3;
  _Crash(18228, i5);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i6;
  return i4 | 0;
 }
 return 0;
}

function _SystemArray_StoreElement(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = (_Heap_GetType(i1) | 0) + 96 | 0;
 i4 = (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + 64 | 0;
 i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
 switch (i4 | 0) {
 case 1:
  {
   HEAP8[i1 + 4 + i2 >> 0] = HEAP8[i3 >> 0] | 0;
   break;
  }
 case 2:
  {
   HEAP16[i1 + 4 + (i2 << 1) >> 1] = HEAP16[i3 >> 1] | 0;
   break;
  }
 case 4:
  {
   HEAP32[i1 + 4 + (i2 << 2) >> 2] = HEAP32[i3 >> 2];
   break;
  }
 default:
  _memcpy(i1 + 4 + (Math_imul(i4, i2) | 0) | 0, i3 | 0, i4 | 0) | 0;
 }
 return;
}

function _SystemArray_LoadElement(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = (_Heap_GetType(i1) | 0) + 96 | 0;
 i4 = (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + 64 | 0;
 i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
 switch (i4 | 0) {
 case 1:
  {
   HEAP8[i3 >> 0] = HEAP8[i1 + 4 + i2 >> 0] | 0;
   break;
  }
 case 2:
  {
   HEAP16[i3 >> 1] = HEAP16[i1 + 4 + (i2 << 1) >> 1] | 0;
   break;
  }
 case 4:
  {
   HEAP32[i3 >> 2] = HEAP32[i1 + 4 + (i2 << 2) >> 2];
   break;
  }
 default:
  _memcpy(i3 | 0, i1 + 4 + (Math_imul(i4, i2) | 0) | 0, i4 | 0) | 0;
 }
 return;
}
function _MetaData_DecodeSigEntryExt(i5, i2) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i6 = 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i4 = i6 + 1 | 0;
 HEAP32[i5 >> 2] = i4;
 i3 = HEAP8[i6 >> 0] | 0;
 i1 = i3 & 255;
 do if (i1 & 128) {
  if (i3 << 24 >> 24 == -1) {
   i1 = ((i2 | 0) != 1) << 31 >> 31;
   break;
  }
  i3 = i6 + 2 | 0;
  HEAP32[i5 >> 2] = i3;
  i2 = HEAP8[i4 >> 0] | 0;
  if ((i1 & 192 | 0) == 128) {
   i1 = i1 << 8 & 16128 | i2 & 255;
   break;
  } else {
   i4 = i6 + 3 | 0;
   HEAP32[i5 >> 2] = i4;
   i3 = HEAP8[i3 >> 0] | 0;
   HEAP32[i5 >> 2] = i6 + 4;
   i1 = (i2 & 255) << 16 | i1 << 24 & 520093696 | (i3 & 255) << 8 | (HEAPU8[i4 >> 0] | 0);
   break;
  }
 } while (0);
 return i1 | 0;
}

function _scalbn(d2, i1) {
 d2 = +d2;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 if ((i1 | 0) > 1023) {
  d2 = d2 * 8988465674311579538646525.0e283;
  i4 = (i1 | 0) > 2046;
  i3 = i1 + -2046 | 0;
  d2 = i4 ? d2 * 8988465674311579538646525.0e283 : d2;
  i1 = i4 ? ((i3 | 0) < 1023 ? i3 : 1023) : i1 + -1023 | 0;
 } else if ((i1 | 0) < -1022) {
  d2 = d2 * 2.2250738585072014e-308;
  i3 = (i1 | 0) < -2044;
  i4 = i1 + 2044 | 0;
  d2 = i3 ? d2 * 2.2250738585072014e-308 : d2;
  i1 = i3 ? ((i4 | 0) > -1022 ? i4 : -1022) : i1 + 1022 | 0;
 }
 i3 = _bitshift64Shl(i1 + 1023 | 0, 0, 52) | 0;
 i4 = tempRet0;
 HEAP32[tempDoublePtr >> 2] = i3;
 HEAP32[tempDoublePtr + 4 >> 2] = i4;
 return +(d2 * +HEAPF64[tempDoublePtr >> 3]);
}

function ___fflush_unlocked(i5) {
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0;
 i6 = i5 + 20 | 0;
 i7 = i5 + 28 | 0;
 if ((HEAP32[i6 >> 2] | 0) >>> 0 > (HEAP32[i7 >> 2] | 0) >>> 0) {
  FUNCTION_TABLE_iiii[HEAP32[i5 + 36 >> 2] & 255](i5, 0, 0) | 0;
  if (!(HEAP32[i6 >> 2] | 0)) i1 = -1; else i2 = 3;
 } else i2 = 3;
 if ((i2 | 0) == 3) {
  i1 = i5 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  i3 = i5 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < i4 >>> 0) FUNCTION_TABLE_iiii[HEAP32[i5 + 40 >> 2] & 255](i5, i2 - i4 | 0, 1) | 0;
  HEAP32[i5 + 16 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 >> 2] = 0;
  i1 = 0;
 }
 return i1 | 0;
}

function _System_DateTime_InternalUtcNow(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i1;
 _gettimeofday(i4 | 0, 0) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i6 = ___muldi3(i6 | 0, ((i6 | 0) < 0) << 31 >> 31 | 0, 1e7, 0) | 0;
 i5 = tempRet0;
 i4 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = ___muldi3(i4 | 0, ((i4 | 0) < 0) << 31 >> 31 | 0, 10, 0) | 0;
 i2 = tempRet0;
 i5 = _i64Add(i6 | 0, i5 | 0, -139100160, 144670709) | 0;
 i2 = _i64Add(i5 | 0, tempRet0 | 0, i4 | 0, i2 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 STACKTOP = i1;
 return 0;
}

function _is_literal(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP8[i2 >> 0] | 0;
 L1 : do if (!(i3 << 24 >> 24)) i1 = 1; else {
  i4 = (i1 | 0) == 0;
  i1 = 0;
  while (1) {
   switch (i3 << 24 >> 24 | 0) {
   case 42:
   case 63:
    {
     i1 = 0;
     break L1;
    }
   case 92:
    {
     if (!i4) {
      i1 = 0;
      break L1;
     }
     break;
    }
   case 91:
    {
     i1 = 1;
     break;
    }
   case 93:
    {
     if (!i1) i1 = 0; else {
      i1 = 0;
      break L1;
     }
     break;
    }
   default:
    {}
   }
   i2 = i2 + 1 | 0;
   i3 = HEAP8[i2 >> 0] | 0;
   if (!(i3 << 24 >> 24)) {
    i1 = 1;
    break L1;
   }
  }
 } while (0);
 return i1 | 0;
}

function _System_Char_GetUnicodeCategory(i1, i2, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i8 = i8 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 65535) i1 = 29; else {
  i1 = 0;
  i2 = 597;
  i3 = 298;
  while (1) {
   i4 = i3 << 1;
   i7 = HEAPU16[6952 + (i4 << 1) >> 1] | 0;
   i5 = i6 >>> 0 < i7 >>> 0;
   if (!i5) if (i6 >>> 0 < (HEAPU16[6952 + (i4 + 2 << 1) >> 1] | 0) >>> 0) break;
   i4 = i5 ? i3 : i2;
   i7 = i5 ? i1 : i3;
   i1 = i7;
   i2 = i4;
   i3 = ((i4 - i7 | 0) >>> 1) + i7 | 0;
  }
  i1 = HEAPU16[6952 + ((i4 | 1) << 1) >> 1] | 0;
  if (i1 & 32768) i1 = HEAPU8[18701 + (i6 - i7 + (i1 & 32767)) >> 0] | 0;
 }
 HEAP32[i8 >> 2] = i1;
 return 0;
}

function _System_Environment_GetOSVersionString(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i2 = i3;
 i1 = HEAP32[7996] | 0;
 if (!i1) {
  HEAP8[i2 >> 0] = HEAP8[20856] | 0;
  HEAP8[i2 + 1 >> 0] = HEAP8[20857] | 0;
  HEAP8[i2 + 2 >> 0] = HEAP8[20858] | 0;
  HEAP8[i2 + 3 >> 0] = HEAP8[20859] | 0;
  HEAP8[i2 + 4 >> 0] = HEAP8[20860] | 0;
  HEAP8[i2 + 5 >> 0] = HEAP8[20861] | 0;
  i1 = _SystemString_FromCharPtrASCII(i2) | 0;
  HEAP32[7996] = i1;
  _Heap_MakeUndeletable(i1);
  i1 = HEAP32[7996] | 0;
 }
 HEAP32[i4 >> 2] = i1;
 STACKTOP = i3;
 return 0;
}

function _System_Array_Resize(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != (i1 | 0)) {
  i6 = _Heap_GetType(i2) | 0;
  i5 = _SystemArray_NewVector(i6, i1) | 0;
  HEAP32[i4 >> 2] = i5;
  i4 = i6 + 96 | 0;
  i4 = (HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + 64 | 0;
  _memcpy(i5 + 4 | 0, i2 + 4 | 0, Math_imul(HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24, i1 >>> 0 < i3 >>> 0 ? i1 : i3) | 0) | 0;
 }
 return 0;
}

function _PushStackType_(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0;
 if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i3 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i4 = i2 + 1 | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i5 + (i2 << 2) >> 2] = i1;
 i2 = 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i4 | 0)) break;
  i6 = (HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 68 | 0;
  i2 = (HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24) + i2 | 0;
  i1 = i1 + 1 | 0;
 }
 i1 = i3 + 8 | 0;
 if (i2 >>> 0 > (HEAP32[i1 >> 2] | 0) >>> 0) HEAP32[i1 >> 2] = i2;
 return;
}

function _frexp(d1, i5) {
 d1 = +d1;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i4 = _bitshift64Lshr(i2 | 0, i3 | 0, 52) | 0;
 switch (i4 & 2047) {
 case 0:
  {
   if (d1 != 0.0) {
    d1 = +_frexp(d1 * 18446744073709551616.0, i5);
    i2 = (HEAP32[i5 >> 2] | 0) + -64 | 0;
   } else i2 = 0;
   HEAP32[i5 >> 2] = i2;
   break;
  }
 case 2047:
  break;
 default:
  {
   HEAP32[i5 >> 2] = (i4 & 2047) + -1022;
   HEAP32[tempDoublePtr >> 2] = i2;
   HEAP32[tempDoublePtr + 4 >> 2] = i3 & -2146435073 | 1071644672;
   d1 = +HEAPF64[tempDoublePtr >> 3];
  }
 }
 return +d1;
}

function _CLIFile_FindTypeInAllLoadedAssemblies(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 i1 = _CLIFile_GetLoadedAssemblies() | 0;
 while (1) {
  if (!i1) {
   i1 = 5;
   break;
  }
  i4 = _MetaData_GetTypeDefFromName(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0, i2, i3, 0, 0) | 0;
  if (i4 | 0) {
   i1 = 6;
   break;
  }
  i1 = HEAP32[i1 + 4 >> 2] | 0;
 }
 if ((i1 | 0) == 5) {
  HEAP32[i5 >> 2] = i2;
  HEAP32[i5 + 4 >> 2] = i3;
  _Crash(12860, i5);
 } else if ((i1 | 0) == 6) {
  STACKTOP = i6;
  return i4 | 0;
 }
 return 0;
}

function _Type_IsDerivedFromOrSame(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0;
 while (1) {
  if (!i1) {
   i1 = 0;
   break;
  }
  if ((i1 | 0) == (i3 | 0)) {
   i1 = 1;
   break;
  }
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i2 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  if (i2 | 0) if ((i2 | 0) == (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24 | 0)) {
   i1 = 1;
   break;
  }
  i2 = i1 + 40 | 0;
  i1 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 }
 return i1 | 0;
}

function _Generics_GetGenericTypeFromSig(i2, i3, i6, i7) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i8 = 0, i9 = 0;
 i8 = _Type_GetTypeFromSig(i2, i3, i6, i7) | 0;
 if (!(HEAP8[i8 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i8, 0, 0);
 i9 = _MetaData_DecodeSigEntry(i3) | 0;
 i4 = _malloc(i9 << 2) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i9 | 0)) break;
  i5 = _Type_GetTypeFromSig(i2, i3, i6, i7) | 0;
  HEAP32[i4 + (i1 << 2) >> 2] = i5;
  if (i5 | 0) if (!(HEAP8[i5 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i5, 0, 0);
  i1 = i1 + 1 | 0;
 }
 i9 = _Generics_GetGenericTypeFromCoreType(i8, i9, i4) | 0;
 _free(i4);
 return i9 | 0;
}

function _System_Net_Sockets_Internal_CreateSocket(i1, i2, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 i8 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i1 = _socket(i8, i7, i1) | 0;
 if ((i1 | 0) == -1) {
  i1 = 0;
  i2 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 } else i2 = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i4 >> 2] = 2048;
 _fcntl(i1, 4, i4) | 0;
 HEAP32[i6 >> 2] = i1;
 STACKTOP = i5;
 return 0;
}

function _GetMethodInfo(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (_RuntimeType_DeRef(i1) | 0) + 116 | 0;
 i3 = HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + (i2 << 2) >> 2] | 0;
 i2 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 196 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i1;
 i1 = i3 + 16 | 0;
 HEAP32[i2 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24) | 0;
 i1 = i3 + 14 | 0;
 HEAP32[i2 + 8 >> 2] = (HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8) & 65535;
 HEAP32[i2 + 12 >> 2] = i3;
 return i2 | 0;
}

function _MetaData_GetHeapRoots(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 i5 = HEAP32[i3 + 32 >> 2] | 0;
 i1 = 1;
 while (1) {
  if (i1 >>> 0 > i5 >>> 0) break;
  i6 = _MetaData_GetTableRow(i3, i1 & 16777215 | 33554432) | 0;
  if (!(HEAP8[i6 + 57 >> 0] | 0)) {
   i4 = i6 + 108 | 0;
   i4 = HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24;
   if (i4 | 0) {
    i6 = i6 + 52 | 0;
    _Heap_SetRoots(i2, HEAPU8[i6 >> 0] | HEAPU8[i6 + 1 >> 0] << 8 | HEAPU8[i6 + 2 >> 0] << 16 | HEAPU8[i6 + 3 >> 0] << 24, i4);
   }
  } else _Generic_GetHeapRoots(i2, i6);
  i1 = i1 + 1 | 0;
 }
 return;
}

function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i5 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = _i64Subtract(i10 ^ i1 | 0, i9 ^ i2 | 0, i10 | 0, i9 | 0) | 0;
 i7 = tempRet0;
 i1 = i6 ^ i10;
 i2 = i5 ^ i9;
 return _i64Subtract((___udivmoddi4(i8, i7, _i64Subtract(i6 ^ i3 | 0, i5 ^ i4 | 0, i6 | 0, i5 | 0) | 0, tempRet0, 0) | 0) ^ i1 | 0, tempRet0 ^ i2 | 0, i1 | 0, i2 | 0) | 0;
}

function _Type_GetArrayTypeDef(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 do if (!i3) i1 = (HEAP32[8003] | 0) + 4 | 0; else {
  i1 = 32016;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) {
    i2 = 7;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) == (i3 | 0)) {
    i2 = 5;
    break;
   }
   i1 = i1 + 8 | 0;
  }
  if ((i2 | 0) == 5) break; else if ((i2 | 0) == 7) {
   i1 = _mallocForever(12) | 0;
   HEAP32[i1 + 4 >> 2] = i3;
   HEAP32[i1 + 8 >> 2] = HEAP32[8004];
   HEAP32[8004] = i1;
   i2 = _mallocForever(132) | 0;
   HEAP32[i1 >> 2] = i2;
   _CreateNewArrayType(i2, i3);
   break;
  }
 } while (0);
 return HEAP32[i1 >> 2] | 0;
}

function _PushU32_(i4, i5, i6) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i7 = 0;
 i7 = i4 + 12 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (i1 >>> 0 < i3 >>> 0) i2 = HEAP32[i4 + 4 >> 2] | 0; else {
  HEAP32[i2 >> 2] = i3 << 1;
  HEAP32[i4 >> 2] = _realloc(HEAP32[i4 >> 2] | 0, i3 << 3) | 0;
  i1 = i4 + 4 | 0;
  i2 = _realloc(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] << 2) | 0;
  HEAP32[i1 >> 2] = i2;
  i1 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i2 + (i1 << 2) >> 2] = i6;
 i4 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 + 1;
 HEAP32[i4 + (i6 << 2) >> 2] = i5;
 return;
}

function _System_String_InternalToUInt32(i2, i1, i4) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i6;
 i5 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 4 | 0;
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 i3 = _wcstoul(i1, i7, i3) | 0;
 if ((HEAP32[i7 >> 2] | 0) == (i1 + (HEAP32[i2 >> 2] << 2) | 0)) if (!i3) i1 = (HEAP32[(___errno_location() | 0) >> 2] | 0) != 0 & 1; else i1 = 0; else i1 = 1;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i4 >> 2] = i3;
 STACKTOP = i6;
 return 0;
}

function _PushSizeT_(i4, i5) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i6 = 0;
 i6 = i4 + 12 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (i1 >>> 0 < i3 >>> 0) i2 = HEAP32[i4 + 4 >> 2] | 0; else {
  HEAP32[i2 >> 2] = i3 << 1;
  HEAP32[i4 >> 2] = _realloc(HEAP32[i4 >> 2] | 0, i3 << 3) | 0;
  i1 = i4 + 4 | 0;
  i2 = _realloc(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] << 2) | 0;
  HEAP32[i1 >> 2] = i2;
  i1 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i2 + (i1 << 2) >> 2] = -1;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4 + 1;
 HEAP32[i3 + (i4 << 2) >> 2] = i5;
 return;
}

function _System_String_InternalToInt32(i2, i1, i4) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i6;
 i5 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 4 | 0;
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 i3 = _wcstol(i1, i7, i3) | 0;
 if ((HEAP32[i7 >> 2] | 0) == (i1 + (HEAP32[i2 >> 2] << 2) | 0)) if (!i3) i1 = (HEAP32[(___errno_location() | 0) >> 2] | 0) != 0 & 1; else i1 = 0; else i1 = 1;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i4 >> 2] = i3;
 STACKTOP = i6;
 return 0;
}

function _GarbageCollect() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i2 = i1;
 i8 = HEAP32[7986] | 0;
 i6 = HEAP32[7990] | 0;
 i4 = HEAP32[7991] | 0;
 HEAP32[7992] = (HEAP32[7992] | 0) + 1;
 _GC_Mark();
 _GC_Sweep();
 i7 = HEAP32[7986] | 0;
 i5 = HEAP32[7990] | 0;
 i3 = HEAP32[7991] | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i2 + 4 >> 2] = i7;
 HEAP32[i2 + 8 >> 2] = i6;
 HEAP32[i2 + 12 >> 2] = i5;
 HEAP32[i2 + 16 >> 2] = i4;
 HEAP32[i2 + 20 >> 2] = i3;
 _log_f(1, 13477, i2);
 STACKTOP = i1;
 return;
}

function _System_String_GetHashCode(i2, i1, i6) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0;
 i4 = i2 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i4 + (i3 << 1) + -2 | 0;
 i3 = i2 + ((i3 << 1) + 2) | 0;
 i3 = i2 + ((i3 >>> 0 > i4 >>> 0 ? i3 : i4) + ~i2 + 4 & -4) | 0;
 i1 = 5381;
 i2 = i4;
 i4 = 5381;
 while (1) {
  if (i2 >>> 0 >= i5 >>> 0) break;
  i7 = i4 * 33 ^ (HEAPU16[i2 + 2 >> 1] | 0);
  i1 = i1 * 33 ^ (HEAPU16[i2 >> 1] | 0);
  i2 = i2 + 4 | 0;
  i4 = i7;
 }
 if (i5 >>> 0 >= i3 >>> 0) i1 = i1 * 33 ^ (HEAPU16[i3 >> 1] | 0);
 HEAP32[i6 >> 2] = i1 + (Math_imul(i4, 1566083941) | 0);
 return 0;
}

function ___toread(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i1 = i3 + 74 | 0;
 i2 = HEAP8[i1 >> 0] | 0;
 HEAP8[i1 >> 0] = i2 + 255 | i2;
 i1 = i3 + 20 | 0;
 i2 = i3 + 28 | 0;
 if ((HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i2 >> 2] | 0) >>> 0) FUNCTION_TABLE_iiii[HEAP32[i3 + 36 >> 2] & 255](i3, 0, 0) | 0;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!(i1 & 4)) {
  i2 = (HEAP32[i3 + 44 >> 2] | 0) + (HEAP32[i3 + 48 >> 2] | 0) | 0;
  HEAP32[i3 + 8 >> 2] = i2;
  HEAP32[i3 + 4 >> 2] = i2;
  i1 = i1 << 27 >> 31;
 } else {
  HEAP32[i3 >> 2] = i1 | 32;
  i1 = -1;
 }
 return i1 | 0;
}

function _System_String_InternalToSingle(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, f4 = f0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i6;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i2 + 4 | 0;
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 f4 = Math_fround(_wcstof(i1, i7));
 if ((HEAP32[i7 >> 2] | 0) == (i1 + (HEAP32[i2 >> 2] << 2) | 0)) if (f4 == Math_fround(0.0)) i1 = (HEAP32[(___errno_location() | 0) >> 2] | 0) != 0 & 1; else i1 = 0; else i1 = 1;
 HEAP32[i3 >> 2] = i1;
 HEAPF32[i5 >> 2] = f4;
 STACKTOP = i6;
 return 0;
}

function _System_IO_FileInternal_GetFileAttributes(i1, i2, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i7 = i7 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(272);
 i3 = i6;
 i4 = i6 + 8 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = _SystemString_GetString(HEAP32[i2 >> 2] | 0, i3) | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  HEAP8[i4 + i1 >> 0] = HEAP16[i2 + (i1 << 1) >> 1];
  i1 = i1 + 1 | 0;
 }
 HEAP8[i4 + i3 >> 0] = 0;
 HEAP32[i7 >> 2] = _Attrs(i4, i5) | 0;
 STACKTOP = i6;
 return 0;
}

function _realloc(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0;
 if (!i2) {
  i3 = _malloc(i3) | 0;
  return i3 | 0;
 }
 if (i3 >>> 0 > 4294967231) {
  HEAP32[(___errno_location() | 0) >> 2] = 12;
  i3 = 0;
  return i3 | 0;
 }
 i1 = _try_realloc_chunk(i2 + -8 | 0, i3 >>> 0 < 11 ? 16 : i3 + 11 & -8) | 0;
 if (i1 | 0) {
  i3 = i1 + 8 | 0;
  return i3 | 0;
 }
 i1 = _malloc(i3) | 0;
 if (!i1) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + -4 >> 2] | 0;
 i4 = (i4 & -8) - ((i4 & 3 | 0) == 0 ? 8 : 4) | 0;
 _memcpy(i1 | 0, i2 | 0, (i4 >>> 0 < i3 >>> 0 ? i4 : i3) | 0) | 0;
 _free(i2);
 i3 = i1;
 return i3 | 0;
}

function _System_Net_Sockets_Internal_Bind(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i4;
 i5 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = HEAP32[i3 + 8 >> 2] | 0;
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP16[i2 >> 1] = 2;
 HEAP32[i2 + 4 >> 2] = i7;
 HEAP16[i2 + 2 >> 1] = _htons(i6 & 65535) | 0;
 if (!(_bind(i5, i2, 16) | 0)) i2 = 0; else i2 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 STACKTOP = i4;
 return 0;
}

function _Internal_TryEntry_Check(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 do if (!(_Heap_SyncTryEnter(HEAP32[i2 >> 2] | 0) | 0)) if ((i1 | 0) < 0) i1 = 0; else {
  if (!i1) {
   HEAP32[i3 >> 2] = 0;
   i1 = 1;
   break;
  }
  if (!i4) i1 = 0; else {
   i2 = _msTime() | 0;
   i4 = i4 + 16 | 0;
   i4 = _i64Subtract(i2 | 0, tempRet0 | 0, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0) | 0;
   if ((i1 | 0) < (i4 | 0)) {
    HEAP32[i3 >> 2] = 0;
    i1 = 1;
   } else i1 = 0;
  }
 } else {
  HEAP32[i3 >> 2] = 1;
  i1 = 1;
 } while (0);
 return i1 | 0;
}

function _System_String_InternalToDouble(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, d4 = 0.0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i6;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i2 + 4 | 0;
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 d4 = +_wcstod(i1, i7);
 if ((HEAP32[i7 >> 2] | 0) == (i1 + (HEAP32[i2 >> 2] << 2) | 0)) if (d4 == 0.0) i1 = (HEAP32[(___errno_location() | 0) >> 2] | 0) != 0 & 1; else i1 = 0; else i1 = 1;
 HEAP32[i3 >> 2] = i1;
 HEAPF64[i5 >> 3] = d4;
 STACKTOP = i6;
 return 0;
}

function _getcwd(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4112 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(4112);
 i4 = i6;
 i3 = i6 + 8 | 0;
 if (!i1) {
  i2 = 4096;
  i1 = i3;
  i5 = 4;
 } else if (!i2) {
  HEAP32[(___errno_location() | 0) >> 2] = 22;
  i1 = 0;
 } else i5 = 4;
 if ((i5 | 0) == 4) {
  HEAP32[i4 >> 2] = i1;
  HEAP32[i4 + 4 >> 2] = i2;
  if ((___syscall_ret(___syscall183(183, i4 | 0) | 0) | 0) < 0) i1 = 0; else if ((i1 | 0) == (i3 | 0)) i1 = ___strdup(i3) | 0;
 }
 STACKTOP = i6;
 return i1 | 0;
}

function _fmt_u(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 if (i2 >>> 0 > 0 | (i2 | 0) == 0 & i3 >>> 0 > 4294967295) {
  while (1) {
   i4 = ___uremdi3(i3 | 0, i2 | 0, 10, 0) | 0;
   i1 = i1 + -1 | 0;
   HEAP8[i1 >> 0] = i4 & 255 | 48;
   i4 = i3;
   i3 = ___udivdi3(i3 | 0, i2 | 0, 10, 0) | 0;
   if (!(i2 >>> 0 > 9 | (i2 | 0) == 9 & i4 >>> 0 > 4294967295)) break; else i2 = tempRet0;
  }
  i2 = i3;
 } else i2 = i3;
 if (i2) while (1) {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = (i2 >>> 0) % 10 | 0 | 48;
  if (i2 >>> 0 < 10) break; else i2 = (i2 >>> 0) / 10 | 0;
 }
 return i1 | 0;
}

function _fourbyte_strstr(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0;
 i4 = (HEAPU8[i1 + 1 >> 0] | 0) << 16 | (HEAPU8[i1 >> 0] | 0) << 24 | (HEAPU8[i1 + 2 >> 0] | 0) << 8 | (HEAPU8[i1 + 3 >> 0] | 0);
 i1 = i3 + 3 | 0;
 i2 = HEAP8[i1 >> 0] | 0;
 i3 = (HEAPU8[i3 + 1 >> 0] | 0) << 16 | (HEAPU8[i3 >> 0] | 0) << 24 | (HEAPU8[i3 + 2 >> 0] | 0) << 8 | i2 & 255;
 if (!(i2 << 24 >> 24 == 0 | (i3 | 0) == (i4 | 0))) do {
  i1 = i1 + 1 | 0;
  i2 = HEAP8[i1 >> 0] | 0;
  i3 = i3 << 8 | i2 & 255;
 } while (!(i2 << 24 >> 24 == 0 | (i3 | 0) == (i4 | 0)));
 return (i2 << 24 >> 24 ? i1 + -3 | 0 : 0) | 0;
}

function _DotNetStringToCString(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 i2 = i6 + 8 | 0;
 i1 = _SystemString_GetString(i1, i2) | 0;
 i2 = HEAP32[i2 >> 2] | 0;
 if (i2 >>> 0 > 256) {
  HEAP32[i5 >> 2] = i2;
  HEAP32[i5 + 4 >> 2] = 256;
  _Crash(20974, i5);
 } else i3 = 0;
 while (1) {
  if ((i3 | 0) == (i2 | 0)) break;
  HEAP8[i4 + i3 >> 0] = HEAP16[i1 + (i3 << 1) >> 1];
  i3 = i3 + 1 | 0;
 }
 HEAP8[i4 + i2 >> 0] = 0;
 STACKTOP = i6;
 return;
}

function _Generic_GetHeapRoots(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i1 = i1 + 84 | 0;
 while (1) {
  i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
  if (!i1) break;
  i2 = HEAP32[i1 >> 2] | 0;
  i3 = i2 + 108 | 0;
  i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
  if (i3 | 0) {
   i2 = i2 + 52 | 0;
   _Heap_SetRoots(i4, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, i3);
  }
  i1 = i1 + 4 | 0;
 }
 return;
}

function _pad_673(i5, i2, i3, i4, i1) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i6 = i7;
 if ((i3 | 0) > (i4 | 0) & (i1 & 73728 | 0) == 0) {
  i1 = i3 - i4 | 0;
  _memset(i6 | 0, i2 << 24 >> 24 | 0, (i1 >>> 0 < 256 ? i1 : 256) | 0) | 0;
  if (i1 >>> 0 > 255) {
   i2 = i3 - i4 | 0;
   do {
    _out(i5, i6, 256);
    i1 = i1 + -256 | 0;
   } while (i1 >>> 0 > 255);
   i1 = i2 & 255;
  }
  _out(i5, i6, i1);
 }
 STACKTOP = i7;
 return;
}

function _GetSize(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do if ((i3 | 0) == (HEAP32[(HEAP32[8003] | 0) + 36 >> 2] | 0)) i1 = _SystemString_GetNumBytes(i1 + 20 | 0) | 0; else {
  i2 = i3 + 96 | 0;
  i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
  if (!i2) {
   i1 = i3 + 36 | 0;
   i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
   break;
  } else {
   i1 = _SystemArray_GetNumBytes(i1 + 20 | 0, i2) | 0;
   break;
  }
 } while (0);
 return i1 | 0;
}

function _recvfrom(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i8 = i7;
 i9 = i7 + 8 | 0;
 HEAP32[i9 >> 2] = i1;
 HEAP32[i9 + 4 >> 2] = i2;
 HEAP32[i9 + 8 >> 2] = i3;
 HEAP32[i9 + 12 >> 2] = i4;
 HEAP32[i9 + 16 >> 2] = i5;
 HEAP32[i9 + 20 >> 2] = i6;
 HEAP32[i8 >> 2] = 12;
 HEAP32[i8 + 4 >> 2] = i9;
 i6 = ___syscall_ret(___syscall102(102, i8 | 0) | 0) | 0;
 STACKTOP = i7;
 return i6 | 0;
}

function _sendto(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i8 = i7;
 i9 = i7 + 8 | 0;
 HEAP32[i9 >> 2] = i1;
 HEAP32[i9 + 4 >> 2] = i2;
 HEAP32[i9 + 8 >> 2] = i3;
 HEAP32[i9 + 12 >> 2] = i4;
 HEAP32[i9 + 16 >> 2] = i5;
 HEAP32[i9 + 20 >> 2] = i6;
 HEAP32[i8 >> 2] = 11;
 HEAP32[i8 + 4 >> 2] = i9;
 i6 = ___syscall_ret(___syscall102(102, i8 | 0) | 0) | 0;
 STACKTOP = i7;
 return i6 | 0;
}

function ___strerror_l(i2, i4) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0, i3 = 0;
 i3 = 0;
 while (1) {
  if ((HEAPU8[23259 + i3 >> 0] | 0) == (i2 | 0)) {
   i2 = 2;
   break;
  }
  i1 = i3 + 1 | 0;
  if ((i1 | 0) == 87) {
   i1 = 23347;
   i3 = 87;
   i2 = 5;
   break;
  } else i3 = i1;
 }
 if ((i2 | 0) == 2) if (!i3) i1 = 23347; else {
  i1 = 23347;
  i2 = 5;
 }
 if ((i2 | 0) == 5) while (1) {
  do {
   i2 = i1;
   i1 = i1 + 1 | 0;
  } while ((HEAP8[i2 >> 0] | 0) != 0);
  i3 = i3 + -1 | 0;
  if (!i3) break; else i2 = 5;
 }
 return ___lctrans(i1, HEAP32[i4 + 20 >> 2] | 0) | 0;
}

function _str_next(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 do if (!i2) {
  HEAP32[i3 >> 2] = 0;
  i1 = 0;
 } else {
  if ((HEAP8[i1 >> 0] | 0) >= 0) {
   HEAP32[i3 >> 2] = 1;
   i1 = HEAP8[i1 >> 0] | 0;
   break;
  }
  i1 = _mbtowc(i4, i1, i2) | 0;
  if ((i1 | 0) < 0) {
   HEAP32[i3 >> 2] = 1;
   i1 = -1;
  } else {
   HEAP32[i3 >> 2] = i1;
   i1 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 STACKTOP = i5;
 return i1 | 0;
}

function _System_RuntimeType_GetCustomAttributes(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i1;
 i3 = _RuntimeType_DeRef(i3) | 0;
 i1 = i3 + 16 | 0;
 i3 = i3 + 12 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 HEAP32[i2 >> 2] = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 HEAP32[i2 + 4 >> 2] = i3;
 _Crash(20924, i2);
 return 0;
}

function _fwide(i4, i3) {
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i5 = 0;
 if ((HEAP32[i4 + 76 >> 2] | 0) > -1) i5 = ___lockfile(i4) | 0; else i5 = 0;
 if (!i3) i1 = HEAP8[i4 + 74 >> 0] | 0; else {
  i1 = i4 + 120 | 0;
  if (!(HEAP32[i1 >> 2] | 0)) {
   i2 = (HEAP32[HEAP32[(___pthread_self_616() | 0) + 188 >> 2] >> 2] | 0) == 0;
   HEAP32[i1 >> 2] = i2 ? 32636 : 5800;
  }
  i2 = i4 + 74 | 0;
  i1 = HEAP8[i2 >> 0] | 0;
  if (!(i1 << 24 >> 24)) {
   i1 = (i3 | 0) > 0 ? 1 : -1;
   HEAP8[i2 >> 0] = i1;
  }
 }
 if (i5 | 0) ___unlockfile(i4);
 return i1 << 24 >> 24 | 0;
}

function _RVA_Create(i1, i4, i3) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i2 = 0, i5 = 0, i6 = 0, i7 = 0;
 i5 = _mallocForever(16) | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 + 12 >> 2];
 i7 = HEAP32[i3 + 8 >> 2] | 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = i7;
 i7 = _callocForever(1, i7) | 0;
 HEAP32[i5 + 8 >> 2] = i7;
 HEAP32[i5 + 12 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i5;
 i2 = HEAP32[i3 + 20 >> 2] | 0;
 i1 = HEAP32[i3 + 16 >> 2] | 0;
 if (i2 | 0) {
  i6 = HEAP32[i6 >> 2] | 0;
  _memcpy(i7 | 0, i4 + i2 | 0, (i1 >>> 0 > i6 >>> 0 ? i6 : i1) | 0) | 0;
 }
 return i5 | 0;
}

function _SearchCaseArray(i6, i7) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 L1 : do if (i7 << 16 >> 16 == -1) i1 = -1; else {
  i5 = 337;
  i1 = 674;
  i2 = 0;
  while (1) {
   i3 = HEAP16[i6 + (i5 << 1) >> 1] | 0;
   i4 = (i3 & 65535) > (i7 & 65535);
   if (!i4) if ((HEAPU16[i6 + (i5 + 1 << 1) >> 1] | 0) > (i7 & 65535)) break;
   i2 = i4 ? i2 : i5;
   i1 = i4 ? i5 : i1;
   if (!i1) {
    i1 = -1;
    break L1;
   }
   i5 = ((i1 - i2 | 0) >>> 1) + i2 | 0;
  }
  i1 = i3 << 16 >> 16 == i7 << 16 >> 16 ? i5 : -1;
 } while (0);
 return i1 | 0;
}

function _tan(d1) {
 d1 = +d1;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i4;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 do if (i3 >>> 0 < 1072243196) {
  if (i3 >>> 0 >= 1044381696) d1 = +___tan(d1, 0.0, 0);
 } else if (i3 >>> 0 > 2146435071) {
  d1 = d1 - d1;
  break;
 } else {
  i3 = ___rem_pio2(d1, i2) | 0;
  d1 = +___tan(+HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3], i3 & 1);
  break;
 } while (0);
 STACKTOP = i4;
 return +d1;
}

function _readdir_r(i1, i3, i5) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i5 = i5 | 0;
 var i2 = 0, i4 = 0, i6 = 0;
 i4 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 i6 = i1 + 16 | 0;
 ___lock(i6 | 0);
 HEAP32[(___errno_location() | 0) >> 2] = 0;
 i2 = _readdir(i1) | 0;
 i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 if (!i1) {
  HEAP32[(___errno_location() | 0) >> 2] = i4;
  if (!i2) i1 = 0; else {
   _memcpy(i3 | 0, i2 | 0, HEAPU16[i2 + 8 >> 1] | 0 | 0) | 0;
   i1 = i3;
  }
  ___unlock(i6 | 0);
  HEAP32[i5 >> 2] = i1;
  i1 = 0;
 } else ___unlock(i6 | 0);
 return i1 | 0;
}

function _RunFinalizer(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = _GetNextFinalizer() | 0;
 if (!i2) i1 = 0; else {
  i3 = (_Heap_GetType(i2) | 0) + 124 | 0;
  i1 = _MethodState_Direct(i1, HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, HEAP32[i1 + 20 >> 2] | 0, 0, 0) | 0;
  HEAP32[i1 + 20 >> 2] = i2;
  i3 = (HEAP32[i1 >> 2] | 0) + 28 | 0;
  HEAP32[i1 + 44 + (HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + 8 >> 2] | 0) >> 2] = i2;
 }
 return i1 | 0;
}

function _System_RuntimeType_IsDefined(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i1;
 i3 = _RuntimeType_DeRef(i3) | 0;
 i1 = i3 + 16 | 0;
 i3 = i3 + 12 | 0;
 i3 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 HEAP32[i2 >> 2] = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 HEAP32[i2 + 4 >> 2] = i3;
 _Crash(20884, i2);
 return 0;
}

function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = i1;
 L1 : do if (!(i4 & 3)) i3 = 4; else {
  i2 = i4;
  while (1) {
   if (!(HEAP8[i1 >> 0] | 0)) {
    i1 = i2;
    break L1;
   }
   i1 = i1 + 1 | 0;
   i2 = i1;
   if (!(i2 & 3)) {
    i3 = 4;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 4) {
  while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) i1 = i1 + 4 | 0; else break;
  }
  if ((i2 & 255) << 24 >> 24) do i1 = i1 + 1 | 0; while ((HEAP8[i1 >> 0] | 0) != 0);
 }
 return i1 - i4 | 0;
}

function ___stdio_seek(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i6 = i5;
 i4 = i5 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 + 60 >> 2];
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i2;
 HEAP32[i6 + 12 >> 2] = i4;
 HEAP32[i6 + 16 >> 2] = i3;
 if ((___syscall_ret(___syscall140(140, i6 | 0) | 0) | 0) < 0) {
  HEAP32[i4 >> 2] = -1;
  i1 = -1;
 } else i1 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i5;
 return i1 | 0;
}

function _threebyte_strstr(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0;
 i4 = (HEAPU8[i1 + 1 >> 0] | 0) << 16 | (HEAPU8[i1 >> 0] | 0) << 24 | (HEAPU8[i1 + 2 >> 0] | 0) << 8;
 i2 = i3 + 2 | 0;
 i1 = HEAP8[i2 >> 0] | 0;
 i3 = (HEAPU8[i3 + 1 >> 0] | 0) << 16 | (HEAPU8[i3 >> 0] | 0) << 24 | (i1 & 255) << 8;
 if (!((i3 | 0) == (i4 | 0) | i1 << 24 >> 24 == 0)) do {
  i2 = i2 + 1 | 0;
  i1 = HEAP8[i2 >> 0] | 0;
  i3 = (i3 | i1 & 255) << 8;
 } while (!((i3 | 0) == (i4 | 0) | i1 << 24 >> 24 == 0));
 return (i1 << 24 >> 24 ? i2 + -2 | 0 : 0) | 0;
}

function _System_Type_MakeGenericType(i1, i2, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i5 = _RuntimeType_DeRef(i1) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i3 + 4 | 0;
 i4 = _malloc(i2 << 2) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP32[i4 + (i1 << 2) >> 2] = _RuntimeType_DeRef(HEAP32[i3 + (i1 << 2) >> 2] | 0) | 0;
  i1 = i1 + 1 | 0;
 }
 i5 = _Generics_GetGenericTypeFromCoreType(i5, i2, i4) | 0;
 _free(i4);
 HEAP32[i6 >> 2] = _Type_GetTypeObject(i5) | 0;
 return 0;
}

function _strncmp(i3, i2, i4) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0, i5 = 0;
 if (!i4) i1 = 0; else {
  i1 = HEAP8[i3 >> 0] | 0;
  L3 : do if (!(i1 << 24 >> 24)) i1 = 0; else while (1) {
   i4 = i4 + -1 | 0;
   i5 = HEAP8[i2 >> 0] | 0;
   if (!(i1 << 24 >> 24 == i5 << 24 >> 24 & ((i4 | 0) != 0 & i5 << 24 >> 24 != 0))) break L3;
   i3 = i3 + 1 | 0;
   i2 = i2 + 1 | 0;
   i1 = HEAP8[i3 >> 0] | 0;
   if (!(i1 << 24 >> 24)) {
    i1 = 0;
    break;
   }
  } while (0);
  i1 = (i1 & 255) - (HEAPU8[i2 >> 0] | 0) | 0;
 }
 return i1 | 0;
}

function _puts(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i3 = HEAP32[1507] | 0;
 if ((HEAP32[i3 + 76 >> 2] | 0) > -1) i4 = ___lockfile(i3) | 0; else i4 = 0;
 do if ((_fputs(i1, i3) | 0) < 0) i1 = -1; else {
  if ((HEAP8[i3 + 75 >> 0] | 0) != 10) {
   i1 = i3 + 20 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 >>> 0 < (HEAP32[i3 + 16 >> 2] | 0) >>> 0) {
    HEAP32[i1 >> 2] = i2 + 1;
    HEAP8[i2 >> 0] = 10;
    i1 = 0;
    break;
   }
  }
  i1 = (___overflow(i3, 10) | 0) >> 31;
 } while (0);
 if (i4 | 0) ___unlockfile(i3);
 return i1 | 0;
}

function _System_Array_Clear(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (_Heap_GetType(i1) | 0) + 96 | 0;
 i2 = (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + 64 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 _memset((Math_imul(i2, i4) | 0) + (i1 + 4) | 0, 0, Math_imul(i2, i3) | 0) | 0;
 return 0;
}

function _connect(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i5 = i4;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i3;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i5 >> 2] = 3;
 HEAP32[i5 + 4 >> 2] = i6;
 i3 = ___syscall_ret(___syscall102(102, i5 | 0) | 0) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _System_String_InternalIndexOf(i2, i1, i6) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0;
 i5 = HEAP16[i1 >> 1] | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
 i3 = i1 ? 1 : -1;
 i4 = (i1 ? i4 : 0 - i4 | 0) + i7 | 0;
 i2 = i2 + 4 | 0;
 i1 = i7;
 while (1) {
  if ((i1 | 0) == (i4 | 0)) {
   i1 = -1;
   break;
  }
  if ((HEAP16[i2 + (i1 << 1) >> 1] | 0) == i5 << 16 >> 16) break;
  i1 = i1 + i3 | 0;
 }
 HEAP32[i6 >> 2] = i1;
 return 0;
}

function _accept(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i5 = i4;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i3;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i5 >> 2] = 5;
 HEAP32[i5 + 4 >> 2] = i6;
 i3 = ___syscall_ret(___syscall102(102, i5 | 0) | 0) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _bind(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i5 = i4;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i3;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i5 >> 2] = 2;
 HEAP32[i5 + 4 >> 2] = i6;
 i3 = ___syscall_ret(___syscall102(102, i5 | 0) | 0) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = _Heap_GetType(i3) | 0;
 i2 = i2 + 96 | 0;
 i2 = (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) + 64 | 0;
 _memcpy(i3 + 4 | 0, i1 | 0, Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, HEAP32[i3 >> 2] | 0) | 0) | 0;
 return 0;
}

function _Type_IsImplemented(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0;
 i4 = i1 + 76 | 0;
 i2 = i1 + 72 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) {
   i1 = 0;
   break;
  }
  if ((HEAP32[(HEAPU8[i4 >> 0] | HEAPU8[i4 + 1 >> 0] << 8 | HEAPU8[i4 + 2 >> 0] << 16 | HEAPU8[i4 + 3 >> 0] << 24) + (i1 * 12 | 0) >> 2] | 0) == (i3 | 0)) {
   i1 = 1;
   break;
  } else i1 = i1 + 1 | 0;
 }
 return i1 | 0;
}

function _listen(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i4 = i3;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i5 + 4 >> 2] = i2;
 i2 = i5 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = 0;
 HEAP32[i4 >> 2] = 4;
 HEAP32[i4 + 4 >> 2] = i5;
 i2 = ___syscall_ret(___syscall102(102, i4 | 0) | 0) | 0;
 STACKTOP = i3;
 return i2 | 0;
}

function ___stdout_write(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i4 = i5;
 HEAP32[i1 + 36 >> 2] = 155;
 if (!(HEAP32[i1 >> 2] & 64)) {
  HEAP32[i4 >> 2] = HEAP32[i1 + 60 >> 2];
  HEAP32[i4 + 4 >> 2] = 21523;
  HEAP32[i4 + 8 >> 2] = i5 + 16;
  if (___syscall54(54, i4 | 0) | 0) HEAP8[i1 + 75 >> 0] = -1;
 }
 i4 = ___stdio_write(i1, i2, i3) | 0;
 STACKTOP = i5;
 return i4 | 0;
}

function _Heap_SetRoots(i1, i5, i6) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i7 = 0;
 i7 = i1 + 4 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if (i2 >>> 0 < i3 >>> 0) i1 = HEAP32[i4 >> 2] | 0; else {
  HEAP32[i1 >> 2] = i3 << 1;
  i1 = _realloc(HEAP32[i4 >> 2] | 0, i3 << 4) | 0;
  HEAP32[i4 >> 2] = i1;
  i2 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2 + 1;
 HEAP32[i1 + (i2 << 3) >> 2] = i6 >>> 2;
 HEAP32[i1 + (i2 << 3) + 4 >> 2] = i5;
 return;
}

function _System_String_InternalFromUInt64(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(80);
 i5 = i1;
 i4 = i1 + 8 | 0;
 i7 = i2;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 i2 = i5;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = i6;
 _swprintf(i4, 30, 4496, i5) | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrUTF16(i4) | 0;
 STACKTOP = i1;
 return 0;
}

function _System_String_InternalFromInt64(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(80);
 i5 = i1;
 i4 = i1 + 8 | 0;
 i7 = i2;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 i2 = i5;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = i6;
 _swprintf(i4, 30, 4464, i5) | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrUTF16(i4) | 0;
 STACKTOP = i1;
 return 0;
}

function _lseek(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i6 = i4;
 i5 = i4 + 20 | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i2;
 HEAP32[i6 + 12 >> 2] = i5;
 HEAP32[i6 + 16 >> 2] = i3;
 i3 = (___syscall_ret(___syscall140(140, i6 | 0) | 0) | 0) != 0;
 STACKTOP = i4;
 return (i3 ? -1 : HEAP32[i5 >> 2] | 0) | 0;
}

function _ConvertStringToANSI(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i5;
 i2 = _SystemString_GetString(i1, i3) | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 i4 = _malloc(i3 + 1 | 0) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  HEAP8[i4 + i1 >> 0] = HEAP16[i2 + (i1 << 1) >> 1];
  i1 = i1 + 1 | 0;
 }
 HEAP8[i4 + i3 >> 0] = 0;
 STACKTOP = i5;
 return i4 | 0;
}

function _DeepCopyTypeStack(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = _malloc(12) | 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 + 4 >> 2] = i5;
 if (!i5) HEAP32[i4 >> 2] = 0; else {
  i5 = i5 << 2;
  i6 = _malloc(i5) | 0;
  HEAP32[i4 >> 2] = i6;
  _memcpy(i6 | 0, HEAP32[i3 >> 2] | 0, i5 | 0) | 0;
 }
 i6 = i1 + (i2 << 2) | 0;
 _FreeTypeStack(HEAP32[i6 >> 2] | 0);
 HEAP32[i6 >> 2] = i4;
 return;
}

function _Thread_StackAlloc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 i7 = i3 + 5e4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 i1 = i4 + i2 | 0;
 HEAP32[i7 >> 2] = i1;
 if (i1 >>> 0 > 5e4) {
  HEAP32[i5 >> 2] = i1;
  _Crash(21150, i5);
 } else {
  STACKTOP = i6;
  return i3 + i4 | 0;
 }
 return 0;
}

function _LoadFileFromDisk(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = _open(i1, 0, i4) | 0;
 if ((i3 | 0) > -1) {
  i2 = _lseek(i3, 0, 2) | 0;
  _lseek(i3, 0, 0) | 0;
  i1 = _mallocForever(i2) | 0;
  if (!i1) i1 = 0; else if ((_read(i3, i1, i2) | 0) != (i2 | 0)) {
   _free(i1);
   i1 = 0;
  }
  _close(i3) | 0;
 } else i1 = 0;
 STACKTOP = i4;
 return i1 | 0;
}
function _opendir(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i4 + 8 | 0;
 i2 = _open(i1, 589824, i4) | 0;
 do if ((i2 | 0) < 0) i1 = 0; else {
  i1 = _calloc(1, 2072) | 0;
  if (!i1) {
   HEAP32[i3 >> 2] = i2;
   ___syscall6(6, i3 | 0) | 0;
   i1 = 0;
   break;
  } else {
   HEAP32[i1 >> 2] = i2;
   break;
  }
 } while (0);
 STACKTOP = i4;
 return i1 | 0;
}

function _select(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i7 = i6;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 4 >> 2] = i2;
 HEAP32[i7 + 8 >> 2] = i3;
 HEAP32[i7 + 12 >> 2] = i4;
 HEAP32[i7 + 16 >> 2] = i5;
 i5 = ___syscall_ret(___syscall142(142, i7 | 0) | 0) | 0;
 STACKTOP = i6;
 return i5 | 0;
}

function ___towrite(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 74 | 0;
 i3 = HEAP8[i2 >> 0] | 0;
 HEAP8[i2 >> 0] = i3 + 255 | i3;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!(i2 & 8)) {
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i3 = HEAP32[i1 + 44 >> 2] | 0;
  HEAP32[i1 + 28 >> 2] = i3;
  HEAP32[i1 + 20 >> 2] = i3;
  HEAP32[i1 + 16 >> 2] = i3 + (HEAP32[i1 + 48 >> 2] | 0);
  i1 = 0;
 } else {
  HEAP32[i1 >> 2] = i2 | 32;
  i1 = -1;
 }
 return i1 | 0;
}

function _Accept_Check(i1, i3, i5, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i5 = i5 | 0;
 i2 = i2 | 0;
 var i4 = 0, i6 = 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 i2 = _accept(HEAP32[i3 >> 2] | 0, 0, 0) | 0;
 if ((i2 | 0) == -1) {
  i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
  if ((i1 | 0) == 11) i1 = 0; else {
   i2 = 0;
   i6 = 3;
  }
 } else {
  i1 = 0;
  i6 = 3;
 }
 if ((i6 | 0) == 3) {
  HEAP32[i5 >> 2] = i2;
  HEAP32[i4 >> 2] = i1;
  i1 = 1;
 }
 return i1 | 0;
}

function _System_IO_FileInternal_Read(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = _read(i5, _SystemArray_LoadElementAddress(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0, i1) | 0;
 if ((i2 | 0) < 0) i1 = HEAP32[(___errno_location() | 0) >> 2] | 0; else i1 = 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i4 >> 2] = i2;
 return 0;
}

function _GetUnalignedU32(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i6 = i7 + 1 | 0;
 HEAP32[i2 >> 2] = i6;
 i5 = HEAPU8[i1 + i7 >> 0] | 0;
 i4 = i7 + 2 | 0;
 HEAP32[i2 >> 2] = i4;
 i6 = HEAPU8[i1 + i6 >> 0] | 0;
 i3 = i7 + 3 | 0;
 HEAP32[i2 >> 2] = i3;
 i4 = HEAPU8[i1 + i4 >> 0] | 0;
 HEAP32[i2 >> 2] = i7 + 4;
 return i6 << 8 | i5 | i4 << 16 | (HEAPU8[i1 + i3 >> 0] | 0) << 24 | 0;
}

function _microTime() {
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i1;
 _gettimeofday(i2 | 0, 0) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i3 = ___muldi3(i3 | 0, ((i3 | 0) < 0) << 31 >> 31 | 0, 1e6, 0) | 0;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = _i64Add(i3 | 0, tempRet0 | 0, i2 | 0, ((i2 | 0) < 0) << 31 >> 31 | 0) | 0;
 STACKTOP = i1;
 return i2 | 0;
}

function _TreeInsert(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i4 = HEAP32[7988] | 0;
 i3 = i4;
 if ((i4 | 0) == (i1 | 0)) {
  HEAP8[i2 + 8 >> 0] = 1;
  HEAP32[i2 + 4 >> 2] = i3;
  HEAP32[i2 >> 2] = i3;
  HEAP8[i2 + 9 >> 0] = 0;
  return i2 | 0;
 } else {
  i4 = i1 + ((i1 >>> 0 < i2 >>> 0 & 1) << 2) | 0;
  HEAP32[i4 >> 2] = _TreeInsert(HEAP32[i4 >> 2] | 0, i2) | 0;
  return _TreeSplit(_TreeSkew(i1) | 0) | 0;
 }
 return 0;
}

function ___sin(d1, d2, i5) {
 d1 = +d1;
 d2 = +d2;
 i5 = i5 | 0;
 var d3 = 0.0, d4 = 0.0, d6 = 0.0;
 d6 = d1 * d1;
 d3 = d6 * (d6 * d6) * (d6 * 1.58969099521155e-10 + -2.5050760253406863e-08) + (d6 * (d6 * 2.7557313707070068e-06 + -1.984126982985795e-04) + .00833333333332249);
 d4 = d6 * d1;
 if (!i5) d1 = d4 * (d6 * d3 + -.16666666666666632) + d1; else d1 = d1 - (d4 * .16666666666666632 + (d6 * (d2 * .5 - d4 * d3) - d2));
 return +d1;
}

function _Diag_Print() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i1;
 i4 = _microTime() | 0;
 i3 = 31920;
 i3 = _i64Subtract(i4 | 0, tempRet0 | 0, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAPF64[i2 >> 3] = (+(i3 >>> 0) + 4294967296.0 * +(tempRet0 >>> 0)) / 1.0e6;
 _printf(13155, i2) | 0;
 STACKTOP = i1;
 return;
}

function _strcmp(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0;
 i1 = HEAP8[i2 >> 0] | 0;
 i4 = HEAP8[i3 >> 0] | 0;
 if (i1 << 24 >> 24 == 0 ? 1 : i1 << 24 >> 24 != i4 << 24 >> 24) i2 = i4; else {
  do {
   i2 = i2 + 1 | 0;
   i3 = i3 + 1 | 0;
   i1 = HEAP8[i2 >> 0] | 0;
   i4 = HEAP8[i3 >> 0] | 0;
  } while (!(i1 << 24 >> 24 == 0 ? 1 : i1 << 24 >> 24 != i4 << 24 >> 24));
  i2 = i4;
 }
 return (i1 & 255) - (i2 & 255) | 0;
}

function _System_String_InternalConcat(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = _CreateStringHeapObj((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0) | 0;
 _memcpy(i2 + 4 | 0, i4 + 4 | 0, HEAP32[i4 >> 2] << 1 | 0) | 0;
 _memcpy(i2 + 4 + (HEAP32[i4 >> 2] << 1) | 0, i1 + 4 | 0, HEAP32[i1 >> 2] << 1 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _memcmp(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0;
 L1 : do if (!i2) i1 = 0; else {
  while (1) {
   i4 = HEAP8[i1 >> 0] | 0;
   i5 = HEAP8[i3 >> 0] | 0;
   if (i4 << 24 >> 24 != i5 << 24 >> 24) break;
   i2 = i2 + -1 | 0;
   if (!i2) {
    i1 = 0;
    break L1;
   } else {
    i1 = i1 + 1 | 0;
    i3 = i3 + 1 | 0;
   }
  }
  i1 = (i4 & 255) - (i5 & 255) | 0;
 } while (0);
 return i1 | 0;
}

function _sbrk(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = HEAP32[DYNAMICTOP_PTR >> 2] | 0;
 i2 = i3 + i1 | 0;
 if ((i1 | 0) > 0 & (i2 | 0) < (i3 | 0) | (i2 | 0) < 0) {
  abortOnCannotGrowMemory() | 0;
  ___setErrNo(12);
  return -1;
 }
 HEAP32[DYNAMICTOP_PTR >> 2] = i2;
 if ((i2 | 0) > (getTotalMemory() | 0)) if (!(enlargeMemory() | 0)) {
  HEAP32[DYNAMICTOP_PTR >> 2] = i3;
  ___setErrNo(12);
  return -1;
 }
 return i3 | 0;
}

function _globfree(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0;
 i5 = i4 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (HEAP32[i4 >> 2] | 0) {
  i3 = i4 + 8 | 0;
  i2 = 0;
  do {
   _free((HEAP32[i1 + ((HEAP32[i3 >> 2] | 0) + i2 << 2) >> 2] | 0) + -4 | 0);
   i2 = i2 + 1 | 0;
   i1 = HEAP32[i5 >> 2] | 0;
  } while (i2 >>> 0 < (HEAP32[i4 >> 2] | 0) >>> 0);
 }
 _free(i1);
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 return;
}

function _System_String_InternalFromSingle(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(80);
 i5 = i1;
 i4 = i1 + 8 | 0;
 HEAPF64[i5 >> 3] = +Math_fround(HEAPF32[i2 >> 2]);
 _swprintf(i4, 30, 4516, i5) | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrUTF16(i4) | 0;
 STACKTOP = i1;
 return 0;
}

function _ConvertStringToUnicode(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i2;
 i5 = _SystemString_GetString(i1, i3) | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 i4 = i3 << 1;
 i1 = _malloc(i4 + 2 | 0) | 0;
 _memcpy(i1 | 0, i5 | 0, i4 | 0) | 0;
 HEAP16[i1 + (i3 << 1) >> 1] = 0;
 STACKTOP = i2;
 return i1 | 0;
}

function _fwrite(i2, i4, i1, i3) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i5 = 0, i6 = 0;
 i5 = Math_imul(i1, i4) | 0;
 i1 = (i4 | 0) == 0 ? 0 : i1;
 if ((HEAP32[i3 + 76 >> 2] | 0) > -1) {
  i6 = (___lockfile(i3) | 0) == 0;
  i2 = ___fwritex(i2, i5, i3) | 0;
  if (!i6) ___unlockfile(i3);
 } else i2 = ___fwritex(i2, i5, i3) | 0;
 if ((i2 | 0) != (i5 | 0)) i1 = (i2 >>> 0) / (i4 >>> 0) | 0;
 return i1 | 0;
}

function _System_String_Equals(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) i1 = 1; else if ((i3 | 0) == 0 | (i1 | 0) == 0) i1 = 0; else {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) == (HEAP32[i1 >> 2] | 0)) i1 = (_memcmp(i3 + 4 | 0, i1 + 4 | 0, i2 << 1) | 0) == 0 & 1; else i1 = 0;
 }
 HEAP32[i4 >> 2] = i1;
 return 0;
}

function _MetaData_GetUserString(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 HEAP32[i4 >> 2] = (HEAP32[i1 + 12 >> 2] | 0) + (i2 & 16777215);
 i1 = _MetaData_DecodeHeapEntryLength(i4) | 0;
 if (i3 | 0) HEAP32[i3 >> 2] = i1 + -1;
 STACKTOP = i5;
 return HEAP32[i4 >> 2] | 0;
}

function _Thread_SetEntryPoint(i3, i1, i2, i4, i5) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i1 = _MethodState(i3, i1, i2, 0) | 0;
 HEAP32[i3 + 20 >> 2] = i1;
 if (i5 | 0) {
  i3 = (HEAP32[i1 >> 2] | 0) + 28 | 0;
  _memcpy(i1 + 44 + (HEAP32[(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + 8 >> 2] | 0) | 0, i4 | 0, i5 | 0) | 0;
 }
 return;
}

function _RVA_FindData(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 L1 : do if (!i3) i1 = 0; else {
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) {
    i1 = 0;
    break L1;
   }
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 >>> 0 <= i3 >>> 0) if (((HEAP32[i1 + 4 >> 2] | 0) + i2 | 0) >>> 0 > i3 >>> 0) break;
   i1 = i1 + 12 | 0;
  }
  i1 = (HEAP32[i1 + 8 >> 2] | 0) + (i3 - i2) | 0;
 } while (0);
 return i1 | 0;
}

function _System_IO_FileInternal_GetCurrentDirectory(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i5 = i1;
 i4 = HEAP32[i2 >> 2] | 0;
 _getcwd(i5, 256) | 0;
 i2 = _SystemString_FromCharPtrASCII(i5) | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 STACKTOP = i1;
 return 0;
}

function _wcscmp(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0 | ((i1 | 0) == 0 | (i1 | 0) != (i4 | 0))) i2 = i4; else {
  do {
   i2 = i2 + 4 | 0;
   i3 = i3 + 4 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   i4 = HEAP32[i3 >> 2] | 0;
  } while (!((i4 | 0) == 0 | ((i1 | 0) == 0 | (i1 | 0) != (i4 | 0))));
  i2 = i4;
 }
 return i1 - i2 | 0;
}

function _System_String_ToUpperInvariant(i4, i1, i5) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0;
 i2 = _CreateStringHeapObj(HEAP32[i4 >> 2] | 0) | 0;
 i3 = i4 + 4 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAP32[i4 >> 2] | 0) >>> 0) break;
  HEAP16[i2 + 4 + (i1 << 1) >> 1] = _Char_ToUpperInvariant(HEAP16[i3 + (i1 << 1) >> 1] | 0) | 0;
  i1 = i1 + 1 | 0;
 }
 HEAP32[i5 >> 2] = i2;
 return 0;
}

function _System_String_ToLowerInvariant(i4, i1, i5) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0;
 i2 = _CreateStringHeapObj(HEAP32[i4 >> 2] | 0) | 0;
 i3 = i4 + 4 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAP32[i4 >> 2] | 0) >>> 0) break;
  HEAP16[i2 + 4 + (i1 << 1) >> 1] = _Char_ToLowerInvariant(HEAP16[i3 + (i1 << 1) >> 1] | 0) | 0;
  i1 = i1 + 1 | 0;
 }
 HEAP32[i5 >> 2] = i2;
 return 0;
}

function _System_String_InternalFromDouble(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(80);
 i5 = i1;
 i4 = i1 + 8 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i2 >> 3];
 _swprintf(i4, 30, 4536, i5) | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrUTF16(i4) | 0;
 STACKTOP = i1;
 return 0;
}

function _System_String_InternalFromUInt32(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i5 = i1;
 i4 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 _swprintf(i4, 30, 4484, i5) | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrUTF16(i4) | 0;
 STACKTOP = i1;
 return 0;
}

function _TreeSplit(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP8[i1 + 8 >> 0] | 0;
 if (!(i4 << 24 >> 24 == 0 ? 1 : (HEAP8[(HEAP32[i3 + 4 >> 2] | 0) + 8 >> 0] | 0) != i4 << 24 >> 24)) {
  HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i3 >> 2] = i1;
  i1 = i3 + 8 | 0;
  HEAP8[i1 >> 0] = (HEAP8[i1 >> 0] | 0) + 1 << 24 >> 24;
  i1 = i3;
 }
 return i1 | 0;
}

function _System_String_InternalFromInt32(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i5 = i1;
 i4 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 _swprintf(i4, 30, 4452, i5) | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrUTF16(i4) | 0;
 STACKTOP = i1;
 return 0;
}

function _SystemString_FromUserStrings(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i3;
 i1 = _MetaData_GetUserString(i1, i2, i4) | 0;
 i2 = _CreateStringHeapObj((HEAP32[i4 >> 2] | 0) >>> 1) | 0;
 _memcpy(i2 + 4 | 0, i1 | 0, HEAP32[i4 >> 2] | 0) | 0;
 STACKTOP = i3;
 return i2 | 0;
}

function _SystemArray_NewVector(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 96 | 0;
 i3 = (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + 64 | 0;
 i1 = _Heap_Alloc(i1, (Math_imul(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, i2) | 0) + 4 | 0) | 0;
 HEAP32[i1 >> 2] = i2;
 return i1 | 0;
}

function _Attrs(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(80);
 i2 = i4;
 if (!(_stat(i1, i2) | 0)) {
  i1 = (HEAP32[i2 + 12 >> 2] | 0) >>> 10 & 16;
  i2 = 0;
 } else {
  i1 = -1;
  i2 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i2;
 STACKTOP = i4;
 return i1 | 0;
}

function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = i1 & 65535;
 i5 = i2 & 65535;
 i3 = Math_imul(i5, i6) | 0;
 i4 = i1 >>> 16;
 i1 = (i3 >>> 16) + (Math_imul(i5, i4) | 0) | 0;
 i5 = i2 >>> 16;
 i2 = Math_imul(i5, i6) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i5, i4) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i3 & 65535 | 0) | 0;
}

function _copysign(d1, d2) {
 d1 = +d1;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i4 = HEAP32[tempDoublePtr >> 2] | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 HEAPF64[tempDoublePtr >> 3] = d2;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] & -2147483648 | i3 & 2147483647;
 HEAP32[tempDoublePtr >> 2] = i4;
 HEAP32[tempDoublePtr + 4 >> 2] = i3;
 return +(+HEAPF64[tempDoublePtr >> 3]);
}

function _twobyte_strstr(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i5 = (HEAPU8[i1 >> 0] | 0) << 8 | (HEAPU8[i1 + 1 >> 0] | 0);
 i4 = HEAPU8[i2 >> 0] | 0;
 while (1) {
  i1 = i2 + 1 | 0;
  i3 = HEAP8[i1 >> 0] | 0;
  if (!(i3 << 24 >> 24)) break;
  i4 = i4 << 8 & 65280 | i3 & 255;
  if ((i4 | 0) == (i5 | 0)) break; else i2 = i1;
 }
 return (i3 << 24 >> 24 ? i2 : 0) | 0;
}

function ___cos(d1, d2) {
 d1 = +d1;
 d2 = +d2;
 var d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0;
 d3 = d1 * d1;
 d4 = d3 * d3;
 d5 = d3 * .5;
 d6 = 1.0 - d5;
 return +(d6 + (1.0 - d6 - d5 + (d3 * (d3 * (d3 * (d3 * 2.480158728947673e-05 + -.001388888888887411) + .0416666666666666) + d4 * d4 * (d3 * (2.087572321298175e-09 - d3 * 1.1359647557788195e-11) + -2.7557314351390663e-07)) - d1 * d2)));
}

function _SystemArray_LoadElementAddress(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (_Heap_GetType(i1) | 0) + 96 | 0;
 i3 = (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) + 64 | 0;
 return i1 + 4 + (Math_imul(HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24, i2) | 0) | 0;
}

function _Heap_SyncExit(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + -20 | 0;
 i3 = _Thread_GetCurrent() | 0;
 i1 = HEAP32[i1 + -4 >> 2] | 0;
 if (!i1) i1 = 0; else if ((HEAP32[i1 >> 2] | 0) == (i3 | 0)) {
  i1 = i1 + 4 | 0;
  i3 = (HEAP32[i1 >> 2] | 0) + -1 | 0;
  HEAP32[i1 >> 2] = i3;
  if (!i3) {
   _DeleteSync(i2);
   i1 = 1;
  } else i1 = 1;
 } else i1 = 0;
 return i1 | 0;
}

function _shl(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i5 = i4 + 4 | 0;
 if (i1 >>> 0 > 31) {
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  HEAP32[i4 >> 2] = 0;
  i1 = i1 + -32 | 0;
  i2 = 0;
 } else {
  i2 = HEAP32[i4 >> 2] | 0;
  i3 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i2 >>> (32 - i1 | 0) | i3 << i1;
 HEAP32[i4 >> 2] = i2 << i1;
 return;
}

function _System_Console_Internal_KeyAvailable(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i1 = i2;
 if (!(_Internal_ReadKey_Check(0, 0, i1, 0) | 0)) i1 = 0; else {
  HEAP32[1112] = HEAP32[i1 >> 2];
  i1 = 1;
 }
 HEAP32[i3 >> 2] = i1;
 STACKTOP = i2;
 return 0;
}

function _AddFinalizer(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i2 = HEAP32[7985] | 0;
 i1 = HEAP32[7983] | 0;
 if ((i2 | 0) < (i1 | 0)) {
  i3 = HEAP32[7984] | 0;
  i1 = i2;
 } else {
  HEAP32[7983] = i1 << 1;
  i3 = _realloc(HEAP32[7984] | 0, i1 << 3) | 0;
  HEAP32[7984] = i3;
  i1 = HEAP32[7985] | 0;
 }
 HEAP32[7985] = i1 + 1;
 HEAP32[i3 + (i1 << 2) >> 2] = i4;
 return;
}

function _memmove(i1, i4, i2) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i4 | 0) < (i1 | 0) & (i1 | 0) < (i4 + i2 | 0)) {
  i3 = i1;
  i4 = i4 + i2 | 0;
  i1 = i1 + i2 | 0;
  while ((i2 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i4 = i4 - 1 | 0;
   i2 = i2 - 1 | 0;
   HEAP8[i1 >> 0] = HEAP8[i4 >> 0] | 0;
  }
  i1 = i3;
 } else _memcpy(i1, i4, i2) | 0;
 return i1 | 0;
}

function _Heap_SyncTryEnter(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = _Thread_GetCurrent() | 0;
 i1 = _EnsureSync(i1 + -20 | 0) | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!i2) {
  HEAP32[i1 >> 2] = i3;
  HEAP32[i1 + 4 >> 2] = 1;
  i1 = 1;
 } else if ((i2 | 0) == (i3 | 0)) {
  i1 = i1 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = 1;
 } else i1 = 0;
 return i1 | 0;
}

function _shr(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i5 = i4 + 4 | 0;
 if (i1 >>> 0 > 31) {
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i3;
  HEAP32[i5 >> 2] = 0;
  i1 = i1 + -32 | 0;
  i2 = 0;
 } else {
  i2 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i2 << 32 - i1 | i3 >>> i1;
 HEAP32[i5 >> 2] = i2 >>> i1;
 return;
}

function _Type_GetTypeObject(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i3 = i2 + 128 | 0;
 i1 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 if (!i1) {
  i1 = _RuntimeType_New(i2) | 0;
  HEAP8[i3 >> 0] = i1;
  HEAP8[i3 + 1 >> 0] = i1 >> 8;
  HEAP8[i3 + 2 >> 0] = i1 >> 16;
  HEAP8[i3 + 3 >> 0] = i1 >> 24;
 }
 return i1 | 0;
}

function _SystemWeakReference_TargetGone(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 i3 = (i1 | 0) == 0;
 L1 : while (1) {
  i1 = i2;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) break L1;
   if (i3) if (HEAP32[i1 + 4 >> 2] | 0) break;
   HEAP32[i1 >> 2] = 0;
   i1 = i1 + 8 | 0;
  }
  HEAP32[i2 >> 2] = i1;
  i2 = i1 + 8 | 0;
 }
 HEAP32[i2 >> 2] = 0;
 return;
}

function _read(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i4;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i5 + 4 >> 2] = i2;
 HEAP32[i5 + 8 >> 2] = i3;
 i3 = ___syscall_ret(___syscall3(3, i5 | 0) | 0) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _System_Type_EnsureAssemblyLoaded(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i4 = i1;
 _DotNetStringToCString(i4, HEAP32[i2 >> 2] | 0);
 _CLIFile_GetMetaDataForAssembly(i4) | 0;
 HEAP32[i3 >> 2] = 0;
 STACKTOP = i1;
 return 0;
}

function _Internal_Debugger_Resume_Check(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 if (!(HEAP32[7997] | 0)) i1 = 0; else {
  _log_f(1, 21100, i2);
  HEAP32[7997] = 0;
  HEAP32[7998] = 0;
  i1 = 1;
 }
 STACKTOP = i2;
 return i1 | 0;
}

function _MetaData_LoadGUIDs(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i4;
 i3 = i3 >>> 4;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i2;
 HEAP32[i5 >> 2] = i3;
 _log_f(1, 16490, i5);
 STACKTOP = i4;
 return;
}

function ___uflow(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i2 = i3;
 if (!(___toread(i1) | 0)) if ((FUNCTION_TABLE_iiii[HEAP32[i1 + 32 >> 2] & 255](i1, i2, 1) | 0) == 1) i1 = HEAPU8[i2 >> 0] | 0; else i1 = -1; else i1 = -1;
 STACKTOP = i3;
 return i1 | 0;
}

function _CopyParameters(i2, i3, i4, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 if (!i1) i1 = 0; else {
  HEAP32[i2 >> 2] = i1;
  i1 = 4;
 }
 i3 = i3 + 40 | 0;
 i3 = (HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) - i1 | 0;
 _memmove(i2 + i1 | 0, i4 + (0 - i3) | 0, i3 | 0) | 0;
 return i3 | 0;
}

function _System_String_ctor_CharInt32(i1, i2, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0;
 i4 = HEAP32[i2 >> 2] & 65535;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 i3 = _CreateStringHeapObj(i2) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP16[i3 + 4 + (i1 << 1) >> 1] = i4;
  i1 = i1 + 1 | 0;
 }
 HEAP32[i5 >> 2] = i3;
 return 0;
}

function _calloc(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0;
 if (!i2) i1 = 0; else {
  i1 = Math_imul(i3, i2) | 0;
  if ((i3 | i2) >>> 0 > 65535) i1 = ((i1 >>> 0) / (i2 >>> 0) | 0 | 0) == (i3 | 0) ? i1 : -1;
 }
 i2 = _malloc(i1) | 0;
 if (!i2) return i2 | 0;
 if (!(HEAP32[i2 + -4 >> 2] & 3)) return i2 | 0;
 _memset(i2 | 0, 0, i1 | 0) | 0;
 return i2 | 0;
}

function _System_Net_Sockets_Internal_Receive(i2, i3, i4) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i5 = 0;
 i1 = _malloc(24) | 0;
 i5 = _malloc(4) | 0;
 HEAP32[i1 >> 2] = -1;
 HEAP32[i1 + 4 >> 2] = 24;
 HEAP32[i1 + 8 >> 2] = i5;
 HEAP32[i5 >> 2] = 0;
 if (_Receive_Check(i2, i3, i4, i1) | 0) {
  _free(i5);
  _free(i1);
  i1 = 0;
 }
 return i1 | 0;
}

function _Type_IsAssignableFrom(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(_Type_IsDerivedFromOrSame(i1, i2) | 0)) {
  i3 = i1 + 8 | 0;
  if (!((HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24) & 32)) i1 = 0; else i1 = (_Type_IsImplemented(i1, i2) | 0) != 0 & 1;
 } else i1 = 1;
 return i1 | 0;
}

function _wctype(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 i4 = HEAP8[i3 >> 0] | 0;
 i1 = 1;
 i2 = 31295;
 i5 = 97;
 while (1) {
  if (i4 << 24 >> 24 == i5 << 24 >> 24) if (!(_strcmp(i3, i2) | 0)) break;
  i2 = i2 + 6 | 0;
  i5 = HEAP8[i2 >> 0] | 0;
  if (!(i5 << 24 >> 24)) {
   i1 = 0;
   break;
  } else i1 = i1 + 1 | 0;
 }
 return i1 | 0;
}

function _System_RuntimeType_Internal_GetGenericTypeDefinition(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _RuntimeType_DeRef(i1) | 0;
 i2 = i1 + 88 | 0;
 i2 = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 HEAP32[i3 >> 2] = _Type_GetTypeObject((i2 | 0) == 0 ? i1 : i2) | 0;
 return 0;
}

function _MetaData_GetBlob(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i4;
 HEAP32[i3 >> 2] = i1;
 i1 = _MetaData_DecodeHeapEntryLength(i3) | 0;
 if (i2 | 0) HEAP32[i2 >> 2] = i1;
 STACKTOP = i4;
 return HEAP32[i3 >> 2] | 0;
}

function _getint_687(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 if (!(_iswdigit(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) | 0)) i1 = 0; else {
  i1 = 0;
  do {
   i3 = HEAP32[i2 >> 2] | 0;
   i1 = (i1 * 10 | 0) + -48 + (HEAP32[i3 >> 2] | 0) | 0;
   i3 = i3 + 4 | 0;
   HEAP32[i2 >> 2] = i3;
  } while ((_iswdigit(HEAP32[i3 >> 2] | 0) | 0) != 0);
 }
 return i1 | 0;
}

function _append(i3, i4, i1, i5) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i2 = 0;
 i1 = _malloc(i1 + 9 | 0) | 0;
 if (!i1) i1 = -1; else {
  HEAP32[HEAP32[i3 >> 2] >> 2] = i1;
  HEAP32[i1 >> 2] = 0;
  i2 = i1 + 4 | 0;
  _strcpy(i2, i4) | 0;
  if (i5 | 0) _strcat(i2, 31381) | 0;
  HEAP32[i3 >> 2] = i1;
  i1 = 0;
 }
 return i1 | 0;
}

function _System_String_CompareOrdinal(i1, i2, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = (i4 | 0) == 0;
 i3 = (i1 | 0) == 0;
 if (i2 | i3) i1 = i2 ? (i2 & i3 ^ 1) << 31 >> 31 : 1; else i1 = _wcscmp(i4 + 4 | 0, i1 + 4 | 0) | 0;
 HEAP32[i5 >> 2] = i1;
 return 0;
}

function _System_RuntimeType_get_IsGenericType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _RuntimeType_DeRef(i1) | 0;
 i2 = i1 + 88 | 0;
 if (!(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24)) i1 = (HEAP8[i1 + 57 >> 0] | 0) != 0 & 1; else i1 = 1;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _System_RuntimeType_GetNestingParentType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = (_RuntimeType_DeRef(i1) | 0) + 120 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 if (!i1) i1 = 0; else i1 = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _getint(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 if (!(_isdigit(HEAP8[HEAP32[i2 >> 2] >> 0] | 0) | 0)) i1 = 0; else {
  i1 = 0;
  do {
   i3 = HEAP32[i2 >> 2] | 0;
   i1 = (i1 * 10 | 0) + -48 + (HEAP8[i3 >> 0] | 0) | 0;
   i3 = i3 + 1 | 0;
   HEAP32[i2 >> 2] = i3;
  } while ((_isdigit(HEAP8[i3 >> 0] | 0) | 0) != 0);
 }
 return i1 | 0;
}

function _System_Net_Sockets_Internal_Send(i1, i3, i4) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i2 = 0;
 i1 = _malloc(24) | 0;
 i2 = _malloc(4) | 0;
 HEAP32[i1 >> 2] = -1;
 HEAP32[i1 + 4 >> 2] = 24;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i2 >> 2] = 0;
 if (_Send_Check(i3, i4, i1) | 0) {
  _free(i2);
  _free(i1);
  i1 = 0;
 }
 return i1 | 0;
}

function _System_String_ctor_CharAIntInt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
 i2 = _CreateStringHeapObj(i1) | 0;
 _memcpy(i2 + 4 | 0, i5 + (i4 << 1) | 0, i1 << 1 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _System_RuntimeType_GetElementType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = (_RuntimeType_DeRef(i1) | 0) + 96 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 if (!i1) i1 = 0; else i1 = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _System_String_ctor_StringIntInt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = _CreateStringHeapObj(i1) | 0;
 _memcpy(i2 + 4 | 0, i5 + 4 + (i4 << 1) | 0, i1 << 1 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _System_RuntimeType_get_BaseType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = (_RuntimeType_DeRef(i1) | 0) + 40 | 0;
 i1 = HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24;
 if (!i1) i1 = 0; else i1 = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _fmt_x(i3, i2, i1, i4) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 if (!((i3 | 0) == 0 & (i2 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = HEAPU8[23243 + (i3 & 15) >> 0] | 0 | i4;
  i3 = _bitshift64Lshr(i3 | 0, i2 | 0, 4) | 0;
  i2 = tempRet0;
 } while (!((i3 | 0) == 0 & (i2 | 0) == 0));
 return i1 | 0;
}

function _allocForever(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i3;
 i2 = (HEAP32[7994] | 0) + i2 | 0;
 HEAP32[7994] = i2;
 HEAP32[i4 >> 2] = i2;
 _log_f(3, 18668, i4);
 STACKTOP = i3;
 return i1 | 0;
}

function _stat(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i3;
 HEAP32[i4 >> 2] = i1;
 HEAP32[i4 + 4 >> 2] = i2;
 i2 = ___syscall_ret(___syscall195(195, i4 | 0) | 0) | 0;
 STACKTOP = i3;
 return i2 | 0;
}

function _log_f(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i5;
 if ((HEAP32[7993] | 0) >>> 0 >= i1 >>> 0) {
  HEAP32[i3 >> 2] = i4;
  _vprintf(i2, i3) | 0;
 }
 STACKTOP = i5;
 return;
}

function _close(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i2;
 HEAP32[i3 >> 2] = _dummy_737(i1) | 0;
 i1 = ___syscall6(6, i3 | 0) | 0;
 i1 = ___syscall_ret((i1 | 0) == -4 ? 0 : i1) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function ___stdio_close(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i2;
 HEAP32[i3 >> 2] = _dummy_737(HEAP32[i1 + 60 >> 2] | 0) | 0;
 i1 = ___syscall_ret(___syscall6(6, i3 | 0) | 0) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function _Debugger_Continue() {
 var i1 = 0, i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 _log_f(1, 20556, i2);
 if (!(HEAP32[7998] | 0)) i1 = 1; else {
  HEAP32[7997] = 1;
  _puts(20582) | 0;
  i1 = _Thread_Execute() | 0;
 }
 STACKTOP = i2;
 return i1 | 0;
}

function _swprintf(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i5;
 HEAP32[i6 >> 2] = i4;
 i4 = _vswprintf(i1, i2, i3, i6) | 0;
 STACKTOP = i5;
 return i4 | 0;
}

function _snprintf(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i5;
 HEAP32[i6 >> 2] = i4;
 i4 = _vsnprintf(i1, i2, i3, i6) | 0;
 STACKTOP = i5;
 return i4 | 0;
}

function _System_Threading_Interlocked_CompareExchange_Int32(i1, i3, i4) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i2 = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 if ((HEAP32[i1 >> 2] | 0) == (i3 | 0)) HEAP32[i1 >> 2] = i2;
 return 0;
}

function _System_RuntimeType_get_IsEnum(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = (_RuntimeType_DeRef(i1) | 0) + 40 | 0;
 HEAP32[i3 >> 2] = (HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24 | 0) == (HEAP32[(HEAP32[8003] | 0) + 120 >> 2] | 0) & 1;
 return 0;
}

function _sn_write(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i1 = (HEAP32[i1 + 16 >> 2] | 0) - i5 | 0;
 i1 = i1 >>> 0 > i3 >>> 0 ? i3 : i1;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i1;
 return i3 | 0;
}

function ___shlim(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 + 104 >> 2] = i2;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i3 - i4 | 0;
 HEAP32[i1 + 108 >> 2] = i5;
 HEAP32[i1 + 100 >> 2] = (i2 | 0) != 0 & (i5 | 0) > (i2 | 0) ? i4 + i2 | 0 : i3;
 return;
}

function _wcsspn(i4, i3) {
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i2 = HEAP32[i4 >> 2] | 0;
 L1 : do if (!i2) i1 = i4; else {
  i1 = i4;
  do {
   if (!(_wcschr(i3, i2) | 0)) break L1;
   i1 = i1 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
  } while ((i2 | 0) != 0);
 } while (0);
 return i1 - i4 >> 2 | 0;
}

function _System_RuntimeType_get_Namespace(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = (_RuntimeType_DeRef(i1) | 0) + 16 | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0;
 return 0;
}

function _TreeSkew(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP8[i1 + 8 >> 0] | 0;
 if (!(i3 << 24 >> 24 == 0 ? 1 : (HEAP8[i2 + 8 >> 0] | 0) != i3 << 24 >> 24)) {
  i3 = i2 + 4 | 0;
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i3 >> 2] = i1;
  i1 = i2;
 }
 return i1 | 0;
}

function _System_RuntimeType_get_Name(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = (_RuntimeType_DeRef(i1) | 0) + 12 | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrASCII(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0;
 return 0;
}

function _sprintf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i4;
 HEAP32[i5 >> 2] = i3;
 i3 = _vsprintf(i1, i2, i5) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _fprintf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i4;
 HEAP32[i5 >> 2] = i3;
 i3 = _vfprintf(i1, i2, i5) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _SystemString_FromCharPtrASCII(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0;
 i3 = _strlen(i2) | 0;
 i4 = _CreateStringHeapObj(i3) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) >= (i3 | 0)) break;
  HEAP16[i4 + 4 + (i1 << 1) >> 1] = HEAP8[i2 + i1 >> 0] | 0;
  i1 = i1 + 1 | 0;
 }
 return i4 | 0;
}

function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i6 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i5) | 0;
 STACKTOP = i6;
 return (tempRet0 = HEAP32[i5 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
}

function _RestoreTypeStack(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0;
 if (!i1) HEAP32[i2 + 4 >> 2] = 0; else {
  i3 = i1 + 4 | 0;
  HEAP32[i2 + 4 >> 2] = HEAP32[i3 >> 2];
  i1 = HEAP32[i1 >> 2] | 0;
  if (i1 | 0) _memcpy(HEAP32[i2 >> 2] | 0, i1 | 0, HEAP32[i3 >> 2] << 2 | 0) | 0;
 }
 return;
}

function _printf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i3;
 HEAP32[i4 >> 2] = i2;
 i2 = _vfprintf(HEAP32[1507] | 0, i1, i4) | 0;
 STACKTOP = i3;
 return i2 | 0;
}

function _System_Threading_Monitor_Internal_TryEnter(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(_Internal_TryEntry_Check(i1, i2, i3, 0) | 0)) {
  i1 = _malloc(24) | 0;
  HEAP32[i1 >> 2] = -1;
  HEAP32[i1 + 4 >> 2] = 25;
  HEAP32[i1 + 8 >> 2] = 0;
 } else i1 = 0;
 return i1 | 0;
}

function _iswprint(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 < 255) i1 = (i1 + 1 & 127) >>> 0 > 32 & 1; else if ((i1 + -57344 | 0) >>> 0 < 8185 | (i1 >>> 0 < 8232 | (i1 + -8234 | 0) >>> 0 < 47062)) i1 = 1; else return (i1 & 65534 | 0) != 65534 & (i1 + -65532 | 0) >>> 0 < 1048580 & 1 | 0;
 return i1 | 0;
}

function _System_Net_Sockets_Internal_Listen(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i3 + 8 >> 2] | 0;
 if (!(_listen(HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0)) i1 = 0; else i1 = HEAP32[(___errno_location() | 0) >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 return 0;
}

function _fmt_o(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (!((i3 | 0) == 0 & (i2 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = i3 & 7 | 48;
  i3 = _bitshift64Lshr(i3 | 0, i2 | 0, 3) | 0;
  i2 = tempRet0;
 } while (!((i3 | 0) == 0 & (i2 | 0) == 0));
 return i1 | 0;
}

function _wcschr(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 if (!i3) i1 = i1 + ((_wcslen(i1) | 0) << 2) | 0; else {
  while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) == 0 | (i2 | 0) == (i3 | 0)) break; else i1 = i1 + 4 | 0;
  }
  i1 = i2 | 0 ? i1 : 0;
 }
 return i1 | 0;
}

function _TreeSearch(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 while (1) {
  if ((i1 | 0) == (HEAP32[7988] | 0)) break;
  if (i1 >>> 0 <= i2 >>> 0) {
   if ((i1 + (_GetSize(i1) | 0) + 20 | 0) >>> 0 >= i2 >>> 0) break;
   i1 = i1 + 4 | 0;
  }
  i1 = HEAP32[i1 >> 2] | 0;
 }
 return i1 | 0;
}

function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i6 = i3;
 i3 = ___muldsi3(i5, i6) | 0;
 i1 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i6) | 0) + (Math_imul(i4, i5) | 0) + i1 | i1 & 0, i3 | 0 | 0) | 0;
}

function _System_Net_Sockets_Internal_Connect(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(_Connect_Check(i1, i2, i3, 0) | 0)) {
  i1 = _malloc(24) | 0;
  HEAP32[i1 >> 2] = -1;
  HEAP32[i1 + 4 >> 2] = 23;
  HEAP32[i1 + 8 >> 2] = 0;
 } else i1 = 0;
 return i1 | 0;
}

function _System_Net_Sockets_Internal_Accept(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(_Accept_Check(i1, i2, i3, 0) | 0)) {
  i1 = _malloc(24) | 0;
  HEAP32[i1 >> 2] = -1;
  HEAP32[i1 + 4 >> 2] = 22;
  HEAP32[i1 + 8 >> 2] = 0;
 } else i1 = 0;
 return i1 | 0;
}

function _MethodState_Delete(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 20 >> 2] | 0;
 if (i4 | 0) _Heap_UnmarkFinalizer(i4);
 _free(HEAP32[i3 + 28 >> 2] | 0);
 _Thread_StackFree(i1, i3);
 HEAP32[i2 >> 2] = 0;
 return;
}

function _System_String_ctor_CharA(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i2 = _CreateStringHeapObj(i1) | 0;
 _memcpy(i2 + 4 | 0, i4 + 4 | 0, i1 << 1 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _Debugger_Reset() {
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 _log_f(1, 20498, i1);
 HEAP32[7995] = 0;
 HEAP32[7998] = 0;
 HEAP32[7997] = 0;
 HEAP32[7999] = 0;
 STACKTOP = i1;
 return 0;
}

function _wmemchr(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 L1 : do if (!i2) i1 = 0; else while (1) {
  if ((HEAP32[i1 >> 2] | 0) == (i3 | 0)) break L1;
  i2 = i2 + -1 | 0;
  if (!i2) {
   i1 = 0;
   break;
  } else i1 = i1 + 4 | 0;
 } while (0);
 return i1 | 0;
}

function _MetaData_LoadUserStrings(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 HEAP32[i2 + 12 >> 2] = i3;
 _log_f(1, 16469, i1);
 STACKTOP = i1;
 return;
}

function _MetaData_GetTableRow(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 & 16777215;
 if (!i3) i1 = 0; else {
  i2 = i2 >>> 24;
  i1 = (HEAP32[i1 + 216 + (i2 << 2) >> 2] | 0) + (Math_imul(i3 + -1 | 0, HEAPU8[32676 + i2 >> 0] | 0) | 0) | 0;
 }
 return i1 | 0;
}

function _fputwc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 76 >> 2] | 0) > -1) {
  i3 = (___lockfile(i2) | 0) == 0;
  i1 = ___fputwc_unlocked(i1, i2) | 0;
  if (!i3) ___unlockfile(i2);
 } else i1 = ___fputwc_unlocked(i1, i2) | 0;
 return i1 | 0;
}

function _MetaData_LoadStrings(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 HEAP32[i2 + 4 >> 2] = i3;
 _log_f(1, 16439, i1);
 STACKTOP = i1;
 return;
}

function _Crash(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 _puts(18640) | 0;
 HEAP32[i3 >> 2] = i2;
 _vprintf(i1, i3) | 0;
 _puts(18656) | 0;
 _abort();
}

function _out_686(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 L1 : do if (i1 | 0) while (1) {
  i1 = i1 + -1 | 0;
  if (HEAP32[i3 >> 2] & 32 | 0) break L1;
  _fputwc(HEAP32[i2 >> 2] | 0, i3) | 0;
  if (!i1) break; else i2 = i2 + 4 | 0;
 } while (0);
 return;
}

function _MetaData_LoadBlobs(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 HEAP32[i2 + 8 >> 2] = i3;
 _log_f(1, 16455, i1);
 STACKTOP = i1;
 return;
}

function _Heap_Box(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _Heap_AllocType(i1) | 0;
 i1 = i1 + 36 | 0;
 _memcpy(i3 | 0, i2 | 0, HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24 | 0) | 0;
 return i3 | 0;
}

function _GetUnalignedU16(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i4 = i5 + 1 | 0;
 HEAP32[i2 >> 2] = i4;
 i3 = HEAPU8[i1 + i5 >> 0] | 0;
 HEAP32[i2 >> 2] = i5 + 2;
 return (HEAPU8[i1 + i4 >> 0] | 0) << 8 | i3 | 0;
}

function _SystemString_FromCharPtrUTF16(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i1 = 0;
 while (1) if (!(HEAP16[i2 + (i1 << 1) >> 1] | 0)) break; else i1 = i1 + 1 | 0;
 i3 = _CreateStringHeapObj(i1) | 0;
 _memcpy(i3 + 4 | 0, i2 | 0, i1 << 1 | 0) | 0;
 return i3 | 0;
}

function _btowc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 & 255;
 if (i2 >>> 0 < 128) return i2 | 0; else {
  i2 = (i1 | 0) != -1 & (HEAP32[HEAP32[(___pthread_self_433() | 0) + 188 >> 2] >> 2] | 0) == 0;
  return (i2 ? i1 << 24 >> 24 & 57343 : -1) | 0;
 }
 return 0;
}

function _System_Type_get_Attributes(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = (_RuntimeType_DeRef(i1) | 0) + 8 | 0;
 HEAP32[i3 >> 2] = HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24;
 return 0;
}

function _System_Array_CreateInstance(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _Type_GetArrayTypeDef(_RuntimeType_DeRef(HEAP32[i2 >> 2] | 0) | 0, 0, 0) | 0;
 HEAP32[i3 >> 2] = _SystemArray_NewVector(i1, HEAP32[i2 + 4 >> 2] | 0) | 0;
 return 0;
}

function ___memrchr(i4, i1, i2) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 & 255;
 do {
  if (!i2) {
   i1 = 0;
   break;
  }
  i2 = i2 + -1 | 0;
  i1 = i4 + i2 | 0;
 } while ((HEAP8[i1 >> 0] | 0) != i3 << 24 >> 24);
 return i1 | 0;
}

function _CLIFile_GetHeapRoots(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = _CLIFile_GetLoadedAssemblies() | 0;
 while (1) {
  if (!i1) break;
  _MetaData_GetHeapRoots(i2, HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0);
  i1 = HEAP32[i1 + 4 >> 2] | 0;
 }
 return;
}

function _System_String_InternalCopyTo(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memcpy((HEAP32[i2 + 4 >> 2] | 0) + 4 + (HEAP32[i2 + 8 >> 2] << 1) | 0, i1 + 4 + (HEAP32[i2 >> 2] << 1) | 0, HEAP32[i2 + 12 >> 2] << 1 | 0) | 0;
 return 0;
}

function _System_Threading_Interlocked_Add_Int32(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (HEAP32[i1 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _pntz(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _a_ctz_l_762((HEAP32[i1 >> 2] | 0) + -1 | 0) | 0;
 if (!i2) {
  i2 = _a_ctz_l_762(HEAP32[i1 + 4 >> 2] | 0) | 0;
  return ((i2 | 0) == 0 ? 0 : i2 + 32 | 0) | 0;
 } else return i2 | 0;
 return 0;
}

function _Thread_StackReAlloc(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = i5 + 5e4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4 + (i2 + 44 + i3) - (i5 + i4);
 return;
}

function _bitshift64Ashr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i1 - 32 | 0;
}

function _SystemArray_GetNumBytes(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i2 + 64 | 0;
 return (Math_imul(HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24, HEAP32[i1 >> 2] | 0) | 0) + 4 | 0;
}

function _System_Threading_Interlocked_Exchange_Int32(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 return 0;
}

function _System_Type_IsAssignableFrom(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _RuntimeType_DeRef(i1) | 0;
 HEAP32[i3 >> 2] = _Type_IsAssignableFrom(i1, _RuntimeType_DeRef(HEAP32[i2 >> 2] | 0) | 0) | 0;
 return 0;
}

function _System_Type_IsSubclassOf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _RuntimeType_DeRef(i1) | 0;
 HEAP32[i3 >> 2] = _Type_IsDerivedFromOrSame(i1, _RuntimeType_DeRef(HEAP32[i2 >> 2] | 0) | 0) | 0;
 return 0;
}

function _Debugger_Clear_BreakPoints() {
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 _log_f(1, 20521, i1);
 HEAP32[7995] = 0;
 STACKTOP = i1;
 return 0;
}

function _System_Threading_Interlocked_Decrement_Int32(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (HEAP32[i1 >> 2] | 0) + -1 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _System_Threading_Interlocked_Increment_Int32(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _bitshift64Shl(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 << i1 | (i3 & (1 << i1) - 1 << 32 - i1) >>> 32 - i1;
  return i3 << i1;
 }
 tempRet0 = i3 << i1 - 32;
 return 0;
}

function _bitshift64Lshr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >>> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = 0;
 return i2 >>> i1 - 32 | 0;
}

function _MetaData_GetModuleRefName(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = _MetaData_GetTableRow(i1, i2) | 0;
 return HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24 | 0;
}

function _DeleteSync(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i1 = i1 + 16 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (i2 | 0) if (!(HEAP32[i2 + 4 >> 2] | 0)) if (!(HEAP32[i2 + 8 >> 2] | 0)) {
  _free(i2);
  HEAP32[i1 >> 2] = 0;
 }
 return;
}

function _Thread_Delete(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i1 = HEAP32[i2 + 52 >> 2] | 0;
 while (1) {
  if (!i1) break;
  i3 = HEAP32[i1 + 50004 >> 2] | 0;
  _free(i1);
  i1 = i3;
 }
 _Heap_MakeDeletable(i2);
 return;
}

function _System_GC_GetTotalMemory(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (HEAP32[i2 >> 2] | 0) _Heap_GarbageCollect();
 HEAP32[i3 >> 2] = _Heap_GetTotalMemory() | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 return 0;
}

function _GetNextFinalizer() {
 var i1 = 0, i2 = 0;
 i2 = HEAP32[7985] | 0;
 i1 = i2 + -1 | 0;
 if (!i2) i1 = 0; else {
  i2 = HEAP32[7984] | 0;
  HEAP32[7985] = i1;
  i1 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
 }
 return i1 | 0;
}

function _iswalpha(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 < 131072) i1 = (HEAPU8[25151 + ((HEAPU8[25151 + (i1 >>> 8) >> 0] | 0) << 5 | i1 >>> 3 & 31) >> 0] | 0) >>> (i1 & 7) & 1; else i1 = i1 >>> 0 < 196606 & 1;
 return i1 | 0;
}

function _Map_Delegate(i1) {
 i1 = i1 | 0;
 i1 = i1 + 16 | 0;
 i1 = (_strcmp(HEAPU8[i1 >> 0] | HEAPU8[i1 + 1 >> 0] << 8 | HEAPU8[i1 + 2 >> 0] << 16 | HEAPU8[i1 + 3 >> 0] << 24, 15496) | 0) == 0;
 return (i1 ? 153 : 0) | 0;
}

function _System_Threading_Thread_ctorParam(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _Thread() | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 >> 2] = i1;
 HEAP32[i1 + 48 >> 2] = 1;
 return 0;
}

function _a_ctz_l_762(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!i1) i1 = 32; else if (!(i1 & 1)) {
  i2 = i1;
  i1 = 0;
  do {
   i1 = i1 + 1 | 0;
   i2 = i2 >>> 1;
  } while (!(i2 & 1 | 0));
 } else i1 = 0;
 return i1 | 0;
}

function _Debugger_Step() {
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 _log_f(1, 20600, i1);
 HEAP32[7999] = 1;
 STACKTOP = i1;
 return 0;
}
function stackAlloc(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + i2 | 0;
 STACKTOP = STACKTOP + 15 & -16;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(i2 | 0);
 return i1 | 0;
}

function _Delegate_GetMethodAndStore(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 if (i3 | 0) HEAP32[i3 >> 2] = HEAP32[i1 + 8 >> 2];
 return HEAP32[i1 + 4 >> 2] | 0;
}

function _System_Console_Internal_ReadKey(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = _malloc(24) | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i3 + 4 >> 2] = 21;
 HEAP32[i3 + 8 >> 2] = 0;
 return i3 | 0;
}

function _Heap_Init() {
 var i1 = 0;
 HEAP32[7986] = 0;
 HEAP32[7987] = 1e6;
 i1 = _callocForever(1, 20) | 0;
 HEAP32[7988] = i1;
 HEAP32[i1 + 4 >> 2] = i1;
 HEAP32[i1 >> 2] = i1;
 HEAP32[7989] = i1;
 return;
}

function _Framework_JSInterop_Activator_CreateInstance(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Heap_AllocType(_RuntimeType_DeRef(HEAP32[i2 >> 2] | 0) | 0) | 0;
 return 0;
}

function _Heap_AllocType(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 36 | 0;
 return _Heap_Alloc(i1, HEAPU8[i2 >> 0] | HEAPU8[i2 + 1 >> 0] << 8 | HEAPU8[i2 + 2 >> 0] << 16 | HEAPU8[i2 + 3 >> 0] << 24) | 0;
}

function _iswpunct(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 < 131072) i1 = (HEAPU8[28127 + ((HEAPU8[28127 + (i1 >>> 8) >> 0] | 0) << 5 | i1 >>> 3 & 31) >> 0] | 0) >>> (i1 & 7) & 1; else i1 = 0;
 return i1 | 0;
}

function _Heap_Clone(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = _GetSize(i1 + -20 | 0) | 0;
 i2 = _Heap_Alloc(HEAP32[i1 + -8 >> 2] | 0, i3) | 0;
 _memcpy(i2 | 0, i1 | 0, i3 | 0) | 0;
 return i2 | 0;
}

function _MethodState(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return _MethodState_Direct(i1, _MetaData_GetMethodDefFromDefRefOrSpec(i2, i3, 0, 0) | 0, i4, 0, 0) | 0;
}

function ___strdup(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = (_strlen(i1) | 0) + 1 | 0;
 i3 = _malloc(i2) | 0;
 if (!i3) i1 = 0; else i1 = _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
 return i1 | 0;
}

function _RuntimeType_New(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _Heap_AllocType(HEAP32[(HEAP32[8003] | 0) + 104 >> 2] | 0) | 0;
 _Heap_MakeUndeletable(i2);
 HEAP32[i2 >> 2] = i1;
 return i2 | 0;
}

function _Heap_SetWeakRefTarget(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (_EnsureSync(i1 + -20 | 0) | 0) + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 return i1 | 0;
}

function ___DOUBLE_BITS_674(d1) {
 d1 = +d1;
 var i2 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 tempRet0 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 return i2 | 0;
}

function ___DOUBLE_BITS_273(d1) {
 d1 = +d1;
 var i2 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 tempRet0 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 return i2 | 0;
}

function _MetaData_GetTypeDefFromFullName(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return _MetaData_GetTypeDefFromName(_CLIFile_GetMetaDataForAssembly(i1) | 0, i2, i3, 0, 1) | 0;
}

function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i4, i1 - i3 >>> 0 | 0) | 0;
}

function _System_IO_FileInternal_Close(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 _close(HEAP32[i2 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = 0;
 return 0;
}

function ___lctrans_impl(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = ___mo_lookup(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, i2) | 0;
 return (i1 | 0 ? i1 : i2) | 0;
}

function dynCall_iiiii(i5, i1, i2, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiiii[i5 & 31](i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function _System_Threading_Thread_ctor(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _Thread() | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i3 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i3 >>> 0 < i1 >>> 0 | 0) >>> 0, i3 | 0) | 0;
}

function _ctor(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = 0;
 return 0;
}

function _System_Char_ToUpperInvariant(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = (_Char_ToUpperInvariant(HEAP32[i2 >> 2] & 65535) | 0) & 65535;
 return 0;
}

function _System_Char_ToLowerInvariant(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = (_Char_ToLowerInvariant(HEAP32[i2 >> 2] & 65535) | 0) & 65535;
 return 0;
}

function _CreateStringHeapObj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _Heap_Alloc(HEAP32[(HEAP32[8003] | 0) + 36 >> 2] | 0, (i1 << 1) + 6 | 0) | 0;
 HEAP32[i2 >> 2] = i1;
 return i2 | 0;
}

function _freelist(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i1 = HEAP32[i1 >> 2] | 0;
 if (i1 | 0) do {
  i2 = i1;
  i1 = HEAP32[i1 >> 2] | 0;
  _free(i2);
 } while ((i1 | 0) != 0);
 return;
}

function _EnsureSync(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i1) {
  i1 = _calloc(1, 12) | 0;
  HEAP32[i2 >> 2] = i1;
 }
 return i1 | 0;
}

function _Char_ToUpperInvariant(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _SearchCaseArray(10688, i1) | 0;
 if ((i2 | 0) >= 0) i1 = HEAP16[9340 + (i2 << 1) >> 1] | 0;
 return i1 | 0;
}

function _Char_ToLowerInvariant(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _SearchCaseArray(9340, i1) | 0;
 if ((i2 | 0) >= 0) i1 = HEAP16[10688 + (i2 << 1) >> 1] | 0;
 return i1 | 0;
}

function _System_Runtime_CompilerServices_RuntimeHelpers_GetHashCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return _System_Object_GetHashCode(i2, i2, i3) | 0;
}

function _GetU32_205(i1) {
 i1 = i1 | 0;
 return (HEAPU8[i1 + 1 >> 0] | 0) << 8 | (HEAPU8[i1 >> 0] | 0) | (HEAPU8[i1 + 2 >> 0] | 0) << 16 | (HEAPU8[i1 + 3 >> 0] | 0) << 24 | 0;
}

function _MetaData_DecodeSigEntryToken(i1) {
 i1 = i1 | 0;
 i1 = _MetaData_DecodeSigEntry(i1) | 0;
 return (HEAPU8[16435 + (i1 & 3) >> 0] | 0) << 24 | i1 >>> 2 & 16777215 | 0;
}

function _System_Type_get_IsValueType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAPU8[(_RuntimeType_DeRef(i1) | 0) + 34 >> 0];
 return 0;
}

function _System_Type_GetTypeFromHandle(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Type_GetTypeObject(HEAP32[i2 >> 2] | 0) | 0;
 return 0;
}

function _System_Math_Pow(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +Math_pow(+(+HEAPF64[i2 >> 3]), +(+HEAPF64[i2 + 8 >> 3]));
 return 0;
}

function _System_Threading_Thread_Sleep(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = _malloc(24) | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 return i3 | 0;
}

function _System_String_get_Chars(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAPU16[i1 + 4 + (HEAP32[i2 >> 2] << 1) >> 1];
 return 0;
}

function _System_Object_GetType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Type_GetTypeObject(_Heap_GetType(i1) | 0) | 0;
 return 0;
}

function _System_Threading_Thread_get_CurrentThread(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Thread_GetCurrent() | 0;
 return 0;
}

function dynCall_iiii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iiii[i4 & 255](i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiiii_19(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(19, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_18(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(18, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_17(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(17, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_16(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(16, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_15(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(15, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_14(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(14, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(13, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(12, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(11, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(10, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function _System_Object_GetHashCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = Math_imul(i1 >>> 2, -1640531535) | 0;
 return 0;
}

function jsCall_iiiii_9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(9, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(8, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(7, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(6, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(5, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(4, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(3, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(2, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_1(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(1, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function jsCall_iiiii_0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return jsCall_iiiii(0, i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}

function _iswcntrl(i1) {
 i1 = i1 | 0;
 return ((i1 + -65529 | 0) >>> 0 < 3 | ((i1 & -2 | 0) == 8232 | (i1 >>> 0 < 32 | (i1 + -127 | 0) >>> 0 < 33))) & 1 | 0;
}

function _System_GC_Internal_CollectionCount(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Heap_NumCollections() | 0;
 return 0;
}

function _strchr(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = ___strchrnul(i1, i2) | 0;
 return ((HEAP8[i1 >> 0] | 0) == (i2 & 255) << 24 >> 24 ? i1 : 0) | 0;
}

function _fputs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _strlen(i1) | 0;
 return ((_fwrite(i1, 1, i3, i2) | 0) != (i3 | 0)) << 31 >> 31 | 0;
}

function _System_Threading_Monitor_Internal_Exit(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _Heap_SyncExit(HEAP32[i2 >> 2] | 0) | 0;
 return 1;
}

function _System_Object_Equals(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i2 >> 2] | 0) == (i1 | 0) & 1;
 return 0;
}

function ___syscall_ret(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 > 4294963200) {
  HEAP32[(___errno_location() | 0) >> 2] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}

function _System_Math_Round(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +_llvm_round_f64(+(+HEAPF64[i2 >> 3]));
 return 0;
}

function _wcslen(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = i2;
 while (1) if (!(HEAP32[i1 >> 2] | 0)) break; else i1 = i1 + 4 | 0;
 return i1 - i2 >> 2 | 0;
}

function _System_Object_Clone(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Heap_Clone(HEAP32[i2 >> 2] | 0) | 0;
 return 0;
}

function _System_Environment_get_TickCount(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = _msTime() | 0;
 HEAP32[i3 >> 2] = i2;
 return 0;
}

function _MetaData_Init() {
 var i1 = 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == 48) break;
  HEAP8[32676 + i1 >> 0] = 0;
  i1 = i1 + 1 | 0;
 }
 return;
}

function _System_Math_Ceiling(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +Math_ceil(+(+HEAPF64[i2 >> 3]));
 return 0;
}

function _RemoveWeakRefTarget(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _SystemWeakReference_TargetGone((HEAP32[i1 + 16 >> 2] | 0) + 8 | 0, i2);
 return;
}

function _System_Math_Floor(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +Math_floor(+(+HEAPF64[i2 >> 3]));
 return 0;
}

function _FreeTypeStack(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (i1 | 0) {
  i2 = HEAP32[i1 >> 2] | 0;
  if (i2 | 0) _free(i2);
  _free(i1);
 }
 return;
}

function _System_GC_SuppressFinalize(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _Heap_UnmarkFinalizer(HEAP32[i2 >> 2] | 0);
 return 0;
}

function _ShowUsage() {
 _puts(13258) | 0;
 _puts(13265) | 0;
 _putchar(10) | 0;
 _puts(13332) | 0;
 _puts(13388) | 0;
 _putchar(10) | 0;
 _exit(1);
}

function _Framework_JSInterop_FromHeapRefImpl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 return 0;
}

function _System_Math_Sqrt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +Math_sqrt(+(+HEAPF64[i2 >> 3]));
 return 0;
}

function _strnlen(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _memchr(i1, 0, i2) | 0;
 return ((i3 | 0) == 0 ? i2 : i3 - i1 | 0) | 0;
}

function _Diag_Init() {
 var i1 = 0, i2 = 0;
 i2 = _microTime() | 0;
 i1 = 31920;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = tempRet0;
 return;
}

function _System_WeakReference_get_Target(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 return 0;
}

function _System_Net_Sockets_Internal_Close(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _close(HEAP32[i2 >> 2] | 0) | 0;
 return 0;
}

function _casefold(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = _towupper(i2) | 0;
 if ((i1 | 0) == (i2 | 0)) i1 = _towlower(i2) | 0;
 return i1 | 0;
}

function _System_Enum_Internal_GetValue(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 return 0;
}

function _Framework_JSInterop_ToHeapRef(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 return 0;
}

function _wcstoll(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = _wcstox_776(i1, i2, i3, 0, -2147483648) | 0;
 return i3 | 0;
}

function _swapc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_bswap_i32(i1 | 0) | 0;
 return ((i2 | 0) == 0 ? i1 : i3) | 0;
}

function _wcstol(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = _wcstox_776(i1, i2, i3, -2147483648, 0) | 0;
 return i3 | 0;
}

function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
}

function _Thread_StackFree(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAP32[i1 + 52 >> 2] | 0;
 HEAP32[i1 + 5e4 >> 2] = i2 - i1;
 return;
}

function _System_Math_Tan(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +_tan(+HEAPF64[i2 >> 3]);
 return 0;
}

function _System_Math_Sin(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +_sin(+HEAPF64[i2 >> 3]);
 return 0;
}

function _System_Math_Cos(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +_cos(+HEAPF64[i2 >> 3]);
 return 0;
}

function _SystemString_GetString(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (i2 | 0) HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 return i1 + 4 | 0;
}

function _out(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(HEAP32[i1 >> 2] & 32)) ___fwritex(i2, i3, i1) | 0;
 return;
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 24 | (i1 >> 8 & 255) << 16 | (i1 >> 16 & 255) << 8 | i1 >>> 24 | 0;
}

function dynCall_iii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[i3 & 31](i1 | 0, i2 | 0) | 0;
}

function _wcstoull(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = _wcstox_776(i1, i2, i3, -1, -1) | 0;
 return i3 | 0;
}

function _recv(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return _recvfrom(i1, i2, i3, i4, 0, 0) | 0;
}

function jsCall_iiii_19(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(19, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_18(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(18, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_17(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(17, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_16(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(16, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_15(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(15, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_14(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(14, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_13(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(13, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_12(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(12, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_11(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(11, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_10(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(10, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function _callocForever(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return _allocForever(_calloc(i1, i2) | 0, Math_imul(i2, i1) | 0) | 0;
}

function _wcstoul(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = _wcstox_776(i1, i2, i3, -1, 0) | 0;
 return i3 | 0;
}

function _send(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return _sendto(i1, i2, i3, i4, 0, 0) | 0;
}

function jsCall_iiii_9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(9, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(8, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(7, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(6, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(5, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(4, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(3, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(2, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_1(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(1, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function jsCall_iiii_0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return jsCall_iiii(0, i1 | 0, i2 | 0, i3 | 0) | 0;
}

function _System_Environment_get_Platform(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = 4;
 return 0;
}

function _iswgraph(i1) {
 i1 = i1 | 0;
 if (!(_iswspace(i1) | 0)) i1 = (_iswprint(i1) | 0) != 0 & 1; else i1 = 0;
 return i1 | 0;
}

function _iswalnum(i1) {
 i1 = i1 | 0;
 if (!(_iswdigit(i1) | 0)) i1 = (_iswalpha(i1) | 0) != 0 & 1; else i1 = 1;
 return i1 | 0;
}

function _System_Diagnostics_Debugger_Break(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _puts(20716) | 0;
 return 0;
}

function _GetNullTerminatedString(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i2 >> 2] = (_strlen(i1) | 0) + 1;
 return i1 | 0;
}

function _msTime() {
 var i1 = 0;
 i1 = _microTime() | 0;
 i1 = ___udivdi3(i1 | 0, tempRet0 | 0, 1e3, 0) | 0;
 return i1 | 0;
}

function _wctomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i1) i1 = 0; else i1 = _wcrtomb(i1, i2, 0) | 0;
 return i1 | 0;
}

function _GetU32(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAPU8[i1 + 3 >> 0] | 0;
 HEAP32[i2 >> 2] = 4;
 return i1 | 0;
}

function _vsprintf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return _vsnprintf(i1, 2147483647, i2, i3) | 0;
}

function _strerror(i1) {
 i1 = i1 | 0;
 return ___strerror_l(i1, HEAP32[(___pthread_self_107() | 0) + 188 >> 2] | 0) | 0;
}

function _System_GC_Collect(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _Heap_GarbageCollect();
 return 0;
}

function _strncpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 ___stpncpy(i1, i2, i3) | 0;
 return i1 | 0;
}

function _iswxdigit(i1) {
 i1 = i1 | 0;
 return ((i1 + -48 | 0) >>> 0 < 10 | ((i1 | 32) + -97 | 0) >>> 0 < 6) & 1 | 0;
}

function _closedir(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _close(HEAP32[i1 >> 2] | 0) | 0;
 _free(i1);
 return i2 | 0;
}

function b3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 nullFunc_iiiii(3);
 return 0;
}

function _strcat(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _strcpy(i1 + (_strlen(i1) | 0) | 0, i2) | 0;
 return i1 | 0;
}

function _iswspace(i1) {
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = (_wcschr(6528, i1) | 0) != 0 & 1;
 return i1 | 0;
}

function _sort(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return _strcmp(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
}

function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!__THREW__) {
  __THREW__ = i1;
  threwValue = i2;
 }
}

function _tolower(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (_isupper(i1) | 0) == 0;
 return (i2 ? i1 : i1 | 32) | 0;
}

function _strrchr(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ___memrchr(i1, i2, (_strlen(i1) | 0) + 1 | 0) | 0;
}

function _Finalizer_Init() {
 HEAP32[7983] = 4;
 HEAP32[7984] = _malloc(16) | 0;
 HEAP32[7985] = 0;
 return;
}

function dynCall_ii(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[i2 & 31](i1 | 0) | 0;
}

function _llvm_round_f64(d1) {
 d1 = +d1;
 return d1 >= 0.0 ? +Math_floor(d1 + .5) : +Math_ceil(d1 - .5);
}

function jsCall_iii_19(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(19, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_18(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(18, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_17(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(17, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_16(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(16, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_15(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(15, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_14(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(14, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_13(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(13, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(12, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(11, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(10, i1 | 0, i2 | 0) | 0;
}

function _vprintf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return _vfprintf(HEAP32[1507] | 0, i1, i2) | 0;
}

function _GetU16(i1) {
 i1 = i1 | 0;
 return (HEAPU8[i1 + 1 >> 0] | 0) << 8 | (HEAPU8[i1 >> 0] | 0) | 0;
}

function jsCall_iii_9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(9, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(8, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(7, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(6, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(5, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(4, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(3, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(2, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(1, i1 | 0, i2 | 0) | 0;
}

function jsCall_iii_0(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return jsCall_iii(0, i1 | 0, i2 | 0) | 0;
}

function _MetaData_DecodeHeapEntryLength(i1) {
 i1 = i1 | 0;
 return _MetaData_DecodeSigEntry(i1) | 0;
}

function _MetaData_DecodeSigEntry(i1) {
 i1 = i1 | 0;
 return _MetaData_DecodeSigEntryExt(i1, 1) | 0;
}

function runPostSets() {}
function __emscripten_dceable_type_decls() {
 _invokeJsFunc(0, 0, 0) | 0;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 STACKTOP = i1;
 STACK_MAX = i2;
}

function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 nullFunc_iiii(2);
 return 0;
}

function _isspace(i1) {
 i1 = i1 | 0;
 return ((i1 | 0) == 32 | (i1 + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function _wcstof(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return Math_fround(+_wcstox(i1, i2, 0));
}

function _Heap_GetWeakRefAddress(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + -4 >> 2] | 0) + 8 | 0;
}

function _strcpy(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 ___stpcpy(i1, i2) | 0;
 return i1 | 0;
}

function _mallocForever(i1) {
 i1 = i1 | 0;
 return _allocForever(_calloc(i1, 1) | 0, i1) | 0;
}

function ___lctrans(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ___lctrans_impl(i1, i2) | 0;
}

function _SystemString_GetNumBytes(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 >> 2] << 1) + 6 | 0;
}

function _Heap_RemovedWeakRefTarget(i1) {
 i1 = i1 | 0;
 _DeleteSync(i1 + -20 | 0);
 return;
}

function _llvm_bswap_i16(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 8 | i1 >> 8 & 255 | 0;
}

function _isblank(i1) {
 i1 = i1 | 0;
 return ((i1 | 0) == 32 | (i1 | 0) == 9) & 1 | 0;
}

function _Heap_MakeUndeletable(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + -11 >> 0] = -1;
 return;
}

function _wcstod(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +(+_wcstox(i1, i2, 1));
}

function _Heap_UnmarkFinalizer(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + -10 >> 0] = 0;
 return;
}

function _Heap_MakeDeletable(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + -11 >> 0] = 0;
 return;
}

function _iswupper(i1) {
 i1 = i1 | 0;
 return (_towlower(i1) | 0) != (i1 | 0) | 0;
}

function _iswlower(i1) {
 i1 = i1 | 0;
 return (_towupper(i1) | 0) != (i1 | 0) | 0;
}

function _copysignl(d1, d2) {
 d1 = +d1;
 d2 = +d2;
 return +(+_copysign(d1, d2));
}

function _scalbnl(d1, i2) {
 d1 = +d1;
 i2 = i2 | 0;
 return +(+_scalbn(d1, i2));
}

function ___bswap_16_493(i1) {
 i1 = i1 | 0;
 return _llvm_bswap_i16(i1 | 0) | 0;
}

function _Delegate_GetMethod(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}

function _PInvoke_GetFunction(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 154;
}

function _putchar(i1) {
 i1 = i1 | 0;
 return _fputc(i1, HEAP32[1507] | 0) | 0;
}

function _frexpl(d1, i2) {
 d1 = +d1;
 i2 = i2 | 0;
 return +(+_frexp(d1, i2));
}

function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 nullFunc_iii(1);
 return 0;
}

function _iswdigit(i1) {
 i1 = i1 | 0;
 return (i1 + -48 | 0) >>> 0 < 10 | 0;
}

function ___bswap_32(i1) {
 i1 = i1 | 0;
 return _llvm_bswap_i32(i1 | 0) | 0;
}

function ___bswap_16(i1) {
 i1 = i1 | 0;
 return _llvm_bswap_i16(i1 | 0) | 0;
}

function jsCall_ii_19(i1) {
 i1 = i1 | 0;
 return jsCall_ii(19, i1 | 0) | 0;
}

function jsCall_ii_18(i1) {
 i1 = i1 | 0;
 return jsCall_ii(18, i1 | 0) | 0;
}

function jsCall_ii_17(i1) {
 i1 = i1 | 0;
 return jsCall_ii(17, i1 | 0) | 0;
}

function jsCall_ii_16(i1) {
 i1 = i1 | 0;
 return jsCall_ii(16, i1 | 0) | 0;
}

function jsCall_ii_15(i1) {
 i1 = i1 | 0;
 return jsCall_ii(15, i1 | 0) | 0;
}

function jsCall_ii_14(i1) {
 i1 = i1 | 0;
 return jsCall_ii(14, i1 | 0) | 0;
}

function jsCall_ii_13(i1) {
 i1 = i1 | 0;
 return jsCall_ii(13, i1 | 0) | 0;
}

function jsCall_ii_12(i1) {
 i1 = i1 | 0;
 return jsCall_ii(12, i1 | 0) | 0;
}

function jsCall_ii_11(i1) {
 i1 = i1 | 0;
 return jsCall_ii(11, i1 | 0) | 0;
}

function jsCall_ii_10(i1) {
 i1 = i1 | 0;
 return jsCall_ii(10, i1 | 0) | 0;
}

function _isupper(i1) {
 i1 = i1 | 0;
 return (i1 + -65 | 0) >>> 0 < 26 | 0;
}

function _isdigit(i1) {
 i1 = i1 | 0;
 return (i1 + -48 | 0) >>> 0 < 10 | 0;
}

function _RuntimeType_DeRef(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 >> 2] | 0;
}

function _Heap_GetType(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + -8 >> 2] | 0;
}

function jsCall_ii_9(i1) {
 i1 = i1 | 0;
 return jsCall_ii(9, i1 | 0) | 0;
}

function jsCall_ii_8(i1) {
 i1 = i1 | 0;
 return jsCall_ii(8, i1 | 0) | 0;
}

function jsCall_ii_7(i1) {
 i1 = i1 | 0;
 return jsCall_ii(7, i1 | 0) | 0;
}

function jsCall_ii_6(i1) {
 i1 = i1 | 0;
 return jsCall_ii(6, i1 | 0) | 0;
}

function jsCall_ii_5(i1) {
 i1 = i1 | 0;
 return jsCall_ii(5, i1 | 0) | 0;
}

function jsCall_ii_4(i1) {
 i1 = i1 | 0;
 return jsCall_ii(4, i1 | 0) | 0;
}

function jsCall_ii_3(i1) {
 i1 = i1 | 0;
 return jsCall_ii(3, i1 | 0) | 0;
}

function jsCall_ii_2(i1) {
 i1 = i1 | 0;
 return jsCall_ii(2, i1 | 0) | 0;
}

function jsCall_ii_1(i1) {
 i1 = i1 | 0;
 return jsCall_ii(1, i1 | 0) | 0;
}

function jsCall_ii_0(i1) {
 i1 = i1 | 0;
 return jsCall_ii(0, i1 | 0) | 0;
}

function _fmodl(d1, d2) {
 d1 = +d1;
 d2 = +d2;
 return +(+_fmod(d1, d2));
}

function _towupper(i1) {
 i1 = i1 | 0;
 return ___towcase(i1, 0) | 0;
}

function _towlower(i1) {
 i1 = i1 | 0;
 return ___towcase(i1, 1) | 0;
}

function _ignore_err(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}

function _ntohs(i1) {
 i1 = i1 | 0;
 return ___bswap_16_493(i1) | 0;
}

function _CLIFile_GetLoadedAssemblies() {
 return HEAP32[7982] | 0;
}

function _iswblank(i1) {
 i1 = i1 | 0;
 return _isblank(i1) | 0;
}

function _htons(i1) {
 i1 = i1 | 0;
 return ___bswap_16(i1) | 0;
}

function _htonl(i1) {
 i1 = i1 | 0;
 return ___bswap_32(i1) | 0;
}

function _JIT_Execute_Init() {
 _JIT_Execute(0, 0) | 0;
 return;
}

function _Heap_GarbageCollect() {
 _GarbageCollect();
 return;
}

function ___pthread_self_616() {
 return _pthread_self() | 0;
}

function ___pthread_self_598() {
 return _pthread_self() | 0;
}

function ___pthread_self_535() {
 return _pthread_self() | 0;
}

function ___pthread_self_447() {
 return _pthread_self() | 0;
}

function ___pthread_self_444() {
 return _pthread_self() | 0;
}

function ___pthread_self_433() {
 return _pthread_self() | 0;
}

function ___pthread_self_107() {
 return _pthread_self() | 0;
}

function b0(i1) {
 i1 = i1 | 0;
 nullFunc_ii(0);
 return 0;
}

function _Heap_NumCollections() {
 return HEAP32[7992] | 0;
}

function _Heap_GetTotalMemory() {
 return HEAP32[7986] | 0;
}

function _MetaData() {
 return _callocForever(1, 428) | 0;
}

function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}

function _Thread_GetCurrent() {
 return HEAP32[8002] | 0;
}

function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}

function ___ofl_lock() {
 ___lock(32664);
 return 32672;
}

function _dummy_737(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}

function ___ofl_unlock() {
 ___unlock(32664);
 return;
}

function ___unlockfile(i1) {
 i1 = i1 | 0;
 return;
}

function ___lockfile(i1) {
 i1 = i1 | 0;
 return 0;
}

function _RVA() {
 return _mallocForever(4) | 0;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function ___errno_location() {
 return 32660;
}

function stackSave() {
 return STACKTOP | 0;
}

function _pthread_self() {
 return 6284;
}

function _Socket_Init() {
 return;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,jsCall_ii_0,jsCall_ii_1,jsCall_ii_2,jsCall_ii_3,jsCall_ii_4,jsCall_ii_5,jsCall_ii_6,jsCall_ii_7,jsCall_ii_8,jsCall_ii_9,jsCall_ii_10,jsCall_ii_11,jsCall_ii_12,jsCall_ii_13,jsCall_ii_14,jsCall_ii_15,jsCall_ii_16,jsCall_ii_17,jsCall_ii_18,jsCall_ii_19,___stdio_close,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_iii = [b1,jsCall_iii_0,jsCall_iii_1,jsCall_iii_2,jsCall_iii_3,jsCall_iii_4,jsCall_iii_5,jsCall_iii_6,jsCall_iii_7,jsCall_iii_8,jsCall_iii_9,jsCall_iii_10,jsCall_iii_11,jsCall_iii_12,jsCall_iii_13,jsCall_iii_14,jsCall_iii_15,jsCall_iii_16,jsCall_iii_17,jsCall_iii_18,jsCall_iii_19,_ignore_err,_sort,b1,b1,b1,b1,b1,b1
,b1,b1,b1];
var FUNCTION_TABLE_iiii = [b2,jsCall_iiii_0,jsCall_iiii_1,jsCall_iiii_2,jsCall_iiii_3,jsCall_iiii_4,jsCall_iiii_5,jsCall_iiii_6,jsCall_iiii_7,jsCall_iiii_8,jsCall_iiii_9,jsCall_iiii_10,jsCall_iiii_11,jsCall_iiii_12,jsCall_iiii_13,jsCall_iiii_14,jsCall_iiii_15,jsCall_iiii_16,jsCall_iiii_17,jsCall_iiii_18,jsCall_iiii_19,_System_Object_Equals,_System_Object_Clone,_System_Object_GetHashCode,_System_Object_GetType,_System_String_ctor_CharInt32,_System_String_ctor_CharA,_System_String_ctor_CharAIntInt,_System_String_ctor_StringIntInt
,_System_String_get_Chars,_System_String_InternalConcat,_System_String_InternalCopyTo,_System_String_InternalTrim,_System_String_CompareOrdinal,_System_String_Equals,_System_String_GetHashCode,_System_String_InternalReplace,_System_String_InternalIndexOf,_System_String_InternalIndexOfAny,_System_String_InternalIndexOfStr,_System_String_InternalFromInt32,_System_String_InternalFromInt64,_System_String_InternalFromUInt32,_System_String_InternalFromUInt64,_System_String_InternalFromSingle,_System_String_InternalFromDouble,_System_String_InternalToInt32,_System_String_InternalToInt64,_System_String_InternalToUInt32,_System_String_InternalToUInt64,_System_String_InternalToSingle,_System_String_InternalToDouble,_System_String_ToLowerInvariant,_System_String_ToUpperInvariant,_Framework_JSInterop_Activator_CreateInstance,_System_Array_Internal_GetValue,_System_Array_Internal_SetValue,_System_Array_Clear,_System_Array_Internal_Copy
,_System_Array_Resize,_System_Array_Reverse,_System_Array_CreateInstance,_System_Console_Write,_System_Console_Internal_ReadKey,_System_Console_Internal_KeyAvailable,_System_Environment_get_TickCount,_System_Environment_GetOSVersionString,_System_Environment_get_Platform,_System_Type_GetTypeFromHandle,_System_Type_EnsureAssemblyLoaded,_System_Type_GetInterfaces,_System_Type_GetProperties,_System_Type_GetProperty,_System_Type_GetMethods,_System_Type_GetMethod,_System_Type_GetTypeFromName,_System_Type_GetNestedType,_System_Type_GetNestedTypes,_System_Type_get_Attributes,_System_Type_get_IsValueType,_System_Type_IsAssignableFrom,_System_Type_IsSubclassOf,_System_Type_MakeGenericType,_System_RuntimeType_get_Name,_System_RuntimeType_get_Namespace,_System_RuntimeType_GetNestingParentType,_System_RuntimeType_get_BaseType,_System_RuntimeType_get_IsEnum,_System_RuntimeType_get_IsGenericType
,_System_RuntimeType_Internal_GetGenericTypeDefinition,_System_RuntimeType_GetGenericArguments,_System_RuntimeType_IsDefined,_System_RuntimeType_GetCustomAttributes,_System_RuntimeType_GetElementType,_System_Char_GetUnicodeCategory,_System_Char_ToLowerInvariant,_System_Char_ToUpperInvariant,_System_GC_Collect,_System_GC_Internal_CollectionCount,_System_GC_GetTotalMemory,_System_GC_SuppressFinalize,_System_Enum_Internal_GetValue,_System_Enum_Internal_GetInfo,_System_ValueType_GetFields,_System_WeakReference_get_Target,_System_WeakReference_set_Target,_System_DateTime_InternalUtcNow,_System_Math_Sin,_System_Math_Cos,_System_Math_Tan,_System_Math_Pow,_System_Math_Sqrt,_System_Math_Ceiling,_System_Math_Floor,_System_Math_Round,_System_Threading_Thread_ctor,_System_Threading_Thread_ctorParam,_System_Threading_Thread_Start,_System_Threading_Thread_Sleep
,_System_Threading_Thread_get_CurrentThread,_System_Threading_Monitor_Internal_TryEnter,_System_Threading_Monitor_Internal_Exit,_System_Threading_Interlocked_CompareExchange_Int32,_System_Threading_Interlocked_Increment_Int32,_System_Threading_Interlocked_Decrement_Int32,_System_Threading_Interlocked_Add_Int32,_System_Threading_Interlocked_Exchange_Int32,_System_IO_FileInternal_Open,_System_IO_FileInternal_Read,_System_IO_FileInternal_Close,_System_IO_FileInternal_Length,_System_IO_FileInternal_GetCurrentDirectory,_System_IO_FileInternal_GetFileAttributes,_System_IO_FileInternal_GetFileSystemEntries,_Reflection_MemberInfo_GetCustomAttributes,_Reflection_MethodInfo_MakeGenericMethod,_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray,_System_Runtime_CompilerServices_RuntimeHelpers_GetHashCode,_System_Diagnostics_Debugger_Break,_System_Net_Dns_Internal_GetHostEnt,_System_Net_Sockets_Internal_CreateSocket,_System_Net_Sockets_Internal_Bind,_System_Net_Sockets_Internal_Close,_System_Net_Sockets_Internal_Listen,_System_Net_Sockets_Internal_Accept,_System_Net_Sockets_Internal_Connect,_System_Net_Sockets_Internal_Receive,_System_Net_Sockets_Internal_Send,_Framework_JSInterop_ToHeapRef
,_Framework_JSInterop_FromHeapRefImpl,___stdout_write,___stdio_seek,_sn_write,_ctor,_invokeJsFunc,___stdio_write,_sw_write,_do_read_774,_do_read_777,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2];
var FUNCTION_TABLE_iiiii = [b3,jsCall_iiiii_0,jsCall_iiiii_1,jsCall_iiiii_2,jsCall_iiiii_3,jsCall_iiiii_4,jsCall_iiiii_5,jsCall_iiiii_6,jsCall_iiiii_7,jsCall_iiiii_8,jsCall_iiiii_9,jsCall_iiiii_10,jsCall_iiiii_11,jsCall_iiiii_12,jsCall_iiiii_13,jsCall_iiiii_14,jsCall_iiiii_15,jsCall_iiiii_16,jsCall_iiiii_17,jsCall_iiiii_18,jsCall_iiiii_19,_Internal_ReadKey_Check,_Accept_Check,_Connect_Check,_Receive_Check,_Internal_TryEntry_Check,_Internal_Debugger_Resume_Check,b3,b3
,b3,b3,b3];

  return { _Debugger_Clear_BreakPoints: _Debugger_Clear_BreakPoints, _Debugger_Continue: _Debugger_Continue, _Debugger_Reset: _Debugger_Reset, _Debugger_SetBreakPoint: _Debugger_SetBreakPoint, _Debugger_Step: _Debugger_Step, _JSInterop_CallDotNet: _JSInterop_CallDotNet, ___divdi3: ___divdi3, ___errno_location: ___errno_location, ___muldi3: ___muldi3, ___remdi3: ___remdi3, ___udivdi3: ___udivdi3, ___uremdi3: ___uremdi3, _bitshift64Ashr: _bitshift64Ashr, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, _fflush: _fflush, _free: _free, _htonl: _htonl, _htons: _htons, _i64Add: _i64Add, _i64Subtract: _i64Subtract, _llvm_bswap_i16: _llvm_bswap_i16, _llvm_bswap_i32: _llvm_bswap_i32, _llvm_round_f64: _llvm_round_f64, _main: _main, _malloc: _malloc, _memcpy: _memcpy, _memmove: _memmove, _memset: _memset, _ntohs: _ntohs, _sbrk: _sbrk, dynCall_ii: dynCall_ii, dynCall_iii: dynCall_iii, dynCall_iiii: dynCall_iiii, dynCall_iiiii: dynCall_iiiii, establishStackSpace: establishStackSpace, getTempRet0: getTempRet0, runPostSets: runPostSets, setTempRet0: setTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
})
;
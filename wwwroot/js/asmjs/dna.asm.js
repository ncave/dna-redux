Module["asm"] =  (function(global, env, buffer) {
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
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_iiiii=env.nullFunc_iiiii;
  var invoke_ii=env.invoke_ii;
  var jsCall_ii=env.jsCall_ii;
  var invoke_iiii=env.invoke_iiii;
  var jsCall_iiii=env.jsCall_iiii;
  var invoke_iii=env.invoke_iii;
  var jsCall_iii=env.jsCall_iii;
  var invoke_iiiii=env.invoke_iiiii;
  var jsCall_iiiii=env.jsCall_iiiii;
  var ___syscall221=env.___syscall221;
  var ___syscall220=env.___syscall220;
  var __inet_pton4_raw=env.__inet_pton4_raw;
  var __inet_ntop6_raw=env.__inet_ntop6_raw;
  var ___syscall102=env.___syscall102;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var __inet_ntop4_raw=env.__inet_ntop4_raw;
  var __inet_pton6_raw=env.__inet_pton6_raw;
  var _llvm_stackrestore=env._llvm_stackrestore;
  var __read_sockaddr=env.__read_sockaddr;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var ___setErrNo=env.___setErrNo;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var __exit=env.__exit;
  var ___syscall195=env.___syscall195;
  var _llvm_stacksave=env._llvm_stacksave;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var __write_sockaddr=env.__write_sockaddr;
  var _exit=env._exit;
  var _gethostbyname=env._gethostbyname;
  var ___syscall3=env.___syscall3;
  var _invokeJsFunc=env._invokeJsFunc;
  var ___lock=env.___lock;
  var ___syscall6=env.___syscall6;
  var ___syscall5=env.___syscall5;
  var ___syscall183=env.___syscall183;
  var _gettimeofday=env._gettimeofday;
  var ___syscall140=env.___syscall140;
  var ___syscall142=env.___syscall142;
  var ___syscall146=env.___syscall146;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function _JIT_Execute(i20, i1) {
 i20 = i20 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, f45 = f0, d46 = 0.0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(112);
 i41 = i43 + 40 | 0;
 i40 = i43 + 24 | 0;
 i39 = i43 + 16 | 0;
 i42 = i43 + 100 | 0;
 i28 = i43 + 96 | 0;
 i29 = i43 + 92 | 0;
 i34 = i43 + 88 | 0;
 i35 = i43 + 84 | 0;
 i36 = i43 + 80 | 0;
 i37 = i43 + 76 | 0;
 i38 = i43 + 72 | 0;
 i21 = i43 + 68 | 0;
 i22 = i43 + 64 | 0;
 i23 = i43 + 60 | 0;
 i24 = i43 + 8 | 0;
 i25 = i43 + 56 | 0;
 i26 = i43;
 do if (!i20) {
  i1 = 0;
  while (1) {
   if ((i1 | 0) == 512) break;
   HEAP32[29908 + (i1 * 12 | 0) >> 2] = 1;
   HEAP32[29908 + (i1 * 12 | 0) + 4 >> 2] = 0;
   HEAP32[29908 + (i1 * 12 | 0) + 8 >> 2] = 0;
   i1 = i1 + 1 | 0;
  }
  HEAP32[9013] = 2;
  HEAP32[9014] = 3;
  HEAP32[9015] = 0;
  HEAP32[7477] = 2;
  HEAP32[7478] = 2;
  HEAP32[7479] = 256;
  HEAP32[7480] = 6;
  HEAP32[7481] = 7;
  HEAP32[7482] = 0;
  HEAP32[7483] = 8;
  HEAP32[7484] = 9;
  HEAP32[7485] = 260;
  HEAP32[7486] = 10;
  HEAP32[7487] = 11;
  HEAP32[7488] = 0;
  HEAP32[7489] = 12;
  HEAP32[7490] = 13;
  HEAP32[7491] = 0;
  HEAP32[7492] = 14;
  HEAP32[7493] = 15;
  HEAP32[7494] = 0;
  HEAP32[7495] = 16;
  HEAP32[7496] = 6;
  HEAP32[7497] = 0;
  HEAP32[7498] = 18;
  HEAP32[7499] = 15;
  HEAP32[7500] = 0;
  HEAP32[7501] = 20;
  HEAP32[7502] = 21;
  HEAP32[7503] = 0;
  HEAP32[7504] = 22;
  HEAP32[7505] = 23;
  HEAP32[7506] = 0;
  HEAP32[7507] = 24;
  HEAP32[7508] = 15;
  HEAP32[7509] = 0;
  HEAP32[7510] = 26;
  HEAP32[7511] = 15;
  HEAP32[7512] = 0;
  HEAP32[7513] = 28;
  HEAP32[7514] = 29;
  HEAP32[7515] = 0;
  HEAP32[7516] = 30;
  HEAP32[7517] = 31;
  HEAP32[7518] = 0;
  HEAP32[7519] = 32;
  HEAP32[7520] = 33;
  HEAP32[7521] = 0;
  HEAP32[7522] = 34;
  HEAP32[7523] = 35;
  HEAP32[7524] = 0;
  HEAP32[7525] = 3;
  HEAP32[7526] = 37;
  HEAP32[7527] = 0;
  HEAP32[7528] = 38;
  HEAP32[7529] = 39;
  HEAP32[7530] = 0;
  HEAP32[7531] = 40;
  HEAP32[7532] = 40;
  HEAP32[7533] = 0;
  HEAP32[7534] = 42;
  HEAP32[7535] = 43;
  HEAP32[7536] = 0;
  HEAP32[7537] = 44;
  HEAP32[7538] = 45;
  HEAP32[7539] = 0;
  HEAP32[7540] = 46;
  HEAP32[7541] = 47;
  HEAP32[7542] = 260;
  HEAP32[7543] = 48;
  HEAP32[7544] = 49;
  HEAP32[7545] = 0;
  HEAP32[7546] = 50;
  HEAP32[7547] = 15;
  HEAP32[7548] = 0;
  HEAP32[7549] = 52;
  HEAP32[7550] = 53;
  HEAP32[7551] = 0;
  HEAP32[7552] = 54;
  HEAP32[7553] = 55;
  HEAP32[7554] = 0;
  HEAP32[7555] = 56;
  HEAP32[7556] = 57;
  HEAP32[7557] = 0;
  HEAP32[7558] = 58;
  HEAP32[7559] = 59;
  HEAP32[7560] = 0;
  HEAP32[7561] = 60;
  HEAP32[7562] = 59;
  HEAP32[7563] = 0;
  HEAP32[7564] = 62;
  HEAP32[7565] = 63;
  HEAP32[7566] = 0;
  HEAP32[7567] = 64;
  HEAP32[7568] = 65;
  HEAP32[7569] = 0;
  HEAP32[7570] = 66;
  HEAP32[7571] = 67;
  HEAP32[7572] = 0;
  HEAP32[7573] = 68;
  HEAP32[7574] = 69;
  HEAP32[7575] = 0;
  HEAP32[7576] = 70;
  HEAP32[7577] = 15;
  HEAP32[7578] = 0;
  HEAP32[7579] = 72;
  HEAP32[7580] = 35;
  HEAP32[7581] = 0;
  HEAP32[7582] = 74;
  HEAP32[7583] = 75;
  HEAP32[7584] = 0;
  HEAP32[7585] = 76;
  HEAP32[7586] = 77;
  HEAP32[7587] = 0;
  HEAP32[7588] = 78;
  HEAP32[7589] = 79;
  HEAP32[7590] = 0;
  HEAP32[7591] = 80;
  HEAP32[7592] = 81;
  HEAP32[7593] = 0;
  HEAP32[7594] = 7;
  HEAP32[7595] = 83;
  HEAP32[7596] = 0;
  HEAP32[8545] = 84;
  HEAP32[8546] = 85;
  HEAP32[8547] = 0;
  HEAP32[8548] = 86;
  HEAP32[8549] = 87;
  HEAP32[8550] = 0;
  HEAP32[7597] = 88;
  HEAP32[7598] = 16;
  HEAP32[7599] = 0;
  HEAP32[7600] = 90;
  HEAP32[7601] = 91;
  HEAP32[7602] = 264;
  HEAP32[7603] = 92;
  HEAP32[7604] = 93;
  HEAP32[7605] = 0;
  HEAP32[7606] = 94;
  HEAP32[7607] = 95;
  HEAP32[7608] = 256;
  HEAP32[7609] = 96;
  HEAP32[7610] = 97;
  HEAP32[7611] = 256;
  HEAP32[7612] = 98;
  HEAP32[7613] = 99;
  HEAP32[7614] = 0;
  HEAP32[7615] = 100;
  HEAP32[7616] = 101;
  HEAP32[7617] = 256;
  HEAP32[7618] = 8;
  HEAP32[7619] = 9;
  HEAP32[7620] = 260;
  HEAP32[7621] = 104;
  HEAP32[7622] = 105;
  HEAP32[7623] = 260;
  HEAP32[7624] = 106;
  HEAP32[7625] = 107;
  HEAP32[7626] = 260;
  HEAP32[7627] = 106;
  HEAP32[7628] = 107;
  HEAP32[7629] = 260;
  HEAP32[7639] = 106;
  HEAP32[7640] = 107;
  HEAP32[7641] = 260;
  HEAP32[7630] = 104;
  HEAP32[7631] = 105;
  HEAP32[7632] = 260;
  HEAP32[7633] = 106;
  HEAP32[7634] = 107;
  HEAP32[7635] = 260;
  HEAP32[7636] = 106;
  HEAP32[7637] = 107;
  HEAP32[7638] = 260;
  HEAP32[7642] = 118;
  HEAP32[7643] = 119;
  HEAP32[7644] = 0;
  HEAP32[8362] = 120;
  HEAP32[8363] = 121;
  HEAP32[8364] = 256;
  HEAP32[8365] = 122;
  HEAP32[8366] = 123;
  HEAP32[8367] = 256;
  HEAP32[8368] = 124;
  HEAP32[8369] = 125;
  HEAP32[8370] = 256;
  HEAP32[8371] = 126;
  HEAP32[8372] = 127;
  HEAP32[8373] = 256;
  HEAP32[8374] = 128;
  HEAP32[8375] = 129;
  HEAP32[8376] = 256;
  HEAP32[8377] = 130;
  HEAP32[8378] = 131;
  HEAP32[8379] = 256;
  HEAP32[8380] = 132;
  HEAP32[8381] = 133;
  HEAP32[8382] = 256;
  HEAP32[8383] = 134;
  HEAP32[8384] = 135;
  HEAP32[8385] = 256;
  HEAP32[7645] = 136;
  HEAP32[7646] = 137;
  HEAP32[7647] = 260;
  HEAP32[7648] = 138;
  HEAP32[7649] = 139;
  HEAP32[7650] = 260;
  HEAP32[7651] = 138;
  HEAP32[7652] = 139;
  HEAP32[7653] = 260;
  HEAP32[7663] = 138;
  HEAP32[7664] = 139;
  HEAP32[7665] = 260;
  HEAP32[7654] = 136;
  HEAP32[7655] = 137;
  HEAP32[7656] = 260;
  HEAP32[7657] = 138;
  HEAP32[7658] = 139;
  HEAP32[7659] = 260;
  HEAP32[7660] = 138;
  HEAP32[7661] = 139;
  HEAP32[7662] = 260;
  HEAP32[7666] = 150;
  HEAP32[7667] = 151;
  HEAP32[7668] = 0;
  HEAP32[8386] = 152;
  HEAP32[8387] = 153;
  HEAP32[8388] = 256;
  HEAP32[8389] = 154;
  HEAP32[8390] = 155;
  HEAP32[8391] = 256;
  HEAP32[8392] = 156;
  HEAP32[8393] = 157;
  HEAP32[8394] = 256;
  HEAP32[8395] = 158;
  HEAP32[8396] = 159;
  HEAP32[8397] = 256;
  HEAP32[8398] = 160;
  HEAP32[8399] = 161;
  HEAP32[8400] = 256;
  HEAP32[8401] = 162;
  HEAP32[8402] = 163;
  HEAP32[8403] = 256;
  HEAP32[8404] = 164;
  HEAP32[8405] = 165;
  HEAP32[8406] = 256;
  HEAP32[8407] = 166;
  HEAP32[8408] = 167;
  HEAP32[8409] = 256;
  HEAP32[7693] = 168;
  HEAP32[7694] = 169;
  HEAP32[7695] = 0;
  HEAP32[7696] = 170;
  HEAP32[7697] = 171;
  HEAP32[7698] = 0;
  HEAP32[7699] = 170;
  HEAP32[7700] = 171;
  HEAP32[7701] = 0;
  HEAP32[7711] = 170;
  HEAP32[7712] = 171;
  HEAP32[7713] = 0;
  HEAP32[7702] = 168;
  HEAP32[7703] = 169;
  HEAP32[7704] = 0;
  HEAP32[7705] = 170;
  HEAP32[7706] = 171;
  HEAP32[7707] = 0;
  HEAP32[7708] = 170;
  HEAP32[7709] = 171;
  HEAP32[7710] = 0;
  HEAP32[7714] = 182;
  HEAP32[7715] = 183;
  HEAP32[7716] = 0;
  HEAP32[7720] = 184;
  HEAP32[7721] = 99;
  HEAP32[7722] = 0;
  HEAP32[7738] = 186;
  HEAP32[7739] = 99;
  HEAP32[7740] = 0;
  HEAP32[7732] = 184;
  HEAP32[7733] = 99;
  HEAP32[7734] = 0;
  HEAP32[7723] = 184;
  HEAP32[7724] = 99;
  HEAP32[7725] = 0;
  HEAP32[7729] = 184;
  HEAP32[7730] = 99;
  HEAP32[7731] = 0;
  HEAP32[7735] = 184;
  HEAP32[7736] = 99;
  HEAP32[7737] = 0;
  HEAP32[7726] = 196;
  HEAP32[7727] = 99;
  HEAP32[7728] = 0;
  HEAP32[7768] = 198;
  HEAP32[7769] = 199;
  HEAP32[7770] = 0;
  HEAP32[7765] = 200;
  HEAP32[7766] = 201;
  HEAP32[7767] = 0;
  HEAP32[7780] = 198;
  HEAP32[7781] = 199;
  HEAP32[7782] = 0;
  HEAP32[7783] = 198;
  HEAP32[7784] = 199;
  HEAP32[7785] = 0;
  HEAP32[7774] = 200;
  HEAP32[7775] = 201;
  HEAP32[7776] = 0;
  HEAP32[7771] = 198;
  HEAP32[7772] = 199;
  HEAP32[7773] = 0;
  HEAP32[7777] = 198;
  HEAP32[7778] = 199;
  HEAP32[7779] = 0;
  HEAP32[7786] = 212;
  HEAP32[7787] = 213;
  HEAP32[7788] = 0;
  HEAP32[7789] = 214;
  HEAP32[7790] = 215;
  HEAP32[7791] = 0;
  HEAP32[7792] = 216;
  HEAP32[7793] = 217;
  HEAP32[7794] = 0;
  HEAP32[7795] = 216;
  HEAP32[7796] = 217;
  HEAP32[7797] = 0;
  HEAP32[7807] = 216;
  HEAP32[7808] = 217;
  HEAP32[7809] = 0;
  HEAP32[7798] = 214;
  HEAP32[7799] = 215;
  HEAP32[7800] = 0;
  HEAP32[7804] = 224;
  HEAP32[7805] = 40;
  HEAP32[7806] = 0;
  HEAP32[7810] = 226;
  HEAP32[7811] = 227;
  HEAP32[7812] = 0;
  HEAP32[7813] = 228;
  HEAP32[7814] = 229;
  HEAP32[7815] = 256;
  HEAP32[7816] = 230;
  HEAP32[7817] = 231;
  HEAP32[7818] = 256;
  HEAP32[7819] = 232;
  HEAP32[7820] = 233;
  HEAP32[7821] = 256;
  HEAP32[7822] = 234;
  HEAP32[7823] = 235;
  HEAP32[7824] = 256;
  HEAP32[7825] = 236;
  HEAP32[7826] = 237;
  HEAP32[7827] = 256;
  HEAP32[7828] = 238;
  HEAP32[7829] = 239;
  HEAP32[7830] = 256;
  HEAP32[7831] = 240;
  HEAP32[7832] = 241;
  HEAP32[7833] = 256;
  HEAP32[7834] = 242;
  HEAP32[7835] = 243;
  HEAP32[7836] = 256;
  HEAP32[7837] = 244;
  HEAP32[7838] = 245;
  HEAP32[7839] = 256;
  HEAP32[7840] = 246;
  HEAP32[7841] = 247;
  HEAP32[7842] = 256;
  HEAP32[7843] = 248;
  HEAP32[7844] = 249;
  HEAP32[7845] = 256;
  HEAP32[7846] = 250;
  HEAP32[7847] = 251;
  HEAP32[7848] = 256;
  HEAP32[7849] = 252;
  HEAP32[7850] = 253;
  HEAP32[7851] = 256;
  HEAP32[7852] = 254;
  HEAP32[7853] = 255;
  HEAP32[7854] = 256;
  HEAP32[7855] = 256;
  HEAP32[7856] = 257;
  HEAP32[7857] = 256;
  HEAP32[7858] = 258;
  HEAP32[7859] = 259;
  HEAP32[7860] = 256;
  HEAP32[7861] = 260;
  HEAP32[7862] = 261;
  HEAP32[7863] = 256;
  HEAP32[7864] = 262;
  HEAP32[7865] = 263;
  HEAP32[7866] = 256;
  HEAP32[7867] = 264;
  HEAP32[7868] = 265;
  HEAP32[7869] = 256;
  HEAP32[7870] = 266;
  HEAP32[7871] = 267;
  HEAP32[7872] = 256;
  HEAP32[7873] = 268;
  HEAP32[7874] = 269;
  HEAP32[7875] = 256;
  HEAP32[7876] = 270;
  HEAP32[7877] = 271;
  HEAP32[7878] = 256;
  HEAP32[7879] = 272;
  HEAP32[7880] = 273;
  HEAP32[7881] = 256;
  HEAP32[7882] = 274;
  HEAP32[7883] = 275;
  HEAP32[7884] = 256;
  HEAP32[7885] = 276;
  HEAP32[7886] = 277;
  HEAP32[7887] = 256;
  HEAP32[7888] = 278;
  HEAP32[7889] = 279;
  HEAP32[7890] = 256;
  HEAP32[7891] = 280;
  HEAP32[7892] = 281;
  HEAP32[7893] = 256;
  HEAP32[7894] = 282;
  HEAP32[7895] = 283;
  HEAP32[7896] = 256;
  HEAP32[7897] = 284;
  HEAP32[7898] = 285;
  HEAP32[7899] = 256;
  HEAP32[7900] = 286;
  HEAP32[7901] = 287;
  HEAP32[7902] = 256;
  HEAP32[7903] = 288;
  HEAP32[7904] = 289;
  HEAP32[7905] = 256;
  HEAP32[7906] = 290;
  HEAP32[7907] = 291;
  HEAP32[7908] = 256;
  HEAP32[7999] = 292;
  HEAP32[8e3] = 293;
  HEAP32[8001] = 0;
  HEAP32[8002] = 90;
  HEAP32[8003] = 91;
  HEAP32[8004] = 264;
  HEAP32[8131] = 296;
  HEAP32[8132] = 297;
  HEAP32[8133] = 0;
  HEAP32[7909] = 298;
  HEAP32[7910] = 299;
  HEAP32[7911] = 0;
  HEAP32[7939] = 300;
  HEAP32[7940] = 301;
  HEAP32[7941] = 0;
  HEAP32[8242] = 302;
  HEAP32[8243] = 303;
  HEAP32[8244] = 0;
  HEAP32[8308] = 304;
  HEAP32[8309] = 305;
  HEAP32[8310] = 0;
  HEAP32[7912] = 306;
  HEAP32[7913] = 307;
  HEAP32[7914] = 0;
  HEAP32[7942] = 308;
  HEAP32[7943] = 309;
  HEAP32[7944] = 0;
  HEAP32[8245] = 310;
  HEAP32[8246] = 311;
  HEAP32[8247] = 0;
  HEAP32[8311] = 312;
  HEAP32[8312] = 313;
  HEAP32[8313] = 0;
  HEAP32[8260] = 310;
  HEAP32[8261] = 311;
  HEAP32[8262] = 0;
  HEAP32[8326] = 312;
  HEAP32[8327] = 313;
  HEAP32[8328] = 0;
  HEAP32[7915] = 318;
  HEAP32[7916] = 319;
  HEAP32[7917] = 0;
  HEAP32[7945] = 320;
  HEAP32[7946] = 321;
  HEAP32[7947] = 0;
  HEAP32[8248] = 322;
  HEAP32[8249] = 323;
  HEAP32[8250] = 0;
  HEAP32[8314] = 324;
  HEAP32[8315] = 325;
  HEAP32[8316] = 0;
  HEAP32[8263] = 322;
  HEAP32[8264] = 323;
  HEAP32[8265] = 0;
  HEAP32[8329] = 324;
  HEAP32[8330] = 325;
  HEAP32[8331] = 0;
  HEAP32[7918] = 330;
  HEAP32[7919] = 331;
  HEAP32[7920] = 0;
  HEAP32[7948] = 332;
  HEAP32[7949] = 333;
  HEAP32[7950] = 0;
  HEAP32[8251] = 334;
  HEAP32[8252] = 335;
  HEAP32[8253] = 0;
  HEAP32[8317] = 336;
  HEAP32[8318] = 337;
  HEAP32[8319] = 0;
  HEAP32[8266] = 334;
  HEAP32[8267] = 335;
  HEAP32[8268] = 0;
  HEAP32[8332] = 336;
  HEAP32[8333] = 337;
  HEAP32[8334] = 0;
  HEAP32[7921] = 342;
  HEAP32[7922] = 343;
  HEAP32[7923] = 0;
  HEAP32[7951] = 344;
  HEAP32[7952] = 345;
  HEAP32[7953] = 0;
  HEAP32[8254] = 346;
  HEAP32[8255] = 347;
  HEAP32[8256] = 0;
  HEAP32[8320] = 348;
  HEAP32[8321] = 349;
  HEAP32[8322] = 0;
  HEAP32[8269] = 346;
  HEAP32[8270] = 347;
  HEAP32[8271] = 0;
  HEAP32[8335] = 348;
  HEAP32[8336] = 349;
  HEAP32[8337] = 0;
  HEAP32[7924] = 354;
  HEAP32[7925] = 355;
  HEAP32[7926] = 0;
  HEAP32[7954] = 356;
  HEAP32[7955] = 357;
  HEAP32[7956] = 0;
  HEAP32[8257] = 358;
  HEAP32[8258] = 359;
  HEAP32[8259] = 0;
  HEAP32[8323] = 360;
  HEAP32[8324] = 361;
  HEAP32[8325] = 0;
  HEAP32[7927] = 362;
  HEAP32[7928] = 363;
  HEAP32[7929] = 0;
  HEAP32[7930] = 364;
  HEAP32[7931] = 365;
  HEAP32[7932] = 0;
  HEAP32[7933] = 366;
  HEAP32[7934] = 367;
  HEAP32[7935] = 0;
  HEAP32[7936] = 368;
  HEAP32[7937] = 369;
  HEAP32[7938] = 0;
  HEAP32[7957] = 370;
  HEAP32[7958] = 371;
  HEAP32[7959] = 0;
  HEAP32[7960] = 372;
  HEAP32[7961] = 373;
  HEAP32[7962] = 0;
  HEAP32[7963] = 374;
  HEAP32[7964] = 375;
  HEAP32[7965] = 0;
  HEAP32[7966] = 376;
  HEAP32[7967] = 377;
  HEAP32[7968] = 0;
  HEAP32[7969] = 378;
  HEAP32[7970] = 379;
  HEAP32[7971] = 256;
  HEAP32[7972] = 380;
  HEAP32[7973] = 381;
  HEAP32[7974] = 256;
  HEAP32[7975] = 382;
  HEAP32[7976] = 383;
  HEAP32[7977] = 256;
  HEAP32[7978] = 384;
  HEAP32[7979] = 385;
  HEAP32[7980] = 256;
  HEAP32[7981] = 386;
  HEAP32[7982] = 387;
  HEAP32[7983] = 256;
  HEAP32[7984] = 388;
  HEAP32[7985] = 389;
  HEAP32[7986] = 256;
  HEAP32[7987] = 390;
  HEAP32[7988] = 391;
  HEAP32[7989] = 0;
  HEAP32[7990] = 392;
  HEAP32[7991] = 393;
  HEAP32[7992] = 0;
  HEAP32[7993] = 394;
  HEAP32[7994] = 395;
  HEAP32[7995] = 0;
  HEAP32[7996] = 396;
  HEAP32[7997] = 397;
  HEAP32[7998] = 0;
  HEAP32[8005] = 398;
  HEAP32[8006] = 399;
  HEAP32[8007] = 0;
  HEAP32[8011] = 400;
  HEAP32[8012] = 401;
  HEAP32[8013] = 0;
  HEAP32[8014] = 402;
  HEAP32[8015] = 403;
  HEAP32[8016] = 0;
  HEAP32[8017] = 402;
  HEAP32[8018] = 403;
  HEAP32[8019] = 0;
  HEAP32[8020] = 402;
  HEAP32[8021] = 403;
  HEAP32[8022] = 0;
  HEAP32[8023] = 402;
  HEAP32[8024] = 403;
  HEAP32[8025] = 0;
  HEAP32[8026] = 402;
  HEAP32[8027] = 403;
  HEAP32[8028] = 0;
  HEAP32[8029] = 402;
  HEAP32[8030] = 403;
  HEAP32[8031] = 0;
  HEAP32[8032] = 414;
  HEAP32[8033] = 415;
  HEAP32[8034] = 0;
  HEAP32[8038] = 402;
  HEAP32[8039] = 403;
  HEAP32[8040] = 0;
  HEAP32[8041] = 414;
  HEAP32[8042] = 415;
  HEAP32[8043] = 0;
  HEAP32[8044] = 402;
  HEAP32[8045] = 403;
  HEAP32[8046] = 0;
  HEAP32[8047] = 422;
  HEAP32[8048] = 423;
  HEAP32[8049] = 0;
  HEAP32[8050] = 422;
  HEAP32[8051] = 423;
  HEAP32[8052] = 0;
  HEAP32[8053] = 422;
  HEAP32[8054] = 423;
  HEAP32[8055] = 0;
  HEAP32[8056] = 422;
  HEAP32[8057] = 423;
  HEAP32[8058] = 0;
  HEAP32[8059] = 430;
  HEAP32[8060] = 431;
  HEAP32[8061] = 0;
  HEAP32[8062] = 422;
  HEAP32[8063] = 423;
  HEAP32[8064] = 0;
  HEAP32[8065] = 430;
  HEAP32[8066] = 431;
  HEAP32[8067] = 0;
  HEAP32[8437] = 435;
  HEAP32[8438] = 434;
  HEAP32[8439] = 260;
  HEAP32[8440] = 433;
  HEAP32[8441] = 432;
  HEAP32[8442] = 260;
  HEAP32[8443] = 440;
  HEAP32[8444] = 441;
  HEAP32[8445] = 256;
  HEAP32[8446] = 429;
  HEAP32[8447] = 428;
  HEAP32[8448] = 256;
  HEAP32[8449] = 439;
  HEAP32[8450] = 438;
  HEAP32[8451] = 256;
  HEAP32[8452] = 437;
  HEAP32[8453] = 436;
  HEAP32[8454] = 256;
  HEAP32[8455] = 435;
  HEAP32[8456] = 434;
  HEAP32[8457] = 260;
  HEAP32[8458] = 433;
  HEAP32[8459] = 432;
  HEAP32[8460] = 260;
  HEAP32[8461] = 429;
  HEAP32[8462] = 428;
  HEAP32[8463] = 256;
  HEAP32[8464] = 429;
  HEAP32[8465] = 428;
  HEAP32[8466] = 256;
  HEAP32[8467] = 427;
  HEAP32[8468] = 426;
  HEAP32[8469] = 256;
  HEAP32[8470] = 425;
  HEAP32[8471] = 424;
  HEAP32[8472] = 256;
  HEAP32[8473] = 417;
  HEAP32[8474] = 416;
  HEAP32[8475] = 260;
  HEAP32[8476] = 413;
  HEAP32[8477] = 412;
  HEAP32[8478] = 260;
  HEAP32[8482] = 2;
  HEAP32[8483] = 2;
  HEAP32[8484] = 256;
  HEAP32[8485] = 421;
  HEAP32[8486] = 420;
  HEAP32[8487] = 256;
  HEAP32[8488] = 419;
  HEAP32[8489] = 418;
  HEAP32[8490] = 256;
  HEAP32[8491] = 417;
  HEAP32[8492] = 416;
  HEAP32[8493] = 260;
  HEAP32[8494] = 413;
  HEAP32[8495] = 412;
  HEAP32[8496] = 260;
  HEAP32[8497] = 2;
  HEAP32[8498] = 2;
  HEAP32[8499] = 256;
  HEAP32[8503] = 411;
  HEAP32[8504] = 410;
  HEAP32[8505] = 256;
  HEAP32[8506] = 409;
  HEAP32[8507] = 408;
  HEAP32[8508] = 256;
  HEAP32[8509] = 407;
  HEAP32[8510] = 406;
  HEAP32[8511] = 260;
  HEAP32[8512] = 405;
  HEAP32[8513] = 404;
  HEAP32[8514] = 260;
  HEAP32[8515] = 353;
  HEAP32[8516] = 352;
  HEAP32[8517] = 256;
  HEAP32[8518] = 351;
  HEAP32[8519] = 350;
  HEAP32[8520] = 256;
  HEAP32[8521] = 2;
  HEAP32[8522] = 2;
  HEAP32[8523] = 256;
  HEAP32[8524] = 341;
  HEAP32[8525] = 340;
  HEAP32[8526] = 256;
  HEAP32[8527] = 339;
  HEAP32[8528] = 338;
  HEAP32[8529] = 260;
  HEAP32[8530] = 329;
  HEAP32[8531] = 328;
  HEAP32[8532] = 260;
  HEAP32[8533] = 327;
  HEAP32[8534] = 326;
  HEAP32[8535] = 256;
  HEAP32[8536] = 317;
  HEAP32[8537] = 316;
  HEAP32[8538] = 256;
  HEAP32[8539] = 315;
  HEAP32[8540] = 314;
  HEAP32[8541] = 256;
  HEAP32[8542] = 2;
  HEAP32[8543] = 2;
  HEAP32[8544] = 256;
  HEAP32[8143] = 295;
  HEAP32[8144] = 294;
  HEAP32[8145] = 0;
  HEAP32[8146] = 225;
  HEAP32[8147] = 223;
  HEAP32[8148] = 0;
  HEAP32[8149] = 222;
  HEAP32[8150] = 221;
  HEAP32[8151] = 0;
  HEAP32[8152] = 220;
  HEAP32[8153] = 219;
  HEAP32[8154] = 0;
  HEAP32[8155] = 218;
  HEAP32[8156] = 211;
  HEAP32[8157] = 0;
  HEAP32[8158] = 210;
  HEAP32[8159] = 209;
  HEAP32[8160] = 0;
  HEAP32[8161] = 208;
  HEAP32[8162] = 207;
  HEAP32[8163] = 0;
  HEAP32[8164] = 208;
  HEAP32[8165] = 207;
  HEAP32[8166] = 0;
  HEAP32[8167] = 206;
  HEAP32[8168] = 205;
  HEAP32[8169] = 0;
  HEAP32[8170] = 208;
  HEAP32[8171] = 207;
  HEAP32[8172] = 0;
  HEAP32[8173] = 206;
  HEAP32[8174] = 205;
  HEAP32[8175] = 0;
  HEAP32[8197] = 204;
  HEAP32[8198] = 203;
  HEAP32[8199] = 256;
  HEAP32[8200] = 202;
  HEAP32[8201] = 197;
  HEAP32[8202] = 256;
  HEAP32[8203] = 195;
  HEAP32[8204] = 194;
  HEAP32[8205] = 256;
  HEAP32[8206] = 193;
  HEAP32[8207] = 192;
  HEAP32[8208] = 256;
  HEAP32[8209] = 191;
  HEAP32[8210] = 190;
  HEAP32[8211] = 256;
  HEAP32[8212] = 189;
  HEAP32[8213] = 188;
  HEAP32[8214] = 256;
  HEAP32[8215] = 187;
  HEAP32[8216] = 185;
  HEAP32[8217] = 256;
  HEAP32[8218] = 181;
  HEAP32[8219] = 180;
  HEAP32[8220] = 256;
  HEAP32[8221] = 179;
  HEAP32[8222] = 178;
  HEAP32[8223] = 256;
  HEAP32[8224] = 177;
  HEAP32[8225] = 176;
  HEAP32[8226] = 256;
  HEAP32[8227] = 175;
  HEAP32[8228] = 174;
  HEAP32[8229] = 256;
  HEAP32[8230] = 173;
  HEAP32[8231] = 172;
  HEAP32[8232] = 256;
  HEAP32[8233] = 173;
  HEAP32[8234] = 172;
  HEAP32[8235] = 256;
  HEAP32[8236] = 149;
  HEAP32[8237] = 148;
  HEAP32[8238] = 256;
  HEAP32[8239] = 149;
  HEAP32[8240] = 148;
  HEAP32[8241] = 256;
  HEAP32[8293] = 147;
  HEAP32[8294] = 146;
  HEAP32[8295] = 256;
  HEAP32[8296] = 145;
  HEAP32[8297] = 144;
  HEAP32[8298] = 256;
  HEAP32[8299] = 145;
  HEAP32[8300] = 144;
  HEAP32[8301] = 256;
  HEAP32[8302] = 143;
  HEAP32[8303] = 142;
  HEAP32[8304] = 256;
  HEAP32[8305] = 143;
  HEAP32[8306] = 142;
  HEAP32[8307] = 256;
  HEAP32[8272] = 141;
  HEAP32[8273] = 140;
  HEAP32[8274] = 256;
  HEAP32[8338] = 117;
  HEAP32[8339] = 116;
  HEAP32[8340] = 256;
  HEAP32[8275] = 115;
  HEAP32[8276] = 114;
  HEAP32[8277] = 256;
  HEAP32[8341] = 113;
  HEAP32[8342] = 112;
  HEAP32[8343] = 256;
  HEAP32[8278] = 111;
  HEAP32[8279] = 110;
  HEAP32[8280] = 256;
  HEAP32[8344] = 109;
  HEAP32[8345] = 108;
  HEAP32[8346] = 256;
  HEAP32[8281] = 103;
  HEAP32[8282] = 102;
  HEAP32[8283] = 256;
  HEAP32[8347] = 89;
  HEAP32[8348] = 82;
  HEAP32[8349] = 256;
  HEAP32[8410] = 73;
  HEAP32[8411] = 71;
  HEAP32[8412] = 256;
  HEAP32[8413] = 61;
  HEAP32[8414] = 51;
  HEAP32[8415] = 256;
  HEAP32[8416] = 41;
  HEAP32[8417] = 36;
  HEAP32[8418] = 256;
  HEAP32[8419] = 27;
  HEAP32[8420] = 25;
  HEAP32[8421] = 256;
  HEAP32[8422] = 19;
  HEAP32[8423] = 17;
  HEAP32[8424] = 260;
  HEAP32[8425] = 5;
  HEAP32[8426] = 4;
  HEAP32[8427] = 264;
  i19 = 0;
 } else {
  i27 = i20 + 20 | 0;
  i31 = HEAP32[i27 >> 2] | 0;
  HEAP32[i42 >> 2] = i31;
  i16 = HEAP32[i31 + 24 >> 2] | 0;
  i15 = (HEAP32[i31 + 16 >> 2] | 0) + (HEAP32[i31 + 20 >> 2] | 0) | 0;
  i6 = HEAP32[i31 + 8 >> 2] | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  i13 = HEAP32[i6 + 4 >> 2] | 0;
  i30 = HEAP32[i31 + 12 >> 2] | 0;
  i2 = i3 + (i30 << 2) | 0;
  _CheckIfCurrentInstructionHasBreakpoint(i31, i30 << 2 >> 2, i13);
  i30 = i20 + 36 | 0;
  i31 = i20 + 28 | 0;
  i32 = i20 + 40 | 0;
  i33 = i20 + 32 | 0;
  i18 = i1;
  i4 = i2 + 4 | 0;
  i17 = 0;
  i1 = i15;
  i15 = i16;
  L7 : while (1) {
   i9 = i1 + 4 | 0;
   i11 = i4 + 4 | 0;
   i12 = i3;
   i10 = i1 + -4 | 0;
   i5 = i4 - i12 >> 2;
   L9 : do switch (HEAP32[i2 >> 2] | 0) {
   case 1:
    {
     i14 = 6;
     break L7;
    }
   case 2:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i44 = i16;
     i2 = i4;
     i5 = i13;
     i7 = i15;
     i8 = i6;
     i9 = i1;
     i10 = i17;
     i12 = i3;
     i14 = i18;
     i4 = i11;
     i16 = i44;
     i13 = i5;
     i15 = i7;
     i6 = i8;
     i1 = i9;
     i17 = i10;
     i3 = i12;
     i18 = i14;
     continue L7;
    }
   case 3:
    {
     HEAP32[i1 >> 2] = 0;
     i1 = i9;
     i14 = 9;
     break;
    }
   case 4:
    {
     i5 = i17;
     i2 = i4;
     i14 = 562;
     break;
    }
   case 5:
    {
     i5 = HEAP32[i10 >> 2] | 0;
     i14 = i5 + (HEAP32[i4 >> 2] | 0) | 0;
     i2 = HEAP32[i14 + 4 >> 2] | 0;
     i1 = i10;
     HEAP32[i1 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i1 + 4 >> 2] = i2;
     i1 = i9;
     i2 = i11;
     i14 = 562;
     break;
    }
   case 6:
    {
     i14 = 94;
     break;
    }
   case 7:
    {
     i6 = i3;
     i14 = 104;
     break;
    }
   case 8:
    {
     HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
     i2 = i11;
     i1 = i9;
     i14 = 21;
     break;
    }
   case 9:
    {
     i2 = i4;
     i14 = 21;
     break;
    }
   case 10:
    {
     i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
     i14 = 156;
     break;
    }
   case 11:
    {
     i5 = i4;
     i14 = 156;
     break;
    }
   case 12:
    {
     HEAP32[i1 >> 2] = _SystemString_FromUserStrings(HEAP32[HEAP32[i42 >> 2] >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
     i1 = i9;
     i2 = i11;
     i14 = 496;
     break;
    }
   case 13:
    {
     i2 = i4;
     i14 = 496;
     break;
    }
   case 14:
    {
     i2 = 5;
     i14 = 135;
     break;
    }
   case 15:
    {
     i10 = i4;
     i7 = i15;
     i8 = i13;
     i5 = i17;
     i9 = i16;
     i14 = 153;
     break;
    }
   case 16:
    {
     if (!(HEAP16[(HEAP32[i4 >> 2] | 0) + 14 >> 1] & 16)) {
      i2 = HEAP32[HEAP32[(HEAP32[i42 >> 2] | 0) + 24 >> 2] >> 2] | 0;
      i3 = 4;
     } else {
      i2 = 0;
      i3 = 0;
     }
     i44 = HEAP32[i42 >> 2] | 0;
     i2 = FUNCTION_TABLE_iiii[HEAP32[i11 >> 2] & 255](i2, (HEAP32[i44 + 24 >> 2] | 0) + i3 | 0, HEAP32[i44 + 16 >> 2] | 0) | 0;
     if (!i2) i14 = 94; else {
      i14 = 92;
      break L7;
     }
     break;
    }
   case 17:
    {
     i5 = i17;
     i2 = i4;
     i14 = 560;
     break;
    }
   case 18:
    {
     i2 = 7;
     i14 = 135;
     break;
    }
   case 19:
    {
     i5 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = HEAP32[i5 + (HEAP32[i4 >> 2] | 0) >> 2];
     i2 = i11;
     i14 = 560;
     break;
    }
   case 20:
    {
     i3 = HEAP32[i4 >> 2] | 0;
     i2 = HEAP16[i3 + 12 >> 1] & 4096;
     i5 = i2 << 16 >> 16 != 0;
     if (i5) i4 = -1; else i4 = _Heap_AllocType(HEAP32[i3 + 48 >> 2] | 0) | 0;
     i6 = _MethodState_Direct(i20, i3, HEAP32[i42 >> 2] | 0, (i2 & 65535) >>> 12 & 65535) | 0;
     HEAP32[i35 >> 2] = i1;
     i2 = i6 + 24 | 0;
     _CreateParameters(HEAP32[i2 >> 2] | 0, i3, i35, i4);
     i1 = HEAP32[i35 >> 2] | 0;
     if (!i5) {
      HEAP32[i1 >> 2] = i4;
      i1 = i1 + 4 | 0;
     }
     i8 = HEAP32[i42 >> 2] | 0;
     HEAP32[i8 + 20 >> 2] = i1 - (HEAP32[i8 + 16 >> 2] | 0);
     HEAP32[i8 + 12 >> 2] = i11 - i12 >> 2;
     HEAP32[i27 >> 2] = i6;
     HEAP32[i42 >> 2] = i6;
     i8 = HEAP32[i2 >> 2] | 0;
     i1 = (HEAP32[i6 + 16 >> 2] | 0) + (HEAP32[i6 + 20 >> 2] | 0) | 0;
     i2 = HEAP32[i6 + 8 >> 2] | 0;
     i7 = HEAP32[i2 >> 2] | 0;
     i3 = HEAP32[i2 + 4 >> 2] | 0;
     i4 = HEAP32[i6 + 12 >> 2] | 0;
     i5 = _RunFinalizer(i20) | 0;
     if (!i5) {
      i6 = i2;
      i10 = i8;
      i9 = i3;
      i3 = i7;
      i7 = i7 + (i4 << 2) | 0;
      i5 = i8;
      i14 = 503;
     } else {
      i14 = HEAP32[i42 >> 2] | 0;
      HEAP32[i14 + 20 >> 2] = i1 - (HEAP32[i14 + 16 >> 2] | 0);
      HEAP32[i14 + 12 >> 2] = i4 << 2 >> 2;
      HEAP32[i27 >> 2] = i5;
      HEAP32[i42 >> 2] = i5;
      i14 = HEAP32[i5 + 24 >> 2] | 0;
      i9 = HEAP32[i5 + 8 >> 2] | 0;
      i7 = HEAP32[i9 >> 2] | 0;
      i1 = (HEAP32[i5 + 16 >> 2] | 0) + (HEAP32[i5 + 20 >> 2] | 0) | 0;
      i6 = i9;
      i10 = i14;
      i9 = HEAP32[i9 + 4 >> 2] | 0;
      i3 = i7;
      i7 = i7 + (HEAP32[i5 + 12 >> 2] << 2) | 0;
      i5 = i14;
      i14 = 503;
     }
     break;
    }
   case 21:
    {
     i10 = i15;
     i9 = i13;
     i7 = i4;
     i5 = i16;
     i14 = 503;
     break;
    }
   case 22:
    {
     HEAP32[i1 >> 2] = i15 + (HEAP32[i4 >> 2] | 0);
     i1 = i9;
     i2 = i11;
     i14 = 55;
     break;
    }
   case 23:
    {
     i2 = i4;
     i14 = 55;
     break;
    }
   case 24:
    {
     i2 = 10;
     i14 = 135;
     break;
    }
   case 25:
    {
     i14 = 29;
     break;
    }
   case 26:
    {
     i2 = HEAP32[i11 >> 2] | 0;
     i8 = i2 + 40 | 0;
     i5 = i1 + (0 - (HEAP32[i8 >> 2] | 0)) | 0;
     i6 = 11;
     i7 = _Heap_Box(HEAP32[i4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
     i4 = i11;
     i14 = 138;
     break;
    }
   case 27:
    {
     HEAP32[i1 >> 2] = 2;
     i1 = i9;
     i14 = 29;
     break;
    }
   case 28:
    {
     _memset(HEAP32[i10 >> 2] | 0, 0, HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) | 0;
     i1 = i10;
     i2 = i11;
     i14 = 588;
     break;
    }
   case 29:
    {
     i2 = i4;
     i14 = 588;
     break;
    }
   case 30:
    {
     HEAP32[i10 >> 2] = _SystemArray_NewVector(HEAP32[i4 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0;
     i2 = _RunFinalizer(i20) | 0;
     if (!i2) {
      i7 = i15;
      i8 = i13;
      i2 = i11;
      i5 = i16;
      i14 = 526;
     } else {
      i5 = HEAP32[i42 >> 2] | 0;
      HEAP32[i5 + 20 >> 2] = i1 - (HEAP32[i5 + 16 >> 2] | 0);
      HEAP32[i5 + 12 >> 2] = i11 - i12 >> 2;
      HEAP32[i27 >> 2] = i2;
      HEAP32[i42 >> 2] = i2;
      i5 = HEAP32[i2 + 24 >> 2] | 0;
      i8 = HEAP32[i2 + 8 >> 2] | 0;
      i14 = HEAP32[i8 >> 2] | 0;
      i1 = (HEAP32[i2 + 16 >> 2] | 0) + (HEAP32[i2 + 20 >> 2] | 0) | 0;
      i6 = i8;
      i7 = i5;
      i8 = HEAP32[i8 + 4 >> 2] | 0;
      i3 = i14;
      i2 = i14 + (HEAP32[i2 + 12 >> 2] << 2) | 0;
      i14 = 526;
     }
     break;
    }
   case 31:
    {
     i7 = i15;
     i8 = i13;
     i2 = i4;
     i5 = i16;
     i14 = 526;
     break;
    }
   case 32:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i4 = i1 + (4 - (HEAP32[i2 + 40 >> 2] | 0)) | 0;
     i5 = _MethodState_Direct(i20, i2, HEAP32[i42 >> 2] | 0, (HEAPU16[i2 + 12 >> 1] | 0) >>> 12 & 1) | 0;
     HEAP32[i36 >> 2] = i1;
     i8 = i5 + 24 | 0;
     _CreateParameters(HEAP32[i8 >> 2] | 0, i2, i36, i4);
     i1 = HEAP32[i42 >> 2] | 0;
     HEAP32[i1 + 20 >> 2] = (HEAP32[i36 >> 2] | 0) + (HEAP32[(HEAP32[i2 + 48 >> 2] | 0) + 68 >> 2] | 0) - (HEAP32[i1 + 16 >> 2] | 0);
     HEAP32[i1 + 12 >> 2] = i11 - i12 >> 2;
     HEAP32[i27 >> 2] = i5;
     HEAP32[i42 >> 2] = i5;
     i8 = HEAP32[i8 >> 2] | 0;
     i1 = (HEAP32[i5 + 16 >> 2] | 0) + (HEAP32[i5 + 20 >> 2] | 0) | 0;
     i2 = HEAP32[i5 + 8 >> 2] | 0;
     i4 = HEAP32[i2 >> 2] | 0;
     i3 = HEAP32[i2 + 4 >> 2] | 0;
     i5 = HEAP32[i5 + 12 >> 2] | 0;
     i7 = _RunFinalizer(i20) | 0;
     if (!i7) {
      i6 = i2;
      i10 = i8;
      i9 = i3;
      i3 = i4;
      i7 = i4 + (i5 << 2) | 0;
      i5 = i8;
      i14 = 507;
     } else {
      i9 = HEAP32[i42 >> 2] | 0;
      HEAP32[i9 + 20 >> 2] = i1 - (HEAP32[i9 + 16 >> 2] | 0);
      HEAP32[i9 + 12 >> 2] = i5 << 2 >> 2;
      HEAP32[i27 >> 2] = i7;
      HEAP32[i42 >> 2] = i7;
      i5 = HEAP32[i7 + 24 >> 2] | 0;
      i9 = HEAP32[i7 + 8 >> 2] | 0;
      i14 = HEAP32[i9 >> 2] | 0;
      i1 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 20 >> 2] | 0) | 0;
      i6 = i9;
      i10 = i5;
      i9 = HEAP32[i9 + 4 >> 2] | 0;
      i3 = i14;
      i7 = i14 + (HEAP32[i7 + 12 >> 2] << 2) | 0;
      i14 = 507;
     }
     break;
    }
   case 33:
    {
     i10 = i15;
     i9 = i13;
     i7 = i4;
     i5 = i16;
     i14 = 507;
     break;
    }
   case 34:
    {
     i9 = 15;
     i14 = 510;
     break;
    }
   case 35:
    {
     i2 = i4;
     i14 = 523;
     break;
    }
   case 36:
    {
     i14 = 27;
     break;
    }
   case 37:
    {
     i14 = 9;
     break;
    }
   case 38:
    {
     i14 = HEAP32[i10 >> 2] | 0;
     i1 = (_Heap_GetType(i14) | 0) + 68 | 0;
     _memcpy(i10 | 0, i14 | 0, HEAP32[i1 >> 2] | 0) | 0;
     i1 = i10 + (HEAP32[i1 >> 2] | 0) | 0;
     i14 = 604;
     break;
    }
   case 39:
    {
     i14 = 604;
     break;
    }
   case 40:
    {
     i2 = i4;
     i14 = 598;
     break;
    }
   case 41:
    {
     HEAP32[i1 >> 2] = 1;
     i1 = i9;
     i14 = 27;
     break;
    }
   case 42:
    {
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
     i2 = i11;
     i14 = 566;
     break;
    }
   case 43:
    {
     i2 = i4;
     i14 = 566;
     break;
    }
   case 44:
    {
     i14 = HEAP32[i4 >> 2] | 0;
     _memcpy(i1 | 0, i1 + (0 - i14) | 0, i14 | 0) | 0;
     i2 = i11;
     i1 = i1 + i14 | 0;
     i14 = 15;
     break;
    }
   case 45:
    {
     i2 = i4;
     i14 = 15;
     break;
    }
   case 46:
    {
     i2 = i11;
     i1 = i1 + (0 - (HEAP32[i4 >> 2] | 0)) | 0;
     i14 = 17;
     break;
    }
   case 47:
    {
     i2 = i4;
     i14 = 17;
     break;
    }
   case 48:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i14 = i1 + (0 - (i2 >>> 0 > 4 ? i2 : 4)) | 0;
     i1 = i14 + -4 | 0;
     _memcpy(HEAP32[i1 >> 2] | 0, i14 | 0, i2 | 0) | 0;
     i2 = i11;
     i14 = 87;
     break;
    }
   case 49:
    {
     i2 = i4;
     i14 = 87;
     break;
    }
   case 50:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i8 = i2 + 40 | 0;
     i5 = i1 + (0 - (HEAP32[i8 >> 2] | 0)) | 0;
     i6 = 23;
     i7 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
     i14 = 138;
     break;
    }
   case 51:
    {
     i14 = 25;
     break;
    }
   case 52:
    {
     i2 = i1 + (0 - (HEAP32[i4 >> 2] | 0)) | 0;
     i14 = i2 + -4 | 0;
     i1 = i14 + -4 | 0;
     _SystemArray_StoreElement(HEAP32[i1 >> 2] | 0, HEAP32[i14 >> 2] | 0, i2);
     i2 = i11;
     i14 = 550;
     break;
    }
   case 53:
    {
     i2 = i4;
     i14 = 550;
     break;
    }
   case 54:
    {
     i2 = 0;
     while (1) {
      if (i2 >>> 0 >= (HEAP32[i6 + 16 >> 2] | 0) >>> 0) {
       i14 = 640;
       break;
      }
      i5 = HEAP32[i6 + 20 >> 2] | 0;
      if ((HEAP32[i5 + (i2 * 24 | 0) >> 2] | 0) == 2) {
       i7 = HEAP32[i42 >> 2] | 0;
       i1 = (HEAP32[i7 + 12 >> 2] | 0) + -1 | 0;
       if (i1 >>> 0 >= (HEAP32[i5 + (i2 * 24 | 0) + 4 >> 2] | 0) >>> 0) if (i1 >>> 0 < (HEAP32[i5 + (i2 * 24 | 0) + 8 >> 2] | 0) >>> 0) {
        i14 = 645;
        break;
       }
      }
      i2 = i2 + 1 | 0;
     }
     if ((i14 | 0) == 640) {
      i1 = HEAP32[(HEAP32[i42 >> 2] | 0) + 16 >> 2] | 0;
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 646;
      break L9;
     } else if ((i14 | 0) == 645) {
      i1 = HEAP32[i7 + 16 >> 2] | 0;
      i5 = i3 + (HEAP32[i5 + (i2 * 24 | 0) + 12 >> 2] << 2) | 0;
      HEAP32[i7 + 44 >> 2] = i3 + (HEAP32[i4 >> 2] << 2);
      i14 = 646;
      break L9;
     }
     break;
    }
   case 55:
    {
     i5 = i4;
     i14 = 646;
     break;
    }
   case 56:
    {
     i1 = HEAP32[i33 >> 2] | 0;
     if (!i1) {
      i1 = HEAP32[i42 >> 2] | 0;
      i5 = HEAP32[i1 + 44 >> 2] | 0;
      i1 = HEAP32[i1 + 16 >> 2] | 0;
      i14 = 650;
     } else {
      i5 = i17;
      i14 = 629;
     }
     break;
    }
   case 57:
    {
     i5 = i4;
     i14 = 650;
     break;
    }
   case 58:
    {
     i5 = HEAP32[i10 >> 2] | 0;
     i1 = i10;
     i2 = i4;
     i14 = 615;
     break;
    }
   case 59:
    {
     i11 = i3;
     i5 = i17;
     i9 = i15;
     i10 = i13;
     i7 = i4;
     i8 = i16;
     i14 = 637;
     break;
    }
   case 60:
    {
     i5 = HEAP32[i31 >> 2] | 0;
     i2 = i4;
     i14 = 616;
     break;
    }
   case 61:
    {
     HEAP32[i1 >> 2] = 0;
     i1 = i9;
     i14 = 25;
     break;
    }
   case 62:
    {
     i2 = HEAP32[i10 >> 2] | 0;
     i1 = HEAP32[i4 >> 2] | 0;
     HEAP32[i10 >> 2] = 0;
     _memcpy(i10 | 0, i2 | 0, HEAP32[i1 + 64 >> 2] | 0) | 0;
     i1 = i10 + (HEAP32[i1 + 68 >> 2] | 0) | 0;
     i2 = i11;
     i14 = 494;
     break;
    }
   case 63:
    {
     i2 = i4;
     i14 = 494;
     break;
    }
   case 64:
    {
     HEAP32[i10 >> 2] = HEAP32[HEAP32[i10 >> 2] >> 2];
     i14 = 528;
     break;
    }
   case 65:
    {
     i14 = 528;
     break;
    }
   case 66:
    {
     i1 = HEAP32[i4 >> 2] | 0;
     i2 = HEAP32[i10 >> 2] | 0;
     if (i2 >>> 0 < i1 >>> 0) {
      i5 = i3 + (HEAP32[i11 + (i2 << 2) >> 2] << 2) | 0;
      i1 = i10;
      i14 = 161;
      break L9;
     } else {
      i5 = i11 + (i1 << 2) | 0;
      i1 = i10;
      i14 = 161;
      break L9;
     }
    }
   case 67:
    {
     i5 = i4;
     i14 = 161;
     break;
    }
   case 68:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = _SystemArray_LoadElementAddress(HEAP32[i1 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0;
     i1 = i10;
     i14 = 544;
     break;
    }
   case 69:
    {
     i14 = 544;
     break;
    }
   case 70:
    {
     i2 = 33;
     i14 = 135;
     break;
    }
   case 71:
    {
     i14 = 23;
     break;
    }
   case 72:
    {
     i9 = 34;
     i14 = 510;
     break;
    }
   case 73:
    {
     HEAP32[i1 >> 2] = -1;
     i1 = i9;
     i14 = 23;
     break;
    }
   case 74:
    {
     i14 = HEAP32[i10 >> 2] | 0;
     i2 = i1 + -8 | 0;
     i44 = HEAP32[i2 >> 2] | 0;
     i1 = HEAP32[i4 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     _SystemArray_LoadElement(i44, i14, i2);
     i1 = i2 + i1 | 0;
     i2 = i11;
     i14 = 542;
     break;
    }
   case 75:
    {
     i2 = i4;
     i14 = 542;
     break;
    }
   case 76:
    {
     i14 = HEAP32[i11 >> 2] | 0;
     i2 = i1 + (0 - (HEAP32[i4 >> 2] | 0)) | 0;
     i1 = i14 + 32 | 0;
     _memcpy(i2 | 0, i2 + (HEAP32[i14 + 28 >> 2] | 0) | 0, HEAP32[i1 >> 2] | 0) | 0;
     i1 = i2 + (HEAP32[i1 >> 2] | 0) | 0;
     i2 = i4 + 8 | 0;
     i14 = 564;
     break;
    }
   case 77:
    {
     i2 = i4;
     i14 = 564;
     break;
    }
   case 78:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i5 = HEAP32[i10 >> 2] | 0;
     i1 = i2 + 32 | 0;
     _memcpy(i10 | 0, i5 + (HEAP32[i2 + 28 >> 2] | 0) | 0, HEAP32[i1 >> 2] | 0) | 0;
     i1 = i10 + (HEAP32[i1 >> 2] | 0) | 0;
     i2 = i11;
     i14 = 558;
     break;
    }
   case 79:
    {
     i5 = i17;
     i2 = i4;
     i14 = 558;
     break;
    }
   case 80:
    {
     HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
     i1 = i9;
     i2 = i11;
     i14 = 492;
     break;
    }
   case 81:
    {
     i2 = i4;
     i14 = 492;
     break;
    }
   case 82:
    {
     i14 = 394;
     break;
    }
   case 83:
    {
     i5 = i15;
     i8 = i13;
     i2 = i4;
     i7 = i16;
     i14 = 114;
     break;
    }
   case 84:
    {
     i7 = i1 + (0 - (HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] | 0)) | 0;
     i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
     HEAP32[(HEAP32[i42 >> 2] | 0) + 52 >> 2] = HEAP32[i8 + 44 >> 2];
     i1 = i7 + 4 | 0;
     i2 = HEAP32[i1 >> 2] | 0;
     i3 = HEAP32[i1 + 4 >> 2] | 0;
     if (!i2) i1 = i7; else HEAP32[i7 >> 2] = i2;
     L80 : do if (i3 | 0) {
      i6 = HEAP32[i3 >> 2] | 0;
      i5 = i3 + 4 | 0;
      i4 = 0;
      while (1) {
       if ((i4 | 0) == (i6 | 0)) break L80;
       i2 = HEAP32[i5 + (i4 << 2) >> 2] | 0;
       i3 = _Heap_GetType(i2) | 0;
       if (!(HEAP8[i3 + 34 >> 0] | 0)) {
        HEAP32[i1 >> 2] = i2;
        i2 = 4;
       } else {
        i44 = i3 + 68 | 0;
        _memcpy(i1 | 0, i2 | 0, HEAP32[i44 >> 2] | 0) | 0;
        i2 = HEAP32[i44 >> 2] | 0;
       }
       i4 = i4 + 1 | 0;
       i1 = i1 + i2 | 0;
      }
     } while (0);
     i1 = _MethodState_Direct(i20, i8, HEAP32[i42 >> 2] | 0, 0) | 0;
     i3 = i1 + 24 | 0;
     _memcpy(HEAP32[i3 >> 2] | 0, i7 | 0, HEAP32[i8 + 40 >> 2] | 0) | 0;
     i8 = HEAP32[i42 >> 2] | 0;
     HEAP32[i8 + 20 >> 2] = i7 - (HEAP32[i8 + 16 >> 2] | 0);
     HEAP32[i8 + 12 >> 2] = i11 - i12 >> 2;
     HEAP32[i27 >> 2] = i1;
     HEAP32[i42 >> 2] = i1;
     i8 = HEAP32[i3 >> 2] | 0;
     i7 = HEAP32[i1 + 8 >> 2] | 0;
     i3 = HEAP32[i7 >> 2] | 0;
     i6 = i7;
     i5 = i8;
     i7 = HEAP32[i7 + 4 >> 2] | 0;
     i2 = i3 + (HEAP32[i1 + 12 >> 2] << 2) | 0;
     i1 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i1 + 20 >> 2] | 0) | 0;
     i14 = 125;
     break;
    }
   case 85:
    {
     i5 = i15;
     i7 = i13;
     i2 = i4;
     i8 = i16;
     i14 = 125;
     break;
    }
   case 86:
    {
     i2 = HEAP32[(HEAP32[i42 >> 2] | 0) + 52 >> 2] | 0;
     if (!i2) {
      HEAP32[i1 >> 2] = 0;
      i1 = i9;
      i14 = 130;
      break L9;
     }
     if (!(_Type_IsValueType(i2) | 0)) i14 = 130; else {
      i14 = _Heap_AllocType(i2) | 0;
      i44 = HEAP32[i2 + 68 >> 2] | 0;
      i1 = i1 + (0 - i44) | 0;
      _memcpy(i14 | 0, i1 | 0, i44 | 0) | 0;
      HEAP32[i1 >> 2] = i14;
      i1 = i1 + 4 | 0;
      i14 = 130;
     }
     break;
    }
   case 87:
    {
     i14 = 130;
     break;
    }
   case 88:
    {
     i14 = _PInvoke_Call(i4 + -4 | 0, i15, HEAP32[(HEAP32[i42 >> 2] | 0) + 16 >> 2] | 0, i20) | 0;
     HEAP32[(HEAP32[i42 >> 2] | 0) + 20 >> 2] = i14;
     i14 = 94;
     break;
    }
   case 89:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     HEAPF64[i1 >> 3] = +HEAPF64[i1 >> 3] / +HEAPF64[i14 >> 3];
     i1 = i14;
     i14 = 394;
     break;
    }
   case 90:
    {
     i44 = i4;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i2 = i1;
     HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i2 + 4 >> 2] = i14;
     i1 = i1 + 8 | 0;
     i2 = i4 + 8 | 0;
     i14 = 31;
     break;
    }
   case 91:
    {
     i2 = i4;
     i14 = 31;
     break;
    }
   case 92:
    {
     HEAP32[HEAP32[i10 >> 2] >> 2] = 0;
     i1 = i10;
     i14 = 590;
     break;
    }
   case 93:
    {
     i14 = 590;
     break;
    }
   case 94:
    {
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2];
     i1 = i9;
     i14 = 11;
     break;
    }
   case 95:
    {
     i14 = 11;
     break;
    }
   case 96:
    {
     i12 = i1 + -8 | 0;
     i44 = HEAP32[i12 + 4 >> 2] | 0;
     i14 = i1;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i44;
     i1 = i1 + 8 | 0;
     i14 = 13;
     break;
    }
   case 97:
    {
     i14 = 13;
     break;
    }
   case 98:
    {
     i8 = 45;
     i14 = 576;
     break;
    }
   case 99:
    {
     i2 = i4;
     i14 = 586;
     break;
    }
   case 100:
    {
     i1 = i10;
     i14 = 19;
     break;
    }
   case 101:
    {
     i14 = 19;
     break;
    }
   case 102:
    {
     i14 = 392;
     break;
    }
   case 103:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     HEAPF32[i1 >> 2] = Math_fround(f45 / Math_fround(HEAPF32[i10 >> 2]));
     i1 = i10;
     i14 = 392;
     break;
    }
   case 104:
    {
     i44 = i15 + (HEAP32[i4 >> 2] | 0) | 0;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i2 = i1;
     HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i2 + 4 >> 2] = i14;
     i1 = i1 + 8 | 0;
     i2 = i11;
     i14 = 35;
     break;
    }
   case 105:
    {
     i2 = i4;
     i14 = 35;
     break;
    }
   case 106:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + (HEAP32[i4 >> 2] | 0) >> 2];
     i1 = i9;
     i2 = i11;
     i14 = 33;
     break;
    }
   case 107:
    {
     i2 = i4;
     i14 = 33;
     break;
    }
   case 108:
    {
     i14 = 386;
     break;
    }
   case 109:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     HEAPF64[i1 >> 3] = +HEAPF64[i1 >> 3] * +HEAPF64[i14 >> 3];
     i1 = i14;
     i14 = 386;
     break;
    }
   case 110:
    {
     i14 = 384;
     break;
    }
   case 111:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     HEAPF32[i1 >> 2] = Math_fround(f45 * Math_fround(HEAPF32[i10 >> 2]));
     i1 = i10;
     i14 = 384;
     break;
    }
   case 112:
    {
     i14 = 378;
     break;
    }
   case 113:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     HEAPF64[i1 >> 3] = +HEAPF64[i1 >> 3] - +HEAPF64[i14 >> 3];
     i1 = i14;
     i14 = 378;
     break;
    }
   case 114:
    {
     i14 = 376;
     break;
    }
   case 115:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     HEAPF64[i1 >> 3] = +HEAPF64[i1 >> 3] - +HEAPF64[i14 >> 3];
     i1 = i14;
     i14 = 376;
     break;
    }
   case 116:
    {
     i14 = 370;
     break;
    }
   case 117:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     HEAPF64[i1 >> 3] = +HEAPF64[i1 >> 3] + +HEAPF64[i14 >> 3];
     i1 = i14;
     i14 = 370;
     break;
    }
   case 118:
    {
     i2 = (HEAP32[i11 >> 2] | 0) + 68 | 0;
     _memcpy(i1 | 0, i15 + (HEAP32[i4 >> 2] | 0) | 0, HEAP32[i2 >> 2] | 0) | 0;
     i1 = i1 + (HEAP32[i2 >> 2] | 0) | 0;
     i2 = i4 + 8 | 0;
     i14 = 37;
     break;
    }
   case 119:
    {
     i2 = i4;
     i14 = 37;
     break;
    }
   case 120:
    {
     HEAP32[i1 >> 2] = HEAP32[i16 >> 2];
     i1 = i9;
     i14 = 39;
     break;
    }
   case 121:
    {
     i14 = 39;
     break;
    }
   case 122:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 4 >> 2];
     i1 = i9;
     i14 = 41;
     break;
    }
   case 123:
    {
     i14 = 41;
     break;
    }
   case 124:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 8 >> 2];
     i1 = i9;
     i14 = 43;
     break;
    }
   case 125:
    {
     i14 = 43;
     break;
    }
   case 126:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 12 >> 2];
     i1 = i9;
     i14 = 45;
     break;
    }
   case 127:
    {
     i14 = 45;
     break;
    }
   case 128:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 16 >> 2];
     i1 = i9;
     i14 = 47;
     break;
    }
   case 129:
    {
     i14 = 47;
     break;
    }
   case 130:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 20 >> 2];
     i1 = i9;
     i14 = 49;
     break;
    }
   case 131:
    {
     i14 = 49;
     break;
    }
   case 132:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 24 >> 2];
     i1 = i9;
     i14 = 51;
     break;
    }
   case 133:
    {
     i14 = 51;
     break;
    }
   case 134:
    {
     HEAP32[i1 >> 2] = HEAP32[i15 + 28 >> 2];
     i1 = i9;
     i14 = 53;
     break;
    }
   case 135:
    {
     i14 = 53;
     break;
    }
   case 136:
    {
     i1 = i1 + -8 | 0;
     i44 = i1;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i2 = i15 + (HEAP32[i4 >> 2] | 0) | 0;
     HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i2 + 4 >> 2] = i14;
     i2 = i11;
     i14 = 59;
     break;
    }
   case 137:
    {
     i2 = i4;
     i14 = 59;
     break;
    }
   case 138:
    {
     HEAP32[i15 + (HEAP32[i4 >> 2] | 0) >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i2 = i11;
     i14 = 57;
     break;
    }
   case 139:
    {
     i2 = i4;
     i14 = 57;
     break;
    }
   case 140:
    {
     i14 = 368;
     break;
    }
   case 141:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     HEAPF32[i1 >> 2] = Math_fround(f45 + Math_fround(HEAPF32[i10 >> 2]));
     i1 = i10;
     i14 = 368;
     break;
    }
   case 142:
    {
     i14 = 338;
     break;
    }
   case 143:
    {
     i14 = i1 + -16 | 0;
     HEAP32[i14 >> 2] = +HEAPF64[i14 >> 3] < +HEAPF64[i1 + -8 >> 3] & 1;
     i1 = i1 + -12 | 0;
     i14 = 338;
     break;
    }
   case 144:
    {
     i14 = 334;
     break;
    }
   case 145:
    {
     i14 = i1 + -16 | 0;
     HEAP32[i14 >> 2] = +HEAPF64[i14 >> 3] > +HEAPF64[i1 + -8 >> 3] & 1;
     i1 = i1 + -12 | 0;
     i14 = 334;
     break;
    }
   case 146:
    {
     i14 = 330;
     break;
    }
   case 147:
    {
     i14 = i1 + -16 | 0;
     HEAP32[i14 >> 2] = +HEAPF64[i14 >> 3] == +HEAPF64[i1 + -8 >> 3] & 1;
     i1 = i1 + -12 | 0;
     i14 = 330;
     break;
    }
   case 148:
    {
     i14 = 336;
     break;
    }
   case 149:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     HEAP32[i1 >> 2] = f45 < Math_fround(HEAPF32[i10 >> 2]) & 1;
     i1 = i10;
     i14 = 336;
     break;
    }
   case 150:
    {
     i2 = HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] | 0;
     i1 = i1 + (0 - i2) | 0;
     _memcpy(i15 + (HEAP32[i4 >> 2] | 0) | 0, i1 | 0, i2 | 0) | 0;
     i2 = i4 + 8 | 0;
     i14 = 61;
     break;
    }
   case 151:
    {
     i2 = i4;
     i14 = 61;
     break;
    }
   case 152:
    {
     HEAP32[i15 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 63;
     break;
    }
   case 153:
    {
     i14 = 63;
     break;
    }
   case 154:
    {
     HEAP32[i15 + 4 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 65;
     break;
    }
   case 155:
    {
     i14 = 65;
     break;
    }
   case 156:
    {
     HEAP32[i15 + 8 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 67;
     break;
    }
   case 157:
    {
     i14 = 67;
     break;
    }
   case 158:
    {
     HEAP32[i15 + 12 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 69;
     break;
    }
   case 159:
    {
     i14 = 69;
     break;
    }
   case 160:
    {
     HEAP32[i15 + 16 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 71;
     break;
    }
   case 161:
    {
     i14 = 71;
     break;
    }
   case 162:
    {
     HEAP32[i15 + 20 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 73;
     break;
    }
   case 163:
    {
     i14 = 73;
     break;
    }
   case 164:
    {
     HEAP32[i15 + 24 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 75;
     break;
    }
   case 165:
    {
     i14 = 75;
     break;
    }
   case 166:
    {
     HEAP32[i15 + 28 >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 77;
     break;
    }
   case 167:
    {
     i14 = 77;
     break;
    }
   case 168:
    {
     i44 = i1 + -8 | 0;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i1 = i1 + -12 | 0;
     i2 = (HEAP32[i1 >> 2] | 0) + (HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] | 0) | 0;
     HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i2 + 4 >> 2] = i14;
     i2 = i11;
     i14 = 554;
     break;
    }
   case 169:
    {
     i2 = i4;
     i14 = 554;
     break;
    }
   case 170:
    {
     i1 = i1 + -8 | 0;
     HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] | 0) >> 2] = HEAP32[i10 >> 2];
     i2 = i11;
     i14 = 552;
     break;
    }
   case 171:
    {
     i2 = i4;
     i14 = 552;
     break;
    }
   case 172:
    {
     i14 = 332;
     break;
    }
   case 173:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     HEAP32[i1 >> 2] = f45 > Math_fround(HEAPF32[i10 >> 2]) & 1;
     i1 = i10;
     i14 = 332;
     break;
    }
   case 174:
    {
     i14 = 328;
     break;
    }
   case 175:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     HEAP32[i1 >> 2] = f45 == Math_fround(HEAPF32[i10 >> 2]) & 1;
     i1 = i10;
     i14 = 328;
     break;
    }
   case 176:
    {
     i14 = 418;
     break;
    }
   case 177:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i10 = i14;
     i44 = HEAP32[i10 + 4 >> 2] ^ HEAP32[i12 + 4 >> 2];
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2] ^ HEAP32[i12 >> 2];
     HEAP32[i1 + 4 >> 2] = i44;
     i1 = i14;
     i14 = 418;
     break;
    }
   case 178:
    {
     i14 = 414;
     break;
    }
   case 179:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i10 = i14;
     i44 = HEAP32[i10 + 4 >> 2] | HEAP32[i12 + 4 >> 2];
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2] | HEAP32[i12 >> 2];
     HEAP32[i1 + 4 >> 2] = i44;
     i1 = i14;
     i14 = 414;
     break;
    }
   case 180:
    {
     i14 = 410;
     break;
    }
   case 181:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i10 = i14;
     i44 = HEAP32[i10 + 4 >> 2] & HEAP32[i12 + 4 >> 2];
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2] & HEAP32[i12 >> 2];
     HEAP32[i1 + 4 >> 2] = i44;
     i1 = i14;
     i14 = 410;
     break;
    }
   case 182:
    {
     i44 = HEAP32[i4 >> 2] | 0;
     i2 = HEAP32[i44 + 32 >> 2] | 0;
     i14 = i1 + (0 - i2) | 0;
     i1 = i14 + -4 | 0;
     i5 = HEAP32[i1 >> 2] | 0;
     _memcpy(i5 + (HEAP32[i44 + 28 >> 2] | 0) | 0, i14 | 0, i2 | 0) | 0;
     i2 = i11;
     i14 = 556;
     break;
    }
   case 183:
    {
     i5 = i17;
     i2 = i4;
     i14 = 556;
     break;
    }
   case 184:
    {
     i8 = 0;
     i14 = 576;
     break;
    }
   case 185:
    {
     i14 = 406;
     break;
    }
   case 186:
    {
     i8 = 87;
     i14 = 576;
     break;
    }
   case 187:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i44 = i14;
     i44 = ___uremdi3(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 406;
     break;
    }
   case 188:
    {
     i14 = 402;
     break;
    }
   case 189:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i44 = i14;
     i44 = ___remdi3(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 402;
     break;
    }
   case 190:
    {
     i14 = 398;
     break;
    }
   case 191:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i44 = i14;
     i44 = ___udivdi3(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 398;
     break;
    }
   case 192:
    {
     i14 = 390;
     break;
    }
   case 193:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i44 = i14;
     i44 = ___divdi3(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 390;
     break;
    }
   case 194:
    {
     i14 = 382;
     break;
    }
   case 195:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i44 = i1;
     i12 = i14;
     i44 = ___muldi3(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 382;
     break;
    }
   case 196:
    {
     i8 = 83;
     i14 = 576;
     break;
    }
   case 197:
    {
     i14 = 374;
     break;
    }
   case 198:
    {
     HEAP32[HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] >> 2] = HEAP32[i10 >> 2];
     i1 = i10;
     i2 = i11;
     i14 = 568;
     break;
    }
   case 199:
    {
     i2 = i4;
     i14 = 568;
     break;
    }
   case 200:
    {
     i1 = i1 + -8 | 0;
     i44 = i1;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] | 0;
     HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i2 + 4 >> 2] = i14;
     i2 = i11;
     i14 = 570;
     break;
    }
   case 201:
    {
     i2 = i4;
     i14 = 570;
     break;
    }
   case 202:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i12 = i1;
     i44 = i14;
     i44 = _i64Subtract(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 374;
     break;
    }
   case 203:
    {
     i14 = 366;
     break;
    }
   case 204:
    {
     i14 = i1 + -8 | 0;
     i1 = i1 + -16 | 0;
     i44 = i1;
     i12 = i14;
     i44 = _i64Add(HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i44;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i14;
     i14 = 366;
     break;
    }
   case 205:
    {
     i14 = 540;
     break;
    }
   case 206:
    {
     i14 = i1 + -8 | 0;
     _SystemArray_LoadElement(HEAP32[i14 >> 2] | 0, HEAP32[i10 >> 2] | 0, i24);
     i12 = i24;
     i44 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i44;
     i14 = 540;
     break;
    }
   case 207:
    {
     i14 = 538;
     break;
    }
   case 208:
    {
     i1 = i1 + -8 | 0;
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i10 >> 2] | 0, i23);
     HEAP32[i1 >> 2] = HEAP32[i23 >> 2];
     i1 = i10;
     i14 = 538;
     break;
    }
   case 209:
    {
     i14 = 536;
     break;
    }
   case 210:
    {
     i1 = i1 + -8 | 0;
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i10 >> 2] | 0, i22);
     HEAP32[i1 >> 2] = HEAP32[i22 >> 2] & 65535;
     i1 = i10;
     i14 = 536;
     break;
    }
   case 211:
    {
     i14 = 534;
     break;
    }
   case 212:
    {
     i14 = HEAP32[i4 >> 2] | 0;
     i2 = HEAP32[i14 + 32 >> 2] | 0;
     i1 = i1 + (0 - i2) | 0;
     _memcpy(HEAP32[i14 + 40 >> 2] | 0, i1 | 0, i2 | 0) | 0;
     i2 = i11;
     i14 = 572;
     break;
    }
   case 213:
    {
     i2 = i4;
     i14 = 572;
     break;
    }
   case 214:
    {
     i5 = _Heap_AllocType(HEAP32[i4 >> 2] | 0) | 0;
     i1 = i1 + -8 | 0;
     i44 = i1;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i2 = i5;
     HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i2 + 4 >> 2] = i14;
     HEAP32[i1 >> 2] = i5;
     i1 = i10;
     i2 = i11;
     i14 = 594;
     break;
    }
   case 215:
    {
     i2 = i4;
     i5 = i17;
     i14 = 594;
     break;
    }
   case 216:
    {
     i5 = _Heap_AllocType(HEAP32[i4 >> 2] | 0) | 0;
     HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i5;
     i2 = i11;
     i14 = 592;
     break;
    }
   case 217:
    {
     i5 = i17;
     i2 = i4;
     i14 = 592;
     break;
    }
   case 218:
    {
     i1 = i1 + -8 | 0;
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i10 >> 2] | 0, i21);
     HEAP32[i1 >> 2] = HEAP32[i21 >> 2] << 16 >> 16;
     i1 = i10;
     i14 = 534;
     break;
    }
   case 219:
    {
     i14 = 532;
     break;
    }
   case 220:
    {
     i1 = i1 + -8 | 0;
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i10 >> 2] | 0, i38);
     HEAP32[i1 >> 2] = HEAP32[i38 >> 2] & 255;
     i1 = i10;
     i14 = 532;
     break;
    }
   case 221:
    {
     i14 = 530;
     break;
    }
   case 222:
    {
     i1 = i1 + -8 | 0;
     _SystemArray_LoadElement(HEAP32[i1 >> 2] | 0, HEAP32[i10 >> 2] | 0, i37);
     HEAP32[i1 >> 2] = HEAP32[i37 >> 2] << 24 >> 24;
     i1 = i10;
     i14 = 530;
     break;
    }
   case 223:
    {
     i14 = 548;
     break;
    }
   case 224:
    {
     i2 = i11;
     i14 = 598;
     break;
    }
   case 225:
    {
     i12 = i1 + -8 | 0;
     i44 = HEAP32[i12 + 4 >> 2] | 0;
     i14 = i26;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i44;
     i14 = i1 + -16 | 0;
     _SystemArray_StoreElement(HEAP32[i14 >> 2] | 0, HEAP32[i1 + -12 >> 2] | 0, i26);
     i1 = i14;
     i14 = 548;
     break;
    }
   case 226:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i5 = _Heap_AllocType(i2) | 0;
     i2 = HEAP32[i2 + 68 >> 2] | 0;
     i1 = i1 + (0 - i2) | 0;
     _memcpy(i5 | 0, i1 | 0, i2 | 0) | 0;
     HEAP32[i1 >> 2] = i5;
     i1 = i1 + 4 | 0;
     i2 = i11;
     i14 = 596;
     break;
    }
   case 227:
    {
     i5 = i17;
     i2 = i4;
     i14 = 596;
     break;
    }
   case 228:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) == (HEAP32[i10 >> 2] | 0) & 1;
     i1 = i10;
     i14 = 308;
     break;
    }
   case 229:
    {
     i14 = 308;
     break;
    }
   case 230:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) > (HEAP32[i10 >> 2] | 0) & 1;
     i1 = i10;
     i14 = 310;
     break;
    }
   case 231:
    {
     i14 = 310;
     break;
    }
   case 232:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i10 >> 2] | 0) >>> 0 & 1;
     i1 = i10;
     i14 = 312;
     break;
    }
   case 233:
    {
     i14 = 312;
     break;
    }
   case 234:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) < (HEAP32[i10 >> 2] | 0) & 1;
     i1 = i10;
     i14 = 314;
     break;
    }
   case 235:
    {
     i14 = 314;
     break;
    }
   case 236:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0 & 1;
     i1 = i10;
     i14 = 316;
     break;
    }
   case 237:
    {
     i14 = 316;
     break;
    }
   case 238:
    {
     i14 = i1 + -16 | 0;
     i12 = i14;
     i44 = i1 + -8 | 0;
     HEAP32[i14 >> 2] = ((HEAP32[i12 >> 2] | 0) == (HEAP32[i44 >> 2] | 0) ? (HEAP32[i12 + 4 >> 2] | 0) == (HEAP32[i44 + 4 >> 2] | 0) : 0) & 1;
     i1 = i1 + -12 | 0;
     i14 = 318;
     break;
    }
   case 239:
    {
     i14 = 318;
     break;
    }
   case 240:
    {
     i14 = i1 + -16 | 0;
     i12 = i14;
     i9 = HEAP32[i12 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = ((i9 | 0) > (i10 | 0) | ((i9 | 0) == (i10 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 > (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) & 1;
     i1 = i1 + -12 | 0;
     i14 = 320;
     break;
    }
   case 241:
    {
     i14 = 320;
     break;
    }
   case 242:
    {
     i14 = i1 + -16 | 0;
     i12 = i14;
     i9 = HEAP32[i12 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = (i9 >>> 0 > i10 >>> 0 | ((i9 | 0) == (i10 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 > (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) & 1;
     i1 = i1 + -12 | 0;
     i14 = 322;
     break;
    }
   case 243:
    {
     i14 = 322;
     break;
    }
   case 244:
    {
     i14 = i1 + -16 | 0;
     i12 = i14;
     i9 = HEAP32[i12 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = ((i9 | 0) < (i10 | 0) | ((i9 | 0) == (i10 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 < (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) & 1;
     i1 = i1 + -12 | 0;
     i14 = 324;
     break;
    }
   case 245:
    {
     i14 = 324;
     break;
    }
   case 246:
    {
     i14 = i1 + -16 | 0;
     i12 = i14;
     i9 = HEAP32[i12 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = (i9 >>> 0 < i10 >>> 0 | ((i9 | 0) == (i10 | 0) ? (HEAP32[i12 >> 2] | 0) >>> 0 < (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) & 1;
     i1 = i1 + -12 | 0;
     i14 = 326;
     break;
    }
   case 247:
    {
     i14 = 326;
     break;
    }
   case 248:
    {
     i1 = i1 + -8 | 0;
     i44 = HEAP32[i1 >> 2] | 0;
     i2 = i44 + (HEAP32[i10 >> 2] | 0) | 0;
     if ((i44 | 0) >= 0 ? (i2 | 0) < (i44 + -2147483648 | 0) : (i2 | 0) > (i44 + 2147483647 | 0)) {
      i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 168 >> 2] | 0) | 0;
      i2 = i4;
      i14 = 615;
      break L9;
     } else {
      HEAP32[i1 >> 2] = i2;
      i1 = i10;
      i14 = 342;
      break L9;
     }
    }
   case 249:
    {
     i14 = 342;
     break;
    }
   case 250:
    {
     i1 = i1 + -8 | 0;
     i2 = _i64Add(HEAP32[i10 >> 2] | 0, 0, HEAP32[i1 >> 2] | 0, 0) | 0;
     i44 = tempRet0;
     if (i44 >>> 0 > 0 | (i44 | 0) == 0 & i2 >>> 0 > 4294967295) {
      i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 168 >> 2] | 0) | 0;
      i2 = i4;
      i14 = 615;
      break L9;
     } else {
      HEAP32[i1 >> 2] = i2;
      i1 = i10;
      i14 = 346;
      break L9;
     }
    }
   case 251:
    {
     i14 = 346;
     break;
    }
   case 252:
    {
     i1 = i1 + -8 | 0;
     i2 = HEAP32[i1 >> 2] | 0;
     i44 = HEAP32[i10 >> 2] | 0;
     i2 = ___muldi3(i44 | 0, ((i44 | 0) < 0) << 31 >> 31 | 0, i2 | 0, ((i2 | 0) < 0) << 31 >> 31 | 0) | 0;
     i44 = _i64Add(i2 | 0, tempRet0 | 0, -2147483648, 0) | 0;
     i14 = tempRet0;
     if (i14 >>> 0 > 0 | (i14 | 0) == 0 & i44 >>> 0 > 4294967295) {
      i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 168 >> 2] | 0) | 0;
      i2 = i4;
      i14 = 615;
      break L9;
     } else {
      HEAP32[i1 >> 2] = i2;
      i1 = i10;
      i14 = 350;
      break L9;
     }
    }
   case 253:
    {
     i14 = 350;
     break;
    }
   case 254:
    {
     i1 = i1 + -8 | 0;
     i44 = HEAP32[i1 >> 2] | 0;
     i14 = HEAP32[i10 >> 2] | 0;
     i2 = Math_imul(i44, i14) | 0;
     i12 = (i14 | 0) == 0;
     if (i12 ? 0 : ((i2 >>> 0) / ((i12 ? 1 : i14) >>> 0) | 0 | 0) != (i44 | 0)) {
      i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 168 >> 2] | 0) | 0;
      i2 = i4;
      i14 = 615;
      break L9;
     } else {
      HEAP32[i1 >> 2] = i2;
      i1 = i10;
      i14 = 354;
      break L9;
     }
    }
   case 255:
    {
     i14 = 354;
     break;
    }
   case 256:
    {
     i1 = i1 + -8 | 0;
     i44 = HEAP32[i1 >> 2] | 0;
     i2 = HEAP32[i10 >> 2] | 0;
     i2 = _i64Subtract(i44 | 0, ((i44 | 0) < 0) << 31 >> 31 | 0, i2 | 0, ((i2 | 0) < 0) << 31 >> 31 | 0) | 0;
     i44 = _i64Add(i2 | 0, tempRet0 | 0, -2147483648, 0) | 0;
     i14 = tempRet0;
     if (i14 >>> 0 > 0 | (i14 | 0) == 0 & i44 >>> 0 > 4294967295) {
      i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 168 >> 2] | 0) | 0;
      i2 = i4;
      i14 = 615;
      break L9;
     } else {
      HEAP32[i1 >> 2] = i2;
      i1 = i10;
      i14 = 358;
      break L9;
     }
    }
   case 257:
    {
     i14 = 358;
     break;
    }
   case 258:
    {
     i1 = i1 + -8 | 0;
     i2 = _i64Subtract(HEAP32[i1 >> 2] | 0, 0, HEAP32[i10 >> 2] | 0, 0) | 0;
     i44 = tempRet0;
     if (i44 >>> 0 > 0 | (i44 | 0) == 0 & i2 >>> 0 > 4294967295) {
      i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 168 >> 2] | 0) | 0;
      i2 = i4;
      i14 = 615;
      break L9;
     } else {
      HEAP32[i1 >> 2] = i2;
      i1 = i10;
      i14 = 362;
      break L9;
     }
    }
   case 259:
    {
     i14 = 362;
     break;
    }
   case 260:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i1 >> 2] | 0);
     i1 = i10;
     i14 = 364;
     break;
    }
   case 261:
    {
     i14 = 364;
     break;
    }
   case 262:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
     i1 = i10;
     i14 = 372;
     break;
    }
   case 263:
    {
     i14 = 372;
     break;
    }
   case 264:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = Math_imul(HEAP32[i10 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
     i1 = i10;
     i14 = 380;
     break;
    }
   case 265:
    {
     i14 = 380;
     break;
    }
   case 266:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) / (HEAP32[i10 >> 2] | 0) | 0;
     i1 = i10;
     i14 = 388;
     break;
    }
   case 267:
    {
     i14 = 388;
     break;
    }
   case 268:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = ((HEAP32[i1 >> 2] | 0) >>> 0) / ((HEAP32[i10 >> 2] | 0) >>> 0) | 0;
     i1 = i10;
     i14 = 396;
     break;
    }
   case 269:
    {
     i14 = 396;
     break;
    }
   case 270:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) % (HEAP32[i10 >> 2] | 0) | 0;
     i1 = i10;
     i14 = 400;
     break;
    }
   case 271:
    {
     i14 = 400;
     break;
    }
   case 272:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = ((HEAP32[i1 >> 2] | 0) >>> 0) % ((HEAP32[i10 >> 2] | 0) >>> 0) | 0;
     i1 = i10;
     i14 = 404;
     break;
    }
   case 273:
    {
     i14 = 404;
     break;
    }
   case 274:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2] & HEAP32[i1 >> 2];
     i1 = i10;
     i14 = 408;
     break;
    }
   case 275:
    {
     i14 = 408;
     break;
    }
   case 276:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2] | HEAP32[i1 >> 2];
     i1 = i10;
     i14 = 412;
     break;
    }
   case 277:
    {
     i14 = 412;
     break;
    }
   case 278:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2] ^ HEAP32[i1 >> 2];
     i1 = i10;
     i14 = 416;
     break;
    }
   case 279:
    {
     i14 = 416;
     break;
    }
   case 280:
    {
     HEAP32[i10 >> 2] = 0 - (HEAP32[i10 >> 2] | 0);
     i14 = 420;
     break;
    }
   case 281:
    {
     i14 = 420;
     break;
    }
   case 282:
    {
     HEAP32[i10 >> 2] = ~HEAP32[i10 >> 2];
     i14 = 428;
     break;
    }
   case 283:
    {
     i14 = 428;
     break;
    }
   case 284:
    {
     i14 = i1 + -8 | 0;
     i44 = i14;
     i44 = _i64Subtract(0, 0, HEAP32[i44 >> 2] | 0, HEAP32[i44 + 4 >> 2] | 0) | 0;
     HEAP32[i14 >> 2] = i44;
     HEAP32[i14 + 4 >> 2] = tempRet0;
     i14 = 422;
     break;
    }
   case 285:
    {
     i14 = 422;
     break;
    }
   case 286:
    {
     i14 = i1 + -8 | 0;
     i12 = i14;
     i44 = ~HEAP32[i12 + 4 >> 2];
     HEAP32[i14 >> 2] = ~HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i44;
     i14 = 430;
     break;
    }
   case 287:
    {
     i14 = 430;
     break;
    }
   case 288:
    {
     HEAPF32[i10 >> 2] = Math_fround(-Math_fround(HEAPF32[i10 >> 2]));
     i14 = 424;
     break;
    }
   case 289:
    {
     i14 = 424;
     break;
    }
   case 290:
    {
     i14 = i1 + -8 | 0;
     HEAPF64[i14 >> 3] = -+HEAPF64[i14 >> 3];
     i14 = 426;
     break;
    }
   case 291:
    {
     i14 = 426;
     break;
    }
   case 292:
    {
     i4 = HEAP32[i4 >> 2] | 0;
     i2 = i1 + (-4 - (HEAP32[i4 + 68 >> 2] | 0)) | 0;
     i1 = i2 + 4 | 0;
     if (!(HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = 0;
      i2 = i11;
      i14 = 602;
      break L9;
     } else {
      HEAP32[i2 >> 2] = _Heap_Box(i4, i1) | 0;
      i2 = i11;
      i14 = 602;
      break L9;
     }
    }
   case 293:
    {
     i2 = i4;
     i14 = 602;
     break;
    }
   case 294:
    {
     i14 = 546;
     break;
    }
   case 295:
    {
     HEAP32[i25 >> 2] = HEAP32[i10 >> 2];
     i14 = i1 + -12 | 0;
     _SystemArray_StoreElement(HEAP32[i14 >> 2] | 0, HEAP32[i1 + -8 >> 2] | 0, i25);
     i1 = i14;
     i14 = 546;
     break;
    }
   case 296:
    {
     i5 = HEAP32[i10 >> 2] | 0;
     i2 = (HEAP32[i4 >> 2] | 0) + 68 | 0;
     if (!i5) {
      HEAP32[i10 >> 2] = 0;
      i1 = i1 + (HEAP32[i2 >> 2] | 0) | 0;
      i2 = i11;
      i14 = 608;
      break L9;
     } else {
      HEAP32[i10 >> 2] = 1;
      _memcpy(i1 | 0, i5 | 0, HEAP32[i2 >> 2] | 0) | 0;
      i1 = i1 + (HEAP32[i2 >> 2] | 0) | 0;
      i2 = i11;
      i14 = 608;
      break L9;
     }
    }
   case 297:
    {
     i2 = i4;
     i14 = 608;
     break;
    }
   case 298:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 181;
     } else {
      i5 = i11;
      i14 = 181;
     }
     break;
    }
   case 299:
    {
     i5 = i4;
     i14 = 181;
     break;
    }
   case 300:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i44 = i1 + -8 | 0;
     if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i44 >> 2] | 0) ? (HEAP32[i14 + 4 >> 2] | 0) == (HEAP32[i44 + 4 >> 2] | 0) : 0) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 185;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 185;
     }
     break;
    }
   case 301:
    {
     i5 = i4;
     i14 = 185;
     break;
    }
   case 302:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     if (f45 == Math_fround(HEAPF32[i10 >> 2])) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 189;
     } else {
      i5 = i11;
      i14 = 189;
     }
     break;
    }
   case 303:
    {
     i5 = i4;
     i14 = 189;
     break;
    }
   case 304:
    {
     i2 = i1 + -16 | 0;
     if (+HEAPF64[i2 >> 3] == +HEAPF64[i1 + -8 >> 3]) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 193;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 193;
     }
     break;
    }
   case 305:
    {
     i5 = i4;
     i14 = 193;
     break;
    }
   case 306:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) < (HEAP32[i10 >> 2] | 0)) {
      i5 = i11;
      i14 = 197;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 197;
     }
     break;
    }
   case 307:
    {
     i5 = i4;
     i14 = 197;
     break;
    }
   case 308:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if ((i9 | 0) < (i10 | 0) | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 < (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i11;
      i1 = i2;
      i14 = 201;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 201;
     }
     break;
    }
   case 309:
    {
     i5 = i4;
     i14 = 201;
     break;
    }
   case 310:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     if (!(f45 >= Math_fround(HEAPF32[i10 >> 2]))) {
      i5 = i11;
      i14 = 205;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 205;
     }
     break;
    }
   case 311:
    {
     i5 = i4;
     i14 = 205;
     break;
    }
   case 312:
    {
     i2 = i1 + -16 | 0;
     if (!(+HEAPF64[i2 >> 3] >= +HEAPF64[i1 + -8 >> 3])) {
      i5 = i11;
      i1 = i2;
      i14 = 209;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 209;
     }
     break;
    }
   case 313:
    {
     i5 = i4;
     i14 = 209;
     break;
    }
   case 314:
    {
     i14 = 490;
     break;
    }
   case 315:
    {
     i1 = i1 + -8 | 0;
     HEAPF32[i1 >> 2] = Math_fround(+HEAPF64[i1 >> 3]);
     i1 = i10;
     i14 = 490;
     break;
    }
   case 316:
    {
     i14 = 488;
     break;
    }
   case 317:
    {
     i14 = i1 + -8 | 0;
     d46 = +HEAPF64[i14 >> 3];
     i44 = +Math_abs(d46) >= 1.0 ? (d46 > 0.0 ? ~~+Math_min(+Math_floor(d46 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((d46 - +(~~d46 >>> 0)) / 4294967296.0) >>> 0) : 0;
     HEAP32[i14 >> 2] = ~~d46 >>> 0;
     HEAP32[i14 + 4 >> 2] = i44;
     i14 = 488;
     break;
    }
   case 318:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) > (HEAP32[i10 >> 2] | 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 213;
     } else {
      i5 = i11;
      i14 = 213;
     }
     break;
    }
   case 319:
    {
     i5 = i4;
     i14 = 213;
     break;
    }
   case 320:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if ((i9 | 0) > (i10 | 0) | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 > (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 217;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 217;
     }
     break;
    }
   case 321:
    {
     i5 = i4;
     i14 = 217;
     break;
    }
   case 322:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     if (f45 > Math_fround(HEAPF32[i10 >> 2])) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 221;
     } else {
      i5 = i11;
      i14 = 221;
     }
     break;
    }
   case 323:
    {
     i5 = i4;
     i14 = 221;
     break;
    }
   case 324:
    {
     i2 = i1 + -16 | 0;
     if (+HEAPF64[i2 >> 3] > +HEAPF64[i1 + -8 >> 3]) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 225;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 225;
     }
     break;
    }
   case 325:
    {
     i5 = i4;
     i14 = 225;
     break;
    }
   case 326:
    {
     i14 = 486;
     break;
    }
   case 327:
    {
     f45 = Math_fround(HEAPF32[i10 >> 2]);
     i14 = +Math_abs(+f45) >= 1.0 ? (+f45 > 0.0 ? ~~+Math_min(+Math_floor(+f45 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((+f45 - +(~~+f45 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i1 = i10;
     HEAP32[i1 >> 2] = ~~+f45 >>> 0;
     HEAP32[i1 + 4 >> 2] = i14;
     i1 = i9;
     i14 = 486;
     break;
    }
   case 328:
    {
     i2 = i4;
     i14 = 484;
     break;
    }
   case 329:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = ~~+HEAPF64[i1 >> 3] >>> 0 & HEAP32[i4 >> 2];
     i1 = i10;
     i2 = i11;
     i14 = 484;
     break;
    }
   case 330:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) > (HEAP32[i10 >> 2] | 0)) {
      i5 = i11;
      i14 = 229;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 229;
     }
     break;
    }
   case 331:
    {
     i5 = i4;
     i14 = 229;
     break;
    }
   case 332:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if ((i9 | 0) > (i10 | 0) | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 > (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i11;
      i1 = i2;
      i14 = 233;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 233;
     }
     break;
    }
   case 333:
    {
     i5 = i4;
     i14 = 233;
     break;
    }
   case 334:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     if (!(f45 <= Math_fround(HEAPF32[i10 >> 2]))) {
      i5 = i11;
      i14 = 237;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 237;
     }
     break;
    }
   case 335:
    {
     i5 = i4;
     i14 = 237;
     break;
    }
   case 336:
    {
     i2 = i1 + -16 | 0;
     if (!(+HEAPF64[i2 >> 3] <= +HEAPF64[i1 + -8 >> 3])) {
      i5 = i11;
      i1 = i2;
      i14 = 241;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 241;
     }
     break;
    }
   case 337:
    {
     i5 = i4;
     i14 = 241;
     break;
    }
   case 338:
    {
     i2 = i4;
     i14 = 482;
     break;
    }
   case 339:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = ~~+HEAPF64[i1 >> 3] << i2 >> i2;
     i1 = i10;
     i2 = i11;
     i14 = 482;
     break;
    }
   case 340:
    {
     i14 = 480;
     break;
    }
   case 341:
    {
     HEAPF64[i10 >> 3] = +Math_fround(HEAPF32[i10 >> 2]);
     i1 = i9;
     i14 = 480;
     break;
    }
   case 342:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) < (HEAP32[i10 >> 2] | 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 245;
     } else {
      i5 = i11;
      i14 = 245;
     }
     break;
    }
   case 343:
    {
     i5 = i4;
     i14 = 245;
     break;
    }
   case 344:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if ((i9 | 0) < (i10 | 0) | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 < (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 249;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 249;
     }
     break;
    }
   case 345:
    {
     i5 = i4;
     i14 = 249;
     break;
    }
   case 346:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     if (f45 < Math_fround(HEAPF32[i10 >> 2])) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 253;
     } else {
      i5 = i11;
      i14 = 253;
     }
     break;
    }
   case 347:
    {
     i5 = i4;
     i14 = 253;
     break;
    }
   case 348:
    {
     i2 = i1 + -16 | 0;
     if (+HEAPF64[i2 >> 3] < +HEAPF64[i1 + -8 >> 3]) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 257;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 257;
     }
     break;
    }
   case 349:
    {
     i5 = i4;
     i14 = 257;
     break;
    }
   case 350:
    {
     i14 = 478;
     break;
    }
   case 351:
    {
     f45 = Math_fround(HEAPF32[i10 >> 2]);
     i14 = +Math_abs(+f45) >= 1.0 ? (+f45 > 0.0 ? ~~+Math_min(+Math_floor(+f45 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((+f45 - +(~~+f45 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i1 = i10;
     HEAP32[i1 >> 2] = ~~+f45 >>> 0;
     HEAP32[i1 + 4 >> 2] = i14;
     i1 = i9;
     i14 = 478;
     break;
    }
   case 352:
    {
     i14 = 476;
     break;
    }
   case 353:
    {
     f45 = Math_fround(HEAPF32[i10 >> 2]);
     i14 = +Math_abs(+f45) >= 1.0 ? (+f45 > 0.0 ? ~~+Math_min(+Math_floor(+f45 / 4294967296.0), 4294967295.0) >>> 0 : ~~+Math_ceil((+f45 - +(~~+f45 >>> 0)) / 4294967296.0) >>> 0) : 0;
     i1 = i10;
     HEAP32[i1 >> 2] = ~~+f45 >>> 0;
     HEAP32[i1 + 4 >> 2] = i14;
     i1 = i9;
     i14 = 476;
     break;
    }
   case 354:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
      i5 = i11;
      i14 = 261;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 261;
     }
     break;
    }
   case 355:
    {
     i5 = i4;
     i14 = 261;
     break;
    }
   case 356:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i44 = i1 + -8 | 0;
     if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i44 >> 2] | 0) ? (HEAP32[i14 + 4 >> 2] | 0) == (HEAP32[i44 + 4 >> 2] | 0) : 0) {
      i5 = i11;
      i1 = i2;
      i14 = 265;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 265;
     }
     break;
    }
   case 357:
    {
     i5 = i4;
     i14 = 265;
     break;
    }
   case 358:
    {
     i1 = i1 + -8 | 0;
     f45 = Math_fround(HEAPF32[i1 >> 2]);
     if (f45 != Math_fround(HEAPF32[i10 >> 2])) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 269;
     } else {
      i5 = i11;
      i14 = 269;
     }
     break;
    }
   case 359:
    {
     i5 = i4;
     i14 = 269;
     break;
    }
   case 360:
    {
     i2 = i1 + -16 | 0;
     if (+HEAPF64[i2 >> 3] != +HEAPF64[i1 + -8 >> 3]) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 273;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 273;
     }
     break;
    }
   case 361:
    {
     i5 = i4;
     i14 = 273;
     break;
    }
   case 362:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
      i5 = i11;
      i14 = 277;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 277;
     }
     break;
    }
   case 363:
    {
     i5 = i4;
     i14 = 277;
     break;
    }
   case 364:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i10 >> 2] | 0) >>> 0) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 281;
     } else {
      i5 = i11;
      i14 = 281;
     }
     break;
    }
   case 365:
    {
     i5 = i4;
     i14 = 281;
     break;
    }
   case 366:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i10 >> 2] | 0) >>> 0) {
      i5 = i11;
      i14 = 285;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 285;
     }
     break;
    }
   case 367:
    {
     i5 = i4;
     i14 = 285;
     break;
    }
   case 368:
    {
     i1 = i1 + -8 | 0;
     if ((HEAP32[i1 >> 2] | 0) >>> 0 < (HEAP32[i10 >> 2] | 0) >>> 0) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 289;
     } else {
      i5 = i11;
      i14 = 289;
     }
     break;
    }
   case 369:
    {
     i5 = i4;
     i14 = 289;
     break;
    }
   case 370:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if (i9 >>> 0 < i10 >>> 0 | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 < (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i11;
      i1 = i2;
      i14 = 293;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 293;
     }
     break;
    }
   case 371:
    {
     i5 = i4;
     i14 = 293;
     break;
    }
   case 372:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if (i9 >>> 0 > i10 >>> 0 | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 > (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 297;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 297;
     }
     break;
    }
   case 373:
    {
     i5 = i4;
     i14 = 297;
     break;
    }
   case 374:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if (i9 >>> 0 > i10 >>> 0 | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 > (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i11;
      i1 = i2;
      i14 = 301;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 301;
     }
     break;
    }
   case 375:
    {
     i5 = i4;
     i14 = 301;
     break;
    }
   case 376:
    {
     i2 = i1 + -16 | 0;
     i14 = i2;
     i9 = HEAP32[i14 + 4 >> 2] | 0;
     i44 = i1 + -8 | 0;
     i10 = HEAP32[i44 + 4 >> 2] | 0;
     if (i9 >>> 0 < i10 >>> 0 | ((i9 | 0) == (i10 | 0) ? (HEAP32[i14 >> 2] | 0) >>> 0 < (HEAP32[i44 >> 2] | 0) >>> 0 : 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i2;
      i14 = 305;
     } else {
      i5 = i11;
      i1 = i2;
      i14 = 305;
     }
     break;
    }
   case 377:
    {
     i5 = i4;
     i14 = 305;
     break;
    }
   case 378:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] << HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 432;
     break;
    }
   case 379:
    {
     i14 = 432;
     break;
    }
   case 380:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] >> HEAP32[i10 >> 2];
     i1 = i10;
     i14 = 434;
     break;
    }
   case 381:
    {
     i14 = 434;
     break;
    }
   case 382:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) >>> (HEAP32[i10 >> 2] | 0);
     i1 = i10;
     i14 = 436;
     break;
    }
   case 383:
    {
     i14 = 436;
     break;
    }
   case 384:
    {
     i1 = i1 + -12 | 0;
     i14 = i1;
     i14 = _bitshift64Shl(HEAP32[i14 >> 2] | 0, HEAP32[i14 + 4 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i14;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i10;
     i14 = 438;
     break;
    }
   case 385:
    {
     i14 = 438;
     break;
    }
   case 386:
    {
     i1 = i1 + -12 | 0;
     i14 = i1;
     i14 = _bitshift64Ashr(HEAP32[i14 >> 2] | 0, HEAP32[i14 + 4 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i14;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i10;
     i14 = 440;
     break;
    }
   case 387:
    {
     i14 = 440;
     break;
    }
   case 388:
    {
     i1 = i1 + -12 | 0;
     i14 = i1;
     i14 = _bitshift64Lshr(HEAP32[i14 >> 2] | 0, HEAP32[i14 + 4 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0;
     HEAP32[i1 >> 2] = i14;
     HEAP32[i1 + 4 >> 2] = tempRet0;
     i1 = i10;
     i14 = 442;
     break;
    }
   case 389:
    {
     i14 = 442;
     break;
    }
   case 390:
    {
     if (!(HEAP32[i10 >> 2] | 0)) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i10;
      i14 = 169;
     } else {
      i5 = i11;
      i1 = i10;
      i14 = 169;
     }
     break;
    }
   case 391:
    {
     i5 = i4;
     i14 = 169;
     break;
    }
   case 392:
    {
     if (!(HEAP32[i10 >> 2] | 0)) {
      i5 = i11;
      i1 = i10;
      i14 = 165;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i1 = i10;
      i14 = 165;
     }
     break;
    }
   case 393:
    {
     i5 = i4;
     i14 = 165;
     break;
    }
   case 394:
    {
     i1 = i1 + -8 | 0;
     i44 = i1;
     if ((HEAP32[i44 >> 2] | 0) == 0 & (HEAP32[i44 + 4 >> 2] | 0) == 0) {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 177;
     } else {
      i5 = i11;
      i14 = 177;
     }
     break;
    }
   case 395:
    {
     i5 = i4;
     i14 = 177;
     break;
    }
   case 396:
    {
     i1 = i1 + -8 | 0;
     i44 = i1;
     if ((HEAP32[i44 >> 2] | 0) == 0 & (HEAP32[i44 + 4 >> 2] | 0) == 0) {
      i5 = i11;
      i14 = 173;
     } else {
      i5 = i3 + (HEAP32[i4 >> 2] << 2) | 0;
      i14 = 173;
     }
     break;
    }
   case 397:
    {
     i5 = i4;
     i14 = 173;
     break;
    }
   case 398:
    {
     HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
     i1 = i9;
     i2 = i11;
     i14 = 610;
     break;
    }
   case 399:
    {
     i2 = i4;
     i14 = 610;
     break;
    }
   case 400:
    {
     HEAP32[i1 >> 2] = HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2];
     i1 = i9;
     i2 = i11;
     i14 = 612;
     break;
    }
   case 401:
    {
     i2 = i4;
     i14 = 612;
     break;
    }
   case 402:
    {
     HEAP32[i10 >> 2] = HEAP32[HEAP32[i10 >> 2] >> 2];
     i14 = 79;
     break;
    }
   case 403:
    {
     i14 = 79;
     break;
    }
   case 404:
    {
     i2 = i4;
     i14 = 474;
     break;
    }
   case 405:
    {
     HEAP32[i10 >> 2] = ~~Math_fround(HEAPF32[i10 >> 2]) >>> 0 & HEAP32[i4 >> 2];
     i2 = i11;
     i14 = 474;
     break;
    }
   case 406:
    {
     i2 = i4;
     i14 = 472;
     break;
    }
   case 407:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     HEAP32[i10 >> 2] = ~~Math_fround(HEAPF32[i10 >> 2]) << i2 >> i2;
     i2 = i11;
     i14 = 472;
     break;
    }
   case 408:
    {
     i14 = 470;
     break;
    }
   case 409:
    {
     i14 = i1 + -8 | 0;
     i44 = i14;
     HEAPF64[i14 >> 3] = +((HEAP32[i44 >> 2] | 0) >>> 0) + 4294967296.0 * +((HEAP32[i44 + 4 >> 2] | 0) >>> 0);
     i14 = 470;
     break;
    }
   case 410:
    {
     i14 = 468;
     break;
    }
   case 411:
    {
     i1 = i1 + -8 | 0;
     i14 = i1;
     HEAPF32[i1 >> 2] = Math_fround(+((HEAP32[i14 >> 2] | 0) >>> 0) + 4294967296.0 * +((HEAP32[i14 + 4 >> 2] | 0) >>> 0));
     i1 = i10;
     i14 = 468;
     break;
    }
   case 412:
    {
     i2 = i4;
     i14 = 460;
     break;
    }
   case 413:
    {
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & HEAP32[i4 >> 2];
     i1 = i10;
     i2 = i11;
     i14 = 460;
     break;
    }
   case 414:
    {
     i44 = HEAP32[i10 >> 2] | 0;
     i14 = HEAP32[i44 + 4 >> 2] | 0;
     i1 = i10;
     HEAP32[i1 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i1 + 4 >> 2] = i14;
     i1 = i9;
     i14 = 81;
     break;
    }
   case 415:
    {
     i14 = 81;
     break;
    }
   case 416:
    {
     i2 = i4;
     i14 = 462;
     break;
    }
   case 417:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     i1 = i1 + -8 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] << i2 >> i2;
     i1 = i10;
     i2 = i11;
     i14 = 462;
     break;
    }
   case 418:
    {
     i14 = 466;
     break;
    }
   case 419:
    {
     i14 = i1 + -8 | 0;
     i44 = i14;
     HEAPF64[i14 >> 3] = +((HEAP32[i44 >> 2] | 0) >>> 0) + 4294967296.0 * +(HEAP32[i44 + 4 >> 2] | 0);
     i14 = 466;
     break;
    }
   case 420:
    {
     i14 = 464;
     break;
    }
   case 421:
    {
     i1 = i1 + -8 | 0;
     i14 = i1;
     HEAPF32[i1 >> 2] = Math_fround(+((HEAP32[i14 >> 2] | 0) >>> 0) + 4294967296.0 * +(HEAP32[i14 + 4 >> 2] | 0));
     i1 = i10;
     i14 = 464;
     break;
    }
   case 422:
    {
     i1 = i1 + -8 | 0;
     HEAP32[HEAP32[i1 >> 2] >> 2] = HEAP32[i10 >> 2];
     i14 = 83;
     break;
    }
   case 423:
    {
     i14 = 83;
     break;
    }
   case 424:
    {
     i14 = 458;
     break;
    }
   case 425:
    {
     HEAPF64[i10 >> 3] = +((HEAP32[i10 >> 2] | 0) >>> 0);
     i1 = i9;
     i14 = 458;
     break;
    }
   case 426:
    {
     i14 = 456;
     break;
    }
   case 427:
    {
     HEAPF32[i10 >> 2] = Math_fround((HEAP32[i10 >> 2] | 0) >>> 0);
     i14 = 456;
     break;
    }
   case 428:
    {
     i14 = 450;
     break;
    }
   case 429:
    {
     i1 = i10;
     HEAP32[i1 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i1 + 4 >> 2] = 0;
     i1 = i9;
     i14 = 450;
     break;
    }
   case 430:
    {
     i12 = i1 + -8 | 0;
     i44 = HEAP32[i12 + 4 >> 2] | 0;
     i1 = i1 + -12 | 0;
     i14 = HEAP32[i1 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i44;
     i14 = 85;
     break;
    }
   case 431:
    {
     i14 = 85;
     break;
    }
   case 432:
    {
     i2 = i4;
     i14 = 444;
     break;
    }
   case 433:
    {
     HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & HEAP32[i4 >> 2];
     i2 = i11;
     i14 = 444;
     break;
    }
   case 434:
    {
     i2 = i4;
     i14 = 446;
     break;
    }
   case 435:
    {
     i2 = HEAP32[i4 >> 2] | 0;
     HEAP32[i10 >> 2] = HEAP32[i10 >> 2] << i2 >> i2;
     i2 = i11;
     i14 = 446;
     break;
    }
   case 436:
    {
     i14 = 454;
     break;
    }
   case 437:
    {
     HEAPF64[i10 >> 3] = +(HEAP32[i10 >> 2] | 0);
     i1 = i9;
     i14 = 454;
     break;
    }
   case 438:
    {
     i14 = 452;
     break;
    }
   case 439:
    {
     HEAPF32[i10 >> 2] = Math_fround(HEAP32[i10 >> 2] | 0);
     i14 = 452;
     break;
    }
   case 440:
    {
     i14 = HEAP32[i10 >> 2] | 0;
     i1 = i10;
     HEAP32[i1 >> 2] = i14;
     HEAP32[i1 + 4 >> 2] = ((i14 | 0) < 0) << 31 >> 31;
     i1 = i9;
     i14 = 448;
     break;
    }
   case 441:
    {
     i14 = 448;
     break;
    }
   default:
    {
     i14 = 655;
     break L7;
    }
   } while (0);
   L334 : switch (i14 | 0) {
   case 9:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 11:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 13:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 15:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 17:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 19:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 21:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 23:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 25:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 27:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 29:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 31:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 33:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 35:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 37:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 39:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 41:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 43:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 45:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 47:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 49:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 51:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 53:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 55:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 57:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 59:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 61:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 63:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 65:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 67:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 69:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 71:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 73:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 75:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 77:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 79:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 81:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 83:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 85:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 87:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 94:
    {
     i2 = HEAP32[i42 >> 2] | 0;
     i5 = HEAP32[i2 + 48 >> 2] | 0;
     i1 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 44 >> 2] | 0;
     if (!i5) {
      i14 = 95;
      break L7;
     }
     if (!i1) i4 = (HEAP32[i2 + 28 >> 2] | 0) == 0 ? 0 : 4; else i4 = HEAP32[i1 + 68 >> 2] | 0;
     i7 = HEAP32[i2 + 16 >> 2] | 0;
     HEAP32[i29 >> 2] = i2;
     HEAP32[i27 >> 2] = i5;
     HEAP32[i42 >> 2] = i5;
     i10 = HEAP32[i5 + 24 >> 2] | 0;
     i1 = (HEAP32[i5 + 16 >> 2] | 0) + (HEAP32[i5 + 20 >> 2] | 0) | 0;
     i6 = HEAP32[i5 + 8 >> 2] | 0;
     i3 = HEAP32[i6 >> 2] | 0;
     i8 = HEAP32[i6 + 4 >> 2] | 0;
     i5 = HEAP32[i5 + 12 >> 2] | 0;
     i9 = i3 + (i5 << 2) | 0;
     if (i4) {
      _memmove(i1 | 0, i7 | 0, i4 | 0) | 0;
      i1 = i1 + i4 | 0;
     }
     _MethodState_Delete(i20, i29);
     i2 = HEAP32[i42 >> 2] | 0;
     if (!(HEAP32[i2 + 36 >> 2] | 0)) {
      _CheckIfCurrentInstructionHasBreakpoint(i2, i5 << 2 >> 2, i8);
      i14 = i17;
      i44 = i18;
      i4 = i9 + 4 | 0;
      i15 = i10;
      i13 = i8;
      i2 = i9;
      i16 = i10;
      i17 = i14;
      i18 = i44;
      continue L7;
     } else {
      i6 = i3;
      i4 = i9;
      i14 = 104;
     }
     break;
    }
   case 125:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i3 >> 2, i7);
     i14 = i17;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i15 = i5;
     i13 = i7;
     i16 = i8;
     i17 = i14;
     i18 = i44;
     continue L7;
    }
   case 130:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i8 = i4;
     i9 = i13;
     i10 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i11;
     i16 = i7;
     i2 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 135:
    {
     i4 = HEAP32[i4 >> 2] | 0;
     i5 = i2;
     i6 = i11;
     i2 = i4;
     i4 = i4 + 40 | 0;
     i14 = 139;
     break;
    }
   case 138:
    {
     i4 = i4 + 4 | 0;
     HEAP32[i5 >> 2] = i7;
     if (!i7) {
      i5 = i6;
      i6 = i4;
      i4 = i8;
      i14 = 139;
     } else {
      i5 = i6;
      i11 = i7;
      i6 = i4;
      i14 = 140;
     }
     break;
    }
   case 156:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i1;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i1 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 161:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 165:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 169:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 173:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 177:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 181:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 185:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 189:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 193:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 197:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 201:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 205:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 209:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 213:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 217:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 221:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 225:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 229:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 233:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 237:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 241:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 245:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 249:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 253:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 257:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 261:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 265:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 269:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 273:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 277:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 281:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 285:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 289:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 293:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 297:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 301:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 305:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 308:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 310:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 312:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 314:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 316:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 318:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 320:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 322:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 324:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 326:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 328:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 330:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 332:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 334:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 336:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 338:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 342:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 346:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 350:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 354:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 358:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 362:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 364:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 366:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 368:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 370:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 372:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 374:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 376:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 378:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 380:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 382:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 384:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 386:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 388:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 390:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 392:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 394:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 396:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 398:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 400:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 402:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 404:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 406:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 408:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 410:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 412:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 414:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 416:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 418:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 420:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 422:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 424:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 426:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 428:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 430:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 432:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 434:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 436:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 438:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 440:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 442:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 444:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i7 = i16;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i11 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i1 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 446:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i7 = i16;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i11 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i1 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 448:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 450:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 452:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 454:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 456:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 458:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 460:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 462:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 464:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 466:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 468:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 470:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 472:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i7 = i16;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i11 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i1 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 474:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i7 = i16;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i11 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i1 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 476:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 478:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 480:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 482:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 484:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 486:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 488:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 490:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 492:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 494:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 496:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 503:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i7;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i7 - i3 >> 2, i9);
     i44 = i17;
     i18 = i2;
     i4 = i7 + 4 | 0;
     i15 = i10;
     i13 = i9;
     i2 = i7;
     i16 = i5;
     i17 = i44;
     continue L7;
    }
   case 507:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i7;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i7 - i3 >> 2, i9);
     i44 = i17;
     i18 = i2;
     i4 = i7 + 4 | 0;
     i15 = i10;
     i13 = i9;
     i2 = i7;
     i16 = i5;
     i17 = i44;
     continue L7;
    }
   case 510:
    {
     i14 = 0;
     i2 = HEAP32[i4 >> 2] | 0;
     i4 = HEAP32[i10 >> 2] | 0;
     if (!i4) {
      HEAP32[i10 >> 2] = 0;
      i2 = i11;
      i14 = 523;
      break;
     }
     i5 = _Heap_GetType(i4) | 0;
     i7 = HEAP32[i5 + 96 >> 2] | 0;
     if (!i7) i14 = 516; else {
      i8 = HEAP32[i2 + 96 >> 2] | 0;
      if (!i8) i14 = 516; else if (_Type_IsAssignableFrom(i8, i7) | 0) {
       HEAP32[i10 >> 2] = i4;
       i2 = i11;
       i14 = 523;
       break;
      }
     }
     do if ((i14 | 0) == 516) {
      if (!(_Type_IsAssignableFrom(i2, i5) | 0)) {
       if ((HEAP32[i2 + 88 >> 2] | 0) != (HEAP32[(HEAP32[9026] | 0) + 184 >> 2] | 0)) break;
       if ((HEAP32[HEAP32[i2 + 92 >> 2] >> 2] | 0) != (i5 | 0)) break;
      }
      HEAP32[i10 >> 2] = i4;
      i2 = i11;
      i14 = 523;
      break L334;
     } while (0);
     if ((i9 | 0) == 15) {
      HEAP32[i10 >> 2] = 0;
      i2 = i11;
      i14 = 523;
      break;
     } else {
      _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 48 >> 2] | 0) | 0;
      i5 = i17;
      i1 = i10;
      i2 = i11;
      i14 = 615;
      break;
     }
    }
   case 526:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i3 >> 2, i8);
     i14 = i17;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i15 = i7;
     i13 = i8;
     i16 = i5;
     i17 = i14;
     i18 = i44;
     continue L7;
    }
   case 528:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 530:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 532:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 534:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 536:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 538:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 540:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i5 = i16;
     i2 = i4;
     i7 = i13;
     i8 = i15;
     i9 = i6;
     i10 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i5;
     i13 = i7;
     i15 = i8;
     i6 = i9;
     i1 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 542:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 544:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 546:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 548:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 550:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 552:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 554:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 556:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 558:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 560:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i1;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i1 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 562:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 564:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 566:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i7 = i16;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i11 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i1 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 568:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 570:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 572:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 576:
    {
     i7 = HEAP32[i4 >> 2] | 0;
     i2 = HEAP32[i7 + 24 >> 2] | 0;
     i5 = i2 + 56 | 0;
     if (!(HEAP8[i5 >> 0] | 0)) {
      HEAP8[i5 >> 0] = 1;
      i2 = HEAP32[i2 + 60 >> 2] | 0;
      if (i2 | 0) {
       i5 = _MethodState_Direct(i20, i2, HEAP32[i42 >> 2] | 0, 0) | 0;
       i6 = HEAP32[i42 >> 2] | 0;
       HEAP32[i6 + 20 >> 2] = i1 - (HEAP32[i6 + 16 >> 2] | 0);
       HEAP32[i6 + 12 >> 2] = i4 + -4 - i12 >> 2;
       HEAP32[i27 >> 2] = i5;
       HEAP32[i42 >> 2] = i5;
       i1 = (HEAP32[i5 + 16 >> 2] | 0) + (HEAP32[i5 + 20 >> 2] | 0) | 0;
       i6 = HEAP32[i5 + 8 >> 2] | 0;
       i3 = HEAP32[i6 >> 2] | 0;
       i7 = HEAP32[i6 + 4 >> 2] | 0;
       i4 = HEAP32[i5 + 12 >> 2] | 0;
       i8 = i3 + (i4 << 2) | 0;
       i2 = i18 + -1 | 0;
       if (!i2) {
        i4 = i8;
        i14 = 652;
        break L7;
       }
       i16 = HEAP32[i5 + 24 >> 2] | 0;
       _CheckIfCurrentInstructionHasBreakpoint(i5, i4 << 2 >> 2, i7);
       i44 = i17;
       i18 = i2;
       i4 = i8 + 4 | 0;
       i15 = i16;
       i13 = i7;
       i2 = i8;
       i17 = i44;
       continue L7;
      }
     }
     i2 = HEAP32[i7 + 40 >> 2] | 0;
     switch (i8 & 127) {
     case 83:
      {
       i44 = i2;
       i14 = HEAP32[i44 + 4 >> 2] | 0;
       i2 = i1;
       HEAP32[i2 >> 2] = HEAP32[i44 >> 2];
       HEAP32[i2 + 4 >> 2] = i14;
       i1 = i1 + 8 | 0;
       i2 = i11;
       i14 = 586;
       break L334;
      }
     case 87:
      {
       i14 = i7 + 32 | 0;
       _memcpy(i1 | 0, i2 | 0, HEAP32[i14 >> 2] | 0) | 0;
       i1 = i1 + (HEAP32[i14 >> 2] | 0) | 0;
       i2 = i11;
       i14 = 586;
       break L334;
      }
     case 45:
      break;
     default:
      i2 = HEAP32[i2 >> 2] | 0;
     }
     HEAP32[i1 >> 2] = i2;
     i1 = i9;
     i2 = i11;
     i14 = 586;
     break;
    }
   case 588:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 590:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 592:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i1;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i1 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 594:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 596:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i17 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 598:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i7 = i16;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i11 = i1;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i1 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 602:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 604:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5, i13);
     i7 = i16;
     i2 = i4;
     i8 = i13;
     i9 = i15;
     i10 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i11;
     i16 = i7;
     i13 = i8;
     i15 = i9;
     i6 = i10;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 608:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 610:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 612:
    {
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
     i8 = i16;
     i9 = i13;
     i10 = i15;
     i11 = i6;
     i12 = i17;
     i14 = i3;
     i44 = i18;
     i4 = i2 + 4 | 0;
     i16 = i8;
     i13 = i9;
     i15 = i10;
     i6 = i11;
     i17 = i12;
     i3 = i14;
     i18 = i44;
     continue L7;
    }
   case 646:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   case 650:
    {
     i2 = i18 + -1 | 0;
     if (!i2) {
      i4 = i5;
      i14 = 652;
      break L7;
     }
     _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i5 - i12 >> 2, i13);
     i9 = i16;
     i10 = i13;
     i11 = i15;
     i12 = i6;
     i14 = i17;
     i44 = i3;
     i18 = i2;
     i4 = i5 + 4 | 0;
     i2 = i5;
     i16 = i9;
     i13 = i10;
     i15 = i11;
     i6 = i12;
     i17 = i14;
     i3 = i44;
     continue L7;
    }
   }
   do if ((i14 | 0) == 104) {
    i3 = HEAP32[i42 >> 2] | 0;
    i2 = HEAP32[i3 + 36 >> 2] | 0;
    if (!i2) {
     i2 = (HEAP32[i4 >> 2] | 0) + 40 | 0;
     i44 = HEAP32[i2 >> 2] | 0;
     i1 = i1 + (0 - i44) | 0;
     i44 = _malloc(i44 + -4 | 0) | 0;
     HEAP32[i3 + 40 >> 2] = i44;
     _memcpy(i44 | 0, i1 + 4 | 0, (HEAP32[i2 >> 2] | 0) + -4 | 0) | 0;
     i2 = i1;
     i4 = i4 + 4 | 0;
    } else {
     i2 = HEAP32[(_Delegate_GetMethod(i2) | 0) + 44 >> 2] | 0;
     if (i2) i1 = i1 + (0 - (HEAP32[i2 + 68 >> 2] | 0)) | 0;
     i3 = HEAP32[i42 >> 2] | 0;
     i2 = i3 + 36 | 0;
    }
    i2 = HEAP32[i2 >> 2] | 0;
    if (!i2) {
     i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 84 >> 2] | 0) | 0;
     i3 = i6;
     i2 = i4;
     i14 = 615;
     break;
    }
    i3 = _Delegate_GetMethodAndStore(i2, i34, i3 + 36 | 0) | 0;
    i7 = _MethodState_Direct(i20, i3, HEAP32[i42 >> 2] | 0, 0) | 0;
    i2 = HEAP32[i34 >> 2] | 0;
    i5 = i7 + 24 | 0;
    if (!i2) i2 = 0; else {
     HEAP32[HEAP32[i5 >> 2] >> 2] = i2;
     i2 = 4;
    }
    _memcpy((HEAP32[i5 >> 2] | 0) + i2 | 0, HEAP32[(HEAP32[i42 >> 2] | 0) + 40 >> 2] | 0, (HEAP32[i3 + 40 >> 2] | 0) - i2 | 0) | 0;
    i14 = HEAP32[i42 >> 2] | 0;
    HEAP32[i14 + 20 >> 2] = i1 - (HEAP32[i14 + 16 >> 2] | 0);
    HEAP32[i14 + 12 >> 2] = i4 - i6 >> 2;
    HEAP32[i27 >> 2] = i7;
    HEAP32[i42 >> 2] = i7;
    i14 = HEAP32[i5 >> 2] | 0;
    i8 = HEAP32[i7 + 8 >> 2] | 0;
    i2 = HEAP32[i8 >> 2] | 0;
    i6 = i8;
    i5 = i14;
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    i3 = i2;
    i2 = i2 + (HEAP32[i7 + 12 >> 2] << 2) | 0;
    i1 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 20 >> 2] | 0) | 0;
    i7 = i14;
    i14 = 114;
   } else if ((i14 | 0) == 139) {
    i11 = HEAP32[i1 + (0 - (HEAP32[i4 >> 2] | 0)) >> 2] | 0;
    i14 = 140;
   } else if ((i14 | 0) == 523) {
    _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
    i7 = i16;
    i8 = i13;
    i9 = i15;
    i10 = i6;
    i11 = i1;
    i12 = i17;
    i14 = i3;
    i44 = i18;
    i4 = i2 + 4 | 0;
    i16 = i7;
    i13 = i8;
    i15 = i9;
    i6 = i10;
    i1 = i11;
    i17 = i12;
    i3 = i14;
    i18 = i44;
    continue L7;
   } else if ((i14 | 0) == 586) {
    _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i12 >> 2, i13);
    i8 = i16;
    i9 = i13;
    i10 = i15;
    i11 = i6;
    i12 = i17;
    i14 = i3;
    i44 = i18;
    i4 = i2 + 4 | 0;
    i16 = i8;
    i13 = i9;
    i15 = i10;
    i6 = i11;
    i17 = i12;
    i3 = i14;
    i18 = i44;
    continue L7;
   } while (0);
   if ((i14 | 0) == 114) {
    _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i2 - i3 >> 2, i8);
    i14 = i17;
    i44 = i18;
    i4 = i2 + 4 | 0;
    i15 = i5;
    i13 = i8;
    i16 = i7;
    i17 = i14;
    i18 = i44;
    continue;
   }
   L648 : do if ((i14 | 0) == 140) {
    i9 = i2 + 56 | 0;
    L650 : do switch (i5 | 0) {
    case 5:
    case 11:
    case 23:
     {
      if (!i11) {
       i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 84 >> 2] | 0) | 0;
       i2 = i6;
       i14 = 615;
       break L648;
      }
      i3 = _Heap_GetType(i11) | 0;
      if (HEAP16[i2 + 14 >> 1] & 64) i2 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] | 0;
      break;
     }
    case 33:
     {
      i3 = HEAP32[i2 + 48 >> 2] | 0;
      i8 = _Heap_GetType(i11) | 0;
      i4 = i8 + 76 | 0;
      i5 = HEAP32[i8 + 72 >> 2] | 0;
      do {
       i44 = i5;
       i5 = i5 + -1 | 0;
       if ((i44 | 0) <= 0) {
        i14 = 151;
        break L7;
       }
       i7 = HEAP32[i4 >> 2] | 0;
      } while ((HEAP32[i7 + (i5 * 12 | 0) >> 2] | 0) != (i3 | 0));
      i3 = HEAP32[i7 + (i5 * 12 | 0) + 4 >> 2] | 0;
      i2 = HEAP32[i9 >> 2] | 0;
      if (!i3) {
       i2 = HEAP32[(HEAP32[i7 + (i5 * 12 | 0) + 8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
       break L650;
      } else {
       i2 = HEAP32[(HEAP32[i8 + 44 >> 2] | 0) + (HEAP32[i3 + (i2 << 2) >> 2] << 2) >> 2] | 0;
       break L650;
      }
     }
    default:
     {}
    } while (0);
    i14 = _MethodState_Direct(i20, i2, HEAP32[i42 >> 2] | 0, 0) | 0;
    HEAP32[i28 >> 2] = i1;
    i9 = i14 + 24 | 0;
    _CreateParameters(HEAP32[i9 >> 2] | 0, i2, i28, 0);
    i8 = HEAP32[i42 >> 2] | 0;
    HEAP32[i8 + 20 >> 2] = (HEAP32[i28 >> 2] | 0) - (HEAP32[i8 + 16 >> 2] | 0);
    HEAP32[i8 + 12 >> 2] = i6 - i12 >> 2;
    HEAP32[i27 >> 2] = i14;
    HEAP32[i42 >> 2] = i14;
    i9 = HEAP32[i9 >> 2] | 0;
    i8 = HEAP32[i14 + 8 >> 2] | 0;
    i3 = HEAP32[i8 >> 2] | 0;
    i10 = i3 + (HEAP32[i14 + 12 >> 2] << 2) | 0;
    i6 = i8;
    i7 = i9;
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    i5 = i11;
    i1 = (HEAP32[i14 + 16 >> 2] | 0) + (HEAP32[i14 + 20 >> 2] | 0) | 0;
    i14 = 153;
   } while (0);
   if ((i14 | 0) == 153) {
    i2 = i18 + -1 | 0;
    if (!i2) {
     i4 = i10;
     i14 = 652;
     break;
    }
    _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i10 - i3 >> 2, i8);
    i18 = i2;
    i4 = i10 + 4 | 0;
    i17 = i5;
    i15 = i7;
    i13 = i8;
    i2 = i10;
    i16 = i9;
    continue;
   } else if ((i14 | 0) == 615) {
    HEAP32[i31 >> 2] = i5;
    i14 = 616;
   }
   if ((i14 | 0) == 616) {
    i11 = HEAP32[i42 >> 2] | 0;
    HEAP32[i11 + 20 >> 2] = i1 - (HEAP32[i11 + 16 >> 2] | 0);
    HEAP32[i11 + 12 >> 2] = i2 - i3 >> 2;
    i11 = _Heap_GetType(i5) | 0;
    i12 = i11 + 16 | 0;
    i13 = i11 + 12 | 0;
    i1 = HEAP32[i42 >> 2] | 0;
    L671 : while (1) {
     i9 = i1 + 4 | 0;
     i10 = i1 + 12 | 0;
     i8 = 0;
     while (1) {
      i4 = HEAP32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] | 0;
      if (i8 >>> 0 >= (HEAP32[i4 + 16 >> 2] | 0) >>> 0) break;
      i4 = HEAP32[i4 + 20 >> 2] | 0;
      i6 = i4 + (i8 * 24 | 0) | 0;
      if (!(HEAP32[i6 >> 2] | 0)) {
       i7 = (HEAP32[i10 >> 2] | 0) + -1 | 0;
       if (i7 >>> 0 >= (HEAP32[i4 + (i8 * 24 | 0) + 4 >> 2] | 0) >>> 0) if (i7 >>> 0 < (HEAP32[i4 + (i8 * 24 | 0) + 8 >> 2] | 0) >>> 0) if (_Type_IsDerivedFromOrSame(HEAP32[i4 + (i8 * 24 | 0) + 20 >> 2] | 0, i11) | 0) break L671;
      }
      i8 = i8 + 1 | 0;
     }
     i1 = HEAP32[i1 + 48 >> 2] | 0;
     if (!i1) {
      i14 = 625;
      break L7;
     }
    }
    HEAP32[i30 >> 2] = i1;
    HEAP32[i32 >> 2] = i6;
    i4 = i2;
    i2 = HEAP32[i42 >> 2] | 0;
    i14 = 627;
   }
   while (1) if ((i14 | 0) == 627) if ((i2 | 0) == (i1 | 0)) {
    HEAP32[i1 + 12 >> 2] = HEAP32[(HEAP32[i32 >> 2] | 0) + 12 >> 2];
    HEAP32[i27 >> 2] = i2;
    HEAP32[i42 >> 2] = i2;
    i8 = HEAP32[i2 + 24 >> 2] | 0;
    i1 = HEAP32[i2 + 16 >> 2] | 0;
    i6 = HEAP32[i2 + 8 >> 2] | 0;
    i11 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i6 + 4 >> 2] | 0;
    i7 = i11 + (HEAP32[i2 + 12 >> 2] << 2) | 0;
    HEAP32[i1 >> 2] = HEAP32[i31 >> 2];
    i1 = i1 + 4 | 0;
    i9 = i8;
    i14 = 637;
    continue;
   } else {
    i1 = HEAP32[i33 >> 2] | 0;
    i14 = 629;
    continue;
   } else if ((i14 | 0) == 629) {
    i10 = HEAP32[i42 >> 2] | 0;
    i7 = HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 28 >> 2] | 0;
    i6 = HEAP32[i7 + 16 >> 2] | 0;
    i7 = i7 + 20 | 0;
    i11 = i10 + 12 | 0;
    while (1) {
     if (i1 >>> 0 >= i6 >>> 0) {
      i14 = 635;
      break;
     }
     i8 = HEAP32[i7 >> 2] | 0;
     i9 = i1 + 1 | 0;
     if ((HEAP32[i8 + (i1 * 24 | 0) >> 2] | 0) != 2) {
      i1 = i9;
      continue;
     }
     i2 = (HEAP32[i11 >> 2] | 0) + -1 | 0;
     if (i2 >>> 0 < (HEAP32[i8 + (i1 * 24 | 0) + 4 >> 2] | 0) >>> 0) {
      i1 = i9;
      continue;
     }
     if (i2 >>> 0 < (HEAP32[i8 + (i1 * 24 | 0) + 8 >> 2] | 0) >>> 0) {
      i14 = 634;
      break;
     } else i1 = i9;
    }
    if ((i14 | 0) == 634) {
     i17 = HEAP32[i10 + 16 >> 2] | 0;
     HEAP32[i10 + 20 >> 2] = 0;
     HEAP32[i27 >> 2] = i10;
     i44 = HEAP32[i10 + 24 >> 2] | 0;
     i6 = HEAP32[i10 + 8 >> 2] | 0;
     i7 = HEAP32[i6 >> 2] | 0;
     i10 = HEAP32[i6 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i8 + (i1 * 24 | 0) + 12 >> 2];
     HEAP32[i33 >> 2] = i9;
     i11 = i7;
     i1 = i17;
     i9 = i44;
     i7 = i7 + (i4 - i3 >> 2 << 2) | 0;
     i8 = i44;
     i14 = 637;
     continue;
    } else if ((i14 | 0) == 635) {
     i2 = HEAP32[i10 + 48 >> 2] | 0;
     _MethodState_Delete(i20, i42);
     HEAP32[i42 >> 2] = i2;
     HEAP32[i33 >> 2] = 0;
     i1 = HEAP32[i30 >> 2] | 0;
     i14 = 627;
     continue;
    }
   } else if ((i14 | 0) == 637) {
    i2 = i18 + -1 | 0;
    if (!i2) {
     i4 = i7;
     i3 = i11;
     i14 = 652;
     break L7;
    } else break;
   }
   _CheckIfCurrentInstructionHasBreakpoint(HEAP32[i42 >> 2] | 0, i7 - i11 >> 2, i10);
   i18 = i2;
   i4 = i7 + 4 | 0;
   i3 = i11;
   i17 = i5;
   i15 = i9;
   i13 = i10;
   i2 = i7;
   i16 = i8;
  }
  if ((i14 | 0) == 6) _Crash(15078, i39); else if ((i14 | 0) == 92) {
   i44 = HEAP32[i42 >> 2] | 0;
   HEAP32[i44 + 20 >> 2] = i1 - (HEAP32[i44 + 16 >> 2] | 0);
   HEAP32[i44 + 12 >> 2] = 3;
   if ((i2 | 0) == 1) {
    i19 = 4;
    break;
   }
   HEAP32[i20 + 44 >> 2] = i2;
   i19 = 3;
   break;
  } else if ((i14 | 0) == 95) {
   if ((i1 | 0) != (HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0)) {
    i19 = 1;
    break;
   }
   HEAP32[i20 + 24 >> 2] = HEAP32[i10 >> 2];
   i19 = 1;
   break;
  } else if ((i14 | 0) == 151) {
   i41 = HEAP32[i8 + 16 >> 2] | 0;
   i42 = HEAP32[i8 + 12 >> 2] | 0;
   i44 = _Sys_GetMethodDesc(i2) | 0;
   HEAP32[i40 >> 2] = i41;
   HEAP32[i40 + 4 >> 2] = i42;
   HEAP32[i40 + 8 >> 2] = i44;
   _Crash(15098, i40);
  } else if ((i14 | 0) == 625) {
   i39 = HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] | 0;
   i40 = HEAP32[i39 + 16 >> 2] | 0;
   i42 = HEAP32[i12 >> 2] | 0;
   i44 = HEAP32[i13 >> 2] | 0;
   HEAP32[i41 >> 2] = HEAP32[(HEAP32[i39 + 48 >> 2] | 0) + 12 >> 2];
   HEAP32[i41 + 4 >> 2] = i40;
   HEAP32[i41 + 8 >> 2] = i42;
   HEAP32[i41 + 12 >> 2] = i44;
   _Crash(15136, i41);
  } else if ((i14 | 0) == 652) {
   i19 = HEAP32[i42 >> 2] | 0;
   HEAP32[i19 + 20 >> 2] = i1 - (HEAP32[i19 + 16 >> 2] | 0);
   HEAP32[i19 + 12 >> 2] = i4 - i3 >> 2;
   i19 = 2;
   break;
  }
 } while (0);
 STACKTOP = i43;
 return i19 | 0;
}

function _JITit(i5, i27, i57, i31, i60, i58, i61) {
 i5 = i5 | 0;
 i27 = i27 | 0;
 i57 = i57 | 0;
 i31 = i31 | 0;
 i60 = i60 | 0;
 i58 = i58 | 0;
 i61 = i61 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i28 = 0, i29 = 0, i30 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i59 = 0, i62 = 0, i63 = 0;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(160);
 i45 = i63 + 96 | 0;
 i44 = i63 + 88 | 0;
 i42 = i63 + 80 | 0;
 i41 = i63 + 72 | 0;
 i40 = i63 + 64 | 0;
 i39 = i63 + 56 | 0;
 i38 = i63 + 48 | 0;
 i37 = i63 + 40 | 0;
 i36 = i63 + 32 | 0;
 i46 = i63 + 24 | 0;
 i43 = i63 + 16 | 0;
 i35 = i63 + 8 | 0;
 i34 = i63;
 i33 = i63 + 152 | 0;
 i62 = i63 + 136 | 0;
 i51 = i63 + 120 | 0;
 i55 = i63 + 104 | 0;
 i59 = i63 + 100 | 0;
 i56 = i60 + 8 | 0;
 i4 = HEAP32[i56 >> 2] | 0;
 i28 = i5 + 4 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 i1 = HEAP32[i29 >> 2] | 0;
 i30 = i5 + 48 | 0;
 L1 : do if (!i1) i54 = 0; else {
  i3 = i5 + 16 | 0;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) {
    i54 = 0;
    break L1;
   }
   if (!(_strcmp(HEAP32[i1 + 12 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0)) {
    i2 = HEAP32[i30 >> 2] | 0;
    if (!i2) {
     i54 = i1;
     break L1;
    }
    if (!(_strcmp(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 + 12 >> 2] | 0) | 0)) if (!(_strcmp(HEAP32[i1 + 4 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0)) {
     i54 = i1;
     break L1;
    }
   }
   i1 = i1 + 424 | 0;
  }
 } while (0);
 i52 = _malloc(i57 << 2) | 0;
 i53 = _calloc(i57 + 1 | 0, 4) | 0;
 i48 = i55 + 8 | 0;
 HEAP32[i48 >> 2] = 0;
 i23 = i55 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i55 >> 2] = _malloc(i4 << 2) | 0;
 i24 = i60 + 16 | 0;
 i2 = HEAP32[i24 >> 2] | 0;
 i32 = i60 + 20 | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  i3 = HEAP32[i32 >> 2] | 0;
  if (!(HEAP32[i3 + (i1 * 24 | 0) >> 2] | 0)) {
   i49 = _malloc(12) | 0;
   HEAP32[i53 + (HEAP32[i3 + (i1 * 24 | 0) + 12 >> 2] << 2) >> 2] = i49;
   HEAP32[i49 + 8 >> 2] = 4;
   HEAP32[i49 + 4 >> 2] = 1;
   i50 = _malloc(4) | 0;
   HEAP32[i49 >> 2] = i50;
   HEAP32[i50 >> 2] = HEAP32[i3 + (i1 * 24 | 0) + 20 >> 2];
  }
  i1 = i1 + 1 | 0;
 }
 HEAP32[i62 + 8 >> 2] = 32;
 i25 = i62 + 12 | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i62 >> 2] = _malloc(128) | 0;
 i49 = i62 + 4 | 0;
 HEAP32[i49 >> 2] = _malloc(128) | 0;
 HEAP32[i51 + 8 >> 2] = 16;
 i19 = i51 + 12 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i51 >> 2] = _malloc(64) | 0;
 i26 = i51 + 4 | 0;
 HEAP32[i26 >> 2] = _malloc(64) | 0;
 HEAP32[i33 >> 2] = 0;
 i50 = (i54 | 0) != 0;
 i20 = i54 + 20 | 0;
 i21 = i5 + 40 | 0;
 i22 = i5 + 60 | 0;
 i18 = i5 + 36 | 0;
 i15 = 0;
 i7 = 0;
 i6 = -1;
 i2 = 0;
 i4 = 0;
 i5 = 0;
 i3 = 0;
 i1 = 0;
 L19 : while (1) {
  HEAP32[i52 + (i3 << 2) >> 2] = i1;
  i8 = i3 + 1 | 0;
  HEAP32[i33 >> 2] = i8;
  i12 = HEAP8[i27 + i3 >> 0] | 0;
  if (i50) if ((i7 | 0) < (HEAP32[i20 >> 2] | 0)) {
   i16 = (HEAP32[i54 + 24 + (i7 << 2) >> 2] | 0) == (i3 | 0);
   i17 = (i16 & 1) + i7 | 0;
   i16 = i16 ? i7 : -1;
  } else {
   i17 = i7;
   i16 = i6;
  } else {
   i17 = i7;
   i16 = i6;
  }
  i13 = i12 & 255;
  L25 : do switch (i12 << 24 >> 24) {
  case 1:
   {
    i47 = 20;
    break L19;
   }
  case 0:
   {
    _PushU32_(i62, _Translate(0) | 0, i16);
    i1 = i15;
    break;
   }
  case 20:
   {
    _PushU32_(i62, _Translate(16) | 0, i16);
    _PushStackType_(i55, HEAP32[HEAP32[9026] >> 2] | 0);
    i1 = i15;
    break;
   }
  case 37:
   {
    i1 = HEAP32[i55 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
    _PushStackType_(i55, i3);
    _PushStackType_(i55, i3);
    i1 = i3 + 68 | 0;
    switch (HEAP32[i1 >> 2] | 0) {
    case 4:
     {
      _PushU32_(i62, _Translate(43) | 0, i16);
      i1 = i3;
      break L25;
     }
    case 8:
     {
      _PushU32_(i62, _Translate(44) | 0, i16);
      i1 = i3;
      break L25;
     }
    default:
     {
      _PushU32_(i62, _Translate(20) | 0, i16);
      _PushU32_(i62, HEAP32[i1 >> 2] | 0, -1);
      i1 = i3;
      break L25;
     }
    }
   }
  case 38:
   {
    i1 = HEAP32[i55 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
    i1 = i3 + 68 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 4) {
     _PushU32_(i62, _Translate(46) | 0, i16);
     i1 = i3;
     break L25;
    } else {
     _PushU32_(i62, _Translate(21) | 0, i16);
     _PushU32_(i62, HEAP32[i1 >> 2] | 0, -1);
     i1 = i3;
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
    i1 = (i12 << 24 >> 24) + -22 | 0;
    i47 = 32;
    break;
   }
  case 31:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i1 = HEAP8[i27 + i8 >> 0] | 0;
    i47 = 32;
    break;
   }
  case 32:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    i47 = 32;
    break;
   }
  case 33:
   {
    _PushU32_(i62, _Translate(41) | 0, i16);
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    _PushU32_(i62, i1, -1);
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    _PushU32_(i62, i1, -1);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 96 >> 2] | 0);
    i1 = i15;
    break;
   }
  case 34:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 88 >> 2] | 0);
    _PushU32_(i62, _Translate(47) | 0, i16);
    _PushU32_(i62, i1, -1);
    i1 = i15;
    break;
   }
  case 35:
   {
    i14 = _GetUnalignedU32(i27, i33) | 0;
    i1 = _GetUnalignedU32(i27, i33) | 0;
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 92 >> 2] | 0);
    _PushU32_(i62, _Translate(175) | 0, i16);
    _PushU32_(i62, i14, -1);
    _PushU32_(i62, i1, -1);
    i1 = i15;
    break;
   }
  case 5:
  case 4:
  case 3:
  case 2:
   {
    i1 = i13 + -2 | 0;
    i47 = 41;
    break;
   }
  case 14:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i1 = HEAPU8[i27 + i8 >> 0] | 0;
    i47 = 41;
    break;
   }
  case 15:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    HEAP32[i59 >> 2] = HEAPU8[i27 + i8 >> 0];
    _PushU32_(i62, _Translate(9) | 0, i16);
    _PushU32_(i62, HEAP32[(HEAP32[i18 >> 2] | 0) + ((HEAP32[i59 >> 2] | 0) * 12 | 0) + 4 >> 2] | 0, -1);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0);
    i1 = i15;
    break;
   }
  case 16:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i1 = HEAPU8[i27 + i8 >> 0] | 0;
    HEAP32[i59 >> 2] = i1;
    i15 = HEAP32[i55 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i15 + (i3 << 2) >> 2] | 0;
    i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + (i1 * 12 | 0) + 4 >> 2] | 0;
    if (i1 >>> 0 < 32 ? (HEAP32[i3 + 68 >> 2] | 0) == 4 : 0) {
     _PushU32_(i62, _Translate((i1 >>> 2) + 303 | 0) | 0, i16);
     i1 = i3;
     break L25;
    }
    i15 = i3 + 35 | 0;
    _PushU32_(i62, _Translate((HEAPU8[i15 >> 0] | 0) + 56 | 0) | 0, i16);
    _PushU32_(i62, i1, -1);
    if ((HEAP8[i15 >> 0] | 0) == 7) {
     _PushU32_(i62, i3, -1);
     i1 = i3;
    } else i1 = i3;
    break;
   }
  case 9:
  case 8:
  case 7:
  case 6:
   {
    i1 = i13 + -6 | 0;
    HEAP32[i59 >> 2] = i1;
    i47 = 53;
    break;
   }
  case 17:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i1 = HEAPU8[i27 + i8 >> 0] | 0;
    HEAP32[i59 >> 2] = i1;
    i47 = 53;
    break;
   }
  case 13:
  case 12:
  case 11:
  case 10:
   {
    i1 = i13 + -10 | 0;
    HEAP32[i59 >> 2] = i1;
    i47 = 60;
    break;
   }
  case 19:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i1 = HEAPU8[i27 + i8 >> 0] | 0;
    HEAP32[i59 >> 2] = i1;
    i47 = 60;
    break;
   }
  case 18:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    HEAP32[i59 >> 2] = HEAPU8[i27 + i8 >> 0];
    _PushU32_(i62, _Translate(9) | 0, i16);
    _PushU32_(i62, (HEAP32[i31 + ((HEAP32[i59 >> 2] | 0) * 12 | 0) + 4 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0, -1);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0);
    i1 = i15;
    break;
   }
  case 70:
   {
    HEAP32[i59 >> 2] = 5;
    i47 = 76;
    break;
   }
  case 71:
   {
    HEAP32[i59 >> 2] = 4;
    i47 = 76;
    break;
   }
  case 72:
   {
    HEAP32[i59 >> 2] = 7;
    i47 = 76;
    break;
   }
  case 73:
   {
    HEAP32[i59 >> 2] = 14;
    i47 = 76;
    break;
   }
  case 74:
   {
    HEAP32[i59 >> 2] = 8;
    i47 = 76;
    break;
   }
  case 75:
   {
    HEAP32[i59 >> 2] = 13;
    i47 = 76;
    break;
   }
  case 76:
   {
    HEAP32[i59 >> 2] = 24;
    i47 = 76;
    break;
   }
  case 78:
   {
    HEAP32[i59 >> 2] = 22;
    i47 = 76;
    break;
   }
  case 79:
   {
    HEAP32[i59 >> 2] = 23;
    i47 = 76;
    break;
   }
  case 80:
   {
    HEAP32[i59 >> 2] = 0;
    i47 = 76;
    break;
   }
  case 77:
   {
    HEAP32[i59 >> 2] = 10;
    i47 = 76;
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
    _PushU32_(i62, _Translate(i13 + 109 | 0) | 0, i16);
    i1 = i15;
    break;
   }
  case 42:
   {
    _PushU32_(i62, _Translate(1) | 0, i16);
    _RestoreTypeStack(i55, HEAP32[i53 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i1 = i15;
    break;
   }
  case 111:
  case 40:
   {
    i3 = 0;
    i14 = i12;
    i47 = 79;
    break;
   }
  case 43:
   {
    i3 = i3 + 2 | 0;
    HEAP32[i33 >> 2] = i3;
    i1 = HEAP8[i27 + i8 >> 0] | 0;
    i47 = 127;
    break;
   }
  case 56:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    i3 = HEAP32[i33 >> 2] | 0;
    i47 = 127;
    break;
   }
  case 69:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i6 = _GetUnalignedU32(i27, i33) | 0;
    i7 = (HEAP32[i33 >> 2] | 0) + (i6 << 2) | 0;
    _PushU32_(i62, _Translate(31) | 0, i16);
    _PushU32_(i62, i6, -1);
    i3 = 0;
    while (1) {
     if ((i3 | 0) == (i6 | 0)) {
      i1 = i15;
      break L25;
     }
     HEAP32[i59 >> 2] = i7 + (_GetUnalignedU32(i27, i33) | 0);
     _PushU32_(i51, HEAP32[i25 >> 2] | 0, -1);
     i1 = HEAP32[i59 >> 2] | 0;
     if (i1 >>> 0 > (HEAP32[i33 >> 2] | 0) >>> 0) {
      _DeepCopyTypeStack(i53, i1, i55);
      i1 = HEAP32[i59 >> 2] | 0;
     }
     _PushU32_(i62, i1, -1);
     i3 = i3 + 1 | 0;
    }
   }
  case 45:
  case 44:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i7 = -44;
    i3 = HEAP8[i27 + i8 >> 0] | 0;
    i47 = 137;
    break;
   }
  case 58:
  case 57:
   {
    i7 = -57;
    i3 = _GetUnalignedU32(i27, i33) | 0;
    i47 = 137;
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
    i6 = i3 + 2 | 0;
    HEAP32[i33 >> 2] = i6;
    i7 = 46;
    i1 = HEAP8[i27 + i8 >> 0] | 0;
    i47 = 144;
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
    i1 = _GetUnalignedU32(i27, i33) | 0;
    i7 = 59;
    i6 = HEAP32[i33 >> 2] | 0;
    i47 = 144;
    break;
   }
  case -37:
  case -38:
  case -39:
  case -40:
  case -41:
  case -42:
   {
    i3 = 132;
    i47 = 159;
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
    i3 = 0;
    i47 = 159;
    break;
   }
  case 102:
  case 101:
   {
    i14 = HEAP32[i55 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP8[(HEAP32[i14 + (i1 << 2) >> 2] | 0) + 35 >> 0] | 0;
    switch (i1 << 24 >> 24) {
    case 1:
     {
      _PushU32_(i62, _Translate(i13 + 37 | 0) | 0, i16);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    case 0:
     {
      _PushU32_(i62, _Translate(i13 + 39 | 0) | 0, i16);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 96 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    case 6:
     {
      _PushU32_(i62, _Translate(142) | 0, i16);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 88 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    case 3:
     {
      _PushU32_(i62, _Translate(143) | 0, i16);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 92 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    default:
     {
      i47 = 178;
      break L19;
     }
    }
   }
  case 100:
  case 99:
  case 98:
   {
    i14 = HEAP32[i55 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -2 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP32[i14 + (i1 << 2) >> 2] | 0;
    switch (HEAP8[i1 + 35 >> 0] | 0) {
    case 1:
     {
      _PushU32_(i62, _Translate(i13 + 66 | 0) | 0, i16);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    case 0:
     {
      _PushU32_(i62, _Translate(i13 + 69 | 0) | 0, i16);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 96 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    default:
     {
      i47 = 182;
      break L19;
     }
    }
   }
  case -126:
  case -77:
  case 103:
   {
    i7 = 0;
    i1 = 5;
    i2 = 8;
    i47 = 192;
    break;
   }
  case -125:
  case -75:
  case 104:
   {
    i7 = 0;
    i1 = 7;
    i2 = 16;
    i47 = 192;
    break;
   }
  case -118:
  case -45:
  case -124:
  case -73:
  case 105:
   {
    i7 = 0;
    i1 = 8;
    i2 = 32;
    i47 = 192;
    break;
   }
  case -122:
  case -76:
  case -46:
   {
    i1 = 4;
    i2 = 8;
    i47 = 187;
    break;
   }
  case -121:
  case -74:
  case -47:
   {
    i1 = 14;
    i2 = 16;
    i47 = 187;
    break;
   }
  case -117:
  case -32:
  case -120:
  case -72:
  case 109:
   {
    i1 = 13;
    i2 = 32;
    i47 = 187;
    break;
   }
  case -123:
  case -71:
  case 106:
   {
    i7 = 2;
    i1 = 24;
    i47 = 192;
    break;
   }
  case -119:
  case -70:
  case 110:
   {
    i7 = 3;
    i1 = 25;
    i47 = 192;
    break;
   }
  case 107:
   {
    i7 = 4;
    i1 = 22;
    i47 = 192;
    break;
   }
  case 118:
  case 108:
   {
    i7 = 5;
    i1 = 23;
    i47 = 192;
    break;
   }
  case 113:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    _PushU32_(i62, _Translate(29) | 0, i16);
    _PushU32_(i62, i1, -1);
    _PushStackType_(i55, i1);
    i1 = i15;
    break;
   }
  case -127:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    if (HEAP8[i1 + 34 >> 0] | 0) {
     i1 = i1 + 64 | 0;
     if ((HEAP32[i1 >> 2] | 0) != 4) {
      _PushU32_(i62, _Translate(22) | 0, i16);
      _PushU32_(i62, HEAP32[i1 >> 2] | 0, -1);
      i1 = i15;
      break L25;
     }
    }
    _PushU32_(i62, _Translate(190) | 0, i16);
    i1 = i15;
    break;
   }
  case 114:
   {
    HEAP32[i59 >> 2] = (_GetUnalignedU32(i27, i33) | 0) & 16777215;
    _PushU32_(i62, _Translate(4) | 0, i16);
    _PushU32_(i62, HEAP32[i59 >> 2] | 0, -1);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 36 >> 2] | 0);
    i1 = i15;
    break;
   }
  case 115:
   {
    i3 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i3;
    i3 = _MetaData_GetMethodDefFromDefRefOrSpec(i29, i3, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) {
     i1 = _MetaData_GetTypeDefFromMethodDef(i3) | 0;
     if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    }
    i1 = i3 + 48 | 0;
    if (!(HEAP8[(HEAP32[i1 >> 2] | 0) + 34 >> 0] | 0)) _PushU32_(i62, _Translate(8) | 0, i16); else _PushU32_(i62, _Translate(14) | 0, i16);
    HEAP32[i23 >> 2] = 1 - (HEAPU16[i3 + 34 >> 1] | 0) + (HEAP32[i23 >> 2] | 0);
    _PushU32_(i62, i3, -1);
    _PushStackType_(i55, HEAP32[i1 >> 2] | 0);
    i1 = i15;
    break;
   }
  case 116:
   {
    _PushU32_(i62, _Translate(34) | 0, i16);
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    _PushU32_(i62, _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0, -1);
    i1 = i15;
    break;
   }
  case 117:
   {
    _PushU32_(i62, _Translate(15) | 0, i16);
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    _PushU32_(i62, _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0, -1);
    i1 = i15;
    break;
   }
  case -115:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i62, _Translate(13) | 0, i16);
    if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    i1 = _Type_GetArrayTypeDef(i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    _PushU32_(i62, i1, -1);
    _PushStackType_(i55, i1);
    i1 = i15;
    break;
   }
  case -114:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i62, _Translate(30) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0);
    i1 = i15;
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
    _PushU32_(i62, _Translate(i13 + 80 | 0) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -106:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i62, _Translate(230) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 96 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -104:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i62, _Translate(231) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 88 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -103:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i62, _Translate(232) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 92 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -102:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i62, _Translate(229) | 0, i16);
    _PushStackType_(i55, HEAP32[HEAP32[9026] >> 2] | 0);
    i1 = i15;
    break;
   }
  case -93:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i29, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _PushU32_(i62, _Translate(35) | 0, i16);
    _PushU32_(i62, HEAP32[i1 + 68 >> 2] | 0, -1);
    _PushStackType_(i55, i1);
    break;
   }
  case -113:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -2;
    _GetUnalignedU32(i27, i33) | 0;
    _PushU32_(i62, _Translate(32) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -94:
  case -96:
  case -98:
  case -99:
  case -100:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -3;
    _PushU32_(i62, _Translate(222) | 0, i16);
    i1 = i15;
    break;
   }
  case -95:
  case -97:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -3;
    _PushU32_(i62, _Translate(223) | 0, i16);
    i1 = i15;
    break;
   }
  case -92:
   {
    _GetUnalignedU32(i27, i33) | 0;
    i15 = HEAP32[i23 >> 2] | 0;
    i1 = HEAP32[(HEAP32[i55 >> 2] | 0) + (i15 + -1 << 2) >> 2] | 0;
    HEAP32[i23 >> 2] = i15 + -3;
    _PushU32_(i62, _Translate(24) | 0, i16);
    _PushU32_(i62, HEAP32[i1 + 68 >> 2] | 0, -1);
    break;
   }
  case 125:
   {
    i15 = HEAP32[i55 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP32[i15 + (i1 << 2) >> 2] | 0;
    _PushU32_(i62, _Translate((HEAPU8[i1 + 35 >> 0] | 0) + 72 | 0) | 0, i16);
    i15 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i15;
    _PushU32_(i62, _MetaData_GetFieldDefFromDefOrRef(HEAP32[i28 >> 2] | 0, i15, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0, -1);
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    break;
   }
  case 123:
   {
    i8 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i8;
    i8 = _MetaData_GetFieldDefFromDefOrRef(HEAP32[i28 >> 2] | 0, i8, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    i1 = _MetaData_GetTypeDefFromFieldDef(i8) | 0;
    if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    i3 = HEAP32[i55 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP32[i3 + (i1 << 2) >> 2] | 0;
    i3 = HEAP8[i1 + 35 >> 0] | 0;
    i6 = i8 + 28 | 0;
    i7 = i8;
    L139 : do switch (i3 << 24 >> 24) {
    case 5:
    case 4:
    case 6:
    case 1:
    case 2:
     if ((HEAP32[i8 + 32 >> 2] | 0) >>> 0 < 5) {
      _PushU32_(i62, _Translate(315) | 0, i16);
      _PushU32_(i62, HEAP32[i6 >> 2] | 0, -1);
      break L139;
     } else {
      _PushU32_(i62, _Translate(37) | 0, i16);
      _PushU32_(i62, i7, -1);
      break L139;
     }
    case 3:
    case 0:
     {
      _PushU32_(i62, _Translate(316) | 0, i16);
      _PushU32_(i62, HEAP32[i6 >> 2] | 0, -1);
      break;
     }
    case 7:
     {
      _PushU32_(i62, _Translate(36) | 0, i16);
      _PushU32_(i62, HEAP32[i1 + 68 >> 2] | 0, -1);
      _PushU32_(i62, i7, -1);
      break;
     }
    default:
     {
      i47 = 246;
      break L19;
     }
    } while (0);
    _PushStackType_(i55, HEAP32[i8 + 20 >> 2] | 0);
    break;
   }
  case 124:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    i3 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i62, _Translate(19) | 0, i16);
    _PushU32_(i62, HEAP32[i1 + 28 >> 2] | 0, -1);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -128:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    i3 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    i15 = HEAP32[i1 + 20 >> 2] | 0;
    _PushU32_(i62, _Translate((HEAPU8[i15 + 35 >> 0] | 0) + 96 | 0) | 0, i16);
    _PushU32_(i62, i1, -1);
    i1 = i15;
    break;
   }
  case 126:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    i3 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    i15 = HEAP32[i1 + 20 >> 2] | 0;
    _PushU32_(i62, _Translate((HEAPU8[i15 + 35 >> 0] | 0) + 80 | 0) | 0, i16);
    _PushU32_(i62, i1, -1);
    _PushStackType_(i55, i15);
    i1 = i15;
    break;
   }
  case 127:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetFieldDefFromDefOrRef(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    i3 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
    if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i3, 0, 0);
    _PushU32_(i62, _Translate(45) | 0, i16);
    _PushU32_(i62, i1, -1);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0);
    i1 = i15;
    break;
   }
  case -116:
   {
    i1 = HEAP32[i55 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    if ((HEAP32[i1 + 88 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 184 >> 2] | 0)) {
     _PushU32_(i62, _Translate(174) | 0, i16);
     _PushU32_(i62, HEAP32[HEAP32[i1 + 92 >> 2] >> 2] | 0, -1);
    } else {
     _PushU32_(i62, _Translate((HEAPU8[i3 + 35 >> 0] | 0) + 104 | 0) | 0, i16);
     _PushU32_(i62, i1, -1);
    }
    _PushStackType_(i55, HEAP32[HEAP32[9026] >> 2] | 0);
    i1 = i3;
    break;
   }
  case -91:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    do if ((HEAP32[i1 + 88 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 184 >> 2] | 0)) {
     _PushU32_(i62, _Translate(218) | 0, i16);
     _PushU32_(i62, HEAP32[HEAP32[i1 + 92 >> 2] >> 2] | 0, -1);
    } else if (!(HEAP8[i1 + 34 >> 0] | 0)) {
     _PushU32_(i62, _Translate(18) | 0, i16);
     break;
    } else {
     _PushU32_(i62, _Translate(17) | 0, i16);
     break;
    } while (0);
    _PushStackType_(i55, i1);
    i1 = i15;
    break;
   }
  case -48:
   {
    i1 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i1;
    i1 = _MetaData_GetTypeMethodField(HEAP32[i28 >> 2] | 0, i1, i59, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    _PushU32_(i62, _Translate((HEAP32[i59 >> 2] | 0) + 176 | 0) | 0, i16);
    _PushU32_(i62, i1, -1);
    i1 = HEAP32[i59 >> 2] | 0;
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + (((i1 | 0) == 0 ? 28 : (i1 | 0) == 1 ? 11 : 29) << 2) >> 2] | 0);
    i1 = i15;
    break;
   }
  case 122:
   {
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i62, _Translate(27) | 0, i16);
    _RestoreTypeStack(i55, HEAP32[i53 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i1 = i15;
    break;
   }
  case -34:
   {
    i1 = i3 + 2 | 0;
    HEAP32[i33 >> 2] = i1;
    i3 = HEAP8[i27 + i8 >> 0] | 0;
    i47 = 276;
    break;
   }
  case -35:
   {
    i3 = _GetUnalignedU32(i27, i33) | 0;
    i1 = HEAP32[i33 >> 2] | 0;
    i47 = 276;
    break;
   }
  case -36:
   {
    _PushU32_(i62, _Translate(26) | 0, i16);
    _RestoreTypeStack(i55, HEAP32[i53 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i1 = i15;
    break;
   }
  case -2:
   {
    HEAP32[i33 >> 2] = i3 + 2;
    i14 = HEAP8[i27 + i8 >> 0] | 0;
    i1 = i14 & 255;
    switch (i14 << 24 >> 24) {
    case 20:
    case 19:
    case 30:
     {
      i1 = i15;
      break L25;
     }
    case 21:
     {
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
      i1 = _GetUnalignedU32(i27, i33) | 0;
      HEAP32[i59 >> 2] = i1;
      i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
      if (!(HEAP8[i1 + 34 >> 0] | 0)) {
       _PushU32_(i62, _Translate(42) | 0, i16);
       i1 = i15;
       break L25;
      } else {
       _PushU32_(i62, _Translate(12) | 0, i16);
       _PushU32_(i62, i1, -1);
       i1 = i15;
       break L25;
      }
     }
    case 7:
    case 6:
     {
      i1 = _GetUnalignedU32(i27, i33) | 0;
      HEAP32[i59 >> 2] = i1;
      i1 = _MetaData_GetMethodDefFromDefRefOrSpec(HEAP32[i28 >> 2] | 0, i1, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
      _PushU32_(i62, _Translate(38) | 0, i16);
      _PushU32_(i62, i1, -1);
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
     {
      i7 = HEAP32[i55 >> 2] | 0;
      i6 = HEAP32[i23 >> 2] | 0;
      i3 = HEAP32[i7 + (i6 + -1 << 2) >> 2] | 0;
      i6 = i6 + -2 | 0;
      HEAP32[i23 >> 2] = i6;
      i6 = HEAP32[i7 + (i6 << 2) >> 2] | 0;
      i7 = i3 + 35 | 0;
      i8 = i1 + 111 | 0;
      switch (HEAP8[i6 + 35 >> 0] | 0) {
      case 1:
       {
        if ((HEAP8[i7 >> 0] | 0) != 1) {
         i47 = 298;
         break L19;
        }
        _PushU32_(i62, _Translate(i8) | 0, i16);
        break;
       }
      case 0:
       {
        if (HEAP8[i7 >> 0] | 0) {
         i47 = 298;
         break L19;
        }
        _PushU32_(i62, _Translate(i1 + 116 | 0) | 0, i16);
        break;
       }
      case 6:
       {
        if ((HEAP8[i7 >> 0] | 0) != 6) {
         i47 = 298;
         break L19;
        }
        _PushU32_(i62, _Translate(i1 + 249 | 0) | 0, i16);
        break;
       }
      case 3:
       {
        if ((HEAP8[i7 >> 0] | 0) != 3) {
         i47 = 298;
         break L19;
        }
        _PushU32_(i62, _Translate(i1 + 271 | 0) | 0, i16);
        break;
       }
      case 5:
       {
        if ((HEAP8[i7 >> 0] | 0) != 5) {
         i47 = 298;
         break L19;
        }
        _PushU32_(i62, _Translate(i8) | 0, i16);
        break;
       }
      case 4:
       {
        if ((HEAP8[i7 >> 0] | 0) != 4) {
         i47 = 298;
         break L19;
        }
        _PushU32_(i62, _Translate(i8) | 0, i16);
        break;
       }
      default:
       {
        i47 = 298;
        break L19;
       }
      }
      _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0);
      i1 = i15;
      break L25;
     }
    case 12:
     {
      i1 = _GetUnalignedU16(i27, i33) | 0;
      HEAP32[i59 >> 2] = i1;
      i47 = 53;
      break L25;
     }
    case 14:
     {
      i1 = _GetUnalignedU16(i27, i33) | 0;
      HEAP32[i59 >> 2] = i1;
      i47 = 60;
      break L25;
     }
    case 26:
     {
      _PushU32_(i62, _Translate(28) | 0, i16);
      i1 = i15;
      break L25;
     }
    case 22:
     {
      i3 = _GetUnalignedU32(i27, i33) | 0;
      i14 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i14 + 1;
      i14 = HEAP8[i27 + i14 >> 0] | 0;
      i47 = 79;
      break L25;
     }
    default:
     {
      i47 = 304;
      break L19;
     }
    }
   }
  default:
   {
    i47 = 305;
    break L19;
   }
  } while (0);
  switch (i47 | 0) {
  case 32:
   {
    i47 = 0;
    if ((i1 + 1 | 0) >>> 0 < 4) _PushU32_(i62, _Translate(i1 + 312 | 0) | 0, i16); else {
     _PushU32_(i62, _Translate(2) | 0, i16);
     _PushU32_(i62, i1, -1);
    }
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0);
    i1 = i15;
    break;
   }
  case 41:
   {
    i47 = 0;
    HEAP32[i59 >> 2] = i1;
    i15 = HEAP32[i18 >> 2] | 0;
    i3 = HEAP32[i15 + (i1 * 12 | 0) >> 2] | 0;
    i1 = HEAP32[i15 + (i1 * 12 | 0) + 4 >> 2] | 0;
    if (i1 >>> 0 < 32 ? (HEAP32[i3 + 68 >> 2] | 0) == 4 : 0) _PushU32_(i62, _Translate((i1 >>> 2) + 295 | 0) | 0, i16); else {
     i15 = i3 + 35 | 0;
     _PushU32_(i62, _Translate((HEAPU8[i15 >> 0] | 0) + 48 | 0) | 0, i16);
     _PushU32_(i62, i1, -1);
     if ((HEAP8[i15 >> 0] | 0) == 7) _PushU32_(i62, i3, -1);
    }
    _PushStackType_(i55, i3);
    i1 = i3;
    break;
   }
  case 53:
   {
    i47 = 0;
    i3 = HEAP32[i31 + (i1 * 12 | 0) >> 2] | 0;
    i1 = (HEAP32[i31 + (i1 * 12 | 0) + 4 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0;
    if (i1 >>> 0 < 32 ? (HEAP32[i3 + 68 >> 2] | 0) == 4 : 0) _PushU32_(i62, _Translate((i1 >>> 2) + 295 | 0) | 0, i16); else {
     i15 = i3 + 35 | 0;
     _PushU32_(i62, _Translate((HEAPU8[i15 >> 0] | 0) + 48 | 0) | 0, i16);
     _PushU32_(i62, i1, -1);
     if ((HEAP8[i15 >> 0] | 0) == 7) _PushU32_(i62, i3, -1);
    }
    _PushStackType_(i55, i3);
    i1 = i3;
    break;
   }
  case 60:
   {
    i47 = 0;
    i15 = HEAP32[i55 >> 2] | 0;
    i3 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i15 + (i3 << 2) >> 2] | 0;
    i1 = (HEAP32[i31 + (i1 * 12 | 0) + 4 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0;
    if (i1 >>> 0 < 32 ? (HEAP32[i3 + 68 >> 2] | 0) == 4 : 0) {
     _PushU32_(i62, _Translate((i1 >>> 2) + 303 | 0) | 0, i16);
     i1 = i3;
     break;
    }
    i15 = i3 + 35 | 0;
    _PushU32_(i62, _Translate((HEAPU8[i15 >> 0] | 0) + 56 | 0) | 0, i16);
    _PushU32_(i62, i1, -1);
    if ((HEAP8[i15 >> 0] | 0) == 7) {
     _PushU32_(i62, i3, -1);
     i1 = i3;
    } else i1 = i3;
    break;
   }
  case 76:
   {
    i47 = 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + -1;
    _PushU32_(i62, _Translate(i13 + 109 | 0) | 0, i16);
    _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + (HEAP32[i59 >> 2] << 2) >> 2] | 0);
    i1 = i15;
    break;
   }
  case 79:
   {
    i47 = 0;
    i13 = _GetUnalignedU32(i27, i33) | 0;
    HEAP32[i59 >> 2] = i13;
    i13 = _MetaData_GetMethodDefFromDefRefOrSpec(i29, i13, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
    if (!(HEAP8[i13 + 32 >> 0] | 0)) {
     i1 = _MetaData_GetTypeDefFromMethodDef(i13) | 0;
     if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
    }
    L289 : do if (!i3) {
     i1 = 0;
     i3 = 0;
     i6 = i13;
     i11 = i14;
    } else {
     i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i29, i3, HEAP32[(HEAP32[i30 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0;
     if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
     i12 = i1 + 44 | 0;
     L294 : do if (HEAP32[(HEAP32[i13 + 48 >> 2] | 0) + 8 >> 2] & 32 | 0) {
      i8 = HEAP32[i1 + 72 >> 2] | 0;
      i9 = i1 + 76 | 0;
      i10 = i13 + 48 | 0;
      i11 = i13 + 56 | 0;
      i7 = 0;
      while (1) {
       if (i7 >>> 0 >= i8 >>> 0) break L294;
       i3 = HEAP32[i9 >> 2] | 0;
       if ((HEAP32[i3 + (i7 * 12 | 0) >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
        i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + (HEAP32[(HEAP32[i3 + (i7 * 12 | 0) + 4 >> 2] | 0) + (HEAP32[i11 >> 2] << 2) >> 2] << 2) >> 2] | 0;
        if ((HEAP32[i6 + 48 >> 2] | 0) == (i1 | 0)) {
         i1 = 0;
         i3 = 0;
         i11 = 40;
         break L289;
        }
       }
       i7 = i7 + 1 | 0;
      }
     } while (0);
     if (!(HEAP8[i1 + 34 >> 0] | 0)) {
      i1 = 0;
      i3 = 1;
     } else {
      i3 = HEAP32[i13 + 56 >> 2] | 0;
      if ((i3 | 0) == -1) i3 = 0; else {
       i6 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i3 << 2) >> 2] | 0;
       if ((HEAP32[i6 + 48 >> 2] | 0) == (i1 | 0)) {
        i1 = 0;
        i3 = 0;
        i11 = 40;
        break;
       } else i3 = 0;
      }
     }
     i6 = i13;
     i11 = i14;
    } while (0);
    i9 = HEAPU16[i6 + 34 >> 1] | 0;
    i10 = HEAP32[i55 >> 2] | 0;
    i7 = i15;
    i8 = 0;
    while (1) {
     if ((i8 | 0) == (i9 | 0)) break;
     i7 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
     HEAP32[i23 >> 2] = i7;
     i7 = HEAP32[i10 + (i7 << 2) >> 2] | 0;
     i8 = i8 + 1 | 0;
    }
    if (!(HEAP16[i6 + 14 >> 1] & 16)) i9 = i7; else i9 = HEAP32[HEAP32[9026] >> 2] | 0;
    if (!(HEAP8[i9 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i9, 0, 0);
    i7 = HEAP32[i6 + 48 >> 2] | 0;
    L318 : do if (i11 << 24 >> 24 == 111 ? (HEAP32[i7 + 8 >> 2] & 32 | 0) != 0 : 0) {
     _PushU32_(i62, _Translate(33) | 0, i16);
     i3 = 0;
    } else {
     i8 = HEAP32[9026] | 0;
     if ((HEAP32[i7 + 40 >> 2] | 0) == (HEAP32[i8 + 80 >> 2] | 0)) {
      _PushU32_(i62, _Translate(39) | 0, i16);
      i3 = 0;
      break;
     }
     if ((i7 | 0) == (HEAP32[i8 + 200 >> 2] | 0)) if (!(_strcmp(HEAP32[i6 + 16 >> 2] | 0, 14367) | 0)) {
      _PushU32_(i62, _Translate(356) | 0, i16);
      i3 = 1;
      break;
     }
     i7 = HEAP8[i9 + 35 >> 0] | 0;
     i8 = i1;
     i3 = (i3 | 0) != 0;
     i1 = (i1 | 0) != 0;
     switch (i7 << 24 >> 24) {
     case 5:
     case 2:
      {
       if (i3) {
        _PushU32_(i62, _Translate(23) | 0, i16);
        i3 = 0;
        break L318;
       }
       if (i1) {
        _PushU32_(i62, _Translate(11) | 0, i16);
        _PushU32_(i62, i8, -1);
        i3 = 0;
        break L318;
       } else {
        _PushU32_(i62, _Translate(i11 << 24 >> 24 == 40 ? 7 : 5) | 0, i16);
        i3 = 0;
        break L318;
       }
      }
     case 7:
     case 4:
      {
       if (i3) {
        _PushU32_(i62, _Translate(23) | 0, i16);
        i3 = 0;
        break L318;
       }
       if (i1) {
        _PushU32_(i62, _Translate(11) | 0, i16);
        _PushU32_(i62, i8, -1);
        i3 = 0;
        break L318;
       } else {
        _PushU32_(i62, _Translate(10) | 0, i16);
        i3 = 0;
        break L318;
       }
      }
     default:
      {
       i47 = 120;
       break L19;
      }
     }
    } while (0);
    _PushU32_(i62, i6, -1);
    i1 = HEAP32[i6 + 44 >> 2] | 0;
    if (i1 | 0) _PushStackType_(i55, i1);
    if (!(i3 << 24 >> 24)) i1 = i9; else {
     _PushU32_(i62, _Translate(357) | 0, i16);
     i1 = i9;
    }
    break;
   }
  case 127:
   {
    i47 = 0;
    i1 = i3 + i1 | 0;
    HEAP32[i59 >> 2] = i1;
    if (i1 >>> 0 > i3 >>> 0) _DeepCopyTypeStack(i53, i1, i55);
    _PushU32_(i62, _Translate(3) | 0, i16);
    _PushU32_(i51, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i62, HEAP32[i59 >> 2] | 0, -1);
    _RestoreTypeStack(i55, HEAP32[i53 + (HEAP32[i33 >> 2] << 2) >> 2] | 0);
    i1 = i15;
    break;
   }
  case 137:
   {
    i47 = 0;
    HEAP32[i59 >> 2] = i3;
    i6 = HEAP32[i55 >> 2] | 0;
    i1 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
    HEAP32[i23 >> 2] = i1;
    i1 = HEAP32[i6 + (i1 << 2) >> 2] | 0;
    i6 = HEAP32[i1 + 68 >> 2] | 0;
    if (i6 >>> 0 > 8) {
     i47 = 138;
     break L19;
    }
    i15 = HEAP32[i33 >> 2] | 0;
    i3 = i3 + i15 | 0;
    HEAP32[i59 >> 2] = i3;
    if (i3 >>> 0 > i15 >>> 0) _DeepCopyTypeStack(i53, i3, i55);
    _PushU32_(i62, _Translate(i7 + i13 + ((i6 | 0) == 4 ? 170 : 172) | 0) | 0, i16);
    _PushU32_(i51, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i62, HEAP32[i59 >> 2] | 0, -1);
    break;
   }
  case 144:
   {
    i47 = 0;
    i14 = HEAP32[i55 >> 2] | 0;
    i3 = HEAP32[i23 >> 2] | 0;
    i10 = HEAP32[i14 + (i3 + -1 << 2) >> 2] | 0;
    i3 = i3 + -2 | 0;
    HEAP32[i23 >> 2] = i3;
    i3 = HEAP32[i14 + (i3 << 2) >> 2] | 0;
    i1 = i1 + i6 | 0;
    HEAP32[i59 >> 2] = i1;
    if (i1 >>> 0 > i6 >>> 0) _DeepCopyTypeStack(i53, i1, i55);
    i8 = HEAP8[i3 + 35 >> 0] | 0;
    i9 = i8 & 255;
    i6 = i13 - i7 | 0;
    i7 = i6 + 144 | 0;
    i1 = HEAP8[i10 + 35 >> 0] | 0;
    i3 = i1 & 255;
    do if (i8 << 24 >> 24 == 1 & i1 << 24 >> 24 == 1) _PushU32_(i62, _Translate(i7) | 0, i16); else {
     if (!((i1 | i8) << 24 >> 24)) {
      _PushU32_(i62, _Translate(i6 + 154 | 0) | 0, i16);
      break;
     }
     if (i8 << 24 >> 24 == 6 & i1 << 24 >> 24 == 6) {
      _PushU32_(i62, _Translate(i6 + 255 | 0) | 0, i16);
      break;
     }
     if (i8 << 24 >> 24 == 3 & i1 << 24 >> 24 == 3) {
      _PushU32_(i62, _Translate(i6 + 277 | 0) | 0, i16);
      break;
     }
     if (!(i8 << 24 >> 24 == 5 & i1 << 24 >> 24 == 5)) {
      i47 = 156;
      break L19;
     }
     _PushU32_(i62, _Translate(i7) | 0, i16);
    } while (0);
    _PushU32_(i51, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i62, HEAP32[i59 >> 2] | 0, -1);
    i1 = i15;
    break;
   }
  case 159:
   {
    i47 = 0;
    HEAP32[i59 >> 2] = i3;
    i7 = HEAP32[i55 >> 2] | 0;
    i6 = HEAP32[i23 >> 2] | 0;
    i10 = HEAP32[i7 + (i6 + -1 << 2) >> 2] | 0;
    i6 = i6 + -2 | 0;
    HEAP32[i23 >> 2] = i6;
    i6 = HEAP32[i7 + (i6 << 2) >> 2] | 0;
    i7 = HEAP8[i6 + 35 >> 0] | 0;
    i8 = i7 & 255;
    i9 = i13 + 40 | 0;
    i10 = HEAP8[i10 + 35 >> 0] | 0;
    i11 = i10 & 255;
    i1 = i10 << 24 >> 24 != 1;
    do if (i7 << 24 >> 24 != 1 | i1) {
     if (!((i10 | i7) << 24 >> 24)) {
      _PushU32_(i62, _Translate(i13 + 152 - i3 | 0) | 0, i16);
      break;
     }
     if (i7 << 24 >> 24 == 6 & i10 << 24 >> 24 == 6) {
      _PushU32_(i62, _Translate(i13 + 177 - i3 | 0) | 0, i16);
      break;
     }
     if (i7 << 24 >> 24 == 3 & i10 << 24 >> 24 == 3) {
      _PushU32_(i62, _Translate(i13 + 199 - i3 | 0) | 0, i16);
      break;
     }
     if (i7 << 24 >> 24 == 5 & i10 << 24 >> 24 == 5) {
      _PushU32_(i62, _Translate(i9 - i3 | 0) | 0, i16);
      break;
     }
     if (!((i12 & -2) << 24 >> 24 == 88 & ((i7 << 24 >> 24 != 4 | i1) ^ 1))) {
      i47 = 171;
      break L19;
     }
     _PushU32_(i62, _Translate(i9) | 0, i16);
    } else _PushU32_(i62, _Translate(i9 - i3 | 0) | 0, i16); while (0);
    _PushStackType_(i55, i6);
    i1 = i15;
    break;
   }
  case 187:
   {
    i7 = 1;
    i47 = 192;
    break;
   }
  case 276:
   {
    i47 = 0;
    i3 = i1 + i3 | 0;
    HEAP32[i59 >> 2] = i3;
    if (i3 >>> 0 > i1 >>> 0) {
     _DeepCopyTypeStack(i53, i3, i55);
     i1 = HEAP32[i33 >> 2] | 0;
    }
    _RestoreTypeStack(i55, HEAP32[i53 + (i1 << 2) >> 2] | 0);
    _PushU32_(i62, _Translate(25) | 0, i16);
    _PushU32_(i51, HEAP32[i25 >> 2] | 0, -1);
    _PushU32_(i62, HEAP32[i59 >> 2] | 0, -1);
    i1 = i15;
    break;
   }
  }
  if ((i47 | 0) == 192) {
   i47 = 0;
   i3 = HEAP32[i55 >> 2] | 0;
   i6 = (HEAP32[i23 >> 2] | 0) + -1 | 0;
   HEAP32[i23 >> 2] = i6;
   i6 = HEAP32[i3 + (i6 << 2) >> 2] | 0;
   i3 = HEAP8[i6 + 35 >> 0] | 0;
   L350 : do switch (i3 << 24 >> 24) {
   case 0:
    {
     i4 = (i6 | 0) == (HEAP32[(HEAP32[9026] | 0) + 96 >> 2] | 0) ? 332 : 338;
     break;
    }
   case 4:
   case 1:
    {
     i3 = HEAP32[9026] | 0;
     if ((i6 | 0) != (HEAP32[i3 + 16 >> 2] | 0)) if ((i6 | 0) != (HEAP32[i3 + 56 >> 2] | 0)) if ((i6 | 0) != (HEAP32[i3 + 52 >> 2] | 0)) if ((i6 | 0) != (HEAP32[i3 + 180 >> 2] | 0)) {
      i4 = 320;
      break L350;
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
     i47 = 200;
     break L19;
    }
   } while (0);
   switch (i7 & 7) {
   case 0:
    {
     i3 = 1;
     i5 = 32 - i2 | 0;
     break;
    }
   case 1:
    {
     i3 = 1;
     i5 = (2 << i2 + -1) + -1 | 0;
     break;
    }
   case 5:
   case 4:
   case 3:
   case 2:
    {
     i3 = 0;
     break;
    }
   default:
    {
     i47 = 204;
     break L19;
    }
   }
   _PushU32_(i62, _Translate(i4 + i7 | 0) | 0, i16);
   if (i3) _PushU32_(i62, i5, -1);
   _PushStackType_(i55, HEAP32[(HEAP32[9026] | 0) + (i1 << 2) >> 2] | 0);
   i1 = i6;
  }
  i3 = HEAP32[i33 >> 2] | 0;
  if (i3 >>> 0 >= i57 >>> 0) {
   i47 = 308;
   break;
  }
  i15 = i1;
  i7 = i17;
  i6 = i16;
  i1 = HEAP32[i25 >> 2] | 0;
 }
 switch (i47 | 0) {
 case 20:
  {
   _Crash(14344, i34);
   break;
  }
 case 120:
  {
   HEAP32[i35 >> 2] = i7 & 255;
   _Crash(14374, i35);
   break;
  }
 case 138:
  {
   HEAP32[i43 >> 2] = HEAP32[i1 + 12 >> 2];
   _Crash(14427, i43);
   break;
  }
 case 156:
  {
   HEAP32[i46 >> 2] = i9;
   HEAP32[i46 + 4 >> 2] = i3;
   _Crash(14480, i46);
   break;
  }
 case 171:
  {
   HEAP32[i36 >> 2] = i8;
   HEAP32[i36 + 4 >> 2] = i11;
   _Crash(14549, i36);
   break;
  }
 case 178:
  {
   HEAP32[i37 >> 2] = i1 & 255;
   _Crash(14622, i37);
   break;
  }
 case 182:
  {
   HEAP32[i38 >> 2] = HEAP32[i1 + 12 >> 2];
   _Crash(14679, i38);
   break;
  }
 case 200:
  {
   HEAP32[i39 >> 2] = i3 & 255;
   _Crash(14731, i39);
   break;
  }
 case 204:
  {
   HEAP32[i40 >> 2] = i7;
   _Crash(14772, i40);
   break;
  }
 case 246:
  {
   HEAP32[i41 >> 2] = i3 & 255;
   _Crash(14815, i41);
   break;
  }
 case 298:
  {
   i63 = HEAP32[i3 + 12 >> 2] | 0;
   HEAP32[i42 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i42 + 4 >> 2] = i63;
   _Crash(14860, i42);
   break;
  }
 case 304:
  {
   HEAP32[i44 >> 2] = i1;
   _Crash(14929, i44);
   break;
  }
 case 305:
  {
   HEAP32[i45 >> 2] = i13;
   _Crash(14984, i45);
   break;
  }
 case 308:
  {
   i3 = HEAP32[i19 >> 2] | 0;
   i4 = HEAP32[i51 >> 2] | 0;
   i2 = HEAP32[i62 >> 2] | 0;
   i1 = 0;
   while (1) {
    if ((i1 | 0) == (i3 | 0)) break;
    i51 = i2 + (HEAP32[i4 + (i1 << 2) >> 2] << 2) | 0;
    HEAP32[i51 >> 2] = HEAP32[i52 + (HEAP32[i51 >> 2] << 2) >> 2];
    i1 = i1 + 1 | 0;
   }
   i2 = HEAP32[i24 >> 2] | 0;
   i1 = 0;
   while (1) {
    if ((i1 | 0) == (i2 | 0)) break;
    i46 = HEAP32[i32 >> 2] | 0;
    i51 = i46 + (i1 * 24 | 0) + 4 | 0;
    i47 = HEAP32[i51 >> 2] | 0;
    i45 = i46 + (i1 * 24 | 0) + 8 | 0;
    HEAP32[i45 >> 2] = HEAP32[i52 + ((HEAP32[i45 >> 2] | 0) + i47 << 2) >> 2];
    HEAP32[i51 >> 2] = HEAP32[i52 + (i47 << 2) >> 2];
    i51 = i46 + (i1 * 24 | 0) + 12 | 0;
    i47 = HEAP32[i51 >> 2] | 0;
    i46 = i46 + (i1 * 24 | 0) + 16 | 0;
    HEAP32[i46 >> 2] = HEAP32[i52 + ((HEAP32[i46 >> 2] | 0) + i47 << 2) >> 2];
    HEAP32[i51 >> 2] = HEAP32[i52 + (i47 << 2) >> 2];
    i1 = i1 + 1 | 0;
   }
   HEAP32[i56 >> 2] = HEAP32[i48 >> 2];
   _free(HEAP32[i55 >> 2] | 0);
   i1 = 0;
   while (1) {
    if (i1 >>> 0 > i57 >>> 0) break;
    _FreeTypeStack(HEAP32[i53 + (i1 << 2) >> 2] | 0);
    i1 = i1 + 1 | 0;
   }
   _free(i53);
   _free(i4);
   _free(HEAP32[i26 >> 2] | 0);
   _free(i52);
   i1 = HEAP32[i25 >> 2] << 2;
   HEAP32[i59 >> 2] = i1;
   if (!i58) {
    i2 = _mallocForever(i1) | 0;
    i1 = HEAP32[i59 >> 2] | 0;
   } else i2 = _malloc(i1) | 0;
   _memcpy(i2 | 0, HEAP32[i62 >> 2] | 0, i1 | 0) | 0;
   HEAP32[i60 + 24 >> 2] = i54;
   if (i50) {
    i60 = _mallocForever(HEAP32[i59 >> 2] | 0) | 0;
    HEAP32[i61 >> 2] = i60;
    _memcpy(i60 | 0, HEAP32[i49 >> 2] | 0, HEAP32[i59 >> 2] | 0) | 0;
   } else HEAP32[i61 >> 2] = 0;
   _free(HEAP32[i62 >> 2] | 0);
   _free(HEAP32[i49 >> 2] | 0);
   STACKTOP = i63;
   return i2 | 0;
  }
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
  i12 = HEAP32[9042] | 0;
  i2 = i12 >>> i1;
  if (i2 & 3 | 0) {
   i1 = (i2 & 1 ^ 1) + i1 | 0;
   i2 = 36208 + (i1 << 1 << 2) | 0;
   i3 = i2 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i4 + 8 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == (i6 | 0)) HEAP32[9042] = i12 & ~(1 << i1); else {
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
  i11 = HEAP32[9044] | 0;
  if (i10 >>> 0 > i11 >>> 0) {
   if (i2 | 0) {
    i7 = 2 << i1;
    i1 = i2 << i1 & (i7 | 0 - i7);
    i1 = (i1 & 0 - i1) + -1 | 0;
    i7 = i1 >>> 12 & 16;
    i1 = i1 >>> i7;
    i3 = i1 >>> 5 & 8;
    i1 = i1 >>> i3;
    i5 = i1 >>> 2 & 4;
    i1 = i1 >>> i5;
    i2 = i1 >>> 1 & 2;
    i1 = i1 >>> i2;
    i4 = i1 >>> 1 & 1;
    i4 = (i3 | i7 | i5 | i2 | i4) + (i1 >>> i4) | 0;
    i1 = 36208 + (i4 << 1 << 2) | 0;
    i2 = i1 + 8 | 0;
    i5 = HEAP32[i2 >> 2] | 0;
    i7 = i5 + 8 | 0;
    i3 = HEAP32[i7 >> 2] | 0;
    if ((i1 | 0) == (i3 | 0)) {
     i2 = i12 & ~(1 << i4);
     HEAP32[9042] = i2;
    } else {
     HEAP32[i3 + 12 >> 2] = i1;
     HEAP32[i2 >> 2] = i3;
     i2 = i12;
    }
    i6 = (i4 << 3) - i10 | 0;
    HEAP32[i5 + 4 >> 2] = i10 | 3;
    i4 = i5 + i10 | 0;
    HEAP32[i4 + 4 >> 2] = i6 | 1;
    HEAP32[i4 + i6 >> 2] = i6;
    if (i11 | 0) {
     i5 = HEAP32[9047] | 0;
     i1 = i11 >>> 3;
     i3 = 36208 + (i1 << 1 << 2) | 0;
     i1 = 1 << i1;
     if (!(i2 & i1)) {
      HEAP32[9042] = i2 | i1;
      i1 = i3;
      i2 = i3 + 8 | 0;
     } else {
      i2 = i3 + 8 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
     }
     HEAP32[i2 >> 2] = i5;
     HEAP32[i1 + 12 >> 2] = i5;
     HEAP32[i5 + 8 >> 2] = i1;
     HEAP32[i5 + 12 >> 2] = i3;
    }
    HEAP32[9044] = i6;
    HEAP32[9047] = i4;
    i14 = i7;
    STACKTOP = i15;
    return i14 | 0;
   }
   i8 = HEAP32[9043] | 0;
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
    i1 = HEAP32[36472 + ((i6 | i7 | i9 | i3 | i1) + (i2 >>> i1) << 2) >> 2] | 0;
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
    if (i9 >>> 0 < i7 >>> 0) {
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
      i2 = 36472 + (i1 << 2) | 0;
      if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
       HEAP32[i2 >> 2] = i3;
       if (!i3) {
        HEAP32[9043] = i8 & ~(1 << i1);
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
       i4 = HEAP32[9047] | 0;
       i1 = i11 >>> 3;
       i3 = 36208 + (i1 << 1 << 2) | 0;
       i1 = 1 << i1;
       if (!(i12 & i1)) {
        HEAP32[9042] = i12 | i1;
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
      HEAP32[9044] = i6;
      HEAP32[9047] = i7;
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
  i9 = HEAP32[9043] | 0;
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
   i2 = HEAP32[36472 + (i7 << 2) >> 2] | 0;
   L74 : do if (!i2) {
    i2 = 0;
    i1 = 0;
    i14 = 57;
   } else {
    i1 = 0;
    i6 = i10 << ((i7 | 0) == 31 ? 0 : 25 - (i7 >>> 1) | 0);
    i5 = 0;
    while (1) {
     i4 = (HEAP32[i2 + 4 >> 2] & -8) - i10 | 0;
     if (i4 >>> 0 < i3 >>> 0) if (!i4) {
      i1 = i2;
      i3 = 0;
      i4 = i2;
      i14 = 61;
      break L74;
     } else {
      i1 = i2;
      i3 = i4;
     }
     i4 = HEAP32[i2 + 20 >> 2] | 0;
     i2 = HEAP32[i2 + 16 + (i6 >>> 31 << 2) >> 2] | 0;
     i5 = (i4 | 0) == 0 | (i4 | 0) == (i2 | 0) ? i5 : i4;
     i4 = (i2 | 0) == 0;
     if (i4) {
      i2 = i5;
      i14 = 57;
      break;
     } else i6 = i6 << ((i4 ^ 1) & 1);
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
     i2 = HEAP32[36472 + ((i6 | i7 | i8 | i11 | i2) + (i12 >>> i2) << 2) >> 2] | 0;
    }
    if (!i2) {
     i8 = i1;
     i6 = i3;
    } else {
     i4 = i2;
     i14 = 61;
    }
   }
   if ((i14 | 0) == 61) while (1) {
    i14 = 0;
    i2 = (HEAP32[i4 + 4 >> 2] & -8) - i10 | 0;
    i12 = i2 >>> 0 < i3 >>> 0;
    i2 = i12 ? i2 : i3;
    i1 = i12 ? i4 : i1;
    i4 = HEAP32[i4 + 16 + (((HEAP32[i4 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i4) {
     i8 = i1;
     i6 = i2;
     break;
    } else {
     i3 = i2;
     i14 = 61;
    }
   }
   if (!i8) i12 = i10; else if (i6 >>> 0 < ((HEAP32[9044] | 0) - i10 | 0) >>> 0) {
    i7 = i8 + i10 | 0;
    if (i8 >>> 0 >= i7 >>> 0) {
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
     i3 = 36472 + (i2 << 2) | 0;
     if ((i8 | 0) == (HEAP32[i3 >> 2] | 0)) {
      HEAP32[i3 >> 2] = i1;
      if (!i1) {
       i4 = i9 & ~(1 << i2);
       HEAP32[9043] = i4;
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
      i3 = 36208 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[9042] | 0;
      i1 = 1 << i1;
      if (!(i2 & i1)) {
       HEAP32[9042] = i2 | i1;
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
     i3 = 36472 + (i1 << 2) | 0;
     HEAP32[i7 + 28 >> 2] = i1;
     i2 = i7 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = 1 << i1;
     if (!(i4 & i2)) {
      HEAP32[9043] = i4 | i2;
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
 i3 = HEAP32[9044] | 0;
 if (i3 >>> 0 >= i12 >>> 0) {
  i1 = i3 - i12 | 0;
  i2 = HEAP32[9047] | 0;
  if (i1 >>> 0 > 15) {
   i14 = i2 + i12 | 0;
   HEAP32[9047] = i14;
   HEAP32[9044] = i1;
   HEAP32[i14 + 4 >> 2] = i1 | 1;
   HEAP32[i14 + i1 >> 2] = i1;
   HEAP32[i2 + 4 >> 2] = i12 | 3;
  } else {
   HEAP32[9044] = 0;
   HEAP32[9047] = 0;
   HEAP32[i2 + 4 >> 2] = i3 | 3;
   i14 = i2 + i3 + 4 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
  }
  i14 = i2 + 8 | 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 i7 = HEAP32[9045] | 0;
 if (i7 >>> 0 > i12 >>> 0) {
  i11 = i7 - i12 | 0;
  HEAP32[9045] = i11;
  i14 = HEAP32[9048] | 0;
  i13 = i14 + i12 | 0;
  HEAP32[9048] = i13;
  HEAP32[i13 + 4 >> 2] = i11 | 1;
  HEAP32[i14 + 4 >> 2] = i12 | 3;
  i14 = i14 + 8 | 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 if (!(HEAP32[9160] | 0)) {
  HEAP32[9162] = 4096;
  HEAP32[9161] = 4096;
  HEAP32[9163] = -1;
  HEAP32[9164] = -1;
  HEAP32[9165] = 0;
  HEAP32[9153] = 0;
  i1 = i13 & -16 ^ 1431655768;
  HEAP32[i13 >> 2] = i1;
  HEAP32[9160] = i1;
  i1 = 4096;
 } else i1 = HEAP32[9162] | 0;
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
 i1 = HEAP32[9152] | 0;
 if (i1 | 0) {
  i11 = HEAP32[9150] | 0;
  i13 = i11 + i10 | 0;
  if (i13 >>> 0 <= i11 >>> 0 | i13 >>> 0 > i1 >>> 0) {
   i14 = 0;
   STACKTOP = i15;
   return i14 | 0;
  }
 }
 L167 : do if (!(HEAP32[9153] & 4)) {
  i2 = HEAP32[9048] | 0;
  L169 : do if (!i2) i14 = 118; else {
   i3 = 36616;
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
      i7 = i1;
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
    i2 = HEAP32[9161] | 0;
    i3 = i2 + -1 | 0;
    i1 = ((i3 & i1 | 0) == 0 ? 0 : (i3 + i1 & 0 - i2) - i1 | 0) + i10 | 0;
    i2 = HEAP32[9150] | 0;
    i3 = i1 + i2 | 0;
    if (i1 >>> 0 > i12 >>> 0 & i1 >>> 0 < 2147483647) {
     i5 = HEAP32[9152] | 0;
     if (i5 | 0) if (i3 >>> 0 <= i2 >>> 0 | i3 >>> 0 > i5 >>> 0) {
      i1 = 0;
      break;
     }
     i2 = _sbrk(i1 | 0) | 0;
     if ((i2 | 0) == (i4 | 0)) {
      i7 = i1;
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
    i7 = i1;
    i14 = 135;
    break L167;
   }
   i2 = HEAP32[9162] | 0;
   i2 = i9 - i1 + i2 & 0 - i2;
   if (i2 >>> 0 >= 2147483647) {
    i7 = i1;
    i14 = 135;
    break L167;
   }
   if ((_sbrk(i2 | 0) | 0) == (-1 | 0)) {
    _sbrk(i3 | 0) | 0;
    i1 = 0;
    break;
   } else {
    i7 = i2 + i1 | 0;
    i14 = 135;
    break L167;
   }
  } while (0);
  HEAP32[9153] = HEAP32[9153] | 4;
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
   i7 = i3 ? i2 : i1;
   i14 = 135;
  }
 }
 if ((i14 | 0) == 135) {
  i1 = (HEAP32[9150] | 0) + i7 | 0;
  HEAP32[9150] = i1;
  if (i1 >>> 0 > (HEAP32[9151] | 0) >>> 0) HEAP32[9151] = i1;
  i9 = HEAP32[9048] | 0;
  do if (!i9) {
   i14 = HEAP32[9046] | 0;
   if ((i14 | 0) == 0 | i4 >>> 0 < i14 >>> 0) HEAP32[9046] = i4;
   HEAP32[9154] = i4;
   HEAP32[9155] = i7;
   HEAP32[9157] = 0;
   HEAP32[9051] = HEAP32[9160];
   HEAP32[9050] = -1;
   i1 = 0;
   do {
    i14 = 36208 + (i1 << 1 << 2) | 0;
    HEAP32[i14 + 12 >> 2] = i14;
    HEAP32[i14 + 8 >> 2] = i14;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i14 = i4 + 8 | 0;
   i14 = (i14 & 7 | 0) == 0 ? 0 : 0 - i14 & 7;
   i13 = i4 + i14 | 0;
   i14 = i7 + -40 - i14 | 0;
   HEAP32[9048] = i13;
   HEAP32[9045] = i14;
   HEAP32[i13 + 4 >> 2] = i14 | 1;
   HEAP32[i13 + i14 + 4 >> 2] = 40;
   HEAP32[9049] = HEAP32[9164];
  } else {
   i1 = 36616;
   do {
    i2 = HEAP32[i1 >> 2] | 0;
    i3 = i1 + 4 | 0;
    i5 = HEAP32[i3 >> 2] | 0;
    if ((i4 | 0) == (i2 + i5 | 0)) {
     i14 = 145;
     break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
   } while ((i1 | 0) != 0);
   if ((i14 | 0) == 145) if (!(HEAP32[i1 + 12 >> 2] & 8)) if (i9 >>> 0 < i4 >>> 0 & i9 >>> 0 >= i2 >>> 0) {
    HEAP32[i3 >> 2] = i5 + i7;
    i14 = i9 + 8 | 0;
    i14 = (i14 & 7 | 0) == 0 ? 0 : 0 - i14 & 7;
    i13 = i9 + i14 | 0;
    i14 = (HEAP32[9045] | 0) + (i7 - i14) | 0;
    HEAP32[9048] = i13;
    HEAP32[9045] = i14;
    HEAP32[i13 + 4 >> 2] = i14 | 1;
    HEAP32[i13 + i14 + 4 >> 2] = 40;
    HEAP32[9049] = HEAP32[9164];
    break;
   }
   if (i4 >>> 0 < (HEAP32[9046] | 0) >>> 0) HEAP32[9046] = i4;
   i2 = i4 + i7 | 0;
   i1 = 36616;
   do {
    if ((HEAP32[i1 >> 2] | 0) == (i2 | 0)) {
     i14 = 153;
     break;
    }
    i1 = HEAP32[i1 + 8 >> 2] | 0;
   } while ((i1 | 0) != 0);
   if ((i14 | 0) == 153) if (!(HEAP32[i1 + 12 >> 2] & 8)) {
    HEAP32[i1 >> 2] = i4;
    i11 = i1 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i7;
    i11 = i4 + 8 | 0;
    i11 = i4 + ((i11 & 7 | 0) == 0 ? 0 : 0 - i11 & 7) | 0;
    i1 = i2 + 8 | 0;
    i1 = i2 + ((i1 & 7 | 0) == 0 ? 0 : 0 - i1 & 7) | 0;
    i10 = i11 + i12 | 0;
    i8 = i1 - i11 - i12 | 0;
    HEAP32[i11 + 4 >> 2] = i12 | 3;
    do if ((i1 | 0) == (i9 | 0)) {
     i14 = (HEAP32[9045] | 0) + i8 | 0;
     HEAP32[9045] = i14;
     HEAP32[9048] = i10;
     HEAP32[i10 + 4 >> 2] = i14 | 1;
    } else {
     if ((i1 | 0) == (HEAP32[9047] | 0)) {
      i14 = (HEAP32[9044] | 0) + i8 | 0;
      HEAP32[9044] = i14;
      HEAP32[9047] = i10;
      HEAP32[i10 + 4 >> 2] = i14 | 1;
      HEAP32[i10 + i14 >> 2] = i14;
      break;
     }
     i2 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i2 & 3 | 0) == 1) {
      i7 = i2 & -8;
      i4 = i2 >>> 3;
      L237 : do if (i2 >>> 0 < 256) {
       i2 = HEAP32[i1 + 8 >> 2] | 0;
       i3 = HEAP32[i1 + 12 >> 2] | 0;
       if ((i3 | 0) == (i2 | 0)) {
        HEAP32[9042] = HEAP32[9042] & ~(1 << i4);
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
       i4 = 36472 + (i3 << 2) | 0;
       do if ((i1 | 0) == (HEAP32[i4 >> 2] | 0)) {
        HEAP32[i4 >> 2] = i2;
        if (i2 | 0) break;
        HEAP32[9043] = HEAP32[9043] & ~(1 << i3);
        break L237;
       } else {
        HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i1 | 0) & 1) << 2) >> 2] = i2;
        if (!i2) break L237;
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
      i3 = 36208 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[9042] | 0;
      i1 = 1 << i1;
      if (!(i2 & i1)) {
       HEAP32[9042] = i2 | i1;
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
     i4 = 36472 + (i1 << 2) | 0;
     HEAP32[i10 + 28 >> 2] = i1;
     i2 = i10 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = HEAP32[9043] | 0;
     i3 = 1 << i1;
     if (!(i2 & i3)) {
      HEAP32[9043] = i2 | i3;
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
       i14 = 194;
       break;
      }
      i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i4 >> 2] | 0;
      if (!i1) {
       i14 = 193;
       break;
      } else {
       i2 = i2 << 1;
       i3 = i1;
      }
     }
     if ((i14 | 0) == 193) {
      HEAP32[i4 >> 2] = i10;
      HEAP32[i10 + 24 >> 2] = i3;
      HEAP32[i10 + 12 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i10;
      break;
     } else if ((i14 | 0) == 194) {
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
   }
   i2 = 36616;
   while (1) {
    i1 = HEAP32[i2 >> 2] | 0;
    if (i1 >>> 0 <= i9 >>> 0) {
     i3 = i1 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
     if (i3 >>> 0 > i9 >>> 0) break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
   }
   i6 = i3 + -47 | 0;
   i2 = i6 + 8 | 0;
   i2 = i6 + ((i2 & 7 | 0) == 0 ? 0 : 0 - i2 & 7) | 0;
   i6 = i9 + 16 | 0;
   i2 = i2 >>> 0 < i6 >>> 0 ? i9 : i2;
   i1 = i2 + 8 | 0;
   i5 = i4 + 8 | 0;
   i5 = (i5 & 7 | 0) == 0 ? 0 : 0 - i5 & 7;
   i14 = i4 + i5 | 0;
   i5 = i7 + -40 - i5 | 0;
   HEAP32[9048] = i14;
   HEAP32[9045] = i5;
   HEAP32[i14 + 4 >> 2] = i5 | 1;
   HEAP32[i14 + i5 + 4 >> 2] = 40;
   HEAP32[9049] = HEAP32[9164];
   i5 = i2 + 4 | 0;
   HEAP32[i5 >> 2] = 27;
   HEAP32[i1 >> 2] = HEAP32[9154];
   HEAP32[i1 + 4 >> 2] = HEAP32[9155];
   HEAP32[i1 + 8 >> 2] = HEAP32[9156];
   HEAP32[i1 + 12 >> 2] = HEAP32[9157];
   HEAP32[9154] = i4;
   HEAP32[9155] = i7;
   HEAP32[9157] = 0;
   HEAP32[9156] = i1;
   i1 = i2 + 24 | 0;
   do {
    i14 = i1;
    i1 = i1 + 4 | 0;
    HEAP32[i1 >> 2] = 7;
   } while ((i14 + 8 | 0) >>> 0 < i3 >>> 0);
   if ((i2 | 0) != (i9 | 0)) {
    i7 = i2 - i9 | 0;
    HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2;
    HEAP32[i9 + 4 >> 2] = i7 | 1;
    HEAP32[i2 >> 2] = i7;
    i1 = i7 >>> 3;
    if (i7 >>> 0 < 256) {
     i3 = 36208 + (i1 << 1 << 2) | 0;
     i2 = HEAP32[9042] | 0;
     i1 = 1 << i1;
     if (!(i2 & i1)) {
      HEAP32[9042] = i2 | i1;
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
    i4 = 36472 + (i3 << 2) | 0;
    HEAP32[i9 + 28 >> 2] = i3;
    HEAP32[i9 + 20 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    i1 = HEAP32[9043] | 0;
    i2 = 1 << i3;
    if (!(i1 & i2)) {
     HEAP32[9043] = i1 | i2;
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
      i14 = 216;
      break;
     }
     i4 = i3 + 16 + (i2 >>> 31 << 2) | 0;
     i1 = HEAP32[i4 >> 2] | 0;
     if (!i1) {
      i14 = 215;
      break;
     } else {
      i2 = i2 << 1;
      i3 = i1;
     }
    }
    if ((i14 | 0) == 215) {
     HEAP32[i4 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i3;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break;
    } else if ((i14 | 0) == 216) {
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
  i1 = HEAP32[9045] | 0;
  if (i1 >>> 0 > i12 >>> 0) {
   i11 = i1 - i12 | 0;
   HEAP32[9045] = i11;
   i14 = HEAP32[9048] | 0;
   i13 = i14 + i12 | 0;
   HEAP32[9048] = i13;
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

function _printf_core(i15, i2, i25, i26, i27) {
 i15 = i15 | 0;
 i2 = i2 | 0;
 i25 = i25 | 0;
 i26 = i26 | 0;
 i27 = i27 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i28 = 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i21 = i28 + 16 | 0;
 i22 = i28;
 i19 = i28 + 24 | 0;
 i23 = i28 + 8 | 0;
 i24 = i28 + 20 | 0;
 HEAP32[i21 >> 2] = i2;
 i16 = (i15 | 0) != 0;
 i17 = i19 + 40 | 0;
 i18 = i17;
 i19 = i19 + 39 | 0;
 i20 = i23 + 4 | 0;
 i3 = 0;
 i1 = 0;
 i7 = 0;
 L1 : while (1) {
  do if ((i1 | 0) > -1) if ((i3 | 0) > (2147483647 - i1 | 0)) {
   HEAP32[(___errno_location() | 0) >> 2] = 75;
   i1 = -1;
   break;
  } else {
   i1 = i3 + i1 | 0;
   break;
  } while (0);
  i3 = HEAP8[i2 >> 0] | 0;
  if (!(i3 << 24 >> 24)) {
   i14 = 87;
   break;
  } else i4 = i2;
  L9 : while (1) {
   switch (i3 << 24 >> 24) {
   case 37:
    {
     i3 = i4;
     i14 = 9;
     break L9;
    }
   case 0:
    {
     i3 = i4;
     break L9;
    }
   default:
    {}
   }
   i13 = i4 + 1 | 0;
   HEAP32[i21 >> 2] = i13;
   i3 = HEAP8[i13 >> 0] | 0;
   i4 = i13;
  }
  L12 : do if ((i14 | 0) == 9) while (1) {
   i14 = 0;
   if ((HEAP8[i4 + 1 >> 0] | 0) != 37) break L12;
   i3 = i3 + 1 | 0;
   i4 = i4 + 2 | 0;
   HEAP32[i21 >> 2] = i4;
   if ((HEAP8[i4 >> 0] | 0) == 37) i14 = 9; else break;
  } while (0);
  i3 = i3 - i2 | 0;
  if (i16) _out(i15, i2, i3);
  if (i3 | 0) {
   i2 = i4;
   continue;
  }
  i5 = i4 + 1 | 0;
  i3 = (HEAP8[i5 >> 0] | 0) + -48 | 0;
  if (i3 >>> 0 < 10) {
   i13 = (HEAP8[i4 + 2 >> 0] | 0) == 36;
   i12 = i13 ? i3 : -1;
   i7 = i13 ? 1 : i7;
   i5 = i13 ? i4 + 3 | 0 : i5;
  } else i12 = -1;
  HEAP32[i21 >> 2] = i5;
  i3 = HEAP8[i5 >> 0] | 0;
  i4 = (i3 << 24 >> 24) + -32 | 0;
  L24 : do if (i4 >>> 0 < 32) {
   i6 = 0;
   i8 = i3;
   while (1) {
    i3 = 1 << i4;
    if (!(i3 & 75913)) {
     i3 = i8;
     break L24;
    }
    i6 = i3 | i6;
    i5 = i5 + 1 | 0;
    HEAP32[i21 >> 2] = i5;
    i3 = HEAP8[i5 >> 0] | 0;
    i4 = (i3 << 24 >> 24) + -32 | 0;
    if (i4 >>> 0 >= 32) break; else i8 = i3;
   }
  } else i6 = 0; while (0);
  if (i3 << 24 >> 24 == 42) {
   i4 = i5 + 1 | 0;
   i3 = (HEAP8[i4 >> 0] | 0) + -48 | 0;
   if (i3 >>> 0 < 10) if ((HEAP8[i5 + 2 >> 0] | 0) == 36) {
    HEAP32[i27 + (i3 << 2) >> 2] = 10;
    i3 = HEAP32[i26 + ((HEAP8[i4 >> 0] | 0) + -48 << 3) >> 2] | 0;
    i7 = 1;
    i5 = i5 + 3 | 0;
   } else i14 = 23; else i14 = 23;
   if ((i14 | 0) == 23) {
    i14 = 0;
    if (i7 | 0) {
     i1 = -1;
     break;
    }
    if (i16) {
     i7 = (HEAP32[i25 >> 2] | 0) + (4 - 1) & ~(4 - 1);
     i3 = HEAP32[i7 >> 2] | 0;
     HEAP32[i25 >> 2] = i7 + 4;
     i7 = 0;
     i5 = i4;
    } else {
     i3 = 0;
     i7 = 0;
     i5 = i4;
    }
   }
   HEAP32[i21 >> 2] = i5;
   i13 = (i3 | 0) < 0;
   i3 = i13 ? 0 - i3 | 0 : i3;
   i6 = i13 ? i6 | 8192 : i6;
  } else {
   i3 = _getint(i21) | 0;
   if ((i3 | 0) < 0) {
    i1 = -1;
    break;
   }
   i5 = HEAP32[i21 >> 2] | 0;
  }
  do if ((HEAP8[i5 >> 0] | 0) == 46) {
   if ((HEAP8[i5 + 1 >> 0] | 0) != 42) {
    HEAP32[i21 >> 2] = i5 + 1;
    i4 = _getint(i21) | 0;
    i5 = HEAP32[i21 >> 2] | 0;
    break;
   }
   i8 = i5 + 2 | 0;
   i4 = (HEAP8[i8 >> 0] | 0) + -48 | 0;
   if (i4 >>> 0 < 10) if ((HEAP8[i5 + 3 >> 0] | 0) == 36) {
    HEAP32[i27 + (i4 << 2) >> 2] = 10;
    i4 = HEAP32[i26 + ((HEAP8[i8 >> 0] | 0) + -48 << 3) >> 2] | 0;
    i5 = i5 + 4 | 0;
    HEAP32[i21 >> 2] = i5;
    break;
   }
   if (i7 | 0) {
    i1 = -1;
    break L1;
   }
   if (i16) {
    i13 = (HEAP32[i25 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i4 = HEAP32[i13 >> 2] | 0;
    HEAP32[i25 >> 2] = i13 + 4;
   } else i4 = 0;
   HEAP32[i21 >> 2] = i8;
   i5 = i8;
  } else i4 = -1; while (0);
  i11 = 0;
  while (1) {
   if (((HEAP8[i5 >> 0] | 0) + -65 | 0) >>> 0 > 57) {
    i1 = -1;
    break L1;
   }
   i13 = i5 + 1 | 0;
   HEAP32[i21 >> 2] = i13;
   i8 = HEAP8[(HEAP8[i5 >> 0] | 0) + -65 + (21209 + (i11 * 58 | 0)) >> 0] | 0;
   i9 = i8 & 255;
   if ((i9 + -1 | 0) >>> 0 < 8) {
    i11 = i9;
    i5 = i13;
   } else break;
  }
  if (!(i8 << 24 >> 24)) {
   i1 = -1;
   break;
  }
  i10 = (i12 | 0) > -1;
  do if (i8 << 24 >> 24 == 19) if (i10) {
   i1 = -1;
   break L1;
  } else i14 = 49; else {
   if (i10) {
    HEAP32[i27 + (i12 << 2) >> 2] = i9;
    i10 = i26 + (i12 << 3) | 0;
    i12 = HEAP32[i10 + 4 >> 2] | 0;
    i14 = i22;
    HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i14 + 4 >> 2] = i12;
    i14 = 49;
    break;
   }
   if (!i16) {
    i1 = 0;
    break L1;
   }
   _pop_arg(i22, i9, i25);
  } while (0);
  if ((i14 | 0) == 49) {
   i14 = 0;
   if (!i16) {
    i3 = 0;
    i2 = i13;
    continue;
   }
  }
  i5 = HEAP8[i5 >> 0] | 0;
  i5 = (i11 | 0) != 0 & (i5 & 15 | 0) == 3 ? i5 & -33 : i5;
  i10 = i6 & -65537;
  i12 = (i6 & 8192 | 0) == 0 ? i6 : i10;
  L71 : do switch (i5 | 0) {
  case 110:
   switch ((i11 & 255) << 24 >> 24) {
   case 0:
    {
     HEAP32[HEAP32[i22 >> 2] >> 2] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 1:
    {
     HEAP32[HEAP32[i22 >> 2] >> 2] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 2:
    {
     i3 = HEAP32[i22 >> 2] | 0;
     HEAP32[i3 >> 2] = i1;
     HEAP32[i3 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 3:
    {
     HEAP16[HEAP32[i22 >> 2] >> 1] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 4:
    {
     HEAP8[HEAP32[i22 >> 2] >> 0] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 6:
    {
     HEAP32[HEAP32[i22 >> 2] >> 2] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 7:
    {
     i3 = HEAP32[i22 >> 2] | 0;
     HEAP32[i3 >> 2] = i1;
     HEAP32[i3 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   default:
    {
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   }
  case 112:
   {
    i5 = 120;
    i4 = i4 >>> 0 > 8 ? i4 : 8;
    i2 = i12 | 8;
    i14 = 61;
    break;
   }
  case 88:
  case 120:
   {
    i2 = i12;
    i14 = 61;
    break;
   }
  case 111:
   {
    i5 = i22;
    i2 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i9 = _fmt_o(i2, i5, i17) | 0;
    i10 = i18 - i9 | 0;
    i6 = 0;
    i8 = 21673;
    i4 = (i12 & 8 | 0) == 0 | (i4 | 0) > (i10 | 0) ? i4 : i10 + 1 | 0;
    i10 = i12;
    i14 = 67;
    break;
   }
  case 105:
  case 100:
   {
    i5 = i22;
    i2 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    if ((i5 | 0) < 0) {
     i2 = _i64Subtract(0, 0, i2 | 0, i5 | 0) | 0;
     i5 = tempRet0;
     i6 = i22;
     HEAP32[i6 >> 2] = i2;
     HEAP32[i6 + 4 >> 2] = i5;
     i6 = 1;
     i8 = 21673;
     i14 = 66;
     break L71;
    } else {
     i6 = (i12 & 2049 | 0) != 0 & 1;
     i8 = (i12 & 2048 | 0) == 0 ? ((i12 & 1 | 0) == 0 ? 21673 : 21675) : 21674;
     i14 = 66;
     break L71;
    }
   }
  case 117:
   {
    i5 = i22;
    i6 = 0;
    i8 = 21673;
    i2 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i14 = 66;
    break;
   }
  case 99:
   {
    HEAP8[i19 >> 0] = HEAP32[i22 >> 2];
    i2 = i19;
    i6 = 0;
    i8 = 21673;
    i9 = i17;
    i5 = 1;
    i4 = i10;
    break;
   }
  case 109:
   {
    i5 = _strerror(HEAP32[(___errno_location() | 0) >> 2] | 0) | 0;
    i14 = 71;
    break;
   }
  case 115:
   {
    i5 = HEAP32[i22 >> 2] | 0;
    i5 = i5 | 0 ? i5 : 21683;
    i14 = 71;
    break;
   }
  case 67:
   {
    HEAP32[i23 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i20 >> 2] = 0;
    HEAP32[i22 >> 2] = i23;
    i9 = -1;
    i5 = i23;
    i14 = 75;
    break;
   }
  case 83:
   {
    i2 = HEAP32[i22 >> 2] | 0;
    if (!i4) {
     _pad_674(i15, 32, i3, 0, i12);
     i2 = 0;
     i14 = 84;
    } else {
     i9 = i4;
     i5 = i2;
     i14 = 75;
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
    i3 = _fmt_fp(i15, +HEAPF64[i22 >> 3], i3, i4, i12, i5) | 0;
    i2 = i13;
    continue L1;
   }
  default:
   {
    i6 = 0;
    i8 = 21673;
    i9 = i17;
    i5 = i4;
    i4 = i12;
   }
  } while (0);
  L95 : do if ((i14 | 0) == 61) {
   i12 = i22;
   i11 = HEAP32[i12 >> 2] | 0;
   i12 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = _fmt_x(i11, i12, i17, i5 & 32) | 0;
   i8 = (i2 & 8 | 0) == 0 | (i11 | 0) == 0 & (i12 | 0) == 0;
   i6 = i8 ? 0 : 2;
   i8 = i8 ? 21673 : 21673 + (i5 >> 4) | 0;
   i10 = i2;
   i2 = i11;
   i5 = i12;
   i14 = 67;
  } else if ((i14 | 0) == 66) {
   i9 = _fmt_u(i2, i5, i17) | 0;
   i10 = i12;
   i14 = 67;
  } else if ((i14 | 0) == 71) {
   i14 = 0;
   i12 = _memchr(i5, 0, i4) | 0;
   i11 = (i12 | 0) == 0;
   i2 = i5;
   i6 = 0;
   i8 = 21673;
   i9 = i11 ? i5 + i4 | 0 : i12;
   i5 = i11 ? i4 : i12 - i5 | 0;
   i4 = i10;
  } else if ((i14 | 0) == 75) {
   i14 = 0;
   i8 = i5;
   i2 = 0;
   i4 = 0;
   while (1) {
    i6 = HEAP32[i8 >> 2] | 0;
    if (!i6) break;
    i4 = _wctomb(i24, i6) | 0;
    if ((i4 | 0) < 0 | i4 >>> 0 > (i9 - i2 | 0) >>> 0) break;
    i2 = i4 + i2 | 0;
    if (i9 >>> 0 > i2 >>> 0) i8 = i8 + 4 | 0; else break;
   }
   if ((i4 | 0) < 0) {
    i1 = -1;
    break L1;
   }
   _pad_674(i15, 32, i3, i2, i12);
   if (!i2) {
    i2 = 0;
    i14 = 84;
   } else {
    i6 = 0;
    while (1) {
     i4 = HEAP32[i5 >> 2] | 0;
     if (!i4) {
      i14 = 84;
      break L95;
     }
     i4 = _wctomb(i24, i4) | 0;
     i6 = i4 + i6 | 0;
     if ((i6 | 0) > (i2 | 0)) {
      i14 = 84;
      break L95;
     }
     _out(i15, i24, i4);
     if (i6 >>> 0 >= i2 >>> 0) {
      i14 = 84;
      break;
     } else i5 = i5 + 4 | 0;
    }
   }
  } while (0);
  if ((i14 | 0) == 67) {
   i14 = 0;
   i5 = (i2 | 0) != 0 | (i5 | 0) != 0;
   i12 = (i4 | 0) != 0 | i5;
   i5 = ((i5 ^ 1) & 1) + (i18 - i9) | 0;
   i2 = i12 ? i9 : i17;
   i9 = i17;
   i5 = i12 ? ((i4 | 0) > (i5 | 0) ? i4 : i5) : i4;
   i4 = (i4 | 0) > -1 ? i10 & -65537 : i10;
  } else if ((i14 | 0) == 84) {
   i14 = 0;
   _pad_674(i15, 32, i3, i2, i12 ^ 8192);
   i3 = (i3 | 0) > (i2 | 0) ? i3 : i2;
   i2 = i13;
   continue;
  }
  i11 = i9 - i2 | 0;
  i10 = (i5 | 0) < (i11 | 0) ? i11 : i5;
  i12 = i10 + i6 | 0;
  i3 = (i3 | 0) < (i12 | 0) ? i12 : i3;
  _pad_674(i15, 32, i3, i12, i4);
  _out(i15, i8, i6);
  _pad_674(i15, 48, i3, i12, i4 ^ 65536);
  _pad_674(i15, 48, i10, i11, 0);
  _out(i15, i2, i11);
  _pad_674(i15, 32, i3, i12, i4 ^ 8192);
  i2 = i13;
 }
 L114 : do if ((i14 | 0) == 87) if (!i15) if (!i7) i1 = 0; else {
  i1 = 1;
  while (1) {
   i2 = HEAP32[i27 + (i1 << 2) >> 2] | 0;
   if (!i2) break;
   _pop_arg(i26 + (i1 << 3) | 0, i2, i25);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break L114;
   }
  }
  while (1) {
   if (HEAP32[i27 + (i1 << 2) >> 2] | 0) {
    i1 = -1;
    break L114;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break;
   }
  }
 } while (0);
 STACKTOP = i28;
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
 ___DOUBLE_BITS_675(d4) | 0;
 if ((tempRet0 | 0) < 0) {
  d4 = -d4;
  i20 = 1;
  i19 = 21690;
 } else {
  i20 = (i26 & 2049 | 0) != 0 & 1;
  i19 = (i26 & 2048 | 0) == 0 ? ((i26 & 1 | 0) == 0 ? 21691 : 21696) : 21693;
 }
 ___DOUBLE_BITS_675(d4) | 0;
 i21 = tempRet0 & 2146435072;
 do if (i21 >>> 0 < 2146435072 | (i21 | 0) == 2146435072 & 0 < 0) {
  d4 = +_frexpl(d4, i13) * 2.0;
  i1 = d4 != 0.0;
  if (i1) HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + -1;
  i15 = i18 | 32;
  if ((i15 | 0) == 97) {
   i10 = i18 & 32;
   i9 = (i10 | 0) == 0 ? i19 : i19 + 9 | 0;
   i8 = i20 | 2;
   i1 = 12 - i11 | 0;
   do if (!(i11 >>> 0 > 11 | (i1 | 0) == 0)) {
    d6 = 8.0;
    do {
     i1 = i1 + -1 | 0;
     d6 = d6 * 16.0;
    } while ((i1 | 0) != 0);
    if ((HEAP8[i9 >> 0] | 0) == 45) {
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
   i5 = (i11 | 0) < 1;
   i3 = (i26 & 8 | 0) == 0;
   i1 = i24;
   do {
    i21 = ~~d4;
    i2 = i1 + 1 | 0;
    HEAP8[i1 >> 0] = HEAPU8[21721 + i21 >> 0] | i10;
    d4 = (d4 - +(i21 | 0)) * 16.0;
    if ((i2 - i23 | 0) == 1) if (i3 & (i5 & d4 == 0.0)) i1 = i2; else {
     HEAP8[i2 >> 0] = 46;
     i1 = i1 + 2 | 0;
    } else i1 = i2;
   } while (d4 != 0.0);
   i21 = i1 - i23 | 0;
   i23 = i22 - i7 | 0;
   i22 = (i11 | 0) != 0 & (i21 + -2 | 0) < (i11 | 0) ? i11 + 2 | 0 : i21;
   i1 = i23 + i8 + i22 | 0;
   _pad_674(i25, 32, i27, i1, i26);
   _out(i25, i9, i8);
   _pad_674(i25, 48, i27, i1, i26 ^ 65536);
   _out(i25, i24, i21);
   _pad_674(i25, 48, i22 - i21 | 0, 0, 0);
   _out(i25, i7, i23);
   _pad_674(i25, 32, i27, i1, i26 ^ 8192);
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
   i5 = ((i5 | 0) % 9 | 0) + 1 | 0;
   if ((i5 | 0) < 9) {
    i7 = 10;
    do {
     i7 = i7 * 10 | 0;
     i5 = i5 + 1 | 0;
    } while ((i5 | 0) != 9);
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
   i1 = ((i14 ^ 1) & 1) + i2 | 0;
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
  _pad_674(i25, 32, i27, i1, i26);
  _out(i25, i19, i20);
  _pad_674(i25, 48, i27, i1, i26 ^ 65536);
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
   if (i12 | 0) _out(i25, 29861, 1);
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
   _pad_674(i25, 48, i2 + 9 | 0, 9, 0);
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
      _out(i25, 29861, 1);
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
   _pad_674(i25, 48, i2 + 18 | 0, 18, 0);
   _out(i25, i14, i22 - i14 | 0);
  }
  _pad_674(i25, 32, i27, i1, i26 ^ 8192);
 } else {
  i24 = (i18 & 32 | 0) != 0;
  i1 = i20 + 3 | 0;
  _pad_674(i25, 32, i27, i1, i26 & -65537);
  _out(i25, i19, i20);
  _out(i25, d4 != d4 | 0.0 != 0.0 ? (i24 ? 29855 : 21717) : i24 ? 21709 : 21713, 3);
  _pad_674(i25, 32, i27, i1, i26 ^ 8192);
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
    i3 = (i17 & 1) + i3 | 0;
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
    do {
     i4 = i4 * 10 | 0;
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != 9);
    HEAP32[i6 >> 2] = i4;
   }
   i3 = i3 + 1 | 0;
  }
  if ((i12 | 0) < 9) if ((i12 | 0) <= (i17 | 0) & (i17 | 0) < 18) {
   i2 = HEAP32[i27 >> 2] | 0;
   if ((i17 | 0) == 9) {
    d1 = +(i24 | 0) * +(i2 >>> 0);
    break;
   }
   if ((i17 | 0) < 9) {
    d1 = +(i24 | 0) * +(i2 >>> 0) / +(HEAP32[5796 + (8 - i17 << 2) >> 2] | 0);
    break;
   }
   i23 = i26 + 27 + (Math_imul(i17, -3) | 0) | 0;
   if ((i23 | 0) > 30 | (i2 >>> i23 | 0) == 0) {
    d1 = +(i24 | 0) * +(i2 >>> 0) * +(HEAP32[5796 + (i17 + -10 << 2) >> 2] | 0);
    break;
   }
  }
  i2 = (i17 | 0) % 9 | 0;
  if (!i2) {
   i2 = 0;
   i6 = 0;
  } else {
   i12 = (i17 | 0) > -1 ? i2 : i2 + 9 | 0;
   i8 = HEAP32[5796 + (8 - i12 << 2) >> 2] | 0;
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
     i4 = 0;
     while (1) {
      i6 = i4 + i18 & 127;
      if ((i6 | 0) == (i3 | 0)) {
       i4 = 2;
       i19 = 88;
       break;
      }
      i6 = HEAP32[i27 + (i6 << 2) >> 2] | 0;
      i7 = HEAP32[5828 + (i4 << 2) >> 2] | 0;
      if (i6 >>> 0 < i7 >>> 0) {
       i4 = 2;
       i19 = 88;
       break;
      }
      if (i6 >>> 0 > i7 >>> 0) break;
      i4 = i4 + 1 | 0;
      if ((i4 | 0) >= 2) {
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
  d5 = d13 * d1;
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
   i2 = ((i3 ^ 1) & 1) + i2 | 0;
   d1 = i3 ? d1 : d1 * .5;
   if ((i2 + 50 | 0) <= (i29 | 0)) if (!(d5 != 0.0 & (i9 & ((i7 | 0) != (i8 | 0) | i3)))) break;
   HEAP32[(___errno_location() | 0) >> 2] = 34;
  } while (0);
  d1 = +_scalbnl(d1, i2);
 } while (0);
 STACKTOP = i30;
 return +d1;
}
function _MetaData_Fill_TypeDef_(i25, i20, i21) {
 i25 = i25 | 0;
 i20 = i20 | 0;
 i21 = i21 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i22 = 0, i23 = 0, i24 = 0, i26 = 0, i27 = 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i26 = i27 + 8 | 0;
 i24 = i27;
 i2 = i25 + 4 | 0;
 i22 = HEAP32[i2 >> 2] | 0;
 HEAP8[i25 + 32 >> 0] = 1;
 HEAP32[i25 >> 2] = i25;
 i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i22, HEAP32[i25 + 20 >> 2] | 0, i20, i21) | 0;
 i23 = i25 + 40 | 0;
 HEAP32[i23 >> 2] = i1;
 if (!i1) i4 = 0; else {
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i4 = HEAP32[i1 + 48 >> 2] | 0;
 }
 i8 = i25 + 34 | 0;
 HEAP8[i8 >> 0] = _Type_IsValueType(i25) | 0;
 i16 = i25 + 28 | 0;
 i17 = i25 + 112 | 0;
 i9 = i25 + 24 | 0;
 i10 = i25 + 100 | 0;
 if (!(HEAP8[i25 + 58 >> 0] | 0)) {
  if (!(HEAP8[i25 + 33 >> 0] | 0)) {
   i2 = HEAP32[i16 >> 2] | 0;
   i1 = (HEAP32[i25 + 160 >> 2] | 0) - i2 | 0;
   HEAP32[i17 >> 2] = i1;
   i3 = (HEAP32[i25 + 156 >> 2] | 0) + -1 | 0;
  } else {
   i3 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i16 >> 2] | 0;
   i1 = 1 - i2 + (HEAP32[i3 + 48 >> 2] & 16777215 | 100663296) | 0;
   HEAP32[i17 >> 2] = i1;
   i3 = HEAP32[i3 + 40 >> 2] & 16777215 | 67108864;
  }
  HEAP32[i10 >> 2] = i3 + 1 - (HEAP32[i9 >> 2] | 0);
 } else {
  i2 = HEAP32[i16 >> 2] | 0;
  i1 = HEAP32[i17 >> 2] | 0;
 }
 i7 = i2 + -1 + i1 | 0;
 i19 = i25 + 57 | 0;
 if (!(HEAP8[i19 >> 0] | 0)) {
  i1 = i4;
  while (1) {
   if (i2 >>> 0 > i7 >>> 0) break;
   i4 = _MetaData_GetMethodDefFromDefRefOrSpec(i22, i2, i20, i21) | 0;
   HEAP32[i4 + 48 >> 2] = i25;
   i3 = HEAPU16[i4 + 14 >> 1] | 0;
   i6 = i4 + 56 | 0;
   if (!(i3 & 64)) i3 = -1; else {
    i5 = i1 + 1 | 0;
    if (!(i3 & 256)) {
     i3 = HEAP32[i23 >> 2] | 0;
     if (!i3) {
      i3 = i1;
      i1 = i5;
     } else {
      i3 = _FindVirtualOverriddenMethod(i3, i4) | 0;
      if (!i3) {
       i3 = i1;
       i1 = i5;
      } else i3 = HEAP32[i3 + 56 >> 2] | 0;
     }
    } else {
     i3 = i1;
     i1 = i5;
    }
   }
   HEAP32[i6 >> 2] = i3;
   i2 = i2 + 1 | 0;
  }
  i14 = i25 + 48 | 0;
  HEAP32[i14 >> 2] = i1;
  i7 = i25 + 68 | 0;
  i18 = i25 + 35 | 0;
  if (!(HEAP32[i7 >> 2] | 0)) if (!(HEAP8[i8 >> 0] | 0)) {
   HEAP8[i18 >> 0] = 5;
   HEAP32[i7 >> 2] = 4;
  }
  i4 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i10 >> 2] | 0;
  i8 = i4 + -1 + i1 | 0;
  if (i1 | 0) HEAP32[i25 + 104 >> 2] = _mallocForever(i1 << 2) | 0;
  i1 = HEAP32[i23 >> 2] | 0;
  if (!i1) i1 = 0; else i1 = HEAP32[i1 + 36 >> 2] | 0;
  i15 = i25 + 88 | 0;
  i9 = i25 + 104 | 0;
  i5 = 0;
  i6 = i4;
  while (1) {
   if (i6 >>> 0 > i8 >>> 0) break;
   i3 = _MetaData_GetFieldDefFromDefOrRef(i22, i6, i20, i21) | 0;
   i2 = HEAP16[i3 + 8 >> 1] | 0;
   if (!(i2 & 16)) {
    if (HEAP32[i15 >> 2] | 0) {
     i2 = _mallocForever(44) | 0;
     i13 = i2;
     i11 = i3;
     i12 = i13 + 44 | 0;
     do {
      HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
      i13 = i13 + 4 | 0;
      i11 = i11 + 4 | 0;
     } while ((i13 | 0) < (i12 | 0));
     i3 = i2;
     i2 = HEAP16[i2 + 8 >> 1] | 0;
    }
    if (!(i2 & 320)) {
     _MetaData_Fill_FieldDef(i25, i3, i1, i20);
     i1 = (HEAP32[i3 + 32 >> 2] | 0) + i1 | 0;
    } else _MetaData_Fill_FieldDef(i25, i3, 0, i20);
    HEAP32[(HEAP32[i9 >> 2] | 0) + (i5 << 2) >> 2] = i3;
   }
   i5 = i5 + 1 | 0;
   i6 = i6 + 1 | 0;
  }
  i2 = i25 + 36 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if (!i3) HEAP32[i2 >> 2] = i1; else i1 = i3;
  i2 = HEAP32[i7 >> 2] | 0;
  if (!i2) {
   HEAP8[i18 >> 0] = 7;
   HEAP32[i7 >> 2] = i1;
  } else i1 = i2;
  i2 = i25 + 64 | 0;
  if (!(HEAP32[i2 >> 2] | 0)) {
   HEAP32[i2 >> 2] = i1;
   i1 = 0;
   i5 = 0;
  } else {
   i1 = 0;
   i5 = 0;
  }
  while (1) {
   if (i4 >>> 0 > i8 >>> 0) break;
   i3 = _MetaData_GetFieldDefFromDefOrRef(i22, i4, i20, i21) | 0;
   i2 = HEAP16[i3 + 8 >> 1] | 0;
   if (i2 & 16) {
    if (HEAP32[i15 >> 2] | 0) {
     i2 = _mallocForever(44) | 0;
     i13 = i2;
     i11 = i3;
     i12 = i13 + 44 | 0;
     do {
      HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
      i13 = i13 + 4 | 0;
      i11 = i11 + 4 | 0;
     } while ((i13 | 0) < (i12 | 0));
     i3 = i2;
     i2 = HEAP16[i2 + 8 >> 1] | 0;
    }
    if (!(i2 & 320)) {
     _MetaData_Fill_FieldDef(i25, i3, i1, i20);
     i1 = (HEAP32[i3 + 32 >> 2] | 0) + i1 | 0;
    } else _MetaData_Fill_FieldDef(i25, i3, 0, i20);
    HEAP32[(HEAP32[i9 >> 2] | 0) + (i5 << 2) >> 2] = i3;
   }
   i5 = i5 + 1 | 0;
   i4 = i4 + 1 | 0;
  }
  if (i1 | 0) {
   i6 = _callocForever(1, i1) | 0;
   HEAP32[i25 + 52 >> 2] = i6;
   i3 = HEAP32[i10 >> 2] | 0;
   i2 = 0;
   while (1) {
    if (i2 >>> 0 >= i3 >>> 0) break;
    i4 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    if (HEAP16[i4 + 8 >> 1] & 16) {
     i5 = i4 + 40 | 0;
     if (!(HEAP32[i5 >> 2] | 0)) HEAP32[i5 >> 2] = i6 + (HEAP32[i4 + 28 >> 2] | 0);
    }
    i2 = i2 + 1 | 0;
   }
   HEAP32[i25 + 108 >> 2] = i1;
  }
  i3 = HEAP32[i16 >> 2] | 0;
  i1 = HEAP32[i17 >> 2] | 0;
  i8 = i3 + -1 + i1 | 0;
  i10 = i25 + 116 | 0;
  HEAP32[i10 >> 2] = _mallocForever(i1 << 2) | 0;
  i1 = _mallocForever(HEAP32[i14 >> 2] << 2) | 0;
  i7 = i25 + 44 | 0;
  HEAP32[i7 >> 2] = i1;
  i2 = HEAP32[i23 >> 2] | 0;
  if (i2 | 0) _memcpy(i1 | 0, HEAP32[i2 + 44 >> 2] | 0, HEAP32[i2 + 48 >> 2] << 2 | 0) | 0;
  i9 = i25 + 124 | 0;
  i6 = i25 + 60 | 0;
  i5 = 0;
  while (1) {
   if (i3 >>> 0 > i8 >>> 0) break;
   i1 = _MetaData_GetMethodDefFromDefRefOrSpec(i22, i3, i20, i21) | 0;
   if (HEAP32[i15 >> 2] | 0) {
    i2 = _mallocForever(68) | 0;
    i13 = i2;
    i11 = i1;
    i12 = i13 + 68 | 0;
    do {
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     i13 = i13 + 4 | 0;
     i11 = i11 + 4 | 0;
    } while ((i13 | 0) < (i12 | 0));
    i1 = i2;
   }
   i2 = HEAP16[i1 + 14 >> 1] | 0;
   i4 = i1 + 16 | 0;
   if (!(i2 & 16)) {
    if (HEAP32[i23 >> 2] | 0) if (!(_strcmp(HEAP32[i4 >> 2] | 0, 16280) | 0)) HEAP32[i9 >> 2] = i1;
   } else if (!(_strcmp(HEAP32[i4 >> 2] | 0, 16273) | 0)) HEAP32[i6 >> 2] = i1;
   if (i2 & 64) HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i1 + 56 >> 2] << 2) >> 2] = i1;
   HEAP32[(HEAP32[i10 >> 2] | 0) + (i5 << 2) >> 2] = i1;
   i3 = i3 + 1 | 0;
   i5 = i5 + 1 | 0;
  }
  L103 : do if (!(HEAP32[i9 >> 2] | 0)) {
   i1 = i23;
   while (1) {
    i1 = HEAP32[i1 >> 2] | 0;
    if (!i1) {
     i1 = 0;
     break L103;
    }
    i2 = HEAP32[i1 + 124 >> 2] | 0;
    if (!i2) i1 = i1 + 40 | 0; else break;
   }
   HEAP32[i9 >> 2] = i2;
   i1 = 0;
  } else i1 = 0; while (0);
  while (1) {
   if (i1 >>> 0 >= (HEAP32[i17 >> 2] | 0) >>> 0) break;
   _MetaData_Fill_MethodDef(i25, HEAP32[(HEAP32[i10 >> 2] | 0) + (i1 << 2) >> 2] | 0, i20, i21);
   i1 = i1 + 1 | 0;
  }
  L112 : do if (!(HEAP32[i25 + 8 >> 2] & 32)) {
   i1 = HEAP32[i23 >> 2] | 0;
   i7 = i25 + 72 | 0;
   if (!i1) i6 = 0; else {
    i6 = HEAP32[i1 + 72 >> 2] | 0;
    HEAP32[i7 >> 2] = i6;
   }
   i4 = i22 + 60 | 0;
   i9 = i25 + 80 | 0;
   i5 = 0;
   i3 = 1;
   while (1) {
    if (i3 >>> 0 > (HEAP32[i4 >> 2] | 0) >>> 0) break;
    i1 = i3 & 16777215 | 150994944;
    i17 = HEAP32[(_MetaData_GetTableRow(i22, i1) | 0) >> 2] | 0;
    if ((i17 | 0) == (HEAP32[i9 >> 2] | 0)) {
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
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
   i1 = HEAP32[i7 >> 2] | 0;
   if (i1 | 0) if (!(HEAP8[i19 >> 0] | 0)) {
    i1 = _mallocForever(i1 * 12 | 0) | 0;
    i7 = i25 + 76 | 0;
    HEAP32[i7 >> 2] = i1;
    if (i6 | 0) _memcpy(i1 | 0, HEAP32[(HEAP32[i23 >> 2] | 0) + 76 >> 2] | 0, i6 * 12 | 0) | 0;
    if (i5 | 0) {
     while (1) {
      if (i5 >>> 0 > i8 >>> 0) break L112;
      i1 = _MetaData_GetTableRow(i22, i5) | 0;
      if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i9 >> 2] | 0)) break;
      i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i22, HEAP32[i1 + 4 >> 2] | 0, i20, i21) | 0;
      if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
      i2 = HEAP32[i7 >> 2] | 0;
      HEAP32[i2 + (i6 * 12 | 0) >> 2] = i1;
      i3 = i1 + 48 | 0;
      i4 = i2 + (i6 * 12 | 0) + 4 | 0;
      HEAP32[i4 >> 2] = _mallocForever(HEAP32[i3 >> 2] << 2) | 0;
      HEAP32[i2 + (i6 * 12 | 0) + 8 >> 2] = 0;
      i2 = i1 + 44 | 0;
      i1 = 0;
      while (1) {
       if (i1 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) break;
       i19 = HEAP32[(_FindVirtualOverriddenMethod(i25, HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0) + 56 >> 2] | 0;
       HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] = i19;
       i1 = i1 + 1 | 0;
      }
      i6 = i6 + 1 | 0;
      i5 = i5 + 1 | 0;
     }
     _Crash(16289, i24);
    }
   }
  } while (0);
  if ((HEAP32[i23 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 120 >> 2] | 0)) HEAP8[i18 >> 0] = 1;
 }
 i1 = HEAP32[i25 + 120 >> 2] | 0;
 i3 = i25 + 16 | 0;
 if (!i1) i1 = HEAP32[i3 >> 2] | 0; else {
  while (1) {
   i2 = HEAP32[i1 + 120 >> 2] | 0;
   if (!i2) break; else i1 = i2;
  }
  i1 = HEAP32[i1 + 16 >> 2] | 0;
  HEAP32[i3 >> 2] = i1;
 }
 i25 = HEAP32[i25 + 12 >> 2] | 0;
 HEAP32[i26 >> 2] = i1;
 HEAP32[i26 + 4 >> 2] = i25;
 _log_f(2, 16318, i26);
 STACKTOP = i27;
 return;
}

function ___rem_pio2_large(i20, i2, i24, i21, i27) {
 i20 = i20 | 0;
 i2 = i2 | 0;
 i24 = i24 | 0;
 i21 = i21 | 0;
 i27 = i27 | 0;
 var d1 = 0.0, d3 = 0.0, i4 = 0, d5 = 0.0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i22 = 0, i23 = 0, i25 = 0, i26 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(560);
 i25 = i31 + 480 | 0;
 i22 = i31 + 320 | 0;
 i30 = i31 + 160 | 0;
 i28 = i31;
 i26 = HEAP32[5836 + (i27 << 2) >> 2] | 0;
 i10 = i21 + -1 | 0;
 i19 = (i24 + -3 | 0) / 24 | 0;
 i19 = (i19 | 0) > 0 ? i19 : 0;
 i23 = Math_imul(i19, -24) | 0;
 i4 = i24 + -24 + i23 | 0;
 if ((i26 + i10 | 0) >= 0) {
  i8 = i26 + i21 | 0;
  i6 = i19 - i10 | 0;
  i7 = 0;
  while (1) {
   if ((i6 | 0) < 0) d1 = 0.0; else d1 = +(HEAP32[5852 + (i6 << 2) >> 2] | 0);
   HEAPF64[i22 + (i7 << 3) >> 3] = d1;
   i7 = i7 + 1 | 0;
   if ((i7 | 0) == (i8 | 0)) break; else i6 = i6 + 1 | 0;
  }
 }
 i9 = (i21 | 0) > 0;
 i8 = 0;
 while (1) {
  if (i9) {
   i7 = i8 + i10 | 0;
   d1 = 0.0;
   i6 = 0;
   do {
    d1 = d1 + +HEAPF64[i20 + (i6 << 3) >> 3] * +HEAPF64[i22 + (i7 - i6 << 3) >> 3];
    i6 = i6 + 1 | 0;
   } while ((i6 | 0) != (i21 | 0));
  } else d1 = 0.0;
  HEAPF64[i28 + (i8 << 3) >> 3] = d1;
  if ((i8 | 0) < (i26 | 0)) i8 = i8 + 1 | 0; else break;
 }
 i14 = (i4 | 0) > 0;
 i15 = 24 - i4 | 0;
 i16 = 23 - i4 | 0;
 i17 = (i21 | 0) > 0;
 i18 = (i4 | 0) == 0;
 i6 = i26;
 L17 : while (1) {
  d1 = +HEAPF64[i28 + (i6 << 3) >> 3];
  i9 = (i6 | 0) > 0;
  if (i9) {
   i7 = i6;
   i8 = 0;
   while (1) {
    d5 = +(~~(d1 * 5.960464477539063e-08) | 0);
    HEAP32[i25 + (i8 << 2) >> 2] = ~~(d1 - d5 * 16777216.0);
    i13 = i7;
    i7 = i7 + -1 | 0;
    d1 = d5 + +HEAPF64[i28 + (i7 << 3) >> 3];
    if ((i13 | 0) <= 1) break; else i8 = i8 + 1 | 0;
   }
  }
  d1 = +_scalbn(d1, i4);
  d1 = d1 - +Math_floor(+(d1 * .125)) * 8.0;
  i7 = ~~d1;
  d1 = d1 - +(i7 | 0);
  do if (i14) {
   i13 = i25 + (i6 + -1 << 2) | 0;
   i8 = HEAP32[i13 >> 2] | 0;
   i29 = i8 >> i15;
   i8 = i8 - (i29 << i15) | 0;
   HEAP32[i13 >> 2] = i8;
   i8 = i8 >> i16;
   i7 = i29 + i7 | 0;
   i29 = 19;
  } else if (i18) {
   i8 = HEAP32[i25 + (i6 + -1 << 2) >> 2] >> 23;
   i29 = 19;
   break;
  } else if (!(d1 >= .5)) {
   i10 = 0;
   i13 = i7;
   break;
  } else {
   i8 = 2;
   i29 = 20;
   break;
  } while (0);
  if ((i29 | 0) == 19) {
   i29 = 0;
   if ((i8 | 0) > 0) i29 = 20; else {
    i10 = i8;
    i13 = i7;
   }
  }
  if ((i29 | 0) == 20) {
   i29 = 0;
   i13 = i7 + 1 | 0;
   if (i9) {
    i7 = 0;
    i12 = 0;
    do {
     i10 = i25 + (i12 << 2) | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if (!i7) if (!i11) i7 = 0; else {
      i7 = 1;
      i9 = 16777216;
      i29 = 23;
     } else {
      i9 = 16777215;
      i29 = 23;
     }
     if ((i29 | 0) == 23) {
      i29 = 0;
      HEAP32[i10 >> 2] = i9 - i11;
     }
     i12 = i12 + 1 | 0;
    } while ((i12 | 0) != (i6 | 0));
   } else i7 = 0;
   L42 : do if (i14) {
    switch (i4 | 0) {
    case 1:
     {
      i9 = 8388607;
      break;
     }
    case 2:
     {
      i9 = 4194303;
      break;
     }
    default:
     break L42;
    }
    i12 = i25 + (i6 + -1 << 2) | 0;
    HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & i9;
   } while (0);
   if ((i8 | 0) == 2) {
    d1 = 1.0 - d1;
    if (!i7) i10 = 2; else {
     i10 = 2;
     d1 = d1 - +_scalbn(1.0, i4);
    }
   } else i10 = i8;
  }
  if (!(d1 == 0.0)) {
   i29 = 42;
   break;
  }
  if ((i6 | 0) > (i26 | 0)) {
   i7 = 0;
   i8 = i6;
   do {
    i8 = i8 + -1 | 0;
    i7 = HEAP32[i25 + (i8 << 2) >> 2] | i7;
   } while ((i8 | 0) > (i26 | 0));
   if (!i7) i7 = 1; else {
    i29 = 41;
    break;
   }
  } else i7 = 1;
  while (1) if (!(HEAP32[i25 + (i26 - i7 << 2) >> 2] | 0)) i7 = i7 + 1 | 0; else break;
  i9 = i7 + i6 | 0;
  if ((i7 | 0) <= 0) {
   i6 = i9;
   continue;
  }
  while (1) {
   i8 = i6 + 1 | 0;
   i7 = i6 + i21 | 0;
   HEAPF64[i22 + (i7 << 3) >> 3] = +(HEAP32[5852 + (i8 + i19 << 2) >> 2] | 0);
   if (i17) {
    d1 = 0.0;
    i6 = 0;
    do {
     d1 = d1 + +HEAPF64[i20 + (i6 << 3) >> 3] * +HEAPF64[i22 + (i7 - i6 << 3) >> 3];
     i6 = i6 + 1 | 0;
    } while ((i6 | 0) != (i21 | 0));
   } else d1 = 0.0;
   HEAPF64[i28 + (i8 << 3) >> 3] = d1;
   if ((i8 | 0) < (i9 | 0)) i6 = i8; else {
    i6 = i9;
    continue L17;
   }
  }
 }
 if ((i29 | 0) == 41) while (1) {
  i29 = 0;
  i4 = i4 + -24 | 0;
  i6 = i6 + -1 | 0;
  if (!(HEAP32[i25 + (i6 << 2) >> 2] | 0)) i29 = 41; else {
   i9 = i6;
   break;
  }
 } else if ((i29 | 0) == 42) {
  d1 = +_scalbn(d1, 0 - i4 | 0);
  if (d1 >= 16777216.0) {
   d5 = +(~~(d1 * 5.960464477539063e-08) | 0);
   HEAP32[i25 + (i6 << 2) >> 2] = ~~(d1 - d5 * 16777216.0);
   i4 = i23 + i24 | 0;
   i6 = i6 + 1 | 0;
   d1 = d5;
  }
  HEAP32[i25 + (i6 << 2) >> 2] = ~~d1;
  i9 = i6;
 }
 i8 = (i9 | 0) > -1;
 if (i8) {
  d1 = +_scalbn(1.0, i4);
  i4 = i9;
  while (1) {
   HEAPF64[i28 + (i4 << 3) >> 3] = d1 * +(HEAP32[i25 + (i4 << 2) >> 2] | 0);
   if ((i4 | 0) > 0) {
    d1 = d1 * 5.960464477539063e-08;
    i4 = i4 + -1 | 0;
   } else break;
  }
  if (i8) {
   i6 = i9;
   while (1) {
    i7 = i9 - i6 | 0;
    i4 = 0;
    d1 = 0.0;
    while (1) {
     d1 = d1 + +HEAPF64[1024 + (i4 << 3) >> 3] * +HEAPF64[i28 + (i4 + i6 << 3) >> 3];
     if ((i4 | 0) >= (i26 | 0) | (i4 | 0) >= (i7 | 0)) break; else i4 = i4 + 1 | 0;
    }
    HEAPF64[i30 + (i7 << 3) >> 3] = d1;
    if ((i6 | 0) > 0) i6 = i6 + -1 | 0; else break;
   }
  }
 }
 switch (i27 | 0) {
 case 0:
  {
   if (i8) {
    d1 = 0.0;
    i4 = i9;
    while (1) {
     d1 = d1 + +HEAPF64[i30 + (i4 << 3) >> 3];
     if ((i4 | 0) > 0) i4 = i4 + -1 | 0; else break;
    }
   } else d1 = 0.0;
   d3 = (i10 | 0) == 0 ? d1 : -d1;
   i29 = 73;
   break;
  }
 case 2:
 case 1:
  {
   if (i8) {
    d1 = 0.0;
    i4 = i9;
    while (1) {
     d1 = d1 + +HEAPF64[i30 + (i4 << 3) >> 3];
     if ((i4 | 0) > 0) i4 = i4 + -1 | 0; else break;
    }
   } else d1 = 0.0;
   i6 = (i10 | 0) == 0;
   HEAPF64[i2 >> 3] = i6 ? d1 : -d1;
   d1 = +HEAPF64[i30 >> 3] - d1;
   if ((i9 | 0) >= 1) {
    i4 = 1;
    while (1) {
     d1 = d1 + +HEAPF64[i30 + (i4 << 3) >> 3];
     if ((i4 | 0) == (i9 | 0)) break; else i4 = i4 + 1 | 0;
    }
   }
   d3 = i6 ? d1 : -d1;
   i2 = i2 + 8 | 0;
   i29 = 73;
   break;
  }
 case 3:
  {
   if ((i9 | 0) > 0) {
    i4 = i9;
    d1 = +HEAPF64[i30 + (i9 << 3) >> 3];
    do {
     i29 = i4;
     i4 = i4 + -1 | 0;
     i28 = i30 + (i4 << 3) | 0;
     d5 = +HEAPF64[i28 >> 3];
     d3 = d1;
     d1 = d5 + d1;
     HEAPF64[i30 + (i29 << 3) >> 3] = d3 + (d5 - d1);
     HEAPF64[i28 >> 3] = d1;
    } while ((i29 | 0) > 1);
    i6 = (i9 | 0) > 1;
    if (i6) {
     i4 = i9;
     d1 = +HEAPF64[i30 + (i9 << 3) >> 3];
     do {
      i28 = i4;
      i4 = i4 + -1 | 0;
      i29 = i30 + (i4 << 3) | 0;
      d5 = +HEAPF64[i29 >> 3];
      d3 = d1;
      d1 = d5 + d1;
      HEAPF64[i30 + (i28 << 3) >> 3] = d3 + (d5 - d1);
      HEAPF64[i29 >> 3] = d1;
     } while ((i4 | 0) > 1);
     if (i6) {
      i4 = i9;
      d3 = 0.0;
      do {
       d3 = d3 + +HEAPF64[i30 + (i4 << 3) >> 3];
       i4 = i4 + -1 | 0;
      } while ((i4 | 0) > 1);
     } else d3 = 0.0;
    } else d3 = 0.0;
   } else d3 = 0.0;
   d5 = +HEAPF64[i30 >> 3];
   d1 = +HEAPF64[i30 + 8 >> 3];
   if (!i10) HEAPF64[i2 >> 3] = d5; else {
    HEAPF64[i2 >> 3] = -d5;
    d3 = -d3;
    d1 = -d1;
   }
   HEAPF64[i2 + 8 >> 3] = d1;
   i2 = i2 + 16 | 0;
   i29 = 73;
   break;
  }
 default:
  {}
 }
 if ((i29 | 0) == 73) HEAPF64[i2 >> 3] = d3;
 STACKTOP = i31;
 return i13 & 7 | 0;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (!i1) return;
 i3 = i1 + -8 | 0;
 i5 = HEAP32[9046] | 0;
 i1 = HEAP32[i1 + -4 >> 2] | 0;
 i2 = i1 & -8;
 i9 = i3 + i2 | 0;
 do if (!(i1 & 1)) {
  i4 = HEAP32[i3 >> 2] | 0;
  if (!(i1 & 3)) return;
  i7 = i3 + (0 - i4) | 0;
  i6 = i4 + i2 | 0;
  if (i7 >>> 0 < i5 >>> 0) return;
  if ((i7 | 0) == (HEAP32[9047] | 0)) {
   i1 = i9 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i8 = i7;
    i2 = i6;
    break;
   }
   HEAP32[9044] = i6;
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
    HEAP32[9042] = HEAP32[9042] & ~(1 << i3);
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
   i3 = 36472 + (i2 << 2) | 0;
   if ((i7 | 0) == (HEAP32[i3 >> 2] | 0)) {
    HEAP32[i3 >> 2] = i1;
    if (!i1) {
     HEAP32[9043] = HEAP32[9043] & ~(1 << i2);
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
  i1 = HEAP32[9047] | 0;
  if ((i9 | 0) == (HEAP32[9048] | 0)) {
   i9 = (HEAP32[9045] | 0) + i2 | 0;
   HEAP32[9045] = i9;
   HEAP32[9048] = i8;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   if ((i8 | 0) != (i1 | 0)) return;
   HEAP32[9047] = 0;
   HEAP32[9044] = 0;
   return;
  }
  if ((i9 | 0) == (i1 | 0)) {
   i9 = (HEAP32[9044] | 0) + i2 | 0;
   HEAP32[9044] = i9;
   HEAP32[9047] = i7;
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
    HEAP32[9042] = HEAP32[9042] & ~(1 << i3);
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
    i2 = 36472 + (i1 << 2) | 0;
    if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
     HEAP32[i2 >> 2] = i3;
     if (!i3) {
      HEAP32[9043] = HEAP32[9043] & ~(1 << i1);
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
  if ((i8 | 0) == (HEAP32[9047] | 0)) {
   HEAP32[9044] = i5;
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
  i3 = 36208 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[9042] | 0;
  i1 = 1 << i1;
  if (!(i2 & i1)) {
   HEAP32[9042] = i2 | i1;
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
 i4 = 36472 + (i1 << 2) | 0;
 HEAP32[i8 + 28 >> 2] = i1;
 HEAP32[i8 + 20 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = 0;
 i2 = HEAP32[9043] | 0;
 i3 = 1 << i1;
 do if (!(i2 & i3)) {
  HEAP32[9043] = i2 | i3;
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
 i9 = (HEAP32[9050] | 0) + -1 | 0;
 HEAP32[9050] = i9;
 if (!i9) i1 = 36624; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[9050] = -1;
 return;
}

function _dispose_chunk(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = i1 + i3 | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do if (!(i2 & 1)) {
  i4 = HEAP32[i1 >> 2] | 0;
  if (!(i2 & 3)) return;
  i6 = i1 + (0 - i4) | 0;
  i7 = i4 + i3 | 0;
  if ((i6 | 0) == (HEAP32[9047] | 0)) {
   i1 = i9 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i8 = i6;
    i2 = i7;
    break;
   }
   HEAP32[9044] = i7;
   HEAP32[i1 >> 2] = i2 & -2;
   HEAP32[i6 + 4 >> 2] = i7 | 1;
   HEAP32[i6 + i7 >> 2] = i7;
   return;
  }
  i3 = i4 >>> 3;
  if (i4 >>> 0 < 256) {
   i1 = HEAP32[i6 + 8 >> 2] | 0;
   i2 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i2 | 0) == (i1 | 0)) {
    HEAP32[9042] = HEAP32[9042] & ~(1 << i3);
    i8 = i6;
    i2 = i7;
    break;
   } else {
    HEAP32[i1 + 12 >> 2] = i2;
    HEAP32[i2 + 8 >> 2] = i1;
    i8 = i6;
    i2 = i7;
    break;
   }
  }
  i5 = HEAP32[i6 + 24 >> 2] | 0;
  i1 = HEAP32[i6 + 12 >> 2] | 0;
  do if ((i1 | 0) == (i6 | 0)) {
   i3 = i6 + 16 | 0;
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
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i8 + 12 >> 2] = i1;
   HEAP32[i1 + 8 >> 2] = i8;
  } while (0);
  if (!i5) {
   i8 = i6;
   i2 = i7;
  } else {
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   i3 = 36472 + (i2 << 2) | 0;
   if ((i6 | 0) == (HEAP32[i3 >> 2] | 0)) {
    HEAP32[i3 >> 2] = i1;
    if (!i1) {
     HEAP32[9043] = HEAP32[9043] & ~(1 << i2);
     i8 = i6;
     i2 = i7;
     break;
    }
   } else {
    HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i6 | 0) & 1) << 2) >> 2] = i1;
    if (!i1) {
     i8 = i6;
     i2 = i7;
     break;
    }
   }
   HEAP32[i1 + 24 >> 2] = i5;
   i2 = i6 + 16 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (i3 | 0) {
    HEAP32[i1 + 16 >> 2] = i3;
    HEAP32[i3 + 24 >> 2] = i1;
   }
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   if (!i2) {
    i8 = i6;
    i2 = i7;
   } else {
    HEAP32[i1 + 20 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i1;
    i8 = i6;
    i2 = i7;
   }
  }
 } else {
  i8 = i1;
  i2 = i3;
 } while (0);
 i1 = i9 + 4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (!(i4 & 2)) {
  i1 = HEAP32[9047] | 0;
  if ((i9 | 0) == (HEAP32[9048] | 0)) {
   i9 = (HEAP32[9045] | 0) + i2 | 0;
   HEAP32[9045] = i9;
   HEAP32[9048] = i8;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   if ((i8 | 0) != (i1 | 0)) return;
   HEAP32[9047] = 0;
   HEAP32[9044] = 0;
   return;
  }
  if ((i9 | 0) == (i1 | 0)) {
   i9 = (HEAP32[9044] | 0) + i2 | 0;
   HEAP32[9044] = i9;
   HEAP32[9047] = i8;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   HEAP32[i8 + i9 >> 2] = i9;
   return;
  }
  i6 = (i4 & -8) + i2 | 0;
  i3 = i4 >>> 3;
  do if (i4 >>> 0 < 256) {
   i2 = HEAP32[i9 + 8 >> 2] | 0;
   i1 = HEAP32[i9 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[9042] = HEAP32[9042] & ~(1 << i3);
    break;
   } else {
    HEAP32[i2 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i2;
    break;
   }
  } else {
   i5 = HEAP32[i9 + 24 >> 2] | 0;
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
   if (i5 | 0) {
    i1 = HEAP32[i9 + 28 >> 2] | 0;
    i2 = 36472 + (i1 << 2) | 0;
    if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
     HEAP32[i2 >> 2] = i3;
     if (!i3) {
      HEAP32[9043] = HEAP32[9043] & ~(1 << i1);
      break;
     }
    } else {
     HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) != (i9 | 0) & 1) << 2) >> 2] = i3;
     if (!i3) break;
    }
    HEAP32[i3 + 24 >> 2] = i5;
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
  HEAP32[i8 + 4 >> 2] = i6 | 1;
  HEAP32[i8 + i6 >> 2] = i6;
  if ((i8 | 0) == (HEAP32[9047] | 0)) {
   HEAP32[9044] = i6;
   return;
  } else i2 = i6;
 } else {
  HEAP32[i1 >> 2] = i4 & -2;
  HEAP32[i8 + 4 >> 2] = i2 | 1;
  HEAP32[i8 + i2 >> 2] = i2;
 }
 i1 = i2 >>> 3;
 if (i2 >>> 0 < 256) {
  i3 = 36208 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[9042] | 0;
  i1 = 1 << i1;
  if (!(i2 & i1)) {
   HEAP32[9042] = i2 | i1;
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
 i1 = i2 >>> 8;
 if (!i1) i1 = 0; else if (i2 >>> 0 > 16777215) i1 = 31; else {
  i7 = (i1 + 1048320 | 0) >>> 16 & 8;
  i9 = i1 << i7;
  i6 = (i9 + 520192 | 0) >>> 16 & 4;
  i9 = i9 << i6;
  i1 = (i9 + 245760 | 0) >>> 16 & 2;
  i1 = 14 - (i6 | i7 | i1) + (i9 << i1 >>> 15) | 0;
  i1 = i2 >>> (i1 + 7 | 0) & 1 | i1 << 1;
 }
 i5 = 36472 + (i1 << 2) | 0;
 HEAP32[i8 + 28 >> 2] = i1;
 HEAP32[i8 + 20 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = 0;
 i3 = HEAP32[9043] | 0;
 i4 = 1 << i1;
 if (!(i3 & i4)) {
  HEAP32[9043] = i3 | i4;
  HEAP32[i5 >> 2] = i8;
  HEAP32[i8 + 24 >> 2] = i5;
  HEAP32[i8 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i8;
  return;
 }
 i3 = i2 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
 i4 = HEAP32[i5 >> 2] | 0;
 while (1) {
  if ((HEAP32[i4 + 4 >> 2] & -8 | 0) == (i2 | 0)) {
   i1 = 69;
   break;
  }
  i5 = i4 + 16 + (i3 >>> 31 << 2) | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  if (!i1) {
   i1 = 68;
   break;
  } else {
   i3 = i3 << 1;
   i4 = i1;
  }
 }
 if ((i1 | 0) == 68) {
  HEAP32[i5 >> 2] = i8;
  HEAP32[i8 + 24 >> 2] = i4;
  HEAP32[i8 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i8;
  return;
 } else if ((i1 | 0) == 69) {
  i7 = i4 + 8 | 0;
  i9 = HEAP32[i7 >> 2] | 0;
  HEAP32[i9 + 12 >> 2] = i8;
  HEAP32[i7 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i9;
  HEAP32[i8 + 12 >> 2] = i4;
  HEAP32[i8 + 24 >> 2] = 0;
  return;
 }
}

function _hexfloat(i16, i20, i19, i21, i17) {
 i16 = i16 | 0;
 i20 = i20 | 0;
 i19 = i19 | 0;
 i21 = i21 | 0;
 i17 = i17 | 0;
 var d1 = 0.0, i2 = 0, i3 = 0, d4 = 0.0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = 0.0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i18 = 0;
 i18 = i16 + 4 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 i15 = i16 + 100 | 0;
 if (i2 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
  HEAP32[i18 >> 2] = i2 + 1;
  i2 = HEAPU8[i2 >> 0] | 0;
  i3 = 0;
 } else {
  i2 = ___shgetc(i16) | 0;
  i3 = 0;
 }
 L4 : while (1) {
  switch (i2 | 0) {
  case 46:
   {
    i7 = 8;
    break L4;
   }
  case 48:
   break;
  default:
   {
    i12 = 0;
    i13 = 0;
    d9 = 1.0;
    d1 = 0.0;
    i14 = 0;
    i11 = i3;
    i3 = 0;
    i10 = 0;
    i6 = 0;
    i5 = 0;
    break L4;
   }
  }
  i2 = HEAP32[i18 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
   HEAP32[i18 >> 2] = i2 + 1;
   i2 = HEAPU8[i2 >> 0] | 0;
   i3 = 1;
   continue;
  } else {
   i2 = ___shgetc(i16) | 0;
   i3 = 1;
   continue;
  }
 }
 if ((i7 | 0) == 8) {
  i2 = HEAP32[i18 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
   HEAP32[i18 >> 2] = i2 + 1;
   i2 = HEAPU8[i2 >> 0] | 0;
  } else i2 = ___shgetc(i16) | 0;
  if ((i2 | 0) == 48) {
   i5 = 0;
   i3 = 0;
   do {
    i2 = HEAP32[i18 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
     HEAP32[i18 >> 2] = i2 + 1;
     i2 = HEAPU8[i2 >> 0] | 0;
    } else i2 = ___shgetc(i16) | 0;
    i5 = _i64Add(i5 | 0, i3 | 0, -1, -1) | 0;
    i3 = tempRet0;
   } while ((i2 | 0) == 48);
   i12 = 1;
   i13 = 0;
   d9 = 1.0;
   d1 = 0.0;
   i14 = 0;
   i11 = 1;
   i10 = 0;
   i6 = 0;
  } else {
   i12 = 1;
   i13 = 0;
   d9 = 1.0;
   d1 = 0.0;
   i14 = 0;
   i11 = i3;
   i3 = 0;
   i10 = 0;
   i6 = 0;
   i5 = 0;
  }
 }
 while (1) {
  i7 = i2 + -48 | 0;
  i8 = (i2 | 0) == 46;
  if (i7 >>> 0 >= 10) if (!(i8 | ((i2 | 32) + -97 | 0) >>> 0 < 6)) break;
  if (i8) if (!i12) {
   i12 = 1;
   i7 = i13;
   d4 = d9;
   i2 = i14;
   i5 = i6;
   i3 = i10;
  } else {
   i2 = 46;
   break;
  } else {
   i2 = (i2 | 0) > 57 ? (i2 | 32) + -87 | 0 : i7;
   do if ((i10 | 0) < 0 | (i10 | 0) == 0 & i6 >>> 0 < 8) {
    i7 = i13;
    d4 = d9;
    i2 = i2 + (i14 << 4) | 0;
   } else if ((i10 | 0) < 0 | (i10 | 0) == 0 & i6 >>> 0 < 14) {
    d9 = d9 * .0625;
    i7 = i13;
    d4 = d9;
    d1 = d1 + d9 * +(i2 | 0);
    i2 = i14;
    break;
   } else {
    i2 = (i13 | 0) != 0 | (i2 | 0) == 0;
    i7 = i2 ? i13 : 1;
    d4 = d9;
    d1 = i2 ? d1 : d1 + d9 * .5;
    i2 = i14;
    break;
   } while (0);
   i6 = _i64Add(i6 | 0, i10 | 0, 1, 0) | 0;
   i11 = 1;
   i10 = tempRet0;
  }
  i8 = HEAP32[i18 >> 2] | 0;
  if (i8 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
   HEAP32[i18 >> 2] = i8 + 1;
   i13 = i7;
   d9 = d4;
   i14 = i2;
   i2 = HEAPU8[i8 >> 0] | 0;
   continue;
  } else {
   i13 = i7;
   d9 = d4;
   i14 = i2;
   i2 = ___shgetc(i16) | 0;
   continue;
  }
 }
 do if (!i11) {
  i2 = HEAP32[i15 >> 2] | 0;
  i3 = (i2 | 0) != 0;
  if (i3) HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + -1;
  if (!i17) ___shlim(i16, 0); else {
   if (i3) HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + -1;
   if (!((i12 | 0) == 0 | (i2 | 0) == 0)) HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + -1;
  }
  d1 = +(i21 | 0) * 0.0;
 } else {
  i7 = (i12 | 0) == 0;
  i8 = i7 ? i6 : i5;
  i7 = i7 ? i10 : i3;
  if ((i10 | 0) < 0 | (i10 | 0) == 0 & i6 >>> 0 < 8) {
   i3 = i14;
   i5 = i10;
   do {
    i3 = i3 << 4;
    i6 = _i64Add(i6 | 0, i5 | 0, 1, 0) | 0;
    i5 = tempRet0;
   } while ((i5 | 0) < 0 | (i5 | 0) == 0 & i6 >>> 0 < 8);
   i6 = i3;
  } else i6 = i14;
  if ((i2 | 32 | 0) == 112) {
   i3 = _scanexp(i16, i17) | 0;
   i2 = tempRet0;
   if ((i3 | 0) == 0 & (i2 | 0) == -2147483648) {
    if (!i17) {
     ___shlim(i16, 0);
     d1 = 0.0;
     break;
    }
    if (!(HEAP32[i15 >> 2] | 0)) {
     i3 = 0;
     i2 = 0;
    } else {
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + -1;
     i3 = 0;
     i2 = 0;
    }
   }
  } else if (!(HEAP32[i15 >> 2] | 0)) {
   i3 = 0;
   i2 = 0;
  } else {
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + -1;
   i3 = 0;
   i2 = 0;
  }
  i5 = _bitshift64Shl(i8 | 0, i7 | 0, 2) | 0;
  i5 = _i64Add(i5 | 0, tempRet0 | 0, -32, -1) | 0;
  i5 = _i64Add(i5 | 0, tempRet0 | 0, i3 | 0, i2 | 0) | 0;
  i2 = tempRet0;
  if (!i6) {
   d1 = +(i21 | 0) * 0.0;
   break;
  }
  i18 = 0 - i19 | 0;
  i17 = ((i18 | 0) < 0) << 31 >> 31;
  if ((i2 | 0) > (i17 | 0) | (i2 | 0) == (i17 | 0) & i5 >>> 0 > i18 >>> 0) {
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   d1 = +(i21 | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
   break;
  }
  i18 = i19 + -106 | 0;
  i17 = ((i18 | 0) < 0) << 31 >> 31;
  if ((i2 | 0) < (i17 | 0) | (i2 | 0) == (i17 | 0) & i5 >>> 0 < i18 >>> 0) {
   HEAP32[(___errno_location() | 0) >> 2] = 34;
   d1 = +(i21 | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
   break;
  }
  if ((i6 | 0) > -1) {
   i3 = i6;
   do {
    i18 = !(d1 >= .5);
    i3 = i3 << 1 | (i18 ^ 1) & 1;
    d1 = d1 + (i18 ? d1 : d1 + -1.0);
    i5 = _i64Add(i5 | 0, i2 | 0, -1, -1) | 0;
    i2 = tempRet0;
   } while ((i3 | 0) > -1);
   d9 = d1;
   i6 = i3;
  } else d9 = d1;
  i18 = ((i20 | 0) < 0) << 31 >> 31;
  i19 = _i64Subtract(32, 0, i19 | 0, ((i19 | 0) < 0) << 31 >> 31 | 0) | 0;
  i2 = _i64Add(i19 | 0, tempRet0 | 0, i5 | 0, i2 | 0) | 0;
  i19 = tempRet0;
  if ((i18 | 0) > (i19 | 0) | (i18 | 0) == (i19 | 0) & i20 >>> 0 > i2 >>> 0) if ((i2 | 0) > 0) i7 = 59; else {
   i3 = 0;
   i2 = 84;
   i7 = 61;
  } else {
   i2 = i20;
   i7 = 59;
  }
  if ((i7 | 0) == 59) if ((i2 | 0) < 53) {
   i3 = i2;
   i2 = 84 - i2 | 0;
   i7 = 61;
  } else {
   d4 = 0.0;
   d1 = +(i21 | 0);
  }
  if ((i7 | 0) == 61) {
   d1 = +(i21 | 0);
   d4 = +_copysignl(+_scalbn(1.0, i2), d1);
   i2 = i3;
  }
  i21 = (i6 & 1 | 0) == 0 & (d9 != 0.0 & (i2 | 0) < 32);
  d1 = d1 * (i21 ? 0.0 : d9) + (d4 + d1 * +(((i21 & 1) + i6 | 0) >>> 0)) - d4;
  if (!(d1 != 0.0)) HEAP32[(___errno_location() | 0) >> 2] = 34;
  d1 = +_scalbnl(d1, i5);
 } while (0);
 return +d1;
}

function _JIT_Prepare(i20, i17) {
 i20 = i20 | 0;
 i17 = i17 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i18 = 0, i19 = 0, i21 = 0, i22 = 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i3 = i22 + 8 | 0;
 i18 = i22;
 i15 = i22 + 16 | 0;
 i12 = i22 + 12 | 0;
 HEAP32[i18 >> 2] = _Sys_GetMethodDesc(i20) | 0;
 _log_f(2, 14283, i18);
 i16 = i20 + 4 | 0;
 i1 = HEAP32[i16 >> 2] | 0;
 i7 = (i17 | 0) != 0;
 if (i7) i21 = _malloc(28) | 0; else i21 = _mallocForever(28) | 0;
 HEAP32[i20 + 28 >> 2] = i21;
 i19 = HEAPU16[i20 + 12 >> 1] | 0;
 i14 = i20 + 48 | 0;
 i4 = i21 + 8 | 0;
 do if ((i19 & 4096 | 0) != 0 | (i19 & 3 | 0) == 3) {
  if (!(_strcmp(HEAP32[i20 + 16 >> 2] | 0, 14294) | 0)) {
   i1 = HEAP32[i14 >> 2] | 0;
   i13 = 8;
  } else {
   i1 = HEAP32[i20 + 44 >> 2] | 0;
   if (!i1) i1 = 0; else i13 = 8;
  }
  if ((i13 | 0) == 8) i1 = HEAP32[i1 + 68 >> 2] | 0;
  HEAP32[i4 >> 2] = i1;
  i19 = _mallocForever(16) | 0;
  HEAP32[i19 >> 2] = _Translate(6) | 0;
  HEAP32[i19 + 4 >> 2] = i20;
  HEAP32[i19 + 8 >> 2] = _InternalCall_Map(i20) | 0;
  HEAP32[i19 + 12 >> 2] = _Translate(1) | 0;
  HEAP32[i21 + 12 >> 2] = 0;
  HEAP32[i21 >> 2] = i19;
  HEAP32[i21 + 4 >> 2] = 0;
 } else {
  i19 = i21 + 4 | 0;
  if (HEAP16[i20 + 14 >> 1] & 8192) {
   i2 = _MetaData_GetImplMap(i1, HEAP32[i20 + 52 >> 2] | 0) | 0;
   i1 = _PInvoke_GetFunction(i1, i2) | 0;
   if (!i1) {
    HEAP32[i3 >> 2] = HEAP32[i2 + 8 >> 2];
    _Crash(14300, i3);
   }
   i3 = _mallocForever(16) | 0;
   HEAP32[i3 >> 2] = _Translate(40) | 0;
   HEAP32[i3 + 4 >> 2] = i1;
   HEAP32[i3 + 8 >> 2] = i20;
   HEAP32[i3 + 12 >> 2] = i2;
   HEAP32[i21 + 12 >> 2] = 0;
   i1 = HEAP32[i20 + 44 >> 2] | 0;
   if (!i1) i1 = 0; else i1 = HEAP32[i1 + 68 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   HEAP32[i21 >> 2] = i3;
   HEAP32[i19 >> 2] = 0;
   break;
  }
  i1 = HEAP32[i20 + 8 >> 2] | 0;
  i2 = i1 + 1 | 0;
  L23 : do if ((HEAP8[i1 >> 0] & 3) == 2) {
   HEAP32[i4 >> 2] = 8;
   i5 = (HEAPU8[i1 >> 0] | 0) >>> 2;
   i7 = 0;
   i4 = i2;
   i2 = i21 + 16 | 0;
   i1 = i21 + 20 | 0;
   i3 = i20 + 60 | 0;
   i13 = 35;
  } else {
   i9 = HEAP16[i1 >> 1] | 0;
   HEAP32[i4 >> 2] = HEAPU16[i1 + 2 >> 1];
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   i8 = i1 + ((HEAP8[i2 >> 0] & -16 & 255) >>> 2) | 0;
   i6 = i20 + 60 | 0;
   i1 = i21 + 20 | 0;
   i2 = i21 + 16 | 0;
   if (!(i9 & 8)) {
    i5 = i10;
    i7 = i11;
    i4 = i8;
    i3 = i6;
    i13 = 35;
   } else {
    i3 = i8 + (i10 + 3 & -4) | 0;
    i9 = i3 + 4 | 0;
    L27 : do if (!(HEAP8[i3 >> 0] & 64)) {
     i4 = ((HEAPU8[i3 + 1 >> 0] | 0) + -4 | 0) / 12 | 0;
     i3 = i4 * 24 | 0;
     if (i7) i7 = _malloc(i3) | 0; else i7 = _mallocForever(i3) | 0;
     HEAP32[i1 >> 2] = i7;
     i3 = i9;
     i5 = 0;
     while (1) {
      if ((i5 | 0) == (i4 | 0)) break L27;
      HEAP32[i7 + (i5 * 24 | 0) >> 2] = HEAPU16[i3 >> 1];
      HEAP32[i7 + (i5 * 24 | 0) + 4 >> 2] = HEAPU16[i3 + 2 >> 1];
      HEAP32[i7 + (i5 * 24 | 0) + 8 >> 2] = HEAPU8[i3 + 4 >> 0];
      HEAP32[i7 + (i5 * 24 | 0) + 12 >> 2] = HEAPU8[i3 + 6 >> 0] << 8 | HEAPU8[i3 + 5 >> 0];
      HEAP32[i7 + (i5 * 24 | 0) + 16 >> 2] = HEAPU8[i3 + 7 >> 0];
      HEAP32[i7 + (i5 * 24 | 0) + 20 >> 2] = HEAP32[i3 + 8 >> 2];
      i3 = i3 + 12 | 0;
      i5 = i5 + 1 | 0;
     }
    } else {
     i4 = ((((HEAP32[i3 >> 2] | 0) >>> 8) + -4 | 0) >>> 0) / 24 | 0;
     i5 = i4 * 24 | 0;
     if (i7) i3 = _malloc(i5) | 0; else i3 = _mallocForever(i5) | 0;
     HEAP32[i1 >> 2] = i3;
     _memcpy(i3 | 0, i9 | 0, i5 | 0) | 0;
    } while (0);
    HEAP32[i2 >> 2] = i4;
    i2 = 0;
    while (1) {
     if ((i2 | 0) == (i4 | 0)) {
      i9 = i10;
      i1 = i11;
      break L23;
     }
     i3 = HEAP32[i1 >> 2] | 0;
     if (!(HEAP32[i3 + (i2 * 24 | 0) >> 2] | 0)) {
      i9 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i16 >> 2] | 0, HEAP32[i3 + (i2 * 24 | 0) + 20 >> 2] | 0, HEAP32[(HEAP32[i14 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
      HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 * 24 | 0) + 20 >> 2] = i9;
     }
     i2 = i2 + 1 | 0;
    }
   }
  } while (0);
  if ((i13 | 0) == 35) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i9 = i5;
   i1 = i7;
   i8 = i4;
   i6 = i3;
  }
  i7 = i21 + 12 | 0;
  L51 : do if (!i1) {
   i3 = 0;
   i2 = 0;
   i1 = 0;
  } else {
   HEAP32[i15 >> 2] = _MetaData_GetBlob(HEAP32[(_MetaData_GetTableRow(HEAP32[i16 >> 2] | 0, i1) | 0) >> 2] | 0, i12) | 0;
   _MetaData_DecodeSigEntry(i15) | 0;
   i3 = _MetaData_DecodeSigEntry(i15) | 0;
   i5 = _malloc(i3 * 12 | 0) | 0;
   i1 = 0;
   i2 = 0;
   while (1) {
    if ((i2 | 0) == (i3 | 0)) {
     i3 = i5;
     i2 = i5;
     break L51;
    }
    i4 = _Type_GetTypeFromSig(HEAP32[i16 >> 2] | 0, i15, HEAP32[(HEAP32[i14 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
    if (!(HEAP8[i4 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i4, 0, 0);
    HEAP32[i5 + (i2 * 12 | 0) >> 2] = i4;
    HEAP32[i5 + (i2 * 12 | 0) + 4 >> 2] = i1;
    i13 = HEAP32[i4 + 68 >> 2] | 0;
    HEAP32[i5 + (i2 * 12 | 0) + 8 >> 2] = i13;
    i1 = i13 + i1 | 0;
    i2 = i2 + 1 | 0;
   }
  } while (0);
  HEAP32[i7 >> 2] = i1;
  HEAP32[i21 >> 2] = _JITit(i20, i8, i9, i3, i21, i17, i18) | 0;
  HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
  _free(i2);
 } while (0);
 STACKTOP = i22;
 return;
}

function _LoadSingleTable(i25, i26, i27, i28) {
 i25 = i25 | 0;
 i26 = i26 | 0;
 i27 = i27 | 0;
 i28 = i28 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64);
 i34 = i36 + 48 | 0;
 i33 = i36 + 40 | 0;
 i35 = i36 + 32 | 0;
 i32 = i36 + 8 | 0;
 i6 = i36;
 i29 = HEAP32[i25 + 24 + (i27 << 2) >> 2] | 0;
 i30 = HEAP32[3692 + (i27 << 2) >> 2] | 0;
 i31 = _strlen(i30) | 0;
 i7 = HEAP32[i28 >> 2] | 0;
 i5 = 36728 + i27 | 0;
 i1 = HEAP8[i5 >> 0] | 0;
 do if (!(i1 << 24 >> 24)) {
  i1 = 0;
  i2 = 0;
  L2 : while (1) {
   if ((i2 | 0) >= (i31 | 0)) {
    i2 = 9;
    break;
   }
   i3 = HEAP8[i30 + (i2 | 1) >> 0] | 0;
   switch (i3 | 0) {
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
     i2 = 7;
     break L2;
    }
   }
   i2 = i2 + 2 | 0;
  }
  if ((i2 | 0) == 7) {
   HEAP32[i6 >> 2] = i3;
   _Crash(15384, i6);
  } else if ((i2 | 0) == 9) {
   HEAP8[i5 >> 0] = i1;
   i4 = i1;
   break;
  }
 } else i4 = i1 & 255; while (0);
 i24 = _mallocForever(Math_imul(i4, i29) | 0) | 0;
 i14 = i25 + 424 | 0;
 i15 = i25 + 4 | 0;
 i16 = i25 + 426 | 0;
 i17 = i25 + 20 | 0;
 i18 = i25 + 425 | 0;
 i19 = i25 + 8 | 0;
 i20 = i25;
 i21 = i29 + -1 | 0;
 i22 = i27 << 24;
 i23 = 0;
 i3 = i7;
 i1 = i24;
 i2 = 0;
 L15 : while (1) {
  if ((i23 | 0) >= (i29 | 0)) {
   i2 = 53;
   break;
  }
  i10 = i23 + 1 | 0;
  i11 = (i23 | 0) == (i21 | 0) & 1;
  i12 = i10 & 16777215 | i22;
  i13 = 0;
  while (1) {
   if ((i13 | 0) >= (i31 | 0)) {
    i23 = i10;
    continue L15;
   }
   i4 = HEAP8[i30 + i13 >> 0] | 0;
   i9 = i4 & 255;
   i2 = i3 + 2 | 0;
   i5 = i3 + 4 | 0;
   L21 : do if ((i4 & 255) < 48) {
    if ((HEAP32[i25 + 24 + (i9 << 2) >> 2] | 0) >>> 0 < 65536) i3 = _GetU16(i3) | 0; else {
     i2 = i5;
     i3 = _GetU32_187(i3) | 0;
    }
    i4 = i3 | i9 << 24;
   } else do switch (i4 << 24 >> 24) {
   case 120:
    {
     i2 = i3;
     i4 = 0;
     break L21;
    }
   case 99:
    {
     i2 = i3 + 1 | 0;
     i4 = HEAPU8[i3 >> 0] | 0;
     break L21;
    }
   case 115:
    {
     i4 = _GetU16(i3) | 0;
     break L21;
    }
   case 105:
    {
     i2 = i5;
     i4 = _GetU32_187(i3) | 0;
     break L21;
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
     i4 = (i4 << 24 >> 24) + -48 | 0;
     i7 = HEAPU8[15324 + i4 >> 0] | 0;
     i6 = (1 << i7) + 255 & HEAPU8[i3 >> 0];
     i37 = HEAP8[(HEAP32[3640 + (i4 << 2) >> 2] | 0) + i6 >> 0] | 0;
     i8 = i37 << 24 >> 24;
     if ((i37 & 255) > 48) {
      i2 = 25;
      break L15;
     }
     if (!(HEAP8[i25 + 408 + i4 >> 0] | 0)) i3 = _GetU16(i3) | 0; else {
      i2 = i5;
      i3 = _GetU32_187(i3) | 0;
     }
     i4 = i3 >>> i7 | i8 << 24;
     break L21;
    }
   case 83:
    {
     if (!(HEAP8[i14 >> 0] | 0)) i3 = _GetU16(i3) | 0; else {
      i2 = i5;
      i3 = _GetU32_187(i3) | 0;
     }
     i4 = (HEAP32[i15 >> 2] | 0) + i3 | 0;
     break L21;
    }
   case 71:
    {
     if (!(HEAP8[i16 >> 0] | 0)) i3 = _GetU16(i3) | 0; else {
      i2 = i5;
      i3 = _GetU32_187(i3) | 0;
     }
     i4 = (HEAP32[i17 >> 2] | 0) + ((i3 << 4) + -16) | 0;
     break L21;
    }
   case 66:
    {
     if (!(HEAP8[i18 >> 0] | 0)) i3 = _GetU16(i3) | 0; else {
      i2 = i5;
      i3 = _GetU32_187(i3) | 0;
     }
     i4 = (HEAP32[i19 >> 2] | 0) + i3 | 0;
     break L21;
    }
   case 94:
    {
     i2 = i5;
     i4 = _RVA_FindData(i26, _GetU32_187(i3) | 0) | 0;
     break L21;
    }
   case 109:
    {
     i2 = i3;
     i4 = i20;
     break L21;
    }
   case 108:
    {
     i2 = i3;
     i4 = i11;
     break L21;
    }
   case 73:
    {
     i2 = i3;
     i4 = i12;
     break L21;
    }
   default:
    {
     i2 = 46;
     break L15;
    }
   } while (0); while (0);
   i3 = HEAP8[i30 + (i13 | 1) >> 0] | 0;
   switch (i3 | 0) {
   case 42:
    {
     HEAP32[i1 >> 2] = i4;
     i1 = i1 + 4 | 0;
     break;
    }
   case 115:
    {
     HEAP16[i1 >> 1] = i4;
     i1 = i1 + 2 | 0;
     break;
    }
   case 99:
    {
     HEAP8[i1 >> 0] = i4;
     i1 = i1 + 1 | 0;
     break;
    }
   case 120:
    break;
   default:
    {
     i2 = 51;
     break L15;
    }
   }
   i13 = i13 + 2 | 0;
   i3 = i2;
   i2 = i4;
  }
 }
 if ((i2 | 0) == 25) {
  HEAP32[i32 >> 2] = i27;
  HEAP32[i32 + 4 >> 2] = i23;
  HEAP32[i32 + 8 >> 2] = i13;
  HEAP32[i32 + 12 >> 2] = i9;
  HEAP32[i32 + 16 >> 2] = i6;
  HEAP32[i32 + 20 >> 2] = i8;
  _printf(15459, i32) | 0;
  _exit(1);
 } else if ((i2 | 0) == 46) {
  HEAP32[i35 >> 2] = i9;
  HEAP32[i35 + 4 >> 2] = i9;
  _Crash(15534, i35);
 } else if ((i2 | 0) == 51) {
  HEAP32[i33 >> 2] = i3;
  _Crash(15600, i33);
 } else if ((i2 | 0) == 53) {
  HEAP32[i34 >> 2] = i27;
  HEAP32[i34 + 4 >> 2] = i29;
  _log_f(1, 15662, i34);
  HEAP32[i28 >> 2] = i3;
  STACKTOP = i36;
  return i24 | 0;
 }
 return 0;
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
     if ((HEAP8[i4 >> 0] | 0) > -1) i3 = i4; else if (!(HEAP32[HEAP32[(___pthread_self_536() | 0) + 188 >> 2] >> 2] | 0)) i3 = i4; else do i3 = i3 + -1 | 0; while (i3 >>> 0 > i2 >>> 0 ? (HEAP8[i3 >> 0] & -64) << 24 >> 24 == -128 : 0);
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
   if ((i3 | 32 | 0) != (HEAP8[29846 + i2 >> 0] | 0)) break;
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
      if ((i3 | 32 | 0) != (HEAP8[29855 + i2 >> 0] | 0)) break L34;
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
   d3 = +HEAPF64[i9 >> 3];
   d2 = +HEAPF64[i9 + 8 >> 3];
   if (!i10) {
    HEAPF64[i13 >> 3] = d3;
    HEAPF64[i13 + 8 >> 3] = d2;
    break;
   } else {
    HEAPF64[i13 >> 3] = -d3;
    HEAPF64[i13 + 8 >> 3] = -d2;
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
 i13 = _opendir(i1 << 24 >> 24 ? i21 : 29861) | 0;
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
  i1 = (FUNCTION_TABLE_iii[i23 & 63](i21, i1) | 0 | i22 & 1 | 0) == 0;
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
  if (i2) if (FUNCTION_TABLE_iii[i23 & 63](i21, i1) | 0 | i22 & 1 | 0) {
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

function _try_realloc_chunk(i12, i10) {
 i12 = i12 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = i12 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 i1 = i9 & -8;
 i6 = i12 + i1 | 0;
 if (!(i9 & 3)) {
  if (i10 >>> 0 < 256) {
   i12 = 0;
   return i12 | 0;
  }
  if (i1 >>> 0 >= (i10 + 4 | 0) >>> 0) if ((i1 - i10 | 0) >>> 0 <= HEAP32[9162] << 1 >>> 0) return i12 | 0;
  i12 = 0;
  return i12 | 0;
 }
 if (i1 >>> 0 >= i10 >>> 0) {
  i1 = i1 - i10 | 0;
  if (i1 >>> 0 <= 15) return i12 | 0;
  i8 = i12 + i10 | 0;
  HEAP32[i11 >> 2] = i9 & 1 | i10 | 2;
  HEAP32[i8 + 4 >> 2] = i1 | 3;
  i11 = i8 + i1 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 1;
  _dispose_chunk(i8, i1);
  return i12 | 0;
 }
 if ((i6 | 0) == (HEAP32[9048] | 0)) {
  i8 = (HEAP32[9045] | 0) + i1 | 0;
  i1 = i8 - i10 | 0;
  i2 = i12 + i10 | 0;
  if (i8 >>> 0 <= i10 >>> 0) {
   i12 = 0;
   return i12 | 0;
  }
  HEAP32[i11 >> 2] = i9 & 1 | i10 | 2;
  HEAP32[i2 + 4 >> 2] = i1 | 1;
  HEAP32[9048] = i2;
  HEAP32[9045] = i1;
  return i12 | 0;
 }
 if ((i6 | 0) == (HEAP32[9047] | 0)) {
  i3 = (HEAP32[9044] | 0) + i1 | 0;
  if (i3 >>> 0 < i10 >>> 0) {
   i12 = 0;
   return i12 | 0;
  }
  i1 = i3 - i10 | 0;
  i2 = i9 & 1;
  if (i1 >>> 0 > 15) {
   i9 = i12 + i10 | 0;
   i8 = i9 + i1 | 0;
   HEAP32[i11 >> 2] = i2 | i10 | 2;
   HEAP32[i9 + 4 >> 2] = i1 | 1;
   HEAP32[i8 >> 2] = i1;
   i2 = i8 + 4 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -2;
   i2 = i9;
  } else {
   HEAP32[i11 >> 2] = i2 | i3 | 2;
   i2 = i12 + i3 + 4 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 1;
   i2 = 0;
   i1 = 0;
  }
  HEAP32[9044] = i1;
  HEAP32[9047] = i2;
  return i12 | 0;
 }
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 if (i2 & 2 | 0) {
  i12 = 0;
  return i12 | 0;
 }
 i7 = (i2 & -8) + i1 | 0;
 if (i7 >>> 0 < i10 >>> 0) {
  i12 = 0;
  return i12 | 0;
 }
 i8 = i7 - i10 | 0;
 i3 = i2 >>> 3;
 do if (i2 >>> 0 < 256) {
  i2 = HEAP32[i6 + 8 >> 2] | 0;
  i1 = HEAP32[i6 + 12 >> 2] | 0;
  if ((i1 | 0) == (i2 | 0)) {
   HEAP32[9042] = HEAP32[9042] & ~(1 << i3);
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
   i2 = 36472 + (i1 << 2) | 0;
   if ((i6 | 0) == (HEAP32[i2 >> 2] | 0)) {
    HEAP32[i2 >> 2] = i3;
    if (!i3) {
     HEAP32[9043] = HEAP32[9043] & ~(1 << i1);
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
 i1 = i9 & 1;
 if (i8 >>> 0 < 16) {
  HEAP32[i11 >> 2] = i7 | i1 | 2;
  i11 = i12 + i7 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 1;
  return i12 | 0;
 } else {
  i9 = i12 + i10 | 0;
  HEAP32[i11 >> 2] = i1 | i10 | 2;
  HEAP32[i9 + 4 >> 2] = i8 | 3;
  i11 = i9 + i8 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 1;
  _dispose_chunk(i9, i8);
  return i12 | 0;
 }
 return 0;
}

function _Reflection_MemberInfo_GetCustomAttributes(i5, i1, i6) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i19 = i20 + 16 | 0;
 i18 = i20 + 8 | 0;
 i3 = i20;
 i15 = i20 + 28 | 0;
 i16 = i20 + 24 | 0;
 i17 = i20 + 20 | 0;
 i2 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 i1 = _Heap_GetType(i5) | 0;
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 i13 = HEAP32[i14 + 72 >> 2] | 0;
 i1 = HEAP32[i1 + 12 >> 2] | 0;
 do if (!(_strcmp(i1, 17287) | 0)) i4 = i2 + 80 | 0; else if (!(_strcmp(i1, 21125) | 0)) {
  i4 = i5 + 16 | 0;
  break;
 } else {
  HEAP32[i3 >> 2] = i1;
  _Crash(17296, i3);
 } while (0);
 i12 = HEAP32[i4 >> 2] | 0;
 i1 = 0;
 i2 = 1;
 while (1) {
  if (i2 >>> 0 > i13 >>> 0) break;
  i1 = ((HEAP32[(_MetaData_GetTableRow(i14, i2 & 16777215 | 201326592) | 0) >> 2] | 0) == (i12 | 0) & 1) + i1 | 0;
  i2 = i2 + 1 | 0;
 }
 i11 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[(HEAP32[9026] | 0) + 212 >> 2] | 0, 0, 0) | 0, i1) | 0;
 HEAP32[i6 >> 2] = i11;
 i1 = 0;
 i9 = 1;
 L12 : while (1) {
  if (i9 >>> 0 > i13 >>> 0) {
   i1 = 34;
   break;
  }
  i2 = _MetaData_GetTableRow(i14, i9 & 16777215 | 201326592) | 0;
  if ((HEAP32[i2 >> 2] | 0) == (i12 | 0)) {
   i3 = _MetaData_GetMethodDefFromDefRefOrSpec(i14, HEAP32[i2 + 4 >> 2] | 0, 0, 0) | 0;
   i10 = _MetaData_GetTypeDefFromMethodDef(i3) | 0;
   if (!(HEAP8[i3 + 32 >> 0] | 0)) _MetaData_Fill_MethodDef(i10, i3, 0, 0);
   i8 = i1 + 1 | 0;
   i5 = _SystemArray_LoadElementAddress(i11, i1) | 0;
   HEAP32[i5 >> 2] = _Heap_AllocType(i10) | 0;
   i6 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 200 >> 2] | 0) | 0;
   HEAP32[i6 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i3 + 16 >> 2] | 0) | 0;
   HEAP32[i6 >> 2] = _Type_GetTypeObject(i10) | 0;
   HEAP32[i6 + 12 >> 2] = i3;
   HEAP32[i5 + 4 >> 2] = i6;
   i6 = HEAPU16[i3 + 34 >> 1] | 0;
   i7 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[HEAP32[9026] >> 2] | 0, 0, 0) | 0, i6 + -1 | 0) | 0;
   HEAP32[i5 + 8 >> 2] = i7;
   HEAP32[i16 >> 2] = _MetaData_GetBlob(HEAP32[i2 + 8 >> 2] | 0, i15) | 0;
   _MetaData_DecodeSigEntry(i16) | 0;
   i5 = i3 + 36 | 0;
   i4 = 0;
   while (1) {
    if (i4 >>> 0 >= i6 >>> 0) break;
    i2 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i4 * 12 | 0) >> 2] | 0;
    do if (!i4) _MetaData_DecodeSigEntry(i16) | 0; else {
     if (HEAP8[i2 + 34 >> 0] | 0) {
      HEAP32[i17 >> 2] = _Heap_Box(i2, HEAP32[i16 >> 2] | 0) | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + (HEAP32[i2 + 36 >> 2] | 0);
      _SystemArray_StoreElement(i7, i4 + -1 | 0, i17);
      break;
     }
     if ((i2 | 0) != (HEAP32[(HEAP32[9026] | 0) + 36 >> 2] | 0)) {
      i1 = 29;
      break L12;
     }
     i2 = _MetaData_DecodeSigEntryExt(i16, 0) | 0;
     if ((i2 | 0) == -1) HEAP32[i17 >> 2] = 0; else {
      i3 = _malloc(i2 + 1 | 0) | 0;
      i1 = 0;
      while (1) {
       if ((i1 | 0) == (i2 | 0)) break;
       i21 = HEAP32[i16 >> 2] | 0;
       HEAP8[i3 + i1 >> 0] = HEAP8[i21 >> 0] | 0;
       HEAP32[i16 >> 2] = i21 + 1;
       i1 = i1 + 1 | 0;
      }
      HEAP8[i3 + i2 >> 0] = 0;
      HEAP32[i17 >> 2] = _SystemString_FromCharPtrASCII(i3) | 0;
      _free(i3);
     }
     _SystemArray_StoreElement(i7, i4 + -1 | 0, i17);
    } while (0);
    i4 = i4 + 1 | 0;
   }
   if (_MetaData_DecodeSigEntry(i16) | 0) {
    i1 = 31;
    break;
   }
   i1 = i8;
  }
  i9 = i9 + 1 | 0;
 }
 if ((i1 | 0) == 29) {
  HEAP32[i18 >> 2] = HEAP32[i2 + 12 >> 2];
  _Crash(17349, i18);
 } else if ((i1 | 0) == 31) {
  HEAP32[i19 >> 2] = HEAP32[i10 + 12 >> 2];
  _Crash(17414, i19);
 } else if ((i1 | 0) == 34) {
  STACKTOP = i20;
  return 0;
 }
 return 0;
}

function _PInvoke_Call(i1, i16, i27, i2) {
 i1 = i1 | 0;
 i16 = i16 | 0;
 i27 = i27 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i28 = 0, i29 = 0, i30 = 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(160);
 i29 = i30 + 16 | 0;
 i22 = i30 + 8 | 0;
 i21 = i30;
 i20 = i30 + 88 | 0;
 i24 = i30 + 24 | 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i28 = HEAP32[i4 + 44 >> 2] | 0;
 i26 = HEAP32[i1 + 12 >> 2] | 0;
 i15 = HEAP32[i1 + 4 >> 2] | 0;
 i17 = i2 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i18 | 64;
 i19 = (i28 | 0) == 0;
 if (i19) i1 = 63; else {
  i1 = HEAP32[9026] | 0;
  if ((i28 | 0) == (HEAP32[i1 + 88 >> 2] | 0)) i1 = 61; else i1 = (i28 | 0) == (HEAP32[i1 + 92 >> 2] | 0) ? 62 : 63;
 }
 HEAP32[i20 >> 2] = _MetaData_GetModuleRefName(HEAP32[i4 + 4 >> 2] | 0, HEAP32[i26 + 12 >> 2] | 0) | 0;
 i14 = i20 + 4 | 0;
 HEAP32[i14 >> 2] = HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2];
 i13 = HEAPU16[i4 + 34 >> 1] | 0;
 i11 = i4 + 36 | 0;
 i10 = 0;
 i4 = 2;
 i2 = 0;
 i12 = 0;
 L5 : while (1) {
  if ((i10 | 0) == (i13 | 0)) break;
  i3 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i10 * 12 | 0) >> 2] | 0;
  i9 = i2 + 4 | 0;
  i8 = i4 + 1 | 0;
  i7 = i20 + (i4 << 2) | 0;
  i5 = i16 + i2 | 0;
  do if ((HEAP8[i3 + 35 >> 0] | 0) == 1) {
   HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
   i5 = 3;
   i4 = i8;
   i2 = i9;
   i3 = i12;
  } else {
   i6 = HEAP32[9026] | 0;
   if ((i3 | 0) == (HEAP32[i6 + 36 >> 2] | 0)) {
    i2 = HEAP32[i5 >> 2] | 0;
    if ((HEAP16[i26 >> 1] & 6) == 4) i2 = _ConvertStringToUnicode(i2) | 0; else i2 = _ConvertStringToANSI(i2) | 0;
    HEAP32[i24 + (i12 << 2) >> 2] = i2;
    HEAP32[i7 >> 2] = i2;
    i5 = 3;
    i4 = i8;
    i2 = i9;
    i3 = i12 + 1 | 0;
    break;
   }
   if ((i3 | 0) == (HEAP32[i6 + 40 >> 2] | 0)) {
    HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
    i5 = 3;
    i4 = i8;
    i2 = i9;
    i3 = i12;
    break;
   }
   if ((i3 | 0) == (HEAP32[i6 + 88 >> 2] | 0)) {
    i5 = 1;
    i2 = i9;
    i3 = i12;
   } else {
    if ((i3 | 0) != (HEAP32[i6 + 92 >> 2] | 0)) {
     i23 = 18;
     break L5;
    }
    i5 = 2;
    i2 = i2 + 8 | 0;
    i3 = i12;
   }
  } while (0);
  i9 = i5 << (i10 << 1) + 6 | i1;
  i10 = i10 + 1 | 0;
  i12 = i3;
  i1 = i9;
 }
 if ((i23 | 0) == 18) {
  HEAP32[i21 >> 2] = HEAP32[i3 + 12 >> 2];
  _Crash(17095, i21);
 }
 if ((i1 | 0) != 255) {
  HEAP32[i22 >> 2] = i1;
  _Crash(17146, i22);
 }
 i3 = FUNCTION_TABLE_iiii[i15 & 255](HEAP32[i20 >> 2] | 0, HEAP32[i14 >> 2] | 0, HEAP32[i20 + 8 >> 2] | 0) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i12 | 0)) break;
  _free(HEAP32[i24 + (i1 << 2) >> 2] | 0);
  i1 = i1 + 1 | 0;
 }
 HEAP32[i17 >> 2] = i18;
 do if (i19) i25 = 0; else {
  if ((HEAP8[i28 + 35 >> 0] | 0) == 1) {
   HEAP32[i27 >> 2] = i3;
   i25 = 4;
   break;
  }
  i1 = HEAP32[9026] | 0;
  i2 = i3;
  if ((i28 | 0) == (HEAP32[i1 + 36 >> 2] | 0)) if ((HEAP16[i26 >> 1] & 6) == 4) {
   HEAP32[i27 >> 2] = _SystemString_FromCharPtrUTF16(i3) | 0;
   i25 = 4;
   break;
  } else {
   HEAP32[i27 >> 2] = _SystemString_FromCharPtrASCII(i2) | 0;
   i25 = 4;
   break;
  }
  if ((i28 | 0) == (HEAP32[i1 + 40 >> 2] | 0)) {
   HEAP32[i27 >> 2] = i2;
   i25 = 4;
   break;
  }
  if ((i28 | 0) == (HEAP32[i1 + 88 >> 2] | 0)) {
   HEAPF64[i27 >> 3] = 0.0;
   i25 = 8;
   break;
  }
  if ((i28 | 0) == (HEAP32[i1 + 92 >> 2] | 0)) {
   HEAPF64[i27 >> 3] = 0.0;
   i25 = 8;
   break;
  } else {
   HEAP32[i29 >> 2] = HEAP32[i28 + 12 >> 2];
   _Crash(17242, i29);
  }
 } while (0);
 STACKTOP = i30;
 return i25 | 0;
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
  i4 = ___DOUBLE_BITS_272(d1) | 0;
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

function _CreateNewArrayType(i3, i4) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i5 = i7 + 8 | 0;
 HEAP32[i5 >> 2] = i4;
 i1 = HEAP32[9026] | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(HEAP8[i2 + 32 >> 0] | 0)) {
  _MetaData_Fill_TypeDef_(i2, 0, 0);
  i1 = HEAP32[9026] | 0;
 }
 _memcpy(i3 | 0, HEAP32[i1 + 4 >> 2] | 0, 132) | 0;
 HEAP32[i3 + 96 >> 2] = i4;
 HEAP8[i3 + 32 >> 0] = 1;
 if (!(HEAP8[38824] | 0)) _GetMethodDefs();
 i8 = i3 + 72 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i1 = i4 + 3 | 0;
 HEAP32[i8 >> 2] = i1;
 i1 = _mallocForever(i1 * 12 | 0) | 0;
 i8 = i3 + 76 | 0;
 _memcpy(i1 | 0, HEAP32[i8 >> 2] | 0, i4 * 12 | 0) | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = _Generics_GetGenericTypeFromCoreType(HEAP32[(HEAP32[9026] | 0) + 68 >> 2] | 0, 1, i5) | 0;
 HEAP32[i1 + (i4 * 12 | 0) >> 2] = i8;
 HEAP32[i1 + (i4 * 12 | 0) + 4 >> 2] = 0;
 i2 = i1 + (i4 * 12 | 0) + 8 | 0;
 HEAP32[i2 >> 2] = _mallocForever(HEAP32[i8 + 48 >> 2] << 2) | 0;
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9028] | 0, i3, 1, i5) | 0;
 HEAP32[HEAP32[i2 >> 2] >> 2] = i8;
 i2 = i4 + 1 | 0;
 i8 = _Generics_GetGenericTypeFromCoreType(HEAP32[(HEAP32[9026] | 0) + 72 >> 2] | 0, 1, i5) | 0;
 HEAP32[i1 + (i2 * 12 | 0) >> 2] = i8;
 HEAP32[i1 + (i2 * 12 | 0) + 4 >> 2] = 0;
 i8 = _mallocForever(HEAP32[i8 + 48 >> 2] << 2) | 0;
 i2 = i1 + (i2 * 12 | 0) + 8 | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i8 >> 2] = HEAP32[9029];
 HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] = HEAP32[9030];
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9031] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] = i8;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] = HEAP32[9032];
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9033] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] = i8;
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9034] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] = i8;
 i8 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9035] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] = i8;
 i4 = i4 + 2 | 0;
 i2 = _Generics_GetGenericTypeFromCoreType(HEAP32[(HEAP32[9026] | 0) + 76 >> 2] | 0, 1, i5) | 0;
 HEAP32[i1 + (i4 * 12 | 0) >> 2] = i2;
 HEAP32[i1 + (i4 * 12 | 0) + 4 >> 2] = 0;
 i4 = i1 + (i4 * 12 | 0) + 8 | 0;
 HEAP32[i4 >> 2] = _mallocForever(HEAP32[i2 + 48 >> 2] << 2) | 0;
 i2 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9036] | 0, i3, 1, i5) | 0;
 HEAP32[HEAP32[i4 >> 2] >> 2] = i2;
 i2 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9037] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] = i2;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] = HEAP32[9038];
 i2 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9039] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] = i2;
 i3 = _Generics_GetMethodDefFromCoreMethod(HEAP32[9040] | 0, i3, 1, i5) | 0;
 HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] = i3;
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i6 + 4 >> 2] = i5;
 _log_f(2, 20142, i6);
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
 i3 = HEAP32[9024] | 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[9025] = i3;
 L1 : while (1) {
  HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
  _log_f(1, 19945, i10);
  switch (_JIT_Execute(i3, 100) | 0) {
  case 1:
   {
    i1 = HEAP32[i3 + 24 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i11 + 4 >> 2] = i1;
    _log_f(1, 19967, i11);
    i2 = 36096;
    while (1) {
     i9 = HEAP32[i2 >> 2] | 0;
     i4 = i9 + 56 | 0;
     if ((i9 | 0) == (i3 | 0)) break; else i2 = i4;
    }
    HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
    _Thread_Delete(i3);
    i2 = 36096;
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
    i3 = HEAP32[9024] | 0;
    break;
   }
  case 3:
   {
    i8 = _msTime() | 0;
    i9 = (HEAP32[i3 + 44 >> 2] | 0) + 16 | 0;
    HEAP32[i9 >> 2] = i8;
    HEAP32[i9 + 4 >> 2] = tempRet0;
    break;
   }
  default:
   {}
  }
  i1 = -1;
  i2 = i3;
  while (1) {
   i4 = HEAP32[9024] | 0;
   do {
    i9 = HEAP32[i2 + 56 >> 2] | 0;
    i2 = (i9 | 0) == 0 ? i4 : i9;
   } while ((HEAP32[i2 + 12 >> 2] & -5 | 0) != 0);
   HEAP32[9025] = i2;
   i8 = i2 + 44 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (!i9) {
    i3 = i2;
    continue L1;
   }
   if ((HEAP32[i9 >> 2] | 0) > -1) {
    i7 = _msTime() | 0;
    i8 = HEAP32[i9 >> 2] | 0;
    i4 = i9 + 16 | 0;
    i4 = _i64Subtract(i7 | 0, tempRet0 | 0, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0) | 0;
    i4 = i8 - i4 | 0;
    if ((i4 | 0) < 1) {
     i3 = i2;
     continue L1;
    } else i1 = i4 >>> 0 < i1 >>> 0 ? i4 : i1;
   } else {
    i5 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i5 | 0) == 47) break;
    i6 = HEAP32[i2 + 20 >> 2] | 0;
    i7 = HEAP32[i6 + 24 >> 2] | 0;
    if (!(HEAP16[(HEAP32[i6 + 4 >> 2] | 0) + 14 >> 1] & 16)) {
     i1 = 4;
     i4 = HEAP32[i7 >> 2] | 0;
    } else {
     i1 = 0;
     i4 = 0;
    }
    if (!(FUNCTION_TABLE_iiiii[i5 & 63](i4, i7 + i1 | 0, HEAP32[i6 + 16 >> 2] | 0, i9) | 0)) i1 = 5; else {
     i15 = 26;
     break;
    }
   }
   if ((i2 | 0) == (i3 | 0)) {
    i15 = 28;
    break L1;
   }
  }
  if ((i15 | 0) == 26) {
   i15 = 0;
   _free(i9);
   HEAP32[i8 >> 2] = 0;
   i3 = i2;
   continue;
  }
  if (!(_Internal_Debugger_Resume_Check(0, 0, 0, i9) | 0)) {
   i15 = 22;
   break;
  }
  _free(i9);
  HEAP32[i8 >> 2] = 0;
  i3 = i2;
 }
 if ((i15 | 0) == 10) _log_f(1, 20007, i13); else if ((i15 | 0) == 22) {
  HEAP32[i14 >> 2] = HEAP32[i2 >> 2];
  _log_f(1, 20042, i14);
  i1 = 0;
 } else if ((i15 | 0) == 28) _log_f(1, 20102, i12);
 STACKTOP = i16;
 return i1 | 0;
}

function _Generics_GetGenericTypeFromCoreType(i8, i9, i10) {
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 2064 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(2064);
 i7 = i13;
 i11 = i13 + 8 | 0;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 if (!(HEAP8[i8 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i8, 0, 0);
 i2 = i8 + 84 | 0;
 i3 = i9 << 2;
 i1 = i2;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
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
  HEAP32[i4 + 4 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i2 >> 2] = i4;
  HEAP32[i4 + 8 >> 2] = i9;
  i5 = i4 + 12 | 0;
  _memcpy(i5 | 0, i10 | 0, i3 | 0) | 0;
  i1 = _callocForever(1, 132) | 0;
  HEAP32[i4 >> 2] = i1;
  _strcpy(i11, HEAP32[i8 + 12 >> 2] | 0) | 0;
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
     i2 = HEAP32[i2 + 8 >> 2] | 0;
     _memcpy(i3 | 0, i2 | 0, (_strlen(i2) | 0) + 1 | 0) | 0;
     break;
    }
   } else {
    i3 = i11 + (_strlen(i11) | 0) | 0;
    i14 = HEAP32[i2 + 12 >> 2] | 0;
    HEAP32[i7 >> 2] = HEAP32[i2 + 16 >> 2];
    HEAP32[i7 + 4 >> 2] = i14;
    _sprintf(i3, 12613, i7) | 0;
   } while (0);
   i4 = i4 + 1 | 0;
  }
  i2 = i11 + (_strlen(i11) | 0) | 0;
  HEAP8[i2 >> 0] = 62;
  HEAP8[i2 + 1 >> 0] = 0;
  HEAP32[i1 >> 2] = i1;
  HEAP32[i1 + 4 >> 2] = i6;
  HEAP32[i1 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i1 + 88 >> 2] = i8;
  i2 = 0;
  while (1) {
   if (i2 >>> 0 >= i9 >>> 0) break;
   if (!(HEAP32[i10 + (i2 << 2) >> 2] | 0)) {
    i12 = 22;
    break;
   } else i2 = i2 + 1 | 0;
  }
  if ((i12 | 0) == 22) HEAP8[i1 + 57 >> 0] = 1;
  HEAP32[i1 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
  i14 = _mallocForever((_strlen(i11) | 0) + 1 | 0) | 0;
  HEAP32[i1 + 12 >> 2] = i14;
  _strcpy(i14, i11) | 0;
  HEAP32[i1 + 92 >> 2] = i5;
  HEAP32[i1 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
  HEAP32[i1 + 80 >> 2] = HEAP32[i8 + 80 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
  HEAP32[i1 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
  HEAP32[i1 + 100 >> 2] = HEAP32[i8 + 100 >> 2];
  HEAP32[i1 + 112 >> 2] = HEAP32[i8 + 112 >> 2];
  HEAP32[i1 + 48 >> 2] = HEAP32[i8 + 48 >> 2];
  HEAP32[i1 + 120 >> 2] = HEAP32[i8 + 120 >> 2];
  HEAP8[i1 + 58 >> 0] = 1;
  _MetaData_Fill_TypeDef_(i1, i10, 0);
 }
 STACKTOP = i13;
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
    if (i1 >>> 0 < i6 >>> 0) i1 = ((HEAP8[i5 + i1 >> 0] | 0) == 93 & 1) + i1 | 0;
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

function _LoadPEFile(i5) {
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i12 = i15 + 8 | 0;
 i8 = i15;
 i1 = _mallocForever(24) | 0;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = _RVA() | 0;
 i14 = _MetaData() | 0;
 HEAP32[i1 + 20 >> 2] = i14;
 i2 = i5 + (HEAP32[i5 + 60 >> 2] | 0) + 4 | 0;
 i6 = i2 + 20 | 0;
 i7 = i6 + 224 | 0;
 L1 : do if ((HEAP16[i2 >> 1] | 0) == 332) {
  i3 = HEAPU16[i2 + 2 >> 1] | 0;
  i2 = 0;
  while (1) {
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) break;
   _RVA_Create(i4, i5, i7 + (i2 * 40 | 0) | 0) | 0;
   i2 = i2 + 1 | 0;
  }
  i6 = _RVA_FindData(i4, HEAP32[i6 + 208 >> 2] | 0) | 0;
  i10 = HEAP32[i6 + 8 >> 2] | 0;
  HEAP32[i1 + 16 >> 2] = HEAP32[i6 + 20 >> 2];
  i10 = _RVA_FindData(HEAP32[i11 >> 2] | 0, i10) | 0;
  i6 = HEAP32[i10 + 12 >> 2] | 0;
  i9 = i10 + 16 | 0;
  HEAP32[i1 + 12 >> 2] = i9;
  HEAP32[i8 >> 2] = i9;
  _log_f(1, 12217, i8);
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
   do if (!(_strcasecmp(i4, 12234) | 0)) _MetaData_LoadStrings(i14, i5, i7); else {
    if (!(_strcasecmp(i4, 12243) | 0)) {
     _MetaData_LoadUserStrings(i14, i5, i7);
     break;
    }
    if (!(_strcasecmp(i4, 12247) | 0)) {
     _MetaData_LoadBlobs(i14, i5, i7);
     break;
    }
    if (!(_strcasecmp(i4, 12253) | 0)) {
     _MetaData_LoadGUIDs(i14, i5, i7);
     break;
    } else {
     i4 = (_strcasecmp(i4, 12259) | 0) == 0;
     i3 = i4 ? i5 : i3;
     i2 = i4 ? i7 : i2;
     break;
    }
   } while (0);
   i8 = i8 + 1 | 0;
  }
  if (i3 | 0) _MetaData_LoadTables(i14, HEAP32[i11 >> 2] | 0, i3, i2);
  i2 = HEAP32[i14 + 192 >> 2] | 0;
  L27 : while (1) {
   if ((i2 | 0) <= 0) break;
   i4 = HEAP32[(_MetaData_GetTableRow(i14, i2 & 16777215 | 704643072) | 0) + 4 >> 2] | 0;
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
     i13 = 23;
     break L27;
    }
   }
   HEAP8[(_MetaData_GetTableRow(i14, i4) | 0) + i3 >> 0] = 1;
   i2 = i2 + -1 | 0;
  }
  if ((i13 | 0) == 23) {
   HEAP32[i12 >> 2] = i4;
   _Crash(12262, i12);
  }
  i2 = HEAP32[i14 + 188 >> 2] | 0;
  while (1) {
   if ((i2 | 0) <= 0) break L1;
   i13 = _MetaData_GetTableRow(i14, i2 & 16777215 | 687865856) | 0;
   i12 = _MetaData_GetTableRow(i14, HEAP32[i13 + 4 >> 2] | 0) | 0;
   HEAP32[(_MetaData_GetTableRow(i14, HEAP32[i13 >> 2] | 0) | 0) + 120 >> 2] = i12;
   i2 = i2 + -1 | 0;
  }
 } else i1 = 0; while (0);
 STACKTOP = i15;
 return i1 | 0;
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

function _glob(i6, i12, i5, i13) {
 i6 = i6 | 0;
 i12 = i12 | 0;
 i5 = i5 | 0;
 i13 = i13 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i11 = i14;
 i8 = i14 + 8 | 0;
 i9 = i11;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = i11;
 if (!(i12 & 8)) i2 = 0; else i2 = HEAP32[i13 + 8 >> 2] | 0;
 i3 = HEAP8[i6 >> 0] | 0;
 if (i3 << 24 >> 24 == 47) {
  i1 = i6;
  do {
   i1 = i1 + 1 | 0;
   i3 = HEAP8[i1 >> 0] | 0;
  } while (i3 << 24 >> 24 == 47);
  i4 = 29859;
 } else {
  i4 = 39857;
  i1 = i6;
 }
 L8 : do if ((_strlen(i1) | 0) >>> 0 > 4096) i1 = 1; else {
  i7 = (i12 & 32 | 0) != 0;
  if (!i7) {
   HEAP32[i13 + 8 >> 2] = i2;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   i3 = HEAP8[i1 >> 0] | 0;
  }
  if (!(i3 << 24 >> 24)) {
   HEAP32[i8 >> 2] = 0;
   i1 = 0;
   i3 = i11;
   i4 = i8;
   i10 = 15;
  } else {
   i1 = _match_in_dir(i4, i1, i12, (i5 | 0) == 0 ? 42 : i5, i8) | 0;
   if ((i1 | 0) == 1) {
    _freelist(i11);
    i1 = 1;
    break;
   }
   i3 = HEAP32[i11 >> 2] | 0;
   HEAP32[i8 >> 2] = i3;
   if (!i3) {
    i3 = i11;
    i4 = i8;
    i10 = 15;
   } else {
    i4 = 0;
    do {
     i3 = HEAP32[i3 >> 2] | 0;
     HEAP32[i8 >> 2] = i3;
     i4 = i4 + 1 | 0;
    } while ((i3 | 0) != 0);
    if (!i4) {
     i3 = i11;
     i4 = i8;
     i10 = 15;
    } else {
     i9 = i4;
     i6 = i11;
    }
   }
  }
  if ((i10 | 0) == 15) {
   if (!(i12 & 16)) {
    i1 = 3;
    break;
   }
   HEAP32[i8 >> 2] = i11;
   if (!(_append(i8, i6, _strlen(i6) | 0, 0) | 0)) {
    i9 = 1;
    i6 = i3;
    i8 = i4;
   } else {
    i1 = 1;
    break;
   }
  }
  do if (i7) {
   i3 = i13 + 4 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) + i2 | 0;
   i4 = _realloc(HEAP32[i3 >> 2] | 0, (i2 + i9 << 2) + 4 | 0) | 0;
   if (!i4) {
    _freelist(i11);
    i1 = 1;
    break L8;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  } else {
   i4 = _malloc((i9 + i2 << 2) + 4 | 0) | 0;
   i5 = i13 + 4 | 0;
   HEAP32[i5 >> 2] = i4;
   if (!i4) {
    _freelist(i11);
    i1 = 1;
    break L8;
   }
   if (!i2) {
    i2 = 0;
    i3 = i5;
   } else {
    _memset(i4 | 0, 0, i2 << 2 | 0) | 0;
    i3 = i5;
    i4 = HEAP32[i5 >> 2] | 0;
   }
  } while (0);
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i8 >> 2] = i5;
  i7 = HEAP32[i3 >> 2] | 0;
  i6 = 0;
  i3 = i5;
  i5 = i4;
  i4 = i2;
  while (1) {
   HEAP32[i5 + (i4 << 2) >> 2] = i3 + 4;
   i3 = HEAP32[i3 >> 2] | 0;
   HEAP32[i8 >> 2] = i3;
   i4 = i6 + 1 | 0;
   if (i4 >>> 0 < i9 >>> 0) {
    i6 = i4;
    i5 = i7;
    i4 = i4 + i2 | 0;
   } else break;
  }
  HEAP32[i7 + (i2 + i9 << 2) >> 2] = 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i9;
  if (!(i12 & 4)) _qsort(i7 + (i2 << 2) | 0, i9, 4, 43);
 } while (0);
 STACKTOP = i14;
 return i1 | 0;
}

function _Type_GetTypeFromSig(i2, i3, i7, i6) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i7 = i7 | 0;
 i6 = i6 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i9;
 i4 = _MetaData_DecodeSigEntry(i3) | 0;
 L1 : do switch (i4 | 0) {
 case 1:
  {
   i1 = 0;
   break;
  }
 case 2:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 12 >> 2] | 0;
   break;
  }
 case 3:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 24 >> 2] | 0;
   break;
  }
 case 4:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 20 >> 2] | 0;
   break;
  }
 case 5:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 16 >> 2] | 0;
   break;
  }
 case 6:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 28 >> 2] | 0;
   break;
  }
 case 7:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 56 >> 2] | 0;
   break;
  }
 case 8:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 32 >> 2] | 0;
   break;
  }
 case 10:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 96 >> 2] | 0;
   break;
  }
 case 11:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 100 >> 2] | 0;
   break;
  }
 case 9:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 52 >> 2] | 0;
   break;
  }
 case 12:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 88 >> 2] | 0;
   break;
  }
 case 13:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 92 >> 2] | 0;
   break;
  }
 case 14:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 36 >> 2] | 0;
   break;
  }
 case 15:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 180 >> 2] | 0;
   break;
  }
 case 16:
  {
   _Type_GetTypeFromSig(i2, i3, i7, i6) | 0;
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
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i2, _MetaData_DecodeSigEntryToken(i3) | 0, i7, i6) | 0;
   break;
  }
 case 19:
  {
   i1 = _MetaData_DecodeSigEntry(i3) | 0;
   if (!i7) i1 = 0; else i1 = HEAP32[i7 + (i1 << 2) >> 2] | 0;
   break;
  }
 case 21:
  {
   i1 = _Generics_GetGenericTypeFromSig(i2, i3, i7, i6) | 0;
   break;
  }
 case 25:
  {
   i1 = HEAP32[(HEAP32[9026] | 0) + 180 >> 2] | 0;
   break;
  }
 case 28:
  {
   i1 = HEAP32[HEAP32[9026] >> 2] | 0;
   break;
  }
 case 29:
  {
   i8 = _Type_GetArrayTypeDef(_Type_GetTypeFromSig(i2, i3, i7, i6) | 0, 0, 0) | 0;
   STACKTOP = i9;
   return i8 | 0;
  }
 case 30:
  {
   i1 = _MetaData_DecodeSigEntry(i3) | 0;
   if (i6 | 0) {
    i1 = HEAP32[i6 + (i1 << 2) >> 2] | 0;
    break L1;
   }
   if (!i7) i1 = 0; else i1 = HEAP32[i7 + (i1 << 2) >> 2] | 0;
   break;
  }
 default:
  {
   HEAP32[i5 >> 2] = i4;
   _Crash(20488, i5);
  }
 } while (0);
 if ((i8 | 0) == 17) i1 = HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0;
 STACKTOP = i9;
 return i1 | 0;
}

function _FindMethodInType(i9, i10, i13, i8, i14, i15) {
 i9 = i9 | 0;
 i10 = i10 | 0;
 i13 = i13 | 0;
 i8 = i8 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i11 = 0, i12 = 0, i16 = 0, i17 = 0, i18 = 0;
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
   if (i2 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) break;
   i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0;
   if (!(_MetaData_CompareNameAndSig(i10, i8, i13, i14, i15, i4, HEAP32[(HEAP32[i4 + 48 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i4 + 60 >> 2] | 0) | 0)) i2 = i2 + 1 | 0; else {
    i6 = 22;
    break L1;
   }
  }
  i1 = HEAP32[i1 + 40 >> 2] | 0;
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
  i8 = i5 + (_strlen(i5) | 0) | 0;
  i7 = i8;
  HEAP8[i7 >> 0] = 115;
  HEAP8[i7 + 1 >> 0] = 116;
  HEAP8[i7 + 2 >> 0] = 97;
  HEAP8[i7 + 3 >> 0] = 116;
  i8 = i8 + 4 | 0;
  HEAP8[i8 >> 0] = 105;
  HEAP8[i8 + 1 >> 0] = 99;
  HEAP8[i8 + 2 >> 0] = 32;
  HEAP8[i8 + 3 >> 0] = 0;
 }
 if (i1 & 16 | 0) _MetaData_DecodeSigEntry(i17) | 0;
 i4 = _MetaData_DecodeSigEntry(i17) | 0;
 i1 = _Type_GetTypeFromSig(i13, i17, i14, i15) | 0;
 if (i1 | 0) {
  i8 = i5 + (_strlen(i5) | 0) | 0;
  HEAP32[i11 >> 2] = HEAP32[i1 + 12 >> 2];
  _sprintf(i8, 16332, i11) | 0;
 }
 i1 = i5 + (_strlen(i5) | 0) | 0;
 i11 = HEAP32[i9 + 12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 + 16 >> 2];
 HEAP32[i12 + 4 >> 2] = i11;
 HEAP32[i12 + 8 >> 2] = i10;
 _sprintf(i1, 17511, i12) | 0;
 i1 = 0;
 while (1) {
  HEAP32[i16 >> 2] = i1;
  if (i1 >>> 0 >= i4 >>> 0) break;
  i1 = _Type_GetTypeFromSig(i13, i17, i14, i15) | 0;
  i2 = HEAP32[i16 >> 2] | 0;
  if (i2 | 0) {
   i12 = i5 + (_strlen(i5) | 0) | 0;
   HEAP8[i12 >> 0] = 44;
   HEAP8[i12 + 1 >> 0] = 0;
  }
  i3 = i5 + (_strlen(i5) | 0) | 0;
  if (!i1) {
   HEAP8[i3 >> 0] = 63;
   HEAP8[i3 + 1 >> 0] = 63;
   HEAP8[i3 + 2 >> 0] = 63;
   HEAP8[i3 + 3 >> 0] = 0;
  } else {
   i12 = HEAP32[i1 + 12 >> 2] | 0;
   _memcpy(i3 | 0, i12 | 0, (_strlen(i12) | 0) + 1 | 0) | 0;
  }
  i1 = i2 + 1 | 0;
 }
 HEAP32[i18 >> 2] = i5;
 _Crash(16336, i18);
 return 0;
}

function _scanexp(i7, i3) {
 i7 = i7 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i9 = i7 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i8 = i7 + 100 | 0;
 if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
  HEAP32[i9 >> 2] = i1 + 1;
  i1 = HEAPU8[i1 >> 0] | 0;
 } else i1 = ___shgetc(i7) | 0;
 switch (i1 | 0) {
 case 43:
 case 45:
  {
   i2 = (i1 | 0) == 45 & 1;
   i1 = HEAP32[i9 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
    HEAP32[i9 >> 2] = i1 + 1;
    i1 = HEAPU8[i1 >> 0] | 0;
   } else i1 = ___shgetc(i7) | 0;
   if ((i3 | 0) != 0 & (i1 + -48 | 0) >>> 0 > 9) if (HEAP32[i8 >> 2] | 0) HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + -1;
   break;
  }
 default:
  i2 = 0;
 }
 if ((i1 + -48 | 0) >>> 0 > 9) if (!(HEAP32[i8 >> 2] | 0)) {
  i2 = -2147483648;
  i1 = 0;
 } else {
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + -1;
  i2 = -2147483648;
  i1 = 0;
 } else {
  i4 = 0;
  do {
   i4 = i1 + -48 + (i4 * 10 | 0) | 0;
   i1 = HEAP32[i9 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
    HEAP32[i9 >> 2] = i1 + 1;
    i1 = HEAPU8[i1 >> 0] | 0;
   } else i1 = ___shgetc(i7) | 0;
  } while ((i1 + -48 | 0) >>> 0 < 10 & (i4 | 0) < 214748364);
  i3 = ((i4 | 0) < 0) << 31 >> 31;
  if ((i1 + -48 | 0) >>> 0 < 10) {
   do {
    i3 = ___muldi3(i4 | 0, i3 | 0, 10, 0) | 0;
    i4 = tempRet0;
    i1 = _i64Add(i1 | 0, ((i1 | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    i4 = _i64Add(i1 | 0, tempRet0 | 0, i3 | 0, i4 | 0) | 0;
    i3 = tempRet0;
    i1 = HEAP32[i9 >> 2] | 0;
    if (i1 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
     HEAP32[i9 >> 2] = i1 + 1;
     i1 = HEAPU8[i1 >> 0] | 0;
    } else i1 = ___shgetc(i7) | 0;
   } while ((i1 + -48 | 0) >>> 0 < 10 & ((i3 | 0) < 21474836 | (i3 | 0) == 21474836 & i4 >>> 0 < 2061584302));
   i5 = i1;
   i6 = i4;
  } else {
   i5 = i1;
   i6 = i4;
  }
  i1 = HEAP32[i8 >> 2] | 0;
  if ((i5 + -48 | 0) >>> 0 < 10) do {
   i4 = HEAP32[i9 >> 2] | 0;
   if (i4 >>> 0 < i1 >>> 0) {
    HEAP32[i9 >> 2] = i4 + 1;
    i4 = HEAPU8[i4 >> 0] | 0;
   } else {
    i4 = ___shgetc(i7) | 0;
    i1 = HEAP32[i8 >> 2] | 0;
   }
  } while ((i4 + -48 | 0) >>> 0 < 10);
  if (i1 | 0) HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + -1;
  i9 = (i2 | 0) != 0;
  i1 = _i64Subtract(0, 0, i6 | 0, i3 | 0) | 0;
  i2 = i9 ? tempRet0 : i3;
  i1 = i9 ? i1 : i6;
 }
 tempRet0 = i2;
 return i1 | 0;
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

function _System_Type_GetProperties(i15, i1, i9) {
 i15 = i15 | 0;
 i1 = i1 | 0;
 i9 = i9 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i10 = i14 + 8 | 0;
 i11 = i14 + 4 | 0;
 i12 = i14;
 i1 = HEAP32[i15 >> 2] | 0;
 i13 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = HEAP32[i13 + 116 >> 2] | 0;
 i4 = HEAP32[i13 + 108 >> 2] | 0;
 i1 = i1 + 80 | 0;
 i3 = 1;
 while (1) {
  if (i3 >>> 0 > i4 >>> 0) {
   i8 = 0;
   i1 = 0;
   break;
  }
  i2 = _MetaData_GetTableRow(i13, i3 & 16777215 | 352321536) | 0;
  i6 = i3 + 1 | 0;
  if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   i7 = 4;
   break;
  } else i3 = i6;
 }
 do if ((i7 | 0) == 4) {
  i1 = HEAP32[i2 + 4 >> 2] & 16777215;
  if (i3 >>> 0 < i4 >>> 0) {
   i8 = i1;
   i1 = HEAP32[(_MetaData_GetTableRow(i13, i6 & 16777215 | 352321536) | 0) + 4 >> 2] & 16777215;
   break;
  } else {
   i8 = i1;
   i1 = i5 + 1 | 0;
   break;
  }
 } while (0);
 i5 = i1 - i8 | 0;
 i6 = _SystemArray_NewVector(_Type_GetArrayTypeDef(HEAP32[(HEAP32[9026] | 0) + 192 >> 2] | 0, 0, 0) | 0, i5) | 0;
 HEAP32[i9 >> 2] = i6;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i5 | 0)) break;
  i2 = i1 + i8 & 16777215 | 385875968;
  i3 = _MetaData_GetTableRow(i13, i2) | 0;
  HEAP32[i10 >> 2] = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 192 >> 2] | 0) | 0;
  _SystemArray_StoreElement(i6, i1, i10);
  HEAP32[HEAP32[i10 >> 2] >> 2] = i15;
  i4 = _SystemString_FromCharPtrASCII(HEAP32[i3 + 4 >> 2] | 0) | 0;
  HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = i4;
  HEAP32[i12 >> 2] = _MetaData_GetBlob(HEAP32[i3 + 8 >> 2] | 0, i11) | 0;
  _MetaData_DecodeSigEntry(i12) | 0;
  _MetaData_DecodeSigEntry(i12) | 0;
  i4 = _Type_GetTypeFromSig(i13, i12, 0, 0) | 0;
  if (!(HEAP8[i4 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i4, 0, 0);
  i7 = _Type_GetTypeObject(i4) | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i9 + 8 >> 2] = i7;
  HEAP32[i9 + 16 >> 2] = i2;
  HEAP32[i9 + 12 >> 2] = i3;
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i14;
 return 0;
}

function _LoadDebugFile(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i10 = i16 + 16 | 0;
 i11 = i16 + 12 | 0;
 i12 = i16 + 8 | 0;
 i13 = i16 + 4 | 0;
 i14 = i16;
 i15 = _malloc(4) | 0;
 i5 = 0;
 i6 = 0;
 while (1) {
  i9 = i5 + 424 | 0;
  if (!(HEAP8[i1 >> 0] | 0)) break;
  i7 = _malloc(428) | 0;
  i8 = i7 + 20 | 0;
  HEAP32[i8 >> 2] = 0;
  _GetNullTerminatedString(i1, i10) | 0;
  HEAP32[i7 >> 2] = i1;
  i20 = HEAP32[i10 >> 2] | 0;
  i1 = i1 + i20 | 0;
  i21 = i7 + 4 | 0;
  HEAP32[i21 >> 2] = _GetNullTerminatedString(i1, i11) | 0;
  i17 = HEAP32[i11 >> 2] | 0;
  i1 = i1 + i17 | 0;
  i19 = i7 + 8 | 0;
  HEAP32[i19 >> 2] = _GetNullTerminatedString(i1, i12) | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  i1 = i1 + i2 | 0;
  i3 = i7 + 12 | 0;
  HEAP32[i3 >> 2] = _GetNullTerminatedString(i1, i13) | 0;
  i4 = HEAP32[i13 >> 2] | 0;
  i1 = i1 + i4 | 0;
  i23 = _mallocForever(i20 + 1 + i17 + i2 + i4 | 0) | 0;
  i18 = i7 + 16 | 0;
  HEAP32[i18 >> 2] = i23;
  i22 = i20 + -1 | 0;
  _strncpy(i23, HEAP32[i7 >> 2] | 0, i22) | 0;
  _strncpy((HEAP32[i18 >> 2] | 0) + i22 | 0, HEAP32[i21 >> 2] | 0, i17 + -1 | 0) | 0;
  i17 = i20 + -2 + i17 | 0;
  _strncpy((HEAP32[i18 >> 2] | 0) + i17 | 0, HEAP32[i19 >> 2] | 0, i2 + -1 | 0) | 0;
  _strncpy((HEAP32[i18 >> 2] | 0) + (i17 + -1 + i2) | 0, HEAP32[i3 >> 2] | 0, i4) | 0;
  i4 = _GetU32(i1, i14) | 0;
  HEAP32[i8 >> 2] = i4;
  i3 = i7 + 24 | 0;
  i2 = 0;
  i1 = i1 + (HEAP32[i14 >> 2] | 0) | 0;
  while (1) {
   if ((i2 | 0) >= (i4 | 0)) break;
   HEAP32[i3 + (i2 << 2) >> 2] = _GetU32(i1, i14) | 0;
   i2 = i2 + 1 | 0;
   i1 = i1 + (HEAP32[i14 >> 2] | 0) | 0;
   i4 = HEAP32[i8 >> 2] | 0;
  }
  if (i5 | 0) HEAP32[i9 >> 2] = i7;
  i5 = i7;
  i6 = (i6 | 0) == 0 ? i7 : i6;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i15 >> 2] = i6;
 STACKTOP = i16;
 return i15 | 0;
}

function _MetaData_LoadTables(i11, i12, i8, i1) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i13 = i14;
 i10 = i14 + 4 | 0;
 i5 = HEAPU8[i8 + 6 >> 0] | 0;
 HEAP8[i11 + 424 >> 0] = i5 & 1;
 HEAP8[i11 + 426 >> 0] = i5 >>> 1 & 1;
 HEAP8[i11 + 425 >> 0] = i5 >>> 2 & 1;
 i5 = i8 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = 0;
 i1 = 0;
 i6 = 1;
 i7 = 0;
 while (1) {
  i9 = i8 + ((i1 << 2) + 24) | 0;
  if ((i3 | 0) == 48) {
   i4 = 0;
   break;
  }
  i2 = i11 + 24 + (i3 << 2) | 0;
  if ((i6 & i4 | 0) == 0 & (i7 & i5 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i11 + 216 + (i3 << 2) >> 2] = 0;
  } else {
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   i1 = i1 + 1 | 0;
  }
  i9 = _bitshift64Shl(i6 | 0, i7 | 0, 1) | 0;
  i3 = i3 + 1 | 0;
  i6 = i9;
  i7 = tempRet0;
 }
 while (1) {
  if ((i4 | 0) == 13) break;
  i5 = HEAP32[3640 + (i4 << 2) >> 2] | 0;
  i6 = HEAPU8[15324 + i4 >> 0] | 0;
  i7 = 1 << i6;
  i1 = 0;
  i3 = 0;
  while (1) {
   if ((i3 | 0) >= (i7 | 0)) break;
   i2 = HEAP8[i5 + i3 >> 0] | 0;
   if (i2 << 24 >> 24 != 122) {
    i8 = HEAP32[i11 + 24 + ((i2 & 255) << 2) >> 2] | 0;
    i1 = i8 >>> 0 > i1 >>> 0 ? i8 : i1;
   }
   i3 = i3 + 1 | 0;
  }
  HEAP8[i11 + 408 + i4 >> 0] = i1 >>> 0 >= 1 << 16 - i6 >>> 0 & 1;
  i4 = i4 + 1 | 0;
 }
 HEAP32[i10 >> 2] = i9;
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
   if (!(HEAP32[3692 + (i2 << 2) >> 2] | 0)) {
    i1 = 19;
    break;
   }
   HEAP32[i11 + 216 + (i2 << 2) >> 2] = _LoadSingleTable(i11, i12, i2, i10) | 0;
  }
  i2 = i2 + 1 | 0;
 }
 if ((i1 | 0) == 19) {
  HEAP32[i13 >> 2] = i2;
  _printf(15337, i13) | 0;
  _exit(1);
 } else if ((i1 | 0) == 22) {
  STACKTOP = i14;
  return;
 }
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
  if ((FUNCTION_TABLE_iii[i11 & 63](i5, i1) | 0) < 1) {
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
     if ((FUNCTION_TABLE_iii[i11 & 63](i2, i6) | 0) > -1) {
      i5 = 10;
      break L1;
     }
     if ((FUNCTION_TABLE_iii[i11 & 63](i2 + (0 - i5) | 0, i6) | 0) > -1) {
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
    if ((FUNCTION_TABLE_iii[i11 & 63](i1, HEAP32[i13 >> 2] | 0) | 0) < 1) {
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
 i13 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 124 >> 2] | 0, i3) | 0;
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
   i2 = HEAP32[i11 >> 2] | 0;
   if (!i1) break L1;
   i1 = i1 + -1 | 0;
   i6 = i2 + (i1 << 3) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   i1 = i2 + (i1 << 3) + 4 | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i1 = 0;
   i6 = 0;
   while (1) {
    if ((i6 | 0) == (i8 | 0)) break;
    i2 = HEAP32[i7 + (i6 << 2) >> 2] | 0;
    L9 : do if (i2) {
     i4 = _TreeSearch(HEAP32[7473] | 0, i2) | 0;
     if ((i4 | 0) != (HEAP32[7472] | 0)) {
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
       i2 = HEAP32[9026] | 0;
       if ((i5 | 0) != (HEAP32[i2 + 36 >> 2] | 0)) {
        i3 = HEAP32[i5 + 96 >> 2] | 0;
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
 _free(i2);
 STACKTOP = i12;
 return;
}

function _MetaData_Fill_MethodDef(i1, i5, i6, i9) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i9 = i9 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i10 = i11;
 HEAP32[i5 + 48 >> 2] = i1;
 HEAP32[i5 >> 2] = i5;
 HEAP8[i5 + 32 >> 0] = 1;
 if (!(HEAP8[i5 + 33 >> 0] | 0)) {
  HEAP32[i10 >> 2] = _MetaData_GetBlob(HEAP32[i5 + 20 >> 2] | 0, 0) | 0;
  if ((_MetaData_DecodeSigEntry(i10) | 0) & 16 | 0) _MetaData_DecodeSigEntry(i10) | 0;
  i8 = _MetaData_DecodeSigEntry(i10) | 0;
  i3 = i5 + 14 | 0;
  i7 = i5 + 34 | 0;
  HEAP16[i7 >> 1] = (((HEAPU16[i3 >> 1] | 0) >>> 4 & 1 ^ 1) & 65535) + i8;
  i8 = i5 + 4 | 0;
  i2 = _Type_GetTypeFromSig(HEAP32[i8 >> 2] | 0, i10, i6, i9) | 0;
  HEAP32[i5 + 44 >> 2] = i2;
  if (i2 | 0) if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
  i2 = _mallocForever((HEAPU16[i7 >> 1] | 0) * 12 | 0) | 0;
  i4 = i5 + 36 | 0;
  HEAP32[i4 >> 2] = i2;
  if (!(HEAP16[i3 >> 1] & 16)) {
   HEAP32[i2 + 4 >> 2] = 0;
   i3 = (HEAP8[i1 + 34 >> 0] | 0) == 0;
   HEAP32[i2 + 8 >> 2] = 4;
   if (!i3) i1 = HEAP32[(HEAP32[9026] | 0) + 40 >> 2] | 0;
   HEAP32[i2 >> 2] = i1;
   i1 = 4;
  } else i1 = 0;
  i3 = i1 >>> 2;
  while (1) {
   if (i3 >>> 0 >= (HEAPU16[i7 >> 1] | 0) >>> 0) break;
   i2 = _Type_GetTypeFromSig(HEAP32[i8 >> 2] | 0, i10, i6, i9) | 0;
   if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
   i12 = HEAP32[i2 + 68 >> 2] | 0;
   i13 = HEAP32[i4 >> 2] | 0;
   HEAP32[i13 + (i3 * 12 | 0) >> 2] = i2;
   HEAP32[i13 + (i3 * 12 | 0) + 4 >> 2] = i1;
   HEAP32[i13 + (i3 * 12 | 0) + 8 >> 2] = i12;
   i3 = i3 + 1 | 0;
   i1 = i12 + i1 | 0;
  }
  HEAP32[i5 + 40 >> 2] = i1;
 }
 STACKTOP = i11;
 return;
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
 i3 = 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 < i8 >>> 0) i1 = 0; else break;
  while (1) {
   if (i1 >>> 0 >= i12 >>> 0) {
    i16 = 5;
    break;
   }
   if ((HEAP16[i10 + (i1 + i2 << 1) >> 1] | 0) == (HEAP16[i15 + 4 + (i1 << 1) >> 1] | 0)) i1 = i1 + 1 | 0; else {
    i1 = i3;
    break;
   }
  }
  if ((i16 | 0) == 5) {
   i16 = 0;
   i1 = i3 + 1 | 0;
   i2 = i2 + i9 | 0;
  }
  i3 = i1;
  i2 = i2 + 1 | 0;
 }
 i7 = i4 + 4 | 0;
 i5 = _CreateStringHeapObj(i11 - (Math_imul(i3, i12 - i13 | 0) | 0) | 0) | 0;
 i6 = i13 << 1;
 i1 = 0;
 i4 = 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i11 >>> 0) break;
  L13 : do if (i3 >>> 0 < i8 >>> 0) {
   i2 = i1;
   i1 = 0;
   while (1) {
    if (i1 >>> 0 >= i12 >>> 0) break;
    if ((HEAP16[i10 + (i1 + i3 << 1) >> 1] | 0) == (HEAP16[i15 + 4 + (i1 << 1) >> 1] | 0)) {
     i2 = 1;
     i1 = i1 + 1 | 0;
    } else {
     i16 = 12;
     break L13;
    }
   }
   i1 = i5 + 4 + (i4 << 1) | 0;
   if (!i2) i16 = 15; else {
    _memcpy(i1 | 0, i7 | 0, i6 | 0) | 0;
    i1 = i2;
    i2 = i3 + i9 | 0;
    i3 = i13;
   }
  } else i16 = 12; while (0);
  if ((i16 | 0) == 12) {
   i1 = i5 + 4 + (i4 << 1) | 0;
   i16 = 15;
  }
  if ((i16 | 0) == 15) {
   i16 = 0;
   HEAP16[i1 >> 1] = HEAP16[i10 + (i3 << 1) >> 1] | 0;
   i1 = 0;
   i2 = i3;
   i3 = 1;
  }
  i4 = i3 + i4 | 0;
  i3 = i2 + 1 | 0;
 }
 HEAP32[i14 >> 2] = i5;
 return 0;
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
 i3 = HEAP32[i11 >> 2] | 0;
 i9 = i9 + 104 | 0;
 i1 = 0;
 i2 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  i8 = (((HEAPU16[(HEAP32[(HEAP32[i9 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 8 >> 1] | 0) >>> 4 & 1 ^ 1) & 65535) + i2 | 0;
  i1 = i1 + 1 | 0;
  i2 = i8;
 }
 i7 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 64 >> 2] | 0, i2 << ((i10 | 0) != 0 & 1)) | 0;
 i8 = (i10 | 0) == 0;
 i1 = 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) break;
  i2 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i6 << 2) >> 2] | 0;
  do if (!(HEAP16[i2 + 8 >> 1] & 16)) {
   i4 = i2 + 20 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   i5 = i2 + 28 | 0;
   if (!(HEAP8[i3 + 34 >> 0] | 0)) {
    i2 = i1 + 1 | 0;
    _SystemArray_StoreElement(i7, i1, i13 + (HEAP32[i5 >> 2] | 0) | 0);
    if (i8) {
     i1 = i2;
     break;
    }
    _SystemArray_StoreElement(i7, i2, i10 + (HEAP32[i5 >> 2] | 0) | 0);
    i1 = i1 + 2 | 0;
    break;
   }
   HEAP32[i12 >> 2] = _Heap_Box(i3, i13 + (HEAP32[i5 >> 2] | 0) | 0) | 0;
   i2 = i1 + 1 | 0;
   _SystemArray_StoreElement(i7, i1, i12);
   if (i8) i1 = i2; else {
    HEAP32[i12 >> 2] = _Heap_Box(HEAP32[i4 >> 2] | 0, i10 + (HEAP32[i5 >> 2] | 0) | 0) | 0;
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
   i2 = (i13 << 31 >> 31) + i2 | 0;
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

function _GC_Sweep() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(320);
 i8 = i9;
 HEAP32[i8 >> 2] = HEAP32[7473];
 HEAP32[7475] = 0;
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
    HEAP32[7475] = (HEAP32[7475] | 0) + 1;
    break;
   }
  default:
   HEAP8[i2 >> 0] = 0;
  } while (0);
  i2 = HEAP32[i7 + 4 >> 2] | 0;
  i4 = HEAP32[7472] | 0;
  if ((i2 | 0) == (i4 | 0)) i3 = i5; else HEAP32[i6 >> 2] = i2;
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) == (i4 | 0)) continue;
  HEAP32[i8 + (i3 << 2) >> 2] = i2;
  i3 = i3 + 1 | 0;
 }
 while (1) {
  if (!i1) break;
  i8 = HEAP32[i1 + 16 >> 2] | 0;
  HEAP32[7473] = _TreeRemove(HEAP32[7473] | 0, i1) | 0;
  HEAP32[7474] = (HEAP32[7474] | 0) + -1;
  i7 = _GetSize(i1) | 0;
  HEAP32[7470] = -20 - i7 + (HEAP32[7470] | 0);
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

function _MetaData_Fill_FieldDef(i1, i7, i4, i2) {
 i1 = i1 | 0;
 i7 = i7 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i8;
 HEAP32[i7 + 24 >> 2] = i1;
 HEAP32[i6 >> 2] = _MetaData_GetBlob(HEAP32[i7 + 16 >> 2] | 0, i8 + 4 | 0) | 0;
 _MetaData_DecodeSigEntry(i6) | 0;
 i3 = i7 + 4 | 0;
 i1 = _Type_GetTypeFromSig(HEAP32[i3 >> 2] | 0, i6, i2, 0) | 0;
 i2 = i7 + 20 | 0;
 HEAP32[i2 >> 2] = i1;
 L1 : do if (i1 | 0) {
  if (!(HEAP8[i1 + 32 >> 0] | 0)) {
   _MetaData_Fill_TypeDef_(i1, 0, 0);
   i1 = HEAP32[i2 >> 2] | 0;
  }
  i5 = HEAP32[i1 + 68 >> 2] | 0;
  HEAP32[i7 + 32 >> 2] = (i5 | 0) == 0 ? 4 : i5;
  HEAP32[i7 + 28 >> 2] = i4;
  HEAP32[i7 >> 2] = i7;
  i5 = HEAP32[i3 >> 2] | 0;
  i1 = HEAPU16[i7 + 8 >> 1] | 0;
  i6 = i7 + 40 | 0;
  if (i1 & 256 | 0) {
   i4 = HEAP32[i5 + 140 >> 2] | 0;
   i2 = i7 + 36 | 0;
   i1 = 1;
   while (1) {
    if (i1 >>> 0 > i4 >>> 0) break L1;
    i3 = _MetaData_GetTableRow(i5, i1 & 16777215 | 486539264) | 0;
    if ((HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) break; else i1 = i1 + 1 | 0;
   }
   HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
   break;
  }
  if (i1 & 64 | 0) {
   i4 = HEAP32[i5 + 68 >> 2] | 0;
   i2 = i7 + 36 | 0;
   i1 = 1;
   while (1) {
    if (i1 >>> 0 > i4 >>> 0) break L1;
    i3 = _MetaData_GetTableRow(i5, i1 & 16777215 | 184549376) | 0;
    if ((HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) break; else i1 = i1 + 1 | 0;
   }
   HEAP32[i6 >> 2] = i3;
  }
 } while (0);
 STACKTOP = i8;
 return;
}

function _FindVirtualOverriddenMethod(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = i1 + 60 | 0;
 i9 = i1 + 52 | 0;
 i10 = i1 + 16 | 0;
 i11 = i1 + 20 | 0;
 i12 = i1 + 4 | 0;
 i7 = i1 + 48 | 0;
 L1 : while (1) {
  i5 = i2 + 4 | 0;
  i6 = i2 + 92 | 0;
  i3 = i2 + 80 | 0;
  i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 124 >> 2] | 0;
  while (1) {
   if (!i1) break;
   i4 = _MetaData_GetTableRow(HEAP32[i5 >> 2] | 0, i1 & 16777215 | 419430400) | 0;
   if ((HEAP32[i4 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    i14 = HEAP32[(_MetaData_GetMethodDefFromDefRefOrSpec(HEAP32[i5 >> 2] | 0, HEAP32[i4 + 8 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) + 52 >> 2] | 0;
    if ((i14 | 0) == (HEAP32[i9 >> 2] | 0)) {
     i13 = 7;
     break L1;
    }
   }
   i1 = i1 + -1 | 0;
  }
  i3 = i2 + 44 | 0;
  i1 = HEAP32[i2 + 48 >> 2] | 0;
  while (1) {
   i14 = i1;
   i1 = i1 + -1 | 0;
   if (!i14) break;
   i14 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   if (_MetaData_CompareNameAndSig(HEAP32[i10 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[i12 >> 2] | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + 92 >> 2] | 0, HEAP32[i8 >> 2] | 0, i14, HEAP32[i6 >> 2] | 0, HEAP32[i14 + 60 >> 2] | 0) | 0) {
    i13 = 11;
    break L1;
   }
  }
  i2 = HEAP32[i2 + 40 >> 2] | 0;
  if (!i2) {
   i1 = 0;
   break;
  }
 }
 if ((i13 | 0) == 7) i1 = _MetaData_GetTableRow(HEAP32[i5 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0) | 0; else if ((i13 | 0) == 11) i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0;
 return i1 | 0;
}

function _Type_Init() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i7;
 HEAP32[9041] = 54;
 HEAP32[9026] = _mallocForever(216) | 0;
 i2 = 0;
 while (1) {
  i1 = HEAP32[9041] | 0;
  if (i2 >>> 0 >= i1 >>> 0) {
   i6 = 0;
   i3 = i1;
   break;
  }
  if ((i2 | 0) != (HEAPU8[3928 + (i2 * 20 | 0) + 16 >> 0] | 0)) {
   i5 = 4;
   break;
  }
  i1 = HEAP32[3928 + (i2 * 20 | 0) >> 2] | 0;
  if (i1 | 0) {
   i1 = _MetaData_GetTypeDefFromFullName(i1, HEAP32[3928 + (i2 * 20 | 0) + 4 >> 2] | 0, HEAP32[3928 + (i2 * 20 | 0) + 8 >> 2] | 0) | 0;
   HEAP32[(HEAP32[9026] | 0) + (i2 << 2) >> 2] = i1;
   i1 = HEAP32[(HEAP32[9026] | 0) + (i2 << 2) >> 2] | 0;
   HEAP8[i1 + 35 >> 0] = HEAP8[3928 + (i2 * 20 | 0) + 12 >> 0] | 0;
   HEAP32[i1 + 68 >> 2] = HEAPU8[3928 + (i2 * 20 | 0) + 13 >> 0];
   HEAP32[i1 + 64 >> 2] = HEAPU8[3928 + (i2 * 20 | 0) + 14 >> 0];
   HEAP32[i1 + 36 >> 2] = HEAPU8[3928 + (i2 * 20 | 0) + 15 >> 0];
  }
  i2 = i2 + 1 | 0;
 }
 if ((i5 | 0) == 4) _Crash(20556, i4);
 while (1) {
  if (i6 >>> 0 >= i3 >>> 0) break;
  i1 = HEAP32[9026] | 0;
  if (!(HEAP32[3928 + (i6 * 20 | 0) >> 2] | 0)) {
   i5 = _Type_GetArrayTypeDef(HEAP32[i1 + (HEAP32[3928 + (i6 * 20 | 0) + 8 >> 2] << 2) >> 2] | 0, 0, 0) | 0;
   HEAP32[(HEAP32[9026] | 0) + (i6 << 2) >> 2] = i5;
  } else {
   i1 = HEAP32[i1 + (i6 << 2) >> 2] | 0;
   if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  }
  i6 = i6 + 1 | 0;
  i3 = HEAP32[9041] | 0;
 }
 STACKTOP = i7;
 return;
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
  d1 = d9 - (d3 + (d4 - d1 * d1 / (d9 + d1))) * 2.0;
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
  d1 = d1 + d8 * (d9 * d1 + 1.0 + d1 * (d4 - (d9 - d3)));
 }
 return +d1;
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
   i4 = HEAP8[11696 + (i2 << 2) + 2 >> 0] | 0;
   i5 = i4 << 24 >> 24;
   i3 = i1 - (HEAPU16[11696 + (i2 << 2) >> 1] | 0) | 0;
   if ((i3 - (i5 & i7) | 0) >>> 0 < (HEAPU8[11696 + (i2 << 2) + 3 >> 0] | 0) >>> 0) {
    i8 = 11;
    break;
   }
   i2 = i2 + 1 | 0;
  } while ((i2 | 0) != 61);
  if ((i8 | 0) == 11) if (i4 << 24 >> 24 == 1) {
   i1 = i9 + i1 - (i3 & 1) | 0;
   break;
  } else {
   i1 = (Math_imul(i5, i6) | 0) + i1 | 0;
   break;
  }
  i4 = 1 - i9 | 0;
  i2 = HEAP16[11208 + (i4 << 1) >> 1] | 0;
  L20 : do if (i2 << 16 >> 16) {
   i3 = 0;
   while (1) {
    if ((i2 & 65535 | 0) == (i1 | 0)) break;
    i3 = i3 + 1 | 0;
    i2 = HEAP16[11208 + (i3 << 2) + (i4 << 1) >> 1] | 0;
    if (!(i2 << 16 >> 16)) break L20;
   }
   i1 = HEAPU16[11208 + (i3 << 2) + (i9 << 1) >> 1] | 0;
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
   i3 = (HEAP32[HEAP32[(___pthread_self_445() | 0) + 188 >> 2] >> 2] | 0) == 0;
   i1 = HEAP8[i6 >> 0] | 0;
   if (i3) {
    HEAP32[i5 >> 2] = i1 << 24 >> 24 & 57343;
    i1 = 1;
    break L1;
   }
   i1 = (i1 & 255) + -194 | 0;
   if (i1 >>> 0 <= 50) {
    i2 = i6 + 1 | 0;
    i3 = HEAP32[5008 + (i1 << 2) >> 2] | 0;
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
 i2 = HEAP32[i8 + 16 >> 2] | 0;
 if ((HEAP8[i1 + i5 >> 0] | 0) == 62) if (!(_strncmp(i2, i1, i5) | 0)) i11 = 4; else i1 = 0; else if (!(_strcmp(i2, i1) | 0)) i11 = 4; else i1 = 0;
 L4 : do if ((i11 | 0) == 4) {
  HEAP32[i10 >> 2] = _MetaData_GetBlob(HEAP32[i8 + 20 >> 2] | 0, i4) | 0;
  if ((_MetaData_DecodeSigEntry(i10) | 0) & 16 | 0) _MetaData_DecodeSigEntry(i10) | 0;
  if ((_MetaData_DecodeSigEntry(i10) | 0) == (i7 | 0)) {
   i6 = (HEAP32[(HEAP32[9026] | 0) + 8 >> 2] | 0) == (i3 | 0) ? 0 : i3;
   i5 = i7 + 1 | 0;
   i2 = i8 + 4 | 0;
   i1 = 0;
   while (1) {
    if (i1 >>> 0 >= i5 >>> 0) {
     i1 = 1;
     break L4;
    }
    i3 = _Type_GetTypeFromSig(HEAP32[i2 >> 2] | 0, i10, 0, 0) | 0;
    if (!i1) i4 = i6; else i4 = HEAP32[(HEAP32[9026] | 0) + (HEAPU8[i9 + (i1 + -1) >> 0] << 2) >> 2] | 0;
    if (!i3) i11 = 14; else if (!(HEAP32[i3 + 96 >> 2] | 0)) i11 = 14; else if (!((i3 | 0) == (i4 | 0) ? 1 : (i4 | 0) == (HEAP32[(HEAP32[9026] | 0) + 4 >> 2] | 0))) {
     i1 = 0;
     break L4;
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

function _MetaData_CompareNameAndSig(i1, i2, i6, i7, i8, i3, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i3 = i3 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i4 = 0, i5 = 0, i11 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i11 = i13 + 4 | 0;
 i12 = i13;
 if (!(_strcmp(i1, HEAP32[i3 + 16 >> 2] | 0) | 0)) {
  i1 = _MetaData_GetBlob(i2, 0) | 0;
  HEAP32[i11 >> 2] = i1;
  i2 = _MetaData_GetBlob(HEAP32[i3 + 20 >> 2] | 0, 0) | 0;
  HEAP32[i12 >> 2] = i2;
  i2 = (_strcmp(i1, i2) | 0) == 0;
  i1 = _MetaData_DecodeSigEntry(i11) | 0;
  L3 : do if ((i1 | 0) == (_MetaData_DecodeSigEntry(i12) | 0)) {
   i4 = (i1 & 16 | 0) == 0;
   if (!i4) {
    if (i2) {
     i1 = 1;
     break;
    }
    i5 = _MetaData_DecodeSigEntry(i11) | 0;
    if ((i5 | 0) != (_MetaData_DecodeSigEntry(i12) | 0)) {
     i1 = 0;
     break;
    }
   }
   i1 = _MetaData_DecodeSigEntry(i11) | 0;
   if ((i1 | 0) == (_MetaData_DecodeSigEntry(i12) | 0)) {
    i5 = i1 + 1 | 0;
    i3 = i3 + 4 | 0;
    i2 = (i10 | 0) != 0 | i4;
    i1 = 0;
    while (1) {
     if (i1 >>> 0 >= i5 >>> 0) {
      i1 = 1;
      break L3;
     }
     i4 = _Type_GetTypeFromSig(i6, i11, i7, i8) | 0;
     if (i2 & (i4 | 0) != (_Type_GetTypeFromSig(HEAP32[i3 >> 2] | 0, i12, i9, i10) | 0)) {
      i1 = 0;
      break;
     } else i1 = i1 + 1 | 0;
    }
   } else i1 = 0;
  } else i1 = 0; while (0);
 } else i1 = 0;
 STACKTOP = i13;
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
 _log_f(1, 19475, i2);
 i2 = 0;
 i1 = 36072;
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
  HEAP32[((HEAP32[9018] | 0) == 0 ? 36072 : i2 + 408 | 0) >> 2] = i3;
  i2 = i3;
 }
 i1 = i2 + 404 | 0;
 if ((HEAP32[i1 >> 2] | 0) < 100) {
  HEAP32[i6 >> 2] = i4;
  HEAP32[i6 + 4 >> 2] = i5;
  _log_f(1, 19514, i6);
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i6 + 1;
  HEAP32[i2 + 4 + (i6 << 2) >> 2] = i5;
  i1 = 36072;
 } else i1 = 36072;
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
   _log_f(1, 19543, i7);
   i1 = i1 + 1 | 0;
  }
  i1 = i2 + 408 | 0;
 }
 STACKTOP = i8;
 return 0;
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
   if ((HEAP8[(_MetaData_GetBlob(HEAP32[(_MetaData_GetTableRow(i2, i3) | 0) + 12 >> 2] | 0, 0) | 0) >> 0] | 0) == 6) i7 = 9; else i7 = 5;
   break;
  }
 default:
  {
   HEAP32[i6 >> 2] = i3;
   _Crash(16976, i6);
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
  if (!(HEAP32[i1 + 24 >> 2] | 0)) {
   i2 = _MetaData_GetTypeDefFromFieldDef(i1) | 0;
   if (!(HEAP8[i2 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i2, 0, 0);
  }
  HEAP32[i8 >> 2] = 2;
 }
 STACKTOP = i9;
 return i1 | 0;
}

function _main(i7, i3) {
 i7 = i7 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i10 = i11 + 16 | 0;
 i9 = i11 + 8 | 0;
 i4 = i11;
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
   HEAP32[9016] = (HEAP32[9016] | 0) + 1;
   i2 = i2 + 1 | 0;
  }
  i6 = i6 + 1 | 0;
 }
 if ((i5 | 0) == 7) {
  HEAP32[i4 >> 2] = HEAP8[i1 + 1 >> 0];
  _Crash(12300, i4);
 }
 _JIT_Execute_Init();
 _MetaData_Init();
 _Type_Init();
 _Heap_Init();
 _Finalizer_Init();
 i1 = HEAP32[i8 >> 2] | 0;
 i2 = _CLIFile_Load(i1) | 0;
 i3 = _microTime() | 0;
 i4 = tempRet0;
 if (!(HEAP32[i2 + 16 >> 2] | 0)) {
  HEAP32[i9 >> 2] = i1;
  _printf(12322, i9) | 0;
  i1 = 0;
 } else i1 = _CLIFile_Execute(i2, i7 - i6 | 0, i8) | 0;
 i9 = _microTime() | 0;
 i9 = _i64Subtract(i9 | 0, tempRet0 | 0, i3 | 0, i4 | 0) | 0;
 i9 = ___udivdi3(i9 | 0, tempRet0 | 0, 1e3, 0) | 0;
 HEAP32[i10 >> 2] = i9;
 _printf(12370, i10) | 0;
 STACKTOP = i11;
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
 i6 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 28 >> 2] | 0) + 24 >> 2] | 0;
 i7 = HEAP32[i6 + 24 + (i8 << 2) >> 2] | 0;
 i5 = i6 + 16 | 0;
 if (!(HEAP32[9022] | 0)) {
  i1 = 36072;
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
  _log_f(1, 19575, i9);
  HEAP32[9021] = 1;
  HEAP32[9022] = 0;
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i10 >> 2] = i7;
  HEAP32[i10 + 4 >> 2] = i8;
  HEAP32[i10 + 8 >> 2] = i1;
  _sprintf(i9, 19608, i10) | 0;
  _invokeJsFunc(19678, 19689, i9 | 0) | 0;
  i1 = 1;
 }
 STACKTOP = i12;
 return i1 | 0;
}

function _JSInterop_CallDotNet(i1, i3, i6, i7, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i10 = i11 + 24 | 0;
 i9 = i11;
 i8 = _Thread() | 0;
 HEAP32[i9 >> 2] = i1;
 HEAP32[i9 + 4 >> 2] = i3;
 HEAP32[i9 + 8 >> 2] = i6;
 HEAP32[i9 + 12 >> 2] = i7;
 HEAP32[i9 + 16 >> 2] = i2;
 _log_f(1, 15174, i9);
 i5 = _SystemString_FromCharPtrASCII(i2) | 0;
 HEAP32[i9 >> 2] = i5;
 _Heap_MakeUndeletable(i5);
 i5 = _CLIFile_GetMetaDataForLoadedAssembly(i1) | 0;
 i1 = _MetaData_GetTypeDefFromName(i5, i3, i6, 0, 1) | 0;
 if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 i2 = i1 + 116 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i1 = 6;
   break;
  }
  i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (!(_strcmp(HEAP32[i4 + 16 >> 2] | 0, i7) | 0)) {
   i1 = 7;
   break;
  } else i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 6) {
  HEAP32[i10 >> 2] = i6;
  HEAP32[i10 + 4 >> 2] = i7;
  _Crash(15216, i10);
 } else if ((i1 | 0) == 7) {
  _Thread_SetEntryPoint(i8, i5, HEAP32[i4 + 52 >> 2] | 0, i9, 4);
  i10 = _Thread_Execute() | 0;
  _Heap_MakeDeletable(HEAP32[i9 >> 2] | 0);
  STACKTOP = i11;
  return i10 | 0;
 }
 return 0;
}

function _InternalCall_Map(i6) {
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i9;
 i7 = i6 + 48 | 0;
 L1 : do if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 80 >> 2] | 0)) {
  i1 = _Map_Delegate(i6) | 0;
  if (!i1) i2 = 9; else i2 = 10;
 } else {
  i2 = 0;
  i1 = 0;
  i4 = 1096;
  while (1) {
   i5 = HEAP32[i4 + 8 >> 2] | 0;
   if (!i5) {
    i2 = 9;
    break L1;
   }
   i3 = HEAP32[i4 >> 2] | 0;
   i1 = (i3 | 0) == 0 ? i1 : i3;
   i3 = HEAP32[i4 + 4 >> 2] | 0;
   i2 = (i3 | 0) == 0 ? i2 : i3;
   i3 = HEAP32[i7 >> 2] | 0;
   if (!(_strcmp(HEAP32[i3 + 16 >> 2] | 0, i1) | 0)) if (!(_strcmp(HEAP32[i3 + 12 >> 2] | 0, i2) | 0)) if (_Type_IsMethod(i6, i5, HEAP32[(HEAP32[9026] | 0) + ((HEAPU8[i4 + 16 >> 0] | 0) << 2) >> 2] | 0, HEAPU8[i4 + 17 >> 0] | 0, i4 + 18 | 0) | 0) break;
   i4 = i4 + 24 | 0;
  }
  i1 = HEAP32[i4 + 12 >> 2] | 0;
  i2 = 10;
 } while (0);
 if ((i2 | 0) == 9) {
  i5 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i5 + 12 >> 2] | 0;
  i9 = HEAP32[i6 + 16 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i5 + 16 >> 2];
  HEAP32[i8 + 4 >> 2] = i7;
  HEAP32[i8 + 8 >> 2] = i9;
  _Crash(12690, i8);
 } else if ((i2 | 0) == 10) {
  STACKTOP = i9;
  return i1 | 0;
 }
 return 0;
}

function ___stpncpy(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i5 = i3;
 do if (!((i5 ^ i2) & 3)) {
  i4 = (i1 | 0) != 0;
  L3 : do if (i4 & (i5 & 3 | 0) != 0) while (1) {
   i5 = HEAP8[i3 >> 0] | 0;
   HEAP8[i2 >> 0] = i5;
   if (!(i5 << 24 >> 24)) break L3;
   i1 = i1 + -1 | 0;
   i3 = i3 + 1 | 0;
   i2 = i2 + 1 | 0;
   i4 = (i1 | 0) != 0;
   if (!(i4 & (i3 & 3 | 0) != 0)) {
    i6 = 5;
    break;
   }
  } else i6 = 5; while (0);
  if ((i6 | 0) == 5) if (!i4) {
   i1 = 0;
   break;
  }
  if (HEAP8[i3 >> 0] | 0) {
   L11 : do if (i1 >>> 0 > 3) {
    i4 = i3;
    while (1) {
     i3 = HEAP32[i4 >> 2] | 0;
     if ((i3 & -2139062144 ^ -2139062144) & i3 + -16843009 | 0) {
      i3 = i4;
      break L11;
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
 } else i6 = 11; while (0);
 L16 : do if ((i6 | 0) == 11) if (!i1) i1 = 0; else while (1) {
  i6 = HEAP8[i3 >> 0] | 0;
  HEAP8[i2 >> 0] = i6;
  if (!(i6 << 24 >> 24)) break L16;
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

function _System_String_InternalTrim(i2, i1, i10) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i10 = i10 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = i8 + 4 | 0;
 i8 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 i6 = i2 + 4 | 0;
 L1 : do if (!(i4 & 1)) i5 = 0; else {
  i1 = 0;
  while (1) {
   if (i1 >>> 0 >= i9 >>> 0) {
    i5 = 0;
    break L1;
   }
   i3 = HEAP16[i6 + (i1 << 1) >> 1] | 0;
   i2 = 0;
   while (1) {
    if (i2 >>> 0 >= i8 >>> 0) {
     i5 = i1;
     break L1;
    }
    if (i3 << 16 >> 16 == (HEAP16[i7 + (i2 << 1) >> 1] | 0)) break; else i2 = i2 + 1 | 0;
   }
   i1 = i1 + 1 | 0;
  }
 } while (0);
 L10 : do if (!(i4 & 2)) i1 = i9; else {
  i1 = i9;
  L11 : while (1) {
   i2 = i1 + -1 | 0;
   if (i2 >>> 0 < i5 >>> 0) {
    i1 = i9;
    break L10;
   }
   i4 = HEAP16[i6 + (i2 << 1) >> 1] | 0;
   i3 = 0;
   while (1) {
    if (i3 >>> 0 >= i8 >>> 0) break L10;
    if (i4 << 16 >> 16 == (HEAP16[i7 + (i3 << 1) >> 1] | 0)) {
     i1 = i2;
     continue L11;
    } else i3 = i3 + 1 | 0;
   }
  }
 } while (0);
 i8 = i1 - i5 | 0;
 i9 = _CreateStringHeapObj(i8) | 0;
 _memcpy(i9 + 4 | 0, i6 + (i5 << 1) | 0, i8 << 1 | 0) | 0;
 HEAP32[i10 >> 2] = i9;
 return 0;
}

function _Generics_GetMethodDefFromCoreMethod(i2, i3, i4, i5) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = i2 + 64 | 0;
 i7 = i4 << 2;
 i1 = i6;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
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
  HEAP32[i9 + 4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i4;
  i8 = i9 + 12 | 0;
  _memcpy(i8 | 0, i5 | 0, i7 | 0) | 0;
  i1 = _callocForever(1, 68) | 0;
  HEAP32[i9 >> 2] = i1;
  HEAP32[i1 >> 2] = i1;
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP16[i1 + 12 >> 1] = HEAP16[i2 + 12 >> 1] | 0;
  HEAP16[i1 + 14 >> 1] = HEAP16[i2 + 14 >> 1] | 0;
  HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
  HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
  HEAP32[i1 + 60 >> 2] = i8;
  _MetaData_Fill_MethodDef(i3, i1, HEAP32[i3 + 92 >> 2] | 0, i8);
 }
 return i1 | 0;
}

function _CLIFile_Load(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0;
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
  _Crash(12096, i2);
 }
 HEAP32[i3 >> 2] = i4;
 _log_f(1, 12117, i3);
 i2 = _LoadPEFile(i1) | 0;
 i3 = _mallocForever((_strlen(i4) | 0) + 1 | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 _strcpy(i3, i4) | 0;
 i3 = _mallocForever((_strlen(i4) | 0) + 1 | 0) | 0;
 i1 = (_strlen(i4) | 0) + -3 | 0;
 _strncpy(i3, i4, i1) | 0;
 i1 = i3 + i1 | 0;
 HEAP8[i1 >> 0] = HEAP8[12136] | 0;
 HEAP8[i1 + 1 >> 0] = HEAP8[12137] | 0;
 HEAP8[i1 + 2 >> 0] = HEAP8[12138] | 0;
 HEAP8[i1 + 3 >> 0] = 0;
 i1 = _LoadFileFromDisk(i3) | 0;
 if (!i1) {
  HEAP32[i5 >> 2] = i3;
  _log_f(1, 12140, i5);
 } else {
  HEAP32[i6 >> 2] = i3;
  _log_f(1, 12172, i6);
  HEAP32[i2 + 4 >> 2] = i3;
  i6 = _LoadDebugFile(i1) | 0;
  HEAP32[HEAP32[i2 + 20 >> 2] >> 2] = i6;
 }
 i6 = _mallocForever(8) | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = HEAP32[7466];
 HEAP32[7466] = i6;
 STACKTOP = i7;
 return i2 | 0;
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
   i1 = HEAP32[i9 + 4 >> 2] | 0;
   switch ((i1 >>> 24 & 255) << 24 >> 24) {
   case 27:
   case 1:
    break;
   default:
    {
     HEAP32[i6 >> 2] = i1;
     _Crash(16379, i6);
    }
   }
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i7, i1, i5, i8) | 0;
   if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
   i1 = _FindMethodInType(i1, HEAP32[i9 + 8 >> 2] | 0, i7, HEAP32[i9 + 12 >> 2] | 0, HEAP32[i1 + 92 >> 2] | 0, i8) | 0;
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
   _Crash(16462, i4);
  }
 } else i1 = i3; while (0);
 STACKTOP = i10;
 return i1 | 0;
}

function _System_Enum_Internal_GetInfo(i1, i11, i2) {
 i1 = i1 | 0;
 i11 = i11 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i8 = i10 + 4 | 0;
 i9 = i10;
 i7 = _RuntimeType_DeRef(HEAP32[i11 >> 2] | 0) | 0;
 i4 = i7 + 100 | 0;
 i5 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 124 >> 2] | 0, (HEAP32[i4 >> 2] | 0) + -1 | 0) | 0;
 i6 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 128 >> 2] | 0, (HEAP32[i4 >> 2] | 0) + -1 | 0) | 0;
 i7 = i7 + 104 | 0;
 i3 = 0;
 i1 = 0;
 while (1) {
  if (i3 >>> 0 >= (HEAP32[i4 >> 2] | 0) >>> 0) break;
  i2 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  if (HEAP16[i2 + 8 >> 1] & 64) {
   HEAP32[i8 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i2 + 12 >> 2] | 0) | 0;
   _SystemArray_StoreElement(i5, i1, i8);
   _MetaData_GetConstant(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 + 36 >> 2] | 0, i9);
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

function _TreeRemove(i7, i1) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i8 = HEAP32[7472] | 0;
 do if ((i8 | 0) == (i7 | 0)) i1 = i7; else {
  if ((i7 | 0) != (i1 | 0)) {
   i8 = i7 + ((i7 >>> 0 < i1 >>> 0 & 1) << 2) | 0;
   HEAP32[i8 >> 2] = _TreeRemove(HEAP32[i8 >> 2] | 0, i1) | 0;
   i1 = i7;
   break;
  }
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = (i5 | 0) == (i8 | 0);
  if (!i1) {
   i6 = i7 + 4 | 0;
   if ((HEAP32[i6 >> 2] | 0) != (i8 | 0)) {
    i2 = i5;
    i1 = i5;
    while (1) {
     i3 = i1 + 4 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if ((i4 | 0) == (i8 | 0)) break; else {
      i2 = i3;
      i1 = i4;
     }
    }
    i9 = HEAP32[i1 >> 2] | 0;
    i10 = i1 + 8 | 0;
    i4 = HEAP8[i10 >> 0] | 0;
    HEAP32[i1 >> 2] = i5;
    HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
    i8 = i7 + 8 | 0;
    HEAP8[i10 >> 0] = HEAP8[i8 >> 0] | 0;
    HEAP32[i2 >> 2] = i7;
    HEAP32[i7 >> 2] = i9;
    HEAP32[i6 >> 2] = HEAP32[7472];
    HEAP8[i8 >> 0] = i4;
    HEAP32[i1 >> 2] = _TreeRemove(HEAP32[i1 >> 2] | 0, i7) | 0;
    break;
   }
  }
  i1 = HEAP32[i7 + ((i1 & 1) << 2) >> 2] | 0;
 } while (0);
 return _TreeBalance(i1) | 0;
}

function _MethodState_Direct(i6, i7, i2, i8) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 i8 = i8 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0;
 if (!(HEAP8[i7 + 32 >> 0] | 0)) {
  i1 = _MetaData_GetTypeDefFromMethodDef(i7) | 0;
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
 }
 i5 = _Thread_StackAlloc(i6, 56) | 0;
 HEAP32[i5 + 32 >> 2] = 0;
 HEAP32[i5 + 48 >> 2] = i2;
 HEAP32[i5 >> 2] = HEAP32[i7 + 4 >> 2];
 i1 = i5 + 4 | 0;
 HEAP32[i1 >> 2] = i7;
 i3 = i7 + 28 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if (!i2) {
  _JIT_Prepare(i7, 0);
  i4 = HEAP32[i3 >> 2] | 0;
  i1 = HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] | 0;
 } else {
  i4 = i2;
  i1 = i2;
 }
 HEAP32[i5 + 8 >> 2] = i4;
 HEAP32[i5 + 12 >> 2] = 0;
 HEAP32[i5 + 16 >> 2] = _Thread_StackAlloc(i6, HEAP32[i1 + 8 >> 2] | 0) | 0;
 HEAP32[i5 + 20 >> 2] = 0;
 HEAP32[i5 + 28 >> 2] = i8;
 HEAP32[i5 + 36 >> 2] = 0;
 HEAP32[i5 + 40 >> 2] = 0;
 i8 = i7 + 40 | 0;
 i7 = _Thread_StackAlloc(i6, (HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0) | 0;
 HEAP32[i5 + 24 >> 2] = i7;
 _memset(i7 | 0, 0, (HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0) | 0;
 return i5 | 0;
}

function _System_Net_Dns_Internal_GetHostEnt(i1, i2, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i7 = i7 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(272);
 i4 = i8;
 i5 = i8 + 8 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i3 = _SystemString_GetString(HEAP32[i2 >> 2] | 0, i4) | 0;
 i4 = HEAP32[i4 >> 2] | 0;
 i1 = 0;
 while (1) {
  i2 = i5 + i1 | 0;
  if (!(i1 >>> 0 < 256 & i1 >>> 0 < i4 >>> 0)) break;
  HEAP8[i2 >> 0] = HEAP16[i3 + (i1 << 1) >> 1];
  i1 = i1 + 1 | 0;
 }
 HEAP8[i2 >> 0] = 0;
 i4 = _gethostbyname(i5 | 0) | 0;
 HEAP32[i6 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i4 >> 2] | 0) | 0;
 i4 = i4 + 16 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i1 = 0;
 while (1) if (!(HEAP32[i2 + (i1 << 2) >> 2] | 0)) break; else i1 = i1 + 1 | 0;
 i3 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 128 >> 2] | 0, i1) | 0;
 HEAP32[i7 >> 2] = i3;
 i1 = 0;
 while (1) {
  i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (!i2) break;
  _SystemArray_StoreElement(i3, i1, i2);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i8;
 return 0;
}

function _CLIFile_GetMetaDataForAssembly(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
   i1 = 11971;
   break;
  } else i2 = i2 + 1 | 0;
 }
 i3 = (_strncmp(11978, i1, 7) | 0) == 0;
 i3 = i3 ? 11971 : i1;
 i1 = 29864;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) {
   i1 = 8;
   break;
  }
  i2 = (HEAP32[i1 >> 2] | 0) + 20 | 0;
  if (!(_strcmp(i3, HEAP32[(_MetaData_GetTableRow(HEAP32[i2 >> 2] | 0, 536870913) | 0) + 20 >> 2] | 0) | 0)) {
   i1 = 7;
   break;
  } else i1 = i1 + 4 | 0;
 }
 do if ((i1 | 0) == 7) i5 = HEAP32[i2 >> 2] | 0; else if ((i1 | 0) == 8) {
  HEAP32[i4 >> 2] = i3;
  _sprintf(i6, 11986, i4) | 0;
  i1 = _CLIFile_Load(i6) | 0;
  if (!i1) {
   HEAP32[i7 >> 2] = i6;
   _Crash(11993, i7);
  } else {
   i5 = HEAP32[i1 + 20 >> 2] | 0;
   break;
  }
 } while (0);
 STACKTOP = i8;
 return i5 | 0;
}

function _Sys_GetMethodDesc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 i2 = HEAP32[i6 + 12 >> 2] | 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i4 + 8 >> 2] = i3;
 _sprintf(36776, 17511, i4) | 0;
 i4 = i1 + 14 | 0;
 i3 = i1 + 34 | 0;
 i2 = i1 + 36 | 0;
 i1 = ((HEAPU16[i4 >> 1] | 0) >>> 4 & 1 ^ 1) & 65535;
 while (1) {
  if (i1 >>> 0 >= (HEAPU16[i3 >> 1] | 0) >>> 0) break;
  if (i1 >>> 0 > (((HEAPU16[i4 >> 1] | 0) >>> 4 & 1 ^ 1) & 65535) >>> 0) {
   i6 = 36776 + (_strlen(36776) | 0) | 0;
   HEAP8[i6 >> 0] = 44;
   HEAP8[i6 + 1 >> 0] = 0;
  }
  i7 = 36776 + (_strlen(36776) | 0) | 0;
  i6 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 * 12 | 0) >> 2] | 0) + 12 >> 2] | 0;
  _memcpy(i7 | 0, i6 | 0, (_strlen(i6) | 0) + 1 | 0) | 0;
  i1 = i1 + 1 | 0;
 }
 i7 = 36776 + (_strlen(36776) | 0) | 0;
 HEAP8[i7 >> 0] = 41;
 HEAP8[i7 + 1 >> 0] = 0;
 STACKTOP = i5;
 return 36776;
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
    i1 = _MetaData_GetTypeDefFromName(_MetaData_GetResolutionScopeMetaData(i2, HEAP32[i7 + 4 >> 2] | 0, i6) | 0, HEAP32[i7 + 12 >> 2] | 0, HEAP32[i7 + 8 >> 2] | 0, HEAP32[i6 >> 2] | 0, 1) | 0;
    HEAP32[i7 >> 2] = i1;
    break L1;
   }
  case 27:
   {
    HEAP32[i6 >> 2] = _MetaData_GetBlob(HEAP32[i7 + 8 >> 2] | 0, 0) | 0;
    i1 = _Type_GetTypeFromSig(HEAP32[i7 + 4 >> 2] | 0, i6, i4, i5) | 0;
    break L1;
   }
  default:
   {
    HEAP32[i9 >> 2] = i3;
    _Crash(16533, i9);
   }
  } else i1 = i8;
 } while (0);
 STACKTOP = i10;
 return i1 | 0;
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
 i5 = 5584;
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
  if (!(HEAP32[HEAP32[(___pthread_self_448() | 0) + 188 >> 2] >> 2] | 0)) if ((i2 & -128 | 0) == 57216) {
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

function _System_Array_Internal_SetValue(i3, i4, i8) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = _Heap_GetType(i3) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i1 = _Heap_GetType(i6) | 0;
 i7 = HEAP32[i7 + 96 >> 2] | 0;
 i5 = i7 + 88 | 0;
 if (!(_Type_IsAssignableFrom(i7, i1) | 0)) if ((HEAP32[i5 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 184 >> 2] | 0)) if ((HEAP32[HEAP32[i7 + 92 >> 2] >> 2] | 0) == (i1 | 0)) i2 = 4; else i1 = 0; else i1 = 0; else i2 = 4;
 do if ((i2 | 0) == 4) {
  i2 = HEAP32[i7 + 64 >> 2] | 0;
  i1 = i3 + 4 + (Math_imul(i2, HEAP32[i4 + 4 >> 2] | 0) | 0) | 0;
  if (!(HEAP8[i7 + 34 >> 0] | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = 1;
   break;
  }
  if ((HEAP32[i5 >> 2] | 0) != (HEAP32[(HEAP32[9026] | 0) + 184 >> 2] | 0)) {
   _memcpy(i1 | 0, i6 | 0, i2 | 0) | 0;
   i1 = 1;
   break;
  }
  if (!i6) {
   _memset(i1 | 0, 0, i2 | 0) | 0;
   i1 = 1;
   break;
  } else {
   HEAP32[i1 >> 2] = 1;
   _memcpy(i1 + 4 | 0, i6 | 0, i2 + -4 | 0) | 0;
   i1 = 1;
   break;
  }
 } while (0);
 HEAP32[i8 >> 2] = i1;
 return 0;
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
   i1 = HEAP32[i2 >> 2] | 0;
   switch ((i1 >>> 24 & 255) << 24 >> 24) {
   case 27:
   case 1:
    break;
   default:
    {
     HEAP32[i8 >> 2] = i1;
     _Crash(16379, i8);
    }
   }
   i1 = _FindFieldInType(_MetaData_GetTypeDefFromDefRefOrSpec(i5, i1, i6, i7) | 0, HEAP32[i9 + 8 >> 2] | 0) | 0;
   if ((HEAP32[i2 >> 2] & -16777216 | 0) != 16777216) break L1;
   HEAP32[i9 >> 2] = i1;
   break L1;
  }
 default:
  {
   HEAP32[i4 >> 2] = i2;
   _Crash(16856, i4);
  }
 } else i1 = i3; while (0);
 STACKTOP = i10;
 return i1 | 0;
}

function _System_Type_GetMethods(i7, i1, i2) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i6;
 i1 = HEAP32[i7 >> 2] | 0;
 i3 = _Type_GetArrayTypeDef(HEAP32[(HEAP32[9026] | 0) + 196 >> 2] | 0, 0, 0) | 0;
 i5 = i1 + 112 | 0;
 i3 = _SystemArray_NewVector(i3, HEAP32[i5 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 i2 = i1 + 116 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) break;
  i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  HEAP32[i4 >> 2] = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 196 >> 2] | 0) | 0;
  _SystemArray_StoreElement(i3, i1, i4);
  HEAP32[HEAP32[i4 >> 2] >> 2] = i7;
  i10 = _SystemString_FromCharPtrASCII(HEAP32[i9 + 16 >> 2] | 0) | 0;
  i8 = HEAP32[i4 >> 2] | 0;
  HEAP32[i8 + 4 >> 2] = i10;
  HEAP32[i8 + 8 >> 2] = HEAPU16[i9 + 14 >> 1];
  HEAP32[i8 + 12 >> 2] = i9;
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i6;
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
   if ((FUNCTION_TABLE_iii[i7 & 63](i3, i2) | 0) > -1) if ((FUNCTION_TABLE_iii[i7 & 63](i3, i4) | 0) > -1) break L1;
   i3 = i1 + 1 | 0;
   i1 = i11 + (i1 << 2) | 0;
   if ((FUNCTION_TABLE_iii[i7 & 63](i2, i4) | 0) > -1) {
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

function ___shgetc(i7) {
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0;
 i2 = i7 + 104 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i1) i8 = 3; else if ((HEAP32[i7 + 108 >> 2] | 0) < (i1 | 0)) i8 = 3; else i8 = 4;
 if ((i8 | 0) == 3) {
  i1 = ___uflow(i7) | 0;
  if ((i1 | 0) < 0) i8 = 4; else {
   i3 = HEAP32[i2 >> 2] | 0;
   i2 = i7 + 8 | 0;
   if (!i3) {
    i3 = HEAP32[i2 >> 2] | 0;
    i4 = i7 + 108 | 0;
    i5 = i3;
    i2 = HEAP32[i7 + 4 >> 2] | 0;
   } else {
    i5 = HEAP32[i2 >> 2] | 0;
    i2 = HEAP32[i7 + 4 >> 2] | 0;
    i4 = i7 + 108 | 0;
    i3 = i3 - (HEAP32[i4 >> 2] | 0) | 0;
    i6 = i5;
    if ((i5 - i2 | 0) < (i3 | 0)) {
     i5 = i6;
     i3 = i6;
    } else {
     i5 = i2 + (i3 + -1) | 0;
     i3 = i6;
    }
   }
   HEAP32[i7 + 100 >> 2] = i5;
   if (i3 | 0) HEAP32[i4 >> 2] = i3 + 1 - i2 + (HEAP32[i4 >> 2] | 0);
   i2 = i2 + -1 | 0;
   if ((HEAPU8[i2 >> 0] | 0 | 0) != (i1 | 0)) HEAP8[i2 >> 0] = i1;
  }
 }
 if ((i8 | 0) == 4) {
  HEAP32[i7 + 100 >> 2] = 0;
  i1 = -1;
 }
 return i1 | 0;
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

function _FindGenericParam(i1, i10) {
 i1 = i1 | 0;
 i10 = i10 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = HEAP32[i11 + 192 >> 2] | 0;
 i11 = _MetaData_GetTableRow(i11, 704643073) | 0;
 i9 = HEAP32[i1 + 80 >> 2] | 0;
 i1 = i7 + -1 | 0;
 i7 = 0;
 L1 : while (1) {
  i4 = i1;
  L3 : while (1) {
   i8 = (i4 - i7 >> 1) + i7 | 0;
   if ((i4 | 0) < (i7 | 0)) {
    i1 = 0;
    break L1;
   }
   i6 = HEAP32[i11 + (i8 * 12 | 0) + 4 >> 2] | 0;
   i5 = i6 >>> 0 < i9 >>> 0;
   i6 = i6 >>> 0 > i9 >>> 0;
   L6 : while (1) {
    if (i5) break L3;
    if (i6) break; else i3 = i8;
    while (1) {
     i1 = i11 + (i3 * 12 | 0) | 0;
     if ((HEAP32[i11 + (i3 * 12 | 0) + 4 >> 2] | 0) != (i9 | 0)) continue L6;
     i2 = HEAPU16[i1 >> 1] | 0;
     if (i2 >>> 0 < i10 >>> 0) i1 = 1; else if (i2 >>> 0 > i10 >>> 0) i1 = -1; else break L1;
     i3 = i3 + i1 | 0;
    }
   }
   i4 = i8 + -1 | 0;
  }
  i1 = i4;
  i7 = i8 + 1 | 0;
 }
 return i1 | 0;
}

function _System_Type_GetMethod(i6, i1, i8) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i7 = i10;
 _DotNetStringToCString(i7, 256, HEAP32[i1 >> 2] | 0);
 i5 = HEAP32[i6 >> 2] | 0;
 i4 = HEAP32[i5 + 112 >> 2] | 0;
 i5 = i5 + 116 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i4 >>> 0) {
   i1 = 0;
   break;
  }
  i2 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  i3 = i2 + 16 | 0;
  if (!(_strcmp(HEAP32[i3 >> 2] | 0, i7) | 0)) {
   i9 = 4;
   break;
  } else i1 = i1 + 1 | 0;
 }
 if ((i9 | 0) == 4) {
  i1 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 196 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = i6;
  HEAP32[i1 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i3 >> 2] | 0) | 0;
  HEAP32[i1 + 8 >> 2] = HEAPU16[i2 + 14 >> 1];
  HEAP32[i1 + 12 >> 2] = i2;
 }
 HEAP32[i8 >> 2] = i1;
 STACKTOP = i10;
 return 0;
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
 i8 = _MetaData_GetMethodDefFromDefRefOrSpec(HEAP32[i7 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, i4, i5) | 0;
 i9 = i8 + 48 | 0;
 if (!(HEAP32[i9 >> 2] | 0)) HEAP32[i9 >> 2] = _MetaData_GetTypeDefFromMethodDef(i8) | 0;
 HEAP32[i6 >> 2] = _MetaData_GetBlob(HEAP32[i1 + 12 >> 2] | 0, 0) | 0;
 _MetaData_DecodeSigEntry(i6) | 0;
 i2 = _MetaData_DecodeSigEntry(i6) | 0;
 i3 = _malloc(i2 << 2) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i2 | 0)) break;
  HEAP32[i3 + (i1 << 2) >> 2] = _Type_GetTypeFromSig(HEAP32[i7 >> 2] | 0, i6, i4, i5) | 0;
  i1 = i1 + 1 | 0;
 }
 i9 = _Generics_GetMethodDefFromCoreMethod(i8, HEAP32[i9 >> 2] | 0, i2, i3) | 0;
 _free(i3);
 STACKTOP = i10;
 return i9 | 0;
}

function _MetaData_GetTypeDefFromName(i2, i7, i9, i3, i10) {
 i2 = i2 | 0;
 i7 = i7 | 0;
 i9 = i9 | 0;
 i3 = i3 | 0;
 i10 = i10 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i11 = i12;
 i4 = i2 + 32 | 0;
 i5 = (i3 | 0) == 0;
 i1 = 1;
 while (1) {
  if (i1 >>> 0 > (HEAP32[i4 >> 2] | 0) >>> 0) {
   i1 = 8;
   break;
  }
  i8 = _MetaData_GetTableRow(i2, i1 & 16777215 | 33554432) | 0;
  if ((HEAP32[i8 + 120 >> 2] | 0) == (i3 | 0)) if (!(_strcmp(i9, HEAP32[i8 + 12 >> 2] | 0) | 0)) {
   if (!i5) {
    i1 = 10;
    break;
   }
   if (!(_strcmp(i7, HEAP32[i8 + 16 >> 2] | 0) | 0)) {
    i1 = 10;
    break;
   }
  }
  i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 8) if (!(i10 << 24 >> 24)) i6 = 0; else {
  HEAP32[i11 >> 2] = i7;
  HEAP32[i11 + 4 >> 2] = i9;
  _Crash(16600, i11);
 } else if ((i1 | 0) == 10) i6 = i8;
 STACKTOP = i12;
 return i6 | 0;
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
 i5 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i5 + 88 >> 2] | 0;
 L1 : do if (!i1) i3 = 0; else {
  i1 = i1 + 84 | 0;
  i2 = 0;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) {
    i3 = i2;
    break L1;
   }
   if ((HEAP32[i1 >> 2] | 0) == (i5 | 0)) i2 = HEAP32[i1 + 8 >> 2] | 0;
   i1 = i1 + 4 | 0;
  }
 } while (0);
 i4 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 188 >> 2] | 0, i3) | 0;
 HEAP32[i6 >> 2] = i4;
 i2 = i5 + 92 | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) break;
  HEAP32[i7 >> 2] = _Type_GetTypeObject(HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0;
  _SystemArray_StoreElement(i4, i1, i7);
  i1 = i1 + 1 | 0;
 }
 STACKTOP = i8;
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
 HEAP32[i9 + 32 >> 2] = 153;
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
  HEAP32[i5 >> 2] = (HEAPU16[i6 + 8 >> 1] | 0) + i1;
  HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  i1 = i6;
 }
 STACKTOP = i7;
 return i1 | 0;
}

function _System_Console_Write(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(144);
 i9 = i10;
 i7 = i10 + 4 | 0;
 i8 = i10 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (i1 | 0) {
  i5 = _SystemString_GetString(i1, i7) | 0;
  i6 = i8 + -1 | 0;
  i4 = 0;
  i1 = HEAP32[i7 >> 2] | 0;
  while (1) {
   if (!i1) break;
   i2 = i1 >>> 0 < 128 ? i1 : 128;
   i3 = i2 + 1 | 0;
   i1 = 0;
   while (1) {
    if (i1 >>> 0 >= i2 >>> 0) break;
    i11 = HEAP16[i5 + (i1 + i4 << 1) >> 1] | 0;
    HEAP8[i8 + i1 >> 0] = i11 & 255 ? i11 & 255 : 63;
    i1 = i1 + 1 | 0;
   }
   HEAP8[i6 + i3 >> 0] = 0;
   HEAP32[i9 >> 2] = i8;
   _printf(19348, i9) | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - i2 | 0;
   HEAP32[i7 >> 2] = i1;
   i4 = i2 + i4 | 0;
  }
 }
 STACKTOP = i10;
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
  _printf(19715, i6) | 0;
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

function _FindFieldInType(i4, i5) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i7 = i8;
 if (!(HEAP8[i4 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i4, 0, 0);
 i2 = HEAP32[i4 + 100 >> 2] | 0;
 i3 = i4 + 104 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) {
   i1 = 6;
   break;
  }
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if (!(_strcmp(HEAP32[i6 + 12 >> 2] | 0, i5) | 0)) {
   i1 = 7;
   break;
  } else i1 = i1 + 1 | 0;
 }
 if ((i1 | 0) == 6) {
  i6 = HEAP32[i4 + 16 >> 2] | 0;
  i8 = HEAP32[i4 + 12 >> 2] | 0;
  HEAP32[i7 >> 2] = i5;
  HEAP32[i7 + 4 >> 2] = i6;
  HEAP32[i7 + 8 >> 2] = i8;
  _Crash(16920, i7);
 } else if ((i1 | 0) == 7) {
  STACKTOP = i8;
  return i6 | 0;
 }
 return 0;
}

function _fputc(i4, i7) {
 i4 = i4 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 i5 = i4 & 255;
 i1 = i4 & 255;
 if ((HEAP32[i7 + 76 >> 2] | 0) < 0) i6 = 3; else if (!(___lockfile(i7) | 0)) i6 = 3; else {
  if ((i1 | 0) == (HEAP8[i7 + 75 >> 0] | 0)) i6 = 10; else {
   i2 = i7 + 20 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (i3 >>> 0 < (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
    HEAP32[i2 >> 2] = i3 + 1;
    HEAP8[i3 >> 0] = i5;
   } else i6 = 10;
  }
  if ((i6 | 0) == 10) i1 = ___overflow(i7, i4) | 0;
  ___unlockfile(i7);
 }
 do if ((i6 | 0) == 3) {
  if ((i1 | 0) != (HEAP8[i7 + 75 >> 0] | 0)) {
   i2 = i7 + 20 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (i3 >>> 0 < (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
    HEAP32[i2 >> 2] = i3 + 1;
    HEAP8[i3 >> 0] = i5;
    break;
   }
  }
  i1 = ___overflow(i7, i4) | 0;
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
  } else if ((i1 | 0) == 6) _Crash(19795, i5);
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

function _do_read_775(i6, i7, i8) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0;
 i9 = i6 + 84 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i5 = HEAP32[i5 >> 2] | 0 ? i5 : 6116;
 i3 = i6 + 48 | 0;
 i4 = i6 + 44 | 0;
 L1 : do if (!(HEAP32[i3 >> 2] | 0)) i1 = 0; else {
  i1 = 0;
  do {
   i2 = HEAP32[i5 + (i1 << 2) >> 2] | 0;
   if (!i2) break L1;
   HEAP8[(HEAP32[i4 >> 2] | 0) + i1 >> 0] = (i2 | 0) < 128 ? i2 & 255 : 64;
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0);
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i6 + 4 | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i2 + i1;
 HEAP32[i9 >> 2] = i5 + (i1 << 2);
 if ((i8 | 0) != 0 & (i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i2 + 1;
  HEAP8[i7 >> 0] = HEAP8[i2 >> 0] | 0;
  i1 = 1;
 } else i1 = 0;
 return i1 | 0;
}

function _Thread() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i1;
 i2 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 132 >> 2] | 0) | 0;
 _Heap_MakeUndeletable(i2);
 i4 = (HEAP32[9023] | 0) + 1 | 0;
 HEAP32[9023] = i4;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 20 >> 2] = 0;
 HEAP32[i2 + 24 >> 2] = 0;
 HEAP32[i2 + 32 >> 2] = 0;
 HEAP32[i2 + 44 >> 2] = 0;
 HEAP32[i2 + 48 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = 8;
 i4 = _malloc(30008) | 0;
 HEAP32[i2 + 52 >> 2] = i4;
 HEAP32[i4 + 3e4 >> 2] = 0;
 HEAP32[i4 + 30004 >> 2] = 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 _log_f(1, 19892, i3);
 HEAP32[i2 + 56 >> 2] = HEAP32[9024];
 HEAP32[9024] = i2;
 STACKTOP = i1;
 return i2 | 0;
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
 i4 = _Generics_GetMethodDefFromCoreMethod(i4, HEAP32[i4 + 48 >> 2] | 0, i2, i5) | 0;
 _free(i5);
 i5 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 196 >> 2] | 0) | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[i4 + 16 >> 2] | 0) | 0;
 HEAP32[i5 + 8 >> 2] = HEAPU16[i4 + 14 >> 1];
 HEAP32[i5 + 12 >> 2] = i4;
 HEAP32[i7 >> 2] = i5;
 return 0;
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
  _Crash(16168, i3);
 }
 i1 = HEAP32[(_MetaData_GetTableRow(i1, i2) | 0) + 40 >> 2] | 0;
 i2 = HEAP8[i1 >> 0] | 0;
 if (i2 << 24 >> 24 == 8) {
  i5 = (HEAP32[i1 + 8 >> 2] | 0) + 1 | 0;
  i5 = HEAPU8[i5 >> 0] | HEAPU8[i5 + 1 >> 0] << 8 | HEAPU8[i5 + 2 >> 0] << 16 | HEAPU8[i5 + 3 >> 0] << 24;
  HEAP8[i4 >> 0] = i5;
  HEAP8[i4 + 1 >> 0] = i5 >> 8;
  HEAP8[i4 + 2 >> 0] = i5 >> 16;
  HEAP8[i4 + 3 >> 0] = i5 >> 24;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i5 >> 2] = i2 & 255;
  _Crash(16217, i5);
 }
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
 i1 = _SystemArray_NewVector(HEAP32[(HEAP32[9026] | 0) + 124 >> 2] | 0, i3) | 0;
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
 i1 = HEAP32[968] | 0;
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
  HEAP32[968] = -1;
  i1 = 1;
 }
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
 _DotNetStringToCString(i3, 256, HEAP32[i2 + 4 >> 2] | 0);
 _DotNetStringToCString(i4, 256, HEAP32[i2 + 8 >> 2] | 0);
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i1) i1 = _CLIFile_FindTypeInAllLoadedAssemblies(i3, i4) | 0; else {
  _DotNetStringToCString(i5, 256, i1);
  i1 = _MetaData_GetTypeDefFromName(_CLIFile_GetMetaDataForAssembly(i5) | 0, i3, i4, 0, 1) | 0;
 }
 if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
 HEAP32[i7 >> 2] = _Type_GetTypeObject(i1) | 0;
 STACKTOP = i6;
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

function _System_String_InternalIndexOfAny(i2, i1, i9) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i9 = i9 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = i8 + 4 | 0;
 i8 = HEAP32[i8 >> 2] | 0;
 i10 = (HEAP32[i1 + 12 >> 2] | 0) == 0;
 i1 = (HEAP32[i1 + 8 >> 2] | 0) + i4 | 0;
 i5 = i10 ? i4 + -1 | 0 : i1;
 i6 = i10 ? -1 : 1;
 i3 = i2 + 4 | 0;
 i1 = i10 ? i1 + -1 | 0 : i4;
 L1 : while (1) {
  if ((i1 | 0) == (i5 | 0)) {
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
  i1 = i1 + i6 | 0;
 }
 HEAP32[i9 >> 2] = i1;
 return 0;
}

function _System_Array_Reverse(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[(HEAP32[(_Heap_GetType(i1) | 0) + 96 >> 2] | 0) + 64 >> 2] | 0;
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

function _TreeBalance(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i5 = i1 + 8 | 0;
 i2 = HEAP8[i5 >> 0] | 0;
 i6 = (i2 & 255) + -1 | 0;
 i3 = (HEAP32[i1 + 4 >> 2] | 0) + 8 | 0;
 i4 = HEAP8[i3 >> 0] | 0;
 if ((i4 & 255 | 0) < (i6 | 0) ? 1 : (HEAPU8[(HEAP32[i1 >> 2] | 0) + 8 >> 0] | 0 | 0) < (i6 | 0)) {
  i2 = i2 + -1 << 24 >> 24;
  HEAP8[i5 >> 0] = i2;
  if ((i4 & 255) > (i2 & 255)) HEAP8[i3 >> 0] = i2;
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

function _GetMethodDefs() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = HEAP32[(HEAP32[9026] | 0) + 4 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if (!(HEAP8[i1 + 33 >> 0] | 0)) i5 = (HEAP32[i1 + 160 >> 2] | 0) + -1 | 0; else i5 = HEAP32[i6 + 48 >> 2] & 16777215 | 100663296;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 while (1) {
  if (i2 >>> 0 > i5 >>> 0) break;
  i3 = _MetaData_GetTableRow(i6, i2) | 0;
  i4 = i3 + 16 | 0;
  i1 = 0;
  while (1) {
   if (i1 >>> 0 >= 13) break;
   if (!(_strcmp(HEAP32[i4 >> 2] | 0, HEAP32[3876 + (i1 << 2) >> 2] | 0) | 0)) {
    i7 = 9;
    break;
   }
   i1 = i1 + 1 | 0;
  }
  if ((i7 | 0) == 9) {
   i7 = 0;
   HEAP32[36112 + (i1 << 2) >> 2] = i3;
  }
  i2 = i2 + 1 | 0;
 }
 HEAP8[38824] = 1;
 return;
}

function _System_Array_Internal_GetValue(i2, i1, i5) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i3 = 0, i4 = 0;
 i1 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[(_Heap_GetType(i2) | 0) + 96 >> 2] | 0;
 i4 = HEAP32[i3 + 64 >> 2] | 0;
 i1 = i2 + 4 + (Math_imul(i4, i1) | 0) | 0;
 if (!(HEAP8[i3 + 34 >> 0] | 0)) HEAP32[i5 >> 2] = HEAP32[i1 >> 2]; else {
  if ((HEAP32[i3 + 88 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 184 >> 2] | 0)) if (!(HEAP32[i1 >> 2] | 0)) i1 = 0; else {
   i3 = _Heap_AllocType(HEAP32[HEAP32[i3 + 92 >> 2] >> 2] | 0) | 0;
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

function _scalbn(d2, i1) {
 d2 = +d2;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 if ((i1 | 0) > 1023) {
  d2 = d2 * 8988465674311579538646525.0e283;
  i3 = i1 + -1023 | 0;
  i4 = (i3 | 0) > 1023;
  i1 = i1 + -2046 | 0;
  d2 = i4 ? d2 * 8988465674311579538646525.0e283 : d2;
  i1 = i4 ? ((i1 | 0) < 1023 ? i1 : 1023) : i3;
 } else if ((i1 | 0) < -1022) {
  d2 = d2 * 2.2250738585072014e-308;
  i4 = i1 + 1022 | 0;
  i3 = (i4 | 0) < -1022;
  i1 = i1 + 2044 | 0;
  d2 = i3 ? d2 * 2.2250738585072014e-308 : d2;
  i1 = i3 ? ((i1 | 0) > -1022 ? i1 : -1022) : i4;
 }
 i3 = _bitshift64Shl(i1 + 1023 | 0, 0, 52) | 0;
 i4 = tempRet0;
 HEAP32[tempDoublePtr >> 2] = i3;
 HEAP32[tempDoublePtr + 4 >> 2] = i4;
 return +(d2 * +HEAPF64[tempDoublePtr >> 3]);
}

function _MetaData_GetTypeDefFromMethodDef(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 i3 = i4 + 52 | 0;
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 while (1) {
  if (!i1) {
   i1 = 4;
   break;
  }
  i5 = _MetaData_GetTableRow(i2, i1 & 16777215 | 33554432) | 0;
  if ((HEAP32[i5 + 28 >> 2] | 0) >>> 0 > (HEAP32[i3 >> 2] | 0) >>> 0) i1 = i1 + -1 | 0; else {
   i1 = 5;
   break;
  }
 }
 if ((i1 | 0) == 4) {
  HEAP32[i6 >> 2] = HEAP32[i4 + 16 >> 2];
  _Crash(16722, i6);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i7;
  return i5 | 0;
 }
 return 0;
}

function _MetaData_GetTypeDefFromFieldDef(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i6 = i7;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 i3 = i4 + 36 | 0;
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 while (1) {
  if (!i1) {
   i1 = 4;
   break;
  }
  i5 = _MetaData_GetTableRow(i2, i1 & 16777215 | 33554432) | 0;
  if ((HEAP32[i5 + 24 >> 2] | 0) >>> 0 > (HEAP32[i3 >> 2] | 0) >>> 0) i1 = i1 + -1 | 0; else {
   i1 = 5;
   break;
  }
 }
 if ((i1 | 0) == 4) {
  HEAP32[i6 >> 2] = HEAP32[i4 + 12 >> 2];
  _Crash(16790, i6);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i7;
  return i5 | 0;
 }
 return 0;
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
   i1 = _CLIFile_GetMetaDataForAssembly(HEAP32[i1 + 16 >> 2] | 0) | 0;
   break;
  }
 case 1:
  {
   i1 = _MetaData_GetTypeDefFromDefRefOrSpec(i2, i3, 0, 0) | 0;
   HEAP32[i4 >> 2] = i1;
   i1 = HEAP32[i1 + 4 >> 2] | 0;
   break;
  }
 default:
  {
   HEAP32[i5 >> 2] = i3;
   _Crash(16654, i5);
  }
 }
 STACKTOP = i6;
 return i1 | 0;
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
  i2 = HEAPU8[i4 >> 0] | 0;
  if ((i1 & 192 | 0) == 128) {
   i1 = i2 | i1 << 8 & 16128;
   break;
  } else {
   i4 = i6 + 3 | 0;
   HEAP32[i5 >> 2] = i4;
   i3 = HEAP8[i3 >> 0] | 0;
   HEAP32[i5 >> 2] = i6 + 4;
   i1 = i2 << 16 | i1 << 24 & 520093696 | (i3 & 255) << 8 | (HEAPU8[i4 >> 0] | 0);
   break;
  }
 } while (0);
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
   i7 = HEAPU16[6124 + (i4 << 1) >> 1] | 0;
   i5 = i6 >>> 0 < i7 >>> 0;
   if (!i5) if (i6 >>> 0 < (HEAPU16[6124 + (i4 + 2 << 1) >> 1] | 0) >>> 0) break;
   i4 = i5 ? i3 : i2;
   i7 = i5 ? i1 : i3;
   i1 = i7;
   i2 = i4;
   i3 = ((i4 - i7 | 0) >>> 1) + i7 | 0;
  }
  i1 = HEAPU16[6124 + ((i4 | 1) << 1) >> 1] | 0;
  if (i1 & 32768) i1 = HEAPU8[17554 + (i6 - i7 + (i1 & 32767)) >> 0] | 0;
 }
 HEAP32[i8 >> 2] = i1;
 return 0;
}

function _System_Threading_Thread_Start(i5, i1, i2) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
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
  HEAP32[i3 + (i1 << 2) >> 2] = HEAP32[i5 + 8 >> 2];
  i1 = i1 + 4 | 0;
 }
 _Thread_SetEntryPoint(i5, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 + 52 >> 2] | 0, i3, i1);
 STACKTOP = i4;
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
 i1 = HEAP32[9019] | 0;
 if (!i1) {
  HEAP8[i2 >> 0] = HEAP8[19709] | 0;
  HEAP8[i2 + 1 >> 0] = HEAP8[19710] | 0;
  HEAP8[i2 + 2 >> 0] = HEAP8[19711] | 0;
  HEAP8[i2 + 3 >> 0] = HEAP8[19712] | 0;
  HEAP8[i2 + 4 >> 0] = HEAP8[19713] | 0;
  HEAP8[i2 + 5 >> 0] = HEAP8[19714] | 0;
  i1 = _SystemString_FromCharPtrASCII(i2) | 0;
  HEAP32[9019] = i1;
  _Heap_MakeUndeletable(i1);
  i1 = HEAP32[9019] | 0;
 }
 HEAP32[i4 >> 2] = i1;
 STACKTOP = i3;
 return 0;
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

function _CLIFile_GetMetaDataForLoadedAssembly(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i5;
 i1 = 29864;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) {
   i1 = 4;
   break;
  }
  i2 = (HEAP32[i1 >> 2] | 0) + 20 | 0;
  if (!(_strcmp(i3, HEAP32[(_MetaData_GetTableRow(HEAP32[i2 >> 2] | 0, 536870913) | 0) + 20 >> 2] | 0) | 0)) {
   i1 = 5;
   break;
  } else i1 = i1 + 4 | 0;
 }
 if ((i1 | 0) == 4) {
  HEAP32[i4 >> 2] = i3;
  _Crash(11944, i4);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i5;
  return HEAP32[i2 >> 2] | 0;
 }
 return 0;
}

function _CLIFile_FindTypeInAllLoadedAssemblies(i3, i4) {
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i6;
 i1 = 29864;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) {
   i1 = 4;
   break;
  }
  i2 = _MetaData_GetTypeDefFromName(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0, i3, i4, 0, 0) | 0;
  if (!i2) i1 = i1 + 4 | 0; else {
   i1 = 5;
   break;
  }
 }
 if ((i1 | 0) == 4) {
  HEAP32[i5 >> 2] = i3;
  HEAP32[i5 + 4 >> 2] = i4;
  _Crash(12032, i5);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i6;
  return i2 | 0;
 }
 return 0;
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
 do if (!i3) i1 = (HEAP32[9026] | 0) + 4 | 0; else {
  i1 = 36108;
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
   HEAP32[i1 + 8 >> 2] = HEAP32[9027];
   HEAP32[9027] = i1;
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

function _Heap_Alloc(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[7470] | 0;
 if (i1 >>> 0 >= (HEAP32[7471] | 0) >>> 0) {
  _GarbageCollect();
  i1 = HEAP32[7470] | 0;
  i5 = i1 + i2 | 0;
  i4 = i5 << 1;
  i6 = i5 + 1e6 | 0;
  i4 = i4 >>> 0 < i6 >>> 0 ? i6 : i4;
  i5 = i5 + 4e6 | 0;
  HEAP32[7471] = i4 >>> 0 > i5 >>> 0 ? i5 : i4;
 }
 i6 = _calloc(1, i2) | 0;
 HEAP32[i6 + 12 >> 2] = i3;
 HEAP8[i6 + 10 >> 0] = (HEAP32[i3 + 124 >> 2] | 0) != 0 & 1;
 HEAP32[7470] = i1 + i2;
 HEAP32[7473] = _TreeInsert(HEAP32[7473] | 0, i6) | 0;
 HEAP32[7474] = (HEAP32[7474] | 0) + 1;
 return i6 + 20 | 0;
}

function _DotNetStringToCString(i7, i2, i1) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i5 = i8;
 i4 = i8 + 8 | 0;
 i3 = _SystemString_GetString(i1, i4) | 0;
 i4 = HEAP32[i4 >> 2] | 0;
 if (i4 >>> 0 > i2 >>> 0) {
  HEAP32[i5 >> 2] = i4;
  HEAP32[i5 + 4 >> 2] = i2;
  _Crash(19737, i5);
 } else i6 = 0;
 while (1) {
  i1 = i7 + i6 | 0;
  if ((i6 | 0) == (i4 | 0)) break;
  HEAP8[i1 >> 0] = HEAP16[i3 + (i6 << 1) >> 1];
  i6 = i6 + 1 | 0;
 }
 HEAP8[i1 >> 0] = 0;
 STACKTOP = i8;
 return;
}

function _GarbageCollect() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32);
 i2 = i1;
 i8 = HEAP32[7470] | 0;
 i6 = HEAP32[7474] | 0;
 i4 = HEAP32[7475] | 0;
 HEAP32[7476] = (HEAP32[7476] | 0) + 1;
 _GC_Mark();
 _GC_Sweep();
 i7 = HEAP32[7470] | 0;
 i5 = HEAP32[7474] | 0;
 i3 = HEAP32[7475] | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i2 + 4 >> 2] = i7;
 HEAP32[i2 + 8 >> 2] = i6;
 HEAP32[i2 + 12 >> 2] = i5;
 HEAP32[i2 + 16 >> 2] = i4;
 HEAP32[i2 + 20 >> 2] = i3;
 _log_f(1, 12619, i2);
 STACKTOP = i1;
 return;
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

function _MetaData_GetImplMap(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
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
  if ((HEAP32[i4 + 4 >> 2] | 0) == (i3 | 0)) {
   i1 = 5;
   break;
  } else i1 = i1 + -1 | 0;
 }
 if ((i1 | 0) == 4) {
  HEAP32[i5 >> 2] = i3;
  _Crash(17035, i5);
 } else if ((i1 | 0) == 5) {
  STACKTOP = i6;
  return i4 | 0;
 }
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
   if ((i4 | 0) > (i1 | 0)) {
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

function _System_Array_Internal_Copy(i1, i4, i5) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i6 = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 i3 = _Heap_GetType(i1) | 0;
 i6 = _Heap_GetType(i2) | 0;
 i3 = HEAP32[i3 + 96 >> 2] | 0;
 if (!(_Type_IsAssignableFrom(HEAP32[i6 + 96 >> 2] | 0, i3) | 0)) i1 = 0; else {
  i6 = HEAP32[i3 + 64 >> 2] | 0;
  _memcpy((Math_imul(i6, HEAP32[i4 + 12 >> 2] | 0) | 0) + (i2 + 4) | 0, (Math_imul(i6, HEAP32[i4 + 4 >> 2] | 0) | 0) + (i1 + 4) | 0, Math_imul(i6, HEAP32[i4 + 16 >> 2] | 0) | 0) | 0;
  i1 = 1;
 }
 HEAP32[i5 >> 2] = i1;
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
  i2 = (HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 68 >> 2] | 0) + i2 | 0;
  i1 = i1 + 1 | 0;
 }
 i1 = i3 + 8 | 0;
 if (i2 >>> 0 > (HEAP32[i1 >> 2] | 0) >>> 0) HEAP32[i1 >> 2] = i2;
 return;
}

function _Thread_GetHeapRoots(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0;
 i1 = 36096;
 while (1) {
  i2 = HEAP32[i1 >> 2] | 0;
  if (!i2) break;
  i1 = i2 + 20 | 0;
  while (1) {
   i1 = HEAP32[i1 >> 2] | 0;
   if (!i1) break;
   i4 = i1 + 4 | 0;
   _Heap_SetRoots(i3, HEAP32[i1 + 16 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] | 0) + 8 >> 2] | 0);
   i4 = HEAP32[i4 >> 2] | 0;
   _Heap_SetRoots(i3, HEAP32[i1 + 24 >> 2] | 0, (HEAP32[(HEAP32[i4 + 28 >> 2] | 0) + 12 >> 2] | 0) + (HEAP32[i4 + 40 >> 2] | 0) | 0);
   i1 = i1 + 48 | 0;
  }
  i1 = i2 + 56 | 0;
 }
 return;
}

function _strncmp(i3, i5, i4) {
 i3 = i3 | 0;
 i5 = i5 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i6 = 0, i7 = 0;
 if (!i4) i1 = 0; else {
  i7 = HEAP8[i3 >> 0] | 0;
  i1 = i7 & 255;
  i6 = HEAP8[i5 >> 0] | 0;
  i2 = i6 & 255;
  L3 : do if (i7 << 24 >> 24) do {
   i4 = i4 + -1 | 0;
   if (!(i7 << 24 >> 24 == i6 << 24 >> 24 & ((i4 | 0) != 0 & i6 << 24 >> 24 != 0))) break L3;
   i3 = i3 + 1 | 0;
   i5 = i5 + 1 | 0;
   i7 = HEAP8[i3 >> 0] | 0;
   i1 = i7 & 255;
   i6 = HEAP8[i5 >> 0] | 0;
   i2 = i6 & 255;
  } while (i7 << 24 >> 24 != 0); while (0);
  i1 = i1 - i2 | 0;
 }
 return i1 | 0;
}

function _pad_674(i5, i2, i3, i4, i1) {
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
  _memset(i6 | 0, i2 | 0, (i1 >>> 0 < 256 ? i1 : 256) | 0) | 0;
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

function _System_String_GetHashCode(i2, i1, i6) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i3 + (i4 << 1) + -2 | 0;
 i4 = i2 + ((i4 << 1) + 2) | 0;
 i4 = i2 + ((i4 >>> 0 > i3 >>> 0 ? i4 : i3) + ~i2 + 4 & -4) | 0;
 i1 = 0;
 i2 = i3;
 while (1) {
  i3 = i1 * 31 | 0;
  if (i2 >>> 0 >= i5 >>> 0) break;
  i1 = (((HEAPU16[i2 >> 1] | 0) + i3 | 0) * 31 | 0) + (HEAPU16[i2 + 2 >> 1] | 0) | 0;
  i2 = i2 + 4 | 0;
 }
 if (i4 >>> 0 <= i5 >>> 0) i1 = (HEAPU16[i4 >> 1] | 0) + i3 | 0;
 HEAP32[i6 >> 2] = i1;
 return 0;
}

function _strcasecmp(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0;
 i4 = HEAP8[i2 >> 0] | 0;
 i1 = i4 & 255;
 L1 : do if (i4 << 24 >> 24) {
  i5 = i4;
  do {
   i4 = HEAP8[i3 >> 0] | 0;
   if (!(i4 << 24 >> 24)) break L1;
   if (i5 << 24 >> 24 != i4 << 24 >> 24) {
    i5 = _tolower(i1) | 0;
    if ((i5 | 0) != (_tolower(i4 & 255) | 0)) break L1;
   }
   i2 = i2 + 1 | 0;
   i3 = i3 + 1 | 0;
   i5 = HEAP8[i2 >> 0] | 0;
   i1 = i5 & 255;
  } while (i5 << 24 >> 24 != 0);
 } while (0);
 i5 = _tolower(i1) | 0;
 return i5 - (_tolower(HEAPU8[i3 >> 0] | 0) | 0) | 0;
}

function ___strerror_l(i2, i4) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0, i3 = 0;
 i3 = 0;
 while (1) {
  if ((HEAPU8[21737 + i3 >> 0] | 0) == (i2 | 0)) {
   i2 = 2;
   break;
  }
  i1 = i3 + 1 | 0;
  if ((i1 | 0) == 87) {
   i1 = 21825;
   i3 = 87;
   i2 = 5;
   break;
  } else i3 = i1;
 }
 if ((i2 | 0) == 2) if (!i3) i1 = 21825; else {
  i1 = 21825;
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

function _Type_IsValueType(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do if (!(HEAP32[i1 + 8 >> 2] & 32)) {
  if (!(_strcmp(HEAP32[i1 + 16 >> 2] | 0, 20464) | 0)) {
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   if (!(_strcmp(i2, 20471) | 0)) {
    i1 = 1;
    break;
   }
   if (!(_strcmp(i2, 20481) | 0)) {
    i1 = 0;
    break;
   }
  }
  i1 = _MetaData_GetTypeDefFromDefRefOrSpec(HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 20 >> 2] | 0, 0, 0) | 0;
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i1 = HEAPU8[i1 + 34 >> 0] | 0;
 } else i1 = 0; while (0);
 return i1 | 0;
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

function _System_String_InternalIndexOf(i2, i1, i6) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i5 = HEAP16[i1 >> 1] | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i8 = (HEAP32[i1 + 12 >> 2] | 0) == 0;
 i1 = (HEAP32[i1 + 8 >> 2] | 0) + i7 | 0;
 i3 = i8 ? i7 + -1 | 0 : i1;
 i4 = i8 ? -1 : 1;
 i2 = i2 + 4 | 0;
 i1 = i8 ? i1 + -1 | 0 : i7;
 while (1) {
  if ((i1 | 0) == (i3 | 0)) {
   i1 = -1;
   break;
  }
  if ((HEAP16[i2 + (i1 << 1) >> 1] | 0) == i5 << 16 >> 16) break;
  i1 = i1 + i4 | 0;
 }
 HEAP32[i6 >> 2] = i1;
 return 0;
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

function _puts(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i3 = HEAP32[1364] | 0;
 if ((HEAP32[i3 + 76 >> 2] | 0) > -1) i4 = ___lockfile(i3) | 0; else i4 = 0;
 do if ((_fputs(i1, i3) | 0) < 0) i1 = 1; else {
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
  i1 = (___overflow(i3, 10) | 0) < 0;
 } while (0);
 if (i4 | 0) ___unlockfile(i3);
 return i1 << 31 >> 31 | 0;
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

function _SystemArray_StoreElement(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[(HEAP32[(_Heap_GetType(i1) | 0) + 96 >> 2] | 0) + 64 >> 2] | 0;
 i1 = i1 + 4 | 0;
 switch (i4 | 0) {
 case 1:
  {
   HEAP8[i1 + i2 >> 0] = HEAP8[i3 >> 0] | 0;
   break;
  }
 case 2:
  {
   HEAP16[i1 + (i2 << 1) >> 1] = HEAP16[i3 >> 1] | 0;
   break;
  }
 case 4:
  {
   HEAP32[i1 + (i2 << 2) >> 2] = HEAP32[i3 >> 2];
   break;
  }
 default:
  _memcpy(i1 + (Math_imul(i4, i2) | 0) | 0, i3 | 0, i4 | 0) | 0;
 }
 return;
}

function _SystemArray_LoadElement(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[(HEAP32[(_Heap_GetType(i1) | 0) + 96 >> 2] | 0) + 64 >> 2] | 0;
 i1 = i1 + 4 | 0;
 switch (i4 | 0) {
 case 1:
  {
   HEAP8[i3 >> 0] = HEAP8[i1 + i2 >> 0] | 0;
   break;
  }
 case 2:
  {
   HEAP16[i3 >> 1] = HEAP16[i1 + (i2 << 1) >> 1] | 0;
   break;
  }
 case 4:
  {
   HEAP32[i3 >> 2] = HEAP32[i1 + (i2 << 2) >> 2];
   break;
  }
 default:
  _memcpy(i3 | 0, i1 + (Math_imul(i4, i2) | 0) | 0, i4 | 0) | 0;
 }
 return;
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
 HEAP32[i1 + 36 >> 2] = 152;
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

function _msTime() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i1;
 _gettimeofday(i4 | 0, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i3 = ___muldi3(i3 | 0, ((i3 | 0) < 0) << 31 >> 31 | 0, 1e3, 0) | 0;
 i2 = tempRet0;
 i4 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = ___udivdi3(i4 | 0, ((i4 | 0) < 0) << 31 >> 31 | 0, 1e3, 0) | 0;
 i2 = _i64Add(i4 | 0, tempRet0 | 0, i3 | 0, i2 | 0) | 0;
 STACKTOP = i1;
 return i2 | 0;
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
  i5 = _Heap_GetType(i2) | 0;
  i6 = _SystemArray_NewVector(i5, i1) | 0;
  HEAP32[i4 >> 2] = i6;
  _memcpy(i6 + 4 | 0, i2 + 4 | 0, Math_imul(HEAP32[(HEAP32[i5 + 96 >> 2] | 0) + 64 >> 2] | 0, i1 >>> 0 < i3 >>> 0 ? i1 : i3) | 0) | 0;
 }
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

function _Translate(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i4 + 8 | 0;
 i2 = i4;
 if (i1 >>> 0 > 511) {
  HEAP32[i2 >> 2] = i1;
  _Crash(15030, i2);
 }
 if (!(HEAP32[29908 + (i1 * 12 | 0) + 4 >> 2] | 0)) {
  HEAP32[i3 >> 2] = i1;
  _Crash(15049, i3);
 } else {
  STACKTOP = i4;
  return HEAP32[29908 + (i1 * 12 | 0) >> 2] | 0;
 }
 return 0;
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
   i4 = HEAP32[i6 + 108 >> 2] | 0;
   if (i4 | 0) _Heap_SetRoots(i2, HEAP32[i6 + 52 >> 2] | 0, i4);
  } else _Generic_GetHeapRoots(i2, i6);
  i1 = i1 + 1 | 0;
 }
 return;
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

function _sbrk(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = i1 + 15 & -16 | 0;
 i2 = HEAP32[DYNAMICTOP_PTR >> 2] | 0;
 i1 = i2 + i3 | 0;
 if ((i3 | 0) > 0 & (i1 | 0) < (i2 | 0) | (i1 | 0) < 0) {
  abortOnCannotGrowMemory() | 0;
  ___setErrNo(12);
  return -1;
 }
 HEAP32[DYNAMICTOP_PTR >> 2] = i1;
 if ((i1 | 0) > (getTotalMemory() | 0)) if (!(enlargeMemory() | 0)) {
  HEAP32[DYNAMICTOP_PTR >> 2] = i2;
  ___setErrNo(12);
  return -1;
 }
 return i2 | 0;
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

function _Heap_SyncTryEnter(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i3 = _Thread_GetCurrent() | 0;
 i1 = _EnsureSync(i1 + -20 | 0) | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if (!i2) {
  HEAP32[i1 >> 2] = i3;
  i1 = 1;
  i5 = 5;
 } else if ((i2 | 0) == (i3 | 0)) {
  i1 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  i5 = 5;
 } else i1 = 0;
 if ((i5 | 0) == 5) {
  HEAP32[i4 >> 2] = i1;
  i1 = 1;
 }
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

function _Thread_StackAlloc(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i1 = HEAP32[i1 + 52 >> 2] | 0;
 i5 = i1 + 3e4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i3 = i2 + i3 | 0;
 HEAP32[i5 >> 2] = i3;
 if (i3 >>> 0 > 3e4) _Crash(19913, i4); else {
  STACKTOP = i4;
  return i1 + i2 | 0;
 }
 return 0;
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
  if (i5 | 0) {
   i5 = i2 + (_strlen(i2) | 0) | 0;
   HEAP8[i5 >> 0] = 47;
   HEAP8[i5 + 1 >> 0] = 0;
  }
  HEAP32[i3 >> 2] = i1;
  i1 = 0;
 }
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

function _TreeInsert(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[7472] | 0) == (i1 | 0)) {
  HEAP8[i2 + 8 >> 0] = 1;
  HEAP32[i2 + 4 >> 2] = i1;
  HEAP32[i2 >> 2] = i1;
  HEAP8[i2 + 9 >> 0] = 0;
  return i2 | 0;
 } else {
  i3 = i1 + ((i1 >>> 0 < i2 >>> 0 & 1) << 2) | 0;
  HEAP32[i3 >> 2] = _TreeInsert(HEAP32[i3 >> 2] | 0, i2) | 0;
  return _TreeSplit(_TreeSkew(i1) | 0) | 0;
 }
 return 0;
}

function _GetSize(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i2 = i1 + 20 | 0;
 do if ((i3 | 0) == (HEAP32[(HEAP32[9026] | 0) + 36 >> 2] | 0)) i1 = _SystemString_GetNumBytes(i2) | 0; else {
  i1 = HEAP32[i3 + 96 >> 2] | 0;
  if (!i1) {
   i1 = HEAP32[i3 + 36 >> 2] | 0;
   break;
  } else {
   i1 = _SystemArray_GetNumBytes(i2, i1) | 0;
   break;
  }
 } while (0);
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
  HEAP32[968] = HEAP32[i1 >> 2];
  i1 = 1;
 }
 HEAP32[i3 >> 2] = i1;
 STACKTOP = i2;
 return 0;
}

function _AddFinalizer(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i2 = HEAP32[7469] | 0;
 i1 = HEAP32[7467] | 0;
 if ((i2 | 0) < (i1 | 0)) {
  i3 = HEAP32[7468] | 0;
  i1 = i2;
 } else {
  HEAP32[7467] = i1 << 1;
  i3 = _realloc(HEAP32[7468] | 0, i1 << 3) | 0;
  HEAP32[7468] = i3;
  i1 = HEAP32[7469] | 0;
 }
 HEAP32[7469] = i1 + 1;
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

function _System_Type_EnsureAssemblyLoaded(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256);
 i4 = i1;
 _DotNetStringToCString(i4, 256, HEAP32[i2 >> 2] | 0);
 _CLIFile_GetMetaDataForAssembly(i4) | 0;
 HEAP32[i3 >> 2] = 0;
 STACKTOP = i1;
 return 0;
}

function _SystemWeakReference_TargetGone(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 i4 = (i1 | 0) == 0;
 L1 : while (1) {
  i1 = i2;
  while (1) {
   i3 = HEAP32[i1 >> 2] | 0;
   if (!i3) break L1;
   i1 = i3 + 8 | 0;
   if (i4) if (HEAP32[i3 + 4 >> 2] | 0) break;
   HEAP32[i3 >> 2] = 0;
  }
  HEAP32[i2 >> 2] = i3;
  i2 = i1;
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

function _Internal_Debugger_Resume_Check(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 if (!(HEAP32[9020] | 0)) i1 = 0; else {
  _log_f(1, 19863, i2);
  HEAP32[9020] = 0;
  HEAP32[9021] = 0;
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
 _log_f(1, 15309, i5);
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
 HEAP32[i1 + 4 >> 2] = 45;
 HEAP32[i1 + 8 >> 2] = i5;
 HEAP32[i5 >> 2] = 0;
 if (_Receive_Check(i2, i3, i4, i1) | 0) {
  _free(i5);
  _free(i1);
  i1 = 0;
 }
 return i1 | 0;
}

function _Type_IsImplemented(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0;
 i4 = i1 + 76 | 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) {
   i1 = 0;
   break;
  }
  if ((HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 * 12 | 0) >> 2] | 0) == (i3 | 0)) {
   i1 = 1;
   break;
  } else i1 = i1 + 1 | 0;
 }
 return i1 | 0;
}

function _wctype(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0;
 i4 = HEAP8[i3 >> 0] | 0;
 i1 = 1;
 i2 = 29773;
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

function _System_Array_Clear(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[(HEAP32[(_Heap_GetType(i1) | 0) + 96 >> 2] | 0) + 64 >> 2] | 0;
 _memset((Math_imul(i2, i4) | 0) + (i1 + 4) | 0, 0, Math_imul(i2, i3) | 0) | 0;
 return 0;
}

function _System_Net_Sockets_Internal_Send(i1, i3, i4) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i2 = 0;
 i1 = _malloc(24) | 0;
 i2 = _malloc(4) | 0;
 HEAP32[i1 >> 2] = -1;
 HEAP32[i1 + 4 >> 2] = 45;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i2 >> 2] = 0;
 if (_Send_Check(i3, i4, i1) | 0) {
  _free(i2);
  _free(i1);
  i1 = 0;
 }
 return i1 | 0;
}

function _getint(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = (HEAP8[i2 >> 0] | 0) + -48 | 0;
 if (i3 >>> 0 < 10) {
  i1 = 0;
  do {
   i1 = i3 + (i1 * 10 | 0) | 0;
   i2 = i2 + 1 | 0;
   HEAP32[i4 >> 2] = i2;
   i3 = (HEAP8[i2 >> 0] | 0) + -48 | 0;
  } while (i3 >>> 0 < 10);
 } else i1 = 0;
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

function _fmt_x(i3, i2, i1, i4) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 if (!((i3 | 0) == 0 & (i2 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = HEAPU8[21721 + (i3 & 15) >> 0] | 0 | i4;
  i3 = _bitshift64Lshr(i3 | 0, i2 | 0, 4) | 0;
  i2 = tempRet0;
 } while (!((i3 | 0) == 0 & (i2 | 0) == 0));
 return i1 | 0;
}

function _CreateParameters(i2, i3, i4, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i5 = 0;
 if (!i1) i1 = 0; else {
  HEAP32[i2 >> 2] = i1;
  i1 = 4;
 }
 i3 = (HEAP32[i3 + 40 >> 2] | 0) - i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) + (0 - i3) | 0;
 HEAP32[i4 >> 2] = i5;
 _memcpy(i2 + i1 | 0, i5 | 0, i3 | 0) | 0;
 return;
}

function _allocForever(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i4 = i3;
 i2 = (HEAP32[9017] | 0) + i2 | 0;
 HEAP32[9017] = i2;
 HEAP32[i4 >> 2] = i2;
 _log_f(3, 17521, i4);
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
 if ((HEAP32[9016] | 0) >>> 0 >= i1 >>> 0) {
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
 HEAP32[i3 >> 2] = _dummy_738(i1) | 0;
 i1 = ___syscall6(6, i3 | 0) | 0;
 i1 = ___syscall_ret((i1 | 0) == -4 ? 0 : i1) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function _RunFinalizer(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = _GetNextFinalizer() | 0;
 if (!i2) i1 = 0; else {
  i3 = HEAP32[(_Heap_GetType(i2) | 0) + 124 >> 2] | 0;
  i1 = _MethodState_Direct(i1, i3, HEAP32[i1 + 20 >> 2] | 0, 0) | 0;
  HEAP32[i1 + 32 >> 2] = i2;
  HEAP32[HEAP32[i1 + 24 >> 2] >> 2] = i2;
 }
 return i1 | 0;
}

function ___stdio_close(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 i3 = i2;
 HEAP32[i3 >> 2] = _dummy_738(HEAP32[i1 + 60 >> 2] | 0) | 0;
 i1 = ___syscall_ret(___syscall6(6, i3 | 0) | 0) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function _Debugger_Continue() {
 var i1 = 0, i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 _log_f(1, 19409, i2);
 if (!(HEAP32[9021] | 0)) i1 = 1; else {
  HEAP32[9020] = 1;
  _puts(19435) | 0;
  i1 = _Thread_Execute() | 0;
 }
 STACKTOP = i2;
 return i1 | 0;
}

function _System_Runtime_CompilerServices_InitializeArray(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = _Heap_GetType(i3) | 0;
 _memcpy(i3 + 4 | 0, i1 | 0, Math_imul(HEAP32[(HEAP32[i2 + 96 >> 2] | 0) + 64 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0) | 0;
 return 0;
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

function _Generic_GetHeapRoots(i4, i1) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i1 = i1 + 84 | 0;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break;
  i2 = HEAP32[i1 >> 2] | 0;
  i3 = HEAP32[i2 + 108 >> 2] | 0;
  if (i3 | 0) _Heap_SetRoots(i4, HEAP32[i2 + 52 >> 2] | 0, i3);
  i1 = i1 + 4 | 0;
 }
 return;
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

function _RestoreTypeStack(i3, i1) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0;
 i2 = i3 + 4 | 0;
 if (!i1) HEAP32[i2 >> 2] = 0; else {
  i4 = i1 + 4 | 0;
  HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
  i1 = HEAP32[i1 >> 2] | 0;
  if (i1 | 0) _memcpy(HEAP32[i3 >> 2] | 0, i1 | 0, HEAP32[i4 >> 2] << 2 | 0) | 0;
 }
 return;
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

function _wcschr(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0;
 if (!i3) i1 = i1 + ((_wcslen(i1) | 0) << 2) | 0; else {
  while (1) {
   i4 = HEAP32[i1 >> 2] | 0;
   i2 = (i4 | 0) != 0;
   if ((i4 | 0) == (i3 | 0) | i2 ^ 1) break; else i1 = i1 + 4 | 0;
  }
  i1 = i2 ? i1 : 0;
 }
 return i1 | 0;
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

function _TreeSearch(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0;
 while (1) {
  if ((i1 | 0) == (HEAP32[7472] | 0)) break;
  if (i1 >>> 0 > i3 >>> 0) i2 = 0; else if ((i1 + (_GetSize(i1) | 0) + 20 | 0) >>> 0 < i3 >>> 0) i2 = 1; else break;
  i1 = HEAP32[i1 + (i2 << 2) >> 2] | 0;
 }
 return i1 | 0;
}

function _SystemString_FromCharPtrASCII(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0;
 i3 = _strlen(i2) | 0;
 i4 = _CreateStringHeapObj(i3) | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) >= (i3 | 0)) break;
  HEAP16[i4 + 4 + (i1 << 1) >> 1] = HEAPU8[i2 + i1 >> 0] | 0;
  i1 = i1 + 1 | 0;
 }
 return i4 | 0;
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

function _Type_IsDerivedFromOrSame(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 while (1) {
  if (!i1) {
   i1 = 0;
   break;
  }
  if ((i1 | 0) == (i2 | 0)) {
   i1 = 1;
   break;
  }
  if (!(HEAP8[i1 + 32 >> 0] | 0)) _MetaData_Fill_TypeDef_(i1, 0, 0);
  i1 = HEAP32[i1 + 40 >> 2] | 0;
 }
 return i1 | 0;
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
 i2 = _vfprintf(HEAP32[1364] | 0, i1, i4) | 0;
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
  HEAP32[i1 + 4 >> 2] = 46;
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
  HEAP32[i1 + 4 >> 2] = 44;
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
  HEAP32[i1 + 4 >> 2] = 43;
  HEAP32[i1 + 8 >> 2] = 0;
 } else i1 = 0;
 return i1 | 0;
}

function _MethodState_Delete(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 32 >> 2] | 0;
 if (i4 | 0) _Heap_UnmarkFinalizer(i4);
 _free(HEAP32[i3 + 40 >> 2] | 0);
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
 _log_f(1, 19351, i1);
 HEAP32[9018] = 0;
 HEAP32[9021] = 0;
 HEAP32[9020] = 0;
 HEAP32[9022] = 0;
 STACKTOP = i1;
 return 0;
}

function _MetaData_LoadUserStrings(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 HEAP32[i2 + 12 >> 2] = i3;
 _log_f(1, 15288, i1);
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
  i1 = (HEAP32[i1 + 216 + (i2 << 2) >> 2] | 0) + (Math_imul(HEAPU8[36728 + i2 >> 0] | 0, i3 + -1 | 0) | 0) | 0;
 }
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
 _log_f(1, 15258, i1);
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
 _puts(17493) | 0;
 HEAP32[i3 >> 2] = i2;
 _vprintf(i1, i3) | 0;
 _puts(17509) | 0;
 _exit(1);
}

function _MetaData_LoadBlobs(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16);
 HEAP32[i2 + 8 >> 2] = i3;
 _log_f(1, 15274, i1);
 STACKTOP = i1;
 return;
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

function _Thread_SetEntryPoint(i3, i1, i2, i4, i5) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i1 = _MethodState(i3, i1, i2, 0) | 0;
 HEAP32[i3 + 20 >> 2] = i1;
 if (i5 | 0) _memcpy(HEAP32[i1 + 24 >> 2] | 0, i4 | 0, i5 | 0) | 0;
 return;
}

function _System_Array_CreateInstance(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = _Type_GetArrayTypeDef(_RuntimeType_DeRef(HEAP32[i2 >> 2] | 0) | 0, 0, 0) | 0;
 HEAP32[i3 >> 2] = _SystemArray_NewVector(i1, HEAP32[i2 + 4 >> 2] | 0) | 0;
 return 0;
}

function _System_Char_ToUpperInvariant(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = _SearchCaseArray(9860, i1 & 65535) | 0;
 if ((i2 | 0) >= 0) i1 = HEAPU16[8512 + (i2 << 1) >> 1] | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _System_Char_ToLowerInvariant(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = _SearchCaseArray(8512, i1 & 65535) | 0;
 if ((i2 | 0) >= 0) i1 = HEAPU16[9860 + (i2 << 1) >> 1] | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _System_RuntimeType_Internal_GetGenericTypeDefinition(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i1 >> 2] | 0;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 HEAP32[i3 >> 2] = _Type_GetTypeObject((i2 | 0) == 0 ? i1 : i2) | 0;
 return 0;
}

function _System_RuntimeType_get_IsGenericType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[i1 >> 2] | 0;
 if (!(HEAP32[i1 + 88 >> 2] | 0)) i1 = (HEAP8[i1 + 57 >> 0] | 0) != 0; else i1 = 1;
 HEAP32[i3 >> 2] = i1 & 1;
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

function _System_RuntimeType_GetNestingParentType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] | 0;
 if (!i1) i1 = 0; else i1 = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _pntz(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _a_ctz_l_763((HEAP32[i1 >> 2] | 0) + -1 | 0) | 0;
 if (!i2) {
  i2 = _a_ctz_l_763(HEAP32[i1 + 4 >> 2] | 0) | 0;
  return ((i2 | 0) == 0 ? 0 : i2 + 32 | 0) | 0;
 } else return i2 | 0;
 return 0;
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

function _System_RuntimeType_GetElementType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] | 0;
 if (!i1) i1 = 0; else i1 = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _CLIFile_GetHeapRoots(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = 29864;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break;
  _MetaData_GetHeapRoots(i2, HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0);
  i1 = i1 + 4 | 0;
 }
 return;
}

function _Type_IsAssignableFrom(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!(_Type_IsDerivedFromOrSame(i1, i2) | 0)) if (!(HEAP32[i1 + 8 >> 2] & 32)) i1 = 0; else i1 = (_Type_IsImplemented(i1, i2) | 0) != 0; else i1 = 1;
 return i1 & 1 | 0;
}

function _System_RuntimeType_get_BaseType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] | 0;
 if (!i1) i1 = 0; else i1 = _Type_GetTypeObject(i1) | 0;
 HEAP32[i3 >> 2] = i1;
 return 0;
}

function _CheckIfCurrentInstructionHasBreakpoint(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (i2 | 0) {
  i1 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
  if ((i1 | 0) > -1) _CheckIfSequencePointIsBreakpoint(i3, i1) | 0;
 }
 return;
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
 _log_f(1, 19374, i1);
 HEAP32[9018] = 0;
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
  i3 = HEAP32[i1 + 30004 >> 2] | 0;
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
 i2 = HEAP32[7469] | 0;
 i1 = i2 + -1 | 0;
 if (!i2) i1 = 0; else {
  i2 = HEAP32[7468] | 0;
  HEAP32[7469] = i1;
  i1 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
 }
 return i1 | 0;
}

function _System_RuntimeType_get_IsEnum(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = (HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] | 0) == (HEAP32[(HEAP32[9026] | 0) + 120 >> 2] | 0) & 1;
 return 0;
}

function _iswalpha(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 < 131072) i1 = (HEAPU8[23629 + ((HEAPU8[23629 + (i1 >>> 8) >> 0] | 0) << 5 | i1 >>> 3 & 31) >> 0] | 0) >>> (i1 & 7) & 1; else i1 = i1 >>> 0 < 196606 & 1;
 return i1 | 0;
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

function _a_ctz_l_763(i1) {
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
 _log_f(1, 19453, i1);
 HEAP32[9022] = 1;
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

function _SystemArray_NewVector(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = _Heap_Alloc(i1, (Math_imul(HEAP32[(HEAP32[i1 + 96 >> 2] | 0) + 64 >> 2] | 0, i2) | 0) + 4 | 0) | 0;
 HEAP32[i1 >> 2] = i2;
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
 HEAP32[i3 + 4 >> 2] = 42;
 HEAP32[i3 + 8 >> 2] = 0;
 return i3 | 0;
}

function _System_RuntimeType_get_Namespace(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] | 0) | 0;
 return 0;
}

function _Heap_Init() {
 var i1 = 0;
 HEAP32[7470] = 0;
 HEAP32[7471] = 1e6;
 i1 = _callocForever(1, 20) | 0;
 HEAP32[7472] = i1;
 HEAP32[i1 + 4 >> 2] = i1;
 HEAP32[i1 >> 2] = i1;
 HEAP32[7473] = i1;
 return;
}

function _Framework_JSInterop_Activator_CreateInstance(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _Heap_AllocType(_RuntimeType_DeRef(HEAP32[i2 >> 2] | 0) | 0) | 0;
 return 0;
}

function _Type_GetTypeObject(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i3 = i2 + 128 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!i1) {
  i1 = _RuntimeType_New(i2) | 0;
  HEAP32[i3 >> 2] = i1;
 }
 return i1 | 0;
}

function _System_RuntimeType_get_Name(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = _SystemString_FromCharPtrASCII(HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0) | 0;
 return 0;
}

function _iswpunct(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 < 131072) i1 = (HEAPU8[26605 + ((HEAPU8[26605 + (i1 >>> 8) >> 0] | 0) << 5 | i1 >>> 3 & 31) >> 0] | 0) >>> (i1 & 7) & 1; else i1 = 0;
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
 return _MethodState_Direct(i1, _MetaData_GetMethodDefFromDefRefOrSpec(i2, i3, 0, 0) | 0, i4, 0) | 0;
}

function _RuntimeType_New(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _Heap_AllocType(HEAP32[(HEAP32[9026] | 0) + 104 >> 2] | 0) | 0;
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

function ___DOUBLE_BITS_675(d1) {
 d1 = +d1;
 var i2 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 tempRet0 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 return i2 | 0;
}

function ___DOUBLE_BITS_272(d1) {
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

function ___strdup(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 i3 = (_strlen(i2) | 0) + 1 | 0;
 i1 = _malloc(i3) | 0;
 if (!i1) i1 = 0; else _memcpy(i1 | 0, i2 | 0, i3 | 0) | 0;
 return i1 | 0;
}

function _SystemArray_LoadElementAddress(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i1 + 4 + (Math_imul(HEAP32[(HEAP32[(_Heap_GetType(i1) | 0) + 96 >> 2] | 0) + 64 >> 2] | 0, i2) | 0) | 0;
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
 return FUNCTION_TABLE_iiiii[i5 & 63](i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
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

function _CreateStringHeapObj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _Heap_Alloc(HEAP32[(HEAP32[9026] | 0) + 36 >> 2] | 0, (i1 << 1) + 4 | 0) | 0;
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

function _GetU32_187(i1) {
 i1 = i1 | 0;
 return (HEAPU8[i1 + 1 >> 0] | 0) << 8 | (HEAPU8[i1 >> 0] | 0) | (HEAPU8[i1 + 2 >> 0] | 0) << 16 | (HEAPU8[i1 + 3 >> 0] | 0) << 24 | 0;
}

function _MetaData_DecodeSigEntryToken(i1) {
 i1 = i1 | 0;
 i1 = _MetaData_DecodeSigEntry(i1) | 0;
 return (HEAPU8[15254 + (i1 & 3) >> 0] | 0) << 24 | i1 >>> 2 & 16777215 | 0;
}

function _Heap_Box(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _Heap_AllocType(i1) | 0;
 _memcpy(i3 | 0, i2 | 0, HEAP32[i1 + 36 >> 2] | 0) | 0;
 return i3 | 0;
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

function _System_Type_get_IsValueType(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAPU8[(HEAP32[i1 >> 2] | 0) + 34 >> 0];
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
  HEAP8[36728 + i1 >> 0] = 0;
  i1 = i1 + 1 | 0;
 }
 return;
}

function _SystemArray_GetNumBytes(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (Math_imul(HEAP32[i2 + 64 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) + 4 | 0;
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
 _puts(12400) | 0;
 _puts(12407) | 0;
 _putchar(10) | 0;
 _puts(12474) | 0;
 _puts(12530) | 0;
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

function _System_Math_Round(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +_round(+(+HEAPF64[i2 >> 3]));
 return 0;
}

function _System_WeakReference_get_Target(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 return 0;
}

function _System_String_ToDouble(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF64[i3 >> 3] = +_wcstod(i1 + 4 | 0, 0);
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

function _swapc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_bswap_i32(i1 | 0) | 0;
 return ((i2 | 0) == 0 ? i1 : i3) | 0;
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
 HEAP32[i1 + 3e4 >> 2] = i2 - i1;
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

function _MetaData_GetModuleRefName(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return HEAP32[(_MetaData_GetTableRow(i1, i2) | 0) >> 2] | 0;
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 24 | (i1 >> 8 & 255) << 16 | (i1 >> 16 & 255) << 8 | i1 >>> 24 | 0;
}

function dynCall_iii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[i3 & 63](i1 | 0, i2 | 0) | 0;
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
 if (!(_iswspace(i1) | 0)) i1 = (_iswprint(i1) | 0) != 0; else i1 = 0;
 return i1 & 1 | 0;
}

function _iswalnum(i1) {
 i1 = i1 | 0;
 if (!(_iswdigit(i1) | 0)) i1 = (_iswalpha(i1) | 0) != 0; else i1 = 1;
 return i1 & 1 | 0;
}

function _System_Diagnostics_Debugger_Break(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _puts(19569) | 0;
 return 0;
}

function _Map_Delegate(i1) {
 i1 = i1 | 0;
 i1 = (_strcmp(HEAP32[i1 + 16 >> 2] | 0, 14294) | 0) == 0;
 return (i1 ? 150 : 0) | 0;
}

function _GetNullTerminatedString(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i2 >> 2] = (_strlen(i1) | 0) + 1;
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
 return ___strerror_l(i1, HEAP32[(___pthread_self_105() | 0) + 188 >> 2] | 0) | 0;
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

function _iswspace(i1) {
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = (_wcschr(5708, i1) | 0) != 0;
 return i1 & 1 | 0;
}

function _sort(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return _strcmp(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
}

function _System_RuntimeType_GetCustomAttributes(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
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

function _Finalizer_Init() {
 HEAP32[7467] = 4;
 HEAP32[7468] = _malloc(16) | 0;
 HEAP32[7469] = 0;
 return;
}

function dynCall_ii(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[i2 & 63](i1 | 0) | 0;
}

function _System_RuntimeType_IsDefined(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
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
 return _vfprintf(HEAP32[1364] | 0, i1, i2) | 0;
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

function _Heap_AllocType(i1) {
 i1 = i1 | 0;
 return _Heap_Alloc(i1, HEAP32[i1 + 36 >> 2] | 0) | 0;
}

function b1(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 nullFunc_iiii(1);
 return 0;
}

function _isspace(i1) {
 i1 = i1 | 0;
 return ((i1 | 0) == 32 | (i1 + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function _round(d1) {
 d1 = +d1;
 return d1 >= 0.0 ? +Math_floor(d1 + .5) : +Math_ceil(d1 - .5);
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

function ___lctrans(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ___lctrans_impl(i1, i2) | 0;
}

function _SystemString_GetNumBytes(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 >> 2] << 1) + 4 | 0;
}

function _Heap_RemovedWeakRefTarget(i1) {
 i1 = i1 | 0;
 _DeleteSync(i1 + -20 | 0);
 return;
}

function _mallocForever(i1) {
 i1 = i1 | 0;
 return _allocForever(_malloc(i1) | 0, i1) | 0;
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

function ___bswap_16_494(i1) {
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
 return 151;
}

function _putchar(i1) {
 i1 = i1 | 0;
 return _fputc(i1, HEAP32[1364] | 0) | 0;
}

function _frexpl(d1, i2) {
 d1 = +d1;
 i2 = i2 | 0;
 return +(+_frexp(d1, i2));
}

function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 nullFunc_iii(2);
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

function ___errno_location() {
 return (___pthread_self_108() | 0) + 64 | 0;
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
 return ___bswap_16_494(i1) | 0;
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

function ___pthread_self_536() {
 return _pthread_self() | 0;
}

function ___pthread_self_448() {
 return _pthread_self() | 0;
}

function ___pthread_self_445() {
 return _pthread_self() | 0;
}

function ___pthread_self_108() {
 return _pthread_self() | 0;
}

function ___pthread_self_105() {
 return _pthread_self() | 0;
}

function b0(i1) {
 i1 = i1 | 0;
 nullFunc_ii(0);
 return 0;
}

function _Heap_NumCollections() {
 return HEAP32[7476] | 0;
}

function _Heap_GetTotalMemory() {
 return HEAP32[7470] | 0;
}

function _MetaData() {
 return _callocForever(1, 428) | 0;
}

function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}

function _Thread_GetCurrent() {
 return HEAP32[9025] | 0;
}

function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}

function _emscripten_get_global_libc() {
 return 36664;
}

function _dummy_738(i1) {
 i1 = i1 | 0;
 return i1 | 0;
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

function stackSave() {
 return STACKTOP | 0;
}

function _pthread_self() {
 return 5212;
}

function _Socket_Init() {
 return;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,b0,jsCall_ii_0,b0,jsCall_ii_1,b0,jsCall_ii_2,b0,jsCall_ii_3,b0,jsCall_ii_4,b0,jsCall_ii_5,b0,jsCall_ii_6,b0,jsCall_ii_7,b0,jsCall_ii_8,b0,jsCall_ii_9,b0,jsCall_ii_10,b0,jsCall_ii_11,b0,jsCall_ii_12,b0,jsCall_ii_13
,b0,jsCall_ii_14,b0,jsCall_ii_15,b0,jsCall_ii_16,b0,jsCall_ii_17,b0,jsCall_ii_18,b0,jsCall_ii_19,b0,___stdio_close,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0];
var FUNCTION_TABLE_iiii = [b1,b1,jsCall_iiii_0,b1,jsCall_iiii_1,b1,jsCall_iiii_2,b1,jsCall_iiii_3,b1,jsCall_iiii_4,b1,jsCall_iiii_5,b1,jsCall_iiii_6,b1,jsCall_iiii_7,b1,jsCall_iiii_8,b1,jsCall_iiii_9,b1,jsCall_iiii_10,b1,jsCall_iiii_11,b1,jsCall_iiii_12,b1,jsCall_iiii_13
,b1,jsCall_iiii_14,b1,jsCall_iiii_15,b1,jsCall_iiii_16,b1,jsCall_iiii_17,b1,jsCall_iiii_18,b1,jsCall_iiii_19,b1,_System_Object_Equals,_System_Object_Clone,_System_Object_GetHashCode,_System_Object_GetType,_System_String_ctor_CharInt32,_System_String_ctor_CharA,_System_String_ctor_CharAIntInt,_System_String_ctor_StringIntInt,_System_String_get_Chars,_System_String_InternalConcat,_System_String_InternalTrim,_System_String_Equals,_System_String_GetHashCode,_System_String_InternalReplace,_System_String_InternalIndexOf,_System_String_InternalIndexOfAny,_System_String_ToDouble
,_Framework_JSInterop_Activator_CreateInstance,_System_Array_Internal_GetValue,_System_Array_Internal_SetValue,_System_Array_Clear,_System_Array_Internal_Copy,_System_Array_Resize,_System_Array_Reverse,_System_Array_CreateInstance,_System_Console_Write,_System_Console_Internal_ReadKey,_System_Console_Internal_KeyAvailable,_System_Environment_get_TickCount,_System_Environment_GetOSVersionString,_System_Environment_get_Platform,_System_Type_GetTypeFromHandle,_System_Type_EnsureAssemblyLoaded,_System_Type_GetMethod,_System_Type_GetProperties,_System_Type_GetMethods,_System_Type_GetTypeFromName,_System_Type_get_IsValueType,_System_Type_IsAssignableFrom,_System_Type_IsSubclassOf,_System_RuntimeType_get_Name,_System_RuntimeType_get_Namespace,_System_RuntimeType_GetNestingParentType,_System_RuntimeType_get_BaseType,_System_RuntimeType_get_IsEnum,_System_RuntimeType_get_IsGenericType,_System_RuntimeType_Internal_GetGenericTypeDefinition
,_System_RuntimeType_GetGenericArguments,_System_RuntimeType_IsDefined,_System_RuntimeType_GetCustomAttributes,_System_RuntimeType_GetElementType,_System_Char_GetUnicodeCategory,_System_Char_ToLowerInvariant,_System_Char_ToUpperInvariant,_System_GC_Collect,_System_GC_Internal_CollectionCount,_System_GC_GetTotalMemory,_System_GC_SuppressFinalize,_System_Enum_Internal_GetValue,_System_Enum_Internal_GetInfo,_System_ValueType_GetFields,_System_WeakReference_get_Target,_System_WeakReference_set_Target,_System_DateTime_InternalUtcNow,_System_Math_Sin,_System_Math_Cos,_System_Math_Tan,_System_Math_Pow,_System_Math_Sqrt,_System_Math_Ceiling,_System_Math_Floor,_System_Math_Round,_System_Threading_Thread_ctor,_System_Threading_Thread_ctorParam,_System_Threading_Thread_Start,_System_Threading_Thread_Sleep,_System_Threading_Thread_get_CurrentThread
,_System_Threading_Monitor_Internal_TryEnter,_System_Threading_Monitor_Internal_Exit,_System_Threading_Interlocked_CompareExchange_Int32,_System_Threading_Interlocked_Increment_Int32,_System_Threading_Interlocked_Decrement_Int32,_System_Threading_Interlocked_Add_Int32,_System_Threading_Interlocked_Exchange_Int32,_System_IO_FileInternal_Open,_System_IO_FileInternal_Read,_System_IO_FileInternal_Close,_System_IO_FileInternal_GetCurrentDirectory,_System_IO_FileInternal_GetFileAttributes,_System_IO_FileInternal_GetFileSystemEntries,_Reflection_MemberInfo_GetCustomAttributes,_Reflection_MethodInfo_MakeGenericMethod,_System_Runtime_CompilerServices_InitializeArray,_System_Diagnostics_Debugger_Break,_System_Net_Dns_Internal_GetHostEnt,_System_Net_Sockets_Internal_CreateSocket,_System_Net_Sockets_Internal_Bind,_System_Net_Sockets_Internal_Close,_System_Net_Sockets_Internal_Listen,_System_Net_Sockets_Internal_Accept,_System_Net_Sockets_Internal_Connect,_System_Net_Sockets_Internal_Receive,_System_Net_Sockets_Internal_Send,_Framework_JSInterop_ToHeapRef,_Framework_JSInterop_FromHeapRefImpl,___stdout_write,___stdio_seek
,_sn_write,_ctor,_invokeJsFunc,___stdio_write,_do_read_775,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1];
var FUNCTION_TABLE_iii = [b2,b2,jsCall_iii_0,b2,jsCall_iii_1,b2,jsCall_iii_2,b2,jsCall_iii_3,b2,jsCall_iii_4,b2,jsCall_iii_5,b2,jsCall_iii_6,b2,jsCall_iii_7,b2,jsCall_iii_8,b2,jsCall_iii_9,b2,jsCall_iii_10,b2,jsCall_iii_11,b2,jsCall_iii_12,b2,jsCall_iii_13
,b2,jsCall_iii_14,b2,jsCall_iii_15,b2,jsCall_iii_16,b2,jsCall_iii_17,b2,jsCall_iii_18,b2,jsCall_iii_19,b2,_ignore_err,_sort,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2];
var FUNCTION_TABLE_iiiii = [b3,b3,jsCall_iiiii_0,b3,jsCall_iiiii_1,b3,jsCall_iiiii_2,b3,jsCall_iiiii_3,b3,jsCall_iiiii_4,b3,jsCall_iiiii_5,b3,jsCall_iiiii_6,b3,jsCall_iiiii_7,b3,jsCall_iiiii_8,b3,jsCall_iiiii_9,b3,jsCall_iiiii_10,b3,jsCall_iiiii_11,b3,jsCall_iiiii_12,b3,jsCall_iiiii_13
,b3,jsCall_iiiii_14,b3,jsCall_iiiii_15,b3,jsCall_iiiii_16,b3,jsCall_iiiii_17,b3,jsCall_iiiii_18,b3,jsCall_iiiii_19,b3,_Internal_ReadKey_Check,_Accept_Check,_Connect_Check,_Receive_Check,_Internal_TryEntry_Check,_Internal_Debugger_Resume_Check,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3];

  return { _llvm_bswap_i32: _llvm_bswap_i32, _JSInterop_CallDotNet: _JSInterop_CallDotNet, _main: _main, stackSave: stackSave, _i64Subtract: _i64Subtract, ___udivdi3: ___udivdi3, _Debugger_Reset: _Debugger_Reset, setThrew: setThrew, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, dynCall_iiiii: dynCall_iiiii, _htonl: _htonl, dynCall_iii: dynCall_iii, _bitshift64Ashr: _bitshift64Ashr, _memset: _memset, _sbrk: _sbrk, _Debugger_SetBreakPoint: _Debugger_SetBreakPoint, _memcpy: _memcpy, stackAlloc: stackAlloc, ___muldi3: ___muldi3, ___uremdi3: ___uremdi3, ___divdi3: ___divdi3, getTempRet0: getTempRet0, _ntohs: _ntohs, setTempRet0: setTempRet0, _i64Add: _i64Add, dynCall_iiii: dynCall_iiii, dynCall_ii: dynCall_ii, _Debugger_Step: _Debugger_Step, _llvm_bswap_i16: _llvm_bswap_i16, _emscripten_get_global_libc: _emscripten_get_global_libc, ___remdi3: ___remdi3, _htons: _htons, ___errno_location: ___errno_location, _Debugger_Clear_BreakPoints: _Debugger_Clear_BreakPoints, _Debugger_Continue: _Debugger_Continue, runPostSets: runPostSets, _round: _round, establishStackSpace: establishStackSpace, _memmove: _memmove, stackRestore: stackRestore, _malloc: _malloc, _free: _free };
})
;
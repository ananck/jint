// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Line Terminator between LeftHandSideExpression and "++" is not allowed
 *
 * @path ch11/11.3/11.3.1/S11.3.1_A1.1_T1.js
 * @description Checking Line Feed
 * @negative
 */

//CHECK#1
eval("var x = 1; x\u000A++");


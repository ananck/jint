// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Continue inside of try-catch nested in a loop is allowed
 *
 * @path ch12/12.7/S12.7_A9_T2.js
 * @description Using "continue" within catch Block that is within a loop
 */

var x=0,y=0;

(function(){
FOR : for(;;){
	try{
		x++;
		if(x===10)return;
		throw 1;
	} catch(e){
		continue;
	}	
}
})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x!==10) {
	$ERROR('#1: Continue inside of try-catch nested in loop is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////


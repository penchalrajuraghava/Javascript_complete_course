/**********************************************************************

TEMPORAL DEAD ZONE

TDZ is the time between

Variable Creation

and

Variable Initialization

Only applies to

let

const

**********************************************************************/

console.log(a);

// undefined

var a = 10;

// console.log(b);

// ReferenceError

let b = 20;

// console.log(c);

// ReferenceError

const c = 30;

/* 
Program Starts

|

let age

|

=========================

Temporal Dead Zone

=========================

|

age = 25

|

Now Accessible
*/

{
  // TDZ Starts

  // console.log(score);

  let score = 90;

  console.log(score);
}

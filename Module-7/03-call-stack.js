/****************************************************************

CALL STACK

Stores execution contexts.

Works using

LIFO

Last In First Out

****************************************************************/

function one() {
  console.log("One");

  two();
}

function two() {
  console.log("Two");

  three();
}

function three() {
  console.log("Three");
}

one();

/* 
Start

Global

↓

one()

↓

two()

↓

three()

↓

three() removed

↓

two() removed

↓

one() removed

↓

Global removed

End
*/

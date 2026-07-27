/*
==========================================================
Topic: map()
==========================================================

Definition:
-----------
Creates a NEW array by transforming each element.

Returns:
--------
New Array
*/

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => {
  return number * number;
});

console.log("Original:", numbers);
console.log("Squares:", squares);

const doubled = numbers.map((number) => number * 2);

console.log("Doubled:", doubled);

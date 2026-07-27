/*
==========================================================
Topic: slice()
==========================================================

Definition:
-----------
Returns a new array.

Original array remains unchanged.
*/

const numbers = [10, 20, 30, 40, 50, 60];

const firstThree = numbers.slice(0, 3);

console.log(firstThree);

console.log(numbers);

const lastTwo = numbers.slice(-2);

console.log(lastTwo);

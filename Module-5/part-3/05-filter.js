/*
==========================================================
Topic: filter()
==========================================================

Definition:
-----------
Returns a NEW array containing only matching elements.
*/

const ages = [12, 18, 21, 15, 30, 45];

const adults = ages.filter((age) => age >= 18);

console.log("Original:", ages);
console.log("Adults:", adults);

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
  (number) => number % 2 === 0,
);

console.log("Even:", evenNumbers);

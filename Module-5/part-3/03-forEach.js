/*
==========================================================
Topic: forEach()
==========================================================

Definition:
-----------
Executes a callback function for each array element.

Returns:
--------
undefined
*/

const numbers = [10, 20, 30, 40];

numbers.forEach(function (value, index) {
  console.log(`Index: ${index}, Value: ${value}`);
});

console.log("\nArrow Function:");

numbers.forEach((value) => {
  console.log(value);
});

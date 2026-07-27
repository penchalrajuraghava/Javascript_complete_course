/*
==========================================================
Module 06
Topic: Array.isArray()
==========================================================

Definition:
-----------
Checks whether a value is an array.

Returns:
--------
true or false
*/

const fruits = ["Apple", "Banana"];
const user = {
  name: "Sunny",
};

console.log(Array.isArray(fruits));
console.log(Array.isArray(user));
console.log(Array.isArray("JavaScript"));
console.log(Array.isArray(100));

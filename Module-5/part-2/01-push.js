/*
==========================================================
Module 02 - Array Methods
Topic: push()
==========================================================

Definition:
-----------
The push() method adds one or more elements to the END of an array.

Syntax:
-------
array.push(element1, element2, ...)

Returns:
--------
New length of the array.
*/

const fruits = ["Apple", "Banana"];

console.log("Before Push:", fruits);

fruits.push("Orange");

console.log("After Push:", fruits);

fruits.push("Mango", "Grapes");

console.log("After Multiple Push:", fruits);

const length = fruits.push("Pineapple");

console.log("New Length:", length);
console.log("Final Array:", fruits);

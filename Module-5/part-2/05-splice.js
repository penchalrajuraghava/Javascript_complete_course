/*
==========================================================
Topic: splice()
==========================================================

Definition:
-----------
Used to add, remove, or replace elements.

Syntax:
-------
array.splice(start, deleteCount, item1, item2...)
*/

const fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits);

// Remove

fruits.splice(1, 1);

console.log(fruits);

// Insert

fruits.splice(1, 0, "Kiwi");

console.log(fruits);

// Replace

fruits.splice(2, 1, "Pineapple");

console.log(fruits);

/*
==========================================================
Module 01 - JavaScript Arrays
Topic: Introduction to Arrays
==========================================================

What is an Array?

An array is a special object used to store multiple values
inside a single variable.

Instead of creating many variables:

let student1 = "Sunny";
let student2 = "Rahul";
let student3 = "Kiran";

We can store all values in one array.

Arrays are:
✔ Ordered
✔ Zero-indexed
✔ Dynamic
✔ Can store any data type
*/

// Example 1

const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);

// Output
// [ 'Apple', 'Banana', 'Orange' ]

// Example 2

const numbers = [10, 20, 30, 40];

console.log(numbers);

// Example 3

const mixed = [
  "Sunny",
  24,
  true,
  null,
  undefined,
  { city: "Hyderabad" },
  [10, 20],
];

console.log(mixed);

// Check array

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Hello")); // false

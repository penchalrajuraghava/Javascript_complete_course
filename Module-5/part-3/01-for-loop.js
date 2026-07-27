/*
==========================================================
Module 03 - Array Iteration
Topic: for Loop
==========================================================

Definition:
-----------
The for loop is the most common way to iterate over an array.

Syntax:
-------
for(initialization; condition; increment){
    // code
}
*/

const fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index: ${i}, Value: ${fruits[i]}`);
}

console.log("\nPrint Only Fruits:");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

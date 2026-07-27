/*
==========================================================
Accessing Array Elements
==========================================================
*/

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// First Element

console.log(fruits[0]);

// Second Element

console.log(fruits[1]);

// Last Element

console.log(fruits[fruits.length - 1]);

// Invalid Index

console.log(fruits[100]);

// Loop Through Array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

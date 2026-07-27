/*
==========================================================
Array Length Property
==========================================================
*/

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);

// Empty Array

const names = [];

console.log(names.length);

// Add Items

names[0] = "Sunny";
names[1] = "Rahul";

console.log(names.length);

// Remove Item

names.pop();

console.log(names.length);

// Length Can Be Changed

const fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits);

fruits.length = 2;

console.log(fruits);

// Increase Length

const arr = [1, 2, 3];

arr.length = 6;

console.log(arr);

// Empty Slots Exist

console.log(arr.length);

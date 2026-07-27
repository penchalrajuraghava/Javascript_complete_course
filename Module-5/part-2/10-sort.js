/*
==========================================================
Topic: sort()
==========================================================
*/

const names = ["Sunny", "Rahul", "Anil", "Kiran"];

names.sort();

console.log(names);

// Numbers

const numbers = [100, 5, 50, 20];

console.log(numbers.sort());

// Correct Numeric Sort

numbers.sort((a, b) => a - b);

console.log(numbers);

// Descending

numbers.sort((a, b) => b - a);

console.log(numbers);

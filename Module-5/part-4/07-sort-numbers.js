/*
==========================================================
Topic: Sorting Numbers
==========================================================
*/

const numbers = [100, 4, 15, 50, 2, 75];

console.log("Original:");

console.log(numbers);

// Wrong Sorting

console.log(numbers.sort());

// Correct Ascending

numbers.sort((a, b) => a - b);

console.log(numbers);

// Descending

numbers.sort((a, b) => b - a);

console.log(numbers);

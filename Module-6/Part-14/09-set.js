/*
=========================================
Set
=========================================
*/

const numbers = new Set([10, 20, 30, 20, 10]);

console.log(numbers);

numbers.add(40);
numbers.delete(20);

console.log(numbers.has(30));
console.log(numbers.size);

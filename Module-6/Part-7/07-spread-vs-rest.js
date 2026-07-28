/*
=========================================
Spread vs Rest
=========================================
*/

const numbers = [10, 20, 30];

console.log(...numbers);

const student = {
  name: "Sunny",
  age: 22,
  city: "Kadapa",
};

const { name, ...others } = student;

console.log(name);
console.log(others);

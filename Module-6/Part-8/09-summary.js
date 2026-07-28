/*
=========================================
Module Summary
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
  city: "Kadapa",
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

const copy = Object.fromEntries(Object.entries(student));

console.log(copy);

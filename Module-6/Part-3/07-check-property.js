/*
=========================================
Checking Property Existence
=========================================
*/

const person = {
  name: "Sunny",
  age: 22,
};

console.log("name" in person);
console.log("salary" in person);

console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("city"));

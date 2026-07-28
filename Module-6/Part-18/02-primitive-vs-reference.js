/*
=========================================
Primitive vs Reference
=========================================
*/

let x = 100;
let y = x;

y = 200;

console.log(x);
console.log(y);

const person = {
  name: "Sunny",
};

const another = person;

another.name = "Rahul";

console.log(person.name);

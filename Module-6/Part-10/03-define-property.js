/*
=========================================
Object.defineProperty()
=========================================
*/

const person = {};

Object.defineProperty(person, "country", {
  value: "India",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person);

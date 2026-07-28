/*
=========================================
Checking Object State
=========================================
*/

const person = {
  name: "Sunny",
};

Object.freeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isSealed(person));
console.log(Object.isExtensible(person));

/*
=========================================
Module Summary
=========================================
*/

const employee = {
  id: 101,
  name: "Sunny",
};

const copy = Object.assign({}, employee);

Object.freeze(copy);

console.log(copy);

console.log(Object.isFrozen(copy));
console.log(Object.isSealed(copy));
console.log(Object.isExtensible(copy));

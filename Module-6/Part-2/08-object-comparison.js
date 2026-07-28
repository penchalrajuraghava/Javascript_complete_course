/*
=========================================
Object Comparison
=========================================
*/

const obj1 = {
  name: "Sunny",
};

const obj2 = {
  name: "Sunny",
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);

const obj3 = obj1;

console.log(obj1 === obj3);

/*
=========================================
Primitive vs Reference Types
=========================================
*/

let x = 100;
let y = x;

y = 500;

console.log(x); //100
console.log(y); //500

const obj1 = {
  name: "Sunny",
};

const obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);
console.log(obj2.name);

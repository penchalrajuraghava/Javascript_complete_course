/*
=========================================
Object.assign()
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
};

const copy = Object.assign({}, student);

console.log(copy);

/*
=========================================
Object.getOwnPropertyDescriptor()
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
};

console.log(Object.getOwnPropertyDescriptor(student, "name"));

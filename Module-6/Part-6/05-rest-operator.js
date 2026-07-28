/*
=========================================
Rest Operator
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
  city: "Kadapa",
  course: "JavaScript",
};

const { name, ...otherDetails } = student;

console.log(name);
console.log(otherDetails);

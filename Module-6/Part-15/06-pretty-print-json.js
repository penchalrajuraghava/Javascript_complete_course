/*
=========================================
Pretty Print JSON
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
  city: "Hyderabad",
};

console.log(JSON.stringify(student, null, 4));

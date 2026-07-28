/*
=========================================
Object.assign()
=========================================
*/

const employee = {
  id: 101,
  name: "Rahul",
};

const copy = Object.assign({}, employee);

copy.name = "Sunny";

console.log(employee);
console.log(copy);

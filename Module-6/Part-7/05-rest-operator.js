/*
=========================================
Rest Operator
=========================================
*/

const employee = {
  id: 101,
  name: "Rahul",
  department: "IT",
  salary: 60000,
};

const { id, ...details } = employee;

console.log(id);
console.log(details);

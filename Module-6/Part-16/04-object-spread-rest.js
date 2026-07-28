/*
=========================================
Spread & Rest
=========================================
*/

const employee = {
  id: 101,
  name: "Sunny",
  salary: 60000,
};

const clone = {
  ...employee,
};

const {
  salary,

  ...details
} = employee;

console.log(clone);

console.log(details);

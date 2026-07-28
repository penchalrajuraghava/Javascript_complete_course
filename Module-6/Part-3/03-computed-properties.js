/*
=========================================
Computed Property Names
=========================================
*/

const property = "salary";

const employee = {
  name: "Rahul",
  [property]: 50000,
};

console.log(employee.salary);

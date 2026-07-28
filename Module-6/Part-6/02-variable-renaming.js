/*
=========================================
Variable Renaming
=========================================
*/

const employee = {
  name: "Rahul",
  salary: 60000,
};

const { name: employeeName, salary: monthlySalary } = employee;

console.log(employeeName);
console.log(monthlySalary);

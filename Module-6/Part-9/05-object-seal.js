/*
=========================================
Object.seal()
=========================================
*/

const employee = {
  name: "Sunny",
  salary: 60000,
};

Object.seal(employee);

employee.salary = 70000;
employee.city = "Hyderabad";
delete employee.name;

console.log(employee);

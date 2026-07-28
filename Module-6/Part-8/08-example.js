/*
=========================================
Real World Example
=========================================
*/

const employee = {
  id: 101,
  name: "Sunny",
  department: "IT",
  salary: 60000,
};

Object.entries(employee).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});

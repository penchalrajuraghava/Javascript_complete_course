/*
=========================================
Object.fromEntries()
=========================================
*/

const data = [
  ["id", 101],
  ["name", "Sunny"],
  ["department", "IT"],
];

const employee = Object.fromEntries(data);

console.log(employee);

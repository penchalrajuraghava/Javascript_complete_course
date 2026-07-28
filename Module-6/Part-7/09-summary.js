/*
=========================================
Module Summary
=========================================
*/

const employee = {
  id: 101,
  name: "Sunny",
  department: "IT",
};

const copy = {
  ...employee,
};

const merged = {
  ...employee,
  city: "Hyderabad",
};

const { name, ...details } = merged;

console.log(copy);
console.log(merged);
console.log(name);
console.log(details);

/*
==========================================================
Topic: Method Chaining
==========================================================

Multiple array methods can be combined together.
*/

const employees = [
  { name: "Sunny", salary: 50000 },
  { name: "Rahul", salary: 70000 },
  { name: "Anil", salary: 40000 },
  { name: "Kiran", salary: 90000 },
];

const result = employees
  .filter((employee) => employee.salary >= 50000)
  .map((employee) => employee.name.toUpperCase())
  .sort();

console.log(result);

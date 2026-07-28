/*
=========================================
Nullish Coalescing
=========================================
*/

const employee = {
  name: "Rahul",
};

console.log(employee.city ?? "City Not Available");
console.log(employee.salary ?? 0);

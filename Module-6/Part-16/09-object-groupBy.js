/*
=========================================
Object.groupBy()
=========================================
*/

const employees = [
  { name: "Sunny", department: "IT" },

  { name: "Rahul", department: "HR" },

  { name: "Kiran", department: "IT" },
];

const grouped = Object.groupBy(
  employees,

  (employee) => employee.department,
);

console.log(grouped);

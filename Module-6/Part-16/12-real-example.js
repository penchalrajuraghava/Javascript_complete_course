/*
=========================================
Real World Example
=========================================
*/

const employees = [
  {
    id: 1,
    name: "Sunny",
    department: "IT",
  },

  {
    id: 2,
    name: "Rahul",
    department: "HR",
  },

  {
    id: 3,
    name: "Kiran",
    department: "IT",
  },
];

const groupedEmployees = Object.groupBy(
  employees,

  (employee) => employee.department,
);

console.log(groupedEmployees);

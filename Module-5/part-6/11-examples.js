/*
==========================================================
Real World Examples
==========================================================
*/

const departments = [
  {
    name: "IT",
    employees: ["Sunny", "Rahul"],
  },
  {
    name: "HR",
    employees: ["Anil", "Kiran"],
  },
];

const allEmployees = departments.flatMap((department) => department.employees);

console.log(allEmployees);

const ids = Array.from({ length: 10 }, (_, index) => `EMP${index + 1}`);

console.log(ids);

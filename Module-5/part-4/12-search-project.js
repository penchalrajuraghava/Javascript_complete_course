/*
==========================================================
Mini Project
Employee Search
==========================================================
*/

const employees = [
  { id: 101, name: "Sunny", department: "IT" },
  { id: 102, name: "Rahul", department: "HR" },
  { id: 103, name: "Anil", department: "Finance" },
  { id: 104, name: "Kiran", department: "IT" },
];

function searchEmployee(keyword) {
  return employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(keyword.toLowerCase()) ||
      employee.department.toLowerCase().includes(keyword.toLowerCase()),
  );
}

console.log(searchEmployee("it"));

console.log(searchEmployee("sun"));

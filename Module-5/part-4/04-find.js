/*
==========================================================
Topic: find()
==========================================================
*/

const employees = [
  { id: 1, name: "Sunny" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Kiran" },
];

const employee = employees.find((emp) => emp.id === 2);

console.log(employee);

/*
==========================================================
Topic: findIndex()
==========================================================
*/

const employees = [
  { id: 1, name: "Sunny" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Kiran" },
];

const index = employees.findIndex((emp) => emp.id === 3);

console.log(index);

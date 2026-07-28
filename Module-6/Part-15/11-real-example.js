/*
=========================================
Real World Example
=========================================
*/

const employees = [
  {
    id: 1,
    name: "Sunny",
  },

  {
    id: 2,
    name: "Rahul",
  },
];

const json = JSON.stringify(employees);

console.log(json);

const data = JSON.parse(json);

console.log(data);

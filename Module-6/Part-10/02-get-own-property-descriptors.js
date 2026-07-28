/*
=========================================
Object.getOwnPropertyDescriptors()
=========================================
*/

const employee = {
  id: 101,
  name: "Rahul",
  salary: 60000,
};

console.log(Object.getOwnPropertyDescriptors(employee));

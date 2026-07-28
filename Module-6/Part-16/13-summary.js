/*
=========================================
Module Summary
=========================================
*/

const employee = {
  id: 101,

  name: "Sunny",

  profile: {
    email: "sunny@gmail.com",
  },
};

console.log(employee.profile?.email);

console.log(Object.hasOwn(employee, "name"));

console.log(employee.salary ?? 50000);

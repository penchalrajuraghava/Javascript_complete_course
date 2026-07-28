/*
=========================================
Reachability
=========================================
*/

let person = {
  name: "Sunny",
};

const employee = person;

person = null;

console.log(employee);

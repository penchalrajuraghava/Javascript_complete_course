/*
=========================================
Merging Objects
=========================================
*/

const personal = {
  name: "Sunny",
};

const address = {
  city: "Hyderabad",
};

const job = {
  department: "IT",
};

const employee = Object.assign({}, personal, address, job);

console.log(employee);

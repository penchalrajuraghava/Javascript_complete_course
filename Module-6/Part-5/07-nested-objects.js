/*
=========================================
Nested Objects
=========================================
*/

const employee = {
  name: "Rahul",

  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};

console.log(employee.address.city);
console.log(employee.address.state);

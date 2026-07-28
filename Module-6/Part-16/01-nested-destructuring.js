/*
=========================================
Nested Destructuring
=========================================
*/

const employee = {
  id: 101,

  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};

const {
  address: { city },
} = employee;

console.log(city);

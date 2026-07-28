/*
=========================================
Nested Object Destructuring
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
  address: { city, state },
} = employee;

console.log(city);
console.log(state);

/*
=========================================
Module Summary
=========================================
*/

const person = {
  name: "Sunny",

  address: {
    city: "Kadapa",
  },
};

const copy = structuredClone(person);

copy.address.city = "Hyderabad";

console.log(person);
console.log(copy);

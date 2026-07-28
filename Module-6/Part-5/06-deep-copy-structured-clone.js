/*
=========================================
Deep Copy using structuredClone()
=========================================
*/

const student = {
  name: "Sunny",
  address: {
    city: "Kadapa",
  },
};

const copy = structuredClone(student);

copy.address.city = "Hyderabad";

console.log(student);
console.log(copy);

/*
=========================================
Copying Pitfalls
=========================================
*/

const original = {
  name: "Sunny",

  address: {
    city: "Kadapa",
  },
};

const shallow = {
  ...original,
};

shallow.address.city = "Bangalore";

console.log(original.address.city);
console.log(shallow.address.city);

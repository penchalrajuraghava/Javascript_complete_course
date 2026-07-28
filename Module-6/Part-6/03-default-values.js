/*
=========================================
Default Values
=========================================
*/

const person = {
  name: "Sunny",
};

const { name, city = "Kadapa", country = "India" } = person;

console.log(name);
console.log(city);
console.log(country);

/*
=========================================
JSON vs JavaScript Object
=========================================
*/

const person = {
  name: "Sunny",

  greet() {
    console.log("Hello");
  },
};

const json = JSON.stringify(person);

console.log(json);

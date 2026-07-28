/*
=========================================
entries() & fromEntries()
=========================================
*/

const user = {
  name: "Sunny",
  age: 22,
};

const entries = Object.entries(user);

console.log(entries);

const object = Object.fromEntries(entries);

console.log(object);

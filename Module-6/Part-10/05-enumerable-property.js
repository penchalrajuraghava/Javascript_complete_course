/*
=========================================
Enumerable Property
=========================================
*/

const user = {};

Object.defineProperty(user, "password", {
  value: "admin123",
  enumerable: false,
});

user.name = "Sunny";

console.log(Object.keys(user));

console.log(user.password);

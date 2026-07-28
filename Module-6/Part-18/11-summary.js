/*
=========================================
Module Summary
=========================================
*/

let user = {
  name: "Sunny",
};

let copy = user;

user = null;

console.log(copy);

copy = null;

console.log("Object is now eligible for garbage collection.");

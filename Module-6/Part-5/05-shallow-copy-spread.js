/*
=========================================
Spread Operator
=========================================
*/

const mobile = {
  brand: "OnePlus",
  model: "Nord",
};

const newMobile = {
  ...mobile,
};

newMobile.model = "Nord 6";

console.log(mobile);
console.log(newMobile);

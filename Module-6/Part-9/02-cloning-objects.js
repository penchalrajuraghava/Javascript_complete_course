/*
=========================================
Cloning Objects
=========================================
*/

const mobile = {
  brand: "OnePlus",
  model: "Nord 6",
};

const clonedMobile = Object.assign({}, mobile);

clonedMobile.model = "Nord 6R";

console.log(mobile);
console.log(clonedMobile);

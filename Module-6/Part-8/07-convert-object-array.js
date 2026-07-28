/*
=========================================
Convert Object to Array
=========================================
*/

const mobile = {
  brand: "OnePlus",
  model: "Nord 6",
  color: "Black",
};

const entries = Object.entries(mobile);

console.log(entries);

const newObject = Object.fromEntries(entries);

console.log(newObject);

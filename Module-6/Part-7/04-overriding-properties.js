/*
=========================================
Overriding Properties
=========================================
*/

const mobile = {
  brand: "OnePlus",
  model: "Nord 6",
  color: "Black",
};

const updatedMobile = {
  ...mobile,
  color: "Blue",
};

console.log(updatedMobile);

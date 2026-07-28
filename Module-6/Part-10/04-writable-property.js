/*
=========================================
Writable Property
=========================================
*/

const product = {};

Object.defineProperty(product, "id", {
  value: 1,
  writable: false,
});

product.id = 10;

console.log(product.id);

/*
=========================================
Object.hasOwn()
=========================================
*/

const product = {
  name: "Laptop",
};

console.log(Object.hasOwn(product, "name"));

console.log(Object.hasOwn(product, "price"));

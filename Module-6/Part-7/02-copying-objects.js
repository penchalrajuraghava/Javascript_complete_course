/*
=========================================
Copying Objects
=========================================
*/

const product = {
  id: 1,
  name: "Laptop",
  price: 75000,
};

const copiedProduct = {
  ...product,
};

copiedProduct.price = 80000;

console.log(product);
console.log(copiedProduct);

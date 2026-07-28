/*
=========================================
Object.preventExtensions()
=========================================
*/

const product = {
  id: 1,
  name: "Laptop",
};

Object.preventExtensions(product);

product.price = 80000;
product.name = "Gaming Laptop";
delete product.id;

console.log(product);

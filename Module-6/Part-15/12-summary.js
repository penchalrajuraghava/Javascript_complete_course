/*
=========================================
Module Summary
=========================================
*/

const product = {
  id: 1,
  name: "Laptop",
  price: 75000,
};

const json = JSON.stringify(product);

console.log(json);

const object = JSON.parse(json);

console.log(object);

/*
==========================================================
Topic: reduce()
==========================================================

Definition:
-----------
Converts an array into a single value.

Syntax:
-------
array.reduce(callback, initialValue)
*/

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log("Total:", total);

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2500 },
];

const totalPrice = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log("Total Price:", totalPrice);

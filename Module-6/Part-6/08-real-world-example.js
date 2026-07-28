/*
=========================================
Real World Example
=========================================
*/

const product = {
  id: 1,
  name: "Laptop",
  price: 75000,
  stock: 25,
};

function displayProduct({ name, price }) {
  console.log("Product :", name);
  console.log("Price :", price);
}

displayProduct(product);

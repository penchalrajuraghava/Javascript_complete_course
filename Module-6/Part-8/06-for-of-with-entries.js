/*
=========================================
for...of with Object.entries()
=========================================
*/

const product = {
  id: 1,
  name: "Laptop",
  price: 75000,
};

for (const [key, value] of Object.entries(product)) {
  console.log(key, ":", value);
}

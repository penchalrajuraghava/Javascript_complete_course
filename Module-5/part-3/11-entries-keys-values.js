/*
==========================================================
Topic: entries(), keys(), values()
==========================================================
*/

const fruits = ["Apple", "Banana", "Orange"];

console.log("Keys:");

for (const key of fruits.keys()) {
  console.log(key);
}

console.log("\nValues:");

for (const value of fruits.values()) {
  console.log(value);
}

console.log("\nEntries:");

for (const [index, value] of fruits.entries()) {
  console.log(index, value);
}

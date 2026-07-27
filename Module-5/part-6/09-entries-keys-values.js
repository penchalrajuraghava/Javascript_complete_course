/*
==========================================================
Topic: entries(), keys(), values()
==========================================================
*/

const colors = ["Red", "Green", "Blue"];

console.log("Keys");

for (const key of colors.keys()) {
  console.log(key);
}

console.log("Values");

for (const value of colors.values()) {
  console.log(value);
}

console.log("Entries");

for (const [index, value] of colors.entries()) {
  console.log(index, value);
}

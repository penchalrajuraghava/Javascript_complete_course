/*
==========================================================
Updating Array Elements
==========================================================
*/

const cars = ["BMW", "Audi", "Tesla"];

console.log(cars);

// Update

cars[1] = "Mercedes";

console.log(cars);

// Add New Value

cars[3] = "Toyota";

console.log(cars);

// Update First Element

cars[0] = "Mahindra";

console.log(cars);

// Array Stores References

const users = ["Sunny", "Rahul"];

const copy = users;

copy[0] = "Raju";

console.log(users);
console.log(copy);

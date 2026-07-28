/*
=========================================
Module Summary
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
};

// Access
console.log(student.name);

// Update
student.age = 23;

// Add
student.city = "Kadapa";

// Delete
delete student.city;

// Check
console.log("name" in student);

// Optional Chaining
console.log(student.address?.city);

// Nullish Coalescing
console.log(student.course ?? "Not Assigned");

console.log(student);

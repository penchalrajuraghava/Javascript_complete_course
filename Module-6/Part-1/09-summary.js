/*
===========================================
Module Summary
===========================================
*/

const student = {
  name: "Sunny",
  age: 22,
  course: "MCA",
};

console.log(student);

// Access
console.log(student.name);

// Update
student.age = 23;

// Add
student.city = "Kadapa";

// Delete
delete student.course;

console.log(student);

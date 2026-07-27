/*
==========================================================
Topic: Sort Objects
==========================================================
*/

const students = [
  { name: "Sunny", marks: 92 },
  { name: "Rahul", marks: 65 },
  { name: "Anil", marks: 80 },
  { name: "Kiran", marks: 98 },
];

// Ascending

students.sort((a, b) => a.marks - b.marks);

console.log(students);

// Descending

students.sort((a, b) => b.marks - a.marks);

console.log(students);

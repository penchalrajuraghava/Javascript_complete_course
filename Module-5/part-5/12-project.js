/*
==========================================================
Mini Project
Student Marks Analyzer
==========================================================
*/

const marks = [80, 90, 75, 95, 88];

const highest = Math.max(...marks);

const lowest = Math.min(...marks);

const total = marks.reduce((sum, mark) => sum + mark, 0);

const average = total / marks.length;

console.log("Highest:", highest);

console.log("Lowest:", lowest);

console.log("Total:", total);

console.log("Average:", average.toFixed(2));

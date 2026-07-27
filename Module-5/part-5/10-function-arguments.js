/*
==========================================================
Topic: Spread with Functions
==========================================================
*/

const marks = [85, 90, 95];

console.log(Math.max(...marks));

console.log(Math.min(...marks));

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...marks));

/*
==========================================================
Topic: Swap Variables
==========================================================
*/

let a = 100;
let b = 200;

console.log("Before");

console.log(a, b);

[a, b] = [b, a];

console.log("After");

console.log(a, b);

/*
==========================================================
Topic: Rest Operator (...)
==========================================================
*/

const numbers = [10, 20, 30, 40, 50, 60];

const [first, second, ...remaining] = numbers;

console.log(first);

console.log(second);

console.log(remaining);

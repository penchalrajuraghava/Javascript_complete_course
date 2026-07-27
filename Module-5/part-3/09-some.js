/*
==========================================================
Topic: some()
==========================================================

Returns true if at least ONE element satisfies the condition.
*/

const marks = [45, 50, 80, 90];

const hasDistinction = marks.some((mark) => mark >= 75);

console.log(hasDistinction);

const hasNegative = [-5, 10, 20].some((number) => number < 0);

console.log(hasNegative);

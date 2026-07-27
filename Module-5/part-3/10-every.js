/*
==========================================================
Topic: every()
==========================================================

Returns true only if ALL elements satisfy the condition.
*/

const marks = [60, 75, 80, 95];

const passed = marks.every((mark) => mark >= 35);

console.log(passed);

const evenNumbers = [2, 4, 6, 8];

console.log(evenNumbers.every((number) => number % 2 === 0));

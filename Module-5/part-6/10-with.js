/*
==========================================================
Topic: with() (ES2023)
==========================================================

Creates a NEW array with one changed element.
Original array is not modified.
*/

const marks = [80, 85, 90];

const updated = marks.with(1, 100);

console.log(marks);

console.log(updated);

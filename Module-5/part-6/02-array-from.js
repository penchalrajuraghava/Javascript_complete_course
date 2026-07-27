/*
==========================================================
Topic: Array.from()
==========================================================

Creates a new array from iterable objects.
*/

const word = "JavaScript";

const letters = Array.from(word);

console.log(letters);

const numbers = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(numbers);

const squares = Array.from({ length: 10 }, (_, i) => (i + 1) ** 2);

console.log(squares);

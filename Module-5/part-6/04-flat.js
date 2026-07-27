/*
==========================================================
Topic: flat()
==========================================================
*/

const data = [1, 2, [3, 4], [5, 6]];

console.log(data.flat());

const nested = [1, [2, [3, [4]]]];

console.log(nested.flat(2));

console.log(nested.flat(Infinity));

/*
==========================================================
Topic: flatMap()
==========================================================
*/

const sentences = ["JavaScript Arrays", "React JS", "Node JS"];

const words = sentences.flatMap((sentence) => sentence.split(" "));

console.log(words);

const numbers = [1, 2, 3];

const doubled = numbers.flatMap((number) => [number, number * 2]);

console.log(doubled);

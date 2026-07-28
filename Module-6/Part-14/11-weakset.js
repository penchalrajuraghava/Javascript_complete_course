/*
=========================================
WeakSet
=========================================
*/

const weakSet = new WeakSet();

const student = {};

weakSet.add(student);

console.log(weakSet.has(student));

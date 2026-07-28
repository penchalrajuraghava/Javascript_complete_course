/*
=========================================
Regular Expressions
=========================================
*/

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailPattern.test("user@gmail.com"));
console.log(emailPattern.test("invalid-email"));

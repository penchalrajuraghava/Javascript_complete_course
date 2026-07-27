/*
==========================================================
Topic: localeCompare()
==========================================================
*/

const cities = ["hyderabad", "Delhi", "Mumbai", "bangalore", "Chennai"];

cities.sort((a, b) => a.localeCompare(b));

console.log(cities);

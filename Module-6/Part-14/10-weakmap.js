/*
=========================================
WeakMap
=========================================
*/

const weakMap = new WeakMap();

const employee = {};

weakMap.set(employee, {
  role: "Developer",
});

console.log(weakMap.get(employee));

/*
=========================================
Map
=========================================
*/

const employeeMap = new Map();

employeeMap.set("id", 101);
employeeMap.set("name", "Sunny");
employeeMap.set("department", "IT");

console.log(employeeMap.get("name"));

for (const [key, value] of employeeMap) {
  console.log(`${key} : ${value}`);
}

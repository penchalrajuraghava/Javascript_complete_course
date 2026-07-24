/*
for...in

Used to iterate over object keys.
*/

const employee = {
  id: 101,
  name: "Sunny",
  department: "Development",
};

for (const key in employee) {
  console.log(key, ":", employee[key]);
}

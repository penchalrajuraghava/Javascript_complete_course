/*
=========================================
Looping Through Objects
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
  city: "Kadapa",
};

for (const key of Object.keys(student)) {
  console.log(key, ":", student[key]);
}

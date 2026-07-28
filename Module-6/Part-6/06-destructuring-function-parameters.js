/*
=========================================
Function Parameter Destructuring
=========================================
*/

function displayStudent({ name, age, city }) {
  console.log(name);
  console.log(age);
  console.log(city);
}

const student = {
  name: "Sunny",
  age: 22,
  city: "Kadapa",
};

displayStudent(student);

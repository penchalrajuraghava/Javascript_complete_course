/*
=========================================
Object.create()
=========================================
*/

const person = {
  greet() {
    console.log("Welcome!");
  },
};

const student = Object.create(person);

student.name = "Sunny";
student.age = 22;

console.log(student);

student.greet();

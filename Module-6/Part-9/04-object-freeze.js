/*
=========================================
Object.freeze()
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
};

Object.freeze(student);

student.name = "Rahul";
student.city = "Kadapa";
delete student.age;

console.log(student);

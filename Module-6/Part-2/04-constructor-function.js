/*
=========================================
Constructor Function
=========================================
*/

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

const student1 = new Student("Sunny", 22, "MCA");
const student2 = new Student("Rahul", 24, "B.Tech");

console.log(student1);
console.log(student2);

/*
=========================================
Class Basics
=========================================
*/

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const student = new Student("Sunny", 22);

console.log(student);

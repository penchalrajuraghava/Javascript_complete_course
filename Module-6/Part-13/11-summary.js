/*
=========================================
Module Summary
=========================================
*/

class Student {
  constructor(name) {
    this.name = name;
  }

  study() {
    console.log(`${this.name} is studying JavaScript.`);
  }
}

const student = new Student("Sunny");

student.study();

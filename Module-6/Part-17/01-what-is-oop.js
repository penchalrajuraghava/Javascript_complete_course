/*
=========================================
What is OOP?
=========================================
*/

class Student {
  constructor(name) {
    this.name = name;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student("Sunny");

student.study();

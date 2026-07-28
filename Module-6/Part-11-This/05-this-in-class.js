/*
=========================================
this in Class
=========================================
*/

class Student {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(this.name);
  }
}

const student = new Student("Sunny");

student.display();

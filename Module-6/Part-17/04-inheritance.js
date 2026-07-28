/*
=========================================
Inheritance
=========================================
*/

class Employee {
  work() {
    console.log("Working");
  }
}

class Developer extends Employee {
  code() {
    console.log("Writing JavaScript");
  }
}

const developer = new Developer();

developer.work();
developer.code();

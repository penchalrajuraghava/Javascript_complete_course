/*
=========================================
Real World Example
=========================================
*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  display() {
    console.log(`${this.name} : ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);

    this.teamSize = teamSize;
  }

  display() {
    super.display();

    console.log(`Team Size : ${this.teamSize}`);
  }
}

const manager = new Manager(
  "Sunny",

  60000,

  10,
);

manager.display();

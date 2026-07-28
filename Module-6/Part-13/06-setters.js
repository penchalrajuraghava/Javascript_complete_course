/*
=========================================
Setters
=========================================
*/

class Employee {
  constructor() {
    this.salary = 0;
  }

  set monthlySalary(value) {
    if (value > 0) {
      this.salary = value;
    }
  }
}

const employee = new Employee();

employee.monthlySalary = 60000;

console.log(employee.salary);

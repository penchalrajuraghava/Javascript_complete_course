/*
=========================================
Constructor
=========================================
*/

class Employee {
  constructor(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
  }
}

const employee = new Employee(101, "Rahul", "IT");

console.log(employee);

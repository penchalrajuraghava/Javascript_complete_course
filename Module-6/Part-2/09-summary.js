/*
=========================================
Module Summary
=========================================
*/

const student = {
  name: "Sunny",
  age: 22,
};

student.city = "Kadapa";

console.log(student);

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

const emp = new Employee("Rahul", 50000);

console.log(emp);

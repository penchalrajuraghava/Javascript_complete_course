/*
=========================================
Instance vs Prototype Members
=========================================
*/

function Employee(name) {
  this.name = name;
}

Employee.prototype.company = "OpenAI";

const emp = new Employee("Sunny");

console.log(emp.name);

console.log(emp.company);

/*
=========================================
Setters
=========================================
*/

const employee = {
  salary: 0,

  set monthlySalary(value) {
    if (value > 0) {
      this.salary = value;
    }
  },
};

employee.monthlySalary = 60000;

console.log(employee.salary);

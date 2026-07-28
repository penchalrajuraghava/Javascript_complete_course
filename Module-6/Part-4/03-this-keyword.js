/*
=========================================
The this Keyword
=========================================
*/

const employee = {
  name: "Rahul",
  salary: 50000,

  details() {
    console.log("Name :", this.name);
    console.log("Salary :", this.salary);
  },
};

employee.details();

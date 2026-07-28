/*
=========================================
Module Summary
=========================================
*/

const employee = {
  name: "Sunny",

  show() {
    console.log(this.name);
  },
};

employee.show();

function printName() {
  console.log(this.name);
}

printName.call(employee);

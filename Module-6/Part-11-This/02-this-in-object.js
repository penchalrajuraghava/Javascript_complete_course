/*
=========================================
this Inside Object
=========================================
*/

const employee = {
  name: "Sunny",

  display() {
    console.log(this.name);
  },
};

employee.display();

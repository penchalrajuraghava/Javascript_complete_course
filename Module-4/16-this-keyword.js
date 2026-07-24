/*
this keyword

Refers to the current object.
*/

const employee = {
  name: "Sunny",

  display() {
    console.log(this.name);
  },
};

employee.display();

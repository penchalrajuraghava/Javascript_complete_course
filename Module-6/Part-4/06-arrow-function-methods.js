/*
=========================================
Arrow Function Inside Object
=========================================
*/

const person = {
  name: "Sunny",

  regularFunction() {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  },
};

person.regularFunction();
person.arrowFunction();

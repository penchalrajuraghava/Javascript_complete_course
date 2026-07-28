/*
=========================================
this in Arrow Function
=========================================
*/

const person = {
  name: "Sunny",

  regularFunction() {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this);
  },
};

person.regularFunction();
person.arrowFunction();

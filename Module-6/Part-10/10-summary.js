/*
=========================================
Module Summary
=========================================
*/

const person = {
  firstName: "Sunny",
  lastName: "Kumar",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName);

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

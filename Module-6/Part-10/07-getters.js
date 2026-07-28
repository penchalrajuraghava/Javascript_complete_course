/*
=========================================
Getters
=========================================
*/

const student = {
  firstName: "Sunny",
  lastName: "Kumar",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(student.fullName);

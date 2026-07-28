/*
=========================================
Object Methods
=========================================
*/

const student = {
  name: "Sunny",

  study() {
    console.log(this.name + " is studying JavaScript.");
  },
};

student.study();

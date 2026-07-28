/*
=========================================
Method Borrowing
=========================================
*/

const person1 = {
  name: "Sunny",

  greet() {
    console.log("Hello", this.name);
  },
};

const person2 = {
  name: "Rahul",
};

person1.greet.call(person2);

/*
=========================================
Object.setPrototypeOf()
=========================================
*/

const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = {};

Object.setPrototypeOf(dog, animal);

dog.eat();

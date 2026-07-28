/*
=========================================
Class Inheritance
=========================================
*/

class Animal {
  speak() {
    console.log("Animal Speaks");
  }
}

class Dog extends Animal {}

const dog = new Dog();

dog.speak();

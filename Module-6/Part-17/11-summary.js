/*
=========================================
Module Summary
=========================================
*/

class Animal {
  sound() {
    console.log("Animal");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog");
  }
}

const dog = new Dog();

dog.sound();

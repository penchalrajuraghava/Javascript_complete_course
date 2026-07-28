/*
=========================================
Polymorphism
=========================================
*/

class Animal {
  sound() {
    console.log("Animal Sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

new Cat().sound();
new Dog().sound();

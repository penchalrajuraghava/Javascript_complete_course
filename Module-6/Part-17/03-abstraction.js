/*
=========================================
Abstraction
=========================================
*/

class Car {
  start() {
    this.#startEngine();

    console.log("Car Started");
  }

  #startEngine() {
    console.log("Engine Started");
  }
}

const car = new Car();

car.start();

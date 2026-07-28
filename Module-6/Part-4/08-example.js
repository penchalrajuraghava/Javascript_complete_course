/*
=========================================
Real World Example
=========================================
*/

const car = {
  brand: "Toyota",
  speed: 0,

  start() {
    console.log("Car Started");
  },

  accelerate() {
    this.speed += 20;
    console.log("Speed :", this.speed);
  },

  brake() {
    this.speed -= 10;
    console.log("Speed :", this.speed);
  },
};

car.start();
car.accelerate();
car.accelerate();
car.brake();

/*
=========================================
Prototype Inheritance
=========================================
*/

const vehicle = {
  start() {
    console.log("Vehicle Started");
  },
};

const car = {
  brand: "Toyota",
};

Object.setPrototypeOf(car, vehicle);

car.start();

/*
=========================================
Configurable Property
=========================================
*/

const car = {};

Object.defineProperty(car, "brand", {
  value: "Toyota",
  configurable: false,
});

delete car.brand;

console.log(car.brand);

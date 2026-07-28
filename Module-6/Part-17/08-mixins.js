/*
=========================================
Mixins
=========================================
*/

const canEat = {
  eat() {
    console.log("Eating");
  },
};

const canSleep = {
  sleep() {
    console.log("Sleeping");
  },
};

const person = {
  ...canEat,
  ...canSleep,
};

person.eat();
person.sleep();

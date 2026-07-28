/*
=========================================
Module Summary
=========================================
*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello,", this.name);
};

const user = new Person("Sunny");

user.sayHello();

console.log(Object.getPrototypeOf(user));

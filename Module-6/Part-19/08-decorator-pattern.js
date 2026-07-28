/*
=========================================
Decorator Pattern
=========================================
*/

function logger(fn) {
  return function () {
    console.log("Before Execution");

    fn();

    console.log("After Execution");
  };
}

function greet() {
  console.log("Hello Sunny");
}

const decorated = logger(greet);

decorated();

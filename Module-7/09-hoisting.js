/****************************************************************

HOISTING

Variables and functions

move to the top

before execution.

Actually,

JavaScript allocates memory first,

it does NOT physically move code.

****************************************************************/

console.log(a);

var a = 50;

var a;

console.log(a);

a = 50;

hello();

function hello() {
  console.log("Hello");
}

// greet();

// Error

const greet = function () {
  console.log("Hi");
};

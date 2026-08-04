/****************************************************************

SCOPE

Scope determines

Who can access variables.

Types

1 Global Scope

2 Function Scope

3 Block Scope

****************************************************************/

// Global Scope

var company = "Google";

function developer() {
  console.log(company);
}

developer();

// function scope

function test() {
  let age = 25;

  console.log(age);
}

test();

// console.log(age);

// Error

// Block scope

if (true) {
  let city = "Hyderabad";

  const country = "India";

  console.log(city);
}

// console.log(city);

// Error

/* 
Global Scope

|

|---- Function Scope

        |

        |---- Block Scope

*/

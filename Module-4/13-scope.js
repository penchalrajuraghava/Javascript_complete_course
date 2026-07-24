/*
Scope

Global Scope
Function Scope
Block Scope
*/

let globalVariable = "Global";

function example() {
  let localVariable = "Local";

  console.log(globalVariable);

  console.log(localVariable);
}

example();

// console.log(localVariable); // Error

/*
Callback Function

A function passed as an argument.
*/

function processUser(callback) {
  console.log("Processing User");

  callback();
}

function completed() {
  console.log("Completed");
}

processUser(completed);

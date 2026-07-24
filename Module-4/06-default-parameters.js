/*
Default Parameters

Used when no value is passed.
*/

function welcome(name = "Guest") {
  console.log("Welcome", name);
}

welcome();

welcome("Sunny");

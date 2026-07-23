/*
Nested if

An if statement inside another if statement.
*/

let isLoggedIn = true;
let role = "Admin";

if (isLoggedIn) {
  if (role === "Admin") {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
} else {
  console.log("Please Login");
}

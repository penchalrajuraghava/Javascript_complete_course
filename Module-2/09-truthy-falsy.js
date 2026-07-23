/*
Falsy Values

false
0
-0
""
null
undefined
NaN

Everything else is Truthy.
*/

let username = "";

if (username) {
  console.log("User Exists");
} else {
  console.log("Username Empty");
}

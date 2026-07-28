/*
=========================================
this in Event Listener
=========================================
*/

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this);
});

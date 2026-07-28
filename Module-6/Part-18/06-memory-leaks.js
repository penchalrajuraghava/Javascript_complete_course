/*
=========================================
Memory Leaks
=========================================
*/

const button = document.querySelector("button");

function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);

// Later...

button.removeEventListener("click", handleClick);

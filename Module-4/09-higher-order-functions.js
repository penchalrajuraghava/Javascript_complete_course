/*
Higher Order Function

Receives another function or returns one.
*/

function execute(fn) {
  fn();
}

execute(() => {
  console.log("Higher Order Function");
});

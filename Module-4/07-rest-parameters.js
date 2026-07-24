/*
Rest Parameters

Collect multiple values into an array.
*/

function total(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(total(10, 20, 30));
console.log(total(5, 5, 5, 5));

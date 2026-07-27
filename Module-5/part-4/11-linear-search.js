/*
==========================================================
Topic: Linear Search
==========================================================
*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const numbers = [50, 10, 80, 20, 30];

console.log(linearSearch(numbers, 20));

console.log(linearSearch(numbers, 100));

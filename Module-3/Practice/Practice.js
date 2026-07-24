/*
Find sum from 1 to 100
*/

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum:", sum);

/*
5! = 120
*/

let factorial = 1;

for (let i = 1; i <= 5; i++) {
  factorial *= i;
}

console.log(factorial);

/*
Check if a number is prime.
*/

const number = 17;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
}

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");

/*
0 1 1 2 3 5 8 13
*/

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= 10; i++) {
  const next = first + second;

  console.log(next);

  first = second;
  second = next;
}

/*
Check if a string is a palindrome.
*/

const text = "madam";
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

console.log(text === reversed ? "Palindrome" : "Not Palindrome");

/*
Reverse a number.
*/

let number = 12345;
let reverse = 0;

while (number > 0) {
  const digit = number % 10;

  reverse = reverse * 10 + digit;

  number = Math.floor(number / 10);
}

console.log(reverse);

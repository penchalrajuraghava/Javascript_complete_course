// Check even or odd

let number = 15;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Largest of three numbers

let a = 15;
let b = 42;
let c = 31;

if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}

// Leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// ATM Withdrawal

let balance = 10000;
let amount = 2500;

if (amount <= balance) {
  balance -= amount;
  console.log("Withdrawal Successful");
  console.log("Remaining Balance:", balance);
} else {
  console.log("Insufficient Balance");
}

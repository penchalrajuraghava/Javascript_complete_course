function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return a / b;

    default:
      return "Invalid Operator";
  }
}

console.log(calculator(20, 10, "*"));

function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(6));

function palindrome(text) {
  const reversed = text.split("").reverse().join("");

  return text === reversed;
}

console.log(palindrome("madam"));

function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17));

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(30));

function grade(marks) {
  if (marks >= 90) return "A";

  if (marks >= 80) return "B";

  if (marks >= 70) return "C";

  return "Fail";
}

console.log(grade(85));

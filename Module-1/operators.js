/***********************************************************************
 * File Name : operators.js
 * Topic     : JavaScript Operators Master Course
 * Author    : Your Name
 *
 * This file contains:
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Equality Operators
 * 5. Logical Operators
 * 6. Increment & Decrement Operators
 * 7. Unary Operators
 * 8. Ternary Operator
 * 9. Nullish Coalescing Operator
 * 10. Optional Chaining Operator
 * 11. Bitwise Operators
 * 12. String Operators
 * 13. Type Operators
 * 14. Comma Operator
 * 15. Spread Operator
 * 16. Rest Operator
 * 17. Destructuring
 **********************************************************************/

console.log("========================================");
console.log("JAVASCRIPT OPERATORS MASTER COURSE");
console.log("========================================");

/***********************************************************************
 * 1. ARITHMETIC OPERATORS
 * Used for mathematical calculations.
 **********************************************************************/

console.log("\n1. ARITHMETIC OPERATORS");

let a = 20;
let b = 10;

console.log("Addition (+):", a + b); //30
console.log("Subtraction (-):", a - b); //10
console.log("Multiplication (*):", a * b); //200
console.log("Division (/):", a / b); //2
console.log("Modulus (%):", a % b); //0
console.log("Exponent (**):", a ** 2); //400

/***********************************************************************
 * 2. ASSIGNMENT OPERATORS
 * Used to assign values.
 **********************************************************************/

console.log("\n2. ASSIGNMENT OPERATORS");

let x = 10;

x += 5;
console.log("+= :", x);

x -= 3;
console.log("-= :", x);

x *= 2;
console.log("*= :", x);

x /= 4;
console.log("/= :", x);

x %= 3;
console.log("%= :", x);

x **= 2;
console.log("**= :", x);

/***********************************************************************
 * 3. COMPARISON OPERATORS
 * Compare two values and return true or false.
 **********************************************************************/

console.log("\n3. COMPARISON OPERATORS");

let num1 = 10;
let num2 = 20;

console.log(">", num1 > num2);
console.log("<", num1 < num2);
console.log(">=", num1 >= num2);
console.log("<=", num1 <= num2);

/***********************************************************************
 * 4. EQUALITY OPERATORS
 **********************************************************************/

console.log("\n4. EQUALITY OPERATORS");

console.log("== :", 10 == "10");
console.log("=== :", 10 === "10");

console.log("!= :", 10 != "10");
console.log("!== :", 10 !== "10");

/***********************************************************************
 * 5. LOGICAL OPERATORS
 **********************************************************************/

console.log("\n5. LOGICAL OPERATORS");

let age = 22;
let hasLicense = true;

console.log("AND (&&):", age >= 18 && hasLicense);

console.log("OR (||):", age < 18 || hasLicense);

console.log("NOT (!):", !hasLicense);

/***********************************************************************
 * 6. INCREMENT & DECREMENT
 **********************************************************************/

console.log("\n6. INCREMENT & DECREMENT");

let count = 5;

console.log("Original:", count);

console.log("Post Increment:", count++);
console.log("After:", count);

console.log("Pre Increment:", ++count);

console.log("Post Decrement:", count--);
console.log("After:", count);

console.log("Pre Decrement:", --count);

/***********************************************************************
 * 7. UNARY OPERATORS
 **********************************************************************/

console.log("\n7. UNARY OPERATORS");

let str = "100";

console.log("Unary + :", +str);
console.log("Unary - :", -str);

let flag = true;
console.log("Logical NOT:", !flag);

/***********************************************************************
 * 8. TERNARY OPERATOR
 **********************************************************************/

console.log("\n8. TERNARY OPERATOR");

let marks = 75;

let result = marks >= 35 ? "PASS" : "FAIL";

console.log(result);

/***********************************************************************
 * 9. NULLISH COALESCING (??)
 * Returns right value only if left is null or undefined.
 **********************************************************************/

console.log("\n9. NULLISH COALESCING");

let username = null;

console.log(username ?? "Guest");

let city = undefined;

console.log(city ?? "Hyderabad");

/***********************************************************************
 * 10. OPTIONAL CHAINING (?.)
 **********************************************************************/

console.log("\n10. OPTIONAL CHAINING");

const student = {
  name: "Sunny",
  address: {
    city: "Kadapa",
  },
};

console.log(student.address?.city);
console.log(student.contact?.phone);

/***********************************************************************
 * 11. BITWISE OPERATORS
 **********************************************************************/

console.log("\n11. BITWISE OPERATORS");

let m = 5;
let n = 3;

console.log("& :", m & n);

console.log("| :", m | n);

console.log("^ :", m ^ n);

console.log("~ :", ~m);

console.log("<< :", m << 1);

console.log(">> :", m >> 1);

/***********************************************************************
 * 12. STRING OPERATOR
 **********************************************************************/

console.log("\n12. STRING OPERATOR");

let firstName = "Sunny";
let lastName = "Raju";

console.log(firstName + " " + lastName);

let greeting = "Hello ";

greeting += "JavaScript";

console.log(greeting);

/***********************************************************************
 * 13. TYPE OPERATORS
 **********************************************************************/

console.log("\n13. TYPE OPERATORS");

console.log(typeof 100);

console.log(typeof "Hello");

console.log(typeof true);

console.log(typeof []);

console.log(typeof {});

console.log(typeof null);

console.log([] instanceof Array);

console.log(new Date() instanceof Date);

/***********************************************************************
 * 14. COMMA OPERATOR
 **********************************************************************/

console.log("\n14. COMMA OPERATOR");

let value = (1, 2, 3, 4);

console.log(value);

/***********************************************************************
 * 15. SPREAD OPERATOR (...)
 **********************************************************************/

console.log("\n15. SPREAD OPERATOR");

let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

let person = {
  name: "Sunny",
  age: 22,
};

let newPerson = {
  ...person,
  city: "Kadapa",
};

console.log(newPerson);

/***********************************************************************
 * 16. REST OPERATOR (...)
 **********************************************************************/

console.log("\n16. REST OPERATOR");

function total(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

console.log(total(10, 20, 30, 40));

/***********************************************************************
 * 17. DESTRUCTURING
 **********************************************************************/

console.log("\n17. DESTRUCTURING");

let colors = ["Red", "Green", "Blue"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

let employee = {
  empName: "Sunny",

  salary: 50000,

  department: "IT",
};

let { empName, salary, department } = employee;

console.log(empName);

console.log(salary);

console.log(department);

/***********************************************************************
 * EXTRA EXAMPLES
 **********************************************************************/

console.log("\nEXTRA PRACTICE");

console.log(5 + "5");

console.log("5" - 2);

console.log("5" * 2);

console.log("5" / 2);

console.log(10 == "10");

console.log(10 === "10");

console.log(Boolean(0));

console.log(Boolean(1));

console.log(Boolean(""));

console.log(Boolean("JavaScript"));

/***********************************************************************
 * SUMMARY
 *
 * Arithmetic:
 * +  -  *  /  %  **
 *
 * Assignment:
 * = += -= *= /= %= **=
 *
 * Comparison:
 * > < >= <=
 *
 * Equality:
 * == === != !==
 *
 * Logical:
 * && || !
 *
 * Increment:
 * ++ --
 *
 * Unary:
 * + - !
 *
 * Conditional:
 * ?:
 *
 * Nullish:
 * ??
 *
 * Optional:
 * ?.
 *
 * Bitwise:
 * & | ^ ~ << >>
 *
 * String:
 * +
 *
 * Type:
 * typeof
 * instanceof
 *
 * Spread:
 * ...
 *
 * Rest:
 * ...
 *
 * Destructuring:
 * [] {}
 *
 **********************************************************************/

console.log("\nJavaScript Operators Course Completed!");

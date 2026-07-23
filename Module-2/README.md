# Module 02 - JavaScript Control Flow

## 📌 Overview

Control Flow is one of the most important concepts in JavaScript. It determines the order in which statements are executed based on conditions. Every real-world JavaScript application—from login systems to payment gateways—uses control flow to make decisions.

In this module, you will learn how to use conditional statements, comparison operators, logical operators, and modern JavaScript features like the Nullish Coalescing Operator (`??`) and Optional Chaining (`?.`).

---

# 🎯 Learning Objectives

After completing this module, you will be able to:

- Understand how JavaScript makes decisions.
- Use conditional statements effectively.
- Compare values using comparison operators.
- Combine multiple conditions using logical operators.
- Write clean and readable decision-making code.
- Understand Truthy and Falsy values.
- Use the ternary operator for simple conditions.
- Prevent runtime errors using Optional Chaining.
- Provide default values using the Nullish Coalescing Operator.
- Solve real-world programming problems using conditional logic.

---

# 📂 Folder Structure

```text
Module-02-Control-Flow/
│
├── README.md
├── 01-if-statement.js
├── 02-if-else.js
├── 03-else-if.js
├── 04-nested-if.js
├── 05-switch.js
├── 06-ternary-operator.js
├── 07-logical-operators.js
├── 08-comparison-operators.js
├── 09-truthy-falsy.js
├── 10-short-circuit.js
├── 11-nullish-coalescing.js
├── 12-optional-chaining.js
│
├── practice/
│   ├── problem-01.js
│   ├── problem-02.js
│   ├── problem-03.js
│   └── problem-04.js
│
└── interview-questions.md
```

---

# 📚 Topics Covered

## 1. if Statement

Executes a block of code only when the specified condition is true.

Example:

```javascript
if (age >= 18) {
  console.log("Eligible to vote");
}
```

---

## 2. if...else Statement

Executes one block if the condition is true and another block if the condition is false.

Example:

```javascript
if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Please Login");
}
```

---

## 3. else if Ladder

Checks multiple conditions in sequence.

Example:

```javascript
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

---

## 4. Nested if

An `if` statement inside another `if` statement.

Example:

```javascript
if (userLoggedIn) {
  if (isAdmin) {
    console.log("Admin Dashboard");
  }
}
```

---

## 5. switch Statement

Used when comparing a single value against multiple cases.

Example:

```javascript
switch (day) {
  case 1:
    console.log("Monday");
    break;

  default:
    console.log("Invalid Day");
}
```

---

## 6. Ternary Operator

Short-hand version of an if...else statement.

Syntax:

```javascript
condition ? trueValue : falseValue;
```

Example:

```javascript
const result = age >= 18 ? "Adult" : "Minor";
```

---

## 7. Logical Operators

### AND (&&)

Returns true only if both conditions are true.

```javascript
age >= 18 && hasLicense;
```

### OR (||)

Returns true if at least one condition is true.

```javascript
isAdmin || isManager;
```

### NOT (!)

Reverses a boolean value.

```javascript
!isLoggedIn;
```

---

## 8. Comparison Operators

| Operator | Description            |
| -------- | ---------------------- |
| ==       | Equal (Loose Equality) |
| ===      | Strict Equal           |
| !=       | Not Equal              |
| !==      | Strict Not Equal       |
| >        | Greater Than           |
| <        | Less Than              |
| >=       | Greater Than or Equal  |
| <=       | Less Than or Equal     |

---

## 9. Truthy and Falsy Values

### Falsy Values

- false
- 0
- -0
- ""
- null
- undefined
- NaN

Everything else in JavaScript is considered Truthy.

---

## 10. Short-Circuit Evaluation

### OR (||)

Returns the first truthy value.

```javascript
const username = input || "Guest";
```

### AND (&&)

Stops execution if the first condition is false.

```javascript
isLoggedIn && showDashboard();
```

---

## 11. Nullish Coalescing Operator (??)

Returns the right-hand value only if the left-hand value is `null` or `undefined`.

```javascript
const salary = userSalary ?? 25000;
```

---

## 12. Optional Chaining

Safely accesses nested object properties.

```javascript
console.log(employee.address?.city);
```

Without Optional Chaining:

```javascript
employee.address.city;
```

may throw an error if `address` is undefined.

---

# 💡 Real-World Applications

These concepts are used in:

- Login Authentication
- User Authorization
- Role-Based Access
- Shopping Cart Validation
- ATM Systems
- Banking Applications
- Payment Processing
- Form Validation
- Admin Dashboard
- React Conditional Rendering
- Express Middleware
- API Authentication

---

# 📝 Practice Programs

- Even or Odd Number
- Largest of Three Numbers
- Leap Year Checker
- Grade Calculator
- ATM Withdrawal Program

---

# 🎤 Interview Questions

- Difference between `==` and `===`
- Difference between `if` and `switch`
- What are Truthy and Falsy values?
- Explain the Ternary Operator.
- What is Short-Circuit Evaluation?
- What is Optional Chaining?
- What is Nullish Coalescing?
- Explain Nested if.
- Difference between Logical Operators.
- Comparison Operators in JavaScript.

---

# 🏆 Skills You Will Gain

- Decision Making
- Conditional Programming
- Boolean Logic
- Modern JavaScript Syntax
- Writing Cleaner Code
- Solving Programming Problems
- Interview Preparation

---

# 📖 Prerequisites

Before starting this module, you should know:

- Variables
- Data Types
- Operators
- Basic JavaScript Syntax

---

# 🚀 Next Module

## Module 03 – JavaScript Loops

Topics Covered:

- for Loop
- while Loop
- do...while Loop
- break
- continue
- Nested Loops
- for...of
- for...in
- Pattern Printing
- Multiplication Tables
- Prime Numbers
- Fibonacci Series
- Factorial
- Palindrome
- Reverse Number
- Interview Coding Problems

---

## ⭐ If you find this repository helpful, consider giving it a Star.

Happy Coding! 🚀

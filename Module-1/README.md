# Module 01 – JavaScript Basics

Welcome to the first module of the **JavaScript Master Course**.

This module is all about understanding the building blocks of JavaScript. Before jumping into functions, loops, DOM manipulation, or frameworks like React, it's important to have a solid understanding of the language itself.

The examples in this module are intentionally simple and can be executed directly in the browser console or with Node.js.

---

## 📂 Folder Structure

```
Module-01-JavaScript-Basics/
│
├── README.md
├── hello-world.js
├── comments.js
├── variables.js
├── data-types.js
├── let-var-const.js
├── operators.js
├── type-conversion.js
└── template-literals.js
```

---

## 📚 Topics Covered

### 1. Hello World

The traditional starting point for every programming language.

You'll learn:

- Running JavaScript in Node.js
- Using `console.log()`
- Understanding program execution

Example:

```javascript
console.log("Hello, World!");
```

---

### 2. Comments

Writing readable code is just as important as writing working code.

Topics:

- Single-line comments
- Multi-line comments
- When comments are useful
- When comments should be avoided

Example:

```javascript
// User login starts here

/*
Validate user input
Check password
Generate token
*/
```

---

### 3. Variables

Variables are used to store information.

You'll learn:

- Declaring variables
- Naming conventions
- Updating values
- Variable scope (basic introduction)

Example:

```javascript
let username = "Sunny";
let age = 22;

console.log(username);
console.log(age);
```

---

### 4. Data Types

JavaScript supports several built-in data types.

Covered:

- String
- Number
- Boolean
- Undefined
- Null
- Object
- Array
- Symbol (Introduction)
- BigInt (Introduction)

Example:

```javascript
let name = "John";
let age = 25;
let isLoggedIn = true;
let salary = null;
let city;

console.log(typeof name);
```

---

### 5. let

Modern JavaScript uses `let` for variables that need to change.

Topics:

- Block scope
- Reassignment
- Best practices

Example:

```javascript
let score = 90;

score = 95;
```

---

### 6. var

Understand how older JavaScript worked and why `var` is rarely used today.

Topics:

- Function scope
- Hoisting
- Redeclaration

Example:

```javascript
var company = "Google";
```

---

### 7. const

Use `const` whenever a variable should not be reassigned.

Topics:

- Constant variables
- Objects with const
- Arrays with const

Example:

```javascript
const PI = 3.14159;
```

---

### 8. Operators

Learn how JavaScript performs calculations and comparisons.

Included:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Increment / Decrement
- Equality Operators
- Ternary Operator
- Nullish Coalescing
- Optional Chaining
- Spread Operator
- Rest Operator

Example:

```javascript
let total = price * quantity;
```

---

### 9. Type Conversion

JavaScript automatically converts values in some situations.

Topics:

- Implicit conversion
- Explicit conversion
- Number()
- String()
- Boolean()
- parseInt()
- parseFloat()

Example:

```javascript
Number("100");
String(100);
Boolean(1);
```

---

### 10. Template Literals

A cleaner way to create strings.

Topics:

- String interpolation
- Multi-line strings
- Expressions

Example:

```javascript
const name = "Sunny";

console.log(`Welcome ${name}`);
```

---

# Prerequisites

No previous JavaScript experience is required.

You only need:

- Basic computer knowledge
- VS Code
- Node.js installed
- Curiosity to learn

---

# How to Run

Clone the repository.

```bash
git clone https://github.com/your-username/javascript-master-course.git
```

Move into the project.

```bash
cd javascript-master-course
```

Run any file.

```bash
node hello-world.js
```

or

```bash
node operators.js
```

---

# What You'll Learn

After completing this module, you should be comfortable with:

- Writing basic JavaScript programs
- Declaring variables correctly
- Choosing between `let`, `const`, and `var`
- Working with different data types
- Using operators effectively
- Converting values between data types
- Creating readable strings using template literals

These fundamentals will make the next modules—conditions, loops, functions, arrays, and objects—much easier to understand.

---

# Practice

Try modifying the examples instead of only reading them.

Ideas:

- Create variables for your own details.
- Build a simple calculator using operators.
- Convert user input into numbers.
- Print a student profile using template literals.
- Experiment with `typeof` on different values.

The goal is to understand _why_ JavaScript behaves the way it does, not just memorize syntax.

---

## Next Module

➡️ Module 02 – Conditional Statements

- if
- else
- else if
- switch
- nested conditions
- truthy and falsy values
- logical decision making

Happy coding! 🚀

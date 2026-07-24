# ⚡ Module 04 – JavaScript Functions

> A collection of my personal JavaScript function practice programs. Every example in this module was written manually to understand how functions work, improve code reusability, and strengthen problem-solving skills.

---

## 📖 About This Module

Functions are one of the most important concepts in JavaScript. They help organize code into reusable blocks, reduce duplication, and make applications easier to maintain. Every modern JavaScript framework and library—including React, Node.js, Express.js, and Next.js—relies heavily on functions.

In this module, I practiced different types of functions, learned how data flows through parameters and return values, explored advanced concepts like closures and recursion, and solved practical programming problems.

This repository is part of my JavaScript learning journey and serves as a reference for revision and interview preparation.

---

## 🎯 Goals

- Understand how JavaScript functions work.
- Write reusable and maintainable code.
- Learn different ways to create functions.
- Master function execution and scope.
- Practice advanced function concepts.
- Build a strong foundation for React and Node.js.

---

# 📚 Topics Covered

## Basic Functions

- ✅ Function Declaration
- ✅ Function Expression
- ✅ Arrow Functions

---

## Function Parameters

- Parameters
- Arguments
- Return Statement
- Default Parameters
- Rest Parameters

---

## Advanced Functions

- Callback Functions
- Higher Order Functions
- Anonymous Functions
- Immediately Invoked Function Expressions (IIFE)

---

## JavaScript Execution Concepts

- Scope
- Hoisting
- Closures
- `this` Keyword

---

## Problem Solving

- Recursion
- Function Composition
- Function Reusability
- Utility Functions
- Mathematical Functions
- String Functions
- Array Helper Functions

---

# 💻 Sample Programs

### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Sunny"));
```

---

### Arrow Function

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

---

### Default Parameters

```javascript
function welcome(name = "Guest") {
  return `Welcome ${name}`;
}

console.log(welcome());
console.log(welcome("Sunny"));
```

---

### Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30, 40));
```

---

### Callback Function

```javascript
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sunny", sayBye);
```

---

### Recursion

```javascript
function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
```

---

# 🖥 Sample Outputs

### Greeting

```text
Hello, Sunny!
```

---

### Addition

```text
30
```

---

### Default Parameter

```text
Welcome Guest
Welcome Sunny
```

---

### Rest Parameter

```text
100
```

---

### Recursion

```text
120
```

---

# 📂 Folder Structure

```text
Module-04-JavaScript-Functions/
│
├── README.md
├── functions.js
├── recursion.js
├── callbacks.js
├── closures.js
├── interview-questions.js
└── exercises.js
```

---

# 🧠 Interview Problems Practiced

- Add Two Numbers
- Calculator Functions
- Even or Odd
- Prime Number Using Functions
- Factorial Using Recursion
- Fibonacci Using Recursion
- Reverse String
- Palindrome Check
- Sum of Array
- Maximum Number
- Minimum Number
- Callback Examples
- Closure Examples
- Scope Questions
- Hoisting Questions
- `this` Keyword Scenarios

---

# 💡 Key Learnings

During this module, I learned:

- How function declarations and expressions differ.
- When to use arrow functions.
- The difference between parameters and arguments.
- How return statements work.
- How default and rest parameters simplify code.
- How callback functions enable asynchronous programming.
- Why higher-order functions are widely used in JavaScript.
- How recursion solves repetitive problems.
- How JavaScript handles scope and hoisting.
- Why closures are powerful for data encapsulation.
- How the `this` keyword behaves in different execution contexts.

---

# 🚀 Progress

| Topic                  | Status |
| ---------------------- | ------ |
| Function Declaration   | ✅     |
| Function Expression    | ✅     |
| Arrow Functions        | ✅     |
| Parameters             | ✅     |
| Arguments              | ✅     |
| Return Statement       | ✅     |
| Default Parameters     | ✅     |
| Rest Parameters        | ✅     |
| Callback Functions     | ✅     |
| Higher Order Functions | ✅     |
| Anonymous Functions    | ✅     |
| IIFE                   | ✅     |
| Recursion              | ✅     |
| Scope                  | ✅     |
| Hoisting               | ✅     |
| Closures               | ✅     |
| `this` Keyword         | ✅     |

---

# 🌍 Real-World Applications

The concepts practiced in this module are used extensively in:

- React Components
- Event Handling
- API Requests
- Node.js Backend Development
- Express Middleware
- Array Methods (`map`, `filter`, `reduce`)
- Promise Chains
- Async Programming
- Authentication
- Form Validation
- Utility Libraries
- Reusable Business Logic

---

# 📈 Why This Repository?

This repository represents my hands-on JavaScript practice. Every program was written manually to improve my understanding of functions, strengthen logical thinking, and build a solid foundation for modern JavaScript development.

The goal is not just to learn syntax but to understand how functions are used in real-world applications and technical interviews.

---

# 📌 Next Module

➡️ **Module 05 – JavaScript Arrays**

Topics include:

- Array Creation
- Accessing Elements
- Array Methods
- Iteration Methods
- map()
- filter()
- reduce()
- find()
- some()
- every()
- sort()
- flat()
- Destructuring
- Spread Operator
- Practical Array Problems

---

## 👨‍💻 Author

**Sunny**

Learning JavaScript through consistent practice, real coding exercises, and building projects one module at a time.

⭐ Thanks for visiting this repository! Feedback and suggestions are always welcome.

# 🔁 Module 03 – JavaScript Loops

> A collection of my personal JavaScript loop practice programs. Every example in this module was written manually to strengthen my understanding of iteration, logical thinking, and problem-solving.

---

## 📖 About This Module

Loops are one of the core building blocks of programming. They allow us to execute a block of code repeatedly until a condition is met. In this module, I practiced different types of JavaScript loops and solved a variety of programming challenges to improve my coding skills.

This repository is part of my JavaScript learning journey and serves as a reference for future revision and interview preparation.

---

## 🎯 Goals

- Understand how different loops work.
- Improve logical thinking through coding exercises.
- Solve common interview problems.
- Learn when to use each type of loop.
- Write clean and readable JavaScript code.

---

# 📚 Topics Covered

## Basic Loops

- ✅ `for` Loop
- ✅ `while` Loop
- ✅ `do...while` Loop

---

## Loop Control Statements

- ✅ `break`
- ✅ `continue`

---

## Nested Loops

- ✅ Nested `for` loops
- ✅ Nested `while` loops
- ✅ Matrix-style iteration

---

## Modern JavaScript Loops

- ✅ `for...of`
- ✅ `for...in`

---

## Array Iteration

- Printing array elements
- Sum of array
- Average
- Maximum value
- Minimum value
- Search element
- Count occurrences

---

## Number Programs

- Multiplication Table
- Factorial
- Prime Number
- Prime Numbers in Range
- Fibonacci Series
- Reverse Number
- Palindrome Number
- Count Digits
- Sum of Digits
- Armstrong Number _(Practice)_

---

## Pattern Printing

- Square Pattern
- Rectangle Pattern
- Right Triangle
- Inverted Triangle
- Pyramid
- Reverse Pyramid
- Number Patterns
- Alphabet Patterns
- Hollow Patterns _(Practice)_

---

# 💻 Sample Programs

### Multiplication Table

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
```

---

### Fibonacci Series

```javascript
let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
  console.log(a);

  let temp = a + b;
  a = b;
  b = temp;
}
```

---

### Prime Number

```javascript
let number = 17;
let prime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    prime = false;
    break;
  }
}

console.log(prime ? "Prime" : "Not Prime");
```

---

# 🖥 Sample Outputs

### Multiplication Table

```text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
...
```

### Fibonacci

```text
0
1
1
2
3
5
8
13
21
34
```

### Prime Numbers

```text
2
3
5
7
11
13
17
19
```

### Reverse Number

```text
Input : 12345

Output : 54321
```

---

# ⭐ Pattern Examples

### Right Triangle

```text
*
**
***
****
*****
```

---

### Inverted Triangle

```text
*****
****
***
**
*
```

---

### Pyramid

```text
    *
   ***
  *****
 *******
*********
```

---

### Number Pattern

```text
1
12
123
1234
12345
```

---

# 📂 Folder Structure

```text
Module-03-JavaScript-Loops/
│
├── README.md
├── loops.js
├── interview-questions.js
├── patterns.js
└── exercises.js
```

---

# 🧠 Interview Problems Practiced

- Print numbers from 1 to N
- Even & Odd Numbers
- Multiplication Tables
- Sum of First N Numbers
- Factorial
- Prime Number
- Prime Numbers in Range
- Fibonacci Series
- Reverse Number
- Palindrome Number
- Count Digits
- Sum of Digits
- Maximum & Minimum in Array
- Nested Loop Questions
- Pattern Printing Problems

---

# 💡 Key Learnings

During this module, I learned:

- How iteration works internally.
- When to use `for`, `while`, and `do...while`.
- How `break` and `continue` affect loop execution.
- How nested loops are used for matrix traversal and pattern printing.
- Different ways to iterate through arrays and objects.
- How loops help solve mathematical and logical programming problems.

---

# 🚀 Progress

| Topic                | Status |
| -------------------- | ------ |
| for Loop             | ✅     |
| while Loop           | ✅     |
| do...while           | ✅     |
| break                | ✅     |
| continue             | ✅     |
| Nested Loops         | ✅     |
| for...of             | ✅     |
| for...in             | ✅     |
| Array Iteration      | ✅     |
| Pattern Printing     | ✅     |
| Multiplication Table | ✅     |
| Factorial            | ✅     |
| Prime Numbers        | ✅     |
| Fibonacci            | ✅     |
| Reverse Number       | ✅     |
| Palindrome           | ✅     |

---

# 📈 Why This Repository?

This repository documents my hands-on JavaScript practice. Instead of only reading concepts, I implemented each program manually to strengthen my understanding of loops, improve problem-solving skills, and prepare for coding interviews.

---

# 📌 Next Module

➡️ **Module 04 – JavaScript Functions**

Topics include:

- Function Declaration
- Function Expression
- Arrow Functions
- Parameters & Arguments
- Return Statement
- Callback Functions
- Higher-Order Functions
- Scope
- Closures
- Recursion

---

## 👨‍💻 Author

**Sunny**

Learning JavaScript through consistent practice, real coding exercises, and building projects one module at a time.

⭐ If you find this repository helpful, feel free to explore the other modules in my JavaScript learning journey.

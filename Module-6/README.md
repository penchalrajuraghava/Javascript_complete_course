# JavaScript Objects – My Learning Journey 📘

> **A personal repository documenting my journey of learning, practicing, experimenting, and mastering JavaScript Objects.**

---

# Welcome 👋

Welcome to my JavaScript Objects repository.

This repository represents my personal learning journey while studying one of the most important concepts in JavaScript — **Objects**.

I created this repository to organize everything I learned in one place. Instead of simply watching tutorials or reading documentation, I wanted to understand each concept by writing code, experimenting with different examples, making mistakes, fixing them, and documenting everything I learned.

Every file in this repository reflects my own practice and understanding.

This repository is **not a course**, **not official documentation**, and **not intended to replace MDN or the ECMAScript specification**.

It is my personal notebook, practice repository, and revision guide.

---

# About This Repository

While learning JavaScript, I realized that writing code every day helps me understand concepts much better than simply reading them.

For every topic, I followed the same process:

- Read the documentation.
- Understand the concept.
- Write simple examples.
- Practice different variations.
- Create my own examples.
- Debug mistakes.
- Rewrite code in a cleaner way.
- Organize everything into folders.
- Push everything to GitHub.

Instead of creating random files on my computer, I wanted a well-organized repository that I could revisit anytime.

This repository became my JavaScript Object notebook.

---

# Why I Created This Repository

There are many JavaScript tutorials available online.

However, watching videos alone was not enough for me.

I wanted to understand how JavaScript Objects actually work.

So I started writing every example myself.

Whenever I learned something new, I added it to this repository.

Whenever I found a mistake, I corrected it.

Whenever I discovered a better solution, I updated my code.

This repository continues to grow as my knowledge grows.

---

# Repository Purpose

The purpose of this repository is to:

- Document my learning journey.
- Improve my JavaScript skills.
- Practice object-related concepts.
- Prepare for technical interviews.
- Build problem-solving skills.
- Learn modern JavaScript.
- Build a strong foundation for React.js and Node.js.
- Keep all object-related practice in one place.

---

# My Learning Philosophy

I believe learning programming requires much more than watching tutorials.

Real learning happens when we:

- Write code.
- Make mistakes.
- Debug errors.
- Rewrite code.
- Practice regularly.
- Build projects.
- Review concepts.

That is exactly what I tried to do in this repository.

---

# Repository Goals

My goals while creating this repository were:

- Learn JavaScript Objects deeply.
- Practice every object method.
- Understand how objects work internally.
- Learn modern ES6+ object features.
- Build confidence in JavaScript.
- Prepare for frontend interviews.
- Prepare for backend development.
- Improve code quality.
- Build good coding habits.

---

# Technologies Used

- JavaScript (ES6+)
- Visual Studio Code
- Git
- GitHub
- Node.js (for running examples)

---

# Repository Structure

Each module usually contains:

- README.md
- JavaScript Examples
- Practice Programs
- Notes
- Mini Projects
- Interview Questions
- Coding Challenges
- Summary

This consistent structure makes revision much easier.

---

# My Practice Method

For every concept, I usually followed these steps:

## Step 1

Understand the theory.

## Step 2

Read official documentation.

## Step 3

Write the simplest possible example.

## Step 4

Practice different scenarios.

## Step 5

Create my own examples.

## Step 6

Break the code intentionally.

## Step 7

Debug the errors.

## Step 8

Rewrite cleaner code.

## Step 9

Practice again.

## Step 10

Upload everything to GitHub.

---

# Topics Covered

Throughout this repository, I practiced:

- Object Basics
- Creating Objects
- Object Properties
- Object Methods
- Nested Objects
- Dynamic Properties
- Object References
- Shallow Copy
- Deep Copy
- Destructuring
- Spread Operator
- Rest Operator
- Object Utility Methods
- Property Descriptors
- The `this` Keyword
- Prototypes
- Prototype Chain
- ES6 Classes
- Built-in Objects
- JSON
- Advanced Objects
- OOP Principles
- Memory Management
- Garbage Collection
- Design Patterns
- Real-world Projects

---

# My Learning Process

Whenever I learned a topic, I tried to answer questions like:

- Why does this feature exist?
- What problem does it solve?
- Where is it used?
- How does JavaScript implement it?
- What are common mistakes?
- What are interview questions?
- Can I build a small example?
- Can I explain it in my own words?

If I couldn't explain it clearly, I studied it again.

---

# What You'll Find

Inside this repository you will find:

- Personal notes
- Practice programs
- JavaScript examples
- Object utilities
- Modern JavaScript syntax
- Interview preparation
- Coding exercises
- Mini projects
- Best practices
- Common mistakes
- My own experiments

Everything is organized topic by topic.

---

# A Personal Note

This repository reflects my understanding at the time I wrote each example.

As I continue learning and gaining experience, I may improve existing code, refactor examples, add better explanations, or replace older implementations with more efficient approaches.

Learning is a continuous process, and this repository grows along with my knowledge.

---

# What's Next?

In the next section of this README, I explain **JavaScript Objects from the basics**, including:

- What is an Object?
- Why Objects are Needed
- Object Syntax
- Real-world Examples
- Memory Representation
- How JavaScript Stores Objects
- Object Properties
- Object Methods
- Everything explained with examples and notes.

---

---

# JavaScript Objects - Complete Theory

## What is an Object?

An object is one of the most fundamental data types in JavaScript.

An object is a collection of related data and functionality stored together as **key-value pairs**.

Unlike primitive data types such as numbers, strings, and booleans that store only a single value, objects allow us to group multiple related values and functions into one entity.

Think of an object as a real-world object.

For example:

A mobile phone has:

- Brand
- Model
- Color
- Price
- Storage
- Camera
- Battery

Instead of creating separate variables for each property, we can group them together into one object.

```javascript
const mobile = {
  brand: "OnePlus",
  model: "Nord 6",
  color: "Black",
  storage: "256GB",
  price: 35000,
};

console.log(mobile);
```

Output

```javascript
{
    brand: 'OnePlus',
    model: 'Nord 6',
    color: 'Black',
    storage: '256GB',
    price: 35000
}
```

---

# Why Do We Need Objects?

Imagine storing employee information.

Without objects:

```javascript
const employeeName = "Sunny";
const employeeAge = 22;
const employeeDepartment = "IT";
const employeeSalary = 60000;
```

This works for one employee.

What if there are 5,000 employees?

Creating thousands of variables is impossible.

Objects solve this problem.

```javascript
const employee = {
  name: "Sunny",

  age: 22,

  department: "IT",

  salary: 60000,
};

console.log(employee);
```

Objects make our code:

- Organized
- Readable
- Reusable
- Maintainable

---

# My Learning Experience

When I first started learning JavaScript, I didn't understand why objects were so important.

Initially, I used variables for everything.

Later, while building small applications like:

- Student Management
- Employee Management
- Shopping Cart
- Todo App

I realized almost every application stores information using objects.

After practicing many examples, I understood that JavaScript revolves around objects.

Almost everything in JavaScript is either an object or behaves like one.

That realization completely changed how I approached JavaScript.

---

# Real World Examples of Objects

## Student

```javascript
const student = {
  id: 1,

  name: "Sunny",

  course: "MCA",

  city: "Kadapa",
};
```

---

## Employee

```javascript
const employee = {
  id: 101,

  name: "Sunny",

  designation: "Software Developer",

  salary: 60000,
};
```

---

## Car

```javascript
const car = {
  brand: "BMW",

  model: "X5",

  color: "Black",

  year: 2025,
};
```

---

## Laptop

```javascript
const laptop = {
  brand: "Dell",

  processor: "Intel i7",

  ram: "16GB",

  storage: "512GB SSD",
};
```

---

## Bank Account

```javascript
const account = {
  accountNumber: 123456,

  holder: "Sunny",

  balance: 50000,
};
```

---

# Object Syntax

General Syntax

```javascript
const objectName = {
  key: value,

  key: value,

  key: value,
};
```

Example

```javascript
const person = {
  name: "Sunny",

  age: 22,

  city: "Hyderabad",
};
```

---

# Understanding Key-Value Pairs

Every object stores information in pairs.

```javascript
const employee = {
  name: "Sunny",

  salary: 60000,
};
```

Here,

Key

```
name
```

Value

```
Sunny
```

Another key

```
salary
```

Another value

```
60000
```

Every property consists of:

```
Key : Value
```

---

# Object Visualization

```
Employee

┌─────────────────────────┐

│ name        → Sunny     │

│ age         → 22        │

│ city        → Hyderabad │

│ salary      → 60000     │

└─────────────────────────┘
```

---

# Objects Store Different Data Types

Objects can store almost every JavaScript data type.

Example

```javascript
const person = {
  name: "Sunny",

  age: 22,

  isMarried: false,

  skills: ["HTML", "CSS", "JavaScript"],

  address: {
    city: "Hyderabad",
  },
};

console.log(person);
```

Objects can contain

- Strings
- Numbers
- Boolean
- Arrays
- Objects
- Functions
- Null
- Undefined

---

# Creating Objects

There are multiple ways.

## Method 1

Object Literal

```javascript
const user = {
  name: "Sunny",
};
```

This is the most commonly used approach.

---

## Method 2

Object Constructor

```javascript
const user = new Object();

user.name = "Sunny";

console.log(user);
```

---

## Method 3

Using Class

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }
}

const emp = new Employee("Sunny");

console.log(emp);
```

---

# Naming Rules

Good

```javascript
const employeeData = {};

const bankAccount = {};

const shoppingCart = {};
```

Bad

```javascript
const x = {};

const y = {};

const abc = {};
```

Meaningful names improve readability.

---

# Object Properties

Every object contains properties.

Example

```javascript
const mobile = {
  brand: "OnePlus",

  model: "Nord 6",

  storage: "256GB",
};
```

Properties

```
brand

model

storage
```

Values

```
OnePlus

Nord 6

256GB
```

---

# Property Types

Properties can contain:

Number

```javascript
age: 22;
```

String

```javascript
name: "Sunny";
```

Boolean

```javascript
isAdmin: true;
```

Array

```javascript
skills: ["HTML", "CSS"];
```

Object

```javascript
address: {
  city: "Hyderabad";
}
```

Function

```javascript
greet(){

    console.log("Hello");

}
```

---

# Best Practices

✔ Use meaningful property names.

✔ Keep related data together.

✔ Avoid unnecessary nesting.

✔ Use camelCase naming.

✔ Group similar information.

✔ Keep object size manageable.

---

# Common Mistakes I Made While Practicing

❌ Using too many separate variables instead of an object.

❌ Giving unclear property names.

❌ Mixing unrelated data in one object.

❌ Forgetting commas between properties.

❌ Misspelling property names.

❌ Confusing arrays with objects.

❌ Trying to access a property that doesn't exist.

Each mistake helped me understand objects better and improve my coding style.

---

# Summary

After practicing these basic concepts, I became comfortable creating and organizing objects. This foundation made it much easier to learn advanced topics such as object methods, destructuring, prototypes, classes, JSON, and object-oriented programming.

---

# Coming Next

In the next section, I'll cover:

- Accessing Object Properties
- Updating Properties
- Adding New Properties
- Deleting Properties
- Dot Notation
- Bracket Notation
- Dynamic Property Names
- Property Existence Checks
- Real-world examples with detailed explanations.

---

---

# Accessing, Updating, Adding, and Deleting Object Properties

Now that I understood how to create objects, the next thing I practiced was working with object properties.

Creating an object is only the beginning.

In real-world applications, we constantly:

- Read data
- Update data
- Add new properties
- Remove unwanted properties
- Check whether a property exists

Almost every JavaScript application performs these operations.

---

# Accessing Object Properties

JavaScript provides two ways to access object properties.

1. Dot Notation
2. Bracket Notation

Both are important.

I practiced both because they are used in different situations.

---

# Dot Notation

Dot notation is the simplest and most commonly used way to access properties.

Syntax

```javascript
object.property;
```

Example

```javascript
const student = {
  name: "Sunny",

  age: 22,

  course: "MCA",
};

console.log(student.name);

console.log(student.age);

console.log(student.course);
```

Output

```javascript
Sunny;

22;

MCA;
```

---

# When to Use Dot Notation

I use dot notation when:

- The property name is already known.
- The property name is a valid JavaScript identifier.
- There are no spaces or special characters.

Example

```javascript
const employee = {
  name: "Sunny",

  department: "IT",
};

console.log(employee.department);
```

---

# Bracket Notation

Bracket notation allows accessing properties using strings.

Syntax

```javascript
object["property"];
```

Example

```javascript
const employee = {
  name: "Sunny",

  salary: 60000,
};

console.log(employee["name"]);

console.log(employee["salary"]);
```

Output

```javascript
Sunny;

60000;
```

---

# Why Bracket Notation Exists

Initially I thought bracket notation was unnecessary.

Later I learned it becomes extremely useful whenever property names are dynamic.

Example

```javascript
const property = "name";

const user = {
  name: "Sunny",
};

console.log(user[property]);
```

Output

```javascript
Sunny;
```

---

# Real World Example

Imagine searching employee details.

```javascript
const employee = {
  id: 101,

  name: "Sunny",

  salary: 60000,
};

const searchField = "salary";

console.log(employee[searchField]);
```

Output

```javascript
60000;
```

Without bracket notation this would not work.

---

# Dot vs Bracket Notation

Dot Notation

```javascript
employee.name;
```

Bracket Notation

```javascript
employee["name"];
```

Dynamic

```javascript
employee[property];
```

---

# Which One Do I Prefer?

During my practice:

✔ Dot notation for normal properties.

✔ Bracket notation whenever property names are dynamic.

---

# Property Names with Spaces

Dot notation cannot access property names containing spaces.

Example

```javascript
const person = {
  "full name": "Sunny",
};
```

Wrong

```javascript
person.full name
```

Correct

```javascript
console.log(person["full name"]);
```

Output

```javascript
Sunny;
```

---

# Property Names Starting with Numbers

Example

```javascript
const marks = {
  "10th": 95,
};

console.log(marks["10th"]);
```

---

# Updating Object Properties

Objects are mutable.

That means we can change their values.

Example

```javascript
const employee = {
  name: "Sunny",

  salary: 60000,
};

employee.salary = 70000;

console.log(employee);
```

Output

```javascript
{

    name: "Sunny",

    salary:70000

}
```

---

# Updating Multiple Properties

```javascript
const student = {
  name: "Sunny",

  age: 22,

  city: "Kadapa",
};

student.age = 23;

student.city = "Hyderabad";

console.log(student);
```

---

# Real World Example

Updating a customer's address.

```javascript
const customer = {
  name: "Sunny",

  city: "Kadapa",
};

customer.city = "Bangalore";

console.log(customer);
```

---

# Adding New Properties

Objects are dynamic.

We can add new properties anytime.

Example

```javascript
const employee = {
  name: "Sunny",
};

employee.department = "IT";

employee.salary = 60000;

console.log(employee);
```

Output

```javascript
{

    name:"Sunny",

    department:"IT",

    salary:60000

}
```

---

# Adding Properties with Bracket Notation

```javascript
const user = {};

user["email"] = "sunny@gmail.com";

user["country"] = "India";

console.log(user);
```

---

# Dynamic Property Creation

```javascript
const key = "experience";

const employee = {
  name: "Sunny",
};

employee[key] = "2 Years";

console.log(employee);
```

Output

```javascript
{

    name:"Sunny",

    experience:"2 Years"

}
```

---

# Deleting Object Properties

Sometimes we no longer need a property.

JavaScript provides the **delete** operator.

Syntax

```javascript
delete object.property;
```

Example

```javascript
const employee = {
  id: 101,

  name: "Sunny",

  salary: 60000,
};

delete employee.salary;

console.log(employee);
```

Output

```javascript
{

    id:101,

    name:"Sunny"

}
```

---

# Deleting with Bracket Notation

```javascript
const student = {
  name: "Sunny",

  course: "MCA",
};

delete student["course"];

console.log(student);
```

---

# Checking Whether a Property Exists

While practicing, I often tried to access properties that were not present.

JavaScript simply returns **undefined**.

Example

```javascript
const employee = {
  name: "Sunny",
};

console.log(employee.salary);
```

Output

```javascript
undefined;
```

---

# Using the `in` Operator

To check if a property exists, use the `in` operator.

Example

```javascript
const employee = {
  name: "Sunny",

  salary: 60000,
};

console.log("salary" in employee);

console.log("age" in employee);
```

Output

```javascript
true;

false;
```

---

# Using `hasOwnProperty()`

Another way to check properties.

```javascript
const person = {
  name: "Sunny",
};

console.log(person.hasOwnProperty("name"));

console.log(person.hasOwnProperty("city"));
```

Output

```javascript
true;

false;
```

---

# Property Access Flow

```
Create Object

        ↓

Access Property

        ↓

Update Property

        ↓

Add Property

        ↓

Delete Property

        ↓

Check Property

        ↓

Use Property
```

---

# Common Mistakes I Made

❌ Forgetting quotes in bracket notation.

```javascript
employee[name];
```

Correct

```javascript
employee["name"];
```

unless `name` is a variable.

---

❌ Trying to access a property before creating it.

```javascript
console.log(employee.age);
```

Returns

```javascript
undefined;
```

---

❌ Using dot notation for property names with spaces.

Wrong

```javascript
person.full name
```

Correct

```javascript
person["full name"];
```

---

❌ Accidentally overwriting existing values.

```javascript
employee.salary = 50000;
```

Always verify before updating important data.

---

# Best Practices

✔ Prefer dot notation whenever possible.

✔ Use bracket notation for dynamic property names.

✔ Use meaningful property names.

✔ Check if a property exists before using it in critical logic.

✔ Remove unused properties to keep objects clean.

✔ Keep object structures consistent across your application.

---

# What I Learned

While practicing these concepts, I realized that objects are not static. They are flexible data structures that can grow and change as an application runs.

Understanding how to access, update, add, delete, and validate properties gave me the confidence to build more realistic JavaScript programs such as employee management systems, shopping carts, and user profile modules.

---

# Coming Next

In the next section, I'll cover:

- Object Methods
- `this` Keyword
- Function Properties
- Method Shorthand
- Arrow Functions inside Objects
- Method Chaining
- Real-world Examples
- Best Practices
- Common Mistakes

---

---

# Object Methods

After learning how to create objects and work with properties, the next concept I practiced was **Object Methods**.

An object does not only store data.

It can also store functions.

When a function is stored inside an object, it is called an **Object Method**.

Methods allow an object to perform actions.

In real-world applications, almost every object contains methods.

For example:

- A bank account can deposit money.
- A student can study.
- A car can start.
- A mobile phone can make calls.
- An employee can work.

Instead of writing separate functions, we keep the behavior inside the object itself.

---

# What is a Method?

A method is simply a function stored as an object property.

Example

```javascript
const student = {
  name: "Sunny",

  study: function () {
    console.log("Studying JavaScript");
  },
};

student.study();
```

Output

```javascript
Studying JavaScript
```

---

# Why Methods are Important

Without methods

```javascript
const student = {
  name: "Sunny",
};

function study() {
  console.log("Studying");
}

study();
```

Although this works, the function is not connected to the student object.

Using methods keeps data and behavior together.

```javascript
const student = {
  name: "Sunny",

  study() {
    console.log("Studying");
  },
};

student.study();
```

This approach is cleaner and easier to maintain.

---

# Real World Analogy

Think about a car.

Properties

- Brand
- Color
- Model
- Fuel Type

Actions

- Start
- Stop
- Accelerate
- Brake

Everything belongs to the same car.

```javascript
const car = {
  brand: "BMW",

  color: "Black",

  start() {
    console.log("Car Started");
  },

  stop() {
    console.log("Car Stopped");
  },
};

car.start();

car.stop();
```

---

# Different Ways to Create Methods

## Method 1

Traditional Function

```javascript
const employee = {
  work: function () {
    console.log("Working");
  },
};

employee.work();
```

---

## Method 2

Method Shorthand (Recommended)

ES6 introduced a cleaner syntax.

```javascript
const employee = {
  work() {
    console.log("Working");
  },
};

employee.work();
```

This is the syntax I use most often.

---

# Multiple Methods

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add(10, 20));

console.log(calculator.subtract(20, 5));

console.log(calculator.multiply(5, 4));
```

Output

```javascript
30;

15;

20;
```

---

# Methods Can Receive Parameters

```javascript
const person = {
  greet(name) {
    console.log(`Hello ${name}`);
  },
};

person.greet("Sunny");
```

Output

```javascript
Hello Sunny
```

---

# Methods Can Return Values

```javascript
const employee = {
  salary: 60000,

  getSalary() {
    return this.salary;
  },
};

console.log(employee.getSalary());
```

Output

```javascript
60000;
```

---

# Methods Can Access Other Properties

One of the biggest advantages of methods is that they can work with the object's own data.

Example

```javascript
const student = {
  name: "Sunny",

  course: "MCA",

  display() {
    console.log(this.name);

    console.log(this.course);
  },
};

student.display();
```

Output

```javascript
Sunny;

MCA;
```

Notice the use of **this**.

I didn't fully understand `this` initially, but after practicing methods, its purpose became much clearer.

A dedicated section on `this` comes later in this repository.

---

# Method Calling Another Method

Methods can call other methods inside the same object.

```javascript
const account = {
  login() {
    console.log("Logged In");
  },

  dashboard() {
    this.login();

    console.log("Dashboard Opened");
  },
};

account.dashboard();
```

Output

```javascript
Logged In

Dashboard Opened
```

---

# Practical Example - Student

```javascript
const student = {
  name: "Sunny",

  marks: 95,

  display() {
    console.log(this.name);

    console.log(this.marks);
  },
};

student.display();
```

---

# Practical Example - Mobile

```javascript
const mobile = {
  brand: "OnePlus",

  model: "Nord 6",

  powerOn() {
    console.log("Power On");
  },

  powerOff() {
    console.log("Power Off");
  },
};

mobile.powerOn();

mobile.powerOff();
```

---

# Practical Example - Bank Account

```javascript
const account = {
  holder: "Sunny",

  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  },
};

account.deposit(500);

console.log(account.balance);

account.withdraw(200);

console.log(account.balance);
```

Output

```javascript
1500;

1300;
```

---

# Method Chaining

Some methods return the object itself.

This allows multiple method calls in one statement.

Example

```javascript
const counter = {
  count: 0,

  increment() {
    this.count++;

    return this;
  },

  decrement() {
    this.count--;

    return this;
  },

  show() {
    console.log(this.count);

    return this;
  },
};

counter

  .increment()

  .increment()

  .decrement()

  .show();
```

Output

```javascript
1;
```

Method chaining is commonly used in many JavaScript libraries.

---

# Arrow Functions Inside Objects

When I first learned arrow functions, I tried to use them everywhere.

Later I discovered that arrow functions behave differently with `this`.

Example

```javascript
const person = {
  name: "Sunny",

  greet: () => {
    console.log(this.name);
  },
};

person.greet();
```

Output

```javascript
undefined;
```

This happens because arrow functions do **not** have their own `this`.

For object methods, I generally prefer the method shorthand syntax.

---

# Comparing Normal Functions and Arrow Functions

Normal Method

```javascript
const person = {
  name: "Sunny",

  greet() {
    console.log(this.name);
  },
};

person.greet();
```

Arrow Function

```javascript
const person = {
  name: "Sunny",

  greet: () => {
    console.log(this.name);
  },
};

person.greet();
```

For object methods, the normal method syntax is usually the better choice.

---

# My Learning Experience

While practicing object methods, I noticed that objects became much more useful.

Instead of simply storing information, they could also perform operations.

This changed the way I designed my practice projects.

For example, in an Employee Management System, instead of writing separate functions for every task, I started adding methods directly to employee-related objects and classes.

It made my code feel more organized and easier to understand.

---

# Common Mistakes I Made

❌ Forgetting parentheses while calling a method.

Wrong

```javascript
employee.work;
```

Correct

```javascript
employee.work();
```

---

❌ Using arrow functions when I needed `this`.

---

❌ Writing long methods that performed too many tasks.

---

❌ Creating duplicate methods across multiple objects.

---

❌ Forgetting to return values from methods that calculate results.

---

# Best Practices

✔ Keep methods small.

✔ One method should perform one task.

✔ Use descriptive method names.

✔ Prefer method shorthand syntax.

✔ Avoid duplicate code.

✔ Use `this` to access object properties.

✔ Return values when appropriate.

✔ Keep related methods together.

---

# Summary

After practicing object methods, I learned that objects are much more than containers for data.

They combine **data (properties)** and **behavior (methods)** into a single structure.

This concept became the foundation for learning:

- `this` keyword
- Classes
- Prototypes
- Object-Oriented Programming
- Design Patterns

Understanding methods made it much easier to build reusable and maintainable JavaScript applications.

---

# Coming Next

In the next section, I'll cover one of the most important topics in JavaScript Objects:

- The `this` Keyword
- How `this` Works
- Global Context
- Object Context
- Function Context
- Arrow Functions vs Normal Functions
- Constructor Functions
- Common Interview Questions
- Common Mistakes
- Real-world Examples

---

---

# The `this` Keyword in JavaScript

While practicing JavaScript Objects, one concept that confused me the most was the **`this` keyword**.

At first, I thought `this` always referred to the current object.

After writing many examples and debugging different situations, I realized that **`this` depends on how a function is called, not where it is written.**

Understanding `this` completely changed the way I wrote JavaScript code.

This topic is one of the most frequently asked concepts in JavaScript interviews.

---

# What is `this`?

The `this` keyword is a special keyword in JavaScript.

It refers to an object.

However, **which object it refers to depends on the execution context.**

Simply remembering "this means current object" is incorrect.

Instead, remember:

> **The value of `this` is determined by how the function is invoked.**

---

# Why Does JavaScript Need `this`?

Imagine an object representing an employee.

```javascript
const employee = {
  name: "Sunny",

  department: "IT",
};
```

Now suppose we want a function to display employee information.

Without `this`

```javascript
const employee = {
  name: "Sunny",

  department: "IT",

  display() {
    console.log(employee.name);
  },
};

employee.display();
```

Although this works, it directly references the variable name.

If the object name changes, the method breaks.

Using `this`

```javascript
const employee = {
  name: "Sunny",

  department: "IT",

  display() {
    console.log(this.name);
  },
};

employee.display();
```

This makes the method reusable.

---

# My Learning Experience

Initially, I always wrote code like this:

```javascript
const student = {
  name: "Sunny",

  show() {
    console.log(student.name);
  },
};
```

Later, while learning object-oriented programming, I realized that using the object name inside its own methods is not a good practice.

Replacing it with `this` made my code cleaner, reusable, and easier to maintain.

---

# `this` Inside an Object

Example

```javascript
const student = {
  name: "Sunny",

  course: "MCA",

  display() {
    console.log(this.name);

    console.log(this.course);
  },
};

student.display();
```

Output

```javascript
Sunny;

MCA;
```

Here,

```
this
```

refers to

```
student
```

---

# Visual Representation

```
student

│

├── name → Sunny

├── course → MCA

└── display()

        │

        ▼

      this

        │

        ▼

    student object
```

---

# Accessing Multiple Properties

```javascript
const employee = {
  id: 101,

  name: "Sunny",

  salary: 60000,

  department: "IT",

  display() {
    console.log(this.id);

    console.log(this.name);

    console.log(this.salary);

    console.log(this.department);
  },
};

employee.display();
```

---

# Why Not Use the Object Name?

Example

```javascript
const person = {
  name: "Sunny",

  greet() {
    console.log(person.name);
  },
};
```

Now assign it to another variable.

```javascript
const user = person;

user.greet();
```

The method still depends on the original variable name.

Using `this` avoids this problem.

---

# Using `this` in Calculations

```javascript
const account = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  },
};

account.deposit(500);

console.log(account.balance);

account.withdraw(300);

console.log(account.balance);
```

Output

```javascript
1500;

1200;
```

---

# `this` in Nested Objects

```javascript
const company = {
  name: "ABC Ltd",

  employee: {
    name: "Sunny",

    display() {
      console.log(this.name);
    },
  },
};

company.employee.display();
```

Output

```javascript
Sunny;
```

Here,

`this`

refers to

```
employee
```

not

```
company
```

---

# `this` Inside Regular Functions

Example

```javascript
function show() {
  console.log(this);
}

show();
```

The value of `this` depends on the environment and whether strict mode is enabled.

Because of this, relying on `this` inside standalone functions can lead to confusing behavior.

During my practice, I mostly used `this` inside object methods and classes, where its behavior is more predictable.

---

# `this` Inside Arrow Functions

One of the biggest mistakes I made while learning was using arrow functions everywhere.

Example

```javascript
const person = {
  name: "Sunny",

  greet: () => {
    console.log(this.name);
  },
};

person.greet();
```

Output

```javascript
undefined;
```

Why?

Arrow functions **do not create their own `this`**.

Instead, they inherit `this` from the surrounding scope.

For this reason, I avoid using arrow functions as object methods unless I specifically want that behavior.

---

# Normal Method vs Arrow Function

Normal Method

```javascript
const person = {
  name: "Sunny",

  greet() {
    console.log(this.name);
  },
};

person.greet();
```

Arrow Function

```javascript
const person = {
  name: "Sunny",

  greet: () => {
    console.log(this.name);
  },
};

person.greet();
```

For object methods, I prefer the normal method syntax.

---

# `this` Inside a Constructor

```javascript
class Student {
  constructor(name, course) {
    this.name = name;

    this.course = course;
  }

  display() {
    console.log(this.name);

    console.log(this.course);
  }
}

const student = new Student(
  "Sunny",

  "MCA",
);

student.display();
```

Here,

`this`

refers to the newly created object.

---

# `this` in Real-World Example

Employee Management

```javascript
class Employee {
  constructor(id, name, salary) {
    this.id = id;

    this.name = name;

    this.salary = salary;
  }

  increaseSalary(amount) {
    this.salary += amount;
  }

  display() {
    console.log(this.id);

    console.log(this.name);

    console.log(this.salary);
  }
}

const employee = new Employee(
  101,

  "Sunny",

  60000,
);

employee.increaseSalary(5000);

employee.display();
```

Output

```javascript
101;

Sunny;

65000;
```

---

# Common Situations Where I Use `this`

- Object methods
- ES6 classes
- Constructor functions
- Class methods
- Method chaining
- OOP projects
- Banking applications
- Shopping cart applications
- Employee Management System
- Student Management System

---

# Common Mistakes I Made

❌ Using the object name instead of `this`.

---

❌ Using arrow functions as object methods.

---

❌ Assuming `this` always refers to the current object.

---

❌ Forgetting that `this` depends on how the function is called.

---

❌ Confusing `this` inside nested functions.

---

# Best Practices

✔ Use `this` inside object methods.

✔ Use `this` inside class methods.

✔ Prefer method shorthand syntax.

✔ Avoid using arrow functions for object methods unless required.

✔ Keep methods focused on one responsibility.

✔ Practice different calling patterns to understand how `this` behaves.

---

# Interview Questions

### What is the `this` keyword?

`this` is a special keyword whose value depends on how a function is invoked.

---

### Does `this` always refer to the current object?

No.

Its value depends on the calling context.

---

### Do arrow functions have their own `this`?

No.

Arrow functions inherit `this` from their surrounding lexical scope.

---

### Why use `this` instead of the object name?

Using `this` makes methods reusable and independent of the variable name used to reference the object.

---

# Summary

Learning the `this` keyword took me time because its behavior changes depending on how functions are called.

By creating many small examples and experimenting with object methods, classes, and arrow functions, I gradually understood its purpose.

Today, I use `this` confidently in object methods, classes, and real-world projects because it allows methods to work with the data stored inside the object without depending on a specific variable name.

Understanding `this` also made it much easier for me to learn:

- Constructor Functions
- Prototypes
- ES6 Classes
- Object-Oriented Programming
- Design Patterns

These concepts all build on the correct understanding of `this`.

---

# Coming Next

In the next section, I'll cover:

- Constructor Functions
- The `new` Keyword
- How Objects Are Created
- Constructor vs Object Literal
- Instance Properties
- Instance Methods
- Real-World Examples
- Best Practices
- Common Mistakes

---

---
# Constructor Functions and the `new` Keyword

After becoming comfortable with object literals and the `this` keyword, I wanted to learn how JavaScript creates multiple objects efficiently.

When building real-world applications, creating objects one by one quickly becomes repetitive.

For example, imagine creating 1,000 employee objects.

Creating each object manually would not be practical.

That is where **Constructor Functions** become useful.

They allow us to create many similar objects using the same blueprint.

Although modern JavaScript mostly uses **ES6 Classes**, understanding constructor functions is still important because classes are built on top of JavaScript's prototype system.

Many existing codebases also use constructor functions.
---

# What is a Constructor Function?

A constructor function is a regular JavaScript function that is used to create multiple objects.

By convention, constructor function names start with a capital letter.

Example

```javascript
function Employee() {}
```

The capital letter is not required by JavaScript, but it is a common convention that indicates the function is intended to be used with the `new` keyword.

---

# Why Do We Need Constructor Functions?

Suppose we create employees manually.

```javascript
const employee1 = {
  name: "Sunny",

  department: "IT",
};

const employee2 = {
  name: "Rahul",

  department: "HR",
};

const employee3 = {
  name: "Kiran",

  department: "Finance",
};
```

This works for only a few objects.

If there are hundreds of employees, writing objects manually becomes repetitive.

Constructor functions solve this problem.

---

# Creating a Constructor Function

```javascript
function Employee(name, department) {
  this.name = name;

  this.department = department;
}
```

This function does not return anything explicitly.

Instead, it initializes properties on the newly created object.

---

# Creating Objects Using `new`

```javascript
function Employee(name, department) {
  this.name = name;

  this.department = department;
}

const employee1 = new Employee(
  "Sunny",

  "IT",
);

const employee2 = new Employee(
  "Rahul",

  "HR",
);

console.log(employee1);

console.log(employee2);
```

Output

```javascript
Employee {

    name: "Sunny",

    department: "IT"

}

Employee {

    name: "Rahul",

    department: "HR"

}
```

---

# What Does the `new` Keyword Do?

When I first learned constructor functions, I wondered what `new` actually does behind the scenes.

When JavaScript executes

```javascript
const employee = new Employee("Sunny", "IT");
```

It performs these steps:

1. Creates a new empty object.
2. Links the object to the constructor's prototype.
3. Sets `this` to the new object.
4. Executes the constructor function.
5. Returns the newly created object.

This entire process happens automatically.

---

# Visual Representation

```
new Employee()

        │

        ▼

Creates Empty Object

        │

        ▼

this → Empty Object

        │

        ▼

Properties Added

        │

        ▼

Object Returned
```

---

# Constructor with Multiple Properties

```javascript
function Student(id, name, course, city) {
  this.id = id;

  this.name = name;

  this.course = course;

  this.city = city;
}

const student = new Student(
  1,

  "Sunny",

  "MCA",

  "Hyderabad",
);

console.log(student);
```

---

# Adding Methods Inside Constructor

Methods can also be created inside constructor functions.

```javascript
function Employee(name, salary) {
  this.name = name;

  this.salary = salary;

  this.display = function () {
    console.log(this.name);

    console.log(this.salary);
  };
}

const employee = new Employee(
  "Sunny",

  60000,
);

employee.display();
```

Output

```javascript
Sunny;

60000;
```

---

# A Better Approach

Although the above example works, there is one problem.

Every object receives its own copy of the `display()` function.

If thousands of objects are created, thousands of identical functions are created.

This wastes memory.

Later, while learning **Prototypes**, I discovered a better approach where all objects share the same method.

---

# Real-World Example

Employee Management

```javascript
function Employee(id, name, salary) {
  this.id = id;

  this.name = name;

  this.salary = salary;
}

const employee1 = new Employee(
  101,

  "Sunny",

  60000,
);

const employee2 = new Employee(
  102,

  "Rahul",

  70000,
);

console.table([employee1, employee2]);
```

---

# Bank Account Example

```javascript
function BankAccount(holder, balance) {
  this.holder = holder;

  this.balance = balance;
}

const account = new BankAccount(
  "Sunny",

  1000,
);

console.log(account);
```

---

# Constructor Naming Convention

Recommended

```javascript
function Student() {}

function Employee() {}

function BankAccount() {}
```

Not Recommended

```javascript
function student() {}

function employee() {}

function bankaccount() {}
```

Using PascalCase makes constructor functions easier to recognize.

---

# Constructor vs Object Literal

Object Literal

```javascript
const employee = {
  name: "Sunny",

  salary: 60000,
};
```

Constructor Function

```javascript
function Employee(name, salary) {
  this.name = name;

  this.salary = salary;
}

const employee = new Employee(
  "Sunny",

  60000,
);
```

Object literals are useful for creating a small number of objects.

Constructor functions are useful when creating many similar objects.

---

# Forgetting the `new` Keyword

One of the mistakes I made while practicing was forgetting the `new` keyword.

Wrong

```javascript
const employee = Employee(
  "Sunny",

  "IT",
);
```

Correct

```javascript
const employee = new Employee(
  "Sunny",

  "IT",
);
```

Without `new`, the constructor function behaves like a normal function, which can lead to unexpected results.

---

# Checking the Constructor

```javascript
function Car(brand) {
  this.brand = brand;
}

const car = new Car("BMW");

console.log(car.constructor);
```

Output

```javascript
[Function: Car]
```

---

# My Learning Experience

Initially, constructor functions looked confusing because they seemed like ordinary functions.

After practicing them, I understood that the `new` keyword changes how JavaScript executes the function.

This concept also helped me understand how ES6 classes work internally, since classes provide a cleaner syntax for creating objects but rely on the same underlying principles.

---

# Common Mistakes I Made

❌ Forgetting the `new` keyword.

---

❌ Using lowercase names for constructor functions.

---

❌ Creating methods inside the constructor unnecessarily.

---

❌ Forgetting to use `this` when assigning properties.

Wrong

```javascript
function Employee(name) {
  name = name;
}
```

Correct

```javascript
function Employee(name) {
  this.name = name;
}
```

---

❌ Assuming constructor functions automatically create objects without `new`.

---

# Best Practices

✔ Use PascalCase for constructor names.

✔ Always use the `new` keyword.

✔ Keep constructors focused on initialization.

✔ Move shared methods to the prototype (covered later).

✔ Keep constructors simple and readable.

✔ Use meaningful property names.

---

# Interview Questions

### What is a constructor function?

A constructor function is a function used to create and initialize multiple objects with the same structure.

---

### Why is the `new` keyword required?

The `new` keyword creates a new object, sets `this` to that object, links it to the constructor's prototype, and returns the object automatically.

---

### Why should constructor names start with a capital letter?

It is a JavaScript convention that makes constructor functions easy to identify.

---

### What happens if `new` is omitted?

The function behaves like a normal function, which can result in incorrect behavior because no new object is created automatically.

---

### When should constructor functions be used?

They are useful when creating many objects with the same properties and behavior. In modern JavaScript, ES6 classes are often preferred, but constructor functions remain important to understand because they explain how JavaScript object creation works internally.

---

# Summary

Learning constructor functions helped me understand how JavaScript creates multiple objects efficiently.

More importantly, it prepared me for learning the prototype system, which explains how objects can share methods instead of creating duplicate copies.

Although I now prefer using ES6 classes in new projects, understanding constructor functions gave me a much deeper understanding of JavaScript's object model.

---

# Coming Next

In the next section, I'll cover:

- Prototypes
- The Prototype Chain
- Prototype Inheritance
- Shared Methods
- `Object.prototype`
- `__proto__`
- `prototype`
- Real-world Examples
- Best Practices
- Common Mistakes

---

---

# Prototypes and the Prototype Chain

After learning constructor functions, I noticed something interesting.

Whenever I created multiple objects using a constructor, every object received its own copy of the methods.

Initially, I didn't think this was a problem.

Later, after learning how JavaScript works internally, I discovered that creating identical methods for every object wastes memory.

JavaScript solves this problem using **Prototypes**.

Understanding prototypes was one of the most important milestones in my JavaScript learning journey because it helped me understand how JavaScript actually implements inheritance.

Even though ES6 Classes provide a cleaner syntax, they are built on top of the prototype system.

So, if I understand prototypes, I automatically understand how classes work behind the scenes.

---

# What is a Prototype?

Every JavaScript object has an internal link to another object called its **prototype**.

A prototype is simply another object from which properties and methods can be inherited.

Instead of storing duplicate methods inside every object, JavaScript stores shared methods inside the prototype.

Then every object created from the same constructor shares those methods.

---

# Why Do We Need Prototypes?

Consider this example.

```javascript
function Employee(name) {
  this.name = name;

  this.display = function () {
    console.log(this.name);
  };
}

const emp1 = new Employee("Sunny");

const emp2 = new Employee("Rahul");
```

Both objects contain their own copy of the `display()` function.

Memory

```
emp1

display()

----------------

emp2

display()
```

Two identical functions are created.

This is unnecessary.

---

# Using Prototypes

Instead of placing methods inside the constructor, place them on the prototype.

```javascript
function Employee(name) {
  this.name = name;
}

Employee.prototype.display = function () {
  console.log(this.name);
};

const emp1 = new Employee("Sunny");

const emp2 = new Employee("Rahul");

emp1.display();

emp2.display();
```

Output

```javascript
Sunny;

Rahul;
```

Now only one copy of `display()` exists.

Both objects share it.

---

# Memory Visualization

Without Prototype

```
Employee 1

name

display()

-------------------

Employee 2

name

display()

-------------------

Employee 3

name

display()
```

Three separate functions.

---

With Prototype

```
Employee 1

name

|

↓

Prototype

display()

↑

|

Employee 2

name

|

↓

Prototype

display()

↑

|

Employee 3

name
```

Only one function exists.

---

# How JavaScript Finds a Property

Suppose we have

```javascript
const emp = new Employee("Sunny");
```

When JavaScript executes

```javascript
emp.display();
```

It searches in this order.

Step 1

```
emp
```

Does the object contain `display`?

No.

↓

Step 2

```
Employee.prototype
```

Does the prototype contain `display`?

Yes.

↓

Execute the method.

This searching process is called the **Prototype Chain**.

---

# Understanding the Prototype Chain

Every object has a prototype.

Every prototype is also an object.

That object has another prototype.

Eventually, JavaScript reaches

```
Object.prototype
```

Finally

```
null
```

Visual Representation

```
Employee Object

↓

Employee.prototype

↓

Object.prototype

↓

null
```

This chain is called the **Prototype Chain**.

---

# Example

```javascript
const person = {
  name: "Sunny",
};

console.log(person.toString());
```

Question:

Where did `toString()` come from?

We never created it.

Answer:

It comes from

```
Object.prototype
```

Every normal object inherits methods from `Object.prototype`.

---

# Checking the Prototype

```javascript
const employee = {
  name: "Sunny",
};

console.log(Object.getPrototypeOf(employee));
```

Output

```
Object.prototype
```

---

# Constructor Prototype

```javascript
function Student(name) {
  this.name = name;
}

console.log(Student.prototype);
```

Output

```
Student {

    constructor: Student

}
```

Every constructor automatically receives a prototype object.

---

# Adding Multiple Prototype Methods

```javascript
function Student(name, course) {
  this.name = name;

  this.course = course;
}

Student.prototype.study = function () {
  console.log(`${this.name} is studying.`);
};

Student.prototype.display = function () {
  console.log(this.name);

  console.log(this.course);
};

const student = new Student(
  "Sunny",

  "MCA",
);

student.display();

student.study();
```

---

# Prototype Sharing

```javascript
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log(`${this.brand} Started`);
};

const car1 = new Car("BMW");

const car2 = new Car("Audi");

car1.start();

car2.start();
```

Both cars use the same method.

Only one function exists.

---

# Checking Shared Methods

```javascript
function Employee(name) {
  this.name = name;
}

Employee.prototype.work = function () {
  console.log("Working");
};

const emp1 = new Employee("Sunny");

const emp2 = new Employee("Rahul");

console.log(emp1.work === emp2.work);
```

Output

```javascript
true;
```

This proves both objects share the same function.

---

# `prototype` vs `__proto__`

This topic confused me initially.

After practicing, I understood the difference.

`prototype`

Belongs to

```
Constructor Function
```

Example

```javascript
function Employee() {}

console.log(Employee.prototype);
```

---

`__proto__`

Belongs to

```
Object Instance
```

Example

```javascript
const employee = new Employee();

console.log(employee.__proto__);
```

Both refer to the same prototype object.

Relationship

```
employee.__proto__

===

Employee.prototype
```

Output

```javascript
true;
```

Although `__proto__` exists in many environments, I prefer using `Object.getPrototypeOf()` because it is the modern and recommended approach.

---

# Object.create()

JavaScript allows creating an object with a specific prototype.

```javascript
const animal = {
  speak() {
    console.log("Animal Sound");
  },
};

const dog = Object.create(animal);

dog.name = "Bruno";

dog.speak();
```

Output

```javascript
Animal Sound
```

The `dog` object inherits the `speak()` method from `animal`.

---

# Real-World Example

Employee Management

```javascript
function Employee(id, name) {
  this.id = id;

  this.name = name;
}

Employee.prototype.display = function () {
  console.log(this.id);

  console.log(this.name);
};

Employee.prototype.work = function () {
  console.log(`${this.name} is working.`);
};

const employee = new Employee(
  101,

  "Sunny",
);

employee.display();

employee.work();
```

---

# My Learning Experience

At first, prototypes felt difficult because they are not visible like object properties.

After creating several constructor functions and moving methods from the constructor to the prototype, everything started making sense.

I realized that JavaScript was helping me save memory by allowing all objects to share the same methods.

Understanding prototypes also made ES6 classes much easier to understand because classes are simply a more readable syntax built on the same prototype mechanism.

---

# Common Mistakes I Made

❌ Creating methods inside every constructor.

---

❌ Thinking each object has its own prototype.

---

❌ Confusing `prototype` with `__proto__`.

---

❌ Ignoring the prototype chain while debugging.

---

❌ Modifying built-in prototypes without understanding the consequences.

---

# Best Practices

✔ Store shared methods on the prototype.

✔ Use constructor functions or ES6 classes consistently.

✔ Prefer `Object.getPrototypeOf()` over directly accessing `__proto__`.

✔ Understand the prototype chain before learning inheritance.

✔ Avoid modifying `Object.prototype` in production code.

---

# Interview Questions

### What is a prototype?

A prototype is an object from which other objects inherit properties and methods.

---

### Why are prototypes used?

They allow multiple objects to share methods, reducing memory usage and improving code reuse.

---

### What is the prototype chain?

The prototype chain is the sequence JavaScript follows when looking up a property or method, moving from the object to its prototype, then to higher-level prototypes until it reaches `null`.

---

### What is the difference between `prototype` and `__proto__`?

- `prototype` is a property of constructor functions.
- `__proto__` is the prototype reference of an object instance.

---

### Why are ES6 classes related to prototypes?

ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance system. Methods declared inside a class are actually stored on the class's prototype.

---

# Summary

Learning prototypes helped me understand one of JavaScript's most powerful features: **inheritance through shared behavior**.

Instead of duplicating methods for every object, JavaScript allows all instances to share a single implementation through the prototype chain.

This knowledge gave me a much deeper understanding of how objects, constructor functions, and ES6 classes work internally, and it became the foundation for learning object-oriented programming and advanced JavaScript concepts.

---

---

# ES6 Classes in JavaScript

After understanding constructor functions and prototypes, I started learning **ES6 Classes**.

Initially, classes looked like a completely new feature.

Later, I discovered that they are actually **syntactic sugar** over JavaScript's prototype system.

This means classes provide a cleaner and more readable syntax, while JavaScript still uses prototypes internally.

In modern JavaScript development, classes are widely used in large applications because they make code easier to organize and maintain.

---

# What is a Class?

A class is a blueprint for creating objects.

Instead of manually creating similar objects, we define a class once and then create as many objects (instances) as we need.

Think of a class as a template.

Real-world examples:

- Class → Car
- Objects → BMW, Audi, Tesla

- Class → Student
- Objects → Sunny, Rahul, Priya

- Class → Employee
- Objects → Employee 1, Employee 2, Employee 3

---

# Why Use Classes?

Suppose we need to create many employee objects.

Without classes, we would repeatedly create objects or use constructor functions.

Classes provide:

- Cleaner syntax
- Better organization
- Reusable code
- Easier maintenance
- Better readability

---

# Creating a Class

Syntax

```javascript
class Student {}
```

A class name should generally use **PascalCase**.

Examples

```javascript
class Employee {}

class BankAccount {}

class Product {}

class UserProfile {}
```

---

# Creating an Object (Instance)

```javascript
class Student {}

const student = new Student();

console.log(student);
```

Output

```javascript
Student {}
```

The `new` keyword is still required when creating an instance.

---

# Constructor Method

A class uses a special method called `constructor()`.

It runs automatically whenever a new object is created.

Example

```javascript
class Student {
  constructor(name, course) {
    this.name = name;

    this.course = course;
  }
}

const student = new Student(
  "Sunny",

  "MCA",
);

console.log(student);
```

Output

```javascript
Student {

    name: "Sunny",

    course: "MCA"

}
```

---

# Instance Properties

Properties created inside the constructor belong to each object.

```javascript
class Employee {
  constructor(id, name, salary) {
    this.id = id;

    this.name = name;

    this.salary = salary;
  }
}

const employee = new Employee(
  101,

  "Sunny",

  60000,
);

console.log(employee);
```

---

# Instance Methods

Methods declared inside the class are automatically placed on the prototype.

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log(`${this.name} is working.`);
  }
}

const employee = new Employee("Sunny");

employee.work();
```

Output

```javascript
Sunny is working.
```

Notice that the `work()` method is shared by all instances.

---

# Multiple Methods

```javascript
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();

console.log(calc.add(10, 20));

console.log(calc.subtract(30, 10));

console.log(calc.multiply(5, 6));
```

---

# Creating Multiple Objects

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
}

const student1 = new Student("Sunny");

const student2 = new Student("Rahul");

const student3 = new Student("Priya");

console.log(student1);

console.log(student2);

console.log(student3);
```

Each object has its own data, but they all share the same methods.

---

# Real-World Example

Employee Management System

```javascript
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;

    this.name = name;

    this.department = department;

    this.salary = salary;
  }

  display() {
    console.log(this.id);

    console.log(this.name);

    console.log(this.department);

    console.log(this.salary);
  }
}

const employee = new Employee(
  101,

  "Sunny",

  "IT",

  60000,
);

employee.display();
```

---

# Bank Account Example

```javascript
class BankAccount {
  constructor(holder, balance) {
    this.holder = holder;

    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const account = new BankAccount(
  "Sunny",

  1000,
);

account.deposit(500);

account.withdraw(200);

console.log(account.balance);
```

Output

```javascript
1300;
```

---

# Methods are Stored on the Prototype

I wanted to verify whether two objects share the same method.

```javascript
class Student {
  study() {
    console.log("Studying");
  }
}

const s1 = new Student();

const s2 = new Student();

console.log(s1.study === s2.study);
```

Output

```javascript
true;
```

This confirmed that class methods are shared through the prototype.

---

# Class Expressions

Just like functions, classes can also be expressions.

```javascript
const Employee = class {
  work() {
    console.log("Working");
  }
};

const employee = new Employee();

employee.work();
```

Although this is valid, I usually prefer class declarations because they are easier to read.

---

# Classes are Not Hoisted Like Functions

Function

```javascript
greet();

function greet() {
  console.log("Hello");
}
```

Works correctly.

Class

```javascript
const student = new Student();

class Student {}
```

This throws an error because class declarations are not initialized before they are defined.

I always declare the class before creating its objects.

---

# Constructor Rules

A class can have only one constructor.

Correct

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
}
```

Incorrect

```javascript
class Student {

    constructor() {}

    constructor(name) {}

}
```

JavaScript does not allow multiple constructors in the same class.

---

# My Learning Experience

After learning constructor functions, ES6 classes felt much more natural.

The syntax is cleaner, and grouping properties and methods inside a single class makes projects easier to organize.

While building practice applications, I found classes especially useful for representing entities such as employees, students, products, and bank accounts.

Understanding that classes are built on prototypes also helped me connect modern JavaScript with its underlying object model.

---

# Common Mistakes I Made

❌ Forgetting to use the `new` keyword.

---

❌ Trying to create multiple constructors.

---

❌ Calling a class before declaring it.

---

❌ Forgetting to initialize properties inside the constructor.

---

❌ Confusing class methods with object properties.

---

# Best Practices

✔ Use PascalCase for class names.

✔ Keep constructors focused on initialization.

✔ Keep methods small and focused.

✔ Use meaningful property names.

✔ Group related behavior inside the same class.

✔ Prefer classes for large object-oriented applications.

---

# Interview Questions

### What is an ES6 class?

An ES6 class is a blueprint for creating objects using a cleaner syntax built on top of JavaScript's prototype system.

---

### Are classes a new inheritance model in JavaScript?

No. Classes provide a more readable syntax, but they still use prototypes internally.

---

### Why is the `new` keyword required?

The `new` keyword creates a new object, sets `this` to that object, runs the constructor, and returns the object.

---

### Can a class have multiple constructors?

No. A class can have only one `constructor()` method.

---

### Where are class methods stored?

Class methods are stored on the class's prototype, allowing all instances to share the same methods.

---

# Summary

Learning ES6 classes made object-oriented programming in JavaScript much easier to understand.

Classes provide a clean and organized way to model real-world entities while still using JavaScript's powerful prototype system under the hood.

By combining constructors, properties, and methods into a single structure, classes make applications more maintainable and scalable.

They are now my preferred way to create reusable objects in modern JavaScript projects.

---

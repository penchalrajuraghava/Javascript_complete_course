# Module 12 - JavaScript Prototypes and Prototype Chain

## 📚 Topics Covered

- What is a Prototype?
- Prototype Chain
- **proto**
- prototype Property
- Object.getPrototypeOf()
- Object.setPrototypeOf()
- Constructor Function Prototypes
- Instance vs Prototype Members
- Prototype Inheritance
- Real-World Example

---

# Learning Objectives

After completing this module, you will be able to:

- Understand prototypes.
- Understand the prototype chain.
- Share methods between objects.
- Create inheritance using prototypes.
- Differentiate instance members from prototype members.
- Improve memory usage using prototypes.

---

# What is a Prototype?

Every JavaScript object has an internal prototype.

Objects inherit properties and methods from their prototype.

Example

```javascript
const person = {
  name: "Sunny",
};

console.log(Object.getPrototypeOf(person));
```

---

# Constructor Prototype

```javascript
function Student(name) {
  this.name = name;
}

Student.prototype.study = function () {
  console.log(this.name + " is studying.");
};

const s1 = new Student("Sunny");

s1.study();
```

All Student objects share one copy of the `study()` method.

---

# Prototype Chain

When JavaScript cannot find a property in an object, it searches:

1. Current object
2. Prototype
3. Prototype's prototype
4. Continues until `null`

Example

```javascript
const obj = {};

console.log(obj.toString());
```

`toString()` comes from `Object.prototype`.

---

# **proto**

`__proto__` points to an object's prototype.

```javascript
const person = {};

console.log(person.__proto__);
```

Use `Object.getPrototypeOf()` instead of `__proto__` in modern code.

---

# Object.getPrototypeOf()

Returns an object's prototype.

```javascript
const car = {};

console.log(Object.getPrototypeOf(car));
```

---

# Object.setPrototypeOf()

Changes an object's prototype.

```javascript
const animal = {
  walk() {
    console.log("Walking...");
  },
};

const dog = {};

Object.setPrototypeOf(dog, animal);

dog.walk();
```

---

# Instance Members vs Prototype Members

Instance Members

```javascript
function Employee(name) {
  this.name = name;
}
```

Prototype Members

```javascript
Employee.prototype.work = function () {
  console.log("Working...");
};
```

---

# Advantages of Prototypes

✔ Better memory usage

✔ Shared methods

✔ Faster object creation

✔ Supports inheritance

---

# Summary

✔ Every object has a prototype.

✔ Prototypes allow inheritance.

✔ Constructor functions use prototype objects.

✔ The prototype chain is used for property lookup.

✔ Prefer Object.getPrototypeOf() over **proto**.

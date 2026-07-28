# Module 18 - JavaScript Memory Management & Garbage Collection

## 📚 Topics Covered

- Introduction to Memory Management
- Stack Memory
- Heap Memory
- Primitive vs Reference Types
- Memory Allocation
- Garbage Collection
- Reachability
- Memory Leaks
- Closures and Memory
- WeakMap & WeakSet
- Performance Tips

---

# Learning Objectives

After completing this module, you will be able to:

- Understand how JavaScript stores data.
- Differentiate Stack and Heap memory.
- Understand Garbage Collection.
- Identify memory leaks.
- Prevent unnecessary memory usage.
- Write optimized JavaScript code.

---

# What is Memory Management?

Memory management is the process of allocating and releasing memory while a program runs.

JavaScript automatically manages memory using a Garbage Collector.

---

# Stack Memory

Stack stores:

- Primitive values
- Function calls
- Local variables

Example

```javascript
let age = 22;
let name = "Sunny";
```

Each variable is stored directly in stack memory.

---

# Heap Memory

Heap stores:

- Objects
- Arrays
- Functions

Example

```javascript
const user = {
  name: "Sunny",
};
```

The object lives in heap memory while the variable stores a reference.

---

# Primitive vs Reference

Primitive

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Reference

```javascript
const person = {
  name: "Sunny",
};

const another = person;

another.name = "Rahul";

console.log(person.name);
```

---

# Garbage Collection

Unused memory is automatically removed.

```javascript
let user = {
  name: "Sunny",
};

user = null;
```

The object becomes eligible for garbage collection.

---

# Reachability

Objects are kept alive while reachable.

```javascript
let person = {
  name: "Sunny",
};

const employee = person;

person = null;
```

The object still exists because `employee` references it.

---

# Memory Leaks

Common causes:

- Global variables
- Uncleared timers
- Event listeners
- Closures
- Large cached objects

---

# Closures

Closures can keep variables alive.

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
```

---

# WeakMap & WeakSet

Weak collections allow objects to be garbage collected when no other references exist.

```javascript
const weakMap = new WeakMap();

let user = {};

weakMap.set(user, "Admin");

user = null;
```

---

# Performance Tips

✔ Remove unused event listeners.

✔ Clear timers.

✔ Avoid unnecessary global variables.

✔ Prefer WeakMap for temporary object metadata.

✔ Release large references when no longer needed.

---

# Summary

✔ Stack stores primitive values.

✔ Heap stores objects.

✔ Garbage Collector automatically frees unused memory.

✔ Memory leaks reduce application performance.

✔ WeakMap and WeakSet help prevent leaks.

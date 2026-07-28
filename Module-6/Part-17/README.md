# Module 17 - JavaScript Object-Oriented Programming (OOP)

## 📚 Topics Covered

- What is OOP?
- Four Pillars of OOP
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism
- Composition vs Inheritance
- Factory Functions
- Mixins
- Method Chaining

---

# Learning Objectives

After completing this module, you will be able to:

- Understand Object-Oriented Programming.
- Implement the four pillars of OOP.
- Create reusable objects.
- Use composition instead of inheritance when appropriate.
- Build scalable JavaScript applications.

---

# What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm that organizes code using objects.

An object contains:

- Properties (Data)
- Methods (Behavior)

Example

```javascript
const student = {
  name: "Sunny",

  study() {
    console.log("Studying JavaScript");
  },
};
```

---

# Four Pillars of OOP

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

---

# Encapsulation

Encapsulation means keeping data and methods together while protecting internal data.

```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

# Abstraction

Hide unnecessary implementation details.

```javascript
class CoffeeMachine {
  startMachine() {
    this.#boilWater();
    console.log("Coffee Ready");
  }

  #boilWater() {
    console.log("Boiling Water");
  }
}
```

---

# Inheritance

A child class inherits properties and methods from a parent class.

```javascript
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {}

const dog = new Dog();

dog.eat();
```

---

# Polymorphism

Different classes provide different implementations of the same method.

```javascript
class Animal {
  sound() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

# Composition

Instead of inheriting, combine smaller objects.

```javascript
const canWalk = {
  walk() {
    console.log("Walking");
  },
};

const person = {
  ...canWalk,
};

person.walk();
```

---

# Factory Functions

```javascript
function createUser(name) {
  return {
    name,

    greet() {
      console.log(`Hello ${name}`);
    },
  };
}
```

---

# Mixins

```javascript
const canEat = {
  eat() {
    console.log("Eating");
  },
};

const canSleep = {
  sleep() {
    console.log("Sleeping");
  },
};

const person = {
  ...canEat,
  ...canSleep,
};
```

---

# Method Chaining

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }
}

const calc = new Calculator();

calc.add(10).subtract(5);
```

---

# Summary

✔ OOP organizes code into reusable objects.

✔ Encapsulation protects data.

✔ Abstraction hides complexity.

✔ Inheritance promotes code reuse.

✔ Polymorphism enables flexible behavior.

✔ Composition often provides greater flexibility than inheritance.

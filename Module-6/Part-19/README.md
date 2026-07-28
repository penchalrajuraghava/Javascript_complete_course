# Module 19 - JavaScript Design Patterns

## 📚 Topics Covered

- What are Design Patterns?
- Module Pattern
- Revealing Module Pattern
- Singleton Pattern
- Factory Pattern
- Observer Pattern
- Strategy Pattern
- Decorator Pattern
- Proxy Pattern
- MVC Pattern

---

# Learning Objectives

After completing this module, you will be able to:

- Understand software design patterns.
- Organize JavaScript code effectively.
- Create reusable modules.
- Implement Singleton and Factory patterns.
- Build event-driven applications using Observer.
- Use Strategy for interchangeable algorithms.
- Understand MVC architecture.

---

# What are Design Patterns?

Design Patterns are reusable solutions to common software development problems.

They improve:

- Code readability
- Reusability
- Scalability
- Maintainability

---

# Module Pattern

Encapsulates private variables using closures.

```javascript
const Counter = (() => {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    },
  };
})();

Counter.increment();

console.log(Counter.getCount());
```

---

# Revealing Module Pattern

Only selected methods are exposed.

```javascript
const User = (() => {
  function login() {
    console.log("Login");
  }

  function logout() {
    console.log("Logout");
  }

  return {
    login,
    logout,
  };
})();
```

---

# Singleton Pattern

Ensures only one object instance exists.

```javascript
class Database {
  static instance;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);
```

---

# Factory Pattern

Creates objects without exposing creation logic.

```javascript
class Developer {
  constructor(name) {
    this.name = name;
  }
}

class Manager {
  constructor(name) {
    this.name = name;
  }
}

class EmployeeFactory {
  static create(type, name) {
    if (type === "developer") {
      return new Developer(name);
    }

    return new Manager(name);
  }
}
```

---

# Observer Pattern

One object notifies multiple subscribers.

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}
```

---

# Strategy Pattern

Switch algorithms dynamically.

```javascript
const payment = {
  card(amount) {
    console.log(`Paid $${amount} using Card`);
  },

  upi(amount) {
    console.log(`Paid $${amount} using UPI`);
  },
};

payment.card(100);
```

---

# Decorator Pattern

Adds functionality without changing original code.

```javascript
function logger(fn) {
  return function () {
    console.log("Executing...");

    return fn();
  };
}
```

---

# Proxy Pattern

Controls access to another object.

```javascript
const user = {
  name: "Sunny",
};

const proxy = new Proxy(user, {
  get(target, property) {
    console.log(`Accessing ${property}`);

    return target[property];
  },
});
```

---

# MVC Pattern

MVC stands for:

- Model
- View
- Controller

Separates application logic from UI.

---

# Summary

✔ Module Pattern hides private data.

✔ Singleton creates one instance.

✔ Factory creates objects.

✔ Observer manages subscriptions.

✔ Strategy switches algorithms.

✔ Proxy controls object access.

✔ MVC separates concerns.

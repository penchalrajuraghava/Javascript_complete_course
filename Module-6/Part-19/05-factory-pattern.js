/*
=========================================
Factory Pattern
=========================================
*/

class Admin {
  constructor(name) {
    this.name = name;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }
}

class UserFactory {
  static create(role, name) {
    switch (role) {
      case "admin":
        return new Admin(name);

      default:
        return new Customer(name);
    }
  }
}

console.log(UserFactory.create("admin", "Sunny"));

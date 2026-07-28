/*
=========================================
Real World Example
=========================================
*/

const users = new Map();

users.set(101, {
  name: "Sunny",
  role: "Admin",
});

users.set(102, {
  name: "Rahul",
  role: "Developer",
});

console.log(users.get(101));

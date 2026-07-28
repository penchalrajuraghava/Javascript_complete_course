/*
=========================================
Performance Tips
=========================================
*/

const users = [];

for (let i = 0; i < 1000; i++) {
  users.push({
    id: i,
  });
}

console.log(users.length);

// Release memory

users.length = 0;

console.log(users.length);

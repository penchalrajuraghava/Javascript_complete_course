/*
==========================================================
Topic: find()
==========================================================

Definition:
-----------
Returns the FIRST matching element.
*/

const users = [
  { id: 1, name: "Sunny" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Kiran" },
];

const user = users.find((user) => user.id === 2);

console.log(user);

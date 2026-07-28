/*
=========================================
Module Summary
=========================================
*/

const users = (() => {
  const list = [];

  return {
    add(user) {
      list.push(user);
    },

    getAll() {
      return list;
    },
  };
})();

users.add("Sunny");

console.log(users.getAll());

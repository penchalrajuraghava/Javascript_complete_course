/*
=========================================
WeakMap & WeakSet
=========================================
*/

const cache = new WeakMap();

let user = {
  id: 1,
};

cache.set(user, {
  role: "Admin",
});

console.log(cache.get(user));

user = null;

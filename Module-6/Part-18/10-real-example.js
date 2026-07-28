/*
=========================================
Real World Example
=========================================
*/

class Cache {
  constructor() {
    this.items = new Map();
  }

  add(key, value) {
    this.items.set(key, value);
  }

  clear() {
    this.items.clear();
  }
}

const cache = new Cache();

cache.add("user", {
  name: "Sunny",
});

console.log(cache);

cache.clear();

console.log(cache);

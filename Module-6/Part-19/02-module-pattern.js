/*
=========================================
Module Pattern
=========================================
*/

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

Counter.increment();

console.log(Counter.getCount());

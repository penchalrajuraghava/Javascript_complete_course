/*
=========================================
Method Chaining
=========================================
*/

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;

    return this;
  }

  decrement() {
    this.count--;

    return this;
  }

  show() {
    console.log(this.count);

    return this;
  }
}

new Counter()

  .increment()

  .increment()

  .decrement()

  .show();

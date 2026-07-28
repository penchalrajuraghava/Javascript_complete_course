/*
=========================================
Observer Pattern
=========================================
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer(message));
  }
}

const subject = new Subject();

subject.subscribe((message) => {
  console.log("Subscriber 1:", message);
});

subject.subscribe((message) => {
  console.log("Subscriber 2:", message);
});

subject.notify("New Notification");

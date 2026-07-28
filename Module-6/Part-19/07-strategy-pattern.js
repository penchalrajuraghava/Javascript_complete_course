/*
=========================================
Strategy Pattern
=========================================
*/

class Payment {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy(amount);
  }
}

const cardPayment = (amount) => {
  console.log(`Paid $${amount} using Card`);
};

const upiPayment = (amount) => {
  console.log(`Paid $${amount} using UPI`);
};

new Payment(cardPayment).pay(100);

new Payment(upiPayment).pay(200);

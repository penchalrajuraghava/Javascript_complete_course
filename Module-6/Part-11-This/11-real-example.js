/*
=========================================
Real World Example
=========================================
*/

const bankAccount = {
  owner: "Sunny",

  balance: 1000,

  deposit(amount) {
    this.balance += amount;

    console.log("Balance :", this.balance);
  },
};

bankAccount.deposit(500);

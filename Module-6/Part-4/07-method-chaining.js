/*
=========================================
Method Chaining
=========================================
*/

const bankAccount = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    return this;
  },

  withdraw(amount) {
    this.balance -= amount;
    return this;
  },

  showBalance() {
    console.log("Balance :", this.balance);
    return this;
  },
};

bankAccount.deposit(500).withdraw(200).showBalance();

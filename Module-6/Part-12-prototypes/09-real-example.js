/*
=========================================
Real World Example
=========================================
*/

function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;

  console.log("Balance:", this.balance);
};

const account = new BankAccount("Sunny", 1000);

account.deposit(500);

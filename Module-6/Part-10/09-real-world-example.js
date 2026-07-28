/*
=========================================
Real World Example
=========================================
*/

const bankAccount = {
  _balance: 1000,

  get balance() {
    return this._balance;
  },

  set balance(amount) {
    if (amount >= 0) {
      this._balance = amount;
    }
  },
};

bankAccount.balance = 2500;

console.log(bankAccount.balance);

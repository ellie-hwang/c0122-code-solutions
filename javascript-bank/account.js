/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!amount === true || amount <= 0 || typeof amount !== 'number' || Number.isInteger(amount) === false) {
    return false;
  } else {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!amount === true || amount <= 0 || typeof amount !== 'number' || Number.isInteger(amount) === false) {
    return false;
  } else {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  var deposits = 0;
  var withdrawals = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawals += this.transactions[i].amount;
    }
  }
  balance = deposits - withdrawals;
  return balance;
};

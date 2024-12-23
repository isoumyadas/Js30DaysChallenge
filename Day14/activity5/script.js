class BankAccount {
  #balance;
  constructor(balance = 0) {
    this.#balance = balance;
  }

  deposit(amount) {
    // This directly injects into Prototype.
    return (this.#balance += amount);
  }

  withdraw(amount) {
    return (this.#balance -= amount);
  }

  set updateBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("Invalid amount");
    }
    this.#balance += amount;
  }

  get showBalance() {
    return this.#balance;
  }
}

const person = new BankAccount(4500);

console.log(person.deposit(500));
console.log(person.showBalance);

console.log(person.withdraw(3500));
console.log(person.showBalance);

console.log((person.updateBalance = 24556));
console.log(person.showBalance);

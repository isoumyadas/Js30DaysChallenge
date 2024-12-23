export class Vanken {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  set updateUserFullName([firstName, lastName]) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Vanken("som", "das");

console.log(person1.fullName);

person1.updateUserFullName = ["soumya", "das"];
console.log(person1.fullName);

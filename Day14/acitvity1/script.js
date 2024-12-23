export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Welcome ${this.name}`;
  }

  updatesAge(age) {
    return (this.age = age);
  }
}

const person1 = new Person("soumya", 23);
console.log(person1);
console.log(person1.greeting());
console.log(person1.updatesAge(22));

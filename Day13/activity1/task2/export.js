export const person = {
  // You can't use default here! you can use it in functions.
  name: "John Doe",
  age: 78,
  sayYourAge: function () {
    console.log(`Your age is ${this.age}`);
  },
};

export default function whatIsYourName() {
  console.log(person.name);
}

// export default function helloName() {
//     console.log("Hello world"); // You can't export two default method
// }

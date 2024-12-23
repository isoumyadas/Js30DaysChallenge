import { person } from "./export.js";
import whatIsYourName from "./export.js"; // This is how defualt export is imported.

console.log(person.age);
console.log(person.name);
person.sayYourAge();

whatIsYourName();
// helloName();

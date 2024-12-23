import { Person } from "../acitvity1/script.js";

class Student extends Person {
  constructor(studentId, greeting) {
    super(greeting);
    this.studentId = studentId;
  }

  callStudentId() {
    return this.studentId;
  }

  greeting() {
    return `Student: Welcome ${this.studentId}`;
  }
}

const student1 = new Student("Soumya123");
console.log(student1);
console.log(student1.callStudentId());
console.log(student1.greeting());

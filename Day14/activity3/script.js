class Example {
  static grettingMessage(name = "Guest") {
    return `Welcome to Dashboard ${name}`;
  }
}

console.log(Example.grettingMessage("SammyBro"));

class Students {
  static totalStudents = 0; // Counter to track the total number of students
  constructor(name) {
    this.name = name;
    Students.totalStudents++; // Increment the counter whenever a new instance is created
  }

  static totalNumberOfStudents() {
    return `Total number of Students: ${Students.totalStudents}`;
  }
}

const stu = new Students("RT");
const stu2 = new Students("RT2");
const stu3 = new Students("RT3");
const stu4 = new Students("RT4");
const stu5 = new Students("RT5");
const stu6 = new Students("RT6");
const stu7 = new Students("RT");

console.log(Students.totalNumberOfStudents());

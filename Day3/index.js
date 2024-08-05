// Activity 1: If/Else Statements

//Task 1
// const randomNumberGen = Math.floor(Math.random() * 10);
const randomNumberGen = Math.floor(Math.random() * 20 - 10);
console.log(randomNumberGen);

if (randomNumberGen < 0) {
  console.log("number is negative");
} else if (randomNumberGen > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is Zero");
}

// Task2
const randomNumberAge = Math.floor(Math.random() * 100);
console.log(randomNumberAge);

if (randomNumberAge <= 18) {
  console.log("You are not Eligible for voting");
} else {
  console.log("You are Eligible for voting");
}

// Activity 2: Nested If-Else Statements [If you are not using a function and place return statements directly within the if-else blocks, it will cause a syntax error because return is only valid within functions. ]

const a = 6;
const b = 34;
const c = 9;

if (a >= b && a >= c) {
  console.log(a);
  // return a;
} else if (b >= a && b >= c) {
  console.log(b);
  // return b;
} else {
  console.log(c);
  // return c;
}

// Activity 3: Swtich Case
const foo = 1;

switch (foo) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("This is not valid week number");
    break;
}

//Task 2: [true is used as the expression in the switch, and each case checks if the condition evaluates to true.]

const marks = 75;

switch (true) {
  case marks <= 100 && marks >= 90:
    console.log("A");
    break;
  case marks <= 80 && marks >= 70:
    console.log("B");
    break;
  case marks <= 69 && marks >= 59:
    console.log("C");
    break;
  case marks <= 59 && marks >= 49:
    console.log("D");
    break;

  default:
    console.log("E");
    break;
}

// Activity 4: Conditional Operator [Ternary Operator]
const value = 7;
const fun = value % 2 === 0 ? "Even" : "Odd";
console.log(fun);

// Activity 5: Determining if a Year is a Leap Year

const year = 2024;

const returnValue = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
console.log(returnValue);

// This can be done like this too.
// if(year % 100 === 0) {
//   year % 400 === 0
// } else {
//   year % 4 === 0
// }

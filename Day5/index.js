// Activity 1: Function Declaration

console.log("==================Activity 1====================");

// Task1:
function oddOrEven(value) {
  const fun = value % 2 === 0 ? "Even" : "Odd";
  // console.log(fun);
  return fun;
}
console.log(oddOrEven(2));

// Task2:
function squareOfNum(num) {
  return num ** 2;
}

console.log(squareOfNum(6));

// Activity 2: Function Expression

console.log("==================Activity 2====================");

//Task1:
function biggerNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(biggerNum(13, 6));

//Task2:
function concanateTwoStrings(str1, str2) {
  const concante = str1.concat(str2);
  return concante;
}
console.log(concanateTwoStrings("soumya", " das"));

// Activity 3: Arrow Functions

console.log("==================Activity 3====================");

//Task1:

const sumOfTwoNum = (num1, num2) => {
  return num1 + num2;
};

console.log(sumOfTwoNum(9, 9));

//Task2:
const checkAndReturn = (str1) => {
  return str1.includes("a");
};

console.log(checkAndReturn("soumya"));

// Activity 4: Functions Parameters and Default Values

console.log("==================Activity 4====================");

//Task1:
function product(num1, num2 = 4) {
  return num1 * num2;
}
console.log(product(7));

//Task2:
function greetingMesssage(name, age = 22) {
  let message = `Welcome ${name} for coming to age ${age}.`;
  return message;
}
console.log(greetingMesssage("Soumya"));

// Activity 5: High order functions

console.log("==================Activity 5====================");

// Higher order functions means the function which calls another fucntions
// eg:
function add(a, b, cb) {
  let reuslt = a + b;
  cb(reuslt);
}

// also you can do in this way:
function showResult(reuslt) {
  console.log(reuslt);
}

add(5, 6, showResult);

// add(4, 4, function (val) {
//   console.log(val);
// });

//Task1:

function repeatFn(fn, num) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}

function sayHello() {
  console.log("Hello");
}

repeatFn(sayHello, 2);

//Task2:
function twoValue(fn, cb, value) {
  const firstResult = fn(value);
  const finalReuslt = cb(firstResult);
  return finalReuslt;
}

function firstFn(num) {
  return num + 9;
}
function secFun(num) {
  return num * 45;
}

console.log(twoValue(firstFn, secFun, 8));

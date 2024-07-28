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

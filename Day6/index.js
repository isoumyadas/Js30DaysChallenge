// Activity 1: Array Creation and Access

// Task1:
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task2:
const extract = [1, 2, 3, 4, 5, 6];
const firstElement = extract[0];
const lastElement = extract[5];
console.log(firstElement, lastElement);

// Activity 2: Array Methods

//Task1:
const anArr = [1, 2, 3];
anArr.push("soumya");
console.log("push", anArr);

//Task2:
anArr.pop();
console.log("pop", anArr);

//Task3:
anArr.shift();
console.log("shift", anArr);

//Task4:
anArr.unshift("Alex");
console.log("unshift", anArr);

// Activity 3: Array Methods [intermediate]

//Task1:
const numbers = [1, 2, 3, 4];
const doubledNumber = numbers.map((num) => {
  return num + num;
});
console.log("map", doubledNumber);

// Task2:
const setOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = setOfNum.filter((num) => num % 2 === 0);
console.log("Filter", evenNumber);

// Task 3:
const sumOfAllNumbers = setOfNum.reduce((acc, curr) => acc + curr, 0);
console.log("reduce", sumOfAllNumbers);

// Activity 4: Array Iteration

//Task1:
const allNum = [1, 2, 3, 6, 7, 8, 9];
for (const i of allNum) {
  console.log("forOf", i);
}

allNum.forEach((el) => {
  console.log("ForEach", el);
});

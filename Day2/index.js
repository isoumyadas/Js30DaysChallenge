// Activity 1: Arithmetic Operators

// Add
const a = 23;
const b = 34;
const c = a + b;
console.log(c);

// Sub
const aa = 53;
const bb = 34;
const cc = aa - bb;
console.log(cc);

// Mul
const multi1 = 34;
const multi2 = 7;
const result = multi2 * multi1;
console.log(result);

// Div
const div1 = 34;
const div2 = 6;
const divResult = div2 / div1;
console.log(divResult);

// module Method %
const mod1 = 6;
const mod2 = 2;
const modResult = mod1 % mod2;
console.log(modResult);

// Activity 2: Assignment Operators

let j = 7;
console.log((j += 8));

let jj = 7;
console.log((jj -= 9));

// Activity 3: Comparison Operators

const compare1 = 77;
const compare2 = 88;

console.log(compare1 > compare2);
console.log(compare1 < compare2);

const comapre11 = 55;
const compare22 = 55;

console.log(comapre11 >= compare22);
console.log(comapre11 <= compare22);

const equal1 = 33;
const equal2 = "33";

console.log(equal1 == equal2);
console.log(equal1 === equal2);

// Activity 4: Logical Operators

if (compare1 && compare2) {
  console.log("Result of And", compare1 + compare2);
}

let orCond = false;
let orCond2 = true;

if (orCond || orCond2) {
  // When you keep this as && operator this condition will never executed as this is not statisfied
  console.log("Happy");
}

if (!orCond) {
  console.log("Payment is Failed");
}
if (orCond2) {
  console.log("Payment is Sucessful");
}

// Activity 5: Ternary Operator  :> condition ? expressionIfTrue : expressionIfFalse

const ter2 = -9;

const resultTer = ter2 >= 0 ? "IT is positive Number" : "IT is negative Number";
console.log(resultTer);

const number = -5;
const result2 = number >= 0 ? "Positive" : "Negative";
console.log(`The number ${number} is ${result2}.`);

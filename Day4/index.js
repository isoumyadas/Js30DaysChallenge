// Loops

// Activity 1: For Loop
console.log(
  "=========================== Activity 1 ================================"
);

// Task 1:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2:
for (let i = 5; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//Activity 2: While loop
console.log(
  "=========================== Activity 2 ================================"
);

//Task 3:
let n = 1;
let sum = 0;
while (n <= 10) {
  sum += n;
  n++;
}
console.log(sum);

//Task 4:
let k = 10;
while (k >= 1) {
  console.log(k--);
}

// Activity 3: Do While Loop
console.log(
  "=========================== Activity 3 ================================"
);

let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);

// Activity 5: Loop Control Statements
console.log(
  "=========================== Activity 5 ================================"
);

// Task 8:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9:
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

// Activity 4: Loop Controls
console.log(
  "=========================== Activity 4 ================================"
);

// Task 7: Write a program to print a pattern using nested for loop
let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);

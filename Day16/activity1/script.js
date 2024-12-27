// Practice of memoization

function outerMemo() {
  let cache = {};

  return function innerMemo(n) {
    if (n in cache) {
      console.log("Cache in fetching::", cache[n]);
      return cache[n];
    }

    const result = n;
    cache[n] = result;
    console.log("Cache in computing::", cache[n]);
    return result;
  };
}

// const keyResult = outerMemo();
// const result1 = keyResult(1);
// const result2 = keyResult(2);
// const result3 = keyResult(1);

// Task 1

function factorial(n) {
  // base case

  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// Task 2

function fibonacci(n) {
  // Base Cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test
console.log(fibonacci(5));

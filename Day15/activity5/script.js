// Memoization

// ^ what does that mean => https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#1688a069a2a480dc805ce1b9547d56a9

// Task 7

function memoizedFunction(originalFunction) {
  let cache = {};

  return function fib(...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log(`Fetching from cache for input: ${args}`);
      return cache[key];
    }

    console.log(`Computing result for input: ${args}`);
    const result = originalFunction(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const fib = memoizedFunction(add);

console.log(fib(10, 9));
console.log(fib(10, 6));
console.log(fib(10, 6));
console.log(fib(10, 3));
console.log(fib(8, 1));

// Task 8

function createMemoize(ogFunc) {
  const cache = new Map();

  return function (n) {
    if (n <= 1) {
      return n;
    }

    if (cache.has(n)) {
      console.log(`Fetching from cache!`);
      return cache.get(n);
    }

    console.log(`Computing: ${n}`);

    const result = ogFunc(n);
    cache.set(n, result);
    return result;
  };
}

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

const newResult = createMemoize(factorial);
console.log(newResult(5));
console.log(newResult(8));
console.log(newResult(5));

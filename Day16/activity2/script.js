function sumOfAllArray(arr) {
  if (arr.length == 0) {
    return 0;
  }

  return arr[0] + sumOfAllArray(arr.slice(1));
}

// console.log(sumOfAllArray([1, 2, 3, 4, 5]));

const result = sumOfAllArray([1, 2, 3, 4, 5]);
console.log(result);

// Task 4

function maxNumberInArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(arr[0], maxNumberInArray(arr.slice(1)));
}

const big = maxNumberInArray([1, 7, 5, 13, 9]);
console.log(big);

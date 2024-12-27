// Rcursive Example

function printAllNumbers(arr) {
  // base case : This conditions tells recursion when to stop. so here the 1 is the case where recursion will stop.
  if (arr === 1) {
    return 1;
  }

  console.log(arr);
  return printAllNumbers(arr - 1);
}

console.log(printAllNumbers(4));

// ^ Resource: https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#1688a069a2a4804eaffbe167d5f49e4f

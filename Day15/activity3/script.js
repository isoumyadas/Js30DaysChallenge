function createFunctionArray() {
  const functions = []; // Array to hold the functions

  for (let i = 0; i < 5; i++) {
    // No need for an IIFE because `let` creates a new scope
    functions.push(function () {
      console.log(i);
    });
  }

  return functions;
}

// Create the array of functions
const functionArray = createFunctionArray();

// Call the functions to test
functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();

// ^ var: Has function scope or global scope (depending on where it’s declared). It does not respect block scope (e.g., inside loops or if statements).
// ^ let and const: Have block scope, meaning they are limited to the block ({}) in which they are defined.

// ^ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

// Task1

const example = () => {
  try {
    throw new Error("Custom Error: Something just unusal happened");
  } catch (error) {
    console.log("Error caught in example() :: ", error.message);
  }
};

example();

// Task 2
//^ Division by zero should result in either Infinity or NaN in JavaScript
const errorHandling = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    const result = a / b;
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error caught in errorHandling():: ", error.message);
  }
};
errorHandling(4, 8);
errorHandling(9, 0);

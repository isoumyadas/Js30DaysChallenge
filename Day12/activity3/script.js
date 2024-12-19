// Task 4

// class NotImplemented extends Error {
//   constructor(message = "", ...args) {
//     super(message, ...args);
//     this.message = message + " has not yet been implemented.";
//   }
// }

// function tryingSomething() {
//   try {
//     throw new NotImplemented("Error Handling");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// tryingSomething();

// ^ What i did wrong in Task 4?
// ^ The constructor unnecessarily reassigns this.message after calling super(). The super call already sets the message, and the reassignment introduces redundancy.

// ^ Optimized method.

class NotImplementedError extends Error {
  constructor(feature = "Feature") {
    super(`${feature} has not yet been implemented.`);
    this.name = "NotImplementedError"; // name is inbulit property in Error.
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotImplementedError);
    }
  }
}

function tryingSomething() {
  try {
    throw new NotImplementedError("Error Handling");
  } catch (error) {
    console.error(`[${error.name}] ${error.message}`);
    console.error(`Occurred at: ${new Date().toISOString()}`);
    console.error("Stack Trace:", error.stack);
  }
}

tryingSomething();

// ^ Benefits:
// ^ Eliminates redundancy by directly setting the message in the super call.
// ^ Adds a custom name property to improve error classification.
// ^ Uses console.error to better differentiate error logs from standard logs.
// ^ Preserves Stack Trace: Critical for debugging.
// ^ Customizable Messaging: Supports more detailed or localized messages.
// ^ Rich Logging: Provides more context during error handling.
// ^ Practical Use Case: Demonstrates how to use the error in real-world scenarios.

// ^ More info: https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#1618a069a2a480ef9193e249d1e3076b

// Task 5

// class inputMissing extends Error {
//   constructor(message = "") {
//     super(message);
//     this.message = `${message} is empty!`;
//   }
// }

// function userInputCheck(data) {
//   const userInput = data;
//   try {
//     if (userInput === "") {
//       throw new inputMissing("user input");
//     }

//     console.log(userInput);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// userInputCheck("");
// userInputCheck("soumya");

// ^ optimized method:

class InputMissingError extends Error {
  constructor(inputName = "Input") {
    super(`${inputName} cannot be empty.`);
    this.name = "InputMissingError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InputMissingError);
    }
  }
}

function validateInput(input, inputName = "Input") {
  try {
    if (!input || input.trim() === "") {
      throw new InputMissingError(inputName);
    }
    console.log(`Valid Input: ${input}`);
  } catch (error) {
    console.error(`[${error.name}] ${error.message}`);
    console.error(`Occurred at: ${new Date().toISOString()}`);
    console.error("Stack Trace:", error.stack);
  }
}

validateInput("", "Username");
validateInput("Soumya", "Username");

// ^ Why here [${error.name}] is been used?

// ^ Wrapping the error name in square brackets [ ] visually separates it from the rest of the log message.
// ^ Makes it easier to identify at a glance, especially in long log files or complex logs.

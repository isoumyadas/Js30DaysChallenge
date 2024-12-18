// Creation of promsie function

function createResolved() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You sucessfully resolved and used async and await.`);
    }, 2000);
  });
}

// Creation of async function to handle the createResolved function.
async function itGetsResolved() {
  const dataMesage = await createResolved();
  console.log(dataMesage);
}

itGetsResolved();

// Task 5

function createReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("You Used Reject sucessfully and used async and await.");
    }, 3000);
  });
}

async function itGetsRejected() {
  try {
    const dataMesage = await createReject();
    console.log(dataMesage);
  } catch (error) {
    console.log(error);
  }
}

itGetsRejected();

// ^ Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// Better way to do this - industry way

// Create a wrapper func
async function handleAsync(promise, context) {
  try {
    return [await promise, null];
  } catch (error) {
    logError(context, error);
    return [null, error];
  }
}

// wrapper for errorMessage
function logError(context, error) {
  console.error(`${context}:`, error);
}

// the function
async function getsResolved() {
  const [dataMessage, error] = await handleAsync(
    createResolved(),
    "Resolving Promise"
  );

  if (error) {
    // Handle the error (if any)
    console.error("An error occurred while resolving:", error);
  } else {
    // Handle the success
    console.log("Success:", dataMessage);
  }
}

// If the first element (result) is not null, the promise resolved successfully.
// If the second element (error) is not null, the promise was rejected.

getsResolved();

// ^ diagram : https://app.eraser.io/workspace/MbGX6KXf6KB4Pxo2RKbG?origin=share

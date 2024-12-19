new Promise((resolve, reject) => {
  const randomOutcome = Math.random() > 0.5;
  if (randomOutcome) {
    resolve("The promise resolved successfully!");
  } else {
    reject(new Error("The promise was rejected!"));
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Task 7

const promise1 = new Promise((resolve, reject) => {
  const randomOutput = Math.random() > 0.5;

  if (randomOutput) {
    resolve("Promise 1 resolved");
  } else {
    reject(new Error("Promise 1 rejected"));
  }
});

async function random() {
  try {
    const result = await promise1;
    console.log(`[Success] : ${result}`);
  } catch (error) {
    console.log(`[Error] : ${error.message}`);
  }
}

random();

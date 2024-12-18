// Task1
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
}).then(() => {
  console.log("Hello the resolve works fine!");
});

// Task2
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
})
  .then(() => {
    console.log(`Logs then resolve works fine`);
  })
  .catch(() => {
    console.log("Error: Reject works fine");
  });

// ^ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const promise1 = new Promise((resolve, reject) => {
  resolve("This is for first promise");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This is for second promise`);
  }, 2000);
});

async function promise3() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
}

Promise.all([promise1, promise2, promise3()])
  .then((datas) => {
    console.log(datas);
  })
  .catch((error) => {
    console.error("Error in promises:", error);
  });

// Task 10

// ^ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world");
  }, 4000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 5");
  }, 5000);
});

Promise.race([promise4, promise5])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error("Error in promises:", error);
  });

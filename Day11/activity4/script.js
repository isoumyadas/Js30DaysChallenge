// Task 6

fetch("https://dummyjson.com/recipes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const recipies = data;
    console.log(recipies);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Ok You did something!");
  });

// Task 7

async function usingAsyncfunc() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
    // console.log(`Data:: ${JSON.stringify(data)}`); // ^ Returns stringify data.
  } catch (error) {
    console.error(error);
  }
}

usingAsyncfunc();

// Note::
// ^ console.log(`Data:: ${data}`);

// ^ In JavaScript, objects are not inherently stringifiable in a meaningful way unless you explicitly define how they should be converted to a string. When you concatenate an object with a string, JavaScript doesn’t know how to represent the object, so it falls back to the generic "[object Object]".

// ^ Use JSON.stringify() to convert them into a readable string format.
// ^ With JSON.stringify: The stringified version of the data object, showing all key-value pairs in JSON format.

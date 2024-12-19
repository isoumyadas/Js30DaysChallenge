fetch("https://dummyjson.com/recipesdsf")
  .then((data) => {
    if (!data.ok) {
      throw new Error(`HTTP Error: ${data.status} ${data.statusText}`);
    }
    return data.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error.message);
  });

// task 10

async function checkIncorrectUrl() {
  const res = await fetch("https://dummyjson.com/recipesdsf");
  try {
    if (!res.ok) {
      throw new Error(
        `HTTP Error: ${res.status} ${res.statusText} : [This is Async Function]`
      );
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(`[ERROR] : ${error.message}`);
  }
}

checkIncorrectUrl();

import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });

async function getUser() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

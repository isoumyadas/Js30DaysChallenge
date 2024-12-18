new Promise((resolve, reject) => {
  const url = `https://dummyjson.com/products`;

  if (url) {
    console.log("It works");
    resolve(fetch(url));
  } else {
    reject();
  }
})
  .then((data) => {
    const products = data.json();
    console.log(products); // This currently in Promise<pending> state. as this will return whole json.
    return products; // Returing this json to next then to handle the response.
  })
  .then((d) => {
    const products = d.products; // now d is json and we are accessing the d inside products which d consits init.
    // console.log(products[0].title); // ^ You can access that here too.
    return products[0].title; // returning the first title from products.
  })
  .then((title) => {
    console.log(title); // Here we access the title. // ^ we don't need this here. This is an extra step.
  })
  .catch((error) => {
    console.log(error);
  });

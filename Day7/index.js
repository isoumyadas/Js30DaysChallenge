// Activity 1: Object Creation and Access

//Task1:
const book = {
  title: "The sea shores",
  author: "Jake Gosling",
  year: 2020,
  getDetails: function () {
    return `The author of the book is ${book.author} and title is ${book.title}`;
  },
  updateYear: function (y) {
    const yearChanged = (this.year = y); // A2: task2
    return yearChanged;
  },
};

console.log("book => ", book);

//Task 2:
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

//Task1:
console.log(book.getDetails());

//Task2:
console.log(book.updateYear(2001));
console.log(book);

// Activity 3: Nested Objects

//Task1
const library = {
  name: "Mumbai Library",
  books: [
    {
      title: "Garmi Chol",
      author: "Alex Graming",
    },
    {
      title: "Thandi Chol",
      author: "Jude Gosling",
    },
    {
      title: "Little Magician",
      author: "Lionel Messi",
    },
  ],
};

console.log("Library => ", library);

// Task2
console.log("name => ", library.name);

// library.books.forEach((i) => console.log(i.title)); // or this
const allBooksTitle = library.books.map((i) => i.title); // you can do this
console.log(allBooksTitle);

// Activity 4: The this Keyword

// Note:
// Arrow Functions: Inherit this from the surrounding scope. They do not have their own this context.
// Regular Functions: Have their own this context, which refers to the object on which the method is called.
const books = {
  name: "Nico Paz",
  title: "Jagga Jassos",
  year: 2023,
  getD: function () {
    return `The ${this.name} presents brand new book the ${this.title}`;
  },
};

console.log(books.getD());

console.log("=================== Activity 5 =======================");
// Activity 5: Object Iteration

//Task1:
for (const key in books) {
  console.log(key, books[key]);
}

const keys = Object.keys(books);
console.log(keys);

const values = Object.values(books);
console.log(values);

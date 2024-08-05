// Actvity 1: Templat Literals
// Task1

const intro = (name, age) => {
  return `Hey ${name} how old are you? Are you ${age} year's old?`;
};

console.log(intro("Soumya", 22));

//Task2

console.log(`
  hey 

  there 

  soumya

  this 

  side
  `);

// Activity 2: Desructuring

//Task 1:

const randomArr = [1, 2, 3, 4, 5];

// const firstAndLastNum = [randomArr[0], randomArr[4]];
// console.log(firstAndLastNum);

const [first, last, ...more] = randomArr;

console.log(first);
console.log(last);
console.log(more);

//Task2:

const books = {
  title: "Hallow Mind",
  author: "Sam Das",
  age: 23,
};

const { title, author } = books;

console.log(`The title of book is ${title} and written by ${author}`);

// Activity 3: Spread and Rest Operator

//Task1
const oldArr = ["sam", "sharon", "rohit"];
const newArr = ["jaadu", "Telbar", "Timber"];

const allNames = [...oldArr, ...newArr];
console.log(allNames);

//Task2
const nums = [2, 3, 4, 5, 6];
function sumThem(...allnums) {
  let random = 0;
  for (const num of allnums) {
    random += num;
  }
  return random;
}

console.log(sumThem(...nums));

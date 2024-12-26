// Task3

const adding = function () {
  let id = 0;

  function generates() {
    id += 1;
    return `id${id}`;
  }

  return generates;
};

const newId = adding();
console.log(newId());
console.log(newId());
console.log(newId());
console.log(newId());

// Task 4

function username(a = "guest") {
  const user = a;
  return function () {
    return `Welcome to dashboard ${user}`;
  };
}

// Step 1: store the closure in a var
const users = username("Jhgaty");

// Step 2: You have to call the closures:
console.log(users());

const user1 = username(); // Here we can create another instance like.
console.log(user1());

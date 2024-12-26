// Task 1

function outer() {
  const username = "soumya";
  function inner() {
    return `${username}`;
  }

  console.log(inner());
}
outer();

//Task 2

const addingCounter = function () {
  let privateCounter = 0; // Private

  function valueBy(val) {
    return (privateCounter += val); // private : means this can't accesed outside the addingCounter function. But you have access within the function.
  }

  return {
    increment: function () {
      return valueBy(1);
    },

    decrement: function () {
      return valueBy(-1);
    },

    showValue: function () {
      return privateCounter;
    },
  };
};

const counter1 = addingCounter();
const counter2 = addingCounter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();

console.log(counter1.showValue());
console.log(counter2.showValue());

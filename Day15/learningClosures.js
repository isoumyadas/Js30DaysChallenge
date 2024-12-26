// What is closures? => Function returning with is lexical scope is know as closures.
// A closure is created when the inner function is returned or assigned, and it retains access to the variables from its outer function.

function x() {
  let a = 10;

  function y() {
    console.log(a);
  }

  return y;
}

let z = x(); // So what happened here is when it is called it removes from the Execution context and it saves into Z. whenver you invoke x(); you create a new EC.
// and x returns y and it is saved in z

// But once you invoke z it will return 10 as output why? => because closures remeber what its lexical scope was!
z();

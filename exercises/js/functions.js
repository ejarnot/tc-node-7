let inGlobalScope = true;

function add(x = 0, y = 0) {
  let result = x + y;
  if (result % 2 == 0) {
    console.log(inGlobalScope);
  }

  return result;
}

console.log(add(2, 2));

function subtract(x, y) {
  return x - y;
}

// Implicit return
let sub = (x, y) => x - y;

// If you only have 1 param, you can drop parentheses
let greet = (name) => console.log(`Hello ${name}!`);

function multiply(x = 0, y = 1) {
  return x * y;
}

function divide(x = 0, y = 1) {
  return x / y;
}

let result = multiply(51, 365.25);

console.log(result);

function counter() {
  let count = 0;
  return function increment() {
    // Increment is the inner scope
    // counter is the outer scope
    // Increment's scope encloses the variable count
    // and can access if after counter is executed
    count++;
    console.log(count);
  };
}

let increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

function isEven(n) {
  // If n is negative, make it positive
  if (n < 0) n = n * -1;

  // If n is 0 after n - 2, even
  // else if n is 1 after n - 2, odd
  // else keep call itself until n is 0 or 1
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

isEven(1201); // false

let res1 = add(10, 4);
let res2 = add(subtract(res1, 10));

function multThenAdd(a, b) {
  let res1 = multiply(a, b);
  let res2 = add(a, b);
  return res1 + res2;
}

multThenAdd(2, 3);

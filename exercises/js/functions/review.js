// Code block that can be executed by using the name of the function and providing (optional) parameters

// Write a function that creates a greeting
// return a string greeting including a name (parameter)

function createGreeting(name) {
  return `Hello ${name}!`;
}

const makeGreeting = (name) => {
  return `Hello ${name}!`;
};

createGreeting("Ben"); // "Hello Ben!"
makeGreeting("Seth"); // "Hello Seth!"

// Write a function that asks the user for their name
// if provided, return a greeting with their name
// otherwise return a guest greeting

function greet() {
  let username = prompt("What is your name?");

  if (username.length == 0) {
    username = "guest";
  }

  return createGreeting(username); // `Hello ${name}`
}

let greeting = greet();

alert(greeting)

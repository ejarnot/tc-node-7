"use strict";

// Error Handling

let globalVar = 10;

class InvalidInputError extends Error {
  name = "InvalidInputError";
}

function add(x, y) {
  try {
    let result = x + y;

    if (isNaN(result)) {
      throw new InvalidInputError("One of your inputs was not a number.");
    } else {
      return result;
    }
  } catch (error) {
    if (error.name == "InvalidInputError") {
      return error.message;
    } else {
      return "Something went wrong.. Try again later.";
    }
  }
}

let x = parseInt(prompt("Num 1:"));

let y = parseInt(prompt("Num 2:"));

alert(add(x, y));

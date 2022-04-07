// Object Destructuring

let obj = {
  val1: 1,
  val2: 2,
  val3: 3,
};

let { val1, val3 } = obj;

val1; // 1
val3; // 3

// Array Destructuring

let arr = ["Ben", "Seth", "Cruz"];

let [ , seth, cruz ] = arr;

seth; // "Seth"
cruz; // "Cruz"
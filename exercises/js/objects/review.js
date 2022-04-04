// Arrays aka lists of similar, typically related, data
// Arrays are zero-indexed, meaning value 1 is at position 0
// Array literal syntax: []
// An array can hold any value at an index position
// Arrays are objects

let arr = [1, 2, 3, 4, 5];

// Structured data made of property: value pairs
// Object values can hold any value and data type, but usually related data
// Object literal syntax: {}
// Property names adhere to identifier naming conventions in JS

let obj = {
  city: "Birmingham",
  state: "Alabama",
  zip: 35209,
  capital: false,
};

// Accessing object values

// Bracket Notation
arr[3]; // 4

obj["city"]; // "Birmingham"

// Dot Notation
arr.length; // 5

arr[0] = "changed";

obj.state; // "Alabama"

obj.city = "Montgomery";
obj.capital = true;
obj.zip = "???";

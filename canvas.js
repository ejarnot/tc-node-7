// Rest
// Take many values and "rest" or "gather" them into a single array value

function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4, 5);

// Spread
// Take a single array value and returns each individual value in that array

// Ex: shallow copy

// Without spread

let arr = [1, 2, 3];
let arrCopy = Array.from(arr);

// With spread

let arrCopy2 = [...arr]; // [1, 2, 3]

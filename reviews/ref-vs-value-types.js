// Passed by value

let a = 10; // a -> 10
let b = a; // b -> a -> 10

function add(x, y) {
  x += y;
}

// x -> a -> 10
// y -> b -> 10
console.log(add(a, b)); // undefined

console.log(a); // 10
console.log(b); // 10

// Passed by reference

// stores the memory address to the object
// not the object itself
let ben = {
  score: 10,
};

let seth = ben;

ben.score += 10;

console.log(ben.score); // 20
console.log(seth.score); // 20

function sum(a, b) {
  a.score += b.score;
}

sum(ben, seth);

console.log(ben.score); // 40
console.log(seth.score); // 40
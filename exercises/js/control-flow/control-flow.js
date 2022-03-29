console.log("Can you guess the result?\n12 >= 10 && '0' || 0\n\n");

// Order of Precedence for logical operators
// Short Circuiting, or McCarthy's Evaluation

let resultA = "0" && "a true string"; // returns "a true string"
let resultB = "a true string" && "0"; // returns "0"
let resultC = "0" || "a true string"; // returns "0"
let resultD = "" || "a true string"; // returns "a true string"

console.log(resultA);
console.log(resultB);
console.log(resultC);
console.log(resultD);

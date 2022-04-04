// Declare 2 variables, x and y, and assign 20 to x and 4 to y
let x = 20;
let y = 4;

let result = 0;
result += x + y - x - ((((y * x * y) / x / y ** (x ** y)) % x) % y);
// Declare a variable add that uses the + operator to store the result of adding the values stored in a and b
let add = x + y;
// Declare a variable minus that uses the - operator to store the result of subtracting the values stored in a and b
let minus = x - y;
// Declare a variable multiply that uses the * operator to store the result of multiplying the values stored in a and b
let multiply = x * y;
// Declare a variable dividing that uses the / operator to store the result of dividing the values stored in a and b
let divide = x / y;

let exp = x ** y;

let mod = x % y;

console.log(
  `Add: ${add}, Minus: ${minus}, Multiply: ${multiply}, Divide: ${divide}, Exp: ${exp}, Mod: ${mod}`
);
console.log(result);
console.log(0.1 + 0.2);

let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

// What is the value of: a + str?
console.log(a + str); // "1111"
// What is the value of: a + str2?
console.log(a + str2); // "11eleven"
// What is the value of: a + isPresent?
console.log(a + isPresent); // 12
// What is the value of: a + firstName?
console.log(a + firstName); // "11Jackie"
// What is the value of: isPresent + lastName?
console.log(isPresent + lastName); // "trueChan"

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

// What is the value of: d == str3?
console.log(d == str3); // true
// What is the value of: d === str3?
console.log(d === str3); // false
// What is the value of: !isPresent2?
console.log(!d); // false
// What is the value of: ("eleven" == str4 && d >= str3)?
console.log("eleven" == str4 && d >= str3); // false
// What is the value of: (!isPresent2 || isPresent2)?
console.log(!isPresent2 || isPresent2); // true
// What is the value of: 0 == false?
console.log(0 == false); // true
// What is the value of: 0 === false?
console.log(0 === false); // false
// What is the value of: 0 != false?
console.log(0 != false); // false
// What is the value of 0 !== false?
console.log(0 !== false); // true

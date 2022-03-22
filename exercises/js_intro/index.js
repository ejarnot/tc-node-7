let product = "Juicy Fruit";

let manufacturer = "Wrigley's";

let gumCount = 15;

let isGood = true;

let veryLargeNumber = 9007199250000000n;

let uniqueSymbol = Symbol("id");

let notDefined;

let answer = null;

// Concatenation
let gumInfo =
  "I have " +
  gumCount +
  " pieces of gum in my " +
  manufacturer +
  " " +
  product +
  " pack.";

// "I have 15 pieces of gum in my Wrigley's Juicy Fruit pack."

// Interpolation
let gumTemplateInfo = `I have ${gumCount} pieces of gum in my ${manufacturer} ${product} pack.`;

// "I have 15 pieces of gum in my Wrigley's Juicy Fruit pack."

console.log("Hello World!");
console.log(manufacturer + " " + product);

product = "Double Mint";

console.log(manufacturer + " " + product);

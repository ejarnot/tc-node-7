function randomToN(n) {
  return Math.round(Math.random() * n);
}

let students = [
  { name: "Ben", score: randomToN(100) },
  { name: "Seth", score: randomToN(100) },
  { name: "Michael", score: randomToN(100) },
  { name: "Cruz", score: randomToN(100) },
  { name: "John", score: randomToN(100) },
];

let today = new Date();
console.log(today.toLocaleTimeString());

students.length; // 5

// Capitalize the first letter
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

capitalize("ben");

let str = "the hungry fox ate food";
let words = str.split(" ");

// .map() returns a new array from the array that you call map on,
// with new/manipulated values
let newArr = words.map(capitalize); // ["The", "Hungry", "Fox", "Ate", "Food"]

console.log(newArr.join(" "));

let sumScores = 0;
let currHighest = [{ score: 0 }];
let currLowest = [{ score: 100 }];

for (let i = 0; i < students.length; i++) {
  if (currHighest[0].score < students[i].score) {
    currHighest[0] = students[i];
  }

  if (currLowest[0].score > students[i].score) {
    currLowest[0] = students[i];
  }

  if (currHighest[0].score == students[i].score) {
    currHighest.push(students[i]);
  }

  if (currLowest[0].score == students[i].score) {
    currLowest.push(students[i]);
  }

  sumScores += students[i].score;
}

console.log(
  `The average class score is ${(sumScores / students.length).toFixed(2)}`
);

for (let i = 0; i < currHighest.length; i++) {
  console.log(
    `${currHighest[i].name} scored the highest with ${currHighest[i].score}.`
  );
}

for (let i = 0; i < currLowest.length; i++) {
  console.log(
    `${currLowest[i].name} scored the lowest with ${currLowest[i].score}.`
  );
}

// let gum = {
//   brand: "Mentos",
//   flavor: "Fresh Mint",
//   sugarFree: true,
//   amount: 50,
//   nutritionalFacts: {
//     totalFat: 0,
//     sodium: 0,
//     totalCarbs: {
//       sugarAlcohol: 1,
//       totalSugars: 0,
//     },
//     servingSize: 1,
//   },
// };

// gum.amount; // 50

// gum.amount += 2;

// gum.amount; // 49

// let propName = "flavor";

// gum[propName]; // "Fresh Mint"

// gum.nutritionalFacts.totalCarbs.sugarAlcohol; // 1

// let calculator = {
//   result: 0,
//   prevResults: [],
//   add: function (x, y) {
//     this.result = x + y;
//     return this.result;
//   },
//   subtract: function (x, y) {
//     this.result = x - y;
//     return this.result;
//   },
//   multiply: function (x, y) {
//     this.result = x * y;
//     return this.result;
//   },
//   divide: function (x, y) {
//     this.result = x / y;
//     return this.result;
//   },
//   displayResult: function () {
//     alert(this.result);
//   },
//   calculate: function () {
//     let x = parseInt(prompt("What is the first number?"));
//     let oper = prompt(
//       "What operation?\n[ add | subtract | multiply | divide ]"
//     );
//     let y = parseInt(prompt("What is the second number?"));

//     switch (oper) {
//       case "add":
//         this.add(x, y);
//         break;
//       case "subtract":
//         this.subtract(x, y);
//         break;
//       case "multiply":
//         this.multiply(x, y);
//         break;
//       case "divide":
//         this.divide(x, y);
//         break;
//       default:
//         this.result = "Not a valid operation.";
//     }

//     this.displayResult();
//   },
// };

// calculator.calculate();

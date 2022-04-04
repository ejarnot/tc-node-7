let start = 500;
let end = 1000;

// Ignore Evens
// for (let num = start; num <= end; num++) {
//   // num % 2 == 0 -> even number
//   if (num % 2 != 0) {
//     console.log(num);
//   }
// }

// While Loop
// let num = start;

// while (num <= end) {
//   if (num % 2 != 0) {
//     console.log(num);
//   }

//   num++;
// }

// Do While Loop
let num = start;

// If starting number is even, make it odd
if (num % 2 == 0) {
  num++;
}

do {
  console.log(num);
  num += 2;
} while (num <= end);

// FIZZBUZZ
// Use one console.log
// Use only two conditionals
for (let y = start; y <= end; y++) {
  let result = `${y} `;

  if (y % 3 == 0) {
    // is divisible by 3
    result += "FIZZ";
  }

  if (y % 5 == 0) {
    // is divisible by 5
    result += "BUZZ";
  }

  console.log(result);
}

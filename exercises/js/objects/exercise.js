const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  // iterate over the values in an array
  // reduce and return a sum
  let sum = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }

  arr.forEach((value) => {
    sum += value;
  });

  return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum(["The", "Dog", "Ate", "Food"]));

let book = {
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  pages: 722,
  read: 4,
  publisher: "DAW",
  publishedYear: 2007,
};

function printInfo() {
  console.log(
    `${this.title} by ${this.author} is ${this.pages} page(s) long. It has been read ${this.read} time(s). It was published by ${this.publisher} in ${this.publishedYear}.`
  );
}

book.printInfo = printInfo;

book.printInfo();

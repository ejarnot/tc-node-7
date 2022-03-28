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
  pageCount: 722,
  pages: [
    "This is the first page",
    "This is the second page",
    "This is the third page",
    "This is the fourth page",
    "This is the fifth page",
    "This is the sixth page",
  ],
  bookmark: 1,
  read: 4,
  publisher: "DAW",
  publishedYear: 2007,
  read: function () {
    let userInput = prompt(
      this.pages[this.bookmark - 1] +
        "\n\nType 'next' to read the next page.\nType 'prev' to read the previous page.\nHit 'Enter' to stop reading."
    );

    if (userInput === "next") {
      this.next();
    } else if (userInput === "prev") {
      this.prev();
    } else {
      alert("See you later!");
    }
  },
  next: function () {
    if (this.bookmark !== this.pages.length) {
      this.bookmark++;
      this.read();
    } else {
      alert("The end!\n\nRefresh the page to read again.");
    }
  },
  prev: function () {
    if (this.bookmark !== 1) {
      this.bookmark--;
    }
    this.read();
  },
};

function printInfo() {
  console.log(
    `${this.title} by ${this.author} is ${this.pageCount} page(s) long. It has been read ${this.read} time(s). It was published by ${this.publisher} in ${this.publishedYear}.`
  );
}

book.printInfo = printInfo;

book.read();

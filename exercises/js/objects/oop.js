// let runner = {
//   name: null,
//   start: Date.now(),
//   end: null,
//   finish: function () {
//     this.end = Date.now();
//   },
//   displayDuration: function () {
//     console.log((this.end - this.start) / 1000);
//   },
// };

// let ben = Object.create(runner);

// function Runner(name) {
//   this.name = name;
//   this.start = Date.now();
//   this.end = null;
//   this.finish = function () {
//     this.end = Date.now();
//   };
//   this.displayDuration = function () {
//     console.log((this.end - this.start) / 1000);
//   };
// }

// Newer Class Syntax
class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}

// Class Inheritence

class Runner extends Person {
  constructor(name, city) {
    super(name, city);

    this.start = null;
    this.end = null;
  }

  finish() {
    this.end = Date.now();
  }

  formatResult() {
    return `${this.name} | ${this.city} | ${
      (this.end - this.start) / 1000
    } sec(s).`;
  }
}

class Race {
  constructor(title, date = new Date()) {
    this.entries = [];
    this.results = [];
    this.date = date;
    this.title = title;
    this.startTime;
  }

  start() {
    this.startTime = Date.now();
    this.entries.forEach((runner) => (runner.start = this.startTime));
  }

  createEntry() {
    let name = prompt("Name:");
    let city = prompt("City:");

    this.loadEntry(name, city);

    let cont = prompt(
      "Do you have more entries to add?\nType 'yes' to continue."
    );

    if (cont == "yes") {
      this.createEntry();
    } else {
      this.start();
    }
  }

  loadEntry(name, city) {
    let entry = new Runner(name, city);
    this.entries.push(entry);
  }

  markFinisher(name) {
    let finisher = this.entries.find((runner) => {
      if (runner.name == name) {
        return true;
      } else {
        return false;
      }
    });

    finisher.finish();

    this.results.push(finisher);

    if (this.entries.length == this.results.length) {
      this.displayResults();
    }
  }

  displayResults() {
    console.log("======Results======");
    this.results.forEach((runner, i) =>
      console.log(`${i + 1}. ${runner.formatResult()}`)
    );
  }
}

const race = new Race("TrueCoders Race", new Date());

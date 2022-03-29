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

    this.start = Date.now();
    this.end = null;
  }

  finish() {
    this.end = Date.now();
  }

  displayDuration() {
    console.log(
      `${this.name} from ${this.city} finished in ${
        (this.end - this.start) / 1000
      } sec(s).`
    );
  }
}

const ben = new Runner("Ben", "Birmingham");
const seth = new Runner("Seth", "Warrior");

console.log(ben);

setTimeout(() => {
  ben.finish();
  ben.displayDuration();
}, 5000);

setTimeout(() => {
  seth.finish();
  seth.displayDuration();
}, 8000);

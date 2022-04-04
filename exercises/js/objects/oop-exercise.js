// Person and Coder Classes

// name (string), pets (number), residence (string), and hobbies (array)
class Person {
  constructor(name, numPets, residence, hobbies) {
    this.name = name;
    this.numPets = parseInt(numPets);
    this.residence = residence;
    this.hobbies = hobbies;
  }

  info() {
    console.log(
      `${this.name} has ${this.numPets} pet(s), lives in ${this.residence}, and enjoys ${this.hobbies}`
    );
  }

  greet(name = "stranger") {
    console.log(`Hello ${name}!`);
  }
}

class Coder extends Person {
  constructor(name, numPets, residence, hobbies, occupation) {
    super(name, numPets, residence, hobbies);

    this.occupation = occupation;
  }

  greet(name = "World") {
    console.log(`Hiya 👋, ${name}! I am a ${this.occupation}.`);
  }
}

const ben = new Person("Ben", 0, "Birmingham", ["coding", "running", "trivia"]);
const seth = new Coder(
  "Seth",
  0,
  "Warrior",
  ["guitar", "coding", "gaming"],
  "Full Stack Web Developer"
);

ben.info();
seth.info();

ben.greet(seth.name);
seth.greet(ben.name);

class NumArray extends Array {
  sum() {
    return this.reduce((sum, x) => sum + x);
  }
}

const numbers = new NumArray();

numbers.push(1, 2, 3, 4, 5);

console.log(numbers.sum());

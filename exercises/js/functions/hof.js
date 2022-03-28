let students = [
  {
    firstname: "John",
    lastname: "Doe",
    avg: 81,
    favSubject: "History",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    avg: 94,
    favSubject: "Math",
  },
];

for (let student of students) {
  console.log(student.firstname);
  for (let prop in student) {
    console.log(student[prop]);
  }
}

function studentSummary(student, index, arr) {
  console.log(
    `${student.firstname} ${student.lastname} averaged a ${student.avg} score, and likes ${student.favSubject} subject best.`
  );
}

students.forEach(studentSummary);

let studentNames = students.map(
  (student) => `${student.firstname} ${student.lastname}`
);

console.log(studentNames);

let avgScore =
  students.reduce((sum, student) => sum + student.avg, 0) / students.length;

console.log(avgScore);

const lessThan = (n) => {
  return (m) => m < n;
};

const lessThan100 = lessThan(100);
const lessThan20 = lessThan(20);

console.log(lessThan100(50), " should be true");
console.log(lessThan100(100), " should be false");
console.log(lessThan20(100), " should be false");
console.log(lessThan20(1), " should be true");

const greeting = function (phrase) {
  return function (name) {
    return `${phrase}, ${name}!`;
  };
};

const sayHowdy = greeting("Howdy");
const sayHello = greeting("Hello");
const sayHiya = greeting("Hiya 👋");

console.log(sayHowdy("Ben")); // "Howdy, Ben!"
console.log(sayHello("Cruz")); // "Hello, Cruz!"
console.log(sayHiya("Seth")); // "Hiya 👋, Seth!"

function counter(startingPoint = 0) {
  let currentValue = startingPoint;
  return function (incrementValue = 1) {
    currentValue += incrementValue;
    return currentValue;
  };
}

let incrementFrom10 = counter(10);
let increment = counter();

console.log(incrementFrom10(10));
console.log(incrementFrom10(5));
console.log(incrementFrom10(1));

function counter2(startingPoint = 0, incrementValue = 1) {
  let count = startingPoint;

  count += incrementValue;

  return count;
}

console.log(counter2()); // 1
console.log(counter2()); // 1
console.log(counter2()); // 1

function toExp(exp) {
  return function (num) {
    return num ** exp;
  };
}

const squared = toExp(2);
const cubed = toExp(3);
const quad = toExp(4);

squared(4); // 16
squared(5); // 25
cubed(3); // 27
quad(2); // 16

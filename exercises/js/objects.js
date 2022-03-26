let students = [
  { name: "Ben", score: 78 },
  { name: "Seth", score: 78 },
  { name: "Michael", score: 100 },
  { name: "Cruz", score: 100 },
  { name: "John", score: 100 },
];

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

let gum = {
  brand: "Mentos",
  flavor: "Fresh Mint",
  sugarFree: true,
  amount: 50,
  nutritionalFacts: {
    totalFat: 0,
    sodium: 0,
    totalCarbs: {
      sugarAlcohol: 1,
      totalSugars: 0,
    },
    servingSize: 1,
  },
};

gum.amount; // 50

gum.amount += 2;

gum.amount; // 49

let propName = "flavor";

gum[propName]; // "Fresh Mint"

gum.nutritionalFacts.totalCarbs.sugarAlcohol; // 1

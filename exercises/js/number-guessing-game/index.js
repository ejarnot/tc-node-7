// Number Guessing Game

// Start Game
// Play Game
// End Game

function startGame() {
  // Introduction
  alert(
    "Welcome to the Guessing Game! You'll be guessing a random whole number. \nDo you have what it takes?\n\n[Enter] to continue."
  );

  // Setup
  // Determine Difficulty
  let difficulty = determineDifficulty();
  let minNum = 1;
  let maxNum;

  if (difficulty == "easy") {
    maxNum = 10;
  } else if (difficulty == "medium") {
    maxNum = 100;
  } else {
    maxNum = 1000;
  }
  
  // Generate Random Number
  let answer = randomNumberInRange(minNum, maxNum);

  console.log(answer, difficulty);

  // Cont.
}

function playGame() {}

function endGame() {}

function determineDifficulty() {
  let difficulty = prompt(
    "Type your selected difficulty:\n\neasy\nmedium\nhard\n\n[Enter] to continue."
  ).toLowerCase();
  let difficultyPresets = ["easy", "medium", "hard"];

  if (difficultyPresets.includes(difficulty)) {
    return difficulty;
  } else {
    alert("You didn't provide a valid difficulty. Select again.");
    return determineDifficulty();
  }
}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

startGame();

// Game Flow
// ✅ 1 Welcome User
// ✅ 2 Ask user the type of game they would like to play
// ✅ 3 Ask user to select the difficulty
// 4 Create/Assign the answer to guess based on type and difficulty
// 5 Ask user the question
// 6 Validate input
// 7 Determine correct/incorrect answer
// 8 Give feedback
// 9 Repeat 4-7 if incorrect answer
// 10 Thanks for playing, End Game

class Game {
  presetDifficulties = ["easy", "medium", "hard", "insane"];
  presetTypes = ["number", "state"];
  states = {
    AL: "alabama",
    AR: "arkansas",
    AK: "alaska",
  };

  constructor() {
    this.type;
    this.answer;
    this.difficulty = "easy";
  }

  start() {
    this.welcome();

    this.determineGameType();

    if (this.type == "number") this.determineDifficulty();

    this.generateAnswer();

    this.beginQuestionCycle();

    this.end();
  }

  welcome() {
    alert("Hello! Welcome to the Guessing Game 2000.\n[Enter] to continue.");
  }

  determineGameType() {
    let gameType = prompt(
      "Select the game type by typing:\n\nnumber\nstate\n\n[Enter] to continue."
    );

    if (this.presetTypes.includes(gameType.toLowerCase())) {
      this.type = gameType;
    } else {
      alert(
        `Hmm, '${gameType}' is not a valid game type...\n[Enter] to continue.`
      );
      this.determineGameType();
    }
  }

  determineDifficulty() {
    let difficulty = prompt(
      "Select the game difficulty by typing:\n\neasy\nmedium\nhard\ninsane\n\n[Enter] to continue."
    );

    if (this.presetDifficulties.includes(difficulty.toLowerCase())) {
      this.difficulty = difficulty;
    } else {
      alert(
        `Hmm, '${difficulty}' is not a valid difficulty...\n[Enter] to continue.`
      );
      this.determineDifficulty();
    }
  }

  generateAnswer() {
    if (this.type == "number") {
      this.answer = this.generateRandomNumber(1, 10);
    } else if (this.type == "state") {
      this.answer = this.generateRandomState();
    }
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateRandomState() {
    let i = this.generateRandomNumber(1, 50);
    return this.states[i];
  }

  beginQuestionCycle() {
    let guess = prompt("What is your guess?\n[Enter] to continue.");

    this.evaluateAnswer(guess);
  }

  evaluateAnswer(guess) {
    if (this.type == "number") {
      if (isNaN(parseInt(guess))) {
        return alert(`${guess} is not a valid number :()`);
      }

      if (guess > this.answer) {
        alert(`${guess} is too high!`);
      } else if (guess < this.answer) {
        alert(`${guess} is too low!`);
      } else {
        alert(`${guess} is correct!`);
      }
    } else if (this.type == "state") {
      console.log("In progress...");
    }
  }
}

const newGame = new Game();

newGame.start();

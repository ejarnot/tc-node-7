// Game Logic

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Game {
  wordList = ["have", "a", "great", "weekend"];

  constructor() {
    this.answer;
    this.guess;

    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  init() {
    // Select a new word and render letter boxes
    this.newWord();

    // Accept characters
    this.addKeyUpHandler();

    // Add next handler
    this.addNextHandler();
  }

  newWord() {
    // Choose a word
    this.selectWord();

    // Render the answer boxes
    this.renderAnswerBoxes();
  }

  selectWord() {
    this.answer = this.wordList[randomNumber(0, this.wordList.length)];
    this.guess = "";
  }

  renderAnswerBoxes() {
    let letters = document.querySelector(".letters");

    letters.innerHTML = "";

    for (let index in this.answer) {
      let box = document.createElement("div");
      box.classList.add("letter");
      box.id = `letter${parseInt(index) + 1}`;
      let blank = document.createElement("span");
      box.appendChild(blank);
      letters.appendChild(box);
    }
  }

  addKeyUpHandler() {
    window.addEventListener("keyup", this.keyUpHandler);

    let keys = document.querySelectorAll(".key");

    for (let key of keys) {
      key.addEventListener("click", this.keyUpHandler);
    }
  }

  removeKeyUpHandler() {
    window.removeEventListener("keyup", this.keyUpHandler);

    let keys = document.querySelectorAll(".key");

    for (let key of keys) {
      key.removeEventListener("click", this.keyUpHandler);
    }
  }

  keyUpHandler(event) {
    let char;

    if (event.type == "click") {
      char = event.target.textContent;
    } else {
      char = event.key.toUpperCase();
    }

    let charCode = char.charCodeAt(0);
    // A-Z -> 65-90
    if (char.length < 2 && charCode >= 65 && charCode <= 90) {
      if (this.answer.length > this.guess.length) {
        // what letter are you guessing?
        this.guess += char;
        this.updateLetter(char, this.guess.length);
      }
      // if you have guessed all letters, do nothing
    } else if (char == "BACKSPACE" || char == "DELETE" || char == "↰") {
      // if you backspace or delete
      this.guess = this.guess.slice(0, this.guess.length - 1);
      this.updateLetter("", this.guess.length + 1);
    }
  }

  addNextHandler() {
    document
      .querySelector("#nextBtn")
      .addEventListener("click", this.nextHandler);
  }

  removeNextHandler() {
    document
      .querySelector("#nextBtn")
      .removeEventListener("click", this.nextHandler);
  }

  nextHandler(event) {
    if (this.guess.toLowerCase() == this.answer) {
      this.newWord();
    }
  }

  updateLetter(char, pos) {
    let box = document.querySelector(`#letter${pos}`);
    let blank = document.querySelector(`#letter${pos} > span`);
    blank.textContent = char;
    if (char) {
      // Evaluate guess vs answer
      let correct = char.toLowerCase() == this.answer[pos - 1];
      box.classList.add(`${correct ? "correct" : "incorrect"}`);
    } else {
      box.classList.remove("correct", "incorrect");
    }
  }
}

new Game().init();

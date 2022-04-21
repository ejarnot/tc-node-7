const { EventEmitter } = require("events");

const result = new EventEmitter();

result.on("correct", (val) => {
  console.log(`${val} was correct`);
});

result.once("start", () => {
  setTimeout(() => {
    let num = Math.round(Math.random() * 10);

    if (num < 5) {
      result.emit("correct", num);
    } else {
      result.emit("incorrect", num);
    }

    // does not trigger the handler, because the handler is only used for the first event occurance
    result.emit("start");
  }, 5000);
});

result.on("incorrect", (val) => {
  console.log(`${val} was incorrect`);
});

result.emit("start");

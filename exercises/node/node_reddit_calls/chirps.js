const { writeFile } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "./chirps.json");

const contents = [
  {
    author: "Ben",
    content: "First chirp",
  },
  {
    author: "Seth",
    content: "Hello World",
  },
  {
    author: "Ben",
    content: "Node is cool",
  },
  {
    author: "Michael",
    content: "C# is saweeet",
  },
  {
    author: "Cruz",
    content: "Rocket league is coollll",
  },
];

writeFile(filePath, JSON.stringify(contents), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully wrote chirps to file.");
  }
});

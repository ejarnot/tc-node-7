const fs = require("fs");

let filePath = "./HelloWorld.txt";

fs.readFile(filePath, (err, contents) => {
  if (err) {
    console.error(err);
  } else {
    console.log(contents.toString());
  }
});

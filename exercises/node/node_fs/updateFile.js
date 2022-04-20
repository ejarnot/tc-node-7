const fs = require("fs");

let filePath = "./HelloWorld.txt";

let content = "";

for (let i = 0; i < 100; i++) {
  content += `\nHello World again ${i}`;
}

fs.appendFile(filePath, content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Success");
  }
});

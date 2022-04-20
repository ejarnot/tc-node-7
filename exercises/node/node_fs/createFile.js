const fs = require("fs");

let filePaths = ["./readFile.js", "./updateFile.js", "./deleteFile.js"];

for (let filePath of filePaths) {
  fs.writeFile(filePath, "const fs = require('fs');", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully created ${filePath}`);
    }
  });
}

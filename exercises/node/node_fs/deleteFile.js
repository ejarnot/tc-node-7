const fs = require("fs");

fs.unlink("./HelloWorld.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully deleted file.");
  }
});

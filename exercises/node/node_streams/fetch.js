const fetch = require("isomorphic-fetch");
const fs = require("fs");
const path = require("path");

const toSrc = fs.createWriteStream(path.join(__dirname, "./scraped.html"));

fetch(
  "https://google.com"
)
  .then((res) => res.text())
  .then((data) => {
    toSrc.write(data)
  })
  .catch((err) => console.error(err));

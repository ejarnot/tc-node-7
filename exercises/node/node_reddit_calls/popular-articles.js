const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "./programming-articles.json");

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    let articles = children.map(({ data: { url, author, title } }) => {
      return { url, author, title };
    });

    writeFile(filePath, JSON.stringify(articles), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully wrote contents to file.");
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });

const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "./programming-articles.json");

async function getArticles() {
  let res = await fetch("https://reddit.com/r/programmingHumor.json");
  let {
    data: { children },
  } = await res.json();

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
}

try {
  getArticles();
} catch (error) {
  console.error(error);
}

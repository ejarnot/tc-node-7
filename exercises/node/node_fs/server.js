const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  let filePath;
  let contentType = "text/html";
  let statusCode = 200;

  if (path.extname(url)) {
    filePath = "./public" + url;

    switch (path.extname(url)) {
      case ".css":
        contentType = "text/css";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".gif":
        contentType = "image/gif";
        break;
      case ".mp4":
        contentType = "video/mp4";
        break;
      case ".js":
        contentType = "text/javascript";
        break;
      default:
        contentType = "text/html";
    }
  } else if (url == "/" && method == "GET") {
    filePath = "./public/index.html";
  } else if (url == "/forms" && method == "GET") {
    filePath = "./public/forms.html";
  } else if (url == "/tables" && method == "GET") {
    filePath = "./public/tables.html";
  } else {
    statusCode = 404;
    filePath = "./public/notFound.html";
  }

  fs.readFile(filePath, (err, contents) => {
    if (err) {
      console.error(err);

      res.writeHead(500, { "Content-Type": "text/html" });
      res.write("<main><h1>Server Error. Try again later.</h1></main>");
    } else {
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.write(contents);
    }

    res.end();
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}...`));

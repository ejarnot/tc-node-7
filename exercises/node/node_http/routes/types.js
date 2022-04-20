const fs = require("fs");

class Route {
  constructor(url, method, statusCode = 200) {
    this.url = url;
    this.method = method;
    this.statusCode = statusCode;
  }
}

class ViewRoute extends Route {
  constructor(url, method, content, file = false, statusCode = 200) {
    super(url, method, statusCode);
    this.contentType = "text/html";
    this.content = content;
    this.file = file;
  }

  render(reqBody) {
    if (this.file) {
      let res;

      fs.readFileSync(this.content, (err, contents) => {
        if (err) {
          console.error(err);
        } else {
          res = contents.toString();
        }
      });

      return res;
    } else {
      return `<main id="root">
          ${this.content}
        </main>`;
    }
  }
}

class APIRoute extends Route {
  constructor(url, method, contentHandler, statusCode = 200) {
    super(url, method, statusCode);
    this.contentType = "application/json";
    this.contentHandler = contentHandler;
  }

  render(reqBody) {
    return this.contentHandler(reqBody);
  }
}

module.exports = {
  ViewRoute,
  APIRoute,
  Route,
};

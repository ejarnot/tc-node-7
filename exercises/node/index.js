// CommonJS Syntax
const http = require("http");
// ES6 Module Syntax
// import http from "http";
const port = 3000;

http
  .createServer((request, response) => {
    // response.writeHead(200, { "content-type": "text/html" })
    const chunks = [];

    request.on("data", (chunk) => chunks.push(chunk));
    request.on("error", (err) => {
      response.writeHead(422, { "content-type": "text/html" });
      response.write("<h1>A client error occurred</h1>");
    });
    response.on("error", (err) => {
      response.writeHead(500, { "content-type": "text/html" });
      response.write("<h1>A server error occurred</h1>");
    });

    request.on("end", () => {
      let resBody;
      let statusCode = 200;
      let contentType = "text/html";

      //   Handle routes
      if (request.url == "/" && request.method == "GET") {
        resBody =
          "<main><h1>Hello World</h1><a href='/info'>View Request Info</a></main>";
      } else if (request.url == "/info" && request.method == "GET") {
        resBody = JSON.stringify({
          url: request.url,
          method: request.method,
          msg: "From the server",
          status: response.statusCode,
        });
        contentType = "application/json";
      } else if (request.url == "/signup" && request.method == "POST") {
        try {
          // echo back the request body
          let reqBody = JSON.parse(Buffer.concat(chunks).toString());
          reqBody.success = true;
          resBody = JSON.stringify(reqBody);
        } catch (error) {
          statusCode = 500;
          resBody = JSON.stringify({ msg: "Failed to parse request body" });
        } finally {
          contentType = "application/json";
        }
      } else {
        statusCode = 404;
        resBody =
          "<main><h1>404 Not Found</h1><a href='/'>Go to somewhere known.</a></main>";
      }

      response.statusCode = statusCode;
      response.setHeader("content-type", contentType);
      response.write(resBody);
      response.end();
    });
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });

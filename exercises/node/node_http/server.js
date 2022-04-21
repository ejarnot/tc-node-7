// import http from "http"
const { createServer } = require("http");
// import { getRouteInfo } from "./utils"
const { getRouteInfo } = require("./routes/utils");
const port = 3000;

const requestHandler = (req, res) => {
  const chunks = [];

  // Listen and collect req body chunks
  req.on("data", (chunk) => chunks.push(chunk));

  // Handle the response after all the req chunks have arrived
  req.on("end", () => {
    const { method, url } = req;
    let reqBody;

    try {
      reqBody = JSON.parse(Buffer.concat(chunks).toString());
    } catch (err) {
      console.error("Request body cannot be parsed to JSON");
      reqBody = null;
    }

    // Get route info
    const { statusCode, contentType, content } = getRouteInfo(
      method,
      url,
      reqBody
    );

    res.writeHead(statusCode, { "content-type": contentType });
    res.write(content);
    res.end();
  });
};

const server = createServer(requestHandler);

server.on("request", (req, res) => {
  console.log(`Incoming "${req.method}" request to "${req.url}"`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

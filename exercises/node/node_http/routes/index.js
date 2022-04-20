const { ViewRoute, APIRoute } = require("./types");

const routes = {
  "GET/": new ViewRoute("/", "GET", "<h1>Home</h1>"),
  "GET/review": new ViewRoute(
    "/review",
    "GET",
    "../../../reviews/js-interview-prep.md",
    true
  ),
  "GET/about": new APIRoute("/about", "GET", function (reqBody) {
    JSON.stringify({ name: "Ben", city: "Birmingham" });
  }),
  "POST/echo": new APIRoute("/echo", "POST", function (reqBody) {
    return JSON.stringify({ url: this.url, method: this.method, reqBody });
  }),
  notfound: new ViewRoute("*", "*", "<h1>404 Not Found</h1>", false, 404),
};

module.exports = routes;

const routes = require("./index");

const getRouteInfo = (method, url, reqBody) => {
  const route = routes[method + url] || routes["notfound"];

  const info = {
    statusCode: route.statusCode,
    contentType: route.contentType,
    content: route.render(reqBody),
  };

  return info;
};

module.exports = { getRouteInfo };

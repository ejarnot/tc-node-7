const query = require("../models");

const getAll = async () => {
  return await query("SELECT * FROM products;");
};

module.exports = { getAll };

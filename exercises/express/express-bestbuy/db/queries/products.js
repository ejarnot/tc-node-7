const QueryDB = require("../models");

const getAllProducts = async () => {
  return await QueryDB("SELECT * FROM products;");
};

const getProductById = async (id) => {
  return await QueryDB("SELECT * FROM products WHERE ProductID = ?;", [id]);
};

const addProduct = async (productDetails) => {
  return await QueryDB("INSERT INTO products SET ?", [productDetails]);
};

const updateProduct = async (productDetails, id) => {
  return await QueryDB("UPDATE products SET ? WHERE ProductID = ?", [
    productDetails,
    id,
  ]);
};

const removeProduct = async (id) => {
  return await QueryDB("DELETE FROM products WHERE ProductID = ?", [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
};

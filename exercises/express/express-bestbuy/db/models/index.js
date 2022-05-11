const mysql = require("mysql");
const config = require("../../config");

const connection = mysql.createPool(config.mysql);

const QueryDB = (queryStr, values) => {
  return new Promise((resolve, reject) => {
    connection.query(queryStr, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = QueryDB;

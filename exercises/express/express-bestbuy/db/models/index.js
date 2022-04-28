const mysql = require("mysql");

const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "bestbuy",
};

const connection = mysql.createPool(mysqlConfig);

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

const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Environment variables not loaded!");
}

module.exports = {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  port: parseInt(process.env.PORT),
};

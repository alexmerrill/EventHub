const { Pool } = require("pg");

const pool = new Pool({
  user: "gitpod",
  host: "localhost",
  database: process.env.DATABASE,
  password: "",
  port: 5432,
});

module.exports = pool;

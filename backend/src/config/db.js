const { Pool } = require("pg");
const { Sequelize } = require("sequelize");
const { env } = require("./env");

const db = new Pool({
  connectionString: env.DATABASE_URL,
});

const sequelize = new Sequelize(env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

module.exports = { db };

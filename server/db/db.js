const Sequelize = require("sequelize");

const db = new Sequelize('messenger', 'savannaha', 'hatchways', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;

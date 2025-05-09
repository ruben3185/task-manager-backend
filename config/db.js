const { Sequelize } = require('sequelize');
require('dotenv').config();  // Carga las variables de entorno

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;

// config/config

// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bdprojetoapi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

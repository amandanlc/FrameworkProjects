// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

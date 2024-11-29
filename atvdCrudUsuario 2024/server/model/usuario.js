// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports = User;

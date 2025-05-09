 
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Task;

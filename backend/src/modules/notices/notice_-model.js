const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db'); 

const Notice = sequelize.define('Notice', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'notices',
  timestamps: true,
});

module.exports = Notice;
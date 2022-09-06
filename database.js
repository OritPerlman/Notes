const Sequelize = require('sequelize');

const sequelize = new Sequelize('Notes', 'root', 'Notes', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

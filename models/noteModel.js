const Sequelize = require ('sequelize');

const sequelize = require ('../database');


const Note = sequelize.define('note', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  content: Sequelize.STRING,
  author: Sequelize.STRING,
  date: Sequelize.STRING,
});

module.exports = Note;
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const PicNic = sequelize.define("picnic", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  maxParticipants: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 2,
  },
});

// create table if it doesn't exists
PicNic.sync();

module.exports = PicNic;

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  let user2 = sequelize.define(
    "user2",
    {
      userID: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        },
      },
    }
  );
  return user2;
};

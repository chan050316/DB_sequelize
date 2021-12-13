const Sequelize = require("sequelize");

module.exports = sequelize.define("Tweet", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  content: Sequelize.STRING(300), // content 값의 형식을 STRING으로 정의하고 뒤 매개변수는 최대 문자열을 의미
});

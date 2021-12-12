const path = require("path");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development"; // production : 많은 페키지들이 개발용이 아닌 배포용으로 변환 => env === development
const config = require("../config/config.json")[env]; // 데이터 베이스를 경로를 통해 객체 형태로 불러옴 / key값을 env(development)로 넣어줘서 객체의 윗부분만 가져옴

const sequelize = new Sequelize(
  config.username,
  config.password,
  config.database,
  config
); // config라는 객체에서 username, password, database, 그 외의 나머지 것들을 가져온다 / config는 왜 가져오는지 모르겠음 / config의 설정들을 넣어서 인스턴스화 시킨다.
// 인스턴스 (인스턴스화는 클래스 내의 객체에 대해 특정한 변형을 정의하고, 이름을 붙인 다음, 그것을 물리적인 어떤 장소에 위치시키는 등의 작업을 통해, 인스턴스를 만드는 것을 의미한다.)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db안에 Sequelize설정들과 위에서 인스턴스화 한 sequelize라는 변수를 넣어 앞으로 쓸 수 있게 한다.

db.User = require("./user")(sequelize, Sequelize); // "(sequelize, Sequelize)" 이 부분은 각 파일에 처음 매개변수와 이어진다
db.User = require("./comment")(sequelize, Sequelize);

module.exports = db;
// db를 모듈화 시킴

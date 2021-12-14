module.exports = async () => {
  const Tweet = require("./models/Tweet");
  const User = require("./models/User");

  User.hasMany(Tweet, { as: "Teewt", foreignKey: "userId" });
  Tweet.hasMany(User, { as: "User", foreignKey: "userId" });

  const errHandler = err => {
    console.error("Error: ", err);
  };

  const user = await User.create({
    username: "Alex",
    passwd: "1234567890",
  }).catch(errHandler);

  const tweet = await Tweet.create({
    content: "Hi, my name is chan.",
    userId: user.id,
  }).catch(errHandler);

  const users = await User.findAll({
    where: { username: "Alex" },
    include: [{ model: Tweet, as: "Tweets" }],
  }).catch(errHandler);

  console.log("Alex Tweet: ", users);
};

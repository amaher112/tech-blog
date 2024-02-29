const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
    });

    const posts = await Post.bulkCreate(postData);
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const user = users[i % users.length];

      await post.setUser(user);
    }
  } catch (err) {
    console.err("Error seeding database:", err);
  } finally {
    process.exit(0);
  }
};

seedDatabase();

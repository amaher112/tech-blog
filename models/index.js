const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// user has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// user has many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// comments have one user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// comments have one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
// post has many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
// post has one user
Post.belongsTo(User, {
  foreignKey: 'user_id'
});




module.exports = { User, Comment, Post };

const articlesMock = require('../mock/articles.json');
const commentsMock = require('../mock/comments.json');
const tagsMock = require('../mock/tags.json');
const usersMock = require('../mock/users.json');
const Article = require('../model/Article');
const Comment = require('../model/Comment');
const Tag = require('../model/Tag');
const User = require('../model/User');


module.exports = async () => {
  const articles = await Article.find();
  if (articles.length !== articlesMock.length) {
    await createInitialEntity(Article, articlesMock);
  }
  const tags = await Tag.find();
  if (tags.length !== tagsMock.length) {
    await createInitialEntity(Tag, tagsMock);
  }
  const comments = await Comment.find();
  if (comments.length !== commentsMock.length) {
    await createInitialEntity(Comment, commentsMock);
  }
  const users = await User.find();
  if (users.length !== usersMock.length) {
    await createInitialEntity(User, usersMock);
  }
}

async function createInitialEntity(Model, data) {
  Model.collection.drop();
  return Promise.all(data.map(async item => {
    try {
      const newitem = new Model(item);
      await newitem.save();
      return newitem;
    } catch (error) {
      return error;
    }
  }));
}
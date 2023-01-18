const express = require("express");
const Article = require("../model/Article");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .route("/:articleId")
  .patch(auth, async (req, res) => {
    try {
      const { articleId } = req.params;
      const article = await Article.findById(articleId);
      
      if (article.userId.toString() === req.user._id) {
        const updatedArticle = await Article.findByIdAndUpdate(
          articleId,
          req.body,
          { new: true }
        );
        res.status(200).send(updatedArticle);
      } else {
        res.status(401).json({
          message: "Unathorized",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const { articleId } = req.params;
      const articleForDelete = await Article.findById(articleId);

      if (articleForDelete.userId.toString() === req.user._id) {
        await articleForDelete.remove();
        res.status(200).send(null);
      } else {
        res.status(401).json({
          message: "Unathorized",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Article.find({ [orderBy]: equalTo });
      res.status(200).send(list);
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newArticle = await Article.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newArticle);
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

module.exports = router;

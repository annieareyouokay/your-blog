const express = require("express");
const auth = require("../middleware/auth.middleware");
const Comment = require("../model/Comment");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (res, req) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Comment.find({ [orderBy]: equalTo });
      res.status(200).send(list);
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  })
  .post(auth, async (res, req) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newComment);
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

router.delete("/:commentId", auth, async (req, res) => {
  try {
    const { articleId } = req.params;
    const commentForDelete = await Comment.findById(articleId);

    if (commentForDelete.userId.toString() === req.user._id) {
      await commentForDelete.remove();
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

module.exports = router;

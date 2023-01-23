const express = require('express');
const User = require('../model/User');
const auth = require('../middleware/auth.middleware');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const list = await User.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
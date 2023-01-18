const express = require('express');
const { addListener } = require('../model/Article');
const Tag = require('../model/Tag');
const router = express.Router({ mergeParams: true });

router.get('/', async (res, req) => {
  try {
    const list = await Tag.find();
    req.status(200).send(list);
  } catch (error) {
    req.status(500).json({
      message: 'Internal server error'
    });
  }
})

module.exports = router;
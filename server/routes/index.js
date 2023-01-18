const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/comment', require('./comment.routes'));
router.use('/article', require('./article.routes'));
router.use('/tag', require('./tag.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;
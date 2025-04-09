const express = require('express');
const router = express.Router();
const { validateToken } = require('../../middlewares/AuthMiddleware');

// 자체로그인 라우터
const UserAuth = require('./User');
router.use('/', UserAuth);

module.exports = router;

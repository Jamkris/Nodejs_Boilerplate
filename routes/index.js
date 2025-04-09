const express = require('express');
const router = express.Router();

// 유저 관련 라우터
const userRouter = require('./Auth')
router.use('/auth', userRouter)

module.exports = router;

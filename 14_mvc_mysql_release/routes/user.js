// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);

// 회원가입 페이지
router.get('/signup', controller.signup);

// 로그인 페이지
router.get('/signin', controller.signin);

module.exports = router;

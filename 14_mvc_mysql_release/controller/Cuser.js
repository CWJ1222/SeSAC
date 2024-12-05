// TODO: 컨트롤러 코드
// const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup'); // 회원가입 페이지 렌더링
};

exports.signin = (req, res) => {
  res.render('signin'); // 로그인 페이지 렌더링
};

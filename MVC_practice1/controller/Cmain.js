const Comment = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.practice2 = (req, res) => {
  if (
    Comment.Account.realId === req.body.userId &&
    Comment.Account.realPw === req.body.userPw
  ) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};

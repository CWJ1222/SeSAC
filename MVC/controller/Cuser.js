const User = require('../model/User');

//GET /user
exports.getUser = (req, res) => {
  console.log(User.userInfo());
  //   res.send('응답완료');
  res.render('user', { userInfos: User.userInfo() });
};

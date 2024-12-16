const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser'); // POST 요청 처리
const app = express();
const PORT = 8080;

app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  const isLogin = req.session.user ? true : false;
  const user = req.session.user || null;
  res.render('index', { isLogin, user });
});

app.get('/login', (req, res) => {
  res.render('login');
});

const userInfo = {
  userId: 'cocoa',
  userPw: '1234',
};

// POST /login
app.post('/login', (req, res) => {
  const { id, pw } = req.body;
  if (id === userInfo.userId && pw === userInfo.userPw) {
    req.session.user = id;
    res.redirect('/');
  } else {
    // 로그인 실패
    res.send(
      '<script>alert("로그인 실패! 아이디와 비밀번호를 확인하세요."); window.location.href="/login";</script>'
    );
  }
});
// GET /logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('세션삭제실패', err);
      res.status(500).send('아웃실패');
    } else {
      res.clearCookie('connect.sid');
      res.redirect('/');
    }
  });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

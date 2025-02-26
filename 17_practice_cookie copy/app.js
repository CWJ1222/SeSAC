const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(cookieParser()); // 쿠키 미들웨어 설정

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const popup = req.cookies.popup || '';
  res.render('index', { popup });
});

app.post('/set-cookie', (req, res) => {
  res.cookie('popup', 'true', { maxAge: 1000 * 60 * 60 * 24 });
  res.send('쿠키생성 성공');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

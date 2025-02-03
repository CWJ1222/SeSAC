const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

app.use(cookieParser('secret Key'));

app.set('view engine', 'ejs');

const cookieConfig = {
  maxAge: 10 * 60 * 1000, // 수명 10분
  httpOnly: true, // 프론트에서 쿠키 접근 막기
  signed: true, // ver2. 암호화된 쿠키
};
//쿠키특성 설정해주는 것. setcookie에 이름 있음.
//같은 이름으로 해줘야 됨

const cookieConfig2 = {
  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: '/abc',
};
//path~ 쿠키가 생성되는 경로???
/*

path 옵션은 쿠키가 어느 경로에서 유효한지를 지정합니다. 
즉, 특정 경로에서만 쿠키를 클라이언트(브라우저)에 저장하거나 전송할 수 있게 설정하는 것입니다.

기본 개념
	•	path는 쿠키를 사용할 수 있는 URL 경로를 지정합니다.
	•	기본값은 /로 설정되어 있는데, 이 경우 해당 도메인 전체에서 쿠키가 유효합니다.
*/

app.get('/abc', (req, res) => {
  res.cookie('abc-page', 'abc page cookie', cookieConfig2);
  res.render('cookie-another');
});
app.get('/', (req, res) => {
  res.render('cookie');
});

app.get('/getCookie', (req, res) => {
  console.log(req.cookies); // {쿠키: 쿠키값, ...}
  console.log('암호화된 쿠키', req.signedCookies);
  //   res.send(req.cookies); //ver1. 암호화되지 않은 쿠키
  res.send(req.signedCookies); // ver2. 암호화된 쿠키
});

// 쿠키 설정
app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키이름, 쿠키값, 쿠키옵션)
  res.cookie('myCookie', 'cookie~~~', cookieConfig);
  // 암호화된 쿠키/암호화되지 않은 쿠키
  // 모두 res.cookie()로 쿠키 설정
  res.send('set cookie 완료, 응답 종료!');
});

app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'cookie~~~', cookieConfig);
  res.send('clear cookie, 응답 종료!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

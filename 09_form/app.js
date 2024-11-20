const express = require('express');
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set('view engine', 'ejs'); // 템플릿 엔진 설정
app.set('views', './views'); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

// body-parser 설정

/* 요청 > 응답 */
app.get('/', function (req, res) {
  res.render('index');
});

//form get요청
app.get('/getForm', function (req, res) {
  console.log(req.query);
  res.send('form data get 요청 성공'); //요청이 오면 응답해줘야 됨
});

//http://localhost:8080/getForm?email=AAAA%40KOREA.COM&pw=1234
//이런식으로 링크에 보임. PW등이 다보이기 떄문에 보안에 안 좋음

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

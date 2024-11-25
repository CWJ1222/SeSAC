const express = require('express');
const app = express();
const PORT = 8081;

app.set('view engine', 'ejs'); // 템플릿 엔진 설정
app.set('views', './views'); // 뷰파일 폴더 경로 설정

app.get('/', function (req, res) {
  console.log('start');
  res.render('index');
});
//루트에 get요청을 보내면 index를 랜더함

app.get('/practice1', (req, res) => {
  res.render('practice1');
});

app.get('/practice2.ejs', (req, res) => {
  res.render('practice2');
});

//body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // JSON 데이터 처리

// 실습문제
// practice1으로 들어갔을 때 practice1.ejs를 화면에 보여줘야 함
// practice2으로 들어갔을 때 practice2.ejs를 화면에 보여줘야 함
//pr1, pr2 에는 각각 get post를 통한 폼요청이 있고
//결과 페이지는 practice_result.ejs를 공통으로 사용함.
//4개의 api만들어야 함

// 1.practice1에 대한 get요청
app.get('/getForm', function (req, res) {
  console.log(req.query);
  res.render('practice_result', {
    title: 'GET',
    userInfo: req.query,
    addInfo: false, //practice1에서는 적은 정보를 주고 있음
  });
});

// 2.practice1에 대한 post요청
// app.post('/postForm', (req, res) => {
//   res.render('practice2');
// });

app.post('/postForm', function (req, res) {
  console.log(req.body);
  res.render('practice_result', {
    title: 'POST',
    userInfo: req.body,
    addInfo: true, //practice1에서는 적은 정보를 주고 있음
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

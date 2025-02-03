// import express from 'express';
//이렇게 쓰려면 package.json에   "type": "module" 넣어야 됨

const express = require('express');
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set('view engine', 'ejs'); // 템플릿 엔진 설정
app.set('views', './views'); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

/* 요청 > 응답 */
app.get('/', function (req, res) {
  // console.log('nodemon');
  res.render('index');
});

//body-parser 설정
app.use(express.urlencoded({ extended: false }));
//false~단순 키값 처리, true~중첩 객체인 경우, 복잡한
app.use(express.json()); // JSON 데이터 처리

//form get요청
app.get('/getForm', function (req, res) {
  console.log(req.query); //?이후의 쿼리를 보여줌
  // res.send('form data get 요청 성공');
  //요청이 오면 응답해줘야 됨

  //title 에 get만 보이게

  res.render('result', {
    title: 'GET',
    userInfo: req.query,
  });
});
//이것 한 덩어리가 api이다.

//http://localhost:8080/getForm?email=AAAA%40KOREA.COM&pw=1234
//이런식으로 링크에 보임. PW등이 다보이기 떄문에 보안에 안 좋음

//form post요청
app.post('/postForm', function (req, res) {
  console.log(req.body);
  // res.send('form data 요청 성공');
  res.render('result', {
    title: 'POST',
    userInfo: req.body,
  });
});

//form validation
app.post('/js-form-check', function (req, res) {
  console.log(req - body);
  res.send('유효성 검사');
});

//bodyparser가 없으면 받아온 데이터가 undefined가 됨
//체크박스는 ON OFF이렇게만 나오기 때문에 VALUE설정하는 것이 좋음

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

// 실습문제
// practice1으로 들어갔을 때 practice1.ejs를 화면에 보여줘야 함
// practice2으로 들어갔을 때 practice2.ejs를 화면에 보여줘야 함
//pr1, pr2 에는 각각 get post를 통한 폼요청이 있고
//결과 페이지는 practice_result.ejs를 공통으로 사용함.
//4개의 api만들어야 함

// 1.practice1에 대한 get요청
app.get('/practice1', (req, res) => {
  res.render('practice/practice1');
});
// 2.practice2에 대한 get요청

//3. 주소지정 form GET요청

//4. 주소지정 form POST요청

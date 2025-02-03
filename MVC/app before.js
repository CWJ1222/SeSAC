const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const comments = [
  {
    id: 1,
    userid: 'apple',
    date: '2024-10-23',
    comment: '안녕하세요~~~~~~~~~~~~',
  },
  {
    id: 2,
    userid: 'banana',
    date: '2024-11-23',
    comment: '반갑습니다!!!!!~~~~~',
  },
  {
    id: 3,
    userid: 'cocoa',
    date: '2024-09-23',
    comment: '아무거나 쓰겠습니다...',
  },
  {
    id: 4,
    userid: 'donut',
    date: '2024-10-31',
    comment: '곧 점심시간 이네요..',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  console.log(comments);
  res.render('comments', { commentInfos: comments });
});

app.get('/comment/:id', (req, res) => {
  console.log(req.params);
  //   console.log(req.query);
  const commentId = req.params.id; //

  console.log('🚀commentId:', commentId);
  //   res.send('응답 완료');

  console.log(comments[commentId - 1]); //댓글의 실제정보
  if (commentId < 1 || commentId > comments.length) {
    res.render('404');
  }

  if (isNaN(commentId)) {
    res.render('404');
  }

  res.render('comment', { commentInfo: comments[commentId - 1] });
});

//[404 error]
//맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

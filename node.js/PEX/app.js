const express = require('express');

var cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/dog', (req, res) => {
  res.send('<h1>DOG</h1>');
  // h1도 먹힘
});

app.get('/cat', (req, res) => {
  res.send('CAT');
});

app.get('/cat1', (req, res) => {
  res.json({ sound: '야옹' });
});

app.get('/naver', (req, res) => {
  res.send('<a href="http://www.naver.com">네이버</a>');
});

app.get('/user/:id', (req, res) => {
  //   const q = req.params;
  //   console.log(q);
  //   res.json({ sound: '야옹' });

  const q = req.query;

  console.log(q);
  console.log(q.id);
  console.log(q.pw);

  res.json({ userid: q.id });
});

app.listen(port, () => {
  console.log(`Example app listenung on port ${port}`);
});

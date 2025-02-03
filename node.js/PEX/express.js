const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);

// app.listen(port, () => {
//   console.log(`example app listening on port ${port}`);
// });

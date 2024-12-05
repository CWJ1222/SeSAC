// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'sesac',
  password: '1234',
  database: 'mvcPractice',
});

exports.getuser = (cb) => {
  return [{}];
};

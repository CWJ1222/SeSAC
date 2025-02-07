const mysql = require("mysql2");

// MySQL 연결 설정
const db = mysql.createConnection({
  host: "localhost",
  user: "sesac", // 사용자 이름
  password: "1234", // 비밀번호
  database: "sesac",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL 연결 실패:", err);
  } else {
    console.log("✅ MySQL 연결 성공!");
  }
});

module.exports = db;

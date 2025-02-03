const express = require("express");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const { upload, uploadToS3 } = require("./middlewares/upload");

const app = express();
const PORT = 8080;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userModel = require("./models/User");
// console.log(process.env.DB_HOST);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const User = userModel(sequelize);

app.get("/api", (req, res) => {
  res.send("hello!");
});

app.post("/api/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    console.log(user);
    res.json(user);
  } catch (err) {
    res.send("서버 에러");
    console.log(err);
  }
});

// S3 파일 업로드 API
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "파일을 업로드해주세요." });
    }

    const fileUrl = await uploadToS3(req.file);
    res.json({ message: "파일 업로드 성공!", fileUrl });
  } catch (err) {
    console.error("❌ 파일 업로드 실패:", err);
    res.status(500).json({ message: "서버 에러", error: err.message });
  }
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("테이블 생성 완료!");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("sequelize err!!", err);
  });

/* 
- 로컬에서 RDS 로 연결 시도시 timedout
    3306 포트로 인바운드 설정을 허용해놨음에도 접근이 되지 않는 이유는
    public access 를 허용하지 않았기 때문
- EC2에서만 RDS로 접근할 수 있음
- 개발환경에서의 DB는 로컬DB, 배포할 때의 DB는 RDS로 설정!
*/

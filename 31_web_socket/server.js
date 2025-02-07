// npm i ejs express ws multer
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const multer = require("multer");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 8080;
app.set("view engine", "ejs");

// 정적 파일 제공 (이미지 저장 폴더)
app.use(express.static("public"));

// 사용자 목록 저장
const users = new Map();

// Multer 설정 (이미지 업로드)
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// 웹소켓 연결
wss.on("connection", (ws) => {
  const userID = Date.now().toString(36); // 고유한 사용자 ID
  users.set(userID, { ws, name: `User-${userID}` });

  console.log(`🔗 사용자 ${userID} 연결됨`);
  broadcast({
    type: "info",
    message: `${users.get(userID).name}님이 입장하셨습니다.`,
  });

  // 메시지 처리
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === "setName") {
        users.get(userID).name = data.name;
        broadcast({
          type: "info",
          message: `${data.name}님이 닉네임을 설정했습니다.`,
        });
      } else if (data.type === "message") {
        broadcast({
          type: "message",
          name: users.get(userID).name,
          text: data.text,
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    } catch (error) {
      console.error("❌ 메시지 처리 오류:", error);
    }
  });

  // 연결 해제 처리
  ws.on("close", () => {
    const userName = users.get(userID).name;
    users.delete(userID);
    console.log(`❌ 사용자 ${userName} 연결 해제`);
    broadcast({ type: "info", message: `${userName}님이 퇴장하셨습니다.` });
  });
});

// 브로드캐스트 함수 (모든 사용자에게 메시지 전송)
function broadcast(data) {
  const json = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  });
}

// 이미지 업로드 API
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "파일 업로드 실패" });
  }
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// 클라이언트 페이지 제공
app.get("/", (req, res) => {
  res.render("client");
});

// 서버 실행
server.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});

const socketIO = require("socket.io");
const db = require("../db");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  let users = {}; // 사용자 목록 (socket.id -> username 매핑)

  io.on("connection", (socket) => {
    console.log(`🔗 클라이언트 연결됨: ${socket.id}`);

    // ✅ 기존 채팅 메시지 불러오기
    db.query(
      "SELECT * FROM chat_messages ORDER BY created_at ASC",
      (err, results) => {
        if (!err) {
          socket.emit("previousMessages", results);
        }
      }
    );

    // ✅ 사용자가 접속할 때 닉네임 등록
    socket.on("joinChat", (username) => {
      users[socket.id] = username;
      io.emit("notice", {
        message: `${username}님이 채팅방에 입장했습니다.`,
        type: "join",
      });
      io.emit("userList", Object.values(users));
    });

    // ✅ 전체 채팅 메시지 저장 및 전송
    socket.on("chatMessage", (data) => {
      console.log(`📩 전체 메시지: ${data.username}: ${data.message}`);

      const query =
        "INSERT INTO chat_messages (username, message) VALUES (?, ?)";
      db.query(query, [data.username, data.message], (err, result) => {
        if (!err) {
          io.emit("chatMessage", {
            id: result.insertId,
            username: data.username,
            message: data.message,
            created_at: new Date().toLocaleTimeString(),
          });
        }
      });
    });

    // ✅ 개인 DM 기능
    socket.on("privateMessage", ({ recipient, message }) => {
      const sender = users[socket.id];
      const recipientSocketId = Object.keys(users).find(
        (key) => users[key] === recipient
      );

      if (recipientSocketId) {
        io.to(recipientSocketId).emit("privateMessage", { sender, message });
        console.log(`📩 DM: ${sender} -> ${recipient}: ${message}`);
      } else {
        socket.emit("privateMessageError", "사용자를 찾을 수 없습니다.");
      }
    });

    // ✅ 사용자가 퇴장하면 공지 전송 및 목록 갱신
    socket.on("disconnecting", () => {
      const username = users[socket.id];
      delete users[socket.id];

      io.emit("notice", {
        message: `${username}님이 채팅방을 떠났습니다.`,
        type: "leave",
      });
      io.emit("userList", Object.values(users));
      console.log(`❌ 클라이언트 연결 해제: ${socket.id}`);
    });

    socket.on("disconnect", () => {
      console.log(`✅ 연결 종료: ${socket.id}`);
    });
  });
}

module.exports = socketHandler;

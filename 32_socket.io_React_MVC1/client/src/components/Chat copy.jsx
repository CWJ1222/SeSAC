import { useState, useEffect } from "react";
import io from "socket.io-client";
import "../style/Chat.css"; // ✅ CSS 파일 추가

const socket = io("http://localhost:8080", {
  autoConnect: true,
});

export default function Chat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // 전체 채팅 메시지
  const [notices, setNotices] = useState([]);
  const [users, setUsers] = useState([]);
  const [recipient, setRecipient] = useState("전체"); // 기본값을 "전체"로 설정
  const [privateMessages, setPrivateMessages] = useState([]); // 전체 DM 저장

  useEffect(() => {
    socket.on("previousMessages", (prevMessages) => {
      console.log("📜 기존 메시지 불러오기:", prevMessages);
      setMessages(prevMessages.slice(-4)); // 최근 4개 메시지만 유지
    });

    socket.on("chatMessage", (data) => {
      console.log("📩 새로운 채팅 메시지:", data);
      setMessages((prev) => [...prev, data].slice(-4)); // 최근 4개만 유지
    });

    socket.on("notice", (data) => {
      setNotices((prev) => [...prev, data].slice(-3)); // 최근 3개만 유지
    });

    socket.on("userList", (userList) => {
      setUsers(userList);
    });

    socket.on("privateMessage", (data) => {
      console.log("📩 개인 DM 수신:", data);
      setPrivateMessages((prev) => [...prev, data].slice(-10)); // 최근 10개만 유지
    });

    socket.on("privateMessageSent", (data) => {
      console.log("📤 개인 DM 발송:", data);
      setPrivateMessages((prev) => [...prev, data].slice(-10));
    });

    return () => {
      socket.off("previousMessages");
      socket.off("chatMessage");
      socket.off("notice");
      socket.off("userList");
      socket.off("privateMessage");
      socket.off("privateMessageSent");
    };
  }, []);

  const joinChat = () => {
    if (!username.trim()) return;
    socket.emit("joinChat", username);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !username.trim()) return;

    const newMessage = { sender: username, recipient, message };

    if (recipient === "전체") {
      socket.emit("chatMessage", { username, message });
    } else {
      socket.emit("privateMessage", newMessage);
      setPrivateMessages((prev) => [...prev, newMessage].slice(-10)); // ✅ 보낸 메시지를 UI에 직접 추가
    }

    setMessage("");
  };

  return (
    <div className="chat-container">
      {/* ✅ 좌측 공지사항 */}
      <div className="chat-left">
        <h3>📢 공지사항</h3>
        <div className="notice-container">
          {notices.map((notice, index) => (
            <p key={index} className="notice">
              {notice.message}
            </p>
          ))}
        </div>
      </div>

      {/* ✅ 중앙 채팅 화면 */}
      <div className="chat-content">
        <h2>📡 실시간 채팅</h2>

        <input
          type="text"
          placeholder="사용자명 입력"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={joinChat}
        />

        <form onSubmit={sendMessage} className="chat-input">
          <select
            onChange={(e) => setRecipient(e.target.value)}
            value={recipient}
          >
            <option value="전체">전체</option>
            {users
              .filter((user) => user !== username)
              .map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
          </select>

          <input
            type="text"
            placeholder="메시지 입력"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">전송</button>
        </form>

        <h3>
          💬 {recipient === "전체" ? "전체 채팅" : `📩 ${recipient}님과의 채팅`}
        </h3>
        <div className="chat-messages">
          {recipient === "전체"
            ? messages.map((msg, index) => (
                <p key={index} className="message received">
                  <strong>{msg.username}</strong>: {msg.message}
                </p>
              ))
            : privateMessages
                .filter(
                  (msg) =>
                    (msg.sender === recipient && msg.recipient === username) ||
                    (msg.sender === username && msg.recipient === recipient)
                )
                .map((msg, index) => (
                  <p
                    key={index}
                    className={
                      msg.sender === username
                        ? "message sent"
                        : "message received"
                    }
                  >
                    <strong>{msg.sender}:</strong> {msg.message}
                  </p>
                ))}
        </div>
      </div>

      {/* ✅ 우측 접속 중인 사용자 목록 */}
      <div className="user-sidebar">
        <h3>👥 접속 중</h3>
        <div className="user-list">
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

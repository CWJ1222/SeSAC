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
  const [privateMessage, setPrivateMessage] = useState("");
  const [recipient, setRecipient] = useState("전체"); // 기본값을 "전체"로 설정
  const [privateMessages, setPrivateMessages] = useState([]);

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
      setPrivateMessages((prev) => [...prev, data].slice(-4)); // 최근 4개만 유지
    });

    return () => {
      socket.off("previousMessages");
      socket.off("chatMessage");
      socket.off("notice");
      socket.off("userList");
      socket.off("privateMessage");
    };
  }, []);

  const joinChat = () => {
    if (!username.trim()) return;
    socket.emit("joinChat", username);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !username.trim()) return;

    if (recipient === "전체") {
      socket.emit("chatMessage", { username, message });
    } else {
      socket.emit("privateMessage", { recipient, message });
      setPrivateMessages((prev) =>
        [...prev, { sender: "나", message }].slice(-4)
      );
    }

    setMessage("");
  };

  return (
    <div className="chat-container">
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

      <h3>📢 공지사항</h3>
      {notices.map((notice, index) => (
        <p key={index} className="notice">
          {notice.message}
        </p>
      ))}

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
          : privateMessages.map((msg, index) => (
              <p key={index} className="message sent">
                <strong>{msg.sender}:</strong> {msg.message}
              </p>
            ))}
      </div>

      <h3>👥 현재 접속 중인 사용자</h3>
      <div className="user-list">
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

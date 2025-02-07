import { useState, useEffect, useRef } from "react";
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
  const [privateMessages, setPrivateMessages] = useState({}); // ✅ 개인 DM 저장 (객체)
  const chatRef = useRef(null); // ✅ 스크롤을 위한 Ref 추가

  useEffect(() => {
    socket.on("previousMessages", (prevMessages) => {
      setMessages(prevMessages.slice(-4)); // 최근 4개 메시지만 유지
    });

    socket.on("chatMessage", (data) => {
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

      setPrivateMessages((prev) => {
        const updatedMessages = { ...prev };
        if (!updatedMessages[data.sender]) {
          updatedMessages[data.sender] = [];
        }
        updatedMessages[data.sender] = [...updatedMessages[data.sender], data]
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at)) // 최신순 정렬
          .slice(-10); // 최근 10개 유지
        return updatedMessages;
      });

      scrollToBottom(); // ✅ 스크롤 자동 이동
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

    const newMessage = {
      sender: username,
      recipient,
      message,
      created_at: new Date().toISOString(),
    };

    if (recipient === "전체") {
      socket.emit("chatMessage", { username, message });
    } else {
      socket.emit("privateMessage", newMessage);

      setPrivateMessages((prev) => {
        const updatedMessages = { ...prev };
        if (!updatedMessages[recipient]) {
          updatedMessages[recipient] = [];
        }
        updatedMessages[recipient] = [...updatedMessages[recipient], newMessage]
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .slice(-10); // 최근 10개 유지
        return updatedMessages;
      });

      scrollToBottom(); // ✅ 메시지 전송 후 스크롤 이동
    }

    setMessage("");
  };

  // ✅ 스크롤을 최하단으로 이동
  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  // ✅ 사용자 목록에서 닉네임 클릭 시 해당 유저와의 DM 창으로 변경
  const handleUserClick = (user) => {
    if (user !== username) {
      setRecipient(user);
    }
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
        <div className="chat-messages" ref={chatRef}>
          {recipient === "전체"
            ? messages.map((msg, index) => (
                <p key={index} className="message received">
                  <strong>{msg.username}</strong>: {msg.message}
                </p>
              ))
            : (privateMessages[recipient] || []).map((msg, index) => (
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

      {/* ✅ 우측 접속 중인 사용자 목록 (클릭 가능) */}
      <div className="user-sidebar">
        <h3>👥 접속 중</h3>
        <div className="user-list">
          <ul>
            {users.map((user, index) => (
              <li
                key={index}
                onClick={() => handleUserClick(user)} // ✅ 클릭하면 해당 유저와의 DM 시작
                className={user === recipient ? "active-user" : ""}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

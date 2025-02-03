import React, { createContext, useContext, useState } from "react";

// Context 생성
const UserContext = createContext();

// Provider 작성
const UserProvider = ({ children }) => {
  const [name, setName] = useState(""); // 사용자 이름 상태 관리
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

const DisplayName = () => {
  const { name } = useContext(UserContext); // Context에서 name 상태 가져오기

  return <h1>Hello, {name || "Guest"}!</h1>;
};

const NameInput = () => {
  const { setName } = useContext(UserContext); // Context에서 setName 가져오기

  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={(e) => setName(e.target.value)} // 입력값으로 상태 업데이트
      style={{
        padding: "10px",
        fontSize: "16px",
        marginTop: "10px",
        width: "100%",
      }}
    />
  );
};

const App = () => {
  return (
    <UserProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <DisplayName />
        <NameInput />
      </div>
    </UserProvider>
  );
};

export default App;

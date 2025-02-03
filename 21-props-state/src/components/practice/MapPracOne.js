import React, { useState } from "react";

export default function MapPracOne() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]); // 이름과 이메일 리스트

  const addUser = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("이름과 이메일을 모두 입력해주세요.");
      return;
    }

    const newUser = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1, // 고유 ID 생성
      name,
      email,
    };

    setList([...list, newUser]); // 기존 리스트에 새 사용자 추가
    setName(""); // 이름 입력 필드 초기화
    setEmail(""); // 이메일 입력 필드 초기화
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };

  const deleteName = (id) => {
    const newList = list.filter((user) => user.id !== id); // id가 일치하지 않는 항목만 유지
    setList(newList); // 리스트 업데이트
  };

  return (
    <div>
      <h2>사용자 등록</h2>
      <div>
        <label>
          이름:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </label>
      </div>
      <div>
        <label onKeyDown={activeEnter}>
          이메일:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
        </label>
      </div>
      <button onClick={addUser}>등록</button>

      <h3>등록된 사용자</h3>
      <ol>
        {list.map((user) => (
          <li
            key={user.id}
            onDoubleClick={() => deleteName(user.id)} // 더블클릭 시 삭제
          >
            이름: {user.name}, 이메일: {user.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

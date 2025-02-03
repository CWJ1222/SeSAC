import { useState, useRef } from "react";

export default function MapPractice2() {
  const [comment, setComment] = useState([
    { writer: "민봉", title: "화이팅!!!" },
    { writer: "진우", title: "집에 가고 싶다..." },
    { writer: "규빈", title: "나는야 코딩 천재" },
  ]);
  const [inputWriter, setInputWriter] = useState(""); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(""); // 제목 등록 input
  const [tableColor, setTableColor] = useState("");

  const writerRef = useRef(null);
  const titleRef = useRef(null);
  const colorRef = useRef(null);

  const addComment = () => {
    // if (inputWriter.trim() === "" || inputTitle.trim() === "") {
    //   alert("작성자,제목 모두 입력하세요");
    //   return;
    // }

    if (inputWriter.trim() === "") {
      writerRef.current.focus();
      return;
    }
    if (inputTitle.trim() === "") {
      titleRef.current.focus();
      return;
    }

    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setInputTitle("");
    setInputWriter("");
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return; // IME 입력 중에는 동작하지 않음
    }
    if (e.key === "Enter") {
      addComment();
    }
  };

  const handleKeyDown2 = (e) => {
    if (e.key === "Enter") {
      applyColor();
    }
  };
  const applyColor = () => {
    const color = colorRef.current.value.trim();
    if (color) {
      setTableColor(color);
    }
    colorRef.current.value = "";
    colorRef.current.focus();
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          ref={writerRef}
        />{" "}
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={titleRef}
        />{" "}
        <button type="button" onClick={addComment}>
          작성
        </button>
        <br />
        <br />
        <input
          type="text"
          name="colorAdd"
          ref={colorRef}
          onKeyDown={handleKeyDown2}
        />
        <button type="button" onClick={applyColor}>
          색적용
        </button>
      </form>

      <table
        border={1}
        style={{
          margin: "30px auto",
          width: "500px",
          backgroundColor: tableColor, // 테이블 배경색을 상태로 연결
        }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentPage({ name }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>학생의 이름은 {name}입니다.</h1>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)} // 이전 페이지로 이동
      >
        이전 페이지로
      </button>
    </div>
  );
}

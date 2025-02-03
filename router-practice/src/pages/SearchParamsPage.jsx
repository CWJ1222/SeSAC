import React from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";

export default function SearchParamsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // URL 경로에서 "new"를 추출
  const pathSegment = location.pathname.split("/").pop();

  // Query string에서 "name" 값을 가져오기
  const name = searchParams.get("name");

  return (
    <div>
      <h1>
        학생의 이름은 {pathSegment}입니다. 실제 이름은 {name || "알 수 없음"}
        입니다.
      </h1>
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

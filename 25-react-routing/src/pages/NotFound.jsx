import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="Notfound">
      <h2>404 error!😩</h2>
      <Link to="/">홈으로 이동하기</Link>
    </div>
  );
}

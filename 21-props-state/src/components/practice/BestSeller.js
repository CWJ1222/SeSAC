import React from "react";
import exampleImage from "../images/L.jpeg";
import "../App.css";

export default function BestSeller({ title, author, price, type }) {
  return (
    <div>
      <h2 className="theme">이번주 베스트셀러</h2>
      <div>
        <img
          className="img"
          src={exampleImage}
          alt="베스트셀러이미지"
          width="200"
        />
      </div>
      <h3 className="title">제목 : {title}</h3>

      <div>저자 : {author}</div>
      <div>판매가 : {price}</div>
      <div>구분 : {type}</div>
    </div>
  );
}

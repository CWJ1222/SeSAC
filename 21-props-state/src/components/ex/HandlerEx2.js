import React, { useState } from "react";

export default function HandlerEx2() {
  const [CC, setCC] = useState("black");

  const changeR = () => {
    setCC("red");
  };
  const changeB = () => {
    setCC("blue");
  };

  return (
    <div>
      <h2 className="state" style={{ color: CC }}>
        검정색 글씨
      </h2>
      <button onClick={changeR}>빨간색</button>
      <button onClick={changeB}>파란색</button>
      <button onClick={() => setCC("black")}>검정색</button>
    </div>
  );
}

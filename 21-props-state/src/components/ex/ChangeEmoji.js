import React, { useState } from "react";

export default function ChangeEmoji() {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h2>
        {num}
        <br />
        {num > 7 ? "■ ■ ■ ■ ■ " : "□ □ □ □ □ "}
      </h2>
      <button onClick={inc}>1 증가</button>
      <button onClick={dec}>1 감소</button>
    </div>
  );
}

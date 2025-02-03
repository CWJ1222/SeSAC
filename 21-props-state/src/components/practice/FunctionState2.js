import React, { useState } from "react";

export default function FunctionState2() {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const decreaseNum = () => {
    setNum(num - 2);
  };

  return (
    <div>
      <p className="state">현재 값: {num}</p>
      <button onClick={increaseNum}>1 증가</button>
      <button onClick={decreaseNum}>2 감소</button>
    </div>
  );
}

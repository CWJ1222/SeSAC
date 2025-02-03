import React, { useState } from "react";

export default function HideHello() {
  const [isHidden, setIsHidden] = useState(false);

  const toggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <p style={{ color: isHidden ? "white" : "black" }}>안녕하세요!</p>
      <button onClick={toggle}>{isHidden ? "보여라" : "사라져라"}</button>
    </div>
  );
}

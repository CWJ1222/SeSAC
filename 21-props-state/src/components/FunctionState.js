import React, { useState } from "react";

export default function FunctionState() {
  // let apple = "사과";

  //   기존 js사용해서 화면 바꾸는 방식
  // const inEng = () => {
  //   // apple = "apple";
  //   const content = document.querySelector(".state");
  //   // console.log("🚀 ~ apple:", apple);
  //   content.innerHTML = "apple";
  // };

  //2. state 사용해서 화면을 변경
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };
  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       <button onClick={inEng2}>영어로 변경!!</button>
  //     </div>
  //   );

  //3. vainlla JS / 사과 - apple 누르면 왔다갔다 하게
  //   const changeLang = () => {
  //     const content = document.querySelector(".state");
  //     content.innerText === "사과"
  //       ? (content.innerText = "apple")
  //       : (content.innerText = "사과");
  //   };

  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button onClick={changeLang}>언어변경?</button>
  //     </div>
  //   );

  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    setShowEnglish(!showEnglish); //t->f, f->t 로 바꿔 줌
  };
  return (
    <div>
      <div className="state">{showEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLang2}>언어변경?</button>
    </div>
  );
}

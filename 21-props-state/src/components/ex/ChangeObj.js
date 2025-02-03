import React, { useState } from "react";

export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);

  const { name, age, nickName } = props.objArr[index];

  function getRandomIndex(currentIndex, length) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * length);
    } while (newIndex === currentIndex);
    return newIndex;
  }

  const changeMem = () => {
    const randomIndex = getRandomIndex(index, props.objArr.length);
    setIndex(randomIndex);
  };

  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>별명 : {nickName}</p>
      <button onClick={changeMem}>멤버바꾸기</button>
    </div>
  );
}

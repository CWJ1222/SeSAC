import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";

export default function Box() {
  const [inputValue, setInputValue] = useState(0); // 입력된 숫자 상태
  const count = useSelector((state) => state.count); // Redux 상태
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(countPlus(Number(inputValue))); // 입력값을 숫자로 변환하여 입금
    setInputValue(""); // 입력 필드 초기화
  };

  const handleWithdraw = () => {
    dispatch(countMinus(Number(inputValue))); // 입력값을 숫자로 변환하여 출금
    setInputValue(""); // 입력 필드 초기화
  };

  return (
    <div style={{ border: "1px solid skyblue", padding: "10px" }}>
      <p>잔액: {count.toLocaleString()}</p>

      <br />
      <h5>입출금 액 입력</h5>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // 입력값 업데이트
        placeholder="금액 입력"
      />
      <br />
      <br />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
    </div>
  );
}

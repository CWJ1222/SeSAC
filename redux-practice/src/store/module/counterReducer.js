const initialState = 0;

// 입금 액션 생성자
export const countPlus = (amount) => {
  return { type: "count/INCREMENT", payload: amount };
};

// 출금 액션 생성자
export const countMinus = (amount) => {
  return { type: "count/DECREMENT", payload: amount };
};

// 리듀서
export const counterReducer = (state = initialState, action) => {
  //   console.log(action);

  switch (action.type) {
    case "count/INCREMENT":
      return state + action.payload; // 입력된 금액만큼 추가
    case "count/DECREMENT":
      return state - action.payload; // 입력된 금액만큼 감소
    default:
      return state; // 변경되지 않은 상태 반환
  }
};

const initialState = 1;

export const countPlus = () => {
  return { type: "count/INCREMENT" };
};

export const countMinus = () => {
  return { type: "count/DECREMENT" };
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "count/INCREMENT":
      return state + 1;
    case "count/DECREMENT":
      return state - 1;
    default:
      return state; // 변경되지 않은 상태 반환
  }
};

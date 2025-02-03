const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "isData/CHANGE":
      return !state; // true/false 값을 토글
    default:
      return state; // 변경되지 않은 상태 반환
  }
};

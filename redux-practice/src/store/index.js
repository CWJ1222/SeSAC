import { combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "./module/counterReducer";

// store/index.js , 여러개의  reducer를 통합하는 역할
const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;

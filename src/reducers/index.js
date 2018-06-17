import { combineReducers } from "redux";
import counterReducer from "./counter";
import scoreReducer from "./score";
export default combineReducers({
  count: counterReducer,
  score: scoreReducer,
});

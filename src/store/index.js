import { createStore } from "redux";
import combineReducers from "../reducers";

const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for ReduxDevTools
);

export default store;

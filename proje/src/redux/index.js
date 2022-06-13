import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/reducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer
});

export const myStore = createStore(reducers);

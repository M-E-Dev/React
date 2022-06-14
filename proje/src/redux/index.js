import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/reducer";
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer
});

export const myStore = createStore(reducers);

import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/reducer";

// const reducers = combineReducers({
//   counterReducer: counterReducer
//   // todoReducer: todoReducer
// });

// export const counterStore = () => {
//   const store = createStore(reducers);
//   return store;
// };


export const counterStore = () => {
  const store = createStore(counterReducer);
  return store;
};

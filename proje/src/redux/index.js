import { createStore } from "redux";
import { counterReducer } from "./reducers/reducer";

export const counterStore = () => {
  const store = createStore(counterReducer);
  return store;
};

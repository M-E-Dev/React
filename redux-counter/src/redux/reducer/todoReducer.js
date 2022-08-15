import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

const INITIAL_STATE = {
  counter: 0,
  list: [{id: 0, text: "Add todo", completed: false}]
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, counter: state.counter + 1,
                list: [...state.list, {id: state.counter + 1, text: action.payLoad, completed: false}]
    };
    case DELETE_TODO:
      return { ...state, counter: state.counter - 1 };
    case CLEAR_TODO_LIST:
      return { state: INITIAL_STATE, counter: 0 };
    case TOGGLE_TODO:
      return { ...state, counter: 0 };
    default:
    // Başlangıçta action gelmezse hata vermesin
      return state;
  }
};

export default todoReducer;

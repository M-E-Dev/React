import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

export const addTodo = (payLoad) => {
    return{
        type: ADD_TODO,
        // payLoad: payLoad  ----- aynı ise alttaki gibi
        payLoad
    }
}
export const deleteTodo = (payLoad) => {
    return{
        type: DELETE_TODO,
        payLoad
    }
}
export const clearTodoList = () => {
    return{
        type: CLEAR_TODO_LIST,
    }
}
export const toggleTodo = (payLoad) => {
    return{
        type: TOGGLE_TODO,
        payLoad
    }
}
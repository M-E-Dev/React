import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

export const addTodo = (payLoad) => {
    return{
        type: ADD_TODO,
        payLoad: payLoad
    }
}
export const deleteTodo = (payLoad) => {
    return{
        type: DELETE_TODO
        payLoad: payLoad
    }
}
export const clearTodoList = (payLoad) => {
    return{
        type: CLEAR_TODO_LIST
        payLoad: payLoad
    }
}
export const toggleTodo = (payLoad) => {
    return{
        type: TOGGLE_TODO
        payLoad: payLoad
    }
}
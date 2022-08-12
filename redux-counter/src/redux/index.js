//configureStore kullan
import { combineReducers, createStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterReducer'

const reducers = combineReducers ({
    counterReducer : counterReducer,
    // todoReducer : todoReducer,
})

export const myStore = createStore(reducers)

// export const myStore = () => {
//     const store = createStore(reducers)
//     return store;
// };
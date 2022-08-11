//configureStore kullan
import { combineReducers, createStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterReducer'

const reducers = combineReducers ({

    counterReducer : counterReducer,
    // todoReducer : todoReducer,

})

const combinedStores = () => {
    const store = createStore(reducers)
    return store;
};

export default combinedStores;
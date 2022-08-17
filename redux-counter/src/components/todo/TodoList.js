import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { list } = useSelector((state) => state.todoReducer )
    
    const handleClearList = () => {

    }
    console.log(list)
    
    return(
        <div>
            <div>
                {
                    list.map((todo) => ( <TodoItem key={todo.id} {...todo} /> ))
                }
            </div>
            <div className='clear-wrapper'>
                <button onClick={handleClearList} className="clear-button">
                    Clear
                </button>
            </div>
        </div>
    )
}

export default TodoList
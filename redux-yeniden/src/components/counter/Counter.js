import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';

const Counter = () => {

    const {counter} = useSelector((state) => state.counterReducer)
    console.log(counter);

  return (
    <div className='app'>
        <h2 className='counter-header' >Counter With Redux</h2>
        <h1
        // className={counter > 0 ? "counter-pos": counter < 0 ? "counter-neg" : "counter-zero"}
        >
            counter
        </h1>
        <div>
            <button className="counter-button positive">increase</button>
            <button className="counter-button zero">reset</button>
            <button className="counter-button negative">decrease</button>
        </div>
    </div>
  )
}

export default Counter;
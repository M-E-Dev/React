import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function App() {
    
    const count = useSelector((state) => state.value);
    console.log(count);

    const dispatch = useDispatch()

    const handleIncrement = () => {dispatch(increment())};
    const handleDecrement = () => {dispatch(decrement())};
    const handleIncrementByAmount = () => {dispatch(incrementByAmount(5))};

    return (
        <div>
            <h1>Your count : {count}</h1>
            <button onClick={handleIncrement}>increment +1</button>
            <button onClick={handleDecrement}>decrement -1</button>
            <button onClick={handleIncrementByAmount}>increment +5</button>
        </div>
    )
}
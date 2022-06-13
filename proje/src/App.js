import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "./redux/actions/actions";
import { INCREASE_COUNTER } from "./redux/types/types";

function App() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter</h2>
        <div>
          <h1>{counter}</h1>
        </div>
        <div>
          {/* <button onClick={() => dispatch({type: INCREASE_COUNTER})}>increase</button> */}
          <button onClick={() => dispatch(increase())}>increase</button>
          <button onClick={() => dispatch(reset())}>reset</button>
          <button onClick={() => dispatch(decrease())}>decrease</button>
        </div>
      </header>
    </div>
  );
}

export default App;

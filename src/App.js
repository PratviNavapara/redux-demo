import "./App.css";
import {
  increment,
  decrement,
  incrementBy,reset,
  decrementBy,
} from "./features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <div>Hello</div>
      <div>Counter Demo using Redux toolkit</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <input type="text" value={count}></input>
        <button onClick={() => dispatch(decrement())}>-</button>
        <div>
          <button onClick={() => dispatch(incrementBy(10))}>
            Increment by 10
          </button>
          <button onClick={() => dispatch(decrementBy(5))}>
            decrement by 5
          </button>
        </div>
        <div>
        <button onClick={() => dispatch(reset())}>RESET</button>

        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { increment, decrement, multiply } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.Updown);
  return (
    <div className="App">
      <p>counter</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <input type="text" value={counter}></input>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(multiply(4))}>multiple</button>
      </div>
    </div>
  );
};

export default App;

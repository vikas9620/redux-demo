import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
const show = useSelector(state => state.showCounter)
  const incrementHandler = () => {
    dispatch({ type: "increment", value: 5});
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement", value: 5});
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

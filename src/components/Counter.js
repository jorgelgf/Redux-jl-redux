//otimizando usando hooks

import React from "react";
import { actions } from "../actions/counter";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../selectors/counter";
const Counter = () => {
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(actions.increment());
  const handleDecrement = () => dispatch(actions.decrement());
  return (
    <div style={{ margin: "auto 40px" }}>
      <h1>Counter: {counter}</h1>
      <ul>
        <li>
          <button onClick={handleIncrement}>Incremente</button>
        </li>
        <li>
          <button onClick={handleDecrement}>Decrement</button>
        </li>
      </ul>
    </div>
  );
};

export default Counter;

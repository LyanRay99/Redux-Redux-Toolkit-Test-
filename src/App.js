import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({
      type: 'Tang'
    })
  }

  const decrement = () => {
    dispatch({
      type: 'Giam'
    })
  }

  const mutiple = () => {
    dispatch({
      type: 'Nhan'
    })
  }

  const Reset = () => {
    dispatch({
      type: 'Reset'
    })
  }

  return (
    <div>
      <h1>This is Redux</h1>
      <p>Counter: {counter}</p>
      <div>
        <button onClick={increment}>Tang</button>
        <button onClick={decrement}>Giam</button>
        <button onClick={mutiple}>Nhan</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}
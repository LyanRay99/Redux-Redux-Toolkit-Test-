import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterSelector } from './Store/reducer/R_counter.js'
import { FCounter } from "./Store/reducer/R_counter.js";

export default function App() {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(FCounter.increment())
  }

  const decrement = () => {
    dispatch(FCounter.decrement())
  }

  const mutiple = () => {
    dispatch(FCounter.mutiple())
  }

  const Reset = () => {
    dispatch(FCounter.reset())
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
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from './Store/actions/a_counter'

export default function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(action.Tang())
  }

  const decrement = () => {
    dispatch(action.Giam())
  }

  const mutiple = () => {
    dispatch(action.Nhan())
  }

  const Reset = () => {
    dispatch(action.Reset())
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
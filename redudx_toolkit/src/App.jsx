import React, { useState } from "react"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice"
import { useDispatch, useSelector } from "react-redux"

function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  
  const dispatch = useDispatch();

  function handleIncrement() {
      dispatch(increment());
  }

  function handleDecrement() {
      dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
}
  function handleIncbyamount(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={handleDecrement}>-</button>
        <br></br>
        <button onClick={handleReset}>Reset</button>
        <br></br>
        <input
          type="Number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          >
        </input>
        <button onClick={handleIncbyamount}>Increment By Amount</button>
    </div>

  )
}

export default App

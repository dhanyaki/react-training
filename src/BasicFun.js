import React, { useState } from "react";

export default function BasicFun() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    //9+1 > 10
    if (counter + 1 > 10) {
      setCounter(1);
    } else {
      setCounter((prevCounter) => prevCounter+1); // 9+1 = 10
      setCounter((prevCounter) => prevCounter+1); // 10+1 = 11
    }
  };
  const decrement = () => {
    if (counter - 1 < 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <p>{counter}</p>
    </div>
  );
}

import React, { useState } from "react";

export default function BasicFun({setCart}) {
  const [counter, setCounter] = useState(0);
  const [isCart,setIsCart] = useState(false);
  const increment = () => {
    //9+1 > 10
    if (counter + 1 > 10) {
      setCounter(0);
    } else {
      setCounter((prevCounter) => prevCounter+1); // 9+1 = 10
    }
    if(!isCart){
      setCart((prevVal) => prevVal+1);
      setIsCart(true);
    }
  };
  const decrement = () => {
    if (counter - 1 < 0) {
      setCounter(0);
    } else {
      setCounter((prevCounter)=>prevCounter - 1);
    }
    if(counter -1 === 0){
      setCart((prevVal)=> prevVal -1)
    }
  };
  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      
    </div>
  );
}

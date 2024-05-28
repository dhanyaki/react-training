import React, { useState } from "react";
import BasicFun from "./BasicFun";

function CounterCart() {
  const [cart, setCart] = useState(0);
  return (
    <>
    <p>Cart &nbsp; {cart} &nbsp; items</p>
      <BasicFun setCart={setCart}/>
      <BasicFun setCart={setCart}/>
      <BasicFun setCart={setCart}/>
      <BasicFun setCart={setCart}/>
    </>
  );
}

export default CounterCart;

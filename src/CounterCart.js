import React, { useState } from "react";
import BasicFun from "./BasicFun";

function CounterCart() {
  const [cart, setCart] = useState(0);
  return (
    <div className='border p-5 m-5 w-50 mx-auto shadow rounded-5'>
    <p className="text-white bg-info  m-5 ">Cart &nbsp;{cart} &nbsp; items</p>
    
      <BasicFun setCart={setCart}/>
      <BasicFun setCart={setCart}/>
      <BasicFun setCart={setCart}/>
      <BasicFun setCart={setCart}/>
    </div>
  
  );
}

export default CounterCart;

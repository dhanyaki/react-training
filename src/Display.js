import React from "react";

function Display() {
  const name = "samba";
  const arr = [1,2,4,5,6,7];
  const arr_map = arr.map(ele=> ele+" ");
  return <h1>{arr_map}</h1>;
}
export default Display;

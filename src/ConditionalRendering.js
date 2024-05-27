import React, { useState } from "react";

function ConditionalRendering(props) {
  const [show, setShow] = useState(props.show);

  let ele = null;
  if (show) {
    ele = <Show />;
  } else {
    ele = <Hide />;
  }
  return (
    <>
    {props.show ? "true" :"false"}
      {ele}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show ? <Show /> : <Hide />}
      {show && <Show />}
      {!show && <Hide />}
    </>
  );
}
const Show = () => {
  return <h1>show</h1>;
};
const Hide = () => {
  return <h1>Hide</h1>;
};

export default ConditionalRendering;

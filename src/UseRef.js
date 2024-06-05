import React, { useEffect, useRef, useState } from "react";
import { useCustomButtons, useFetch } from "./CustomHook";

function UseRef() {
  const count = useRef(0);
  const dummyCount = useRef(0);
  const [_count, setCount] = useState(10);
  const inputRef = useRef();
  const prevVal = useRef();
  const [primaryButton] = useCustomButtons();
  const [data] = useFetch("https://api.restful-api.dev/objects")
  useEffect(() => {
    count.current = count.current + 1;
  });
  
  useEffect(() => {
    inputRef.current.focus();
    console.log('data',data);
  });
  useEffect(() => {
    prevVal.current = _count;
  }, [_count]);
  return (
    <div>
      <button onClick={() => setCount(_count + 1)} className="btn btn-primary">
        +1
      </button>
      <button
        onClick={() => {
          dummyCount.current = dummyCount.current + 1;
        }}
        className="btn btn-info"
      >
        update dummy
      </button>
      <p>{_count}</p>
      <p>dummy: {dummyCount.current}</p>
      <p>ref: {count.current}</p>
      <p>Previous value: {prevVal.current}</p>
      {primaryButton("primary button")}
      <input type="text" className="form-control mb-3" ref={inputRef} />
    </div>
  );
}

export default UseRef;

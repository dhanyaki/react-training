import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const count = useRef(0);
  const dummyCount = useRef(0);
  const [_count, setCount] = useState(10);
  const inputRef = useRef();
  const prevVal = useRef();
  useEffect(() => {
    count.current = count.current + 1;
  });
  useEffect(() => {
    inputRef.current.focus();
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

      <input type="text" className="form-control mb-3" ref={inputRef} />
    </div>
  );
}

export default UseRef;

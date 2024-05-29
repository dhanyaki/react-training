import React, { useState } from "react";

function Props(props) {
  const [names, setNames] = useState("");
  const _names = names.split(",");
  return (
    <>
      <input
        value={names}
        onChange={(e) => {
          setNames(e.target.value);
        }}
      />
      <PropChild _names={_names}/>
      {/* <div>
        <ul style={{ listStyle: "none" }}>
          {_names.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
      </div> */}
    </>
  );
}
function PropChild({ _names }) {
  return (
    <div>
        <ul style={{ listStyle: "none" }}>
          {_names.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
      </div>
  );
}

export default Props;

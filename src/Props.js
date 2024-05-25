import React, { useState } from "react";

function Props(props) {
  const [name, setName] = useState("samba");
  const [age] = useState(25);
  return (
    <>
      <div>
        {name} {age} {props.gender}
      </div>
      <PropChild {...{ name, setName }} />
    </>
  );
}
function PropChild({ name, setName }) {
  return (
    <input
      name="name"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}

export default Props;

import React from 'react'

function Props(props) {
    const {name, age} = props;
  return (
    <div>{name} {age} {props.gender}</div>
  )
}

export default Props
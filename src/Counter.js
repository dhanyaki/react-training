import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    if (this.state.counter + 1 > 10) {
      this.setState({ counter:1 });
    }
    else {

      this.setState({ counter: this.state.counter + 1 });
    }


  }



decrement()
{
  if (this.state.counter - 1 < 0) {
    this.setState({ counter: 0});
  }
  else {

    this.setState({ counter: this.state.counter - 1 });
  }
}



render(){
return (
  <>
    <button onClick={this.increment}>+1</button>
    <button onClick={this.decrement}>-1</button>
    <p>{this.state.counter}</p>
  </>

);
}
}



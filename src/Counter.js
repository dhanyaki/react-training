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
  static getDerivedStateFromProps(props, state) {
    //updting the initial state with props
    console.log("getDerivedStateFromProps");
    // return { name: props.name };
  }
  shouldComponentUpdate() {
    //this will tells whether component has to update or not
    console.log("should component update");
    return true;
  }
  componentDidMount() {
    //for any action or updation after the render
    console.log("component did mount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("previous values", prevProps.name, prevState);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  increment() {
    if (this.state.counter + 1 > 10) {
      this.setState({ counter: 1 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  decrement() {
    if (this.state.counter - 1 < 0) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.increment}>
          +1
        </button>
        <button className="btn btn-primary" onClick={this.decrement}>
          -1
        </button>
        <p>{this.state.counter}</p>
      </>
    );
  }
}

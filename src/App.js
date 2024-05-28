import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./Counter";
import BasicBootstrap from "./basicBootstrap";

class UnMount extends React.Component {
  componentWillUnmount() {
    console.log("component unmount");
  }

  render() {
    return <h1>UnMount component</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    //for declaring and intiating the state
    super(props);
    this.state = {
      name: "Ram",
      age: 19,
      show: true,
    };
  }

  handleClick = () => {
    this.setState({ name: "rakesh", age: 19 });
  };

  render() {
    console.log("render method", this.state.name);
    return (
      <div className="App">
        {this.state.name} {this.state.age}
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ name: "rakesh", age: 19 });
          }}
        >
          change name
        </button>
        {this.state.show ? <UnMount /> : null}
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ show: false, name: "rakesh", age: 19 });
          }}
        >
          hide child
        </button>
        <div className="counter">
          <Counter />
          <BasicBootstrap />
        </div>
      </div>
    );
  }
}

export default App;

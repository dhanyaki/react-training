import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter from "./Counter";

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
  handleClick = () => {
    this.setState({ name: "rakesh", age: 19 });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("previous values", prevProps.name, prevState);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    console.log("render method", this.state.name);
    return (
      <div className="App">
        {this.state.name} {this.state.age}
        <button
          onClick={() => {
            this.setState({ name: "rakesh", age: 19 });
          }}
        >
          change name
        </button>
        {this.state.show ? <UnMount /> : null}
        <button
          onClick={() => {
            this.setState({ show: false, name: "rakesh", age: 19 });
          }}
        >
          hide child
        </button>
        <div className="counter">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;

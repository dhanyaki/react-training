import "./App.css";
import React from "react";
import Counter from "./Counter";
import BasicFun from "./BasicFun";
import Props from "./Props";
import Display from "./Display";
import PropChild from "./PropChild";
import ConditionalRendering from "./ConditionalRendering";
import BmiCal from "./BmiCal";
import CounterCart from "./CounterCart";
import BasicBootstrap from "./basicBootstrap";
import Hooks from "./UseRef";

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
          <BmiCal/>
          <CounterCart/>
          <Hooks />
        </div>
      </div>
    );
  }
}

export default App;

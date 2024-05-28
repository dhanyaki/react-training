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


class UnMount extends React.Component {
    componentWillUnmount() {
        console.log("component unmount");
    }

    render() {
        return
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
                {/* <button
          onClick={() => {
            this.setState({ show: false, name: "rakesh", age: 19 });
          }}
        >
          hide child
        </button> */}
                <div className="counter">
                    {/* <h4>couter in class component: </h4>
          <Counter /> */}
          <h4>counter in functinal component: </h4>
          <BasicFun />
          {/*<h4>props example:</h4>
          <Props {...{ name: "samba", age: "25", gender: "male" }} />
          <h4>display example:</h4>
          <Display />
          <PropChild/>

          <h4>ConditionalRendering</h4>
          <ConditionalRendering show = {true}/> */}
                    <BmiCal />

                    <CounterCart />
                </div>
            </div>
        );
    }
}

export default App;

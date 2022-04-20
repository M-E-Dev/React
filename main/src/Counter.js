import React, { Component } from "react";
import "./CounterStyle.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Harry",
      count: 0,
    };
    console.log("constructor");
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  static getDerivedStateFromProps = (props, state) => {
    console.log("getDerivedStateFromProps", state);
    return null;
  };

  shouldComponentUpdate() {
    console.log("Should Update?");
    return true;
  }

  componentDidMount = () => {
    console.log("Component mounted!");
    console.log("-----------------");
  };

  componentDidUpdate() {
    console.log("Updated");
  }

  getSnapshotBeforeUpdate(prevprops, prevstate){
      console.log("Snapshot", prevstate)
      return null;
  }

  componentWillUnmount(){
      console.log("Will Unmount BYE")
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <p>counter: {this.state.count}</p>
        <button onClick={this.increase}>ARTTIR</button>
        <button onClick={this.decrease}>AZALT</button>
      </div>
    );
  }
}

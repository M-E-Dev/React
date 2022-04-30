import React, { Component } from "react";

export default class Recap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Constructor Method"
    };
  }

  render() {
    return (
      <div>
        <p>This is {this.state.name}</p>
      </div>
    );
  }
}

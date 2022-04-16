import React, {Component} from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>HOGWARTS</h1>
          <h1>School</h1>
          <h6>{this.props.name}</h6>
        </div>
      </div>
    );
  }
}


export default ClassComponent;

import React, { Component } from "react";

class ClassComponent extends Component {
    // state = {count:12}
    constructor(props) {
        super(props);
        this.state = {count:12}
    }
    render() {
        return(
            <div>
                <h1>ClassComponent</h1>
                <p>{this.props.name}</p>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default ClassComponent;
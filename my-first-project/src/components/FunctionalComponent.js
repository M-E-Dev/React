import React from "react";

function FunctionalComponent(props) {
    return (
        <div className="wrapper">
          <div>
            <h1>Harry Potter</h1>
            <h6>{props.name}</h6>
          </div>
        </div>
      );
}

export default FunctionalComponent;

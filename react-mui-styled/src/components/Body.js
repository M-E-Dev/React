import React from "react";
import cw from "../assets/cw_logo.png";

const Body = ({img}) => {
  console.log("Rendering: Body Component");
  return(
    <div className="Body">
      <img src={img ? img : cw} alt="cw_logo" style={{margin:"1rem", maxHeight: "200px"}} />
    </div>
  )
}
export default Body;

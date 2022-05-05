import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h2>Header</h2>
      <ul className="nav">
        <li>
        {/* <a href="/" >Home</a>  RENDER ALIYORDU  */}
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/profile" >Profile</Link>
        </li>
        <li>
          <Link to="/post" >Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

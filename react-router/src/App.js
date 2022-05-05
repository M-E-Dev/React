import React from "react";
import "./App.css"
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Home/>
      <About/>
      <Profile/>
    </Router>
  )
}

export default App
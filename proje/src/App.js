import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/hogwarts">
    {/* <Router forceRefresh ???> */}
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
};

export default App;

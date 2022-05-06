import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    {/* // <Router basename="/hogwarts"> */}
      {/* <Router forceRefresh ???> */}
      <div className="App">
        <Header />
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          {/* //match nedir? */}
          <Route path="post" element={<Post />} />
          <Route path="post/:name" element={<Post />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";

function App() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [text, setText] = useState("");
  console.log(text);
  const [search, setSearch] = useState("");
  console.log(search);



  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const resetSearch = () => {
    setSearch("");
  };




  return (
    <div className="App">
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
      <button onClick={() => setImg("")}>RESET</button>
      <Header img={img} />
      <p>Counter: {counter}</p>

    </div>
  );
}
export default App;

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import { Button } from "./components/Button.styles";


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
      <Button onClick={() => setImg(fs)}>FS</Button>
      <Button onClick={() => setImg(aws)}>AWS</Button>
      <Button onClick={() => setImg("")}>RESET</Button>
      <Header img={img} />
      <p>Counter: {counter}</p>

    </div>
  );
}
export default App;

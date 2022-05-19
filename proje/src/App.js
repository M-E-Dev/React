import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import { StyledButton1, StyledButton2 } from "./components/Button.styles";


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
      <StyledButton1 onClick={() => setImg(fs)}>FS</StyledButton1>
      <StyledButton1 onClick={() => setImg(aws)}>AWS</StyledButton1>
      <StyledButton2 onClick={() => setImg("")}>RESET</StyledButton2>
      <StyledButton2 >Grey</StyledButton2>
      <StyledButton2 dark>Dark</StyledButton2>
      <Header img={img} />
      <p>Counter: {counter}</p>

    </div>
  );
}
export default App;

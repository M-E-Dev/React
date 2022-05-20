import React, { useState, useEffect, useMemo, useCallback } from "react";
import Body from "./components/Body";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import { StyledButton1, StyledButton2 } from "./components/styled-comp/button/Button.styles";
import Wrapper from "./components/styled-comp/wrapper/Wrapper/Wrapper";
import HeaderText from "./components/styled-comp/header/HeaderText";


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
    <Wrapper col className="App">
      <StyledButton1 onClick={() => setImg(fs)}>FS</StyledButton1>
      <StyledButton1 onClick={() => setImg(aws)}>AWS</StyledButton1>
      <StyledButton1 onClick={() => setImg("")}>RESET</StyledButton1>
      <StyledButton2 >Grey</StyledButton2>
      <StyledButton2 dark>Dark</StyledButton2>
      <Body img={img} />
      <HeaderText>Hogwarts</HeaderText>

    </Wrapper>
  );
}
export default App;

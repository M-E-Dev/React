import React, { useState, useEffect, useMemo, useCallback } from "react";
import Body from "./components/Body";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import {
  StyledButton1,
  StyledButton2,
} from "./components/styled-comp/button/Button.styles";
import Wrapper from "./components/styled-comp/wrapper/Wrapper/Wrapper";
import HeaderText from "./components/styled-comp/header/HeaderText";
import Link from "./components/styled-comp/link/Link";
import ExtendedComp from "./components/styled-comp/extended-link/ExtendedComp";
import Buttons from "./components/material-ui/buttons/Buttons.js";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";
import TypographyComp from "./components/material-ui/typography/TypographyComp";
import WrapperComp from "./components/material-ui/wrapper/WrapperComp";
import Cards from "./components/material-ui/cards/Cards";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
  typography: {
    h2: {
      fontSize: 38,
      padding: 2,
    },
    subtitle1: {
      marginBottom: 5,
    },
  },
});

function App() {
  const [img, setImg] = useState();

  return (
    // // Material ui
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AppBarComp />
        <div className="App">
          <div className="App-header">
            <StyledButton/>
            <CheckBoxComp />
            <Buttons />
            <TypographyComp />
            <TextFieldComp />
            <WrapperComp />
            <Cards />
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>

    // // Styled Component
    // <Wrapper col className="App">
    //   <StyledButton1 onClick={() => setImg(fs)}>FS</StyledButton1>
    //   <StyledButton1 onClick={() => setImg(aws)}>AWS</StyledButton1>
    //   <StyledButton1 onClick={() => setImg("")}>RESET</StyledButton1>
    //   <StyledButton2 >Grey</StyledButton2>
    //   <StyledButton2 dark>Dark</StyledButton2>
    //   <Body img={img} />
    //   <HeaderText>Hogwarts</HeaderText>
    //   {/* // link rel="noopener" "noreferer" nedir? */}
    //   <Link href="https://www.instagram.com/" target="_blank" rel="noopener">INSTAGRAM</Link>
    //   <Link href="https://www.instagram.com/" target="_blank" rel="noopener" secondary>FACEBOOK</Link>
    //   <ExtendedComp >Extended Component link</ExtendedComp>

    // </Wrapper>
  );
}
export default App;

import React, { useState } from "react";
import { Container } from "@material-ui/core";

const WrapperComp = ({children}) => {
  return (
    <div>
      <Container>
          {children}
      </Container>
    </div>
  );
};

export default WrapperComp;

import React, { useState } from "react";
import { Container } from "@material-ui/core";

const WrapperComp = ({children}) => {
  return (
    <div>
      <Container maxWidth="md">
          {children}
      </Container>
    </div>
  );
};

export default WrapperComp;

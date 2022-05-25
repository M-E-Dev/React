import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const TextFieldComp = () => {
  return (
    <div>
      <TextField
        color="secondary"
        variant="filled"
        type="email"
        label="The email"
        placeholder="hogwarts@hmail.com"
      />
    </div>
  );
};

export default TextFieldComp;

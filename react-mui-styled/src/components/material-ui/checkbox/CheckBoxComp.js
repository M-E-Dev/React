import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { NetworkCheck } from "@material-ui/icons";

const CheckBoxComp = () => {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <FormControlLabel
    label="Wifi"
      control={
        <Checkbox icon={<NetworkCheck />} checkedIcon={<NetworkCheck />} onChange={(e)=> setIsChecked(e.target.checked)} checked={isChecked} />
      }
    >
      {/* <Checkbox /> */}
    </FormControlLabel>
  );
};

export default CheckBoxComp;

import React from "react";
import { Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";
import { ButtonGroup } from "@material-ui/core";


const Buttons = () => {
    return(
        <ButtonGroup variant="contained" size="large">
            <Button color="secondary"   startIcon={<Save color="disabled"/>} endIcon={<Save/>}>save</Button>
            <Button color="primary"     startIcon={<Delete color="secondary"/>} endIcon={<Delete/>}>delete</Button>
        </ButtonGroup>
    )
}
export default Buttons;
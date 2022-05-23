import React from "react";
import { Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";


const Buttons = () => {
    return(
        <div>
            <Button color="secondary" variant="contained" size="large" startIcon={<Save/>} endIcon={<Save/>}>save</Button>
            <Button color="primary" variant="contained" size="large" startIcon={<Delete/>} endIcon={<Save/>}>delete</Button>
        </div>
    )
}
export default Buttons;
import * as React from "react";
import {StyledInput} from "./styles/fields";
import {strings} from "../i18n";
import {Button} from "@mui/material";

export const BurnForm = () => {
    return(
        <div className="panel">
            <StyledInput placeholder={strings("burn.recipient_address_hint")}/>
            <StyledInput placeholder={strings("burn.amount_hint")}/>
            <div className="button_wrapper">
                <Button variant="contained" fullWidth={true}>{strings("burn.button")}</Button>
            </div>
        </div>
    )
}

import React, { useState } from "react";
import { Stepper } from "@material-ui/core";


export const NewDocumentRequest = (props) => {

    const [activeStep, setActiveStep] = useState(0)

    return (
        <div>
            <Stepper activeStep={activeStep}>

            </Stepper>
        </div>
    )
}
import React, { useState } from "react";
import { RadioGroup, FormControlLabel, FormLabel, Divider, Radio, Grid, FormControl } from "@material-ui/core";
import { NewDocumentRequestPersonForm } from "./NewDocumentRequestPersonForm";

export const NewDocumentRequestPersonTab = (props) => {

    const [personSaveType, setPersonSaveType] = useState("new")

    return (
        <div>
            <FormLabel component="legend">Person</FormLabel>
            <RadioGroup aria-label="person" name="person" value={personSaveType} onChange={(e) => setPersonSaveType(e.target.value)}>
                <Grid container spacing={1} xs={12} justify="center">
                    <Grid item xs={2} />
                    <Grid item xs={5}>
                        <FormControlLabel value="exist" control={<Radio />} label="Choose a existing one" />
                    </Grid>
                    <Grid item xs={5}>
                        <FormControlLabel value="new" control={<Radio />} label="Add a new one" />
                    </Grid>
                </Grid>
            </RadioGroup>

            <Divider />

            {personSaveType === "new" ? (
                <NewDocumentRequestPersonForm />
            ) : (
                    <div>
                        Choose One
                    </div>
                )}
        </div>
    )
}
import React, { useState } from "react";
import { RadioGroup, FormControlLabel, Divider, Radio, Grid } from "@material-ui/core";
import { NewDocumentRequestPersonForm } from "./NewDocumentRequestPersonForm";

import { connect } from "react-redux";
import { addPerson } from "../../actions/persons/index";

const NewDocumentRequestPersonTab = (props) => {

    const [personSaveType, setPersonSaveType] = useState("new")

    const personToSave = (person) => {
        props.addPerson(person)
    }

    return (
        <div>
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
                <NewDocumentRequestPersonForm onSavePerson={(person) => personToSave(person)} />
            ) : (
                    <div>
                        Choose One
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps, { addPerson })(NewDocumentRequestPersonTab)
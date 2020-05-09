import React, { useState } from "react";
import { RadioGroup, FormControlLabel, Divider, Radio, Grid } from "@material-ui/core";
import { NewDocumentRequestPersonForm } from "./NewDocumentRequestPersonForm";
import { useSnackbar } from "notistack";

import { connect } from "react-redux";
import { addPerson } from "../../actions/persons/index";
import PeopleSearch from "../person/PeopleSearch";

const NewDocumentRequestPersonTab = (props) => {

    const { enqueueSnackbar } = useSnackbar()

    const [personSaveType, setPersonSaveType] = useState("new")

    const personToSave = (person) => {
        props.addPerson(person)
        enqueueSnackbar("Person Sucessfuly added to List", { variant: "success" })
    }

    return (
        <div>
            <RadioGroup aria-label="person" name="person" value={personSaveType} onChange={(e) => setPersonSaveType(e.target.value)}>
                <Grid container spacing={1} justify="center">
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
                    <PeopleSearch />
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addPerson })(NewDocumentRequestPersonTab)
import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";

export const NewDocumentRequestPersonForm = (props) => {

    const [person, setPerson] = useState({
        name: "",
        surname: "",
        email: "",
        age: 0
    })

    const addPerson = (e) => {
        e.preventDefault();
        console.log(person)
    }

    return (
        <div>
            <form onSubmit={(e) => addPerson(e)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Surname" value={person.surname} onChange={(e) => setPerson({ ...person, surname: e.target.value })} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" value={person.email} onChange={(e) => setPerson({ ...person, email: e.target.value })} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Age" value={person.age} onChange={(e) => setPerson({ ...person, age: e.target.value })} type="number" />
                    </Grid>
                </Grid>

                <br />

                <Button variant="contained" type="submit" color="primary">Save</Button>
            </form>
        </div>
    )
}
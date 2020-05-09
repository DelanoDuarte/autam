import React, { useState } from "react";
import { Grid, TextField, Button, Divider } from "@material-ui/core";

const PeopleFormSearch = (props) => {

    const [person, setPerson] = useState({
        name: "",
        surname: "",
        email: "",
        age: 0
    })

    const onSearchPeople = (e) => {
        e.preventDefault();
        props.searchPeople(person)
    }

    return (
        <div>
            <form onSubmit={(e) => onSearchPeople(e)}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Name" value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Surname" value={person.surname} onChange={(e) => setPerson({ ...person, surname: e.target.value })} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Email" value={person.email} onChange={(e) => setPerson({ ...person, email: e.target.value })} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Age" value={person.age} onChange={(e) => setPerson({ ...person, age: e.target.value })} type="number" />
                    </Grid>
                </Grid>
                <br />
                <Grid container justify="flex-end">
                    <Button variant="contained" type="submit" color="primary">Search</Button>
                </Grid>
            </form>
        </div>
    )
}



export default PeopleFormSearch;
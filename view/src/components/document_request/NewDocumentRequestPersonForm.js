import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";

export const NewDocumentRequestPersonForm = (props) => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)

    return (
        <div>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
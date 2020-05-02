import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const NewDocumentRequestPersonForm = (props) => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)

    return (
        <div>
            <form>
                <div>
                    <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </form>
        </div>
    )
}
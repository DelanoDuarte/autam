import React, { useState } from "react";
import PeopleFormSearch from "./PeopleFormSearch";
import PeopleGridSearch from "./PeopleGridSearch";
import { Divider, Card, CardContent, CardHeader } from "@material-ui/core";

const PeopleSearch = (pros) => {

    const [peoples, setPeople] = useState([])

    const seachPerson = (person) => {
        console.log(person)
    }

    return (
        <div>
            <Card>
                <CardHeader title="Search a Person">
                </CardHeader>
                <CardContent>
                    <PeopleFormSearch searchPeople={(person) => seachPerson(person)} />
                    <br />
                    <Divider />
                    <PeopleGridSearch people={peoples} />
                </CardContent>
            </Card>
        </div>
    )
}

export default PeopleSearch;
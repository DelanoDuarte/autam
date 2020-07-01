import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const PeopleGridSearch = (props) => {

    const classes = useStyles()

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> <b>Name</b> </TableCell>
                            <TableCell> <b>Surname</b> </TableCell>
                            <TableCell> <b>Email</b> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.people.map((person) => (
                            <TableRow key={person.id}>
                                <TableCell component="th" scope="row">
                                    {person.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {person.surname}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {person.email}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

PeopleGridSearch.defaultProps = {
    people: []
}

export default PeopleGridSearch;
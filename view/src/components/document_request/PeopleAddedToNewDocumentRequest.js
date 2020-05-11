import React from "react";
import { connect } from "react-redux";
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, TableHead, makeStyles } from "@material-ui/core";
import { DoneAll } from "@material-ui/icons";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const GridPeopleAdded = ({ people }) => {

    const classes = useStyles()

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> <b>Person Name</b> </TableCell>
                            <TableCell> <b>Person Surname</b> </TableCell>
                            <TableCell> <b>Person Email</b> </TableCell>
                            <TableCell>  </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {people.map((person) => (
                            <TableRow key={person.name}>
                                <TableCell component="th" scope="row">
                                    {person.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {person.surname}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {person.email}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <DoneAll style={{ color: "green[500]" }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const PeopleAddedToNewDocumentRequest = (props) => {
    return (
        <div>
            <GridPeopleAdded people={props.people.people} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PeopleAddedToNewDocumentRequest)
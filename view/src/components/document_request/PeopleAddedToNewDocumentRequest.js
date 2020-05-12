import React, { useState } from "react";
import { connect } from "react-redux";
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, TableHead, makeStyles, IconButton, Collapse, Box } from "@material-ui/core";
import { DoneAll, KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import { Empty } from "../utils/empty/Empty";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const PersonRow = ({ person }) => {

    const [collapse, setCollapse] = useState(false)

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setCollapse(!collapse)}>
                        {collapse ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
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
                    <DoneAll style={{ color: 'green' }} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={collapse} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <p>Details</p>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

const GridPeopleAdded = ({ people }) => {

    const classes = useStyles()

    return (
        <div>
            {people.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>  </TableCell>
                                <TableCell> <b>Person Name</b> </TableCell>
                                <TableCell> <b>Person Surname</b> </TableCell>
                                <TableCell> <b>Person Email</b> </TableCell>
                                <TableCell>  </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {people.map((person) => (
                                <PersonRow key={person.name} person={person} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                    <Empty />
                )}
        </div>
    )
}

GridPeopleAdded.defaultProps = {
    people: []
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
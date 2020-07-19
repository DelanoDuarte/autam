import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const DocumentsTabGrid = (props) => {

    const classes = useStyles()

    if (props.documents) {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> <b>Document Type</b> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.documents.map((document) => (
                                <TableRow key={document.id}>
                                    <TableCell component="th" scope="row">
                                        {document.description}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

DocumentsTabGrid.defaultProps = {
    documents: []
};

export default DocumentsTabGrid


import React from "react";
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const DocumentsTabGrid = (props) => {

    const classes = useStyles()

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> <b>Document Name</b> </TableCell>
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
}

DocumentsTabGrid.defaultProps = {
    documents: []
};

export default DocumentsTabGrid


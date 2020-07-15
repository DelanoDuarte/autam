import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const DocumentTypeFolderGrid = (props) => {

    const classes = useStyles()

    if (props.documents) {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> <b>Document Name</b> </TableCell>
                                <TableCell> <b>Document Types</b> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.documents.map((document) => (
                                <TableRow key={document.id}>
                                    <TableCell component="th" scope="row">
                                        {document.name}
                                    </TableCell>

                                    {document.documentTypes ? (
                                        <TableCell component="th" scope="row">
                                            {document.documentTypes.length}
                                        </TableCell>
                                    ) : (
                                            <TableCell component="th" scope="row">
                                                No Document Types Added
                                            </TableCell>
                                        )}
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

DocumentTypeFolderGrid.defaultProps = {
    documents: []
};

export default DocumentTypeFolderGrid


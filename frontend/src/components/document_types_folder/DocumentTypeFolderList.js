import { Button, Dialog, DialogActions, DialogContent, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { DocumentTypeFolderAPI } from "../../services/DocumentTypeFolderAPI";
import DocumentTypeFolderGrid from "./DocumentTypeFolderGrid";

const useStyles = makeStyles({
    // table: {
    //     minWidth: 650,
    // },
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
})

const DocumentTypesDetailsDialog = ({ docTypes, open, onCloseDialog }) => {

    const classes = useStyles()

    return (
        <Dialog open={open} onClose={() => onCloseDialog()} aria-labelledby="form-dialog-title">
            <DialogContent>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> <b>Document Type</b> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {docTypes && (
                                docTypes.map((document) =>
                                    <TableRow key={document.id}>
                                        <TableCell component="th" scope="row">
                                            {document.description}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onCloseDialog()} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export const DocumentTypeFolderList = (props) => {

    const [docTypesFolders, setDocTypeFolders] = useState([])
    const [docTypeDialogOpen, setDocTypeDialogOpen] = useState(false)

    const [docTypesDetails, setDocTypesDetails] = useState([])

    const showDocumenTypeDetails = (docTypes) => {
        setDocTypesDetails(docTypes)
        setDocTypeDialogOpen(true)
    }

    useEffect(() => {
        DocumentTypeFolderAPI.findAll()
            .then(data => {
                setDocTypeFolders(data)
            })
    }, [])

    return (
        <div>
            <DocumentTypeFolderGrid documents={docTypesFolders}
                onDocumentTypeDetails={(docTypes) => showDocumenTypeDetails(docTypes)} />
            <DocumentTypesDetailsDialog open={docTypeDialogOpen}
                onCloseDialog={() => setDocTypeDialogOpen(false)}
                docTypes={docTypesDetails} />
        </div>
    )
}
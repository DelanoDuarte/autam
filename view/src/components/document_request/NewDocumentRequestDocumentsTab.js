import React, { useState } from "react";
import DocumentsTabGrid from "./DocumentsTabGrid";

import { connect } from "react-redux";
import { Divider, Grid, Button, Dialog, TextField, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

import { addDocument } from "../../actions/document-type/index";
import { useSnackbar } from "notistack";

const DialogAddDocumentType = (props) => {

    const [documentType, setDocumentType] = useState("")

    const addDocumentType = (docType) => {
        const documentType = { name: docType }
        props.documentTypeToAdd(documentType)
        props.onDialogClose()
    }

    return (
        <Dialog open={props.dialogOpen} onClose={() => props.onDialogClose()} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a Document Type</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="document"
                    label="Document Type"
                    type="text"
                    fullWidth
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onDialogClose()} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => addDocumentType(documentType)} color="primary">
                    Add Document Type
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const NewDocumentRequestDocumentsTab = (props) => {

    const { enqueueSnackbar } = useSnackbar()

    const [dialogOpen, setDialogOpen] = useState(false)

    const addDocumentTypeToList = (docType) => {
        props.addDocument(docType)
        enqueueSnackbar("Document Type Added Sucessfuly", { variant: "success" })
        console.log(props)
    }

    return (
        <div>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Button color="primary" variant="contained" onClick={() => setDialogOpen(true)}>
                    Add a Document Type
                </Button>
            </Grid>
            <br />
            <Divider />
            <DocumentsTabGrid documents={props.documents.documents} />
            <DialogAddDocumentType documentTypeToAdd={(doc) => addDocumentTypeToList(doc)} dialogOpen={dialogOpen} onDialogClose={() => setDialogOpen(false)} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addDocument })(NewDocumentRequestDocumentsTab);
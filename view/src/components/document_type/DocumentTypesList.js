import React, { useState, useEffect } from "react";
import { DocumentTypeAPI } from "../../services/DocumentTypeAPI";
import DocumentsTabGrid from "../document_request/DocumentsTabGrid";
import { Grid, Button, Dialog, DialogTitle, TextField, DialogActions, DialogContent, makeStyles } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

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

export const DocumentTypesList = (props) => {

    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()

    const [documents, setDocuments] = useState([])
    const [dialogOpen, setDialogOpen] = useState(false)

    const fetchDocumentTypes = () => DocumentTypeAPI.fetchAllDocumentTypes().then(data => setDocuments(data.document_types))

    const addDocumentTypeToList = (docType) => {
        props.addDocument(docType)
        enqueueSnackbar("Document Type Added Sucessfuly", { variant: "success" })
    }

    useEffect(() => {
        fetchDocumentTypes()
    }, [])

    return (
        <div>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid item>
                    <Button size="small" startIcon={<AddCircle />} color="primary" className={classes.margin} variant="contained" onClick={() => setDialogOpen(true)}>
                        Add
                    </Button>
                </Grid>
            </Grid>
            <DocumentsTabGrid documents={documents} />
            <DialogAddDocumentType documentTypeToAdd={(doc) => addDocumentTypeToList(doc)} dialogOpen={dialogOpen} onDialogClose={() => setDialogOpen(false)} />
        </div>
    )
}
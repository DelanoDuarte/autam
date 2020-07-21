import React, { useState } from "react";
import { makeStyles, Grid, Button, Dialog, DialogTitle, DialogActions, TextField, DialogContent } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const DialogAddDocumentRequestType = (props) => {

    const [documentRequestType, setDocumentRequestType] = useState("")

    const addDocumentType = (docType) => {
        const documentRequestType = { name: docType }
        props.documentRequestTypeToAdd(documentRequestType)
        props.onDialogClose()
    }

    return (
        <Dialog open={props.dialogOpen} onClose={() => props.onDialogClose()} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a Document Request Type</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="document"
                    label="Document Request Type"
                    type="text"
                    fullWidth
                    value={documentRequestType}
                    onChange={(e) => setDocumentRequestType(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onDialogClose()} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => addDocumentType(documentRequestType)} color="primary">
                    Add Document Request Type
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const SaveDocumentRequestType = (props) => {

    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = useState(false)

    const addDocumentRequestTypeToList = (docType) => {
        props.addDocument(docType)
    }

    return (
        <div>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid item>
                    <Button size="small" startIcon={<AddCircle />} color="primary" className={classes.margin} variant="contained"
                        onClick={() => setDialogOpen(true)}>
                        Add
                    </Button>
                </Grid>
            </Grid>
            <DialogAddDocumentRequestType documentRequestTypeToAdd={(doc) => addDocumentRequestTypeToList(doc)}
                dialogOpen={dialogOpen} onDialogClose={() => setDialogOpen(false)} />
        </div>
    )
}

export default SaveDocumentRequestType;
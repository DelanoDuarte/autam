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

const DialogAddDocumentType = (props) => {

    const [documentType, setDocumentType] = useState("")

    const addDocumentType = (docType) => {
        const documentType = { description: docType }
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

const SaveDocumentTypeDialod = (props) => {

    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = useState(false)

    const addDocumentTypeToList = (docType) => {
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
            <DialogAddDocumentType documentTypeToAdd={(doc) => addDocumentTypeToList(doc)} dialogOpen={dialogOpen} onDialogClose={() => setDialogOpen(false)} />
        </div>
    )
}

export default SaveDocumentTypeDialod;
import React, { useState } from "react";
import DocumentsTabGrid from "./DocumentsTabGrid";

import { connect } from "react-redux";
import { Divider, Grid, Button, Dialog, TextField, DialogActions, DialogContent, DialogTitle, makeStyles } from "@material-ui/core";
import { AddCircle, SearchOutlined } from "@material-ui/icons";


import { addDocument } from "../../actions/document-type/index";
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

const NewDocumentRequestDocumentsTab = (props) => {

    const classes = useStyles()

    const { enqueueSnackbar } = useSnackbar()

    const [dialogOpen, setDialogOpen] = useState(false)

    const addDocumentTypeToList = (docType) => {
        props.addDocument(docType)
        enqueueSnackbar("Document Type Added Sucessfuly", { variant: "success" })
    }

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

                <Grid item>
                    <Button size="small" startIcon={<SearchOutlined />} color="secondary" variant="contained" className={classes.margin}>
                        Search
                    </Button>
                </Grid>
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
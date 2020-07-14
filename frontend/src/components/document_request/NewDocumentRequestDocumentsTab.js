import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, makeStyles } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DOCUMENT_ACTIONS } from "../../actions/document-type";
import { DocumentTypeAPI } from "../../services/DocumentTypeAPI";
import DocumentsTabGrid from "./DocumentsTabGrid";
import { SearchDocumentType } from "./SearchDocumentType";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const SearchDialog = (props) => {

    const [docTypes, setDocTypes] = useState([])
    const dispatch = useDispatch()

    const addDocumentType = () => {
        dispatch({ type: DOCUMENT_ACTIONS.ADD_DOCUMENT, payload: docTypes })
        props.onDialogClose()
    }

    return (
        <div>
            <Dialog open={props.dialogOpen} onClose={() => props.onDialogClose()}
                maxWidth="md" fullWidth={true} scroll="paper">
                <DialogTitle id="form-dialog-title">Search a document type</DialogTitle>
                <DialogContent dividers={true}>
                    <SearchDocumentType documentTypes={props.documentTypes} documentTypesToAdd={(dts) => setDocTypes(dts)} />
                    <Divider />
                </DialogContent>
                <DialogActions>
                    <Button disabled={docTypes.length === 0}
                        onClick={() => addDocumentType()}
                        color="primary">
                        Save
                    </Button>
                    <Button onClick={() => props.onDialogClose()} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const NewDocumentRequestDocumentsTab = (props) => {

    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [docTypes, setDocTypes] = useState([])

    const documentTypesSaved = useSelector(state => state.documents.documents)

    useEffect(() => {
        DocumentTypeAPI.fetchAllDocumentTypes()
            .then(data => {
                if (data) {
                    const mapDataToOptionValue = data.map(d => ({ value: d, label: d.description }))
                    setDocTypes(mapDataToOptionValue)
                }
            })
    }, [])

    return (
        <div>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">

                <Grid item>
                    <Button size="small"
                        startIcon={<SearchOutlined />}
                        style={{ backgroundColor: 'green', color: 'white' }}
                        variant="contained" className={classes.margin}
                        onClick={() => setDialogOpen(true)}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            <br />

            <Divider />
            <DocumentsTabGrid documents={documentTypesSaved} />
            <SearchDialog dialogOpen={dialogOpen}
                documentTypes={docTypes}
                onDialogClose={() => setDialogOpen(false)} />
        </div>
    )
}


export default NewDocumentRequestDocumentsTab;
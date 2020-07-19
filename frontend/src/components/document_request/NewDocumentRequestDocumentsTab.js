import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, makeStyles, Paper } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DOCUMENT_ACTIONS } from "../../actions/document-type";
import { DocumentTypeAPI } from "../../services/DocumentTypeAPI";
import DocumentsTabGrid from "./DocumentsTabGrid";
import { SearchDocumentType } from "./SearchDocumentType";
import { SearchDocumentTypeFolder } from "./SearchDocumentTypeFolder";
import { DocumentTypeFolderAPI } from "../../services/DocumentTypeFolderAPI";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
}));

const SearchDialog = (props) => {

    const classes = useStyles()
    const [docTypes, setDocTypes] = useState([])
    const [documentTypes, setDocumentTypes] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        DocumentTypeAPI.fetchAllDocumentTypes()
            .then(data => {
                if (data) {
                    const mapDataToOptionValue = data.map(d => ({ value: d.id, label: d.description, obj: d }))
                    setDocumentTypes(mapDataToOptionValue)
                }
            })
    }, [])

    const addDocumentType = () => {
        dispatch({ type: DOCUMENT_ACTIONS.ADD_DOCUMENT, payload: docTypes })
        props.onDialogClose()
    }

    return (
        <div>
            <Dialog open={props.dialogOpen} onClose={() => props.onDialogClose()}
                maxWidth="md" fullWidth={true} scroll="paper"
                classes={{ paper: classes.dialogPaper }}>
                <DialogTitle id="form-dialog-title">Search a document type</DialogTitle>
                <DialogContent dividers={true}>

                    <Paper elevation={3} >
                        <SearchDocumentType documentTypes={documentTypes} documentTypesToAdd={(dts) => setDocTypes(dts)} />
                    </Paper>
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

const SearchDialogDocumentTypeFolder = (props) => {

    const classes = useStyles()
    const [docTypes, setDocTypes] = useState([])
    const [documentTypeFolders, setDocumentTypeTypeFolders] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        DocumentTypeFolderAPI.findAll()
            .then(data => {
                if (data) {
                    const mapDataToOptionValue = data.map(d => ({ value: d.id, label: d.name, obj: d }))
                    setDocumentTypeTypeFolders(mapDataToOptionValue)
                }
            })
    }, [])

    const addDocumentType = () => {
        dispatch({ type: DOCUMENT_ACTIONS.ADD_DOCUMENT, payload: docTypes })
        props.onDialogClose()
    }

    return (
        <div>
            <Dialog open={props.dialogOpen} onClose={() => props.onDialogClose()}
                maxWidth="md" fullWidth={true} scroll="paper"
                classes={{ paper: classes.dialogPaper }}>
                <DialogTitle id="form-dialog-title">Search a Document Type Folder</DialogTitle>
                <DialogContent dividers={true}>

                    <Paper elevation={3} >
                        <SearchDocumentTypeFolder documentTypeFolders={documentTypeFolders} documentTypesToAdd={(dts) => setDocTypes(dts)} />
                    </Paper>
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
    const [dialogOpenDocumentFolder, setDialogOpenDocumentFolder] = useState(false)

    const documentTypesSaved = useSelector(state => state.documents.documents)

    return (
        <div>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">

                <Grid item>
                    <Button size="small"
                        startIcon={<SearchOutlined />}
                        style={{ backgroundColor: 'blue', color: 'white' }}
                        variant="contained"
                        className={classes.margin}
                        onClick={() => setDialogOpenDocumentFolder(true)}>
                        Document Type Folder
                    </Button>
                    <Button size="small"
                        startIcon={<SearchOutlined />}
                        style={{ backgroundColor: 'green', color: 'white' }}
                        variant="contained"
                        className={classes.margin}
                        onClick={() => setDialogOpen(true)}>
                        Document Type
                    </Button>
                </Grid>
            </Grid>
            <br />

            <Divider />
            <DocumentsTabGrid documents={documentTypesSaved} />

            <SearchDialog
                dialogOpen={dialogOpen}
                onDialogClose={() => setDialogOpen(false)} />

            <SearchDialogDocumentTypeFolder
                dialogOpen={dialogOpenDocumentFolder}
                onDialogClose={() => setDialogOpenDocumentFolder(false)} />
        </div>
    )
}


export default NewDocumentRequestDocumentsTab;
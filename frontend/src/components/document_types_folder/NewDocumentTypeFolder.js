import React from "react";
import { FormNewDocumentTypeFolder } from "./FormNewDocumentTypeFolder";
import { Typography, Divider, Paper, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { DocumentTypeFolderAPI } from "../../services/DocumentTypeFolderAPI";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));

export const NewDocumentTypeFolder = (props) => {

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()

    const saveNewDocumentTypeFolder = (docsTypeFolder) => {
        DocumentTypeFolderAPI.create(docsTypeFolder)
            .then(() => {
                enqueueSnackbar("Document Type Folder Sucessfuly Saved", { variant: "success" })
            })
            .then(() => history.push("/document-types-folder"))
            .catch(error => {
                enqueueSnackbar("Error on save Document Type Folder", { variant: "warning" })
            })
    }

    return (
        <div>
            <Typography variant="h4">New Document Type Folder</Typography>
            <Divider />
            <br />

            <Paper elevation={3} className={classes.paper}>
                <FormNewDocumentTypeFolder onSaveDocumentTypeFolder={(data) => saveNewDocumentTypeFolder(data)} />
            </Paper>
        </div>
    )
}
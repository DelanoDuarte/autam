import React from "react";
import { Typography, Divider, Grid, Button, makeStyles } from "@material-ui/core";
import { DocumentTypeFolderList } from "./DocumentTypeFolderList";
import { useHistory } from "react-router-dom";
import { AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export const IndexDocumentTypeFolder = (props) => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <div>
            <Typography variant="h4">Document Type Folder</Typography>
            <Divider />
            <br />


            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid item>
                    <Button size="small" startIcon={<AddCircle />} color="primary" className={classes.margin} variant="contained"
                        onClick={() => history.push("/document-types-folder/new")}>
                        New
                    </Button>
                </Grid>
            </Grid>
            <DocumentTypeFolderList />
        </div>
    )
}
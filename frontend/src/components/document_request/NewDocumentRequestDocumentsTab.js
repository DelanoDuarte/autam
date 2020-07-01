import React, { useState } from "react";
import DocumentsTabGrid from "./DocumentsTabGrid";

import { connect } from "react-redux";
import { Divider, Grid, Button, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

import { addDocument } from "../../actions/document-type/index";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const SearchDialog = (props) => {
    return (
        <div>
            <Dialog open={props.dialogOpen} onClose={() => props.onDialogClose()} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Search a document type</DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
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
            <DocumentsTabGrid documents={props.documents.documents} />
            <SearchDialog dialogOpen={dialogOpen} onDialogClose={() => setDialogOpen(false)} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addDocument })(NewDocumentRequestDocumentsTab);
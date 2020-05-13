import React from "react";
import DocumentsTabGrid from "./DocumentsTabGrid";

import { connect } from "react-redux";
import { Divider, Grid, Button, makeStyles } from "@material-ui/core";
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

const NewDocumentRequestDocumentsTab = (props) => {

    const classes = useStyles()

    return (
        <div>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">

                <Grid item>
                    <Button size="small" startIcon={<SearchOutlined />} style={{ backgroundColor: 'green', color: 'white' }} variant="contained" className={classes.margin}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            <br />

            <Divider />
            <DocumentsTabGrid documents={props.documents.documents} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addDocument })(NewDocumentRequestDocumentsTab);
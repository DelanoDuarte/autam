import React from "react";
import { Divider, Typography, Toolbar, AppBar, IconButton, Badge, makeStyles } from "@material-ui/core";
import { NewDocumentRequest } from "./NewDocumentRequest";

import { PeopleAltRounded, FileCopyOutlined } from "@material-ui/icons";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const IndexDocumentRequest = (props) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="sticky" color="default">
                <Toolbar >
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        New Document Request
                    </Typography>


                    <IconButton aria-controls="menu-appbar"
                        color="inherit">
                        <Badge badgeContent={props.people.people.length} color="secondary">
                            <PeopleAltRounded />
                        </Badge>
                    </IconButton>


                    <IconButton edge="end" aria-controls="menu-appbar"
                        color="inherit">
                        <Badge badgeContent={props.documents.documents.length} color="secondary">
                            <FileCopyOutlined />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Divider />

            <NewDocumentRequest />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(IndexDocumentRequest)
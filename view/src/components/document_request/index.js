import React from "react";
import { Divider, Typography, Toolbar, AppBar, IconButton, Badge, makeStyles } from "@material-ui/core";
import { NewDocumentRequest } from "./NewDocumentRequest";

import { PeopleAltRounded, FileCopyOutlined } from "@material-ui/icons";

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

export const IndexDocumentRequest = (props) => {

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
                        <Badge badgeContent={1} color="secondary">
                            <PeopleAltRounded />
                        </Badge>
                    </IconButton>


                    <IconButton edge="end" aria-controls="menu-appbar"
                        color="inherit">
                        <Badge badgeContent={1} color="secondary">
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
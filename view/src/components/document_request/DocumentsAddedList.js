import React from "react";
import { connect } from "react-redux";
import { makeStyles, ListItem, ListItemText, List, Avatar, ListItemAvatar, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { FolderOpen, Delete } from "@material-ui/icons";
import { Empty } from "../utils/empty/Empty";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 400,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    }
}));

const ListDocuments = ({ documents }) => {

    const classes = useStyles()

    return (
        <div>
            {documents.length > 0 ? (
                <List className={classes.root}>
                    {documents.map(d => (
                        <ListItem button key={d.name}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderOpen />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={d.name} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" style={{ color: "red" }}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <Empty />
                )}
        </div>
    )
}

const DocumentsAddedList = (props) => {
    return (
        <div>
            <ListDocuments documents={props.documents.documents} />
        </div >
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(DocumentsAddedList)
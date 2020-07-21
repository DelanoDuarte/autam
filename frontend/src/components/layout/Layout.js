import { Badge, Collapse } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountBoxOutlined, Add, ExpandLess, ExpandMore, FileCopyOutlined, FileCopyRounded, FindInPageOutlined, Flag, FolderOpenOutlined, HomeOutlined, Notifications, ListAlt, Settings } from "@material-ui/icons";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const NestedMenuListItem = ({ label, icon, children }) => {

    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <ListItem button onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {/* <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem> */}
                    {children}
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export const Layout = (props) => {


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Autam Home
                    </Typography>

                    <IconButton edge="end" aria-controls="menu-appbar"
                        color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button key="Home" to="/" component={Link}>
                        <ListItemIcon> <HomeOutlined /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <NestedMenuListItem label="Request" icon={<FileCopyOutlined />}>
                        <ListItem button className={classes.nested} to="/document-request" component={Link}>
                            <ListItemIcon>
                                <Add />
                            </ListItemIcon>
                            <ListItemText primary="New Request" />
                        </ListItem>
                        <ListItem button className={classes.nested} to="/" component={Link}>
                            <ListItemIcon>
                                <ListAlt />
                            </ListItemIcon>
                            <ListItemText primary="All Requests" />
                        </ListItem>
                    </NestedMenuListItem>

                    <NestedMenuListItem label="Parameters" icon={<Settings />}>
                        <ListItem button className={classes.nested} key="Document Types" to="/document-types" component={Link}>
                            <ListItemIcon> <FindInPageOutlined /> </ListItemIcon>
                            <ListItemText primary="Document Types" />
                        </ListItem>

                        <ListItem button className={classes.nested} key="Document Types Folder" to="/document-types-folder" component={Link}>
                            <ListItemIcon> <FolderOpenOutlined /> </ListItemIcon>
                            <ListItemText primary="Document Types Folder" />
                        </ListItem>

                        <ListItem button className={classes.nested} key="Document Request Type" to="/document-request-type" component={Link}>
                            <ListItemIcon> <FileCopyRounded /> </ListItemIcon>
                            <ListItemText primary="Document Request Type" />
                        </ListItem>
                    </NestedMenuListItem>


                    <ListItem button key="Document Request Process" to="/" component={Link}>
                        <ListItemIcon> <Flag /> </ListItemIcon>
                        <ListItemText primary="Document Request Process" />
                    </ListItem>

                    <ListItem button key="People" to="/" component={Link}>
                        <ListItemIcon> <AccountBoxOutlined /> </ListItemIcon>
                        <ListItemText primary="People" />
                    </ListItem>


                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

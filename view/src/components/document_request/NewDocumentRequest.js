import React, { useState } from "react";
import { Tabs, Tab, AppBar, Box, makeStyles } from "@material-ui/core";
import { PeopleAltOutlined, FileCopyOutlined, CheckCircle } from "@material-ui/icons";
import NewDocumentRequestPersonTab from "./NewDocumentRequestPersonTab";
import NewDocumentRequestDocumentsTab from "./NewDocumentRequestDocumentsTab";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tab"
            hidden={value !== index}
            id={`tab-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export const NewDocumentRequest = (props) => {

    const classes = useStyles();
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Tabs variant="fullWidth" value={activeTab} onChange={(e, v) => setActiveTab(v)}>
                    <Tab label="Person" icon={<PeopleAltOutlined />} />
                    <Tab label="Documents" icon={<FileCopyOutlined />} />
                    <Tab label="Conclusion" icon={<CheckCircle />} />
                </Tabs>
                <TabPanel value={activeTab} index={0}>
                    <NewDocumentRequestPersonTab />
                </TabPanel>

                <TabPanel value={activeTab} index={1}>
                    <NewDocumentRequestDocumentsTab />
                </TabPanel>

                <TabPanel value={activeTab} index={2}>

                </TabPanel>
            </AppBar>
        </div>
    )
}
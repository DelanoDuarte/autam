import React, { useState } from "react";
import { Tabs, Tab, AppBar, Box, makeStyles, Card, CardContent } from "@material-ui/core";
import { PeopleAltOutlined, FileCopyOutlined, CheckCircle } from "@material-ui/icons";
import NewDocumentRequestPersonTab from "./NewDocumentRequestPersonTab";
import NewDocumentRequestDocumentsTab from "./NewDocumentRequestDocumentsTab";
import NewDocumentRequestConclusionTab from "./NewDocumentRequestConclusionTab";
import { useSnackbar } from "notistack";
import { DocumentRequestAPI } from "../../services/DocumentRequestAPI";

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

    const { enqueueSnackbar } = useSnackbar()

    const classes = useStyles();
    const [activeTab, setActiveTab] = useState(0)

    const saveRequest = (documentRequest) => {
        console.log("Save request action")
        console.log(documentRequest)
        DocumentRequestAPI.saveDocumentRequest(documentRequest)
            .then((responseDocumentRequest) => {
                if (responseDocumentRequest.messages.length > 0) {
                    responseDocumentRequest.messages.forEach(message => {
                        enqueueSnackbar(message.shortMessage, { variant: message.messageType.toLowerCase() })
                    });
                } else {
                    enqueueSnackbar("Document Requests successfully created.", { variant: "success" })
                }
            })
            .catch(error => {
                enqueueSnackbar("Error on save Document Type", { variant: "warning" })
            })
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Tabs variant="fullWidth" value={activeTab} onChange={(e, v) => setActiveTab(v)}>
                    <Tab label="Person" icon={<PeopleAltOutlined />} />
                    <Tab label="Documents" icon={<FileCopyOutlined />} />
                    <Tab label="Conclusion" icon={<CheckCircle />} />
                </Tabs>
            </AppBar>
            <Card elevation={2}>
                <CardContent>
                    <TabPanel value={activeTab} index={0}>
                        <NewDocumentRequestPersonTab />
                    </TabPanel>

                    <TabPanel value={activeTab} index={1}>
                        <NewDocumentRequestDocumentsTab />
                    </TabPanel>

                    <TabPanel value={activeTab} index={2}>
                        <NewDocumentRequestConclusionTab onSaveRequest={(documentRequest) => saveRequest(documentRequest)} />
                    </TabPanel>
                </CardContent>
            </Card>
        </div>
    )
}
import { Button, Card, CardContent, CardHeader, Divider, Grid, makeStyles } from "@material-ui/core";
import { FileCopyRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import DocumentsAddedList from "./DocumentsAddedList";
import { FormDocumentRequest } from "./FormDocumentRequest";
import PeopleAddedToNewDocumentRequest from "./PeopleAddedToNewDocumentRequest";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    card_content: {
        paddingBottom: '90px'
    }
}));

const NewDocumentRequestConclusionTab = (props) => {

    const [documentRequestType, setDocumentRequestType] = useState({})
    const [documentRequestName, setDocumentRequestTypeName] = useState(undefined)

    const classes = useStyles()
    const requestHasPeopleAndDocuments = () => props.people.people.length === 0 && props.documents.documents.length === 0

    const onSaveRequest = () => {
        const documentRequest = {
            "name": documentRequestName,
            "documentRequestType": { ...documentRequestType },
            "people": props.people.people,
            "documentTypes": props.documents.documents
        }
        console.log('Save Document Request', documentRequest)
        props.onSaveRequest(documentRequest)
    }

    return (
        <React.Fragment> 
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">

                <Grid item>
                    <Button size="small" startIcon={<FileCopyRounded />}
                        style={{ backgroundColor: 'green', color: 'white' }}
                        variant="contained"
                        className={classes.margin}
                        disabled={requestHasPeopleAndDocuments()}
                        onClick={() => onSaveRequest()}>
                        Open Requests
                    </Button>
                </Grid>
            </Grid>

            <Divider />
            <br />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card elevation={3} className={classes.card_content}>
                        <CardHeader title="Document Request Info">
                        </CardHeader>
                        <CardContent>
                            <FormDocumentRequest
                                emitDocumentRequestInfo={(docRequestInfo) => setDocumentRequestType(docRequestInfo)}
                                emitDocumentRequestName={(name) => setDocumentRequestTypeName(name)} />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={8}>
                    <Card elevation={2}>
                        <CardHeader title="People that will receive the Document Request">
                        </CardHeader>
                        <CardContent>
                            <PeopleAddedToNewDocumentRequest />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card elevation={3}>
                        <CardHeader title="Documents of Request">
                        </CardHeader>
                        <CardContent>
                            <DocumentsAddedList />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(NewDocumentRequestConclusionTab);
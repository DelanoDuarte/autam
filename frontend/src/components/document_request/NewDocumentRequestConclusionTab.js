import React from "react";
import { connect } from "react-redux";
import PeopleAddedToNewDocumentRequest from "./PeopleAddedToNewDocumentRequest";
import { Grid, Card, CardHeader, CardContent, Button, makeStyles, Divider } from "@material-ui/core";
import DocumentsAddedList from "./DocumentsAddedList";
import { FileCopyRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const NewDocumentRequestConclusionTab = (props) => {

    const classes = useStyles()

    const requestHasPeopleAndDocuments = () => props.people.people.length === 0 && props.documents.documents.length === 0
    const onSaveRequest = () => props.onSaveRequest()

    return (
        <div>
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
                <Grid item xs={8}>
                    <Card elevation={3}>
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(NewDocumentRequestConclusionTab);
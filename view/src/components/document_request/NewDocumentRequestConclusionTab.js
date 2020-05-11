import React from "react";
import { connect } from "react-redux";
import PeopleAddedToNewDocumentRequest from "./PeopleAddedToNewDocumentRequest";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import DocumentsAddedList from "./DocumentsAddedList";

const NewDocumentRequestConclusionTab = (props) => {
    return (
        <div>
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
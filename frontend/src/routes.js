
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import IndexDocumentRequest from "./components/document_request";
import { IndexDocumentType } from "./components/document_type";
import { IndexDocumentTypeFolder } from "./components/document_types_folder";
import { NewDocumentTypeFolder } from "./components/document_types_folder/NewDocumentTypeFolder";
import { IndexDocumentRequestType } from "./components/document_request_type";
import { DocumentRequestList } from "./components/document_request/DocumentRequestList";
import { SignIn } from "./components/login/SignIn";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/signIn" exact>
                <SignIn />
            </Route>

            {/* Document Request */}
            <Route path="/document-request" exact>
                <IndexDocumentRequest />
            </Route>

            <Route path="/document-request/list" exact>
                <DocumentRequestList />
            </Route>

            {/* Document Type */}
            <Route path="/document-types" exact>
                <IndexDocumentType />
            </Route>

            {/* Document Type Folder */}
            <Route path="/document-types-folder" exact>
                <IndexDocumentTypeFolder />
            </Route>
            <Route path="/document-types-folder/new" exact>
                <NewDocumentTypeFolder />
            </Route>

            {/* Document Request Type */}
            <Route path="/document-request-type" exact>
                <IndexDocumentRequestType />
            </Route>

        </Switch>
    )
}


import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import IndexDocumentRequest from "./components/document_request";
import { IndexDocumentType } from "./components/document_type";
import { IndexDocumentTypeFolder } from "./components/document_types_folder";
import { NewDocumentTypeFolder } from "./components/document_types_folder/NewDocumentTypeFolder";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/document-request" exact>
                <IndexDocumentRequest />
            </Route>
            <Route path="/document-types" exact>
                <IndexDocumentType />
            </Route>
            <Route path="/document-types-folder" exact>
                <IndexDocumentTypeFolder />
            </Route>
            <Route path="/document-types-folder/new" exact>
                <NewDocumentTypeFolder />
            </Route>
        </Switch>
    )
}

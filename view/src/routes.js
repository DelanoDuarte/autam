
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import IndexDocumentRequest from "./components/document_request";
import { IndexDocumentType } from "./components/document_type";

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
        </Switch>
    )
}

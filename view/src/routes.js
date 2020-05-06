
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import IndexDocumentRequest from "./components/document_request";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/document-request" exact>
                <IndexDocumentRequest />
            </Route>
        </Switch>
    )
}

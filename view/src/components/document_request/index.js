import React from "react";
import { Divider } from "@material-ui/core";
import { NewDocumentRequest } from "./NewDocumentRequest";

export const IndexDocumentRequest = (props) => {
    return (
        <div>
            <h3>New Document Request</h3>
            <Divider />

            <NewDocumentRequest />
        </div>
    )
}
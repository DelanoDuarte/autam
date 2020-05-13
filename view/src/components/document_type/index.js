import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { DocumentTypesList } from "./DocumentTypesList";

export const IndexDocumentType = (props) => {
    return (
        <div>
            <Typography variant="h4">Document Types</Typography>
            <Divider />
            <br />
            
            <DocumentTypesList />
        </div>
    )
}
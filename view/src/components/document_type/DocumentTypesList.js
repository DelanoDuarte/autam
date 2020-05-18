import React from "react";
import DocumentsTabGrid from "../document_request/DocumentsTabGrid";

export const DocumentTypesList = ({ documents }) => {

    return (
        <div>
            <DocumentsTabGrid documents={documents} />
        </div>
    )
}
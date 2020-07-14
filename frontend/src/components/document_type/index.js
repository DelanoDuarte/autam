import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@material-ui/core";
import { DocumentTypesList } from "./DocumentTypesList";
import { DocumentTypeAPI } from "../../services/DocumentTypeAPI";
import { useSnackbar } from "notistack";
import SaveDocumentTypeDialod from "./SaveDocumentTypeDialog";

export const IndexDocumentType = (props) => {

    const { enqueueSnackbar } = useSnackbar()
    const [documents, setDocuments] = useState([])

    const fetchDocumentTypes = () => DocumentTypeAPI.fetchAllDocumentTypes().then(data => setDocuments(data))

    useEffect(() => {
        fetchDocumentTypes()
    }, [])

    const save_doc_type = (doc_type) => {
        DocumentTypeAPI.saveDocumentType(doc_type)
            .then(data => {
                enqueueSnackbar("Document Type Sucessfuly Saved", { variant: "success" })
            }).then(() => {
                fetchDocumentTypes()
            })
            .catch(error => {
                enqueueSnackbar("Error on save Document Type", { variant: "warning" })
            })
    }

    return (
        <div>
            <Typography variant="h4">Document Types</Typography>
            <Divider />
            <br />

            <SaveDocumentTypeDialod addDocument={(doc) => save_doc_type(doc)} />
            <DocumentTypesList documents={documents} />
        </div>
    )
}
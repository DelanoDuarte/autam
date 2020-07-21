import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@material-ui/core";
import { DocumentRequestTypeList } from "./DocumentRequestTypeList";
import SaveDocumentRequestType from "./SaveDocumentRequestType";
import { DocumentRequestTypeAPI } from "../../services/DocumentRequestTypeAPI";
import { useSnackbar } from "notistack";

export const IndexDocumentRequestType = (props) => {

    const { enqueueSnackbar } = useSnackbar()
    const [documentsRequestTypes, setDocumentsRequestTypes] = useState([])

    const fetchDocumentRequestTypes = () => DocumentRequestTypeAPI.fetchAllDocumentRequestTypes().then(data => setDocumentsRequestTypes(data))

    useEffect(() => {
        fetchDocumentRequestTypes()
    }, [])

    const saveDocumentRequestType = (docRequestType) => {
        DocumentRequestTypeAPI.saveDocumentRequestType(docRequestType)
            .then(data => {
                enqueueSnackbar("Document Type Sucessfuly Saved", { variant: "success" })
            }).then(() => {
                fetchDocumentRequestTypes()
            })
            .catch(error => {
                enqueueSnackbar("Error on save Document Type", { variant: "warning" })
            })
    }

    return (
        <div>
            <Typography variant="h4">Document Request Type</Typography>
            <Divider />
            <br />

            <SaveDocumentRequestType addDocument={(docRequestType) => saveDocumentRequestType(docRequestType)} />
            <DocumentRequestTypeList documentsRequestTypes={documentsRequestTypes} />
        </div>
    )
}
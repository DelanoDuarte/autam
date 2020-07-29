import React, { useState, useEffect } from "react";
import { GridComponent } from "../utils/GridComponent";
import { TableRow, TableCell, Typography, Divider } from "@material-ui/core";
import { DocumentRequestAPI } from "../../services/DocumentRequestAPI";

export const DocumentRequestList = (props) => {

    const [documentRequests, setDocumentRequests] = useState([])

    useEffect(() => {
        DocumentRequestAPI.findAllDocumentRequests()
            .then(data => {
                setDocumentRequests(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Typography variant="h4">Document Requests</Typography>
            <Divider />
            <br />

            <GridComponent columns={
                <TableRow>
                    <TableCell> <b>Document Request Name</b> </TableCell>
                    <TableCell> <b>Document Request Date</b> </TableCell>
                    <TableCell> <b>Document Request Type</b> </TableCell>
                </TableRow>
            }>
                {documentRequests.map((document) => (
                    <TableRow key={document.id}>
                        <TableCell component="th" scope="row">
                            {document.name == null ? (
                                <p> - </p>
                            ) : (
                                    <div>
                                        {document.name}
                                    </div>
                                )}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {document.creationDate}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {document.documentRequestType.name}
                        </TableCell>
                    </TableRow>
                ))}
            </GridComponent>
        </div>
    )
}
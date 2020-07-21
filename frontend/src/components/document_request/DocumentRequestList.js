import React from "react";
import { GridComponent } from "../utils/GridComponent";
import { TableRow, TableCell } from "@material-ui/core";

export const DocumentRequestList = (props) => {
    return (
        <div>
            <GridComponent columns={
                <TableRow>
                    <TableCell> <b>Document Request Name</b> </TableCell>
                    <TableCell> <b>Document Request Date</b> </TableCell>
                    <TableCell> <b>Document Request Type</b> </TableCell>
                </TableRow>
            }>
                {props.documentRequests.map((document) => (
                    <TableRow key={document.id}>
                        <TableCell component="th" scope="row">
                            {document.name}
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
import React from "react";
import { GridComponent } from "../utils/GridComponent";
import { TableRow, TableCell, Switch, FormControlLabel } from "@material-ui/core";

export const DocumentRequestTypeList = (props) => {
    return (
        <div>
            <GridComponent columns={
                <TableRow>
                    <TableCell> <b>Document Request Types</b> </TableCell>
                    <TableCell> <b>Document Request Type Active</b> </TableCell>
                </TableRow>
            }>
                {props.documentsRequestTypes.map((document) => (
                    <TableRow key={document.id}>
                        <TableCell component="th" scope="row">
                            {document.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {document.active}
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={document.active}
                                        name="active"
                                        color="primary"
                                    />
                                }
                                label="Active"
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </GridComponent>
        </div>
    )
}


DocumentRequestTypeList.defaultProps = {
    documentsRequestTypes: []
};
import { Box, Collapse, Divider, IconButton, TableCell, TableRow, Typography, Grid, Input, TextField } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { DocumentRequestAPI } from "../../services/DocumentRequestAPI";
import { GridComponent } from "../utils/GridComponent";

export const DocumentRequestList = (props) => {

    const [collapse, setCollapse] = useState(false)
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
                    <TableCell> </TableCell>
                    <TableCell> <b>Document Request Name</b> </TableCell>
                    <TableCell> <b>Created at</b> </TableCell>
                    <TableCell> <b>Type</b> </TableCell>
                </TableRow>
            }>
                {documentRequests.map((document) => (
                    <React.Fragment key={document.id}>
                        <TableRow key={document.id}>
                            <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setCollapse(!collapse)}>
                                    {collapse ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                </IconButton>
                            </TableCell>
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
                                {document.createdDate}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {document.documentRequestType.name}
                            </TableCell>
                        </TableRow>
                        <TableRow key={`${document.id}${document.person.id}`}>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={collapse} timeout="auto" unmountOnExit>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Person
                                    </Typography>
                                    <Box margin={1}>
                                        <Box margin={1}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} sm={4}  >
                                                    <TextField value={`${document.person.name}  ${document.person.surname}`}
                                                        label="Name" disabled />
                                                </Grid>
                                                <Grid item xs={12} sm={4}  >
                                                    <TextField value={`${document.person.email}`}
                                                        label="Email" disabled />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </React.Fragment>
                ))}
            </GridComponent>
        </div>
    )
}
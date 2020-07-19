import { Divider, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import DocumentsTabGrid from "./DocumentsTabGrid";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const DocumentTypesTabGrid = (props) => {

    const documentsTypeStored = useSelector(state => state.documents.documents)
    const classes = useStyles()

    if (props.documents) {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> <b>Document Type</b> </TableCell>
                                <TableCell> <b></b> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.documents.map((document) => (
                                <TableRow key={document.id}>
                                    <TableCell component="th" scope="row">
                                        {document.description}
                                    </TableCell>

                                    <TableCell>
                                        {documentsTypeStored.some(d => d.id === document.id) && (
                                            <CheckCircle style={{ color: 'green' }} />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

DocumentsTabGrid.defaultProps = {
    documents: []
};


export const SearchDocumentTypeFolder = ({ documentTypeFolders, documentTypesToAdd }) => {

    const [isLoading, setIsLoading] = useState(false)

    const [docTypesFromFolder, setDocTypesFromFolder] = useState([])

    const formatSelectedValuesAndAdd = (docTypesFolders) => {
        if (docTypesFolders) {
            const documentTypes = docTypesFolders.obj.documentTypes
            setDocTypesFromFolder(documentTypes)
            documentTypesToAdd(documentTypes)
        }
    }

    if (documentTypeFolders) {
        return (
            <div>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isLoading={isLoading}
                    isSearchable={true}
                    key="id"
                    name="color"
                    options={documentTypeFolders}
                    onChange={(dtf) => formatSelectedValuesAndAdd(dtf)}
                />

                <Divider />
                <DocumentTypesTabGrid documents={docTypesFromFolder} />
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}
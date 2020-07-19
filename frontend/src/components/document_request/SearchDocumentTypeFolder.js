import { Divider, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Icon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import DocumentsTabGrid from "./DocumentsTabGrid";
import { CheckCircle } from "@material-ui/icons";


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

    const documentsTypeStored = useSelector(state => state.documents.documents)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedDocumentsOnStore, setSelectedDocumentsOnStore] = useState([])

    const [docTypesFromFolder, setDocTypesFromFolder] = useState([])

    useEffect(() => {
        filterDocumentTypeFolderByDocumentTypeSelected()
    }, [])

    const filterDocumentTypeFolderByDocumentTypeSelected = () => {
        if (documentTypeFolders && documentTypeFolders.documentTypes) {
            const docTypes = documentTypeFolders.documentTypes

            const filteredDocTypes = docTypes.filter((o) => documentsTypeStored.indexOf(o) !== -1)
            setSelectedDocumentsOnStore(filteredDocTypes.map(d => ({ value: d.id, label: d.description })))
        }
    }

    const formatSelectedValuesAndAdd = (docTypesFolders) => {
        if (docTypesFolders) {
            const documentTypes = docTypesFolders.value.documentTypes
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
                    defaultValue={selectedDocumentsOnStore}
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
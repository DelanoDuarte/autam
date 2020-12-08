import { Grid, InputLabel, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { DocumentRequestTypeAPI } from "../../services/DocumentRequestTypeAPI";

export const FormDocumentRequest = props => {

    const [documentRequestInfo, setDocumentRequestInfo] = useState({
        name: '',
        documentRequestType: ""
    })

    const [documentRequestTypes, setDocumentRequestTypes] = useState([])
    const [isLoadingDocumentRequestTypes, setIsLoadingDocumentRequestTypes] = useState(false)

    const onChangeName = (name) => {
        setDocumentRequestInfo({ ...documentRequestInfo, name: name })
        props.emitDocumentRequestName(documentRequestInfo.name)
        console.log(documentRequestInfo)
    }

    const onChangeSelect = (selectedDocumentRequestType) => {
        setDocumentRequestInfo({ ...documentRequestInfo, documentRequestType: selectedDocumentRequestType.obj })
        props.emitDocumentRequestInfo(selectedDocumentRequestType.obj)
    }


    useEffect(() => {
        DocumentRequestTypeAPI.fetchAllDocumentRequestTypes()
            .then(data => {
                setIsLoadingDocumentRequestTypes(true)
                const mapDataToOptionValue = data.map(d => ({ value: d.id, label: d.name, obj: d }))
                setDocumentRequestTypes(mapDataToOptionValue)
            })
            .finally(() => setIsLoadingDocumentRequestTypes(false))
    }, [])

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                    <TextField
                        id="standard-full-width"
                        label="Request Name"
                        style={{ margin: 8 }}
                        fullWidth
                        name="name"
                        value={documentRequestInfo.name}
                        onChange={(e) => onChangeName(e.target.value)}
                        margin="normal"
                    />
                </Grid>

            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="docRequestType">Document Request Type</InputLabel>
                    <Select
                        id="docRequestType"
                        className="basic-single"
                        classNamePrefix="select"
                        styles={{
                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                            menu: provided => ({ ...provided, zIndex: "9999 !important" })
                        }}
                        isLoading={isLoadingDocumentRequestTypes}
                        isSearchable={true}
                        key="id"
                        name="color"
                        options={documentRequestTypes}
                        onChange={(drt) => onChangeSelect(drt)}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
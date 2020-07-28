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

    const onChangeName = (e) => {
        setDocumentRequestInfo({ ...documentRequestInfo, name: e.target.value })
        props.emitDocumentRequestInfo(documentRequestInfo)
        console.log(documentRequestInfo)
    }

    const onChangeSelect = (selectedDocumentRequestType) => {
        console.log(selectedDocumentRequestType)
        const documentRequestType = { documentRequestType: selectedDocumentRequestType.obj }
        setDocumentRequestInfo({ ...documentRequestInfo, documentRequestType: documentRequestType })
        props.emitDocumentRequestInfo(documentRequestType)
    }


    useEffect(() => {
        DocumentRequestTypeAPI.fetchAllDocumentRequestTypes()
            .then(data => {
                const mapDataToOptionValue = data.map(d => ({ value: d.id, label: d.name, obj: d }))
                setDocumentRequestTypes(mapDataToOptionValue)
            })
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
                        onChange={(e) => onChangeName(e)}
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
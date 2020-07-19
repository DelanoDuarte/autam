import { Button, Grid, makeStyles, TextField, FormControlLabel, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { DocumentTypeAPI } from "../../services/DocumentTypeAPI";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export const FormNewDocumentTypeFolder = (props) => {

    const classes = useStyles();
    const { control, handleSubmit } = useForm()
    const [documentTypes, setDocumentTypes] = useState([])

    useEffect(() => {
        DocumentTypeAPI.fetchAllDocumentTypes()
            .then(data => {
                const mappedData = data.map(d => ({ label: d.description, value: d.id, obj: d }))
                setDocumentTypes(mappedData)
            })

    }, [])

    const onSubmit = data => {
        console.log(data)
        const docTypes = data.documentTypes.map(d => d.obj)
        const docTypeFolder = {
            name: data.name,
            documentTypes: docTypes
        }
        props.onSaveDocumentTypeFolder(docTypeFolder)
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} >
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={props => <TextField label="Name" fullWidth required {...props} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="select-doc-types">Document Types</InputLabel>
                        <Controller
                            name="documentTypes"
                            control={control}
                            defaultValue={[]}
                            rules={{ required: true }}
                            render={props =>
                                <Select
                                    id="select-doc-types"
                                    options={documentTypes}
                                    isMulti
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isSearchable={true}
                                    {...props} />} />
                    </Grid>


                    <Grid item xs={6}>
                        <Button type="submit" variant="contained"
                            color="primary">
                            Save
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </React.Fragment>
    )
} 
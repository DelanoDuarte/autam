import { Button } from "@material-ui/core";
import MaterialUIInput from "@material-ui/core/Input";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { DocumentTypeAPI } from "../../services/DocumentTypeAPI";

export const FormNewDocumentTypeFolder = (props) => {

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
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    as={MaterialUIInput}
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    className="materialUIInput"
                />

                <br />

                <Controller
                    name="documentTypes"
                    control={control}
                    defaultValue={[]}
                    rules={{ required: true }}
                    render={props =>
                        <Select options={documentTypes} isMulti
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable={true}
                            {...props} />} />

                <Button type="submit" color="primary">
                    Save
                </Button>
            </form>
        </div>
    )
} 
import React, { useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";

export const SearchDocumentType = ({ documentTypes, documentTypesToAdd }) => {

    const documentsTypeStored = useSelector(state => state.documents.documents)

    const [isLoading, setIsLoading] = useState(false)

    const formatSelectedValues = (docTypes) => {
        const documentTypes = docTypes.map(d => d.obj)
        documentTypesToAdd(documentTypes)
    }

    if (documentTypes) {
        return (
            <div>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isLoading={isLoading}
                    isSearchable={true}
                    defaultValue={documentsTypeStored.map(d => ({ value: d.id, label: d.description, obj: d }))}
                    key="id"
                    isMulti
                    name="color"
                    options={documentTypes}
                    onChange={(dt) => formatSelectedValues(dt)}
                />
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}
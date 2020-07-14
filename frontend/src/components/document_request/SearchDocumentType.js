import React, { useState } from "react";
import Select from "react-select";

export const SearchDocumentType = ({ documentTypes, documentTypesToAdd }) => {

    const [isLoading, setIsLoading] = useState(false)

    const formatSelectedValues = (docTypes) => {
        const documentTypes = docTypes.map(d => d.value)
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
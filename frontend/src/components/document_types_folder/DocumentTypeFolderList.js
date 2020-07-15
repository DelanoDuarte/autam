import React, { useEffect, useState } from "react";
import { DocumentTypeFolderAPI } from "../../services/DocumentTypeFolderAPI";
import DocumentTypeFolderGrid from "./DocumentTypeFolderGrid";


export const DocumentTypeFolderList = (props) => {

    const [docTypesFolders, setDocTypeFolders] = useState([])

    useEffect(() => {
        DocumentTypeFolderAPI.findAll()
            .then(data => {
                setDocTypeFolders(data)
            })
    }, [])

    return (
        <div>
            <DocumentTypeFolderGrid documents={docTypesFolders} />
        </div>
    )
}
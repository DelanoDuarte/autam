import { Box, Checkbox, Collapse, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, Paper, TableCell, TableRow, TextField, Typography } from "@material-ui/core";
import { Edit, KeyboardArrowDown, KeyboardArrowUp, MoreVert, SendOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { DocumentRequestAPI } from "../../services/DocumentRequestAPI";
import { GridComponent } from "../utils/GridComponent";


const ActionIconButton = () => {

    const ITEM_HEIGHT = 48;
    const actionOptions = [
        { label: 'Edit', icon: <Edit fontSize="small" /> },
        { label: 'Send Confirmation Email', icon: <SendOutlined fontSize="small"/> }
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton
                color="primary"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVert />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "auto",
                    },
                }}
            >   
            {actionOptions.map((option) => (
                <MenuItem key={option.label}>
                    <ListItemIcon>
                        {option.icon}
                    </ListItemIcon>
                    <Typography variant="inherit">{option.label}</Typography>
                </MenuItem>
                
            ))}              
            </Menu>
        </React.Fragment>
    )
}

const DocumentRequestRow = ({documentRequest, selectedDocumentRequests, onSelectRowChange}) => {

    const [collapse, setCollapse] = useState(false)
    const [selectedRows, setSelectedRows] = useState([])

    const isSelected = () => selectedRows.indexOf(documentRequest) !== -1;

    useEffect(() => {
        setSelectedRows(selectedDocumentRequests)
    }, [selectedDocumentRequests])

    const onSelectRow = (e, docRequest) => {
        const selectedIndex = selectedRows.indexOf(docRequest);
        let newSelected = [];

        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selectedRows, docRequest);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
          newSelected = newSelected.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selectedRows.slice(0, selectedIndex),
            selectedRows.slice(selectedIndex + 1),
          );
        }
        
        onSelectRowChange(newSelected)
    }

    return (
        <React.Fragment>
            <TableRow
                hover
                selected={isSelected()} 
                role="checkbox"
                aria-checked={isSelected()}
                tabIndex={-1} 
                key={documentRequest}>

                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setCollapse(!collapse)}>
                        {collapse ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell padding="checkbox">
                    <Checkbox
                        onChange={(event) => onSelectRow(event, documentRequest)}
                        checked={isSelected()}
                        inputProps={{ 'aria-labelledby': isSelected() }} />
                </TableCell>
                <TableCell component="th" scope="row">
                    {documentRequest.name == null ? (
                        <p> - </p>
                    ) : (
                            <div>
                                {documentRequest.name}
                            </div>
                        )}
                </TableCell>
                <TableCell component="th" scope="row">
                    {documentRequest.createdDate}
                </TableCell>
                <TableCell component="th" scope="row">
                    {documentRequest.documentRequestType.name}
                </TableCell>
                <TableCell>
                    <ActionIconButton />
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={collapse} timeout="auto" unmountOnExit style={{padding: "10px"}}>
                        <PersonInfoDocumentRequest documentRequest={documentRequest} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

const PersonInfoDocumentRequest = ({documentRequest}) => {
    return (
        <Paper elevation={3} style={{padding: "30px"}}>
            <Typography variant="h6" gutterBottom component="div">
                Person
            </Typography>
            <Box margin={1}>
                <Box margin={1}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}  >
                            <TextField value={`${documentRequest.person.name}  ${documentRequest.person.surname}`}
                                label="Name" disabled />
                        </Grid>
                        <Grid item xs={12} sm={4}  >
                            <TextField value={`${documentRequest.person.email}`}
                                label="Email" disabled />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    )
}

export const DocumentRequestList = (props) => {

    const [documentRequests, setDocumentRequests] = useState([])
    const [selectedDocumentRequests, setSelectedDocumentRequests] = useState([])

    const selectAllRows = () => {
        if(selectedDocumentRequests.length > 0) {
            setSelectedDocumentRequests([])
            return;
        }
        setSelectedDocumentRequests([...documentRequests])
    };

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
                    <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedDocumentRequests.length > 0}
                          onChange={() => selectAllRows()}
                          inputProps={{ 'aria-labelledby': 'select all requests' }} />
                    </TableCell>
                    <TableCell> <b>Document Request Name</b> </TableCell>
                    <TableCell> <b>Created at</b> </TableCell>
                    <TableCell> <b>Type</b> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            }> 
                {documentRequests.map((documentRequest) => (
                    <DocumentRequestRow key={documentRequest.id} 
                                        documentRequest={documentRequest} 
                                        selectedDocumentRequests={selectedDocumentRequests} 
                                        onSelectRowChange={(selected) => setSelectedDocumentRequests(selected)}/>
                ))}
            </GridComponent>
        </div>
    )
}
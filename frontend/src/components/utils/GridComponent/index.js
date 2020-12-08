import { makeStyles, Paper, Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export const GridComponent = ({ children, columns }) => {

    const classes = useStyles()

    if (children && columns) {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            {columns}
                        </TableHead>
                        <TableBody>
                            {children}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    } else {
        return (
            <div>
                <p>No data to show.</p>
            </div>
        )
    }
}
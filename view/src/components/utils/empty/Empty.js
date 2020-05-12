import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import EmptyBox from "../../../images/icons/empty-box.png";

export const Empty = ({ children }) => {
    return (
        <div>
            <Grid container justify="center">
                <Avatar src={EmptyBox} variant="square" />
            </Grid>
            <Grid container justify="center">
                <Typography variant="overline" display="block">
                    No Data
                </Typography>
            </Grid>
        </div>
    )
}
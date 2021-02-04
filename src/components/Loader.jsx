import React from 'react';
import {CircularProgress} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const Loader = () => {
    return (
        <Grid justify="center" container>
            <CircularProgress />
        </Grid>
    );
};

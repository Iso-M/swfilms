import React from 'react';
import {yellow} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    yellow: {
        color: yellow[700],
        Width: 950,
        marginTop: 20,
        marginBottom: 5,
    },
}));
export const Header = () => {
    const classes = useStyles();
    return (
        <Typography component="div">
            <Box textAlign="center" m={1} fontWeight="fontWeightBold" className={classes.yellow} component="h1">
                Star Wars Movies
            </Box>
        </Typography>
    );
};

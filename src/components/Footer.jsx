import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Footer = () => {
    return (
        <Typography component="div">
            <Box textAlign="center" m={1} fontWeight="fontWeightBold" component="h3">
                Israel Mor - ZoomIn Front End Task &nbsp;&nbsp; 4/2/2021
            </Box>
        </Typography>
    );
};

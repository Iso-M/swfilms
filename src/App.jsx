import Grid from '@material-ui/core/Grid';
import React from 'react';
import {Films} from './components/Films';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} container direction="column" justify="space-between" alignItems="center">
            <Header />
            <Films />
            <Footer />
        </Grid>
    );
};
export default App;

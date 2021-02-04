import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Divider, makeStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {red} from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
    root: {
        width: 300,
        height: 300,
        margin: 8,
    },
    openingCrawl: {
        overflowY: 'scroll',
        height: 180,
    },
    redBackground: {
        color: red[500],
    },
}));

export const FilmBox = ({title, openingCrawl, toogleFavorites, isSelected}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Divider></Divider>

                <Typography className={classes.openingCrawl} variant="body2" color="textSecondary" component="p">
                    {openingCrawl}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites" onClick={() => toogleFavorites(title)}>
                    <FavoriteIcon className={isSelected ? classes.redBackground : undefined} />
                </IconButton>
            </CardActions>
        </Card>
    );
};

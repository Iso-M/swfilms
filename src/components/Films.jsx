import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {swapiApi} from 'api/swapiApi';
import Grid from '@material-ui/core/Grid';
import {FilmBox} from './FilmItem';
import {Loader} from './Loader';
import {makeStyles, Typography} from '@material-ui/core';
import {FavoriteBox} from './FavoriteItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as favoritesStorage from 'data/favorites';

const useStyles = makeStyles(() => ({
    filmsContainer: {
        margin: '0 auto',
        maxWidth: 950,
    },
}));

export const Films = () => {
    const [films, setFilms] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const classes = useStyles();
    useEffect(() => {
        swapiApi.getAllFilms().then(films => {
            setFilms(films.results);
        });

        const favoritesFromLocalStorage = favoritesStorage.getFavorites();
        if (favoritesFromLocalStorage !== null && favoritesFromLocalStorage !== '') {
            setFavorites(favoritesFromLocalStorage.split(','));
        }
    }, []);

    const toogleFavorites = useCallback(
        selectedTitle => {
            const isFavoriteExist = favorites.some(title => title === selectedTitle);

            const newFavorites = isFavoriteExist
                ? favorites.filter(title => title !== selectedTitle)
                : [...favorites, selectedTitle];

            setFavorites(newFavorites);
            favoritesStorage.setFavorites(newFavorites.toString());
        },
        [favorites],
    );

    const isFilmSelected = useCallback(
        titleToCheck => {
            return favorites.some(title => title === titleToCheck);
        },
        [favorites],
    );

    const filmsUi = useMemo(
        () =>
            films &&
            films.map((film, index) => {
                return (
                    <FilmBox
                        key={index}
                        title={film.title}
                        openingCrawl={film.opening_crawl}
                        toogleFavorites={toogleFavorites}
                        isSelected={isFilmSelected(film.title)}
                    />
                );
            }),
        [films, isFilmSelected, toogleFavorites],
    );

    const favoritesUi = useMemo(
        () =>
            favorites.map((title, index) => {
                return <FavoriteBox key={index} title={title} toogleFavorites={toogleFavorites} />;
            }),
        [favorites, toogleFavorites],
    );

    if (!films) {
        return <Loader />;
    }

    return (
        <Grid direction="row" container>
            <Grid item xs={10} container direction="row" className={classes.filmsContainer}>
                {filmsUi}
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Your favorite movie list:
                        </Typography>
                        {(!favoritesUi || favoritesUi.length === 0) && (
                            <>
                                <br></br>
                                <Typography gutterBottom component="h3">
                                    Nothing to show here yet :)
                                </Typography>
                            </>
                        )}
                        {favoritesUi && <List>{favoritesUi}</List>}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

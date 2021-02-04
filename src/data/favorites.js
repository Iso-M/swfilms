const favoriteMovieKey = 'fmk';

export const getFavorites = () => {
    return localStorage.getItem(favoriteMovieKey);
};

export const setFavorites = favorites => {
    return localStorage.setItem(favoriteMovieKey, favorites);
};

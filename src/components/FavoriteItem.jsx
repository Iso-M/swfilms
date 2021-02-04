import React from 'react';

import {ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export const FavoriteBox = ({title, toogleFavorites}) => {
    return (
        <ListItem>
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
                <IconButton onClick={() => toogleFavorites(title)} edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

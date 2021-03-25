import React from 'react';
import { MovieList } from '../movie-components';

const MoviesPage = ({ history }) => {
    return(            
        <MovieList 
            onItemSelected={(itemId) => {        
                history.push(`${itemId}`);
            }}
        />
    );
}

export default MoviesPage;
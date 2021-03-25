import React from 'react';
import ItemList from '../item-list';
import { withData, withApiService } from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderView = ({ name, img }) => {
    return (
        <div>
            <span className="item-list-name">{name}</span>
            <img className="item-list-img" src={`http://image.tmdb.org/t/p/w185${img}`} alt="poster" />
        </div>
    )
};

const mapPersonMathodsToProps = (movieService) => {
    return {
        getData: movieService.getPopularPeople
    }
};

const mapMovieMathodsToProps = (movieService) => {
    return {
        getData: movieService.getPopularMovies
    }
};

const PersonList = withApiService(
    withData(
        withChildFunction(ItemList, renderView)
    ),
    mapPersonMathodsToProps
);

const MovieList = withApiService(
    withData(
        withChildFunction(ItemList, renderView)
    ),
    mapMovieMathodsToProps
);

export {
    PersonList,
    MovieList
}


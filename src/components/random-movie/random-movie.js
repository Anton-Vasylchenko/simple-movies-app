import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TheMovieService from '../../services/TheMovieService';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import Row from '../row';

import './random-movie.css';

export default class RandomMovie extends Component {

    static defaultProps = {
        updateInterval: 4000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    };

    movieService = new TheMovieService();

    state = {
        movie: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updateMovie();
        this.interval = setInterval(this.updateMovie, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onMovieLoaded = (movies) => {
        const movie = movies[Math.floor(Math.random() * movies.length)];
        this.setState({
            movie,
            loading: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updateMovie = () => {
        this.movieService.getPopularMovies()
            .then(this.onMovieLoaded)
            .catch(this.onError);
    }

    render() {
        const { movie, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMsg = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <MovieView movie={movie} /> : null;

        return (
            <div className="random-movie jumbotron rounded mt-3">
                {errorMsg}
                {spinner}
                {content}
            </div>
        )
    }
}


const MovieView = ({ movie }) => {

    const { id, name, releaseDate, rating, img, overview } = movie;

    const moviePoster = (
        <img className="poster-img rounded" src={`http://image.tmdb.org/t/p/w300${img}`} alt="img" />
    );

    const movieInfo = (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <span className="text-info">   Name:  </span>
                <span>
                    <a href={`movies/${id}`}>
                        {name}
                    </a>
                </span>
            </li>
            <li className="list-group-item">
                <span className="text-info">Release Date: </span>
                <span>{releaseDate}</span>
            </li>
            <li className="list-group-item">
                <span className="text-info">Rating: </span>
                <span>{rating}</span>
            </li>
            <li className="list-group-item">
                <span className="text-info">Overview: </span>
                <span>{overview}</span>
            </li>
        </ul>
    )

    return (
        <React.Fragment>
            <h3> Popular daily movies </h3>
            <Row
                leftElement={moviePoster} rightElement={movieInfo}
                leftCol={3} rightCol={9}
            />
        </React.Fragment>
    )
}



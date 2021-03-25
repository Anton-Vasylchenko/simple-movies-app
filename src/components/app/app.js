import React, { Component } from 'react';
import TheMovieService from '../../services/TheMovieService';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import { MoviesServiceProvider } from '../movies-service-context'
import { PeoplePage, MoviesPage, HomePage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "bootswatch/dist/darkly/bootstrap.min.css";
import './app.css';
import { MovieDetails } from '../movie-components';

export default class App extends Component {

  movieServices = new TheMovieService();

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <ErrorBoundry>
        <MoviesServiceProvider value={this.movieServices} >
          <Router>
            <div>
              <Header />
              <Switch>

                <Route path="/" component={HomePage} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/movies" exact component={MoviesPage} />
                <Route path="/movies/:id"
                  render={({ match }) => {
                    return <MovieDetails itemId={match.params.id} />
                  }}
                />

                <Route path="/build/index.html" component={HomePage} />
                <Route render={() => (<h2>Page not found</h2>)} />
              </Switch>

            </div>
          </Router>
        </MoviesServiceProvider>
      </ErrorBoundry>
    )
  }
}



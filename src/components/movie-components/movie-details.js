import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withApiService } from '../hoc-helper';

const MovieDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label="Name" />
            <Record field="releaseDate" label="Release date" />
            <Record field="rating" label="Rating" />
            <Record field="overview" label="Overview" />
        </ItemDetails>
    );
}

const mapMethodsToProps = (movieService) => {
    return {
        getData: movieService.getMovie
    }
}

export default withApiService(MovieDetails, mapMethodsToProps);
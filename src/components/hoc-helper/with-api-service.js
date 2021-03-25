import React from 'react';
import { MoviesServiceConsumer } from '../movies-service-context';

const withApiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <MoviesServiceConsumer>
                {
                    (movieServices) => {
                        const serviceProps = mapMethodsToProps(movieServices);
                        return (
                            <Wrapped {...props} {...serviceProps} /> 
                        )
                    }
                }
            </MoviesServiceConsumer>
        )
    };
};

export default withApiService;
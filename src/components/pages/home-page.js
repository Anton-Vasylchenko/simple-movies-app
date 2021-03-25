import React from 'react';
import RandomMovie from '../random-movie';

const HomePage = () => {
    return (
        <div>
            <h2 className="jumbotron text-center">Welcome to Movies App!</h2>
            <RandomMovie />
        </div>
    )
}

export default HomePage;
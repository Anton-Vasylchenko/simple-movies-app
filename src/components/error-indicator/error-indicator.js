import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="jumbotron rounded error-indicator">
            <span className="boom"> BOOM! </span>
            <span>
                Sorry, something has gone wrong!
            </span>
            <span> (but we already fix it!) </span>
        </div>
    )
}

export default ErrorIndicator;
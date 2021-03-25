import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ leftElement, rightElement, leftCol=6, rightCol=6 }) => {

    const classNameLeft = `col-md-${leftCol}`;
    const classNameRight = `col-md-${rightCol}`;

    return(
        <div className="row mb-2">
            <div className={classNameLeft}>
                { leftElement }
            </div>
            <div className={classNameRight}>
                { rightElement }
            </div>        
        </div>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;
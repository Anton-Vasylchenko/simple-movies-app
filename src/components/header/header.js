import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/people/">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies/">Movies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
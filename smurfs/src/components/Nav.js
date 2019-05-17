import React from 'react';
import {Route, Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>View Village</Link>
            <Link to='/form'>Add Smurf</Link>
        </nav>
    );
};

export default Nav;
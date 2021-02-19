import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2>404 - Page not found</h2>
        <Link to="/">Go to startpage</Link>
    </div>
);

export default NotFound;
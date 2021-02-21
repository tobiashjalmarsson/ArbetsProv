import React from 'react';
import {Link} from 'react-router-dom';
/*
If we have received an invalid url for the page this component will be displayed.
It only contains a link back to the starting page.
*/
const NotFound = () => (
    <div>
        <h2>404 - Page not found</h2>
        <Link to="/">Go to startpage</Link>
    </div>
);

export default NotFound;
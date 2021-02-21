import React from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

/*
Component responsible for rendering the header used on all pages.
If a prop subtitle is passed in, that will be rendered, if no prop is passed in we only render "City Pop".
The subtitle can be accessed with: props.subtitle
*/
const Header = (props) => {
    return (
            <div className="header">
                <div className="container">
                    <Link to="/"
                    className="link"
                    >
                        <h1>City Pop</h1>
                    </Link>
                    {props.subtitle && <h2>{props.subtitle}</h2>}
                </div>
            </div>
        
    );
}

export default Header;